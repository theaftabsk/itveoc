"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, Loader2, ArrowUpRight, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

interface Testimonial {
  id: string;
  name: string;
  title: string;
  feedback: string;
  avatar: string;
}

interface Partner {
  id: string;
  name: string;
  logo: string;
}

export default function AdminPanel({ userName }: { userName: string | null | undefined }) {
  const [activeTab, setActiveTab] = useState<"testimonials" | "partners">("testimonials");
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  // Forms states
  const [testForm, setTestForm] = useState({ id: "", name: "", title: "", feedback: "" });
  const [partnerForm, setPartnerForm] = useState({ id: "", name: "", logo: "" });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      const resT = await fetch("/api/testimonials");
      const dataT = await resT.json();
      if (Array.isArray(dataT)) setTestimonials(dataT);

      const resP = await fetch("/api/partners");
      const dataP = await resP.json();
      if (Array.isArray(dataP)) setPartners(dataP);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  // --- Testimonial CRUD ---
  async function saveTestimonial(e: React.FormEvent) {
    e.preventDefault();
    const method = isEditing ? "PUT" : "POST";
    try {
      const res = await fetch("/api/testimonials", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testForm),
      });
      if (res.ok) {
        setTestForm({ id: "", name: "", title: "", feedback: "" });
        setIsEditing(false);
        fetchData();
      }
    } catch (e) {
      console.error(e);
    }
  }

  async function deleteTestimonial(id: string) {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;
    try {
      const res = await fetch("/api/testimonials", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) fetchData();
    } catch (e) {
      console.error(e);
    }
  }

  function startEditTestimonial(t: Testimonial) {
    setTestForm({ id: t.id, name: t.name, title: t.title, feedback: t.feedback });
    setIsEditing(true);
  }

  // --- Partner CRUD ---
  async function savePartner(e: React.FormEvent) {
    e.preventDefault();
    const method = isEditing ? "PUT" : "POST";
    try {
      const res = await fetch("/api/partners", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(partnerForm),
      });
      if (res.ok) {
        setPartnerForm({ id: "", name: "", logo: "" });
        setIsEditing(false);
        fetchData();
      }
    } catch (e) {
      console.error(e);
    }
  }

  async function deletePartner(id: string) {
    if (!confirm("Are you sure you want to delete this client?")) return;
    try {
      const res = await fetch("/api/partners", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) fetchData();
    } catch (e) {
      console.error(e);
    }
  }

  function startEditPartner(p: Partner) {
    setPartnerForm({ id: p.id, name: p.name, logo: p.logo });
    setIsEditing(true);
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-10 font-mono text-black">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 border-b-4 border-black pb-8">
        <div>
          <span className="stamp border-black text-black mb-3">Management Console</span>
          <h1 className="font-serif text-5xl md:text-6xl italic text-black">Admin Panel</h1>
          <p className="text-xs text-black/50 mt-2">Logged in as: <strong className="text-black">{userName}</strong></p>
        </div>
        <button
          onClick={() => signOut()}
          className="brut-btn bg-red-500 text-white px-6 py-3 text-xs uppercase tracking-widest inline-flex items-center gap-2 border-4 border-black"
          style={{ boxShadow: "4px 4px 0 #000" }}
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>

      {/* Tabs Row */}
      <div className="flex gap-4 mb-10">
        <button
          onClick={() => { setActiveTab("testimonials"); setIsEditing(false); }}
          className={`font-mono text-xs font-bold uppercase tracking-widest px-6 py-4 border-4 border-black transition-all ${activeTab === "testimonials" ? "bg-yellow-400 text-black translate-x-1 translate-y-1" : "bg-white hover:bg-black hover:text-white"}`}
          style={{ boxShadow: activeTab === "testimonials" ? "none" : "4px 4px 0 #000" }}
        >
          Testimonials (Clients Say)
        </button>
        <button
          onClick={() => { setActiveTab("partners"); setIsEditing(false); }}
          className={`font-mono text-xs font-bold uppercase tracking-widest px-6 py-4 border-4 border-black transition-all ${activeTab === "partners" ? "bg-yellow-400 text-black translate-x-1 translate-y-1" : "bg-white hover:bg-black hover:text-white"}`}
          style={{ boxShadow: activeTab === "partners" ? "none" : "4px 4px 0 #000" }}
        >
          Our Clients (Logos & Names)
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 border-4 border-black bg-white">
          <Loader2 className="w-8 h-8 animate-spin text-black mb-4" />
          <p className="text-sm font-bold uppercase tracking-widest text-black/50">Fetching Database Records...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left/Middle: Editor list (takes 2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {activeTab === "testimonials" ? (
              <>
                <h3 className="font-serif text-3xl italic mb-4">Active Testimonials ({testimonials.length})</h3>
                <div className="flex flex-col gap-6">
                  {testimonials.map((t) => (
                    <div key={t.id} className="border-4 border-black bg-white p-6 relative" style={{ boxShadow: "6px 6px 0 #000" }}>
                      <p className="font-serif text-3xl italic text-black/10 mb-2">"</p>
                      <p className="text-sm leading-relaxed mb-6 font-medium">"{t.feedback}"</p>
                      <div className="flex items-center justify-between border-t-2 border-black/10 pt-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-black text-yellow-400 flex items-center justify-center font-display text-lg border-2 border-black shrink-0">
                            {t.avatar}
                          </div>
                          <div>
                            <p className="font-bold text-sm uppercase tracking-wider">{t.name}</p>
                            <p className="text-xs text-black/50">{t.title}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => startEditTestimonial(t)}
                            className="p-2 border-2 border-black bg-yellow-400 hover:bg-black hover:text-yellow-400 transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteTestimonial(t.id)}
                            className="p-2 border-2 border-black bg-red-500 text-white hover:bg-black hover:text-red-500 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h3 className="font-serif text-3xl italic mb-4">Active Partners/Clients ({partners.length})</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {partners.map((p) => (
                    <div key={p.id} className="border-4 border-black bg-white p-6 flex flex-col justify-between" style={{ boxShadow: "6px 6px 0 #000" }}>
                      <div className="min-h-[100px] flex items-center justify-center border-2 border-dashed border-black/15 bg-black/[0.02] p-4 mb-4">
                        {p.logo ? (
                          <img
                            src={p.logo}
                            alt={p.name}
                            className="max-h-12 w-auto object-contain filter grayscale"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                          />
                        ) : (
                          <span className="font-display text-xl tracking-wider uppercase text-black/40">
                            [Text: {p.name}]
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between items-center border-t-2 border-black/10 pt-4">
                        <div>
                          <p className="font-bold text-sm uppercase tracking-wider">{p.name}</p>
                          <p className="text-[10px] text-black/40 uppercase tracking-widest mt-1">
                            {p.logo ? "Logo Image" : "Text Display"}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => startEditPartner(p)}
                            className="p-2 border-2 border-black bg-yellow-400 hover:bg-black hover:text-yellow-400 transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deletePartner(p.id)}
                            className="p-2 border-2 border-black bg-red-500 text-white hover:bg-black hover:text-red-500 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

          </div>

          {/* Right: Form Panel (takes 1 col) */}
          <div className="flex flex-col">
            <div className="border-4 border-black bg-[#F5F0E8] p-8 sticky top-28" style={{ boxShadow: "6px 6px 0 #000" }}>
              <span className="stamp border-black text-black mb-4">Editor Console</span>
              <h3 className="font-serif text-3xl italic mb-6">
                {isEditing ? "Edit Entry" : "Create Entry"}
              </h3>

              {activeTab === "testimonials" ? (
                <form onSubmit={saveTestimonial} className="flex flex-col gap-5">
                  <input type="hidden" value={testForm.id} />
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/60">Client Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. John Doe"
                      value={testForm.name}
                      onChange={(e) => setTestForm({ ...testForm, name: e.target.value })}
                      className="bg-white border-2 border-black p-3 font-mono text-sm outline-none focus:bg-yellow-50 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/60">Client Title/Company *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Founder, TechFlow"
                      value={testForm.title}
                      onChange={(e) => setTestForm({ ...testForm, title: e.target.value })}
                      className="bg-white border-2 border-black p-3 font-mono text-sm outline-none focus:bg-yellow-50 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/60">Client Feedback *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Enter testimonial text here..."
                      value={testForm.feedback}
                      onChange={(e) => setTestForm({ ...testForm, feedback: e.target.value })}
                      className="bg-white border-2 border-black p-3 font-mono text-sm outline-none resize-none focus:bg-yellow-50 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="brut-btn bg-black text-yellow-400 py-4 text-xs uppercase tracking-widest w-full mt-4 flex items-center justify-center gap-2"
                  >
                    Save Testimonial <Plus className="w-4 h-4" />
                  </button>

                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => {
                        setTestForm({ id: "", name: "", title: "", feedback: "" });
                        setIsEditing(false);
                      }}
                      className="brut-btn bg-white text-black py-3 text-xs uppercase tracking-widest w-full border-black"
                    >
                      Cancel Edit
                    </button>
                  )}
                </form>
              ) : (
                <form onSubmit={savePartner} className="flex flex-col gap-5">
                  <input type="hidden" value={partnerForm.id} />

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/60">Client/Brand Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. IQRA Model Mission"
                      value={partnerForm.name}
                      onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                      className="bg-white border-2 border-black p-3 font-mono text-sm outline-none focus:bg-yellow-50 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/60">Logo Image URL (Optional)</label>
                    <input
                      type="url"
                      placeholder="e.g. https://domain.com/logo.png"
                      value={partnerForm.logo}
                      onChange={(e) => setPartnerForm({ ...partnerForm, logo: e.target.value })}
                      className="bg-white border-2 border-black p-3 font-mono text-sm outline-none focus:bg-yellow-50 transition-colors"
                    />
                    <p className="text-[9px] text-black/40 leading-normal">
                      Leave empty to display the brand name styled inside a Neo-Brutalist block.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="brut-btn bg-black text-yellow-400 py-4 text-xs uppercase tracking-widest w-full mt-4 flex items-center justify-center gap-2"
                  >
                    Save Client <Plus className="w-4 h-4" />
                  </button>

                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => {
                        setPartnerForm({ id: "", name: "", logo: "" });
                        setIsEditing(false);
                      }}
                      className="brut-btn bg-white text-black py-3 text-xs uppercase tracking-widest w-full border-black"
                    >
                      Cancel Edit
                    </button>
                  )}
                </form>
              )}

            </div>
          </div>

        </div>
      )}

    </div>
  );
}

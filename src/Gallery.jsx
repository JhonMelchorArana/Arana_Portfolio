import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

// ✅ LOGO IMAGE
import logo from "./assets/logo.jpg";

// ✅ Your photos (use your existing assets)
import gl1 from "./assets/gl1.jpg";
import gl2 from "./assets/gl2.jpg";
import gl3 from "./assets/gl3.jpg";
import gl4 from "./assets/gl4.jpg";
import gl5 from "./assets/gl5.jpg";

export default function Gallery() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const galleryImages = useMemo(() => [gl1, gl2, gl3, gl4, gl5], []);
  const total = galleryImages.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const goPrev = () => setCurrentIndex((i) => (i - 1 + total) % total);
  const goNext = () => setCurrentIndex((i) => (i + 1) % total);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (!selectedImage) {
        if (e.key === "ArrowLeft") goPrev();
        if (e.key === "ArrowRight") goNext();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImage, total]);

  const currentImage = galleryImages[currentIndex];

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col pt-24">
      {/* ================= HEADER (FIXED NAVBAR) ================= */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
          {/* ✅ bigger navbar padding (same as Skills.jsx) */}
          <div className="bg-[#02091a]/95 border border-white/10 rounded-full px-6 py-4 flex items-center justify-between gap-4 shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
            {/* LOGO (bigger) */}
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="w-12 h-12 rounded-full object-cover border border-white/20"
                draggable={false}
              />
            </div>

            {/* DESKTOP NAV (bigger text + gap) */}
            <div className="hidden md:flex flex-1 justify-center">
              <nav className="flex items-center gap-10 text-[15px] font-medium text-slate-100/80">
                <Link to="/#about" className="hover:text-sky-400 transition">
                  About me
                </Link>
                <Link to="/skills" className="hover:text-sky-400 transition">
                  Skills
                </Link>

                <Link to="/gallery" className="text-sky-400 transition">
                  Gallery
                </Link>

                <Link to="/projects" className="hover:text-sky-400 transition">
                  Project
                </Link>
              </nav>
            </div>

            {/* SOCIAL + MOBILE */}
            <div className="flex items-center gap-4">
              {/* ✅ bigger icon button (same as Skills.jsx) */}
              <a
                href="https://www.facebook.com/share/1CyR5NM77w/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hidden md:flex w-11 h-11 items-center justify-center rounded-full bg-sky-500 shadow-[0_10px_30px_rgba(56,189,248,0.6)] hover:bg-sky-400 transition text-lg"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/je_emm0?igsh=cHdja2UyNGNkYzZ5&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hidden md:flex w-11 h-11 items-center justify-center rounded-full bg-sky-500 shadow-[0_10px_30px_rgba(56,189,248,0.6)] hover:bg-sky-400 transition text-lg"
              >
                <FaInstagram />
              </a>

              <a
                href="https://t.me/Pusaaa12"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="hidden md:flex w-11 h-11 items-center justify-center rounded-full bg-sky-500 shadow-[0_10px_30px_rgba(56,189,248,0.6)] hover:bg-sky-400 transition text-lg"
              >
                <FaTelegramPlane />
              </a>

              {/* ✅ bigger hamburger (same as Skills.jsx) */}
              <button
                className="md:hidden flex flex-col gap-[4px] items-end bg-[#020617] rounded-md px-2 py-1 border border-white/10"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                type="button"
              >
                <span className="w-7 h-[2.5px] bg-white" />
                <span className="w-6 h-[2.5px] bg-white" />
                <span className="w-5 h-[2.5px] bg-white" />
              </button>
            </div>
          </div>
        </div>

        {/* ✅ MOBILE MENU (bigger text same as Skills.jsx) */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#02091a]">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4 text-base font-medium">
              <Link to="/#about" onClick={() => setMobileOpen(false)}>
                About me
              </Link>
              <Link to="/skills" onClick={() => setMobileOpen(false)}>
                Skills
              </Link>
              <Link
                to="/gallery"
                onClick={() => setMobileOpen(false)}
                className="text-sky-400"
              >
                Gallery
              </Link>
              <Link to="/projects" onClick={() => setMobileOpen(false)}>
                Project
              </Link>
            </div>
          </div>
        )}
      </header>
      
      {/* ================= MAIN ================= */}
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 lg:px-0 py-14">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              My <span className="text-sky-400">Gallery</span>
            </h1>
            <p className="text-slate-300 mt-2">
              Use the arrows to switch photos. Click a thumbnail to select.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#020b1e] shadow-[0_18px_45px_rgba(0,0,0,0.55)]">
            <div className="pointer-events-none absolute -top-32 -left-32 w-[380px] h-[380px] rounded-full bg-sky-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -right-24 w-[420px] h-[420px] rounded-full bg-sky-400/10 blur-3xl" />

            <div className="relative p-5 sm:p-8 lg:p-10 ">
              <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-8 items-stretch">
                <aside className="order-2 lg:order-1">
                  <div className="text-xs text-slate-300/70 tracking-[0.18em] uppercase mb-4">
                    People also viewed
                  </div>

                  <div className="flex lg:flex-col gap-3 flex-wrap lg:flex-nowrap">
                    {galleryImages.map((img, idx) => {
                      const active = idx === currentIndex;

                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setCurrentIndex(idx)}
                          className={`relative w-[74px] h-[74px] lg:w-[86px] lg:h-[86px] rounded-2xl overflow-hidden border transition
                            ${
                              active
                                ? "border-sky-400 shadow-[0_10px_30px_rgba(56,189,248,0.25)]"
                                : "border-white/10 hover:border-sky-400/40"
                            }`}
                          aria-label={`Select photo ${idx + 1}`}
                        >
                          <img
                            src={img}
                            alt={`Thumb ${idx + 1}`}
                            className="w-full h-full object-cover"
                            draggable={false}
                          />
                          <div className="absolute inset-0 bg-black/10" />
                        </button>
                      );
                    })}
                  </div>
                </aside>

                <div className="order-1 lg:order-2 ">
                  <div className="mx-auto max-w-[620px]">
                    <div className="rounded-3xl bg-[#264b66] rounded-2xl py-10 border border-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.4)] overflow-hidden">
                      <div className="px-6 pt-7 text-center">
                        <div className="text-2xl sm:text-3xl font-extrabold tracking-wide">
                          MY <span className="text-sky-400">PHOTO</span> GALLERY
                        </div>
                        <div className="text-[11px] uppercase tracking-[0.22em] text-slate-300/70 mt-2">
                          ultra essential
                        </div>
                      </div>

                      <div className="relative px-6 pb-3 pt-5">
                        <button
                          type="button"
                          onClick={goPrev}
                          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/15 transition"
                          aria-label="Previous"
                        >
                          <span className="text-2xl leading-none text-white/80">
                            ‹
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={goNext}
                          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/15 transition"
                          aria-label="Next"
                        >
                          <span className="text-2xl leading-none text-white/80">
                            ›
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setSelectedImage(currentImage)}
                          className="block w-full"
                          aria-label="Open current photo"
                        >
                          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/20">
                            <img
                              src={currentImage}
                              alt={`Gallery ${currentIndex + 1}`}
                              className="w-full h-[250px] sm:h-[320px] object-cover"
                              draggable={false}
                            />
                            <div className="absolute inset-0 bg-black/10" />
                          </div>
                        </button>
                      </div>

                      <div className="px-6 pb-7">
                        <div className="grid grid-cols-3 gap-3">
                          {[0, 1, 2].map((n) => {
                            const idx = (currentIndex + n) % total;
                            return (
                              <button
                                key={n}
                                type="button"
                                onClick={() => setCurrentIndex(idx)}
                                className="rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/40 transition p-2 flex items-center justify-center"
                                aria-label={`Quick select ${idx + 1}`}
                              >
                                <div className="w-full h-10 rounded-xl overflow-hidden">
                                  <img
                                    src={galleryImages[idx]}
                                    alt={`Quick ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                    draggable={false}
                                  />
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        <div className="mt-4 flex justify-center gap-2">
                          {galleryImages.map((_, i) => (
                            <span
                              key={i}
                              className={`h-2 rounded-full transition-all ${
                                i === currentIndex
                                  ? "w-6 bg-sky-400"
                                  : "w-2 bg-white/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 bg-white/10 border border-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold hover:bg-white/20 transition"
                aria-label="Close"
                type="button"
              >
                ✕
              </button>

              <div className="rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl">
                <img
                  src={selectedImage}
                  alt="Popup"
                  className="w-full max-h-[80vh] object-contain bg-black"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

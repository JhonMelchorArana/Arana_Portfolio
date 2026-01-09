import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

/* ================== LOGO ================== */
import logo from "./assets/logo.jpg";

/* ================== PROJECT 1 (3 PHOTOS) ================== */
import p1_1 from "./assets/p1_1.jpg";
import p1_2 from "./assets/p1_2.jpg";
import p1_3 from "./assets/p1_3.jpg";

/* ================== PROJECT 2 (8 PHOTOS) ================== */
import p2_1 from "./assets/p2_1.jpg";
import p2_2 from "./assets/p2_2.jpg";
import p2_3 from "./assets/p2_3.jpg";
import p2_4 from "./assets/p2_4.jpg";
import p2_5 from "./assets/p2_5.jpg";
import p2_6 from "./assets/p2_6.jpg";
import p2_7 from "./assets/p2_7.jpg";
import p2_8 from "./assets/p2_8.jpg";

/* ================== PROJECT 3 (6 PHOTOS) ================== */
import p3_1 from "./assets/p3_1.jpg";
import p3_2 from "./assets/p3_2.jpg";
import p3_3 from "./assets/p3_3.jpg";
import p3_4 from "./assets/p3_4.jpg";
import p3_5 from "./assets/p3_5.jpg";
import p3_6 from "./assets/p3_6.jpg";

export default function Project() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [activeProject, setActiveProject] = useState(null);
  const [activePhoto, setActivePhoto] = useState(null);

  const projects = useMemo(
    () => [
      {
        title: "Laya Airline Management System",
        image: p1_1,
        desc: "A Manage Airline Booking built in using C# and MySQL.",
        details:
          "This project was developed as a group effort during my second year of college. It is an airline management system designed to handle flight bookings and efficiently manage passenger records.",
        tech: ["C#", "MySQL"],
        photos: [p1_1, p1_2, p1_3],
      },
      {
        title: "Claudy Nails E-commerce website",
        image: p2_1,
        desc: "An e-commerce website built with HTML, CSS, JavaScript, PHP, and MySQL.",
        details:
          "This project was completed as a group during my third year of college, where I contributed to the system’s design and functionality. It is a web-based system developed for a nail salon business that manages service bookings, client information, customer–salon communication, and product listings.",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        photos: [p2_1, p2_2, p2_3, p2_4, p2_5, p2_6, p2_7, p2_8],
      },
      {
        title:
          "Capstone Project / Automated Attendance report and SMS Alerts for ICA-EAST Campus",
        image: p3_1,
        desc: "An ID Scanner with Automated Attendance report and SMS Alerts built with Laravel Framework, PHP, Tailwind CSS and MySQL",
        details:
          "This capstone project was completed as a group during our fourth year of college and was developed for ICA East Campus. It is an automated attendance and registration system for students, administrators, and faculty. The system integrates an SMS alert feature that notifies parents when students tap their IDs upon entering or leaving the school premises. The project combines both software and hardware components.",
        tech: ["Laravel Framework", "PHP", "Tailwind CSS", "MySQL"],
        photos: [p3_1, p3_2, p3_3, p3_4, p3_5, p3_6],
      },
    ],
    []
  );

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setActiveProject(null);
        setActivePhoto(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // ✅ lock body scroll when popup is open
  useEffect(() => {
    if (activeProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const openProject = (p) => {
    setActiveProject(p);
    setActivePhoto(p.photos?.[0] || p.image);
  };

  const closeAll = () => {
    setActiveProject(null);
    setActivePhoto(null);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col">
      {/* ================= HEADER (FIXED NAVBAR) ================= */}
      <header className="fixed top-0 left-0 w-full z-40">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-0">
          <div className="bg-[#02091a]/95 border border-white/10 rounded-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3 sm:gap-4 shadow-[0_18px_45px_rgba(0,0,0,0.6)] backdrop-blur">
            {/* ✅ LOGO IMAGE (CIRCLE) */}
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-white/20"
              />
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex flex-1 justify-center">
              <nav className="flex items-center gap-10 text-[15px] font-medium text-slate-100/80">
                <Link to="/#about" className="hover:text-sky-400 transition">
                  About me
                </Link>
                <Link to="/skills" className="hover:text-sky-400 transition">
                  Skills
                </Link>
                <Link to="/gallery" className="hover:text-sky-400 transition">
                  Gallery
                </Link>
                <Link to="/projects" className="text-sky-400 transition">
                  Project
                </Link>
              </nav>
            </div>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <a
                href="https://www.facebook.com/share/1CyR5NM77w/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex w-11 h-11 items-center justify-center rounded-full bg-sky-500 shadow-[0_10px_30px_rgba(56,189,248,0.6)] hover:bg-sky-400 transition text-lg"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/je_emm0"
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex w-11 h-11 items-center justify-center rounded-full bg-sky-500 shadow-[0_10px_30px_rgba(56,189,248,0.6)] hover:bg-sky-400 transition text-lg"
              >
                <FaInstagram />
              </a>
              <a
                href="https://t.me/Pusaaa12"
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex w-11 h-11 items-center justify-center rounded-full bg-sky-500 shadow-[0_10px_30px_rgba(56,189,248,0.6)] hover:bg-sky-400 transition text-lg"
              >
                <FaTelegramPlane />
              </a>

              {/* MOBILE TOGGLE */}
              <button
                className="md:hidden flex flex-col gap-[4px] items-end bg-[#020617] rounded-md px-2 py-2 border border-white/10"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <span className="w-7 h-[2.5px] bg-white" />
                <span className="w-6 h-[2.5px] bg-white" />
                <span className="w-5 h-[2.5px] bg-white" />
              </button>
            </div>
          </div>
        </div>

        {/* ✅ MOBILE MENU (full width, comfy padding) */}
        {mobileOpen && (
          <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-0 mt-3 md:hidden">
            <div className="bg-[#02091a]/95 border border-white/10 rounded-2xl p-4 backdrop-blur">
              <nav className="flex flex-col gap-4 text-base font-medium text-slate-100/85">
                <Link
                  to="/#about"
                  className="hover:text-sky-400 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  About me
                </Link>
                <Link
                  to="/skills"
                  className="hover:text-sky-400 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Skills
                </Link>
                <Link
                  to="/gallery"
                  className="hover:text-sky-400 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  to="/projects"
                  className="text-sky-400 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Project
                </Link>

                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="https://www.facebook.com/share/1CyR5NM77w/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-sky-500 shadow-[0_10px_30px_rgba(56,189,248,0.6)] hover:bg-sky-400 transition text-lg"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/je_emm0"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-sky-500 shadow-[0_10px_30px_rgba(56,189,248,0.6)] hover:bg-sky-400 transition text-lg"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://t.me/Pusaaa12"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Telegram"
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-sky-500 shadow-[0_10px_30px_rgba(56,189,248,0.6)] hover:bg-sky-400 transition text-lg"
                  >
                    <FaTelegramPlane />
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* ✅ Spacer so content doesn't hide behind fixed navbar */}
      <div className="h-[84px] sm:h-[96px] md:h-[92px]" />

      {/* ================= MAIN ================= */}
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-10 sm:py-14 lg:py-16">
          <h1 className="text-2xl sm:text-4xl font-extrabold">
            My <span className="text-sky-400">Projects</span>
          </h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-sm sm:text-base">
            Click a project card to view details and other photos.
          </p>

          {/* PROJECT CARDS */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {projects.map((p) => (
              <button
                key={p.title}
                onClick={() => openProject(p)}
                className="text-left bg-[#020b1e] border border-white/10 rounded-3xl overflow-hidden hover:border-sky-400/40 transition"
              >
                <div className="h-44 sm:h-48 overflow-hidden border-b border-white/10">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold">
                    {p.title}
                  </h3>
                  <p className="text-slate-300 text-sm mt-2 line-clamp-2">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-100/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ================= POPUP ================= */}
        {activeProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-3 sm:px-4 py-6 sm:py-8"
            onClick={closeAll}
          >
            <div
              className="relative w-full max-w-6xl rounded-2xl overflow-hidden border border-white/15 bg-[#020b1e] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeAll}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition"
                aria-label="Close"
                title="Close"
              >
                ✕
              </button>

              {/* ✅ Make modal scrollable on small screens */}
              <div className="max-h-[86vh] sm:max-h-[88vh] overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left: FULL SHOW IMAGE (NO CROP) */}
                  <div className="relative bg-black/20 flex items-center justify-center">
                    <div className="w-full h-[240px] sm:h-[360px] md:h-[420px] lg:h-[540px] p-3 sm:p-4">
                      <img
                        src={activePhoto || activeProject.image}
                        alt={activeProject.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[11px] tracking-[0.18em] uppercase text-slate-100/80">
                      Full View
                    </div>
                  </div>

                  {/* Right: Details + Thumbnails */}
                  <div className="bg-[#0b1224]/55 p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-extrabold">
                      {activeProject.title}
                    </h2>

                    <p className="text-slate-300 mt-3 leading-relaxed text-sm sm:text-base">
                      {activeProject.details}
                    </p>

                    <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
                      {activeProject.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-100/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Thumbnails (scroll for 8 photos) */}
                    <div className="mt-6 sm:mt-7">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold text-slate-100/90">
                          Other Photos ({activeProject.photos.length})
                        </h3>
                        <span className="text-xs text-slate-300">
                          Tap a thumbnail
                        </span>
                      </div>

                      {/* ✅ Better thumb grid for phone/tablet */}
                      <div className="mt-3 max-h-[220px] sm:max-h-[240px] overflow-y-auto pr-1">
                        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-3">
                          {activeProject.photos.map((img, idx) => {
                            const current = activePhoto || activeProject.image;
                            const isActive = current === img;

                            return (
                              <button
                                key={`${activeProject.title}-thumb-${idx}`}
                                onClick={() => setActivePhoto(img)}
                                className={`group relative rounded-2xl overflow-hidden border transition ${
                                  isActive
                                    ? "border-sky-400/70"
                                    : "border-white/10 hover:border-sky-400/40"
                                }`}
                                title="View photo"
                              >
                                <div className="aspect-[4/3] bg-black/20">
                                  <img
                                    src={img}
                                    alt={`Other ${idx + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-300"
                                  />
                                </div>

                                {isActive && (
                                  <div className="absolute inset-0 ring-2 ring-sky-400/30 rounded-2xl pointer-events-none" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 mt-4 sm:mt-5">
                        Tip: Press{" "}
                        <span className="text-slate-100 font-semibold">ESC</span>{" "}
                        to close.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* end scrollable */}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

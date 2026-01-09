import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import profileImg from "./assets/profile.png";
import logoImg from "./assets/logo.jpg";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import aboutVideo from "./assets/aboutme.mp4";

// ✅ HOBBIES MEDIA: 2 VIDEOS + 2 IMAGES
import hobbyVideo1 from "./assets/hobby1.mp4";
import hobbyVideo2 from "./assets/hobby2.mp4";
import hobbyImage3 from "./assets/hobby3.png";
import hobbyImage4 from "./assets/hobby4.png";

import Skills from "./Skills.jsx";
import Gallery from "./Gallery.jsx";
import Project from "./Project.jsx";



function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  // ✅ Smooth scroll helper (works for navbar + buttons)
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ✅ Close popup on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedMedia(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // ✅ Close mobile menu on scroll
  useEffect(() => {
    const onScroll = () => {
      if (mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  const hobbyMedia = useMemo(
    () => [
      { type: "video", src: hobbyVideo1, label: "Hobby Video 1" },
      { type: "video", src: hobbyVideo2, label: "Hobby Video 2" },
      { type: "image", src: hobbyImage3, label: "Hobby Image 3" },
      { type: "image", src: hobbyImage4, label: "Hobby Image 4" },
    ],
    []
  );
  

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col">
      {/* ✅ NAVBAR (FIXED) */}
      <header className="z-50">
        <div className="fixed top-0 left-0 right-0 z-50">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-0">
            <div className="bg-[#02091a]/95 border border-white/10 rounded-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3 shadow-[0_18px_45px_rgba(0,0,0,0.6)] backdrop-blur">
              {/* LEFT – LOGO */}
              <div className="flex items-center gap-2">
                <img
                  src={logoImg}
                  alt="Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-white/10"
                  draggable={false}
                />
              </div>

              {/* CENTER NAV (DESKTOP/TABLET) */}
              <div className="hidden md:flex flex-1 justify-center">
                <nav className="flex items-center gap-6 lg:gap-10 text-[14px] lg:text-[15px] font-medium text-slate-100/80">
                  {/* ✅ Smooth scroll instead of default jump */}
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId("about");
                    }}
                    className="hover:text-sky-400 transition-colors"
                  >
                    About me
                  </a>

                  <Link to="/skills" className="hover:text-sky-400 transition-colors">
                    Skills
                  </Link>

                  <Link to="/gallery" className="hover:text-sky-400 transition-colors">
                    Gallery
                  </Link>

                  <Link to="/projects" className="hover:text-sky-400 transition-colors">
                    Project
                  </Link>
                </nav>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Desktop icons */}
                <a
                  href="https://www.facebook.com/share/1CyR5NM77w/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="hidden md:flex w-10 h-10 lg:w-11 lg:h-11 items-center justify-center rounded-full bg-sky-500 shadow-[0_10px_30px_rgba(56,189,248,0.6)] hover:bg-sky-400 transition text-lg"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/je_emm0?igsh=cHdja2UyNGNkYzZ5&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hidden md:flex w-10 h-10 lg:w-11 lg:h-11 items-center justify-center rounded-full bg-sky-500 shadow-[0_10px_30px_rgba(56,189,248,0.6)] hover:bg-sky-400 transition text-lg"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://t.me/Pusaaa12"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                  className="hidden md:flex w-10 h-10 lg:w-11 lg:h-11 items-center justify-center rounded-full bg-sky-500 shadow-[0_10px_30px_rgba(56,189,248,0.6)] hover:bg-sky-400 transition text-lg"
                >
                  <FaTelegramPlane />
                </a>

                {/* Mobile toggle */}
                <button
                  className="md:hidden flex flex-col gap-[4px] items-end bg-[#020617] rounded-md px-2 py-2 border border-white/10"
                  onClick={() => setMobileOpen((s) => !s)}
                  aria-label="Toggle menu"
                >
                  <span className="w-7 h-[2.5px] bg-white" />
                  <span className="w-6 h-[2.5px] bg-white" />
                  <span className="w-5 h-[2.5px] bg-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Mobile dropdown */}
        {mobileOpen && (
          <div className="fixed top-[76px] sm:top-[88px] left-0 right-0 z-40 md:hidden border-t border-white/10 bg-[#02091a]">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4 text-base font-medium">
              {/* ✅ Smooth scroll + close menu */}
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  scrollToId("about");
                }}
                className="py-1"
              >
                About me
              </a>

              <Link to="/skills" onClick={() => setMobileOpen(false)} className="py-1">
                Skills
              </Link>

              <Link to="/gallery" onClick={() => setMobileOpen(false)} className="py-1">
                Gallery
              </Link>

              <Link to="/projects" onClick={() => setMobileOpen(false)} className="py-1">
                Project
              </Link>

              <div className="flex items-center gap-4 mt-2">
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
                  href="https://www.instagram.com/je_emm0?igsh=cHdja2UyNGNkYzZ5&utm_source=qr"
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
            </div>
          </div>
        )}
      </header>

      {/* ✅ Top padding so content isn't hidden by navbar */}
      <main className="flex-1 flex flex-col pt-24 sm:pt-28 md:pt-32">
        {/* HERO SECTION */}
        <section className="relative flex-1 overflow-hidden bg-gradient-to-r from-[#020617] via-[#020b1e] to-[#04142c]">
          {/* Glow backgrounds */}
          <div className="pointer-events-none absolute inset-0 opacity-50">
            <div className="absolute -left-40 top-[-80px] w-80 h-80 rounded-full bg-sky-600/20 blur-3xl" />
            <div className="absolute right-[-60px] bottom-[-40px] w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 lg:px-0 py-12 sm:py-16 flex flex-col md:flex-row items-center gap-10 md:gap-12">
            {/* LEFT TEXT */}
            <div className="flex-1 flex flex-col gap-8 text-center md:text-left">
              <div className="space-y-3">
                <p className="inline-block text-[11px] tracking-[0.3em] uppercase text-sky-400 bg-white/5 px-4 py-1 rounded-full border border-sky-500/40 w-max mx-auto md:mx-0">
                  Hi, I am
                </p>

                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                    <span className="block text-white">Jeem Araña</span>
                    <span className="block text-sky-400">An IT College Student</span>
                  </h1>
                </div>

                <p className="text-sm text-slate-300 max-w-md mx-auto md:mx-0">
                  passionate about UI/UX design and multimedia, willing to take on various IT-related roles and
                  committed to delivering high-quality, user-friendly solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center md:items-start gap-5 justify-center md:justify-start">
                <div className="flex gap-3">
                  {/* ✅ Smooth scroll on READ MORE */}
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId("about");
                    }}
                    className="h-10 px-5 rounded-full bg-sky-500 text-[11px] tracking-[0.2em] uppercase flex items-center justify-center font-semibold shadow-[0_10px_30px_rgba(56,189,248,0.6)] hover:bg-sky-400 transition"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative w-72 sm:w-96 lg:w-[420px]">
                <div className="absolute inset-0 rounded-[36px] bg-gradient-to-b from-sky-500/40 via-[#020617] to-[#020617] blur-[1px]" />
                <div className="relative rounded-[36px] overflow-hidden border border-sky-500/40 bg-[#020617]">
                  <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
                </div>

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
                  <div className="w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] rounded-full border border-slate-700/70" />
                  <div className="absolute w-[240px] h-[240px] sm:w-[260px] sm:h-[260px] rounded-full border border-slate-700/40" />
                  <div className="absolute w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-full border border-slate-700/30" />
                </div>

                <div className="absolute -left-6 top-10 w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 blur-[1px]" />
                <div className="absolute -right-4 bottom-16 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 blur-[1px]" />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        {/* ✅ scroll-mt makes the section stop below the fixed navbar */}
        <section
          id="about"
          className="scroll-mt-28 md:scroll-mt-32 w-full bg-[#020617] text-white py-16 sm:py-20 border-t border-white/10"
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-0">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] rounded-full bg-teal-600 p-5 sm:p-6 flex items-center justify-center">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-100">
                    <video className="w-full h-full object-cover" autoPlay loop muted playsInline preload="auto">
                      <source src={aboutVideo} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-sky-400 tracking-[0.25em] uppercase text-sm font-semibold text-center md:text-left">
                  | About Me |
                </h2>
                <h1 className="text-3xl sm:text-4xl font-semibold text-center md:text-left">
                  Hi I'm <span className="text-sky-400">Jhon Melchor A. Araña</span>
                </h1>

                <p className="text-slate-300 leading-relaxed text-sm sm:text-[15px] text-center md:text-left">
                  An IT graduate passionate about UI/UX design and multimedia, with a strong interest in creating
                  visually appealing and user-friendly digital experiences. I am eager to take on various roles within
                  the IT field where I can apply my technical knowledge, creativity, and problem-solving skills. I
                  approach every project with dedication and attention to detail, always striving to deliver
                  high-quality results that meet both user needs and project goals.
                  <br />
                  <br />
                  With a solid foundation in information technology, I am committed to continuous learning and adapting
                  to new tools and technologies. My strengths include designing intuitive interfaces, enhancing user
                  experiences, and working with multimedia content to bring ideas to life. I am motivated, flexible,
                  and ready to contribute to a team-oriented environment while growing professionally in the IT
                  industry
                </p>

                <div className="w-full h-[2px] bg-white/20 mt-6" />

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-3 justify-center md:justify-start">
                  <Link
                    to="/skills"
                    className="px-8 py-2 rounded-full border border-sky-400 bg-[#020617] hover:bg-sky-500/20 transition text-sm text-center"
                  >
                    Skills
                  </Link>

                  <Link
                    to="/gallery"
                    className="px-8 py-2 rounded-full border border-sky-400 bg-[#020617] hover:bg-sky-500/20 transition text-sm text-center"
                  >
                    Gallery
                  </Link>

                  <Link
                    to="/projects"
                    className="px-8 py-2 rounded-full border border-sky-400 bg-[#020617] hover:bg-sky-500/20 transition text-sm text-center"
                  >
                    Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOBBIES SECTION */}
        <section className="w-full bg-[#020617] text-white py-14 sm:py-16 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 lg:px-0">
            <div className="flex items-center gap-2 mb-10">
              <div className="w-3 h-3 rounded-full bg-sky-400" />
              <div className="flex-1 h-[2px] bg-white/40" />
              <div className="w-3 h-3 rounded-full bg-sky-400" />
            </div>

            <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
              <div className="w-full md:w-[260px]">
                <h2 className="text-2xl sm:text-3xl font-semibold italic mb-4 text-center md:text-left">
                  My <span className="text-sky-400">Hobbies:</span>
                </h2>
                <div className="bg-[#020b1e] border border-white/15 rounded-3xl px-8 py-6 text-lg leading-relaxed text-slate-100 text-center md:text-left">
                  <p className="mb-2">Dancing</p>
                  <p className="mb-2">Singing</p>
                  <p className="mb-2">Acting</p>
                  <p>Drawing</p>
                </div>
              </div>

              <div className="flex-1 flex justify-center md:justify-start gap-6 sm:gap-8 flex-wrap mt-2 md:mt-0">
                {hobbyMedia.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedMedia(item)}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-slate-800 border border-white/10 shadow-lg hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-sky-400"
                    aria-label={`Open ${item.label}`}
                  >
                    {item.type === "video" ? (
                      <video muted playsInline preload="metadata" className="w-full h-full object-cover">
                        <source src={item.src} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={item.src} alt={item.label} className="w-full h-full object-cover" loading="lazy" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="w-full bg-[#020617] text-white py-14 sm:py-16 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 lg:px-0">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-sky-400" />
              <div className="flex-1 h-[2px] bg-white/40" />
              <div className="w-3 h-3 rounded-full bg-sky-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold italic mb-8 text-center md:text-left">
              My <span className="text-sky-400">Education:</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-[260px]">
                <div className="bg-[#020b1e] border border-white/15 rounded-3xl px-8 py-8 text-lg leading-relaxed text-slate-100 text-center md:text-left">
                  <p className="mb-3">Elementary</p>
                  <p className="mb-3">High School</p>
                  <p className="mb-3">Senior High</p>
                  <p>College</p>
                </div>
              </div>

              <div className="flex-1 space-y-5 text-[15px] sm:text-base md:mt-10 text-center md:text-left">
                <p className="font-semibold text-slate-100">Tropical Village Elementary School</p>
                <p className="font-semibold text-slate-100">Tropical Village National High School</p>
                <p className="font-semibold text-slate-100">Philippines Christian University&nbsp;Dasma</p>
                <p className="font-semibold text-slate-100">Cavite State University - Silang Campus</p>
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <section id="achievements" className="w-full bg-[#020617] text-white py-14 sm:py-16 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 lg:px-0">
            <div className="flex justify-center md:justify-end mb-6">
              <h2 className="text-3xl sm:text-4xl font-semibold italic text-center md:text-right">
                My <span className="text-sky-400">Achievements:</span>
              </h2>
            </div>

            <div className="bg-[#020b1e] border-[3px] sm:border-[4px] border-white/80 rounded-[32px] px-6 sm:px-12 py-8 sm:py-14 shadow-[0_18px_45px_rgba(0,0,0,0.5)]">
              <h1 className="text-slate-100 text-sm sm:text-lg text-center">
                CISCO PACKET TRACER EXAM | CISCO NETWORK ACADEMY, 2025
              </h1>
              <p className="text-slate-100 text-sm sm:text-lg text-center">
                I successfully completed the network module in Cisco Networking Academy to improve my skills in
                network configuration.
              </p>

              <br />

              <h1 className="text-slate-100 text-sm sm:text-lg text-center">
                SOCIAL MEDIA MANAGER | INDAK SILANGAN DANCE COLLECTIVE
              </h1>
              <p className="text-slate-100 text-sm sm:text-lg text-center">
                Managed all social media platforms by creating engaging content, handling page updates, promoting
                events and performances, and maintaining a consistent online presence to grow audience reach and
                engagement.
              </p>

              <br />

              <h1 className="text-slate-100 text-sm sm:text-lg text-center">WITH HIGH HONORS | SENIOR HIGH SCHOOL</h1>
              <p className="text-slate-100 text-sm sm:text-lg text-center">
                Graduated with High Honors in TVL ICT – Computer Programming, demonstrating strong academic performance,
                discipline, and a strong commitment to excellence throughout senior high school.
              </p>

              <br />

              <h1 className="text-slate-100 text-sm sm:text-lg text-center">
                COLLEGE GRADUATE | CAVITE STATE UNIVERSITY - SILANG CAMPUS
              </h1>
              <p className="text-slate-100 text-sm sm:text-lg text-center">
                Bachelor of Science in Information Technology graduate with skills in programming, UI/UX design, and
                multimedia, focused on building intuitive and engaging digital solutions.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ✅ POPUP OVERLAY */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-4 border-white/30 shadow-2xl bg-black">
              {selectedMedia.type === "video" ? (
                <video
                  key={selectedMedia.src}
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                >
                  <source src={selectedMedia.src} type="video/mp4" />
                </video>
              ) : (
                <img key={selectedMedia.src} src={selectedMedia.src} alt="Popup" className="w-full h-full object-cover" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/projects" element={<Project />} />
    </Routes>
  );
}

export default App;

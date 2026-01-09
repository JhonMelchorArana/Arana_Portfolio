import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

// ✅ Logo Image
import logo from "./assets/logo.jpg";

// ✅ Photography images
import photo1 from "./assets/photo1.jpg";
import photo2 from "./assets/photo2.jpg";
import photo3 from "./assets/photo3.jpg";
import photo4 from "./assets/photo4.jpg";
import photo5 from "./assets/photo5.jpg";

export default function Skills() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const skills = [
    { name: "HTML / CSS", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React JS", level: 75 },
    { name: "Responsive Design", level: 88 },
    { name: "Basic UI / UX", level: 70 },
  ];

  const photographyImages = [photo1, photo2, photo3, photo4, photo5];

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col">
      {/* ================= HEADER (FIXED NAVBAR) ================= */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-0">
          <div className="bg-[#02091a]/95 backdrop-blur border border-white/10 rounded-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3 sm:gap-4 shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
            {/* LOGO */}
            <div className="flex items-center gap-3 shrink-0">
              <img
                src={logo}
                alt="Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-white/20"
              />
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex flex-1 justify-center">
              <nav className="flex items-center gap-7 lg:gap-10 text-[15px] font-medium text-slate-100/80">
                <Link to="/#about" className="hover:text-sky-400 transition">
                  About me
                </Link>
                <Link to="/skills" className="text-sky-400">
                  Skills
                </Link>
                <Link to="/gallery" className="hover:text-sky-400 transition">
                  Gallery
                </Link>
                <Link to="/projects" className="hover:text-sky-400 transition">
                  Project
                </Link>
              </nav>
            </div>

            {/* SOCIAL + MOBILE */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <a
                href="https://www.facebook.com/share/1CyR5NM77w/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex w-11 h-11 items-center justify-center rounded-full bg-sky-500 hover:bg-sky-400 transition text-lg"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/je_emm0"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex w-11 h-11 items-center justify-center rounded-full bg-sky-500 hover:bg-sky-400 transition text-lg"
              >
                <FaInstagram />
              </a>

              <a
                href="https://t.me/Pusaaa12"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex w-11 h-11 items-center justify-center rounded-full bg-sky-500 hover:bg-sky-400 transition text-lg"
              >
                <FaTelegramPlane />
              </a>

              {/* MOBILE BUTTON */}
              <button
                className="md:hidden flex flex-col gap-[4px] p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Open menu"
              >
                <span className="w-7 h-[2.5px] bg-white" />
                <span className="w-6 h-[2.5px] bg-white" />
                <span className="w-5 h-[2.5px] bg-white" />
              </button>
            </div>
          </div>

          {/* MOBILE MENU (same width as navbar container) */}
          {mobileOpen && (
            <div className="md:hidden mt-3 bg-[#02091a]/95 backdrop-blur border border-white/10 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 flex flex-col gap-4 text-base font-medium">
                <Link to="/#about" onClick={() => setMobileOpen(false)}>
                  About me
                </Link>
                <Link
                  to="/skills"
                  onClick={() => setMobileOpen(false)}
                  className="text-sky-400"
                >
                  Skills
                </Link>
                <Link to="/gallery" onClick={() => setMobileOpen(false)}>
                  Gallery
                </Link>
                <Link to="/projects" onClick={() => setMobileOpen(false)}>
                  Project
                </Link>

                {/* Social icons on mobile */}
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/share/1CyR5NM77w/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-sky-500 hover:bg-sky-400 transition text-lg"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="https://www.instagram.com/je_emm0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-sky-500 hover:bg-sky-400 transition text-lg"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://t.me/Pusaaa12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-sky-500 hover:bg-sky-400 transition text-lg"
                  >
                    <FaTelegramPlane />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="flex-1 pt-28 sm:pt-32">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-10 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            My <span className="text-sky-400">Skills</span>
          </h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-sm sm:text-base">
            A quick overview of my current technical skill levels.
          </p>

          {/* SKILLS GRID */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-[#020b1e] border border-white/10 rounded-3xl p-5 sm:p-6 hover:border-sky-400/40 transition"
              >
                <div className="flex justify-between items-center mb-3 gap-3">
                  <p className="font-semibold text-sm sm:text-base">
                    {skill.name}
                  </p>
                  <span className="text-xs sm:text-sm text-sky-400 font-medium shrink-0">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sky-500 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* PHOTOGRAPHY */}
          <div className="mt-14 sm:mt-16 ">
            <div className="bg-[#264b66] rounded-2xl py-8 sm:py-10">
              <h2 className="text-white text-lg sm:text-xl font-semibold mb-6 sm:mb-8 px-6 sm:px-8">
                Photography
              </h2>

              {/* ✅ Centered responsive grid (no overflow on phones) */}
              <div className="px-4 sm:px-6 ml-30">
                <div className="grid grid-cols-3 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
                  {photographyImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className="focus:outline-none"
                      type="button"
                    >
                      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full border-2 border-white p-[3px] hover:scale-105 transition">
                        <img
                          src={img}
                          alt="Photography"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* OTHER SKILLS */}
          <div className="mt-14 sm:mt-16">
            <div className="flex justify-start sm:justify-end mb-4">
              <h2 className="text-2xl sm:text-4xl font-extrabold italic">
                My <span className="text-sky-400 not-italic">Other Skills:</span>
              </h2>
            </div>

            <div className="border-2 border-white/80 rounded-[28px] bg-[#02091a]/40 px-5 sm:px-10 py-8 sm:py-10">
              <p className="text-center text-white text-sm sm:text-lg leading-relaxed">
                I have strong{" "}
                <span className="text-sky-400 font-semibold">
                  Communication
                </span>
                , skilled{" "}
                <span className="text-sky-400 font-semibold">
                  Photo and Video Editing
                </span>
                , and a solid understanding of{" "}
                <span className="text-sky-400 font-semibold">
                  Network Fundamentals
                </span>
                .
              </p>
            </div>
          </div>
        </section>

        {/* IMAGE POPUP */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6">
            <div className="relative w-full max-w-3xl">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-2 sm:-right-4 bg-white text-black rounded-full w-9 h-9 flex items-center justify-center text-lg font-bold hover:bg-gray-200"
                aria-label="Close"
              >
                ×
              </button>

              <img
                src={selectedImage}
                alt="Popup"
                className="w-full max-w-[92vw] max-h-[80vh] object-contain rounded-lg mx-auto"
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { PROFILE } from "../data/content";

const initials = PROFILE.name
  .split(" ")
  .map((n) => n[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* subtle dotted grid + animated gradient blobs */}
      <div className="absolute inset-0 dot-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -top-20 -right-10 w-96 h-96 rounded-full bg-accent-soft/40 blur-3xl animate-blob" />
      <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:4s]" />

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT — text */}
        <div>
          <p className="reveal inline-flex items-center gap-2 text-accent font-semibold tracking-wide mb-4">
            <Sparkles size={16} />
            {PROFILE.role} · {PROFILE.location}
          </p>
          <h1 className="reveal reveal-d1 text-4xl sm:text-6xl font-extrabold leading-[1.05]">
            Designing experiences that feel{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-soft to-accent animate-gradient">
              effortless
            </span>
            .
          </h1>
          <p className="reveal reveal-d2 mt-6 text-lg sm:text-xl text-ink/70 max-w-xl">
            {PROFILE.tagline}
          </p>

          <div className="reveal reveal-d3 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-cream px-7 py-3 font-medium hover:bg-accent transition-colors"
            >
              View my work
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3 font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* RIGHT — designer image */}
        <div className="reveal reveal-d2 relative flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            {/* rotating gradient ring */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-accent via-accent-soft to-transparent blur-md animate-spin-slow opacity-70" />

            {/* photo / placeholder */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-xl animate-float">
              {PROFILE.photo ? (
                <img
                  src={PROFILE.photo}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-accent to-accent-soft text-white">
                  <span className="text-6xl font-extrabold">{initials}</span>
                  <span className="mt-2 text-sm opacity-80">Add your photo</span>
                </div>
              )}
            </div>

            {/* floating badges */}
            {PROFILE.experience && (
              <div className="absolute -left-6 top-6 bg-white rounded-2xl shadow-lg px-4 py-3 animate-float-slow">
                <p className="text-xl font-extrabold text-accent leading-none">
                  {PROFILE.experience.value}
                </p>
                <p className="text-[11px] text-ink/60">{PROFILE.experience.label}</p>
              </div>
            )}
            <div className="absolute -right-4 bottom-8 bg-white rounded-2xl shadow-lg px-4 py-2 animate-float [animation-delay:1.5s]">
              <p className="text-sm font-bold">🎨 Figma</p>
            </div>
            <div className="absolute -bottom-3 left-10 bg-ink text-cream rounded-full shadow-lg px-4 py-2 flex items-center gap-2 animate-float-slow [animation-delay:2.5s]">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium">Available for work</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#work"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink/40 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
};

export default Hero;

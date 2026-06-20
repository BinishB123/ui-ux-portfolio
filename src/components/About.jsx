import { ABOUT, SKILLS } from "../data/content";

const About = () => {
  return (
    <section id="about" className="px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
        {/* Left: text */}
        <div className="reveal">
          <p className="text-accent font-semibold tracking-wide">About</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-2 mb-6">
            {ABOUT.heading}
          </h2>
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} className="text-ink/70 text-lg leading-relaxed mb-4">
              {p}
            </p>
          ))}

          {/* stats (hidden if none provided) */}
          {ABOUT.stats.length > 0 && (
            <div className="mt-8 grid grid-cols-3 gap-4">
              {ABOUT.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl sm:text-3xl font-extrabold text-accent">{s.value}</p>
                  <p className="text-sm text-ink/60 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: skills */}
        <div className="reveal lg:pt-16">
          <h3 className="font-bold text-lg mb-5">Skills & tools</h3>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="cursor-default rounded-full border border-ink/15 px-4 py-2 text-sm font-medium hover:bg-accent hover:border-accent hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

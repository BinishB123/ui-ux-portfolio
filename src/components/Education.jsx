import { GraduationCap, Award } from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "../data/content";

/**
 * Education + Certifications. Helpful for freshers/students.
 * Renders nothing if both lists are empty.
 */
const Education = () => {
  if (EDUCATION.length === 0 && CERTIFICATIONS.length === 0) return null;

  return (
    <section id="education" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="reveal mb-14">
        <p className="eyebrow">Background</p>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-3">
          Education & certifications
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Education */}
        {EDUCATION.length > 0 && (
          <div className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-accent/10 text-accent">
                <GraduationCap size={20} />
              </span>
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <div className="space-y-5">
              {EDUCATION.map((e, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-black/5 bg-white p-6 hover:border-accent hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-bold group-hover:text-accent transition-colors">
                      {e.degree}
                    </h4>
                    <span className="shrink-0 text-xs font-medium text-ink/50 bg-ink/5 px-3 py-1 rounded-full">
                      {e.year}
                    </span>
                  </div>
                  <p className="mt-1 text-ink/70">{e.school}</p>
                  {e.detail && <p className="mt-2 text-sm text-ink/55">{e.detail}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {CERTIFICATIONS.length > 0 && (
          <div className="reveal reveal-d1">
            <div className="flex items-center gap-3 mb-6">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-accent/10 text-accent">
                <Award size={20} />
              </span>
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {CERTIFICATIONS.map((c, i) => (
                <div
                  key={i}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white p-5 hover:border-accent hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <h4 className="font-semibold group-hover:text-accent transition-colors">
                      {c.name}
                    </h4>
                    <p className="text-sm text-ink/60">{c.issuer}</p>
                  </div>
                  <span className="shrink-0 text-xs font-medium text-ink/50 bg-ink/5 px-3 py-1 rounded-full">
                    {c.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;

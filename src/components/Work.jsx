import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/content";

const Work = () => {
  return (
    <section id="work" className="px-6 py-28 max-w-6xl mx-auto">
      <div className="reveal mb-16 max-w-2xl">
        <p className="eyebrow">Selected Work</p>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-3">
          Projects I'm proud of
        </h2>
        <p className="mt-4 text-ink/60 text-lg">
          A few highlights across web and mobile — from research and flows to
          polished, production-ready UI.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-7">
        {PROJECTS.map((project, i) => (
          <a
            key={project.title}
            href={project.url}
            className="reveal group relative rounded-[1.75rem] overflow-hidden bg-white ring-1 ring-black/5 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
          >
            {/* gradient preview with browser mockup */}
            <div
              className={`relative h-56 bg-gradient-to-br ${project.color} overflow-hidden`}
            >
              {/* fake browser dots */}
              <div className="absolute top-4 left-4 flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
              </div>
              {/* big index number */}
              <span className="absolute -bottom-4 right-4 text-[7rem] font-extrabold text-white/15 leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* hover overlay */}
              <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-2 bg-white text-ink font-semibold px-5 py-2.5 rounded-full translate-y-2 group-hover:translate-y-0 transition-transform">
                  View case study <ArrowUpRight size={16} />
                </span>
              </div>
            </div>

            <div className="p-7">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">
                {project.category}
              </p>
              <h3 className="text-xl font-bold mt-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-ink/65 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-ink/60 bg-ink/[0.04] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;

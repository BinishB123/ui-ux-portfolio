import { PROCESS } from "../data/content";

const Process = () => {
  return (
    <section id="process" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="reveal mb-14">
        <p className="eyebrow">How I work</p>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-3">My design process</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROCESS.map((p) => (
          <div
            key={p.step}
            className="reveal group relative rounded-3xl border border-black/5 bg-white p-7 hover:-translate-y-2 hover:border-accent hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 overflow-hidden"
          >
            {/* accent wash that fades in on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-4xl font-extrabold text-accent-soft group-hover:text-accent group-hover:scale-110 inline-block transition-all duration-300 origin-left">
              {p.step}
            </span>
            <h3 className="relative text-xl font-bold mt-4">{p.title}</h3>
            <p className="relative mt-2 text-ink/70">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;

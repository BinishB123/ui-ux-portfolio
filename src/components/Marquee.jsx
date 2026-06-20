import { SKILLS } from "../data/content";

/**
 * Infinite scrolling strip of skills. The list is duplicated so the
 * translateX(-50%) loop is seamless.
 */
const Marquee = () => {
  const items = [...SKILLS, ...SKILLS];

  return (
    <div className="bg-ink text-cream py-5 overflow-hidden">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((skill, i) => (
          <span key={i} className="flex items-center gap-10 text-lg font-semibold">
            {skill}
            <span className="text-accent-soft">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

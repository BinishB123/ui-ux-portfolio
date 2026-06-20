import { Mail } from "lucide-react";
import { PROFILE } from "../data/content";
import { InstagramIcon, LinkedInIcon } from "./SocialIcons";

// Map the `icon` string in content.js to an icon component
const ICONS = { Instagram: InstagramIcon, LinkedIn: LinkedInIcon };

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24 bg-white">
      <div className="reveal max-w-4xl mx-auto text-center rounded-[2rem] bg-ink text-cream px-6 sm:px-12 py-16">
        <p className="text-accent-soft font-semibold tracking-wide">Contact</p>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-3">
          Let's build something great together
        </h2>
        <p className="mt-4 text-cream/70 text-lg max-w-xl mx-auto">
          Have a project in mind or just want to say hi? I'm always open to new
          ideas, collaborations, and opportunities.
        </p>

        <a
          href={`mailto:${PROFILE.email}`}
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-accent text-white px-8 py-4 font-medium hover:bg-accent-soft transition-colors"
        >
          <Mail size={18} />
          {PROFILE.email}
        </a>

        <div className="mt-10 flex items-center justify-center gap-4">
          {PROFILE.socials.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <a
                key={s.label}
                href={s.url}
                aria-label={s.label}
                title={s.label}
                className="grid place-items-center w-11 h-11 rounded-full bg-white/10 text-cream hover:bg-accent hover:text-white hover:-translate-y-1 transition-all duration-200"
              >
                {Icon ? <Icon size={18} /> : s.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { PROFILE } from "../data/content";

const Footer = () => {
  return (
    <footer className="px-6 py-10 border-t border-black/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink/60">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
        <p>
          Designed & built with <span className="text-accent">♥</span> in {PROFILE.location}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

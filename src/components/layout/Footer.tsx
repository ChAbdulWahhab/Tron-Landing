import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto flex flex-col gap-12 py-16 px-8 border border-white/[0.05] rounded-[2.5rem] bg-white/[0.02] backdrop-blur-xl opacity-90 hover:opacity-100 transition-all duration-700 mb-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Contact */}
        <div className="flex flex-col gap-6">
          <div className="text-lg font-bold uppercase text-white">TRON SUITE</div>
          <p className="text-sm text-white/50 leading-relaxed">
            Premium desktop suite for automated QA testing and performance verification.
            <br />
            <span className="text-[10px] text-white/30 uppercase tracking-widest mt-2 block">
              Tron by <a href="https://www.systemset.co" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">Systemset Co.</a>
            </span>
          </p>
          <a href="mailto:ch.abdul.wahhab@proton.me" className="text-xs text-teal-400 hover:text-teal-300 transition-colors mt-2 font-medium">
            Contact
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6">
          <div className="text-xs font-bold uppercase text-white/70">Product</div>
          <div className="flex flex-col gap-3 text-sm font-medium text-white/40">
            <a href="/docs" className="hover:text-teal-400 transition-colors">Documentation</a>
            <a href="https://github.com/ChAbdulWahhab/Tron-QASuite" className="hover:text-teal-400 transition-colors">Github</a>
            <a href="https://github.com/ChAbdulWahhab/Tron-QASuite/issues" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">Report a Bug</a>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-6">
          <div className="text-xs font-bold uppercase text-white/70">Legal</div>
          <div className="flex flex-col gap-3 text-sm font-medium text-white/40">
            <Link to="/terms" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
          </div>
        </div>

        {/* Version */}
        <div className="flex flex-col gap-6">
          <div className="text-xs font-bold uppercase text-white/70">Status</div>
          <div className="flex flex-col gap-3 text-sm font-medium text-white/40">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]"></span>
              <span>Version 3.1.0-x64</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]"></span>
              <span>Build: Stable</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/[0.05]">
        <div className="text-[10px] font-bold uppercase text-white/30">
          © 2026 TRON SUITE · ALL RIGHTS RESERVED
        </div>
        <div className="text-[10px] font-bold uppercase text-white/30">
          DESIGNED BY CH. ABDUL WAHAB
        </div>
      </div>
    </footer>
  );
}

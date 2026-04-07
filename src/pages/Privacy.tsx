import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white font-geist selection:bg-teal-500/30">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-teal-400 transition-colors mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Back to Home</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-white/30 text-xs mb-16 tracking-widest uppercase font-bold">Last updated: April 2026</p>

          <div className="space-y-12 text-white/60 leading-relaxed font-normal text-sm md:text-base">
            <section>
              <h2 className="text-white font-bold text-lg mb-4 tracking-tight">1. Data Collection</h2>
              <p>Tron does not collect, store, or transmit any personal data. All analysis is performed locally on your machine. No data is sent to external servers or third-party providers.</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-4 tracking-tight">2. URLs You Test</h2>
              <p>URLs you enter are used solely to perform the requested QA analysis. They are not logged, stored, or shared in any way. Your testing history is private and volatile.</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-4 tracking-tight">3. No Tracking</h2>
              <p>Tron does not use cookies, analytics, or any third-party tracking tools. Your usage is entirely private and anonymous.</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-4 tracking-tight">4. Third-Party Services</h2>
              <p>This landing page loads Tailwind CSS via CDN for styling only — it does not collect or transmit user data. No external scripts are used beyond essential styling.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

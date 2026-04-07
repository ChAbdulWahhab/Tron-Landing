import { GLSLHills } from "@/components/ui/glsl-hills";
import { Download, Zap, Settings, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#080B0E] font-geist text-white">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GLSLHills speed={0.4} />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 max-w-6xl w-full">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
            <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">v2-x64 · Professional Edition</span>
          </div>
          
          <h1 className="font-black text-6xl md:text-8xl tracking-tighter leading-[1.1]">
             QA testing, <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">
              fully automated.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            The premium suite for rapid UI analysis and functional verification. Experience the future of QA.
          </p>

          {/* CTA Section */}
          <div className="pt-8">
            <a 
              href="/asset/setup/QTron-Installer-v2-x64.exe" 
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-teal-500 text-black font-black rounded-2xl hover:bg-teal-400 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(20,184,166,0.5)] active:scale-95"
            >
              <Download size={24} strokeWidth={3} />
              <span className="text-lg">Download for Windows</span>
            </a>
            <p className="mt-4 text-white/30 text-xs font-medium tracking-wide italic">
              Secure Installer · No Configuration Required
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
        >
          <FeatureCard 
            icon={<Zap className="text-teal-400" size={24} />}
            title="Lightning Fast"
            description="Headless automation delivers comprehensive test results in seconds, not minutes."
          />
          <FeatureCard 
            icon={<Settings className="text-teal-400" size={24} />}
            title="Zero Config"
            description="No scripts or YAML files. Simply enter your target URL and start testing immediately."
          />
          <FeatureCard 
            icon={<ShieldCheck className="text-teal-400" size={24} />}
            title="Deep Analysis"
            description="Full coverage of UI integrity, performance metrics, and core functional paths."
          />
        </motion.div>

        {/* Footer info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-white/20 text-xs font-bold uppercase tracking-[0.3em]"
        >
          © 2026 TRON SUITE · ALL RIGHTS RESERVED
        </motion.div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-teal-500/5 transition-all duration-300 text-left overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-teal-500/10 blur-[60px] group-hover:bg-teal-500/20 transition-all duration-500 rounded-full" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed font-medium">{description}</p>
      </div>
    </div>
  );
}

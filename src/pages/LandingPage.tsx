import DemoOne from "@/components/demo";
import Footer from "@/components/layout/Footer";
import { Zap, Settings, ShieldCheck, ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { FaWindows, FaApple } from "react-icons/fa";
import { motion } from "framer-motion";
import { APP_VERSION } from "../version";

export default function LandingPage() {
  const [macDropdownOpen, setMacDropdownOpen] = useState(false);

  useEffect(() => {
    document.title = "Tron — Automated QA Testing"
    const metaTitle = document.querySelector('meta[name="title"]')
    if (metaTitle) metaTitle.setAttribute("content", "Tron — Automated QA Testing")
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute("content", "Tron — Automated QA Testing")
    const twitterTitle = document.querySelector('meta[property="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute("content", "Tron — Automated QA Testing")
    
    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute("content", "https://tronq.vercel.app/branding/tron-landing-preview.png")
    const twitterImage = document.querySelector('meta[property="twitter:image"]')
    if (twitterImage) twitterImage.setAttribute("content", "https://tronq.vercel.app/branding/tron-landing-preview.png")
  }, [])

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center font-geist text-white overflow-x-hidden selection:bg-teal-500/30">
      
      {/* Background Video Layer (Lightened) */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-60"
        >
          <source src="https://cdn.pixabay.com/video/2020/09/11/49714-459345324_large.mp4" type="video/mp4" />
          <source src="/asset/bg-video.mp4" type="video/mp4" />
        </video>
        {/* Subtle dark overlay to help content pop while keeping it light */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Animation Layer (GLSL Hills - Balanced Visibility) */}
      <div className="fixed inset-0 z-0 opacity-60 pointer-events-none">
        <DemoOne />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-0 max-w-7xl w-full">
        
        {/* Hero Section (Reduced top space and height) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-center min-h-[60vh] w-full text-center pt-8"
        >
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-md mb-8 transition-all hover:border-teal-400/50 group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 group-hover:text-teal-400 transition-colors">{APP_VERSION} · Stable Build</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-8"
          >
             QA testing, <br/> 
            <span className="font-bold text-white/95">fully automated.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm md:text-base text-white/60 max-w-lg mx-auto font-normal leading-relaxed mb-16 tracking-wide"
          >
            TRON: The premium desktop suite for rapid UI analysis, <br className="hidden md:block" /> 
            performance benchmarks, and functional verification.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <a
              href="https://github.com/ChAbdulWahhab/Tron-QASuite/releases/download/3.1.1/Tron-Setup-winx64.exe"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 px-10 py-5 bg-white text-black text-sm font-bold rounded-full hover:bg-teal-400 transition-all duration-500 overflow-hidden active:scale-95 shadow-[0_0_60px_-15px_rgba(20,184,166,0.4)]"
            >
              <FaWindows size={18} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Get TRON for Windows</span>
              <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
            <div className="relative">
              <button
                type="button"
                onClick={() => setMacDropdownOpen(!macDropdownOpen)}
                className="group relative flex items-center gap-4 px-10 py-5 bg-white/[0.08] text-white text-sm font-bold rounded-full border border-white/20 hover:bg-white/[0.15] hover:border-white/40 transition-all duration-500 w-full justify-center"
              >
                <FaApple size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Download for macOS</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${macDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {macDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 py-2 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden z-50">
                  <a
                    href="https://github.com/ChAbdulWahhab/Tron-QASuite/releases/download/3.1.1/Tron-Setup-x64.dmg"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors text-sm text-white/80 hover:text-white"
                  >
                    <span className="text-teal-400 font-mono text-xs">x64</span>
                    <span>Intel Mac</span>
                  </a>
                  <a
                    href="https://github.com/ChAbdulWahhab/Tron-QASuite/releases/download/3.1.1/Tron-Setup-arm64.dmg"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors text-sm text-white/80 hover:text-white"
                  >
                    <span className="text-teal-400 font-mono text-xs">arm64</span>
                    <span>Apple Silicon (M1, M2, M3)</span>
                  </a>
                </div>
              )}
            </div>
            <div className="flex items-center gap-6 text-white/20 text-[9px] font-black uppercase tracking-[0.3em]">
              <span>Free for Beta</span>
              <span className="w-1 h-1 rounded-full bg-teal-500/40"></span>
              <span>Secure Installer</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05] border border-white/[0.05] rounded-[2.5rem] overflow-hidden mb-20 backdrop-blur-md">
          <MinimalFeatureCard 
            icon={<Zap size={20} className="text-teal-400" />}
            title="Lightning Fast"
            description="Headless automation delivers comprehensive test results in seconds."
          />
          <MinimalFeatureCard 
            icon={<Settings size={20} className="text-teal-400" />}
            title="Zero Config"
            description="No complex setup. Simply enter your URL and start testing."
          />
          <MinimalFeatureCard 
            icon={<ShieldCheck size={20} className="text-teal-400" />}
            title="Deep Analysis"
            description="Full coverage of UI integrity and performance metrics."
          />
        </div>

        <Footer />
      </div>
    </div>
  );
}

function MinimalFeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group relative p-12 bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-md transition-all duration-700 text-left">
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-10 p-3 w-fit rounded-2xl bg-white/[0.05] border border-white/[0.1] group-hover:border-teal-500/30 group-hover:bg-teal-500/10 transition-all duration-500">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-white/90 tracking-tight">{title}</h3>
        <p className="text-sm md:text-base text-white/50 leading-relaxed font-normal group-hover:text-white/70 transition-colors duration-500">{description}</p>
      </div>
    </div>
  );
}

import { useState, useEffect, useRef } from 'react'
import { useForm } from '@formspree/react'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { APP_VERSION } from '../version'

declare global {
  interface Window {
    hcaptcha: {
      render: (container: string | HTMLElement, options: object) => string
      execute: (widgetId: string) => Promise<string>
      reset: (widgetId: string) => void
    }
  }
}

export default function Feedback() {
  const [type, setType] = useState('general')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState('')
  const [captchaReady, setCaptchaReady] = useState(false)
  const captchaRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const setCaptchaTokenRef = useRef<(token: string) => void>(() => {})

  useEffect(() => {
    setCaptchaTokenRef.current = setCaptchaToken
  }, [setCaptchaToken])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { status } = useForm('xjgjklka') as any

  console.log('Feedback Render:', { status, hasMessage: !!message.trim(), hasCaptcha: !!captchaToken })

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="hcaptcha.com/1/api.js"]')
    if (existingScript) {
      if (window.hcaptcha) {
        setCaptchaReady(true)
      }
      return
    }

    const script = document.createElement('script')
    script.src = 'https://js.hcaptcha.com/1/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.onload = () => {
      console.log('hCaptcha script loaded')
      setCaptchaReady(true)
    }
    document.body.appendChild(script)
  }, [])

  useEffect(() => {
    if (!captchaReady || !captchaRef.current || widgetIdRef.current) return

    const timer = setTimeout(() => {
      if (captchaRef.current && !widgetIdRef.current) {
        try {
          widgetIdRef.current = window.hcaptcha.render(captchaRef.current, {
            sitekey: '96debb3e-948a-4208-9006-2b1c78da5da6',
            theme: 'dark',
            callback: (token: string) => {
              console.log('hCaptcha token received:', !!token)
              setCaptchaTokenRef.current(token)
            },
            'expired-callback': () => {
              setCaptchaTokenRef.current('')
            },
            'error-callback': () => {
              setCaptchaTokenRef.current('')
            }
          })
        } catch (err) {
          console.error('hCaptcha render error:', err)
        }
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [captchaReady])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    data.set('type', type)
    data.set('app_version', APP_VERSION)
    data.set('h-captcha-response', captchaToken)

    try {
      const response = await fetch('https://formspree.io/f/xjgjklka', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      })
      if (response.ok) {
        setSubmitted(true)
      } else {
        if (widgetIdRef.current) {
          window.hcaptcha?.reset(widgetIdRef.current)
          setCaptchaToken('')
        }
      }
    } catch {
      if (widgetIdRef.current) {
        window.hcaptcha?.reset(widgetIdRef.current)
        setCaptchaToken('')
      }
    }
  }

  useEffect(() => {
    document.title = "Feedback — TRON"
    const metaTitle = document.querySelector('meta[name="title"]')
    if (metaTitle) metaTitle.setAttribute("content", "Feedback — TRON")
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute("content", "Feedback — TRON")
    const twitterTitle = document.querySelector('meta[property="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute("content", "Feedback — TRON")
    
    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute("content", "/branding/tron-feedback.png")
    const twitterImage = document.querySelector('meta[property="twitter:image"]')
    if (twitterImage) twitterImage.setAttribute("content", "/branding/tron-feedback.png")
  }, [])

  if (submitted || status === 'success') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="mb-6 flex justify-center">
            <CheckCircle className="w-16 h-16 text-teal-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-3">Feedback Sent!</h1>
          <p className="text-white/60 mb-8">
            Thank you for your feedback. We will get back to you soon.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-black font-semibold rounded-full hover:bg-teal-400 transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-6 py-16 font-geist text-white overflow-x-hidden selection:bg-teal-500/30">
      {/* Background Video Layer */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-40"
        >
          <source src="https://cdn.pixabay.com/video/2020/09/11/49714-459345324_large.mp4" type="video/mp4" />
          <source src="/asset/bg-video.mp4" type="video/mp4" />
        </video>
        {/* Darker overlay for Feedback page */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-lg w-full">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Send Feedback</h1>
          <p className="text-white/50 text-sm">
            Found a bug or have a feature request? Let us know.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 backdrop-blur-md space-y-6"
        >
          <div>
            <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
              Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-xl text-white text-sm focus:outline-none focus:border-teal-500/50 transition-colors [&>option]:bg-[#0a0a0a] [&>option]:text-white"
            >
              <option value="general">General</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
            </select>
          </div>

          <div>
            <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
              Email <span className="text-white/30">(optional)</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-500/50 transition-colors"
            />
          </div>

          <div>
            <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what's on your mind..."
              rows={5}
              required
              className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-500/50 transition-colors resize-none"
            />
          </div>

          <input type="hidden" name="app_version" value={APP_VERSION} />

          <div className="flex justify-center">
            <div
              id="h-captcha-widget"
              ref={captchaRef}
              className="flex justify-center"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting' || !message.trim() || !captchaToken}
            className="w-full py-3.5 bg-teal-500 text-black font-bold rounded-xl hover:bg-teal-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Feedback'
            )}
          </button>

          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4" />
              Something went wrong. Please try again.
            </div>
          )}
        </form>

        <div className="mt-8 flex justify-center">
          <a href="/" className="text-white/40 text-sm hover:text-white/70 transition-colors">
            Back to home
          </a>
        </div>
      </div>
    </div>
  )
}

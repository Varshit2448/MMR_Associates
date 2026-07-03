import { ArrowRight, FileText, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero-bg min-h-screen flex items-center relative pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left */}
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass text-blue-300 text-xs sm:text-sm font-medium animate-fade-in-up">
              <Sparkles size={14} className="text-green-400 flex-shrink-0" />
              <span className="line-clamp-1">Trusted Tax & Compliance Experts</span>
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in-up delay-100">
              Your Trusted Partner for{' '}
              <span className="text-gradient">Tax & Compliance</span> Solutions
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl animate-fade-in-up delay-200">
              MMR Associates delivers comprehensive tax consultancy, GST services, registrations, and accounting solutions with precision, integrity, and a commitment to your financial success.
            </p>

            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-in-up delay-300 pt-2 sm:pt-0">
              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center xs:justify-start gap-2 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 cta-button w-full xs:w-auto"
              >
                Explore Services
                <ArrowRight size={16} className="sm:size-18 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base hover:bg-white/15 transition-all duration-300 w-full xs:w-auto"
              >
                Get a Consultation
              </button>
            </div>

            <div className="flex flex-col xs:flex-row flex-wrap gap-4 sm:gap-6 pt-4 sm:pt-6 animate-fade-in-up delay-400">
              {[
                { icon: FileText, label: '15+ Services' },
                { icon: ShieldCheck, label: '100% Compliance' },
                { icon: TrendingUp, label: 'Expert Guidance' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
                  <item.icon size={16} className="sm:size-18 text-green-400 flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative animate-fade-in-right delay-200 hidden lg:flex lg:justify-center lg:items-center">
            <div className="relative w-full aspect-square max-w-md">
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/20 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-green-500/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>

              {/* Center card */}
              <div className="absolute inset-16 glass rounded-3xl flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center mb-4 shadow-2xl shadow-blue-500/30">
                  <span className="text-white font-black text-3xl">M</span>
                </div>
                <div className="text-white font-bold text-xl">MMR Associates</div>
                <div className="text-blue-300 text-sm mt-1">Tax & Compliance</div>
                <div className="mt-4 flex gap-2">
                  {['ITR', 'GST', 'DSC', 'MSME'].map((tag, i) => (
                    <span key={tag} className="px-2 py-1 rounded-md bg-white/10 text-blue-200 text-xs font-medium" style={{ animation: 'count-up 0.5s ease forwards', animationDelay: `${0.5 + i * 0.1}s`, opacity: 0 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              {[
                { icon: FileText, label: 'Tax Filing', pos: 'top-0 left-8', delay: '0s' },
                { icon: ShieldCheck, label: 'GST', pos: 'top-8 right-0', delay: '1s' },
                { icon: TrendingUp, label: 'Accounting', pos: 'bottom-8 left-0', delay: '2s' },
                { icon: Sparkles, label: 'MSME', pos: 'bottom-0 right-8', delay: '3s' },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className={`absolute ${badge.pos} glass rounded-xl p-3 flex items-center gap-2`}
                  style={{ animation: 'float 4s ease-in-out infinite', animationDelay: badge.delay }}
                >
                  <badge.icon size={16} className="text-green-400" />
                  <span className="text-white text-xs font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

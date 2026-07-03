import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Income Tax Filing',
  'GST Registration',
  'PF & ESI Services',
  'MSME Registration',
  'Accounting Services',
  'Trademark Registration',
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img 
                src="/mmr-logo-3d.webp" 
                alt="MMR Associates Logo" 
                className="w-8 sm:w-10 h-8 sm:h-10 object-contain flex-shrink-0"
              />
              <div>
                <div className="text-white font-bold text-sm sm:text-lg leading-tight">MMR Associates</div>
                <div className="text-blue-400 text-xs tracking-widest uppercase line-clamp-1">Tax Consultants, Auditors & Legal Advisors</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed mb-4">
              Your trusted partner for comprehensive tax, compliance, and accounting services. We make compliance simple.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-xs sm:text-sm hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-xs sm:text-sm hover:text-blue-400 transition-colors duration-200 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Contact Us</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <Phone size={14} className="sm:size-16 text-blue-400 flex-shrink-0" />
                <a href="tel:8106130227" className="hover:text-blue-400 transition-colors">8106130227</a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <Mail size={14} className="sm:size-16 text-blue-400 flex-shrink-0" />
                <a href="mailto:mmrassocieteshyd@gmail.com" className="hover:text-blue-400 transition-colors break-all">mmrassocieteshyd@gmail.com</a>
              </li>
              <li className="text-xs sm:text-sm">
                <div className="flex items-start gap-2 sm:gap-3 mb-2">
                  <MapPin size={14} className="sm:size-16 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-medium text-blue-400">Head Office:</div>
                    <div className="text-slate-400 text-xs">H.No. 11-13-1383, Margadarshi Colony, Road No. 1, R.K. Puram, Saroor Nagar, Hyderabad</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-3.5 h-3.5 bg-blue-400 rounded-full flex-shrink-0 mt-1.5"></div>
                  <div className="flex-1">
                    <div className="font-medium text-blue-400">Branch Office:</div>
                    <div className="text-slate-400 text-xs">#16-116/145/B, Mallareddy Nagar Colony, Bheeram Guda, R.C.Puram, Patancheru, Hyderabad</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} MMR Associates. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs sm:text-sm hover:text-blue-400 transition-colors group"
          >
            Back to Top
            <ArrowUp size={14} className="sm:size-16 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

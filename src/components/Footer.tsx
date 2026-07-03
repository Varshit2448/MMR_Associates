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
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-sm">M</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">MMR Associates</div>
                <div className="text-blue-400 text-xs tracking-widest uppercase">Tax Consultants, Auditors & Legal Advisors</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Your trusted partner for comprehensive tax, compliance, and accounting services. We make compliance simple.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm hover:text-blue-400 transition-colors duration-200 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <a href="tel:8106130227" className="hover:text-blue-400 transition-colors">8106130227</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:mmrassocieteshyd@gmail.com" className="hover:text-blue-400 transition-colors break-all">mmrassocieteshyd@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} MMR Associates. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors group"
          >
            Back to Top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

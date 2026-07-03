import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl shadow-black/30 py-2 sm:py-3'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer flex-shrink-0" onClick={() => handleNavClick('Home', '#home')}>
            <img 
              src="/mmr-logo.webp" 
              alt="MMR Associates Logo" 
              className="w-8 sm:w-10 h-8 sm:h-10 object-contain group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="hidden sm:block">
              <div className="text-white font-bold text-base sm:text-lg leading-none tracking-wide">MMR Associates</div>
              <div className="text-blue-400 text-xs font-medium tracking-widest uppercase line-clamp-1">Tax Consultants, Auditors & Legal Advisors</div>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.label, link.href)}
                className={`nav-link text-xs lg:text-sm font-medium transition-colors duration-300 ${
                  active === link.label ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                } ${active === link.label ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 flex-shrink-0">
            <a
              href="tel:8106130227"
              className="flex items-center gap-1 lg:gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 cta-button whitespace-nowrap"
            >
              <Phone size={14} />
              <span className="hidden lg:inline">Call or contact</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-slate-900/98 backdrop-blur-lg px-3 sm:px-4 py-3 border-t border-white/10 space-y-1 max-h-96 overflow-y-auto">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.label, link.href)}
              className={`block w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                active === link.label
                  ? 'bg-blue-600/20 text-blue-400'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:8106130227"
            className="flex items-center gap-2 mt-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium w-full justify-center"
          >
            <Phone size={14} />
            <span>Call or contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

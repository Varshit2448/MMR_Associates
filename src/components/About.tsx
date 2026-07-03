import { CheckCircle2, Target, Eye, Heart } from 'lucide-react';

const values = [
  { icon: Target, title: 'Our Mission', text: 'To simplify tax compliance and financial management for businesses and individuals with accurate, timely, and reliable services.' },
  { icon: Eye, title: 'Our Vision', text: 'To be the most trusted tax consultancy, empowering clients with knowledge and solutions for sustainable growth.' },
  { icon: Heart, title: 'Our Values', text: 'Integrity, precision, and client-first approach in every service we deliver, building long-term relationships.' },
];

const highlights = [
  'Experienced tax professionals',
  'End-to-end compliance solutions',
  'Timely and accurate filings',
  'Personalized client support',
  'Transparent pricing',
  'Confidential & secure handling',
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            About Us
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Who We Are at <span className="text-gradient">MMR Associates</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A dedicated tax consultancy firm offering a comprehensive range of financial, tax, and compliance services tailored to meet the needs of businesses and individuals alike.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="reveal-left">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Your One-Stop Solution for All Tax & Compliance Needs
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              At MMR Associates, we understand that navigating the complex landscape of tax regulations, registrations, and compliance can be overwhelming. Our team of experienced professionals is committed to providing you with seamless, hassle-free services that keep you compliant while saving you time and money.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 reveal-left stagger-${i + 1}`}
                >
                  <CheckCircle2 size={18} className="text-green-600 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-2xl">M</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">MMR Associates</div>
                    <div className="text-blue-600 text-sm font-medium">Tax & Compliance Experts</div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  With years of expertise in tax consultancy, we serve as your trusted partner in navigating the complexities of Indian taxation and regulatory compliance.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 rounded-xl bg-blue-50">
                    <div className="text-2xl font-bold text-blue-700">500+</div>
                    <div className="text-xs text-slate-500">Clients</div>
                  </div>
                  <div className="p-3 rounded-xl bg-green-50">
                    <div className="text-2xl font-bold text-green-700">15+</div>
                    <div className="text-xs text-slate-500">Services</div>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50">
                    <div className="text-2xl font-bold text-amber-700">100%</div>
                    <div className="text-xs text-slate-500">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <div
              key={value.title}
              className={`reveal stagger-${i + 1} group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 border border-slate-100`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-green-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                <value.icon size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

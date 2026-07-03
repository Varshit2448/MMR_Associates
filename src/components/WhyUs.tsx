import { Clock, ShieldCheck, UserCheck, Zap, ThumbsUp, HeadphonesIcon } from 'lucide-react';

const reasons = [
  { icon: UserCheck, title: 'Expert Team', desc: 'Highly qualified and experienced tax professionals at your service.' },
  { icon: Clock, title: 'Timely Delivery', desc: 'We ensure all filings and registrations are completed well before deadlines.' },
  { icon: ShieldCheck, title: 'Secure & Confidential', desc: 'Your financial data is handled with the utmost security and confidentiality.' },
  { icon: Zap, title: 'Quick Turnaround', desc: 'Fast and efficient service delivery without compromising on accuracy.' },
  { icon: ThumbsUp, title: 'Client Satisfaction', desc: 'A proven track record of happy clients who trust us with their compliance needs.' },
  { icon: HeadphonesIcon, title: 'Dedicated Support', desc: 'Ongoing support and guidance for all your tax and compliance queries.' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-1.5 rounded-full glass text-blue-300 text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            The <span className="text-gradient">MMR Associates</span> Advantage
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We combine expertise, technology, and a client-first approach to deliver exceptional tax and compliance services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`reveal stagger-${i + 1} group glass rounded-2xl p-8 hover:bg-white/15 transition-all duration-400 hover:-translate-y-2`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-green-600 mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-400">
                <reason.icon size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-slate-300 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

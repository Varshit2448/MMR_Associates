import {
  FileText,
  Receipt,
  Hash,
  Briefcase,
  Building2,
  ShieldCheck,
  Store,
  Award,
  BookOpen,
  PenTool,
  Layers,
  Barcode,
  Gavel,
  Landmark,
} from 'lucide-react';

const services = [
  { icon: FileText, title: 'Income Tax Return Filings', desc: 'Accurate and timely ITR filing for individuals, businesses, and professionals.' },
  { icon: Receipt, title: 'GST Registrations & Returns', desc: 'Complete GST registration and monthly, quarterly, and annual return filing.' },
  { icon: Hash, title: 'LEI Registration', desc: 'Legal Entity Identifier registration and renewal for corporate entities.' },
  { icon: Briefcase, title: 'PF & ESI Registrations & Returns', desc: 'Provident Fund and ESI registration, compliance, and return filing services.' },
  { icon: Building2, title: 'PT Registrations & Returns', desc: 'Professional Tax registration and periodic return filing for businesses.' },
  { icon: ShieldCheck, title: 'Labour & Food Licence', desc: 'Labour license and FSSAI food license registration and renewal services.' },
  { icon: Store, title: 'Trade License & IE Code', desc: 'Trade license and Import Export Code registration for businesses.' },
  { icon: Award, title: 'MSME & Halal Certificate', desc: 'MSME registration and Halal certification assistance for businesses.' },
  { icon: BookOpen, title: 'Accounting & Bookkeeping', desc: 'Professional accounting and bookkeeping services to keep your finances organized.' },
  { icon: PenTool, title: 'DSC (Digital Signature)', desc: 'Digital Signature Certificate issuance and renewal for all your digital needs.' },
  { icon: Layers, title: 'LLP, PVT, FIRM, SOCIETY Registrations', desc: 'Complete entity registration services for LLPs, Pvt Ltd, firms, and societies.' },
  { icon: Barcode, title: 'Barcode & Trademark', desc: 'Barcode registration and trademark filing to protect your brand identity.' },
  { icon: Gavel, title: 'Appeals & Scrutiny', desc: 'Expert handling of income tax and GST appeals, scrutiny, and assessments.' },
  { icon: Landmark, title: 'Ministry of Company Affairs', desc: 'MCA filings, compliances, and ROC-related matters handled with expertise.' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive <span className="text-gradient">Tax & Compliance</span> Solutions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            From tax filings to registrations and compliance, we offer a complete suite of services to keep your business running smoothly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`service-card reveal stagger-${(i % 8) + 1} group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100 cursor-pointer overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-400 mb-5">
                  <service.icon
                    size={26}
                    className="text-blue-600 group-hover:text-white transition-colors duration-400"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>

              {/* Hover gradient bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

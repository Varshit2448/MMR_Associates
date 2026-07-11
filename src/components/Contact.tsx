import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '8106130227', href: 'tel:8106130227' },
    { icon: Mail, label: 'Email', value: 'mmrassocieteshyd@gmail.com', href: 'mailto:mmrassocieteshyd@gmail.com' },
    { icon: MapPin, label: 'Head Office', value: 'Hyderabad', href: '#' },
    { icon: Clock, label: 'Hours', value: 'Mon - Sat: 9 AM - 7 PM', href: '#' },
  ];

  const officeLocations = [
    {
      title: 'Head Office',
      address: 'H.No. 11-13-1383, Margadarshi Colony, Road No. 1, R.K. Puram, Saroor Nagar, Hyderabad',
      phone: '8106130227'
    },
    {
      title: 'Branch Office',
      address: '#16-116/145/B, Mallareddy Nagar Colony, Bheeram Guda, R.C.Puram, Patancheru, Hyderabad',
      phone: '7893930931'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-100 rounded-full blur-3xl opacity-30 sm:opacity-50"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 reveal px-2">
          <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Get In Touch
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg">
            Have a question or need a consultation? Reach out to us and our team will get back to you promptly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Details */}
          <div className="reveal-left space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="group bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
                >
                  <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-green-600 mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon size={18} className="sm:size-22 text-white" />
                  </div>
                  <div className="text-slate-500 text-xs sm:text-sm font-medium mb-1">{info.label}</div>
                  <div className="text-slate-900 font-semibold text-xs sm:text-sm break-words">{info.value}</div>
                </a>
              ))}
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              {officeLocations.map((office, idx) => (
                <div key={idx} className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-100">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1">{office.title}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{office.address}</p>
                      <a href={`tel:${office.phone}`} className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm mt-2 inline-flex items-center gap-1">
                        <Phone size={14} />
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle size={28} />
                <h3 className="text-xl font-bold">Ready to Get Started?</h3>
              </div>
              <p className="text-blue-100 mb-6">
                Contact us today for a free consultation and let us handle your tax and compliance needs with expertise.
              </p>
              <a
                href="tel:8106130227"
                className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 cta-button"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

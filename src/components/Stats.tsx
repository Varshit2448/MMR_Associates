import { Users, FileCheck, Award, Calendar } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: FileCheck, value: '15+', label: 'Services Offered' },
  { icon: Award, value: '100%', label: 'Compliance Rate' },
  { icon: Calendar, value: '24/7', label: 'Support Available' },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/30 via-transparent to-green-950/30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`stat-card reveal stagger-${i + 1} glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/30 to-green-600/30 mb-4">
                <stat.icon size={26} className="text-blue-400" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

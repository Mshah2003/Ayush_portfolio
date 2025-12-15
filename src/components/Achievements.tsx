import { Trophy, Award, CheckCircle2 } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      exam: 'UPSC CDS IMA',
      result: 'All India Rank 96',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500',
      cleared: 1,
      featured: true
    },
    {
      exam: 'NDA (National Defence Academy)',
      result: 'Cleared',
      icon: Award,
      color: 'from-blue-500 to-blue-600',
      cleared: 3
    },
    {
      exam: 'AFCAT (Air Force Common Admission Test)',
      result: 'Cleared',
      icon: Award,
      color: 'from-sky-500 to-cyan-600',
      cleared: 3
    },
    {
      exam: 'CDS (Combined Defence Services)',
      result: 'Cleared',
      icon: Award,
      color: 'from-emerald-500 to-teal-600',
      cleared: 1
    },
    {
      exam: 'CPO (Central Police Organisation)',
      result: 'Cleared',
      icon: Award,
      color: 'from-slate-600 to-slate-700',
      cleared: 1
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
            <Trophy className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Competitive Exam Achievements
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Demonstrating excellence across multiple prestigious national-level examinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${achievement.color} rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ${
                  achievement.featured ? 'md:col-span-2 lg:col-span-1 ring-4 ring-yellow-300' : ''
                }`}
              >
                {achievement.featured && (
                  <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Featured
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  {achievement.cleared > 1 && (
                    <div className="flex items-center gap-1 bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span className="text-sm font-semibold text-white">
                        {achievement.cleared}x Cleared
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {achievement.exam}
                </h3>

                <p className="text-white text-opacity-90 font-semibold">
                  {achievement.result}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 border border-emerald-200">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-3 bg-emerald-600 rounded-lg">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Why These Achievements Matter
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Success in these highly competitive examinations demonstrates exceptional analytical abilities,
                disciplined study habits, and deep subject knowledge. These qualities directly translate into
                effective teaching methodologies and the ability to guide students toward their own academic excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

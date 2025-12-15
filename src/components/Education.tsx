import { GraduationCap, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
            <GraduationCap className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Education
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Academic foundation built on excellence
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-600"></div>

            <div className="relative pl-20 pb-12">
              <div className="absolute left-5 top-2 w-6 h-6 bg-emerald-600 rounded-full border-4 border-white shadow-lg"></div>

              <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Bachelor of Science
                    </h3>
                    <div className="flex items-center gap-2 text-emerald-600 font-semibold mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>Kanpur University</span>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-semibold">
                    Completed
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed">
                  Completed undergraduate studies from Kanpur University, building a strong
                  academic foundation that complements practical teaching experience and
                  competitive examination success.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Academic Strengths</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Mathematics</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Science (Physics, Chemistry, Biology)</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>General Knowledge</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Additional Credentials</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span>Competitive Exam Expertise</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span>3 Years Teaching Experience</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span>Proven Track Record</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

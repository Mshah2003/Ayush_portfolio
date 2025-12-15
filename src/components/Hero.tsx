import { GraduationCap, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-5"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 shadow-xl">
            <GraduationCap className="w-12 h-12 text-emerald-600" />
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight">
            Ayush Chauhan
          </h1>

          <p className="text-xl sm:text-2xl text-emerald-100 mb-6 font-medium">
            Mathematics & Science Educator
          </p>

          <div className="flex items-center justify-center gap-2 mb-8">
            <Award className="w-5 h-5 text-yellow-300" />
            <p className="text-lg text-white font-semibold">
              UPSC CDS IMA - All India Rank 96
            </p>
          </div>

          <p className="text-lg text-emerald-50 max-w-2xl mx-auto leading-relaxed mb-8">
            Experienced educator with a proven track record in competitive examinations and 3 years of teaching experience.
            Passionate about nurturing young minds and building strong foundations in Science and Mathematics.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get In Touch
            </a>
            <a
              href="#achievements"
              className="inline-flex items-center px-8 py-3 bg-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-800 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              View Achievements
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  );
}

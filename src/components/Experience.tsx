import { Users, BookOpen, TrendingUp, Target } from 'lucide-react';

export default function Experience() {
  const highlights = [
    {
      icon: Users,
      title: 'Student-Centric Approach',
      description: 'Personalized attention to each student\'s learning pace and style'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Coverage',
      description: 'Complete syllabus coverage with concept clarity and problem-solving'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Consistent improvement in student grades and understanding'
    },
    {
      icon: Target,
      title: 'Exam-Focused Training',
      description: 'Strategic preparation aligned with board exam patterns'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Teaching Experience
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Building strong foundations in Science and Mathematics for young learners
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-emerald-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">3 Years</h3>
                <p className="text-slate-600">Teaching Experience</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Grade Levels</h4>
                <p className="text-slate-700">Classes 9th & 10th</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Subjects</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">
                    Science
                  </span>
                  <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                    Mathematics
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Teaching Philosophy</h3>
            <p className="text-emerald-50 leading-relaxed mb-4">
              Every student has unique potential waiting to be unlocked. My approach combines
              conceptual clarity with practical problem-solving, ensuring students not only
              understand the 'what' but also the 'why' behind every concept.
            </p>
            <p className="text-emerald-50 leading-relaxed">
              Drawing from my own success in competitive examinations, I bring proven strategies
              and techniques that help students excel in their academic pursuits.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-b-4 border-emerald-500"
              >
                <div className="p-3 bg-emerald-100 rounded-lg w-fit mb-4">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{highlight.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

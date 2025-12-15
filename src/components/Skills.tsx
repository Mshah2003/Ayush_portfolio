import { Brain, Target, Users, Lightbulb, Clock, Heart } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      icon: Brain,
      title: 'Subject Mastery',
      description: 'Deep understanding of Mathematics and Science concepts with ability to explain complex topics simply',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Exam Strategy',
      description: 'Expert guidance on exam techniques, time management, and scoring optimization',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Users,
      title: 'Student Engagement',
      description: 'Creating interactive and engaging learning environments that motivate students',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Teaching analytical thinking and systematic problem-solving approaches',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Clock,
      title: 'Time Management',
      description: 'Proven ability to cover curriculum efficiently while ensuring concept clarity',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Heart,
      title: 'Mentorship',
      description: 'Guiding students beyond academics, building confidence and positive study habits',
      color: 'from-rose-500 to-red-600'
    }
  ];

  const technicalSkills = [
    'Mathematics (Algebra, Geometry, Trigonometry)',
    'Physics',
    'Chemistry',
    'Biology',
    'CBSE/ICSE Curriculum',
    'Board Exam Preparation',
    'Competitive Exam Guidance',
    'Doubt Resolution',
    'Test Preparation',
    'Study Material Development'
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
            <Brain className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive skill set developed through experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`inline-flex p-3 bg-gradient-to-br ${skill.color} rounded-lg mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Technical Competencies
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technicalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-slate-800 rounded-full font-medium border border-emerald-200 hover:from-emerald-200 hover:to-teal-200 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

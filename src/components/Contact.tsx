import { Mail, Phone, MapPin, Send, Briefcase } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
            <Send className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Currently seeking teaching opportunities. Let's discuss how I can contribute to your institution
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-xl p-8 md:p-12 border border-emerald-200">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-emerald-200">
              <div className="p-3 bg-emerald-600 rounded-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Seeking Teaching Position</h3>
                <p className="text-slate-700">Available for full-time and part-time roles</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900">Email</h4>
                </div>
                <a
                  href="mailto:chauhanshanu2003@gmail.com"
                  className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
                >
                  chauhanshanu2003@gmail.com
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900">Phone</h4>
                </div>
                <a
                  href="tel:+918791678176"
                  className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
                >
                  +91 87916 78176
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 sm:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900">Location</h4>
                </div>
                <p className="text-slate-700">Etawah, Uttar Pradesh, India</p>
                <p className="text-slate-600 text-sm mt-1">Open to relocation for the right opportunity</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-slate-900 mb-4 text-lg">Why Choose Me?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Proven excellence in competitive examinations demonstrates strong subject knowledge</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">3 years of hands-on teaching experience with Classes 9th & 10th</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Passionate about education and committed to student success</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Ability to guide students for both board exams and competitive examinations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Interested in discussing opportunities?
          </p>
          <a
            href="mailto:ayush.chauhan@email.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <Mail className="w-5 h-5" />
            Send an Email
          </a>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-600">
            © 2024 Ayush Chauhan. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}

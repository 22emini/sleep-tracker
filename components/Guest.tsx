import { SignInButton } from "@clerk/nextjs"
import { Moon, Sun, Clock, Star, CheckCircle, Users, Zap, Shield } from "lucide-react"

const Guest = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10"></div>
        <div className="relative flex flex-col lg:flex-row items-center justify-between p-6 md:p-16 pt-24 pb-20">
          <div className="flex-1 mb-12 lg:mb-0 lg:pr-12">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full mr-4">
                <Moon className="w-8 h-8 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-600">SleepTracker</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Transform Your Sleep,
              </span>
              <br />
              <span className="text-gray-800">Transform Your Life</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed max-w-2xl">
              Discover the power of quality sleep with our AI-powered tracking system. Wake up refreshed, energized, and
              ready to conquer your day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <SignInButton>
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="relative z-10 flex items-center justify-center">
                    Get Started Free
                    <Zap className="w-5 h-5 ml-2" />
                  </span>
                </button>
              </SignInButton>
              
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-blue-500 mr-2" />
                10,000+ happy users
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
              <img
                src="/sleep-tracker.png"
                alt="SleepTracker Dashboard Preview"
                className="relative w-full max-w-lg rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Why Choose SleepTracker?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced sleep monitoring technology provides insights that help you achieve the perfect night's rest.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Smart Sleep Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered algorithms analyze your sleep patterns and provide personalized recommendations for better
                rest.
              </p>
            </div>
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Wake Up Refreshed</h3>
              <p className="text-gray-600 leading-relaxed">
                Smart alarm system wakes you during your lightest sleep phase, ensuring you feel energized and alert.
              </p>
            </div>
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Privacy First</h3>
              <p className="text-gray-600 leading-relaxed">
                Your sleep data is encrypted and stored securely. We never share your personal information with third
                parties.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about SleepTracker</p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "What is SleepTracker?",
                answer:
                  "SleepTracker is an AI-powered sleep monitoring platform that helps you understand your sleep patterns, improve sleep quality, and wake up feeling refreshed every day.",
              },
              {
                question: "How does the sleep tracking work?",
                answer:
                  "Our advanced algorithms analyze your sleep data using your device's sensors to track sleep stages, duration, and quality. We provide detailed insights and personalized recommendations based on your unique sleep patterns.",
              },
              {
                question: "Is SleepTracker free to use?",
                answer:
                  "Yes! SleepTracker offers a comprehensive free plan with essential sleep tracking features. Premium plans are available for advanced analytics, detailed reports, and additional wellness insights.",
              },
              {
                question: "Is my sleep data secure?",
                answer:
                  "Absolutely. We use enterprise-grade encryption to protect your data. Your sleep information is stored securely and never shared with third parties without your explicit consent.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg mr-4">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-14">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Join thousands of people who have transformed their sleep</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "SleepTracker has completely transformed my sleep schedule. I feel more energized every day and my productivity has skyrocketed!",
                author: "Sarah L.",
                role: "Marketing Manager",
                rating: 5,
              },
              {
                text: "The insights from SleepTracker helped me identify and fix my sleep issues. The smart alarm feature is a game-changer!",
                author: "John D.",
                role: "Software Engineer",
                rating: 5,
              },
              {
                text: "SleepTracker is incredibly easy to use and provides accurate data. It's become an essential part of my wellness routine!",
                author: "Emily R.",
                role: "Fitness Coach",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full mr-4">
                    <span className="text-white font-bold text-lg">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Sleep?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of users who have already improved their sleep quality and overall well-being with
            SleepTracker.
          </p>
          <SignInButton>
            <button className="group px-10 py-4 bg-white text-purple-600 hover:bg-gray-50 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="flex items-center justify-center">
                Start Your Journey Today
                <Moon className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
          </SignInButton>
          <p className="text-white/80 text-sm mt-4">Free forever • No credit card required • Start in 30 seconds</p>
        </div>
      </div>
    </div>
  )
}

export default Guest

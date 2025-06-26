"use client"

import { SignInButton } from "@clerk/nextjs"
import { Moon, Sun, Clock, Star, CheckCircle, Users, Zap, Shield } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const Guest = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const fullText = "Transform Your Sleep,"

  useEffect(() => {
    setIsVisible(true)

    // Typewriter effect
    let i = 0
    const typeWriter = () => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
        setTimeout(typeWriter, 100)
      }
    }
    setTimeout(typeWriter, 1000)
  }, [])

  return (
    <div className="font-sans bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800 min-h-screen overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-pink-400 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-40 right-40 w-1 h-1 bg-purple-300 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-pink-300 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-float-slow"></div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 animate-gradient-shift"></div>
        <div
          className={`relative flex flex-col lg:flex-row items-center justify-between p-6 md:p-16 pt-24 pb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex-1 mb-12 lg:mb-0 lg:pr-12">
            <div
              className={`flex items-center mb-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full mr-4 animate-pulse-slow">
                <Image src="/logo.png" alt="logo" width={70} height={70} className="text-white animate-spin-slow" />
              </div>
              <span className="text-lg font-semibold text-gray-600">SleepTracker</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient-text">
                {typedText}
                <span className="animate-blink">|</span>
              </span>
              <br />
              <span
                className={`text-gray-800 transition-all duration-700 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              >
                Transform Your Life
              </span>
            </h1>
            <p
              className={`text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed max-w-2xl transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              Discover the power of quality sleep with our AI-powered tracking system. Wake up refreshed, energized, and
              ready to conquer your day.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              <SignInButton>
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse-cta overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    Get Started Free
                    <Zap className="w-5 h-5 ml-2 group-hover:animate-bounce" />
                  </span>
                </button>
              </SignInButton>
            </div>
            <div
              className={`flex items-center space-x-6 text-sm text-gray-500 transition-all duration-700 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              <div className="flex items-center animate-fade-in-up">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 animate-bounce-slow" />
                No credit card required
              </div>
              <div className="flex items-center animate-fade-in-up-delayed">
                <Users className="w-4 h-4 text-blue-500 mr-2 animate-bounce-slow" />
                10,000+ happy users
              </div>
            </div>
          </div>
          <div
            className={`flex-1 flex justify-center items-center relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-3xl blur-lg opacity-30 animate-pulse-glow"></div>
              <Image
                src="/sleep-tracker.png"
                alt="SleepTracker Dashboard Preview"
                width={1156}
                height={1102}
                className="relative w-full max-w-lg rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm animate-float-gentle hover:animate-float-active transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Why Choose SleepTracker?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced sleep monitoring technology provides insights that help you achieve the perfect night&apos;s
              rest.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Smart Sleep Analysis",
                description:
                  "AI-powered algorithms analyze your sleep patterns and provide personalized recommendations for better rest.",
                gradient: "from-purple-500 to-pink-500",
                hoverColor: "hover:border-purple-200",
                delay: "delay-100",
              },
              {
                icon: Sun,
                title: "Wake Up Refreshed",
                description:
                  "Smart alarm system wakes you during your lightest sleep phase, ensuring you feel energized and alert.",
                gradient: "from-blue-500 to-cyan-500",
                hoverColor: "hover:border-blue-200",
                delay: "delay-200",
              },
              {
                icon: Shield,
                title: "Privacy First",
                description:
                  "Your sleep data is encrypted and stored securely. We never share your personal information with third parties.",
                gradient: "from-green-500 to-emerald-500",
                hoverColor: "hover:border-green-200",
                delay: "delay-300",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 ${feature.hoverColor} animate-slide-up ${feature.delay} hover:scale-105 hover:-translate-y-2`}
              >
                <div
                  className={`bg-gradient-to-r ${feature.gradient} p-4 rounded-xl w-fit mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 animate-bounce-in`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
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
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 animate-slide-up hover:scale-102 hover:-translate-y-1`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center group">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
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
          <div className="text-center mb-16 animate-fade-in-up">
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
                className={`group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-purple-200 animate-slide-up hover:scale-105 hover:-translate-y-2`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current animate-bounce-in"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic group-hover:text-gray-800 transition-colors duration-300">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <span className="text-white font-bold text-lg">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient-shift">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white animate-bounce-in">
            Ready to Transform Your Sleep?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto animate-slide-up delay-200">
            Join thousands of users who have already improved their sleep quality and overall well-being with
            SleepTracker.
          </p>
          <SignInButton>
            <button className="group px-10 py-4 bg-white text-purple-600 hover:bg-gray-50 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-in delay-400 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="flex items-center justify-center relative z-10">
                Start Your Journey Today
                <Moon className="w-5 h-5 ml-2 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              </span>
            </button>
          </SignInButton>
          <p className="text-white/80 text-sm mt-4 animate-fade-in delay-600">
            Free forever • No credit card required • Start in 30 seconds
          </p>
        </div>
      </div>
    </div>
  )
}

export default Guest

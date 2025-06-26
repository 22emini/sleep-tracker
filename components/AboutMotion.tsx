"use client";

import Link from "next/link";
import { Moon, Heart, Users, Target, Zap, Shield, Award, TrendingUp, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";

const AboutMotion = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center justify-center text-center py-24 px-8"
        >
          <div className="flex items-center justify-center mb-8">
            <motion.div
              className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full mr-4 animate-pulse"
              whileHover={{ scale: 1.15, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Moon className="w-12 h-12 text-white" />
            </motion.div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              About SleepTracker
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your ultimate companion for tracking sleep and transforming your health through the power of better rest.
          </p>
          <div className="mt-8 flex items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-500 mr-2" />
              <span>10,000+ Users</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 text-yellow-500 mr-2" />
              <span>Award Winning</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-purple-500 mr-2" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-8 bg-white/50 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          </div>
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full -ml-12 -mb-12"></div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center relative z-10">
              At SleepTracker, we believe that{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                quality sleep is the foundation of a healthy life
              </span>
              . Our mission is to empower individuals with the insights and tools they need to achieve better sleep,
              leading to improved well-being, enhanced productivity, and a happier life.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-8 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Why Choose SleepTracker?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes us the preferred choice for sleep optimization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Comprehensive Tracking",
                description:
                  "Advanced algorithms monitor your sleep patterns, providing detailed insights into sleep stages, duration, and quality metrics.",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50",
              },
              {
                icon: Heart,
                title: "Personalized Insights",
                description:
                  "AI-powered recommendations tailored to your unique sleep patterns and lifestyle for maximum improvement.",
                gradient: "from-pink-500 to-red-500",
                bgGradient: "from-pink-50 to-red-50",
              },
              {
                icon: Zap,
                title: "User-Friendly Design",
                description:
                  "Intuitive interface designed for seamless experience across all devices with beautiful, accessible design.",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group relative bg-gradient-to-br ${feature.bgGradient} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:scale-105`}
              >
                <div className="absolute inset-0 bg-white/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <motion.div
                    className={`bg-gradient-to-r ${feature.gradient} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Happy Users", icon: Users },
              { number: "95%", label: "Better Sleep", icon: Moon },
              { number: "24/7", label: "Support", icon: Clock },
              { number: "4.9★", label: "App Rating", icon: Star },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mb-24"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Our Story</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              SleepTracker was born from a simple observation: despite sleep being crucial for our health, most people
              lack the tools to understand and improve their sleep quality. Our team of{" "}
              <span className="font-semibold text-white">sleep experts, data scientists, and designers</span> came
              together to create a platform that transforms complex sleep data into actionable insights.
            </p>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-lg text-white/80">
                Since our launch, we&apos;ve helped thousands of users achieve better sleep, leading to improved health,
                productivity, and overall life satisfaction.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-8 bg-gradient-to-br from-slate-50 to-blue-50 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/10 to-cyan-400/10 rounded-full -ml-12 -mb-12"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8">
                <Moon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Ready to Sleep Better?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of users who have transformed their sleep and discovered the power of quality rest.
              </p>
              <Link
                href="/sign-up"
                className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Start Your Journey Today</span>
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
              <p className="text-gray-500 text-sm mt-6">Free forever • No credit card required • Start in 30 seconds</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutMotion; 
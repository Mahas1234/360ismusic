"use client";

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Tag, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-white text-sm font-medium">
                Live Deal Updates
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Today's Best{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Amazon Deals
              </span>
              <br />
              in Music & Tech
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Discover incredible savings on guitars, studio gear, headphones, and music accessories. 
              Up to 70% off on premium brands - updated daily.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-200"
              >
                <Link href="#featured-deals">
                  Shop Today's Deals
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full backdrop-blur-sm"
              >
                <Link href="/categories">
                  Browse Categories
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-300">Active Deals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">70%</div>
                <div className="text-sm text-gray-300">Max Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Daily</div>
                <div className="text-sm text-gray-300">Updates</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Deal Card */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Music className="w-8 h-8 text-yellow-400 mr-3" />
                    <span className="text-white font-semibold">Hot Deal</span>
                  </div>
                  <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    -45% OFF
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Audio-Technica ATH-M50x
                </h3>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold text-green-400">$99.99</span>
                  <span className="text-gray-400 line-through">$179.99</span>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-8 -right-8 bg-yellow-400 text-gray-900 rounded-full p-4"
              >
                <Tag className="w-6 h-6" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 bg-blue-500 text-white rounded-full p-3"
              >
                <Music className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
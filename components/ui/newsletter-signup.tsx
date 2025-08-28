"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    setStatus('loading');

    try {
      // In a real app, this would connect to Supabase or your backend
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thanks for subscribing! Check your email for confirmation.');
        setEmail('');
        
        // Track conversion
        if (typeof gtag !== 'undefined') {
          gtag('event', 'newsletter_signup', {
            method: 'email',
            email: email
          });
        }
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Never Miss a Great Deal
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get weekly curated Amazon music deals delivered straight to your inbox. 
            Be the first to know about flash sales and exclusive discounts!
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border-0 text-gray-900 placeholder-gray-500"
                disabled={status === 'loading'}
              />
              <Button
                type="submit"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
          </form>

          {/* Status Messages */}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center justify-center text-white"
            >
              {status === 'success' && <CheckCircle className="w-5 h-5 mr-2" />}
              {status === 'error' && <AlertCircle className="w-5 h-5 mr-2" />}
              <span className="text-sm">{message}</span>
            </motion.div>
          )}

          <p className="text-sm text-white/70 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
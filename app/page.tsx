'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BarChart2,
  Shield,
  Zap,
  Globe,
  Lock,
  RefreshCw,
  Wallet,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                The Future of{' '}
                <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                  Crypto Finance
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Experience the next generation of cryptocurrency trading and investment.
                Secure, fast, and built for the modern world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-pink-500">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <Image
                src="https://picsum.photos/800/600"
                alt="Crypto Platform"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">$147.9B+</div>
              <div className="text-muted-foreground">Trading Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-muted-foreground">Countries Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10M+</div>
              <div className="text-muted-foreground">Verified Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose CryptoFi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BarChart2 className="h-6 w-6" />,
                title: 'Advanced Trading',
                description:
                  'Professional-grade trading tools and real-time market data.',
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: 'Bank-grade Security',
                description:
                  'Multi-signature technology and regular security audits.',
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: 'Lightning Fast',
                description:
                  'Execute trades instantly with our high-performance engine.',
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: 'Global Access',
                description:
                  'Trade from anywhere with our worldwide infrastructure.',
              },
              {
                icon: <Lock className="h-6 w-6" />,
                title: 'Secure Storage',
                description:
                  'Industry-leading cold storage security for your assets.',
              },
              {
                icon: <RefreshCw className="h-6 w-6" />,
                title: '24/7 Trading',
                description:
                  'Markets never sleep, neither does our platform.',
              },
              {
                icon: <Wallet className="h-6 w-6" />,
                title: 'Multi-wallet Support',
                description:
                  'Connect and manage multiple wallets seamlessly.',
              },
              {
                icon: <BarChart2 className="h-6 w-6" />,
                title: 'Advanced Analytics',
                description:
                  'Deep insights and powerful trading analytics tools.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-pink-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join millions of users worldwide and experience the future of crypto
            finance today.
          </p>
          <Button size="lg" variant="secondary">
            Create Your Account
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

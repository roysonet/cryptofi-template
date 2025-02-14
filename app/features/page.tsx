'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Shield,
  Zap,
  BarChart2,
  Globe,
  Lock,
  RefreshCw,
  ArrowRight,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <BarChart2 className="h-12 w-12" />,
      title: 'Advanced Trading Tools',
      description:
        'Professional-grade trading interface with advanced order types, technical analysis tools, and real-time market data.',
      benefits: [
        'Multiple order types',
        'Technical indicators',
        'Price alerts',
        'Portfolio tracking',
      ],
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'Enterprise-grade Security',
      description:
        'State-of-the-art security measures to protect your assets and transactions.',
      benefits: [
        'Multi-signature wallets',
        'Cold storage',
        'Regular security audits',
        'Insurance coverage',
      ],
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: 'High-Performance Engine',
      description:
        'Lightning-fast trade execution and real-time market updates.',
      benefits: [
        'Microsecond latency',
        'High throughput',
        'Real-time updates',
        'Scalable architecture',
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Powerful Features for{' '}
              <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                Modern Trading
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the most advanced cryptocurrency trading platform with
              cutting-edge features designed for both beginners and professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      {features.map((feature, index) => (
        <section
          key={index}
          className={`py-20 ${index % 2 === 1 ? 'bg-accent/50' : ''}`}
        >
          <div className="container mx-auto px-4">
            <div
              className={`flex flex-col lg:flex-row items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } gap-12`}
            >
              <div className="lg:w-1/2">
                <div className="text-primary mb-6">{feature.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <div className="h-2 w-2 bg-primary rounded-full mr-3" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="bg-gradient-to-r from-blue-500 to-pink-500"
                  size="lg"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src={`https://picsum.photos/800/600?random=${index}`}
                  alt={feature.title}
                  width={800}
                  height={600}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-pink-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Experience Our Features Live
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Try our platform with a demo account and explore all features
            risk-free.
          </p>
          <Button size="lg" variant="secondary">
            Start Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

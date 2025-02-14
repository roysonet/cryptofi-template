'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const products = [
  {
    name: 'Basic',
    price: '$0',
    description: 'Perfect for getting started with crypto trading',
    features: [
      'Basic trading features',
      'Market analysis tools',
      'Standard support',
      'Basic wallet features',
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'Advanced features for serious traders',
    features: [
      'Advanced trading tools',
      'Real-time market data',
      'Priority support',
      'Multi-wallet support',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Full-featured solution for institutions',
    features: [
      'Custom trading limits',
      'Dedicated account manager',
      '24/7 phone support',
      'Custom integrations',
      'Advanced security features',
      'SLA guarantees',
    ],
  },
];

export default function Products() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Choose Your Trading{' '}
              <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Select the perfect plan for your crypto trading needs. From beginners
              to institutions, we have you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <div className="text-3xl font-bold mb-4">
                  <span>{product.price}</span>
                  {product.price !== 'Custom' && (
                    <span className="text-lg text-muted-foreground">/month</span>
                  )}
                </div>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                <ul className="space-y-4 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-pink-500"
                  size="lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Detailed Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Basic</th>
                  <th className="py-4 px-6 text-center">Pro</th>
                  <th className="py-4 px-6 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'Trading Limit',
                  'API Access',
                  'Support Level',
                  'Security Features',
                  'Market Analysis',
                  'Custom Integration',
                ].map((feature, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-4 px-6">{feature}</td>
                    <td className="py-4 px-6 text-center">Basic</td>
                    <td className="py-4 px-6 text-center">Advanced</td>
                    <td className="py-4 px-6 text-center">Custom</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

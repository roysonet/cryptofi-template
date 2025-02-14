'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Building2,
  Briefcase,
  Users,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: <Building2 className="h-12 w-12" />,
      title: 'Enterprise',
      description:
        'Comprehensive solutions for large organizations with advanced security and compliance requirements.',
      features: [
        'Custom deployment options',
        'Advanced security features',
        'Dedicated support team',
        'Custom integrations',
      ],
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: 'Business',
      description:
        'Scalable solutions for growing businesses looking to optimize their crypto operations.',
      features: [
        'Multi-user access',
        'Advanced reporting',
        'API access',
        'Priority support',
      ],
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Individual',
      description:
        'Professional tools for individual traders and investors.',
      features: [
        'Advanced trading tools',
        'Portfolio management',
        'Market analysis',
        'Standard support',
      ],
    },
  ];

  const successStories = [
    {
      company: 'TechCorp International',
      logo: 'https://picsum.photos/100/100?random=1',
      quote:
        "CryptoFi has transformed how we manage our crypto assets. The platform's security and ease of use are unmatched.",
      author: 'Sarah Johnson',
      role: 'CTO',
    },
    {
      company: 'Global Investments Ltd',
      logo: 'https://picsum.photos/100/100?random=2',
      quote:
        'The API integration was seamless, and the support team was exceptional throughout the process.',
      author: 'Michael Chen',
      role: 'Head of Trading',
    },
    {
      company: 'Future Finance',
      logo: 'https://picsum.photos/100/100?random=3',
      quote:
        "CryptoFi's enterprise solution has helped us scale our operations efficiently and securely.",
      author: 'David Williams',
      role: 'CEO',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Tailored{' '}
              <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                Solutions
              </span>{' '}
              for Every Need
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how CryptoFi can help your business succeed in the digital
              asset economy with our customizable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className="text-primary mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-pink-500"
                  size="lg"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Customer Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border"
              >
                <div className="flex items-center mb-6">
                  <Image
                    src={story.logo}
                    alt={story.company}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{story.company}</h3>
                    <p className="text-sm text-muted-foreground">
                      {story.author}, {story.role}
                    </p>
                  </div>
                </div>
                <blockquote className="text-muted-foreground">
                  "{story.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-pink-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss how CryptoFi can help your business
            succeed.
          </p>
          <Button size="lg" variant="secondary">
            Contact Sales
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

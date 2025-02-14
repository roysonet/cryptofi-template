'use client';

import { Button } from '@/components/ui/button';
import { Copy, ArrowRight } from 'lucide-react';

export default function API() {
  const endpoints = [
    {
      method: 'GET',
      path: '/v1/market/prices',
      description: 'Get real-time cryptocurrency prices',
      example: `curl -X GET "https://api.cryptofi.com/v1/market/prices" \\
-H "Authorization: Bearer YOUR_API_KEY"`,
    },
    {
      method: 'POST',
      path: '/v1/orders',
      description: 'Create a new trading order',
      example: `curl -X POST "https://api.cryptofi.com/v1/orders" \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  "symbol": "BTC-USD",
  "side": "buy",
  "type": "limit",
  "price": "50000",
  "size": "0.1"
}'`,
    },
    {
      method: 'GET',
      path: '/v1/account',
      description: 'Get account information and balances',
      example: `curl -X GET "https://api.cryptofi.com/v1/account" \\
-H "Authorization: Bearer YOUR_API_KEY"`,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Powerful and Flexible{' '}
              <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                API
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Build custom trading solutions with our comprehensive API. Access
              real-time data, execute trades, and manage accounts programmatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-pink-500"
              >
                Get API Keys
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">API Reference</h2>
          <div className="space-y-8">
            {endpoints.map((endpoint, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      endpoint.method === 'GET'
                        ? 'bg-green-500/20 text-green-500'
                        : 'bg-blue-500/20 text-blue-500'
                    }`}
                  >
                    {endpoint.method}
                  </span>
                  <code className="text-sm bg-accent/50 px-3 py-1 rounded">
                    {endpoint.path}
                  </code>
                </div>
                <p className="text-muted-foreground mb-4">
                  {endpoint.description}
                </p>
                <div className="relative">
                  <pre className="bg-accent/50 p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{endpoint.example}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() =>
                      navigator.clipboard.writeText(endpoint.example)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Authentication</h2>
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4">API Key Authentication</h3>
            <p className="text-muted-foreground mb-4">
              All API requests must include your API key in the Authorization
              header:
            </p>
            <pre className="bg-accent/50 p-4 rounded-lg overflow-x-auto mb-6">
              <code className="text-sm">
                Authorization: Bearer YOUR_API_KEY
              </code>
            </pre>
            <div className="space-y-4">
              <h4 className="font-semibold">Security Best Practices:</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Never share your API keys</li>
                <li>Rotate keys regularly</li>
                <li>Use IP whitelisting</li>
                <li>Monitor API usage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

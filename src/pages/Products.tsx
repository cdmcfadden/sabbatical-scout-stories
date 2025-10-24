import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import blueprintBg from '@/assets/blueprint-negative.png';

const Products = () => {
  const [isHovered, setIsHovered] = useState(false);
  const products = [
    {
      title: "Hyline Carbon",
      description: "Advanced platform for real-time personal health insights and accountability",
      status: "Design Phase | Prototype Anticipated 2025"
    },
    {
      title: "Resolv",
      description: "Scalable workflow creation tool w/ native real-time analytics",
      status: "Prototype Phase | v1 Launch Anticipated Q1, 2026"
    },
    {
      title: "Cambr",
      description: "Configurable Accountability Mesh Network (CAMN) for personalized peer-to-peer performance management",
      status: "Ideation Phase | Stay Tuned..."
    },
    {
      title: "Nymity",
      description: "Sensor based identification and authentication technology platform",
      status: "Ideation Phase | Stay Tuned..."
    },
    {
      title: "The Brevists",
      description: "Dynamic global community of travelers comparing unique experiences, preferences, and learnings",
      status: "Research Phase | Currently Below the Line"
    }
  ];

  return (
    <div 
      className="min-h-screen text-foreground transition-all duration-500 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: isHovered ? `url(${blueprintBg})` : 'none',
        backgroundColor: isHovered ? 'transparent' : 'hsl(var(--background))'
      }}
    >
      <Navigation />
      
      <main className="pt-32 pb-20 container mx-auto px-6">
        <h1 
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-500"
          style={isHovered ? { WebkitTextStroke: '1px white' } : {}}
        >
          Our Products
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          Innovative solutions designed to serve the user
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary hover:bg-card/60 transition-colors"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <CardHeader>
                <CardTitle className="text-primary">{product.title}</CardTitle>
                <CardDescription className="text-accent">{product.status}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;

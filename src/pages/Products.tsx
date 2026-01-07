import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import blueprintBg from '@/assets/blueprint-negative.png';
const Products = () => {
  const products = [{
    title: "Hyline Carbon",
    description: "Advanced platform for real-time personal health insights and accountability",
    status: "Design Phase | Prototype Anticipated Q1, 2026",
    backgroundPosition: "0% 0%"
  }, {
    title: "Resolv",
    description: "Scalable workflow creation tool w/ native real-time analytics",
    status: "Prototype Phase | v1 Launch Anticipated Q2, 2026",
    backgroundPosition: "100% 0%"
  }, {
    title: "Cambr",
    description: "Configurable Accountability Mesh Network (CAMN) for personalized peer-to-peer performance management",
    status: "Ideation Phase | Stay Tuned...",
    backgroundPosition: "50% 50%"
  }, {
    title: "Nymity",
    description: "Sensor based identification and authentication technology platform",
    status: "Ideation Phase | Stay Tuned...",
    backgroundPosition: "0% 100%"
  }, {
    title: "Brevist",
    description: "Dynamic global community of travelers comparing unique experiences, preferences, and learnings",
    status: "Research Phase | Currently Below the Line",
    backgroundPosition: "100% 100%"
  }];
  return <div className="min-h-screen text-foreground bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          The Foundry
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">Our pipeline of innovative products and platforms</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20" style={{
              backgroundImage: 'none',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.backgroundImage = `url(${blueprintBg})`;
              e.currentTarget.style.backgroundSize = '200%';
              e.currentTarget.style.backgroundPosition = product.backgroundPosition;
            }} onMouseLeave={(e) => {
              e.currentTarget.style.backgroundImage = 'none';
            }}>
              <CardHeader>
                <CardTitle className="text-primary">{product.title}</CardTitle>
                <CardDescription className="text-accent">{product.status}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>)}
        </div>
      </main>
    </div>;
};
export default Products;
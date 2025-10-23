import Navigation from '@/components/Navigation';
import heroImage from '@/assets/barlow-hero.jpeg';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const Home = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0" style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0" />
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Welcome to Barlow Labs
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">Rethinking the human machine interface (HMI) through person-centric innovation, data, design, and cutting-edge technology</p>
            <Button size="lg" className="gap-2">
              Explore Our Work <ArrowRight size={20} />
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-card border border-border hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-primary">Humanity Over Technology</h3>
              <p className="text-muted-foreground">
                Pushing boundaries with breakthrough technologies and forward-thinking solutions
              </p>
            </div>
            <div className="p-8 rounded-lg bg-card border border-border hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-accent">Humanity In Technology</h3>
              <p className="text-muted-foreground">
                Leveraging advanced analytics and insights to drive meaningful results
              </p>
            </div>
            <div className="p-8 rounded-lg bg-card border border-border hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-primary">Humanity Through Technology</h3>
              <p className="text-muted-foreground">
                Committed to delivering exceptional quality in everything we create
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>;
};
export default Home;
import Navigation from '@/components/Navigation';
import heroImage from '@/assets/barlow-hero.jpeg';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-12">
          <div className="absolute inset-0 z-0" style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0" />
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-10 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Welcome to Barlow Labs
            </h1>
            <div className="grid gap-3 max-w-2xl mx-auto">
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-4">
                  <p className="text-lg text-muted-foreground">
                    <span className="text-foreground font-semibold">Our Guiding Principle:</span> Humanity Over Technology.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-4">
                  <p className="text-lg text-muted-foreground">
                    <span className="text-foreground font-semibold">Our Product Design Ethic:</span> Rethink the human-machine interface based on an upgraded razor: a person must not serve their tech.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-4">
                  <p className="text-lg text-muted-foreground">
                    <span className="text-foreground font-semibold">Our Customer Imperative:</span> Strive to leave no wo/man where we find them, alone, abandoned, or lost in the machinery. We promote search and rescue.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Visual Divider */}
        <div className="container mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        {/* About Section */}
        <section className="py-12 container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground text-lg text-center">
            <p>Our stealth venture develops human-centric tech. We are part of the revolution of builders obsessed with creating, harnessing, customizing, and controlling data to serve our own human needs. When done with purpose, we believe this unlocks forgotten levels of accountability and community.</p>
            
            <p>We practice like we play and are assembling a global network of domain experts, luminaries, and unorthodox dreamers that are passionate about contributing to a new way to size tech to the humans it must serve. Maybe you know one of those people or are one yourself.</p>
            
            <p>Our headquarters is in the fractal known as Seattle, surrounded by national parks, alpine lakes, and mountains still waiting to be named. We believe beautiful places make the best tech.</p>
          </div>
        </section>

      </main>
    </div>;
};
export default Home;
import Navigation from '@/components/Navigation';
import heroImage from '@/assets/barlow-hero.jpeg';
const Home = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
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
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-8 rounded-lg bg-card hover:!bg-white border border-border hover:border-primary transition-colors overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-black transition-colors">Humanity Over Technology</h3>
                <p className="text-muted-foreground group-hover:text-black transition-colors">
                  Building products based on a new razor for society - a person must not serve their tech
                </p>
              </div>
            </div>
            <div className="relative p-8 rounded-lg bg-card hover:!bg-white border border-border hover:border-primary transition-colors overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-accent group-hover:text-black transition-colors">Humanity In Technology</h3>
                <p className="text-muted-foreground group-hover:text-black transition-colors">
                  Leveraging new analytics engines for insight on the human condition - we co-evolve together
                </p>
              </div>
            </div>
            <div className="relative p-8 rounded-lg bg-card hover:!bg-white border border-border hover:border-primary transition-colors overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-black transition-colors">Humanity Through Technology</h3>
                <p className="text-muted-foreground group-hover:text-black transition-colors">
                  Making good on a new objective function - leave no wo/man where you found them
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 container mx-auto px-6">
          <div className="max-w-3xl space-y-6 text-muted-foreground text-lg">
            <p>Our stealth venture develops human-centric tech. We are part of the revolution of builders obsessed with creating, harnessing, customizing, and controlling data to serve our own human needs. When done with purpose, we believe this unlocks forgotten levels of accountability and community.</p>
            
            <p>We practice like we play and are assembling a global network of domain experts, luminaries, and unorthodox dreamers that are passionate about contributing to a new way to size tech to the humans it must serve. Maybe you know one of those people or are one yourself.</p>
            
            <p>Our headquarters is in the fractal known as Seattle, surrounded by national parks, alpine lakes, and mountains still waiting to be named. We believe beautiful places make the best tech.</p>
          </div>
        </section>
      </main>
    </div>;
};
export default Home;
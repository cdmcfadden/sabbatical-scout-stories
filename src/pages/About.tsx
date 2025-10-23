import Navigation from '@/components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-20 container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Barlow Labs
        </h1>
        
        <div className="max-w-3xl space-y-6 text-muted-foreground text-lg">
          <p>
            Barlow Labs is a new stealth start-up working backwards from our observations on the design and intended purpose of the human machine. We are obsessed with inventing and scaling personalized technology solutions that drive performance, accountability, and human health outcomes.
          </p>
          
          <p>
            Founded with a vision to transform industries through intelligent solutions, we partner
            with forward-thinking organizations to solve their most complex challenges.
          </p>
          
          <p>
            Our team of world-class engineers, researchers, and designers work together to create
            products that don't just meet today's needs, but anticipate tomorrow's possibilities.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;

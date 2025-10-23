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
            Barlow Labs is a new stealth start-up working backwards from our observations on the design and intended purpose of the human machine. We are obsessed with inventing and scaling personalized technology solutions that drive performance, accountability, and human health outcomes. People drive everything.
          </p>
          
          <p>
            We 'practice like we play' and are developing a global network of domain experts, luminaries, and unorthodox dreamers that are passionate about contributing to a new way to size tech to the humans it must serve.
          </p>
          
          <p>
            We are based in the fractal known as Seattle, surrounded by three national parks and mountain peaks no-one's gotten around to naming yet. We believe beautiful places make the best tech.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;

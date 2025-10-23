import Navigation from '@/components/Navigation';

const Story = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-20 container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Our Story
        </h1>
        
        <div className="max-w-3xl space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">The Beginning</h2>
            <p className="text-muted-foreground text-lg">
              Barlow Labs was born from a simple idea: technology should empower, not complicate.
              In 2020, our founder recognized a gap between cutting-edge innovation and practical
              business applications.
            </p>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold text-accent mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">
              What started as a small team of passionate engineers has grown into a leading force
              in the tech industry. We've partnered with Fortune 500 companies, innovative startups,
              and everything in between.
            </p>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Looking Forward</h2>
            <p className="text-muted-foreground text-lg">
              As we continue to grow, our mission remains unchanged: to create technology that
              transforms how people work, live, and connect. The future is being built today,
              and we're excited to be part of it.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Story;

import Navigation from '@/components/Navigation';
const About = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-20 container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Barlow Labs
        </h1>
        
        <div className="max-w-3xl text-muted-foreground text-lg">
          <p>More details coming soon.</p>
        </div>
      </main>
    </div>;
};
export default About;
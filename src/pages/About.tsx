import Navigation from '@/components/Navigation';
const About = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-20 container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Barlow Labs
        </h1>
        
        <div className="max-w-3xl space-y-6 text-muted-foreground text-lg">
          <p>Our stealth venture develops human-centric tech. We are part of the revolution of builders obsessed with creating, harnessing, customizing, and controlling data to serve our own human needs. When done with purpose, we believe this unlocks forgotten levels of accountability and community. </p>
          
          <p>We 'practice like we play' and are developing a global network of domain experts, luminaries, and unorthodox dreamers that are passionate about contributing to a new way to size tech to the humans it must serve. Maybe you know one of those people or are one yourself.</p>
          
          <p>Our headquarters is in the fractal known as Seattle, surrounded by national parks, alpine lakes, and mountains still waiting to be named. We believe beautiful places make the best tech.</p>
        </div>
      </main>
    </div>;
};
export default About;
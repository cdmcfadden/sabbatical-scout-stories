import Navigation from '@/components/Navigation';
const About = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-20 container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Barlow Labs
        </h1>
        
        <div className="max-w-3xl space-y-6 text-muted-foreground text-lg">
          <p>A stealth venture developing human-centric tech. We are part of the revolution in creating, harnessing, customizing, and controlling our data to serve our own every day human needs. When done with purpose, we believe this unlocks forgotten levels of accountability and community. At Barlow Labs, people drive everything we do.</p>
          
          <p>We 'practice like we play' and are developing a global network of domain experts, luminaries, and unorthodox dreamers that are passionate about contributing to a new way to size tech to the humans it must serve. Maybe you know one of those people or are one yourself.</p>
          
          <p>
            We are based in the fractal known as Seattle, surrounded by three national parks and mountain peaks no-one's gotten around to naming yet. We believe beautiful places make the best tech.
          </p>
        </div>
      </main>
    </div>;
};
export default About;
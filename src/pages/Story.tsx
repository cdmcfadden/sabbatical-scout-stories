import Navigation from '@/components/Navigation';
import MailingListDialog from '@/components/MailingListDialog';
const Story = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-20 container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Our Story
        </h1>
        
        <div className="max-w-3xl space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Our Early Inspiration</h2>
            <p className="text-muted-foreground text-lg">We fight for the user and take inspiration from the early promises made by leading technologists: invisible computing, global human connections, enhanced self-knowledge, expanded capabilities. The chance to be as human as we've ever been. The decision to make the first check-point of design not: will people buy this, but: will people become who they were meant to be through it. That is our design ethic and thinking this way leads to different products, different people, and a different company. </p>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold text-accent mb-4">Our Emerging Journey</h2>
            <p className="text-muted-foreground text-lg">What started as a single idea became a complex set of nested products, requiring sequential development, testing, and refinement for PMF and scale. This has required the founding of an innovation lab for core platform and product concept refinement. Products prove their human value, then their market value, and then each is graduated out of Barlow Labs and advanced into a stand alone venture, receiving incrementally more resourcing and funding. Our goal is to maintain a constant innovation drumbeat.</p>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Our Vision for The Future</h2>
            <p className="text-muted-foreground text-lg">
              We imagine an impossible future, but one that we are more than willing to devote our time, energy, and effort to fractionally realize: a world where traditional measures of success give up their seat to the true human flourishing that good tech promotes: reconciliation, sacrificial love, admission of your mistakes, rescue of those in need. A body, mind, and soul at peace. A kind word offered to a broken stranger that is becoming numb to the world's tragedies. We remain in stealth mode, but we look forward to the time soon that we can engage with interested users and new community members. If you would like to be added to our mailing list please click the link below.
            </p>
            <MailingListDialog />
          </section>
        </div>
      </main>
    </div>;
};
export default Story;
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
            <h2 className="text-3xl font-bold text-primary mb-4">The Beginning</h2>
            <p className="text-muted-foreground text-lg">We fight for the user. This was our first and only rallying cry. We took early inspiration from the inherent promises of invisible computing and human-centric design ethics. We think it's time to bring this back, with vengeance. Our beginning is focused on product-izable solutions that meet the daily human needs in front of us today.</p>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold text-accent mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">
              What started as a single idea became a complex set of nested products, requiring sequential development, testing, and refinement for PMF and scale. This has resulted in the establishment of an innovation lab for core platform and product concept refinement. As products prove their market value, each is graduated out of Barlow Labs and advanced into a stand alone venture, with incrementally more resourcing and funding.
            </p>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Looking Forward</h2>
            <p className="text-muted-foreground text-lg">
              We remain in stealth mode, but we look forward to the time soon that we can engage with interested users and new community members. If you would like to be added to our mailing list please click the link below.
            </p>
            <MailingListDialog />
          </section>
        </div>
      </main>
    </div>;
};
export default Story;
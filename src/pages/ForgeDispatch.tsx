import Navigation from '@/components/Navigation';

const ForgeDispatch = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-20 container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Forge Dispatch
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          More details coming soon.
        </p>
      </main>
    </div>
  );
};

export default ForgeDispatch;
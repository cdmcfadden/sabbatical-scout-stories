import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
const Bench = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-20 container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          The Workbench
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          Access pilot test websites and applications. User credentials required for participation.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-primary">Getting Started</CardTitle>
              <CardDescription>Information for pilot testers</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To participate in pilot testing, you must have received invitation credentials from our team. 
                Contact us if you're interested in becoming a pilot tester.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-primary">Test Environment Access</CardTitle>
              <CardDescription>Active pilot programs available for testing</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have been provided with user credentials, you can access our pilot test environments here.
              </p>
              <Button variant="outline" className="w-full mb-3" asChild>
                <a href="https://nimble-phoenix-de308d.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Active Pilot #1: F2L
                </a>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Portal to Active Pilot #2: Tuesdays
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>;
};
export default Bench;
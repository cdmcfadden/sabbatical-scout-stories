
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { FirecrawlService } from "@/services/FirecrawlService";

export const ApiKeyForm = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const isValid = await FirecrawlService.testApiKey(apiKey);
      
      if (isValid) {
        FirecrawlService.saveApiKey(apiKey);
        toast({
          title: "Success",
          description: "API key saved successfully",
          duration: 3000,
        });
      } else {
        toast({
          title: "Error",
          description: "Invalid API key",
          variant: "destructive",
          duration: 3000,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to validate API key",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">Enter Your Firecrawl API Key</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full"
              placeholder="Your Firecrawl API Key"
              required
            />
            <p className="text-xs text-muted-foreground">
              You need a <a href="https://firecrawl.dev" target="_blank" rel="noreferrer" className="underline">Firecrawl API key</a> to use this application.
            </p>
          </div>
          <Button 
            type="submit" 
            disabled={isLoading} 
            className="w-full bg-sabbatical-600 hover:bg-sabbatical-700"
          >
            {isLoading ? "Validating..." : "Save API Key"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

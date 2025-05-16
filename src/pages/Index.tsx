
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ApiKeyForm } from '@/components/ApiKeyForm';
import { SabbaticalSearchForm } from '@/components/SabbaticalSearchForm';
import { SabbaticalExampleCard } from '@/components/SabbaticalExampleCard';
import { FirecrawlService, SabbaticalExample } from '@/services/FirecrawlService';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Loader2, BookPlus, Search } from 'lucide-react';

const Index = () => {
  const { toast } = useToast();
  const [hasApiKey, setHasApiKey] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<SabbaticalExample[]>([]);
  const [savedExamples, setSavedExamples] = useState<SabbaticalExample[]>([]);
  const [activeTab, setActiveTab] = useState('search');

  // Check if API key exists on load
  useEffect(() => {
    const apiKey = FirecrawlService.getApiKey();
    setHasApiKey(!!apiKey);
    
    // Load saved examples
    const examples = FirecrawlService.getSavedExamples();
    setSavedExamples(examples);
  }, []);

  const handleSearch = async (searchTerm: string) => {
    setIsLoading(true);
    setSearchResults([]);
    
    try {
      const result = await FirecrawlService.crawlForSabbaticals(searchTerm);
      
      if (result.success && result.data) {
        setSearchResults(result.data);
        
        if (result.data.length === 0) {
          toast({
            title: "No results found",
            description: "Try a different search term or be more specific.",
            duration: 3000,
          });
        } else {
          toast({
            title: "Search completed",
            description: `Found ${result.data.length} sabbatical examples.`,
            duration: 3000,
          });
        }
      } else {
        toast({
          title: "Search failed",
          description: result.error || "Error searching for sabbatical examples",
          variant: "destructive",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error('Error searching:', error);
      toast({
        title: "Search error",
        description: "An unexpected error occurred",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const saveExample = (example: SabbaticalExample) => {
    FirecrawlService.saveExample(example);
    const updatedExamples = FirecrawlService.getSavedExamples();
    setSavedExamples(updatedExamples);
    
    toast({
      title: "Example saved",
      description: "Sabbatical example added to your collection",
      duration: 2000,
    });
  };

  const removeExample = (id: string) => {
    FirecrawlService.removeExample(id);
    const updatedExamples = FirecrawlService.getSavedExamples();
    setSavedExamples(updatedExamples);
    
    toast({
      title: "Example removed",
      description: "Sabbatical example removed from your collection",
      duration: 2000,
    });
  };

  const isExampleSaved = (id: string) => {
    return savedExamples.some(example => example.id === id);
  };

  if (!hasApiKey) {
    return (
      <div className="min-h-screen p-6 flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-sabbatical-800 mb-2">Sabbatical Explorer</h1>
            <p className="text-lg text-muted-foreground">
              Discover real-world sabbatical experiences from business professionals
            </p>
          </div>
          
          <ApiKeyForm />
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            This application uses Firecrawl to search for and analyze sabbatical experiences across the web. <br />
            Setup your API key to get started.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-6 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-sabbatical-800 mb-2">Sabbatical Explorer</h1>
          <p className="text-lg text-muted-foreground">
            Discover real-world sabbatical experiences from business professionals
          </p>
        </div>
        
        <Tabs 
          defaultValue="search" 
          className="w-full"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="search" className="flex items-center gap-2">
              <Search size={16} />
              <span>Search Examples</span>
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex items-center gap-2">
              <BookPlus size={16} />
              <span>Saved Examples ({savedExamples.length})</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="search" className="space-y-6">
            <SabbaticalSearchForm onSearch={handleSearch} isLoading={isLoading} />
            
            {isLoading ? (
              <div className="flex flex-col items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-sabbatical-600" />
                <p className="mt-4 text-muted-foreground">Searching for sabbatical examples...</p>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.map(example => (
                  <SabbaticalExampleCard 
                    key={example.id}
                    example={example} 
                    isSaved={isExampleSaved(example.id)}
                    onSave={saveExample}
                    onRemove={removeExample}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                {/* Show this only if the user has performed a search but got no results */}
                Use the search form above to find sabbatical examples.
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="saved">
            {savedExamples.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {savedExamples.map(example => (
                  <SabbaticalExampleCard 
                    key={example.id}
                    example={example} 
                    isSaved={true}
                    onSave={saveExample}
                    onRemove={removeExample}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground flex flex-col items-center gap-4">
                <p>You haven't saved any sabbatical examples yet.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setActiveTab('search')}
                  className="flex items-center gap-2"
                >
                  <Search size={16} />
                  Go to Search
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;


import FirecrawlApp from '@mendable/firecrawl-js';

interface ErrorResponse {
  success: false;
  error: string;
}

interface CrawlStatusResponse {
  success: true;
  status: string;
  completed: number;
  total: number;
  creditsUsed: number;
  expiresAt: string;
  data: any[];
}

type CrawlResponse = CrawlStatusResponse | ErrorResponse;

export interface SabbaticalExample {
  id: string;
  name: string;
  title?: string;
  company?: string;
  location?: string;
  duration?: string;
  learnings?: string;
  cost?: string;
  source?: string;
  rawContent?: string;
}

export class FirecrawlService {
  private static API_KEY_STORAGE_KEY = 'firecrawl_api_key';
  private static firecrawlApp: FirecrawlApp | null = null;

  static saveApiKey(apiKey: string): void {
    localStorage.setItem(this.API_KEY_STORAGE_KEY, apiKey);
    this.firecrawlApp = new FirecrawlApp({ apiKey });
    console.log('API key saved successfully');
  }

  static getApiKey(): string | null {
    return localStorage.getItem(this.API_KEY_STORAGE_KEY);
  }

  static async testApiKey(apiKey: string): Promise<boolean> {
    try {
      console.log('Testing API key with Firecrawl API');
      this.firecrawlApp = new FirecrawlApp({ apiKey });
      // A simple test crawl to verify the API key
      const testResponse = await this.firecrawlApp.crawlUrl('https://example.com', {
        limit: 1
      });
      return testResponse.success;
    } catch (error) {
      console.error('Error testing API key:', error);
      return false;
    }
  }

  static async crawlForSabbaticals(searchTerm: string): Promise<{ success: boolean; error?: string; data?: SabbaticalExample[] }> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      return { success: false, error: 'API key not found' };
    }

    try {
      console.log('Making crawl request to Firecrawl API');
      if (!this.firecrawlApp) {
        this.firecrawlApp = new FirecrawlApp({ apiKey });
      }

      // Create a more targeted search query
      const query = `${searchTerm} business professional sabbatical "took a sabbatical" experience`;
      
      const crawlResponse = await this.firecrawlApp.crawlUrl(`https://www.google.com/search?q=${encodeURIComponent(query)}`, {
        limit: 20,
        scrapeOptions: {
          formats: ['markdown', 'html']
        }
      }) as CrawlResponse;

      if (!crawlResponse.success) {
        console.error('Crawl failed:', (crawlResponse as ErrorResponse).error);
        return { 
          success: false, 
          error: (crawlResponse as ErrorResponse).error || 'Failed to crawl website' 
        };
      }

      console.log('Crawl successful:', crawlResponse);
      
      // Process the crawl data to extract sabbatical examples
      const examples = this.processCrawlResults(crawlResponse);
      
      return { 
        success: true,
        data: examples 
      };
    } catch (error) {
      console.error('Error during crawl:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to connect to Firecrawl API' 
      };
    }
  }

  private static processCrawlResults(response: CrawlStatusResponse): SabbaticalExample[] {
    const examples: SabbaticalExample[] = [];
    
    if (!response.data || !Array.isArray(response.data)) {
      return examples;
    }
    
    // Process each page in the crawl results
    response.data.forEach((page, index) => {
      if (!page.content) return;
      
      const content = page.content.trim();
      
      // Simple extraction for demonstration, in a real app this would need more sophisticated parsing
      // or potentially use AI to extract the specific information
      const paragraphs = content.split('\n\n');
      
      // Look for paragraphs that mention sabbaticals
      const sabbaticalParagraphs = paragraphs.filter(p => 
        p.toLowerCase().includes('sabbatical') && 
        !p.toLowerCase().includes('what is a sabbatical')
      );
      
      if (sabbaticalParagraphs.length > 0) {
        const id = `example-${index}-${Date.now()}`;
        
        // Try to extract information - in a real app, this would be much more sophisticated
        const nameMatch = content.match(/([A-Z][a-z]+ [A-Z][a-z]+) (?:took|went on|had) a sabbatical/i);
        const name = nameMatch ? nameMatch[1] : "Unknown Professional";
        
        const locationMatch = content.match(/(?:to|in) ([A-Z][a-z]+(?: [A-Z][a-z]+)*)/i);
        const location = locationMatch ? locationMatch[1] : undefined;
        
        const durationMatch = content.match(/(?:for|during) (\d+(?:\.\d+)? (?:month|week|year)s?)/i);
        const duration = durationMatch ? durationMatch[1] : undefined;
        
        const costMatch = content.match(/(?:spent|cost|around|approximately) \$?([\d,]+(?:\.\d+)?)/i);
        const cost = costMatch ? `$${costMatch[1]}` : undefined;
        
        examples.push({
          id,
          name,
          location,
          duration,
          cost,
          learnings: "Information extraction would require more advanced analysis",
          source: page.url,
          rawContent: sabbaticalParagraphs.join('\n\n')
        });
      }
    });
    
    return examples;
  }
  
  static getSavedExamples(): SabbaticalExample[] {
    const savedExamplesJson = localStorage.getItem('saved_sabbatical_examples');
    return savedExamplesJson ? JSON.parse(savedExamplesJson) : [];
  }
  
  static saveExample(example: SabbaticalExample): void {
    const savedExamples = this.getSavedExamples();
    if (!savedExamples.some(e => e.id === example.id)) {
      savedExamples.push(example);
      localStorage.setItem('saved_sabbatical_examples', JSON.stringify(savedExamples));
    }
  }
  
  static removeExample(id: string): void {
    const savedExamples = this.getSavedExamples();
    const updatedExamples = savedExamples.filter(e => e.id !== id);
    localStorage.setItem('saved_sabbatical_examples', JSON.stringify(updatedExamples));
  }
}

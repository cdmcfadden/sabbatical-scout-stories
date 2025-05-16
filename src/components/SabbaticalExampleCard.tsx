
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookmarkPlus, ExternalLink, BookmarkCheck, MapPin, Clock, Lightbulb, DollarSign, Info } from "lucide-react";
import { SabbaticalExample } from "@/services/FirecrawlService";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SabbaticalExampleCardProps {
  example: SabbaticalExample;
  isSaved: boolean;
  onSave: (example: SabbaticalExample) => void;
  onRemove: (id: string) => void;
}

export const SabbaticalExampleCard: React.FC<SabbaticalExampleCardProps> = ({ 
  example, 
  isSaved,
  onSave,
  onRemove 
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleSaveToggle = () => {
    if (isSaved) {
      onRemove(example.id);
    } else {
      onSave(example);
    }
  };

  const formatSource = (url: string | undefined) => {
    if (!url) return "Unknown source";
    try {
      const urlObj = new URL(url);
      return urlObj.hostname;
    } catch {
      return url;
    }
  };

  return (
    <Card className="w-full h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg line-clamp-1">{example.name || "Unknown Professional"}</CardTitle>
            <CardDescription className="line-clamp-1">
              {example.title && example.company 
                ? `${example.title} at ${example.company}`
                : example.title || example.company || "Business Professional"
              }
            </CardDescription>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleSaveToggle}
            className={isSaved ? "text-sabbatical-600" : ""}
          >
            {isSaved ? <BookmarkCheck size={18} /> : <BookmarkPlus size={18} />}
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow pb-3">
        <div className="space-y-3">
          {example.location && (
            <div className="flex gap-2 items-start">
              <MapPin size={16} className="shrink-0 mt-1 text-sabbatical-500" />
              <span className="text-sm line-clamp-1">{example.location}</span>
            </div>
          )}
          
          {example.duration && (
            <div className="flex gap-2 items-start">
              <Clock size={16} className="shrink-0 mt-1 text-sabbatical-500" />
              <span className="text-sm line-clamp-1">{example.duration}</span>
            </div>
          )}
          
          {example.cost && (
            <div className="flex gap-2 items-start">
              <DollarSign size={16} className="shrink-0 mt-1 text-sabbatical-500" />
              <span className="text-sm line-clamp-1">{example.cost}</span>
            </div>
          )}
          
          {example.learnings && (
            <div className="flex gap-2 items-start">
              <Lightbulb size={16} className="shrink-0 mt-1 text-sabbatical-500" />
              <span className="text-sm line-clamp-2">{example.learnings}</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 flex justify-between">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="text-xs gap-1">
              <Info size={14} /> View Details
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{example.name || "Unknown Professional"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {example.location && (
                  <div>
                    <h4 className="text-sm font-semibold flex gap-2 items-center mb-1">
                      <MapPin size={16} /> Location
                    </h4>
                    <p>{example.location}</p>
                  </div>
                )}
                
                {example.duration && (
                  <div>
                    <h4 className="text-sm font-semibold flex gap-2 items-center mb-1">
                      <Clock size={16} /> Duration
                    </h4>
                    <p>{example.duration}</p>
                  </div>
                )}
                
                {example.cost && (
                  <div>
                    <h4 className="text-sm font-semibold flex gap-2 items-center mb-1">
                      <DollarSign size={16} /> Cost
                    </h4>
                    <p>{example.cost}</p>
                  </div>
                )}
                
                {example.learnings && (
                  <div className="md:col-span-2">
                    <h4 className="text-sm font-semibold flex gap-2 items-center mb-1">
                      <Lightbulb size={16} /> Learnings
                    </h4>
                    <p>{example.learnings}</p>
                  </div>
                )}
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-sm font-semibold mb-2">Source Content</h4>
                <ScrollArea className="h-64 rounded-md border p-4">
                  {example.rawContent || "No detailed content available."}
                </ScrollArea>
              </div>
              
              {example.source && (
                <div className="flex justify-end">
                  <a 
                    href={example.source} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sabbatical-600 hover:text-sabbatical-700 text-sm font-medium flex items-center gap-1"
                  >
                    View Source <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
        
        {example.source && (
          <a
            href={example.source}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground flex items-center gap-1 hover:text-sabbatical-600"
          >
            {formatSource(example.source)} <ExternalLink size={12} />
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

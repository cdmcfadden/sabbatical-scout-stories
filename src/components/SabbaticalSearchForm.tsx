
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";

interface SabbaticalSearchFormProps {
  onSearch: (searchTerm: string) => void;
  isLoading: boolean;
}

export const SabbaticalSearchForm: React.FC<SabbaticalSearchFormProps> = ({ onSearch, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <Card className="w-full shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl text-center">Find Sabbatical Examples</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
              placeholder="Search for industry, role, company or interest..."
            />
            <Button 
              type="submit" 
              disabled={isLoading || !searchTerm.trim()}
              className="bg-sabbatical-600 hover:bg-sabbatical-700 flex gap-2"
            >
              <Search size={18} />
              <span className="hidden sm:inline">{isLoading ? "Searching..." : "Search"}</span>
            </Button>
          </div>
          <div className="text-xs text-muted-foreground">
            Try searching by industry (tech, finance), role (CEO, engineer), or specific interests.
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

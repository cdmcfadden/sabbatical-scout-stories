import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Blog = () => {
  const posts = [
    {
      title: "Sparkline: Introducing the H.O.T. Composite Index",
      date: "November 15, 2025 (not yet published)",
      excerpt: "Scoring existing technologies on their contribution to the Humans Over Technology scale and what this means for you."
    },
    {
      title: "Data Privacy in the Modern Age",
      date: "March 10, 2024",
      excerpt: "Understanding the importance of data security and privacy in today's interconnected world."
    },
    {
      title: "Building Scalable Cloud Architecture",
      date: "March 5, 2024",
      excerpt: "Best practices for designing and implementing cloud infrastructure that grows with your business."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-20 container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Blog
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          Insights, updates, and thoughts from the Barlow Labs team
        </p>
        
        <div className="max-w-4xl space-y-6">
          {posts.map((post, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="text-primary">{post.title}</CardTitle>
                <CardDescription className="text-accent">{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;

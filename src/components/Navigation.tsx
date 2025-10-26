import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-foreground">
            Barlow Labs
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              to="/about" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link 
              to="/products" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Foundry
            </Link>
            <Link 
              to="/story" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Story
            </Link>
            <Link 
              to="/blog" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

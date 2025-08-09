import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="404 | Page not found"
        description="The page you're looking for doesn't exist."
        canonical="/404"
        noindex
      />
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">Page not found</h1>
          <p className="text-muted-foreground mb-6">Sorry, we couldn't find that page.</p>
          <Button asChild>
            <Link to="/">Back to home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;

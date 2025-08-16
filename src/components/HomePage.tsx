import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Truck, Shield, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-banner.jpg";
import electronicsImage from "@/assets/electronics-category.jpg";
import fashionImage from "@/assets/fashion-category.jpg";
import craftsImage from "@/assets/crafts-category.jpg";

const HomePage = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      name: "Electronics",
      image: electronicsImage,
      description: "Latest tech & gadgets",
      itemCount: "1,200+ items"
    },
    {
      name: "Fashion",
      image: fashionImage,
      description: "Style for every occasion",
      itemCount: "850+ items"
    },
    {
      name: "Local Crafts",
      image: craftsImage,
      description: "Authentic handmade treasures",
      itemCount: "420+ items"
    }
  ];

  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day delivery in major cities"
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Your data and payments are protected"
    },
    {
      icon: Star,
      title: "Quality Guaranteed",
      description: "Verified sellers and authentic products"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-24 lg:py-32"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              Shop the treasures of today, inspired by <span className="text-yellow-200">Petra</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 drop-shadow-md opacity-95">
              Discover unique products from local artisans and global brands
            </p>
            
            {/* Hero Search Bar */}
            <div className="max-w-md mx-auto bg-card/95 backdrop-blur-sm rounded-lg p-4 shadow-hero">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="What are you looking for today?"
                  className="pl-10 h-12 text-lg border-0 bg-background/80"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full mt-3 h-12 text-lg" onClick={() => navigate("/products")}>
                Start Shopping
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Explore Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From cutting-edge electronics to authentic local crafts, find everything you need in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 cursor-pointer overflow-hidden" onClick={() => navigate("/products")}>
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </CardTitle>
                <p className="text-muted-foreground mb-2">{category.description}</p>
                <p className="text-sm text-primary font-medium">{category.itemCount}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Why Choose Petrazon?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of happy customers who trust Petrazon
          </p>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-6" onClick={() => navigate("/products")}>
            Browse All Products
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(3); // Mock cart count
  const navigate = useNavigate();

  return (
    <header className="bg-card shadow-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Main header */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
            <div className="text-2xl font-bold text-primary">Petrazon</div>
            <div className="text-xs text-muted-foreground hidden sm:block">
              Treasures of Today
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="What are you looking for today?"
                className="pl-10 bg-background border-border focus:border-primary"
              />
            </div>
            <Button variant="hero" className="ml-2">
              Search
            </Button>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* User account */}
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <User className="h-4 w-4 mr-2" />
              Account
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              {cartItems > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {cartItems}
                </Badge>
              )}
            </Button>

            {/* Mobile menu toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-10 bg-background border-border"
            />
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start">
                <User className="h-4 w-4 mr-2" />
                My Account
              </Button>
              <Button variant="ghost" className="justify-start">
                Electronics
              </Button>
              <Button variant="ghost" className="justify-start">
                Fashion
              </Button>
              <Button variant="ghost" className="justify-start">
                Local Crafts
              </Button>
            </div>
          </div>
        )}

        {/* Navigation categories - Desktop */}
        <nav className="hidden md:flex items-center space-x-6 py-2 border-t border-border">
          <Button variant="ghost" size="sm" onClick={() => navigate("/products")}>Electronics</Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/products")}>Fashion</Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/products")}>Local Crafts</Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/products")}>Books</Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/products")}>Home & Garden</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
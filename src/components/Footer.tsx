import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">Petrazon</div>
            <p className="text-muted-foreground text-sm">
              Shop the treasures of today, inspired by Petra. Discover unique products from local artisans and global brands.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="justify-start p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                About Us
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                Sell on Petrazon
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                Shipping Info
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                Returns & Refunds
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Categories</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="justify-start p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                Electronics
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                Fashion
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                Local Crafts
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                Books
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                Home & Garden
              </Button>
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to get special offers and updates
            </p>
            <div className="space-y-2">
              <Input
                placeholder="Enter your email"
                className="text-sm"
              />
              <Button variant="hero" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
            
            <div className="space-y-2 pt-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@petrazon.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+962 6 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Amman, Jordan</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Petrazon. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Button variant="ghost" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Button>
            <Button variant="ghost" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Button>
            <Button variant="ghost" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
              Cookie Policy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
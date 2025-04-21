import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  tags?: string[];
}

interface MenuSectionProps {
  items?: MenuItem[];
  title?: string;
  subtitle?: string;
}

const MenuSection = ({
  items = [
    {
      id: "1",
      name: "Signature Bloom Latte",
      description:
        "Our signature espresso with steamed milk and a hint of lavender and vanilla.",
      price: "$5.50",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80",
      category: "coffee",
      tags: ["bestseller", "signature"],
    },
    {
      id: "2",
      name: "Matcha Green Tea Latte",
      description:
        "Premium ceremonial grade matcha whisked with steamed milk and a touch of honey.",
      price: "$6.00",
      image:
        "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=800&q=80",
      category: "tea",
      tags: ["organic"],
    },
    {
      id: "3",
      name: "Artisan Sourdough Toast",
      description:
        "Locally sourced sourdough topped with avocado, microgreens, and cherry tomatoes.",
      price: "$8.50",
      image:
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80",
      category: "breakfast",
      tags: ["vegan"],
    },
    {
      id: "4",
      name: "Almond Croissant",
      description:
        "Buttery, flaky croissant filled with almond cream and topped with sliced almonds.",
      price: "$4.75",
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
      category: "pastries",
      tags: ["bestseller"],
    },
    {
      id: "5",
      name: "Cold Brew",
      description:
        "House-made cold brew steeped for 24 hours with notes of chocolate and caramel.",
      price: "$4.50",
      image:
        "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&q=80",
      category: "coffee",
    },
    {
      id: "6",
      name: "Berry Chia Pudding",
      description:
        "Organic chia seeds soaked in almond milk, topped with seasonal berries and honey.",
      price: "$7.25",
      image:
        "https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=800&q=80",
      category: "breakfast",
      tags: ["vegan", "gluten-free"],
    },
    {
      id: "7",
      name: "Chai Tea Latte",
      description:
        "Spiced black tea with cinnamon, cardamom, and ginger, blended with steamed milk.",
      price: "$5.25",
      image:
        "https://images.unsplash.com/photo-1571658734974-e513dfb8b86b?w=800&q=80",
      category: "tea",
    },
    {
      id: "8",
      name: "Chocolate Hazelnut Tart",
      description:
        "Rich chocolate ganache in a buttery crust, topped with toasted hazelnuts.",
      price: "$6.50",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
      category: "pastries",
      tags: ["indulgent"],
    },
  ],
  title = "Our Menu",
  subtitle = "Crafted with love, sourced with care",
}: MenuSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Extract unique categories from menu items
  const categories = [
    "all",
    ...Array.from(new Set(items.map((item) => item.category))),
  ];

  // Filter items based on active category and search query
  const filteredItems = items.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-amber-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 mb-3">{title}</h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`capitalize transform hover:scale-105 transition-all duration-300 ${activeCategory === category ? "bg-amber-700 hover:bg-amber-800 hover:shadow-md" : "text-amber-900 hover:text-amber-700 hover:shadow-sm"}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 bg-white border-amber-200 hover:border-amber-400 transform hover:scale-[1.02] hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    {item.tags && item.tags.includes("bestseller") && (
                      <Badge className="absolute top-2 right-2 bg-amber-600 animate-pulse hover:bg-amber-700 transition-colors duration-300 transform hover:scale-105">
                        Bestseller
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-amber-900 group-hover:text-amber-700 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <span className="text-lg font-bold text-amber-700 group-hover:text-amber-600 transition-colors duration-300">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-amber-700 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags?.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs capitalize border-amber-300 text-amber-700"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-amber-700">
              No menu items found. Try a different category or search term.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;

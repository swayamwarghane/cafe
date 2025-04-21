import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundImage?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Brewed with love, served with soul",
  subtitle = "Ethically sourced ingredients, carefully crafted beverages, and a warm community space for everyone.",
  ctaText = "View Menu",
  backgroundImage = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80",
  onCtaClick = () => {
    const menuSection = document.getElementById("menu-section");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  },
}: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 text-center">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            type: "spring",
            stiffness: 50,
          }}
        >
          <motion.h1
            className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              type: "spring",
              stiffness: 50,
            }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mb-8 text-lg text-gray-200 md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.6,
              type: "spring",
              stiffness: 50,
            }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.8,
              type: "spring",
              stiffness: 50,
            }}
          >
            <Button
              size="lg"
              onClick={onCtaClick}
              className="bg-amber-600 text-white hover:bg-amber-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
            >
              {ctaText}
              <ArrowDownIcon className="ml-2 h-4 w-4 group-hover:animate-bounce" />
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-full"></span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2,
        }}
        whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
      >
        <ArrowDownIcon className="h-8 w-8 text-white opacity-70 animate-pulse hover:text-amber-300 transition-colors duration-300" />
      </motion.div>
    </section>
  );
};

export default HeroSection;

import { motion } from 'motion/react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink?: string;
  variant?: 'red' | 'yellow' | 'white';
}

export default function CTASection({ 
  title, 
  subtitle, 
  buttonText, 
  variant = 'red' 
}: CTASectionProps) {
  const themes = {
    red: "bg-red-600 text-white",
    yellow: "bg-yellow-400 text-red-900",
    white: "bg-white text-red-600 border border-red-100"
  };

  return (
    <section className={`py-20 ${themes[variant]}`} id="cta-section">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
            {title}
          </h2>
          <p className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium ${variant === 'white' ? 'text-gray-600' : ''}`}>
            {subtitle}
          </p>
          <Button 
            variant={variant === 'yellow' ? 'primary' : 'secondary'}
            className="text-lg px-12 py-5"
          >
            {buttonText}
            <ArrowRight size={24} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

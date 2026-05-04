import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button' 
}: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm transition-all duration-300 shadow-md hover:shadow-xl active:scale-95 inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-yellow-400 text-red-900 hover:bg-yellow-500",
    outline: "border-2 border-red-600 text-red-600 hover:bg-red-50/50"
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}

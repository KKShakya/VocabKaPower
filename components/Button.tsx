import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  isLoading?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading, 
  size = 'md',
  className = '', 
  ...props 
}) => {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const baseStyle = `rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] ${sizeClasses[size]}`;
  
  const variants = {
    // Gradient Glass Primary
    primary: "bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/25 border border-brand-400/20 hover:shadow-brand-500/40 hover:-translate-y-0.5",
    // Gradient Glass Secondary
    secondary: "bg-gradient-to-br from-slate-700 to-slate-800 text-white shadow-lg shadow-slate-500/20 border border-slate-600/20 hover:shadow-slate-500/30 hover:-translate-y-0.5",
    // Glass Outline
    outline: "bg-white/40 backdrop-blur-sm border border-slate-200 text-slate-700 hover:bg-white/60 hover:border-brand-300 hover:text-brand-700 hover:shadow-md",
    // Ghost
    ghost: "text-slate-600 hover:bg-slate-100/50 hover:text-brand-700",
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};
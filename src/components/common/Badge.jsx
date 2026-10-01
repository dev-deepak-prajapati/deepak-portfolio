import React from 'react';

export const Badge = ({ children, variant = "default", size = "sm", className = "" }) => {
  const baseStyles = "inline-flex items-center font-mono font-medium rounded-md transition-colors duration-150";
  
  const sizeStyles = {
    xs: "px-2 py-0.5 text-xs",
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm"
  };

  const variantStyles = {
    default: "bg-slate-800/80 text-slate-300 border border-slate-700/60 dark:bg-slate-800/80 dark:text-slate-300 dark:border-slate-700/60",
    cyan: "bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 dark:bg-cyan-950/60 dark:text-cyan-300",
    indigo: "bg-indigo-950/60 text-indigo-300 border border-indigo-800/50 dark:bg-indigo-950/60 dark:text-indigo-300",
    emerald: "bg-emerald-950/60 text-emerald-300 border border-emerald-800/50 dark:bg-emerald-950/60 dark:text-emerald-300",
    outline: "bg-transparent text-slate-400 border border-slate-700"
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size] || sizeStyles.sm} ${variantStyles[variant] || variantStyles.default} ${className}`}>
      {children}
    </span>
  );
};

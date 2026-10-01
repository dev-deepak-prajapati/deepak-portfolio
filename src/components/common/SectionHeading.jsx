import React from 'react';

export const SectionHeading = ({ 
  badge, 
  title, 
  subtitle, 
  align = "left", 
  className = "" 
}) => {
  const alignmentClass = align === "center" 
    ? "text-center items-center" 
    : align === "right" 
    ? "text-right items-end" 
    : "text-left items-start";

  return (
    <div className={`flex flex-col mb-12 ${alignmentClass} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          {badge}
        </div>
      )}
      
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 dark:group-hover:text-cyan-400 font-heading">
        {title}
      </h2>
      
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-80" />
    </div>
  );
};

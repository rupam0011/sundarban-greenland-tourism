/* Wildlife-themed section divider SVGs used across the site */

interface WildlifeDividerProps {
  variant?: "paws" | "mangrove" | "tiger-stripe";
  className?: string;
  flip?: boolean;
}

export default function WildlifeDivider({ variant = "paws", className = "", flip = false }: WildlifeDividerProps) {
  const flipClass = flip ? "rotate-180" : "";

  if (variant === "paws") {
    return (
      <div className={`flex items-center justify-center gap-3 py-2 ${className}`} aria-hidden="true">
        <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-mangrove/20" />
        <div className="flex items-center gap-4">
          {/* Paw trail */}
          <svg viewBox="0 0 32 32" className={`w-5 h-5 text-mangrove/25 ${flipClass} -rotate-[25deg]`} fill="currentColor">
            <ellipse cx="16" cy="20" rx="7" ry="8" />
            <circle cx="8" cy="10" r="3.5" />
            <circle cx="15" cy="7" r="3" />
            <circle cx="22" cy="10" r="3.5" />
            <circle cx="26" cy="16" r="2.5" />
          </svg>
          <svg viewBox="0 0 32 32" className={`w-6 h-6 text-mangrove/30 ${flipClass} -rotate-[15deg]`} fill="currentColor">
            <ellipse cx="16" cy="20" rx="7" ry="8" />
            <circle cx="8" cy="10" r="3.5" />
            <circle cx="15" cy="7" r="3" />
            <circle cx="22" cy="10" r="3.5" />
            <circle cx="26" cy="16" r="2.5" />
          </svg>
          <svg viewBox="0 0 32 32" className={`w-7 h-7 text-mangrove/40 ${flipClass} -rotate-[5deg]`} fill="currentColor">
            <ellipse cx="16" cy="20" rx="7" ry="8" />
            <circle cx="8" cy="10" r="3.5" />
            <circle cx="15" cy="7" r="3" />
            <circle cx="22" cy="10" r="3.5" />
            <circle cx="26" cy="16" r="2.5" />
          </svg>
          <svg viewBox="0 0 32 32" className={`w-6 h-6 text-mangrove/30 ${flipClass} rotate-[15deg]`} fill="currentColor">
            <ellipse cx="16" cy="20" rx="7" ry="8" />
            <circle cx="8" cy="10" r="3.5" />
            <circle cx="15" cy="7" r="3" />
            <circle cx="22" cy="10" r="3.5" />
            <circle cx="26" cy="16" r="2.5" />
          </svg>
          <svg viewBox="0 0 32 32" className={`w-5 h-5 text-mangrove/25 ${flipClass} rotate-[25deg]`} fill="currentColor">
            <ellipse cx="16" cy="20" rx="7" ry="8" />
            <circle cx="8" cy="10" r="3.5" />
            <circle cx="15" cy="7" r="3" />
            <circle cx="22" cy="10" r="3.5" />
            <circle cx="26" cy="16" r="2.5" />
          </svg>
        </div>
        <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-mangrove/20" />
      </div>
    );
  }

  if (variant === "tiger-stripe") {
    return (
      <div className={`flex items-center justify-center py-1 ${className}`} aria-hidden="true">
        <div className="flex items-center gap-[3px]">
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all ${
                i % 3 === 0
                  ? "w-[3px] h-6 bg-earth/15"
                  : i % 3 === 1
                  ? "w-[2px] h-4 bg-mangrove/10"
                  : "w-[3px] h-8 bg-earth/20"
              }`}
              style={{ transform: `rotate(${(i - 12) * 1.5}deg)` }}
            />
          ))}
        </div>
      </div>
    );
  }

  // mangrove leaf pattern
  return (
    <div className={`flex items-center justify-center gap-2 py-2 ${className}`} aria-hidden="true">
      <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-mangrove/15" />
      <div className="flex items-center gap-1">
        {[...Array(7)].map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 20 40"
            className="text-mangrove/20"
            style={{
              width: `${8 + Math.abs(3 - i) * -1 + 4}px`,
              opacity: 0.15 + (1 - Math.abs(3 - i) / 3) * 0.25,
              transform: `rotate(${(i - 3) * 12}deg)`,
            }}
            fill="currentColor"
          >
            <path d="M10 0 C15 10, 18 20, 10 40 C2 20, 5 10, 10 0Z" />
            <line x1="10" y1="5" x2="10" y2="35" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          </svg>
        ))}
      </div>
      <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-mangrove/15" />
    </div>
  );
}

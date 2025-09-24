import { ImageWithFallback } from './figma/ImageWithFallback';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Image - Replace this src with your actual logo */}
      <div className="w-10 h-10 mr-3 flex items-center justify-center">
        {/* Placeholder for logo - replace with actual logo upload */}
        <ImageWithFallback
          src="/logo.png" // Replace this with your actual logo path
          alt="Elysian Build Logo"
          className="w-full h-full object-contain"
          // Fallback to text logo if image doesn't load
        />
      </div>
      
      {/* Text Logo (fallback or alongside image) */}
      {showText && (
        <div className="font-heading text-white text-2xl tracking-wider">
          ELYSIAN
          <span className="block text-sm text-brand-secondary -mt-1">BUILD</span>
        </div>
      )}
    </div>
  );
}
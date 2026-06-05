import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

interface BackToCoreProps {
  className?: string;
  style?: React.CSSProperties;
}

export function BackToCore({ className = "", style }: BackToCoreProps) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2 text-xs tracking-widest uppercase opacity-50 hover:opacity-100 transition-opacity duration-300 ${className}`}
      style={style}
    >
      <ArrowLeft size={12} strokeWidth={1.5} />
      Uday Cherri
    </Link>
  );
}

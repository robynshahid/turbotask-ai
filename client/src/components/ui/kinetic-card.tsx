import { cn } from "@/lib/utils";
import React from "react";

interface KineticCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "inverse";
  hoverEffect?: boolean;
}

export function KineticCard({
  children,
  className,
  variant = "default",
  hoverEffect = true,
  ...props
}: KineticCardProps) {
  return (
    <div
      className={cn(
        "relative border-2 border-black p-6 transition-all duration-200",
        // Hard shadow effect
        "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        hoverEffect && "hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
        variant === "default" && "bg-white text-black",
        variant === "outline" && "bg-transparent text-black",
        variant === "inverse" && "bg-black text-white border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function KineticButton({
  children,
  className,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "outline" | "inverse" }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        "border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        variant === "primary" && "bg-primary text-white hover:bg-primary/90",
        variant === "secondary" && "bg-secondary text-white hover:bg-secondary/90",
        variant === "outline" && "bg-white text-black hover:bg-gray-50",
        variant === "inverse" && "bg-black text-white border-black hover:bg-black/90",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function KineticGrid({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function KineticSection({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "py-20 border-b-2 border-black last:border-b-0",
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}

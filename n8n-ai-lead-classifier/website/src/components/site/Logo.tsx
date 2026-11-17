import { Wheat } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Wheat className="h-6 w-6 text-accent" aria-hidden />
      <span className="font-display text-xl font-bold tracking-tight">
        Crust <span className="text-accent">&amp;</span> Crumb
      </span>
    </span>
  );
}

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-tight text-foreground md:text-5xl">{title}</h2>
      {children && <div className="mt-5 text-base leading-relaxed text-muted-foreground">{children}</div>}
    </div>
  );
}

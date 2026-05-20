export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-8 w-8">
        <div className="absolute inset-0 rounded-md bg-navy" />
        <div className="absolute inset-[3px] rounded-[5px] border border-gold/60" />
        <div className="absolute inset-0 flex items-center justify-center font-display text-gold text-sm font-bold">N</div>
      </div>
      <div className="leading-tight">
        <div className="font-display text-base font-semibold tracking-tight">Naingate</div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Insurance</div>
      </div>
    </div>
  );
}

type Props = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export function MandalaMark({ size = 40, className, strokeWidth = 1 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    >
      <circle cx="50" cy="50" r="48" />
      <circle cx="50" cy="50" r="36" />
      <circle cx="50" cy="50" r="24" />
      <circle cx="50" cy="50" r="12" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        const x1 = 50 + Math.cos(a) * 12;
        const y1 = 50 + Math.sin(a) * 12;
        const x2 = 50 + Math.cos(a) * 48;
        const y2 = 50 + Math.sin(a) * 48;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const cx = 50 + Math.cos(a) * 30;
        const cy = 50 + Math.sin(a) * 30;
        return <circle key={i} cx={cx} cy={cy} r="3" />;
      })}
    </svg>
  );
}

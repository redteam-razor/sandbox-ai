export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cube-grad" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      {/* Top face */}
      <path d="M16 4L28 10L16 16L4 10Z" fill="url(#cube-grad)" opacity="0.9" />
      {/* Left face */}
      <path d="M4 10L16 16V28L4 22Z" fill="#0891b2" opacity="0.7" />
      {/* Right face */}
      <path d="M28 10L16 16V28L28 22Z" fill="#06b6d4" opacity="0.8" />
    </svg>
  );
}

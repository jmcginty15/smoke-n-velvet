interface LogoProps {
  className?: string;
  scale?: number;
}

export default function Logo({ className = "", scale = 0.1 }: LogoProps) {
  const scaleFactor = scale / 0.1;
  return (
    <svg
      className={`logo ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="20 5 40 50"
      preserveAspectRatio="xMidYMid meet"
      width={`${40 * scaleFactor}px`}
      height={`${40 * scaleFactor}px`}
    >
      <text
        x="25"
        y="50"
        fontFamily="Arial"
        fontWeight="100"
        fontSize="48"
        fontStyle="normal"
        fill="white"
      >
        V
      </text>
      <text
        x="25"
        y="50"
        fontFamily="Arial"
        fontWeight="100"
        fontSize="48"
        fontStyle="normal"
        fill="#927018"
      >
        S
      </text>
    </svg>
  );
}

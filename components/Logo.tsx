import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "brand" | "white";
  iconOnly?: boolean;
  className?: string;
}

const Logo = ({ variant = "brand", iconOnly = false, className }: LogoProps) => {
  const white = variant === "white";

  return (
    <svg
      viewBox={iconOnly ? "0 0 83 82" : "0 0 224 82"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Nexora Drive"
      className={cn("h-auto", className)}
    >
      {!white && (
        <>
          <rect
            opacity="0.2"
            width="74.8323"
            height="74.8323"
            rx="37.4161"
            className="fill-brand"
          />
          <rect
            x="32.7383"
            y="31.1797"
            width="49.8882"
            height="49.8882"
            rx="24.9441"
            className="fill-brand"
          />
        </>
      )}
      {!iconOnly && (
        <g
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="26"
          fontWeight="700"
          className={white ? "fill-white" : "fill-brand"}
        >
          <text x={white ? 8 : 92} y="42">
            Nexora
          </text>
          <text x={white ? 8 : 92} y="68">
            Drive
          </text>
        </g>
      )}
    </svg>
  );
};

export default Logo;

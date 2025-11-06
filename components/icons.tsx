import type { SVGProps } from "react";

export function SparklesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2L13.8 6.2L18 8L13.8 9.8L12 14L10.2 9.8L6 8L10.2 6.2L12 2Z"
        fill="currentColor"
      />
      <path
        d="M5 12L6.1 14.6L9 16L6.1 17.4L5 20L3.9 17.4L1 16L3.9 14.6L5 12Z"
        fill="currentColor"
        opacity={0.6}
      />
      <path
        d="M19 12L20.1 14.6L23 16L20.1 17.4L19 20L17.9 17.4L15 16L17.9 14.6L19 12Z"
        fill="currentColor"
        opacity={0.6}
      />
    </svg>
  );
}

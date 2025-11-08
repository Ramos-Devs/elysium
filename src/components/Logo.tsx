export function Logo() {
  return (
    <div className="mb-6 flex flex-col items-center">
      <svg
        width="200"
        height="100"
        viewBox="0 0 180 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="45%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-black text-4xl font-bold"
        >
          DEV
        </text>

        <path
          d="M45 55 C75 70, 100 45, 130 55"
          className="stroke-yellow"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

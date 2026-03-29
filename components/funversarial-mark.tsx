/** Circle split: success (left) + accent cyan (right); matches public/brand/funversarial-mark.svg */
export function FunversarialMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        className="fill-success"
        d="M64 24a40 40 0 0 0-40 40 40 40 0 0 0 40 40V24z"
      />
      <path
        className="fill-accent"
        d="M64 24a40 40 0 0 1 40 40 40 40 0 0 1-40 40V24z"
      />
    </svg>
  );
}

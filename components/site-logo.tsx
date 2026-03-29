import Link from "next/link";
import { FunversarialMark } from "@/components/funversarial-mark";

const focusRingClass =
  "rounded-md outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

/** Wordmark splits Fun + versarial; mark is two-tone split circle. */
export function SiteLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex max-w-full items-center gap-3 ${focusRingClass} ${className ?? ""}`}
    >
      <FunversarialMark className="h-10 w-10 shrink-0 transition group-hover:opacity-90 sm:h-11 sm:w-11" />
      <span className="min-w-0 font-mono text-base font-semibold tracking-tight text-foreground sm:text-lg">
        <span className="border-b-2 border-success pb-px">FUN</span>
        <span className="border-b-2 border-accent pb-px">VERSARIAL</span>
      </span>
    </Link>
  );
}

/**
 * Dictionary-style definition block — editorial typography for the Funversarial brand.
 */
export function FunversarialDefinition() {
  return (
    <section
      aria-labelledby="funversarial-entry-word"
      className="relative isolate py-16 sm:py-20"
    >
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <header className="space-y-4">
          <p
            className="font-mono text-[0.8125rem] leading-relaxed tracking-wide text-muted"
            lang="en-fonipa"
          >
            /ˌfʌn.vərˈsɛriəl/
          </p>
          <h2
            id="funversarial-entry-word"
            className="font-display text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl sm:tracking-tight"
          >
            funversarial
          </h2>
          <p className="font-mono text-caption leading-relaxed text-muted">
            <span className="text-foreground">[adj.]</span>
            <span aria-hidden className="mx-1.5 text-muted">
              •
            </span>
            <span className="text-foreground">[fun + adversarial]</span>
            <span aria-hidden className="mx-1.5 text-muted">
              —
            </span>
            <span className="text-foreground italic">
              a philosophy of learning through playful friction.
            </span>
          </p>
        </header>

        <div
          className="mx-auto mt-8 h-[0.5px] max-w-[min(100%,20rem)] bg-foreground/40"
          aria-hidden
        />

        <div className="mt-8 text-left sm:mt-9">
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Primary definition
              </p>
              <p className="font-body-sans text-base leading-[1.75] text-foreground sm:text-lg">
                The act of treating a complex system or security challenge as a
                friendly opponent. It is a self-engaged{" "}
                <em className="font-body-sans font-semibold not-italic text-accent underline decoration-accent/50 underline-offset-[3px]">
                  &ldquo;tussle&rdquo;
                </em>{" "}
                with code where the thrill of the exploit serves as the teacher.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Core concept
              </p>
              <p className="font-body-sans text-base leading-[1.75] text-foreground sm:text-lg">
                Learning by doing. By playfully{" "}
                <em className="font-body-sans font-semibold not-italic text-accent underline decoration-accent/50 underline-offset-[3px]">
                  &ldquo;attacking&rdquo;
                </em>{" "}
                a concept alone or in a group, the learner transforms dry theory
                into a tactile, memorable experience.
              </p>
            </div>
          </div>

          <figure className="mt-8 space-y-2 border-l-2 border-foreground/25 pl-5 sm:mt-9">
            <figcaption className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Example
            </figcaption>
            <blockquote className="font-body-sans text-base leading-[1.75] sm:text-lg">
              <p className="mb-0 border-none pl-0 italic text-foreground">
                &ldquo;Instead of watching a video on XSS, he took a funversarial
                approach, spending the afternoon trying to bypass his own
                sanitization script until he understood it inside out.&rdquo;
              </p>
            </blockquote>
          </figure>
        </div>

        <p
          className="mt-10 font-mono text-xs tracking-wide text-muted sm:mt-11"
          aria-hidden
        >
          <span className="text-foreground" aria-hidden>
            †{" "}
          </span>
          intellectual, with a wink
        </p>
      </div>
    </section>
  );
}

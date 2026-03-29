/**
 * Prominent experience block — editorial typography aligned with FunversarialDefinition.
 */
const ENTRIES = [
  {
    organization: "Citi",
    role: "Cyber Security Innovation",
    narrative:
      "Multidisciplinary Architectural Discovery: Leading a specialized team to ground emerging technologies—including AI, Fraud, Identity, Mobile, and Cryptography—into deep enterprise security context. Facilitating technical discovery sessions between architecture, engineering, operations, data science, and compliance to deploy resilient, cross-domain solutions.",
  },
  {
    organization: "PayPal",
    role: "Senior Incident Response",
    narrative:
      "Defensive Resilience: Leading high-stakes response and adversarial defense for global financial infrastructure under real-world pressure.",
  },
  {
    organization: "Harel",
    role: "Technical Advisory",
    narrative:
      "Foundational Discovery: Translating complex regulatory mandates into secure, deployable architectural patterns through end-to-end design and requirement engineering.",
  },
] as const;

export function ExperienceDiscovery() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="relative isolate"
    >
      <div
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent"
        aria-hidden
      />
      <div className="rounded-xl border border-accent/20 bg-surface-elevated/80 p-8 shadow-[0_0_0_1px_rgba(0,212,255,0.06),inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-sm sm:p-10 lg:p-12">
        <header className="max-w-3xl space-y-4">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Experience &amp; discovery
          </p>
          <h2
            id="experience-heading"
            className="font-display text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.35rem] lg:leading-[1.12]"
          >
            20+ Years of Engineering Resilience &amp; Discovery
          </h2>
          <p className="max-w-2xl font-body-sans text-sm leading-relaxed text-muted sm:text-base">
            A few places where defensive depth met curiosity—without the
            résumé bullet cosplay.
          </p>
        </header>

        <ul className="mt-10 list-none space-y-10 sm:mt-12 sm:space-y-12 lg:mt-14">
          {ENTRIES.map((entry) => (
            <li key={entry.organization}>
              <article className="grid gap-6 border-l-[3px] border-accent/55 pl-5 sm:gap-7 sm:pl-7 lg:grid-cols-12 lg:gap-10 lg:pl-8">
                <div className="lg:col-span-4 lg:pt-0.5">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-[1.65rem]">
                    {entry.organization}
                  </h3>
                  <p className="mt-2 font-mono text-sm font-medium leading-snug sm:text-[0.9375rem]">
                    <span className="text-muted/90" aria-hidden>
                      |{" "}
                    </span>
                    <span className="text-accent">{entry.role}</span>
                  </p>
                </div>
                <div className="font-body-sans text-base leading-[1.75] text-foreground/90 sm:text-lg sm:leading-[1.72] lg:col-span-8">
                  <p>{entry.narrative}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

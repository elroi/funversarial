/** Placeholder until a real PDF path or URL is set. */
export const PDF_HREF = "TODO_PDF_URL_OR_PUBLIC_FILE";

export const GITHUB_URL = "https://elroi.github.io";
export const LINKEDIN_URL = "https://www.linkedin.com/in/elroiluria/";
export const PROJECT_REPO_URL = "TODO_PROJECT_REPO_URL";

export function isPlaceholderHref(value: string): boolean {
  const v = value.trim();
  if (!v) return true;
  return /^TODO_/i.test(v);
}

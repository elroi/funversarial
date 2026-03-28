/** Placeholder until a real PDF path or URL is set. */
export const PDF_HREF = "TODO_PDF_URL_OR_PUBLIC_FILE";

export const GITHUB_URL = "TODO_GITHUB_URL";
export const LINKEDIN_URL = "TODO_LINKEDIN_URL";
export const PROJECT_REPO_URL = "TODO_PROJECT_REPO_URL";

export function isPlaceholderHref(value: string): boolean {
  const v = value.trim();
  if (!v) return true;
  return /^TODO_/i.test(v);
}

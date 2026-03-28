/** Default when `NEXT_PUBLIC_CV_APP_URL` is unset (e.g. local dev). */
export const CV_APP_FALLBACK = "https://funversarial-cv.vercel.app";

export function getCvAppUrl(): string {
  return process.env.NEXT_PUBLIC_CV_APP_URL ?? CV_APP_FALLBACK;
}

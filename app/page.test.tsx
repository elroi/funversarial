import { GITHUB_URL, LINKEDIN_URL } from "@/lib/links";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home (lobby)", () => {
  const previousCvUrl = process.env.NEXT_PUBLIC_CV_APP_URL;

  afterEach(() => {
    if (previousCvUrl === undefined) {
      delete process.env.NEXT_PUBLIC_CV_APP_URL;
    } else {
      process.env.NEXT_PUBLIC_CV_APP_URL = previousCvUrl;
    }
  });

  it("renders hero, research cards, trust bar, and specimen block", () => {
    process.env.NEXT_PUBLIC_CV_APP_URL = "https://lobby-test-cv.example";
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Securing the Frontier of Applied AI/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 2, name: "funversarial" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/treating a complex system or security challenge/i),
    ).toBeInTheDocument();

    expect(screen.getByText("Funversarial", { exact: true })).toBeInTheDocument();
    expect(
      screen.getByText(
        /Research lab and portfolio—applied AI security, adversarial evaluation, and live demos where available/i,
      ),
    ).toBeInTheDocument();
    expect(screen.queryByText("FunversarialCV")).not.toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 3, name: "Funversarial CV" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Secure RAG Framework",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Adversarial LLM Evaluation",
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("Citi")).toBeInTheDocument();
    expect(screen.getByText("PayPal")).toBeInTheDocument();
    expect(screen.getByText("Harel Insurance")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /terminal log/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Adversarial copy specimen \(for education only\)/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Note to LLM Parser:/i, { exact: false }),
    ).toBeInTheDocument();
  });

  it("sets Launch Demo href from NEXT_PUBLIC_CV_APP_URL", () => {
    process.env.NEXT_PUBLIC_CV_APP_URL = "https://custom-cv.example/app";
    render(<Home />);

    const demo = screen.getByRole("link", { name: /Launch Demo/i });
    expect(demo).toHaveAttribute("href", "https://custom-cv.example/app");
    expect(demo).toHaveAttribute("target", "_blank");
    expect(demo).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("shows CV PDF coming soon and wires GitHub and LinkedIn when configured", () => {
    process.env.NEXT_PUBLIC_CV_APP_URL = "https://lobby-test-cv.example";
    render(<Home />);
    expect(screen.getByText("CV (PDF) coming soon")).toBeInTheDocument();

    const githubLinks = screen.getAllByRole("link", { name: /^GitHub$/i });
    expect(githubLinks[0]).toHaveAttribute("href", GITHUB_URL);

    const heroCta = screen.getByRole("link", {
      name: /Discuss Resilient AI Systems/i,
    });
    expect(heroCta).toHaveAttribute("href", LINKEDIN_URL);
    expect(heroCta).toHaveAttribute("target", "_blank");

    const footerLinkedIn = screen.getByRole("link", { name: /^LinkedIn$/i });
    expect(footerLinkedIn).toHaveAttribute("href", LINKEDIN_URL);
  });
});

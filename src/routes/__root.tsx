import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Kenneth Feiner, PsyD",
      jobTitle: "Clinical Psychologist",
      telephone: "+1-646-351-1746",
      email: "kfeinerpsyd@example.com",
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Yeshiva University" },
        { "@type": "CollegeOrUniversity", name: "New York University" },
      ],
      hasCredential: "NY State License #008171",
    },
    {
      "@type": "MedicalBusiness",
      name: "Kenneth Feiner, PsyD — Private Practice",
      telephone: "+1-646-351-1746",
      email: "kfeinerpsyd@example.com",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "220 East 26th Street, Suite L-D",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10010",
        addressCountry: "US",
      },
      areaServed: "New York",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-serif text-primary-deep">404</h1>
        <h2 className="mt-4 text-xl font-serif">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-cta px-5 py-2 text-sm font-medium text-cta-foreground hover:bg-cta/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-serif">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-cta px-5 py-2 text-sm font-medium text-cta-foreground hover:bg-cta/90"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kenneth Feiner, PsyD — Manhattan Psychotherapy" },
      { name: "description", content: "Depth-oriented psychotherapy in Manhattan for adolescents, adults, couples, and families. 35+ years of clinical practice." },
      { name: "author", content: "Kenneth Feiner, PsyD" },
      { property: "og:title", content: "Kenneth Feiner, PsyD — Manhattan Psychotherapy" },
      { property: "og:description", content: "Thoughtful, depth-oriented psychotherapy in Manhattan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(JSON_LD) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

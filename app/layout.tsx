import type { Metadata, Viewport } from "next";
import { siteConfig } from "./site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Lisbon Code",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "Lisbon Code" }],
  creator: "Lisbon Code",
  publisher: "Lisbon Code",
  keywords: siteConfig.keywords,
  category: "education",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Lisbon Code - Hack Club em Lisboa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ec3750",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: "Lisbon Code Hack Club",
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon.svg`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lisboa",
    addressCountry: "PT",
  },
  areaServed: {
    "@type": "City",
    name: "Lisboa",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Hack Club",
    url: siteConfig.hackClubUrl,
  },
  sameAs: [
    siteConfig.githubUrl,
    siteConfig.instagramUrl,
    siteConfig.hackClubUrl,
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: siteConfig.language,
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        {children}
      </body>
    </html>
  );
}

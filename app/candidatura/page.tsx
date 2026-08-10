import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "../site";

const tallyUrl =
  "https://tally.so/embed/PdQDLe?hideTitle=1&transparentBackground=1&dynamicHeight=1";

export const metadata: Metadata = {
  title: "Candidatura",
  description:
    "Candidata-te ao Lisbon Code. Para teens em Lisboa que gostam de tecnologia e querem construir projetos reais.",
  alternates: {
    canonical: "/candidatura",
  },
  openGraph: {
    title: "Candidatura | Lisbon Code",
    description:
      "Candidatura ao Lisbon Code, um Hack Club em Lisboa para teens que gostam de tecnologia.",
    url: "/candidatura",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Candidatura Lisbon Code",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Candidatura | Lisbon Code",
    description:
      "Candidata-te ao Lisbon Code, em Lisboa.",
    images: ["/opengraph-image"],
  },
};

export default function Candidatura() {
  return (
    <main className="application-page">
      <header className="application-header">
        <Link className="wordmark dark-wordmark" href="/" aria-label="Lisbon Code">
          <span className="wordmark-top">&lt;lisbon&gt;</span>
          <span className="wordmark-bottom">code</span>
        </Link>
        <Link className="text-link" href="/">
          Voltar ao site
        </Link>
      </header>

      <section className="application-copy">
        <p className="eyebrow">Candidatura</p>
        <h1>Queres juntar-te ao Lisbon Code?</h1>
        <p>
          Preenche isto para te candidatares. Queremos perceber o que te
          interessa, que tipo de projetos gostavas de fazer e se há vaga para a
          próxima reunião em Lisboa.
        </p>
      </section>

      <section className="application-frame" aria-label="Formulário de candidatura">
        <iframe
          title="Candidatura Lisbon Code"
          src={tallyUrl}
          allow="camera; microphone; autoplay; encrypted-media;"
        />
      </section>
    </main>
  );
}

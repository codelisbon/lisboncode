const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lisboncode.org";

export const siteConfig = {
  name: "Lisbon Code",
  title: "Lisbon Code | Hack Club em Lisboa",
  description:
    "Clube gratuito em Lisboa para teens que gostam de tecnologia e querem construir websites, jogos, bots, apps, hardware e outros projetos reais.",
  shortDescription:
    "Hack Club em Lisboa para teens que querem construir projetos com código.",
  url: rawSiteUrl.replace(/\/$/, ""),
  locale: "pt_PT",
  language: "pt-PT",
  githubUrl: "https://github.com/codelisbon/lisboncode",
  instagramUrl: "https://instagram.com/lisbon-code",
  hackClubUrl: "https://hackclub.com/",
  donationUrl: "https://hcb.hackclub.com/donations/start/lisboncode",
  keywords: [
    "Lisbon Code",
    "Hack Club Lisboa",
    "programação Lisboa",
    "clube de programação",
    "programação para adolescentes",
    "tecnologia para jovens",
    "coding club Lisboa",
    "hack club Portugal",
    "projetos com código",
    "websites jogos bots apps hardware",
  ],
};

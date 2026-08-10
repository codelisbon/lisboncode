/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const githubUrl = "https://github.com/codelisbon/lisboncode";
const instagramUrl = "https://instagram.com/lisbon-code";

const meetingPlan = [
  {
    label: "Chegada",
    title: "Trazes o ponto da semana",
    text: "Mostras em que estás a trabalhar. Se ainda não tens projeto, escolhemos uma ideia pequena para arrancar.",
  },
  {
    label: "Build",
    title: "Metes mãos no código",
    text: "Durante a sessão, programas, testas, partes coisas e corriges. Site, jogo, bot, app, IA, hardware.",
  },
  {
    label: "Ajuda",
    title: "Pedimos ajuda cedo",
    text: "Quando bloqueias, alguém olha para o problema contigo. Também podes ajudar outra pessoa se já passaste por aquilo.",
  },
  {
    label: "Demo",
    title: "Mostras o que avançou",
    text: "Pode ser uma feature pequena, um bug resolvido, uma tentativa falhada ou uma demo pronta. O importante é ter mexido.",
  },
];

const practicalInfo = [
  ["Idade", "Pensado para estudantes dos 13 aos 18."],
  ["Custo", "Grátis."],

  ["Material", "Um computador portatil, seja windows, macos, ou como um hacker assério, linux 😎"],
  [
    "Local",
    "As reuniões são em Lisboa. O local exato é dito depois da candidatura.",
  ],
  ["Ritmo", "Uma reunião por semana, para dar seguimento aos projetos."],
  [
    "Vagas",
    "Envias a candidatura e nós vemos se há vaga e se o clube faz sentido para ti.",
  ],
];

const goals = [
  {
    title: "Construir coisas tuas",
    text: "Queremos que tenhas sempre algo teu: código novo, uma página online, uma demo, um circuito ou um erro finalmente resolvido. <b>Projetos acabados recebem acesso ao programa recompensas da Hack Club!</b> Podes ganhar imensa coisa!",
  },
  {
    title: "Ficar menos dependente",
    text: "Aprender a procurar respostas, testar hipóteses, pedir ajuda e decidir o próximo passo sem esperar por uma aula.",
  },
  {
    title: "Ganhar algum ritmo",
    text: "Vemo-nos uma vez por semana. Trazes o que fizeste, desbloqueias problemas e sais com uma coisa concreta para continuar.",
  },
];

const hackClubBenefits = [
  "workshops e ideias de projetos para começares sem uma página em branco",
  "recompensas e apoios quando constróis e mostras projetos",
  "ferramentas profissionais usadas para design, reuniões, código e protótipos",
  "apoio para hardware, circuitos e projetos que precisam de peças",
  "comunidade internacional de adolescentes que estão a construir coisas",
  "hackathons, eventos e programas fora de Portugal",
];

const faq = [
  {
    question: "Isto é uma aula ou um curso?",
    answer:
      "É um clube de projetos. Há ajuda quando bloqueias, mas a maior parte do tempo é para trabalhares no que estás a construir.",
  },
  {
    question: "Tenho de saber programar antes de entrar?",
    answer:
      "Não tens de saber o mestre da programação. Tens é de ter curiosidade real por tecnologia e vontade de mexer. Se computadores, jogos, sites, automações, hardware ou IA te interessam, faz sentido.",
  },
  {
    question: "E se eu já souber programar?",
    answer:
      "Meio caminho andado. Trazes um projeto teu, recebes feedback, encontras pessoas para colaborar e tens um sítio onde mostrar progresso.",
  },
  {
    question: "Isto serve para ocupar tempo?",
    answer:
      "Não. Isto não é para ficares sentado porque alguém te mandou vir. Funciona melhor quando és tu que tens curiosidade e queres experimentar.",
  },
  {
    question: "O que acontece numa reunião?",
    answer:
      "Encontramo-nos uma vez por semana. Vês em que ponto estão os teus projetos, trabalhas durante a sessão, pedes ajuda quando precisas e no fim mostras o que avançou.",
  },
  {
    question: "Que projetos contam?",
    answer:
      "Websites, jogos, bots, apps, scripts, experiências com IA, hardware simples, circuitos, ferramentas internas, design técnico. Se envolve construir algo com tecnologia, provavelmente cabe.",
  },
  {
    question: "Posso ir só uma vez?",
    answer:
      "Podes experimentar uma vez. Mas o clube faz mais sentido se voltares: uma reunião por semana, com follow-up do que fizeste desde a última vez.",
  },
  {
    question: "A candidatura garante vaga?",
    answer:
      "Não automaticamente. O formulário serve para perceber se o clube faz sentido para ti e organizar as próximas vagas. Depois confirmamos se há vaga e enviamos todas as informações.",
  },
  {
    question: "Porque é que é gratuito?",
    answer:
      "Porque temos apoio da Hack Club, de empresas parceiras e de doações. Isso ajuda a cobrir materiais, ferramentas e custos do clube. A candidatura não deve depender de dinheiro.",
  },
  {
    question: "Se eu doar, como é que sei para onde vai o dinheiro?",
    answer:
      "Usamos uma página de transparência financeira. Dá para ver dinheiro que entra, gastos e saldo. Se recebermos apoios ou doações, também queremos que isso fique claro.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <a
        className="hack-flag"
        href="https://hackclub.com/"
        aria-label="Hack Club"
      >
        <img
          src="https://assets.hackclub.com/flag-orpheus-top.svg"
          alt="Hack Club"
        />
      </a>

      <section className="hero" id="inicio">
        <nav className="nav" aria-label="Navegação principal">
          <a className="wordmark" href="#inicio" aria-label="Lisbon Code">
            <span className="wordmark-top">&lt;lisbon&gt;</span>
            <span className="wordmark-bottom">code</span>
          </a>
          <div className="nav-links">
            <a href="#sobre">O que é</a>
            <a href="#objetivos">Objetivos</a>
            <a href="#hackclub">Hack Club</a>
            <a href="#como">Como funciona</a>
            <Link className="nav-cta" href="/candidatura">
              Candidatura
            </Link>
          </div>
        </nav>

        <div className="hero-center">
          <p className="eyebrow">Lisboa / tecnologia / projetos</p>
          <h1>Gostas de tecnologia?</h1>
          <p className="lead">
            Se ficas a mexer em computadores, jogos, sites, bots, IA, hardware
            ou cenas digitais, o Lisbon Code é para ti. Uma vez por semana,
            juntamo-nos em Lisboa para construir projetos com código.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/candidatura">
              Candidatar-me
            </Link>
            <a className="button button-secondary" href="#info">
              Ver informação
            </a>
          </div>
        </div>

        <aside className="summary-card" aria-label="Resumo rápido">
          <div>
            <span className="summary-label">Para quem</span>
            <strong>Teens 13-18</strong>
          </div>
          <div>
            <span className="summary-label">Preço</span>
            <strong>Grátis</strong>
          </div>
          <div>
            <span className="summary-label">Formato</span>
            <strong>1x por semana</strong>
          </div>
          <div>
            <span className="summary-label">Objetivo</span>
            <strong>Construir</strong>
          </div>
        </aside>
      </section>

      <section className="section split" id="sobre">
        <div>
          <p className="eyebrow">O que somos</p>
          <h2>Para quem não quer ficar só a ver tutoriais.</h2>
        </div>
        <div className="body-copy">
          <p>
            Lisbon Code é um clube de programação em Lisboa. Vens para fazer
            projetos reais: uma página, um jogo, um bot, uma app pequena, uma
            experiência com IA, uma coisa com Arduino.
          </p>
          <p>
            Não precisas de ser o melhor do mundo. Mas tens de ter vontade
            própria, de gostar de tecnologia, computadores, programação,
            eletrónica, jogos, design digital, servidores, automações ou
            hardware.
          </p>
          <p>
            Se estás no início, ótimo, tens ajuda para dar os primeiros passos.
            Se já programas, ótimo, trazes um projeto teu e tens pessoas para
            dar feedback, colaborar e ajudar-te no que for necessário.
          </p>
          <p>
            Podes chegar sem um plano muito defindo. O normal é começar pequeno,
            fazer perguntas e acabar o encontro com qualquer coisa no ecrã.
          </p>
        </div>
      </section>

      <section className="section goals" id="objetivos">
        <div className="section-heading">
          <p className="eyebrow">Objetivos</p>
          <h2>Construir agora. Voltar com progresso.</h2>
        </div>
        <div className="point-grid">
          {goals.map((goal) => (
            <article className="point-card" key={goal.title}>
              <h3>{goal.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: goal.text }} />
            </article>
          ))}
        </div>
      </section>

      <section className="section split plain-band hackclub-section" id="hackclub">
        <div className="hackclub-heading">
          <p className="eyebrow">Hack Club</p>
          <h2>Hack Club é a rede por trás disto.</h2>
        </div>

        <div className="body-copy hackclub-copy">
          <p>
            A Hack Club é uma organização sem fins lucrativos criada em 2014 por
            Zach Latta, quando tinha 16 anos. Nasceu com uma ideia simples:
            tornar a programação mais prática, social e acessível, dando aos
            jovens um espaço onde possam aprender tecnologia através da criação
            de projetos reais.
          </p>

          <p>
            Em vez de passar meses a estudar conceitos antes de construir alguma
            coisa, na Hack Club começas por criar. Pode ser um site, uma app, um
            jogo, um robot ou qualquer outra ideia que queiras experimentar. Vais
            aprendendo aquilo de que precisas à medida que o projeto cresce.
          </p>

          <p>
            A Hack Club também foi criada para tornar a programação menos
            solitária. Tal como existem clubes de teatro, música ou xadrez, a
            ideia é existir um espaço onde jovens interessados em tecnologia se
            possam encontrar, construir juntos, partilhar projetos e ajudar-se
            uns aos outros.
          </p>

          <p>
            Hoje, a Hack Club apoia uma comunidade global de clubes liderados por
            jovens, oferecendo recursos, workshops, ferramentas e apoio para os
            ajudar a transformar ideias em projetos reais. O LisbonCode traz essa
            mesma ideia para Lisboa.
          </p>

          <a
            className="text-link"
            href="https://hackclub.com/clubs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ler mais sobre Hack Club
          </a>
        </div>

        <div className="hackclub-benefits" aria-label="Benefícios da Hack Club">
          <ul className="benefit-list">
            {hackClubBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="como">
        <div className="section-heading">
          <p className="eyebrow">Como funciona</p>
          <h2>Uma reunião por semana para dar seguimento.</h2>
        </div>
        <p className="section-intro">
          A reunião semanal é para manter ritmo: trazes o que fizeste,
          desbloqueias problemas, trabalhas um bocado e sais com o próximo
          passo.
        </p>
        <div className="timeline">
          {meetingPlan.map((step) => (
            <article className="timeline-row" key={step.label}>
              <span className="timeline-label">{step.label}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section info-grid" id="info">
        <div className="section-heading">
          <p className="eyebrow">Informação prática</p>
          <h2>Antes de te inscreveres.</h2>
        </div>
        <div className="facts">
          {practicalInfo.map(([label, value]) => (
            <div className="fact" key={label}>
              <span>{label}</span>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section faq" id="perguntas">
        <div className="section-heading">
          <p className="eyebrow">Perguntas</p>
          <h2>Antes de te inscreveres.</h2>
        </div>
        <div className="faq-list">
          {faq.map((item) => (
            <article className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section signup" id="inscricao">
        <div className="signup-copy">
          <p className="eyebrow">Candidatura</p>
          <h2>Queres entrar?</h2>
          <p>
            Preenche o formulário para te candidatares. Depois vemos as
            respostas, confirmamos se há vaga e enviamos o local exato da
            reunião em Lisboa.
          </p>
          <Link className="button button-primary" href="/candidatura">
            Candidatar-me
          </Link>
        </div>
        <div className="waitlist-card" aria-label="Como funciona a candidatura">
          <h3>Como funciona</h3>
          <ol>
            <li>
              <span>1</span>
              <p>Preenches o formulário.</p>
            </li>
            <li>
              <span>2</span>
              <p>Vemos se faz sentido para ti e se há vaga.</p>
            </li>
            <li>
              <span>3</span>
              <p>Se houver vaga, enviamos confirmação e local.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section donate-section" id="doar">
        <div className="donate-copy">
          <p className="eyebrow">Doações</p>
          <h2>Queres apoiar o clube?</h2>
          <p>
            Opcional. Ajuda-nos a pagar comida, materiais e ferramentas,
            mantendo o Lisbon Code gratuito para quem participa.
          </p>
        </div>
        <a
          className="donate-link"
          href="https://hcb.hackclub.com/donations/start/lisboncode"
          target="_blank"
          rel="noreferrer"
        >
          <strong>Faz uma doação</strong>
          <span>Abre no HCB</span>
        </a>
      </section>

      <footer className="site-footer">
        <a className="footer-wordmark" href="#inicio" aria-label="Lisbon Code">
          <span>&lt;lisbon&gt;</span>
          <strong>code</strong>
        </a>
        <p>
          Hack Club em Lisboa. Uma reunião por semana para teens que gostam de
          tecnologia e querem construir projetos.
        </p>
        <div className="footer-links">
          <Link href="/candidatura">Candidatura</Link>
          <a href="https://hackclub.com/clubs/">Hack Club</a>
        </div>
        <div className="social-links" aria-label="Redes sociais">
          <a href={githubUrl} aria-label="GitHub do Lisbon Code">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.14c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18A10.93 10.93 0 0 1 12 6.04c.98 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.24 2.75.12 3.04.73.8 1.17 1.83 1.17 3.08 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>
          <a href={instagramUrl} aria-label="Instagram do Lisbon Code">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.95 2.1a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7.25A4.75 4.75 0 1 1 12 16.75 4.75 4.75 0 0 1 12 7.25Zm0 2A2.75 2.75 0 1 0 12 14.75 2.75 2.75 0 0 0 12 9.25Z" />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}

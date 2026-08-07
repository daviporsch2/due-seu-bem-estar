import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowUpRight,
  Clock,
  Hand,
  Instagram,
  MapPin,
  Phone,
  Quote,
  Sparkles,
  Star,
  Stethoscope,
  Waves,
} from "lucide-react";

import heroClinica from "@/assets/hero-clinica.jpg";
import osteopatia from "@/assets/osteopatia.jpg";
import pilates from "@/assets/pilates.jpg";
import espacoAsset from "@/assets/espaco.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DUE | Osteopatia, Fisioterapia e Pilates em Teresina" },
      {
        name: "description",
        content:
          "Na DUE, a gente cuida de você de forma personalizada: osteopatia, fisioterapia especializada, quiropraxia e pilates no Jóquei, Teresina - PI.",
      },
      { property: "og:title", content: "DUE | Osteopatia e Movimento — Teresina" },
      {
        property: "og:description",
        content:
          "Osteopatia, fisioterapia, quiropraxia e pilates com atendimento personalizado. Rua Napoleão Lima, 1676 — Jóquei, Teresina.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATS = "https://wa.me/5586988764383";
const INSTA = "https://www.instagram.com/dueteresina/";

const nav = [
  { label: "A clínica", href: "#clinica" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Espaço", href: "#espaco" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const tratamentos = [
  {
    icon: Hand,
    nome: "Osteopatia",
    texto:
      "Avaliação global e técnicas manuais precisas para devolver mobilidade às articulações e alívio duradouro à dor.",
  },
  {
    icon: Stethoscope,
    nome: "Fisioterapia especializada",
    texto:
      "Tratamento de coluna, escoliose, DTM e dores de cabeça com condutas individualizadas e baseadas em evidência.",
  },
  {
    icon: Waves,
    nome: "Quiropraxia",
    texto:
      "Ajustes seguros para a coluna vertebral, recuperando o equilíbrio postural e a liberdade de movimento.",
  },
  {
    icon: Activity,
    nome: "Pilates",
    texto:
      "Aulas com poucos alunos por horário, focadas em força, flexibilidade e consciência corporal.",
  },
  {
    icon: Sparkles,
    nome: "Avaliação personalizada",
    texto:
      "Todo cuidado começa por escutar sua história: exame detalhado e um plano feito para o seu corpo.",
  },
  {
    icon: Clock,
    nome: "Acompanhamento contínuo",
    texto:
      "Evolução monitorada sessão por sessão, com orientações para levar o cuidado para a sua rotina.",
  },
];

const depoimentos = [
  {
    nome: "Marina Albuquerque",
    tag: "Osteopatia",
    texto:
      "Cheguei na DUE com dores no pescoço há meses. Desde a primeira avaliação senti a diferença de ser realmente escutada. Hoje acordo sem dor.",
  },
  {
    nome: "Rafael Nogueira",
    tag: "Fisioterapia da coluna",
    texto:
      "Atendimento impecável e muito técnico. Explicaram cada etapa do tratamento e voltei a correr sem medo de travar as costas.",
  },
  {
    nome: "Juliana Castro",
    tag: "Pilates",
    texto:
      "As aulas são personalizadas de verdade. Ganhei postura, força e o ambiente é acolhedor de um jeito que dá vontade de voltar.",
  },
  {
    nome: "Ana Beatriz Lima",
    tag: "Tratamento de DTM",
    texto:
      "Sofria com dor na mandíbula e enxaqueca. O cuidado da equipe mudou minha rotina — indico a DUE para todo mundo em Teresina.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl tracking-[0.3em] text-primary">DUE</span>
            <span className="hidden text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
              Osteopatia e Movimento
            </span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATS}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Agendar
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative isolate">
          <img
            src={heroClinica}
            alt="Recepção da clínica DUE Osteopatia e Movimento em Teresina"
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="veil absolute inset-0" />
          <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-6 pb-20 pt-32">
            <p className="eyebrow reveal">Teresina — Piauí</p>
            <h1 className="reveal mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-deep-foreground sm:text-6xl md:text-7xl">
              A gente cuida de você
              <span className="block italic text-brass">de forma personalizada</span>
            </h1>
            <p className="reveal mt-8 max-w-xl text-base leading-relaxed text-deep-foreground/80">
              Osteopatia, fisioterapia especializada, quiropraxia e pilates em um espaço pensado
              para o seu bem-estar. Movimento é tratamento, é liberdade — e é o nosso jeito de
              devolver conforto ao seu corpo.
            </p>
            <div className="reveal mt-10 flex flex-wrap items-center gap-4">
              <a
                href={WHATS}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-primary transition-transform hover:-translate-y-0.5"
              >
                Agendar avaliação
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#tratamentos"
                className="inline-flex items-center gap-2 rounded-full border border-deep-foreground/40 px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-deep-foreground transition-colors hover:border-brass hover:text-brass"
              >
                Nossos tratamentos
              </a>
            </div>
            <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-deep-foreground/20 pt-8 text-deep-foreground/80">
              <span className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 fill-brass text-brass" />
                4,9 · mais de 150 avaliações no Google
              </span>
              <span className="text-sm">6,8 mil seguidores no Instagram</span>
              <span className="text-sm">Rua Napoleão Lima, 1676 — Jóquei</span>
            </div>
          </div>
        </section>

        {/* A clínica */}
        <section id="clinica" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow">A clínica</p>
              <h2 className="rule-brass mt-5 font-display text-4xl leading-tight md:text-5xl">
                Mais do que tratamentos: um cuidado que enxerga você por inteiro
              </h2>
              <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                Na DUE, cada detalhe é planejado para o seu bem-estar. Unimos osteopatia,
                fisioterapia e pilates em um só lugar, com profissionais comprometidos com a sua
                evolução e técnicas seguras, personalizadas e focadas em devolver liberdade ao seu
                movimento.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Do primeiro atendimento à alta, você é acompanhado de perto — com escuta, expertise
                e o carinho que o seu corpo merece.
              </p>
              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  { n: "4,9", l: "no Google" },
                  { n: "+10", l: "anos de cuidado" },
                  { n: "3", l: "especialidades" },
                ].map((s) => (
                  <div key={s.l}>
                    <dt className="font-display text-4xl text-primary">{s.n}</dt>
                    <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {s.l}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <img
                src={osteopatia}
                alt="Sessão de osteopatia com técnicas manuais na clínica DUE"
                width={1200}
                height={1408}
                loading="lazy"
                className="shadow-soft h-full w-full rounded-sm object-cover"
              />
              <img
                src={pilates}
                alt="Aula de pilates no estúdio da DUE em Teresina"
                width={1200}
                height={1408}
                loading="lazy"
                className="shadow-soft mt-10 h-full w-full rounded-sm object-cover"
              />
            </div>
          </div>
        </section>

        {/* Tratamentos */}
        <section id="tratamentos" className="bg-sand/60 py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="eyebrow">Tratamentos</p>
              <h2 className="rule-brass mt-5 font-display text-4xl leading-tight md:text-5xl">
                Técnicas seguras, conduzidas por quem entende do seu corpo
              </h2>
            </div>
            <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {tratamentos.map(({ icon: Icon, nome, texto }) => (
                <article
                  key={nome}
                  className="group bg-card p-9 transition-colors hover:bg-accent/50"
                >
                  <Icon className="h-6 w-6 text-brass" strokeWidth={1.25} />
                  <h3 className="mt-6 font-display text-2xl">{nome}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Espaço */}
        <section id="espaco" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-14 md:grid-cols-[1.15fr_1fr] md:items-center">
            <img
              src={espacoAsset.url}
              alt="Profissional da clínica DUE Osteopatia e Movimento"
              width={1080}
              height={1350}
              loading="lazy"
              className="shadow-soft w-full rounded-sm object-cover"
            />
            <div>
              <p className="eyebrow">O espaço</p>
              <h2 className="rule-brass mt-5 font-display text-4xl leading-tight md:text-5xl">
                Ambientes pensados no seu conforto
              </h2>
              <ul className="mt-10 space-y-5">
                {[
                  "Salas individuais para atendimento reservado e tranquilo",
                  "Estúdio de pilates com equipamentos completos e turmas reduzidas",
                  "Equipe multiprofissional integrada, do diagnóstico à alta",
                  "Localização fácil no Jóquei, com atendimento de segunda a sábado",
                ].map((item) => (
                  <li key={item} className="flex gap-4 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-6 shrink-0 bg-brass" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="bg-deep py-24 text-deep-foreground md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="eyebrow">Depoimentos</p>
              <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
                Histórias de quem voltou a se mover sem dor
              </h2>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {depoimentos.map((d) => (
                <figure
                  key={d.nome}
                  className="flex h-full flex-col justify-between rounded-sm border border-deep-foreground/15 p-9"
                >
                  <Quote className="h-6 w-6 text-brass" strokeWidth={1.25} />
                  <blockquote className="mt-6 font-display text-xl italic leading-relaxed">
                    “{d.texto}”
                  </blockquote>
                  <figcaption className="mt-8 border-t border-deep-foreground/15 pt-5">
                    <span className="block text-sm">{d.nome}</span>
                    <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.22em] text-brass">
                      {d.tag}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="eyebrow">Contato</p>
              <h2 className="rule-brass mt-5 font-display text-4xl leading-tight md:text-5xl">
                Vamos cuidar de você
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                Agende sua avaliação pelo WhatsApp ou telefone. Nossa equipe ajuda a escolher o
                cuidado ideal para o seu momento.
              </p>
              <a
                href={WHATS}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Agendar pelo WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div>
              <dl className="divide-y divide-border border-y border-border">
                {[
                  {
                    icon: MapPin,
                    t: "Endereço",
                    c: "Rua Napoleão Lima, 1676 — Jóquei, Teresina - PI, 64049-220",
                  },
                  { icon: Phone, t: "WhatsApp", c: "+55 (86) 98876-4383" },
                  {
                    icon: Clock,
                    t: "Horários",
                    c: "Segunda a sexta: 7h às 20h · Sábado: 8h às 12h",
                  },
                ].map(({ icon: Icon, t, c }) => (
                  <div key={t} className="flex gap-5 py-7">
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-brass" strokeWidth={1.25} />
                    <div>
                      <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                        {t}
                      </dt>
                      <dd className="mt-2 text-base leading-relaxed">{c}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              <a
                href={INSTA}
                target="_blank"
                rel="noreferrer"
                className="shadow-soft group mt-10 flex items-center gap-5 rounded-sm bg-deep p-6 text-deep-foreground transition-transform hover:-translate-y-0.5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brass/60">
                  <Instagram className="h-6 w-6 text-brass" strokeWidth={1.25} />
                </span>
                <span className="flex-1">
                  <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-brass">
                    Siga no Instagram
                  </span>
                  <span className="mt-1 block font-display text-2xl">@dueteresina</span>
                  <span className="mt-1 block text-xs text-deep-foreground/70">
                    6,8 mil seguidores · dicas, bastidores e novidades
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-brass transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
          <div className="mt-16 overflow-hidden rounded-sm border border-border">
            <iframe
              title="Mapa da clínica DUE Osteopatia e Movimento"
              src="https://www.google.com/maps?q=Rua%20Napole%C3%A3o%20Lima%2C%201676%20-%20J%C3%B3quei%2C%20Teresina%20-%20PI&output=embed"
              className="h-[380px] w-full"
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-sand/60 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl tracking-[0.3em] text-primary">DUE</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Osteopatia · Fisioterapia · Pilates
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://www.instagram.com/dueteresina"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Instagram className="h-4 w-4" /> @dueteresina
            </a>
            <a href="tel:+558632336545" className="transition-colors hover:text-primary">
              (86) 3233-6545
            </a>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-6xl px-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} DUE Osteopatia e Movimento — Teresina, PI.
        </p>
      </footer>
    </div>
  );
}

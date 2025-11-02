import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Building2,
  Briefcase,
  Users,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Rocket,
  Handshake,
  Layers,
  LineChart,
  ShieldCheck,
  Search,
  ArrowRight,
  Quote,
  Clock,
  Scale,
  WalletCards,
  FileText,
  Star,
} from "lucide-react";

// ------------------------------------------------------------
// Edgar & Winston — Cabinet de recrutement PAIE • COMPTABILITÉ • JURIDIQUE
// Single-file React site (preview-ready). Tailwind + shadcn/ui + Framer Motion.
// ------------------------------------------------------------

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`w-full py-20 md:py-28 ${className}`}>{children}</section>
);

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const SectionTitle = ({ kicker, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center mb-12">
    {kicker && (
      <span className="text-sm uppercase tracking-widest text-muted-foreground">{kicker}</span>
    )}
    <h2 className="mt-2 text-3xl md:text-4xl font-semibold leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>
    )}
  </div>
);

const Stat = ({ value, label }) => (
  <div className="p-6 rounded-2xl border bg-background">
    <div className="text-3xl md:text-4xl font-semibold tracking-tight">{value}</div>
    <div className="mt-2 text-sm text-muted-foreground">{label}</div>
  </div>
);

const Feature = ({ icon: Icon, title, desc }) => (
  <Card className="h-full">
    <CardHeader className="space-y-2">
      <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription>{desc}</CardDescription>
    </CardHeader>
  </Card>
);

const Pill = ({ children }) => (
  <span className="px-3 py-1 rounded-full border text-sm text-muted-foreground">
    {children}
  </span>
);

const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm md:text-base text-muted-foreground hover:text-foreground transition">
    {children}
  </a>
);

const jobs = [
  {
    title: "Responsable Paie Multi-sites",
    sector: "Paie & Administration du personnel",
    location: "Paris / Hybrid",
    type: "CDI",
  },
  {
    title: "Collaborateur Comptable Confirmé",
    sector: "Cabinet d'expertise comptable",
    location: "Lyon 2e",
    type: "CDI",
  },
  {
    title: "Juriste Droit des Sociétés",
    sector: "Juridique Corporate",
    location: "Nantes",
    type: "CDI",
  },
  {
    title: "Gestionnaire Paie Senior",
    sector: "Paie / Groupe retail",
    location: "Remote – France",
    type: "CDI",
  },
];

export default function EdgarWinstonSite() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <Container className="flex h-16 items-center justify-between gap-6">
          <a href="#accueil" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-foreground text-background grid place-items-center font-bold">E&W</div>
            <div className="leading-tight">
              <p className="text-sm uppercase tracking-widest">Edgar & Winston</p>
              <p className="text-xs text-muted-foreground">Cabinet de recrutement</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#expertises">Expertises</NavLink>
            <NavLink href="#metiers">Nos métiers</NavLink>
            <NavLink href="#offres">Offres</NavLink>
            <NavLink href="#candidats">Candidats</NavLink>
            <NavLink href="#clients">Entreprises</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <Button asChild>
              <a href="#contact">Contact</a>
            </Button>
          </nav>
          <a href="#contact" className="md:hidden"><Button size="sm">Contact</Button></a>
        </Container>
      </header>

      {/* Hero */}
      <Section id="accueil" className="pt-16 md:pt-20">
        <Container className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex flex-wrap gap-2 mb-4">
                <Pill>Paie</Pill>
                <Pill>Comptabilité</Pill>
                <Pill>Juridique</Pill>
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold leading-[1.1]">
                Cabinet de recrutement <span className="whitespace-nowrap">Paie • Comptabilité • Juridique</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Nous identifions et sélectionnons les meilleurs talents en paie, comptabilité et juridique. Shortlist rapide, process transparent, accompagnement exigeant.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="#clients"><Handshake className="w-4 h-4 mr-2"/>Confier un recrutement</a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="#candidats"><Search className="w-4 h-4 mr-2"/>Envoyer mon CV</a>
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                <Stat value="≤ 72 h" label="Envoi des 1ers CV"/>
                <Stat value="80k+" label="Profils qualifiés en base"/>
                <Stat value="4.8/5" label="Satisfaction clients"/>
              </div>
            </motion.div>
          </div>
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[5/3] bg-gradient-to-br from-muted to-background grid place-items-center">
                    <div className="grid grid-cols-3 gap-4 p-6 w-full max-w-lg">
                      {[WalletCards, FileText, Scale, Building2, Users, Briefcase, Rocket, LineChart, ShieldCheck].map((I, idx) => (
                        <div key={idx} className="h-24 rounded-2xl border grid place-items-center">
                          <I className="w-6 h-6" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Bloc Entreprises / Candidats */}
      <Section id="expertises" className="bg-muted/30">
        <Container>
          <SectionTitle
            kicker="Nos services"
            title="Une solution pour chaque besoin"
            subtitle="CDI, CDD, intérim & missions — accompagnement sur mesure pour entreprises et candidats."
          />
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Vous êtes une entreprise ?</CardTitle>
                <CardDescription>Recrutements paie, comptabilité et juridique — middle & top management, profils rares ou en volume.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/>Brief structuré & scorecards</div>
                <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/>Sourcing direct & prise de références</div>
                <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/>Shortlist qualifiée ≤ 72h</div>
                <div className="pt-2"><Button asChild><a href="#contact">Confier un besoin</a></Button></div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Vous êtes candidat ?</CardTitle>
                <CardDescription>Accompagnement transparent et rapide sur des opportunités alignées avec vos objectifs.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/>Coaching entretien & feedback 72h</div>
                <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/>Confidentialité & conseils de rémunération</div>
                <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/>Process clair étape par étape</div>
                <div className="pt-2"><Button variant="secondary" asChild><a href="#candidats">Déposer mon CV</a></Button></div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Nos métiers */}
      <Section id="metiers">
        <Container>
          <SectionTitle kicker="Nos métiers" title="Nos domaines d'expertise" subtitle="Sélection rigoureuse de talents spécialisés en paie, comptabilité et juridique." />
          <Tabs defaultValue="paie">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="paie">Paie</TabsTrigger>
              <TabsTrigger value="compta">Comptabilité</TabsTrigger>
              <TabsTrigger value="juridique">Juridique</TabsTrigger>
            </TabsList>
            <TabsContent value="paie" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                {["Gestionnaire paie", "Référent paie", "Responsable paie", "ADP", "Payroll Manager", "Chef de projet SIRH Paie"].map((r,i)=>(
                  <Badge key={i} variant="secondary" className="justify-center py-2">{r}</Badge>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="compta" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                {["Directeur comptable", "Responsable comptable", "Comptable général", "Comptable clients/fournisseurs", "Trésorier", "Collaborateur / Chef de mission EC"].map((r,i)=>(
                  <Badge key={i} variant="secondary" className="justify-center py-2">{r}</Badge>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="juridique" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                {["Juriste Droit des sociétés", "Juriste Droit social", "Paralegal", "Corporate officer", "Responsable juridique", "Conformité / RGPD"].map((r,i)=>(
                  <Badge key={i} variant="secondary" className="justify-center py-2">{r}</Badge>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Container>
      </Section>

      {/* Pourquoi nous choisir */}
      <Section className="bg-muted/30">
        <Container>
          <SectionTitle kicker="Pourquoi nous" title="Les bonnes raisons de nous choisir" />
          <div className="grid md:grid-cols-3 gap-6">
            <Feature icon={ShieldCheck} title="Zéro coût pour les candidats" desc="Les entreprises nous rémunèrent au succès, jamais les candidats." />
            <Feature icon={Star} title="Spécialisation métier" desc="100% dédiés à la paie, la comptabilité et le juridique." />
            <Feature icon={LineChart} title="Méthode & KPI" desc="Cadence hebdo, reporting partagé, time-to-hire réduit." />
          </div>
        </Container>
      </Section>

      {/* Offres */}
      <Section id="offres">
        <Container>
          <SectionTitle kicker="Offres" title="Postes ouverts" subtitle="Quelques opportunités représentatives (exemples)." />
          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="mt-1 flex flex-wrap gap-3 items-center">
                        <span className="flex items-center gap-2"><Building2 className="w-4 h-4"/>{job.sector}</span>
                        <span className="flex items-center gap-2"><MapPin className="w-4 h-4"/>{job.location}</span>
                        <Badge>{job.type}</Badge>
                      </CardDescription>
                    </div>
                    <Button variant="secondary" size="sm">Postuler</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> Package attractif, rôle à fort impact</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> Environnement exigeant, équipe senior</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> Process rapide & confidentiel</li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Candidats & Clients */}
      <Section id="candidats" className="bg-muted/30">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTitle kicker="Candidats" title="Votre prochain challenge, sans friction" subtitle="Coaching, feedback sincère et visibilité claire sur l'avancement." />
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Préparation aux entretiens</CardTitle>
                    <CardDescription>Brief précis, cas types, conseils de posture.</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Transparence</CardTitle>
                    <CardDescription>Feedback sous 72h après chaque étape.</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Déposez votre CV</CardTitle>
                  <CardDescription>Nous revenons vers vous si une opportunité correspond.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input placeholder="Nom & Prénom" />
                  <Input type="email" placeholder="Email" />
                  <Input type="tel" placeholder="Téléphone" />
                  <Input type="file" />
                  <Textarea placeholder="Secteurs, localisations, prétentions…" />
                  <Button className="w-full">Envoyer</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="clients">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTitle kicker="Entreprises" title="Un partenaire de recrutement orienté résultat" subtitle="De la définition du besoin à l'onboarding, avec des garanties adaptées." />
              <ul className="space-y-3 text-muted-foreground">
                {["Brief structuré et scorecards par compétences", "Mapping de marché & ciblage précis", "Entretiens approfondis & études de cas", "Références et accompagnement de l'offre"].map((item, i) => (
                  <li key={i} className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/>{item}</li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <Button asChild><a href="#contact">Parler à un consultant</a></Button>
                <Button variant="secondary" asChild><a href="#faq">Voir la FAQ</a></Button>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Nos modèles d'accompagnement</CardTitle>
                  <CardDescription>Choisissez le format adapté à votre cadence d'embauche.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="success">
                    <TabsList className="grid grid-cols-3 w-full">
                      <TabsTrigger value="success">Success fee</TabsTrigger>
                      <TabsTrigger value="retained">Retained</TabsTrigger>
                      <TabsTrigger value="rpo">RPO</TabsTrigger>
                    </TabsList>
                    <TabsContent value="success" className="mt-4 text-sm text-muted-foreground">
                      Paiement au succès, idéal pour besoins ponctuels. Démarrage rapide, engagement flexible.
                    </TabsContent>
                    <TabsContent value="retained" className="mt-4 text-sm text-muted-foreground">
                      Mandat exclusif avec engagement réciproque. Priorité de ressources, garantie renforcée.
                    </TabsContent>
                    <TabsContent value="rpo" className="mt-4 text-sm text-muted-foreground">
                      Renfort opérationnel intégré pour des volumes d'embauche soutenus.
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Témoignages */}
      <Section>
        <Container>
          <SectionTitle kicker="Témoignages" title="Ce que disent nos clients & candidats" />
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8"/>
                  <p className="mt-4 text-muted-foreground">« Une compréhension fine des métiers paie/compta/juridique et une exécution rapide. Shortlist reçue en 48h. »</p>
                  <div className="mt-4 text-sm">
                    <p className="font-medium">DRH, ETI multi-sites</p>
                    <p className="text-muted-foreground">Île-de-France</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="bg-muted/30">
        <Container>
          <SectionTitle kicker="FAQ" title="Une question ? On vous répond" />
          <Accordion type="single" collapsible className="mx-auto max-w-3xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>Êtes-vous payants pour les candidats ?</AccordionTrigger>
              <AccordionContent>Jamais. Nos services sont 100% gratuits pour les candidats. Les entreprises nous rémunèrent uniquement en cas de succès.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Quels profils recrutez-vous ?</AccordionTrigger>
              <AccordionContent>Paie (gestionnaires, responsables, SIRH), Comptabilité (opérationnels à direction), Juridique (sociétés, social, paralegal, conformité), en CDI, CDD, intérim et missions.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>En combien de temps envoyez-vous une shortlist ?</AccordionTrigger>
              <AccordionContent>En général sous 48–72h après le brief qualifié, grâce à notre base de talents et notre approche directe.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Intervenez-vous partout en France ?</AccordionTrigger>
              <AccordionContent>Oui, nous opérons partout en France, en présentiel, hybride ou full-remote selon les postes.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Container>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <SectionTitle kicker="Contact" title="Discutons de vos besoins" subtitle="Dites-nous en plus sur vos recrutements ou votre projet professionnel." />
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> +33 1 84 00 00 00</div>
                <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> contact@edgarwinston.com</div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/> 10 Rue de la Paix, 75002 Paris</div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Nous écrire</CardTitle>
                <CardDescription>Réponse sous 24h ouvrées.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <Input placeholder="Nom" />
                  <Input placeholder="Entreprise (facultatif)" />
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <Input type="email" placeholder="Email" />
                  <Input type="tel" placeholder="Téléphone" />
                </div>
                <Textarea placeholder="Votre message" rows={6} />
                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">En envoyant, vous acceptez notre politique de confidentialité.</div>
                  <Button>Envoyer <ArrowRight className="ml-2 w-4 h-4"/></Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="border-t">
        <Container className="py-10 grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-foreground text-background grid place-items-center font-bold">E&W</div>
              <div>
                <p className="font-medium">Edgar & Winston</p>
                <p className="text-muted-foreground">Recrutement Paie • Comptabilité • Juridique</p>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">Paris • Lyon • Remote France</p>
          </div>
          <div>
            <p className="font-medium mb-2">Navigation</p>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#expertises" className="hover:text-foreground">Nos services</a></li>
              <li><a href="#metiers" className="hover:text-foreground">Nos métiers</a></li>
              <li><a href="#offres" className="hover:text-foreground">Offres</a></li>
              <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
              <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-2">Ressources</p>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Mentions légales</a></li>
              <li><a href="#" className="hover:text-foreground">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-foreground">RGPD & cookies</a></li>
              <li><a href="#" className="hover:text-foreground">Blog</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-2">Newsletter</p>
            <div className="flex gap-2">
              <Input placeholder="Votre email" />
              <Button>S'abonner</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Insights recrutement 1×/mois – pas de spam.</p>
          </div>
        </Container>
        <div className="py-6 text-center text-xs text-muted-foreground border-t">
          © {new Date().getFullYear()} Edgar & Winston — Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}

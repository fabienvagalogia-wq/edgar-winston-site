
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/card'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Badge } from './components/ui/badge'
import { Handshake, Search, CheckCircle2, Building2, MapPin, ArrowRight, Mail, Quote } from 'lucide-react'

const Section = ({ id, children, className = '' }) => (<section id={id} className={['w-full py-20 md:py-28', className].join(' ')}>{children}</section>)
const Container = ({ children, className = '' }) => (<div className={['mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className].join(' ')}>{children}</div>)
const SectionTitle = ({ kicker, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center mb-12">
    {kicker && (<span className="text-sm uppercase tracking-widest text-gray-500">{kicker}</span>)}
    <h2 className="mt-2 text-3xl md:text-4xl font-semibold leading-tight">{title}</h2>
    {subtitle && (<p className="mt-4 text-gray-600 text-lg">{subtitle}</p>)}
  </div>
)

const jobs = [
  { title: 'Responsable Paie Multi-sites', sector: 'Paie & Administration du personnel', location: 'Paris / Hybrid', type: 'CDI' },
  { title: "Collaborateur Comptable Confirmé", sector: "Cabinet d'expertise comptable", location: 'Lyon 2e', type: 'CDI' },
]

const CONTACT_EMAIL = 'contact@edgaretwinston.fr'
// ✳️ Remplace ces 2 URL par tes vrais endpoints Formspree (format: https://formspree.io/f/xxxxabcd)
const FORMSPREE_NEED = 'https://formspree.io/f/XXXXNEED'
const FORMSPREE_CV   = 'https://formspree.io/f/XXXXCV__'

async function sendFormspree(endpoint, payload, setState) {
  try {
    setState({ loading: true, ok: false, error: '' })
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: payload
    })
    const data = await res.json().catch(()=>({}))
    if (res.ok) setState({ loading: false, ok: true, error: '' })
    else setState({ loading: false, ok: false, error: (data?.error || 'Une erreur est survenue') })
  } catch (e) {
    setState({ loading: false, ok: false, error: 'Connexion impossible' })
  }
}

function FormStatus({ state }) {
  if (state.loading) return <p className="text-sm text-gray-500">Envoi en cours…</p>
  if (state.ok) return <p className="text-sm text-green-600">Merci, votre message a bien été envoyé ✅</p>
  if (state.error) return <p className="text-sm text-red-600">Erreur : {state.error}</p>
  return null
}

export default function App() {
  const [needState, setNeedState] = useState({ loading: false, ok: false, error: '' })
  const [cvState, setCvState] = useState({ loading: false, ok: false, error: '' })

  return (
    <div className="min-h-screen bg-white text-black">

      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <Container className="flex h-16 items-center justify-between gap-6">
          <a href="#accueil" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-black text-white grid place-items-center font-bold">E&W</div>
            <div className="leading-tight">
              <p className="text-sm uppercase tracking-widest">EDGAR & WINSTON</p>
              <p className="text-xs text-gray-500">Cabinet de recrutement</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#expertises" className="text-sm text-gray-600 hover:text-black">Expertises</a>
            <a href="#metiers" className="text-sm text-gray-600 hover:text-black">Nos métiers</a>
            <a href="#offres" className="text-sm text-gray-600 hover:text-black">Offres</a>
            <a href="#candidats" className="text-sm text-gray-600 hover:text-black">Candidats</a>
            <a href="#clients" className="text-sm text-gray-600 hover:text-black">Entreprises</a>
            <a href="#faq" className="text-sm text-gray-600 hover:text-black">FAQ</a>
            <Button as="a" href="#contact">Contact</Button>
          </nav>
          <Button as="a" href="#contact" className="md:hidden">Contact</Button>
        </Container>
      </header>

      <Section id="accueil" className="pt-16 md:pt-20">
        <Container className="grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full border text-sm text-gray-500">Paie</span>
              <span className="px-3 py-1 rounded-full border text-sm text-gray-500">Comptabilité</span>
              <span className="px-3 py-1 rounded-full border text-sm text-gray-500">Juridique</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.1]">
              Cabinet de recrutement <span className="whitespace-nowrap">Paie · Comptabilité · Juridique</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Nous identifions et sélectionnons les meilleurs talents en paie, comptabilité et juridique.
              Shortlist rapide, process transparent, accompagnement exigeant.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button as="a" href="#contact"><Handshake className="w-4 h-4 mr-2" />Confier un recrutement</Button>
              <Button as="a" href="#candidats" variant="secondary"><Search className="w-4 h-4 mr-2" />Envoyer mon CV</Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="p-6 rounded-2xl border bg-white"><div className="text-3xl md:text-4xl font-semibold">≤ 72 h</div><div className="mt-2 text-sm text-gray-500">Envoi des 1ers CV</div></div>
              <div className="p-6 rounded-2xl border bg-white"><div className="text-3xl md:text-4xl font-semibold">80k+</div><div className="mt-2 text-sm text-gray-500">Profils qualifiés en base</div></div>
              <div className="p-6 rounded-2xl border bg-white"><div className="text-3xl md:text-4xl font-semibold">4.8/5</div><div className="mt-2 text-sm text-gray-500">Satisfaction clients</div></div>
            </div>
          </div>
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative rounded-2xl border overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80" alt="Réunion professionnelle" className="w-full h-full object-cover aspect-[5/3] grayscale" loading="eager" fetchpriority="high" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-white/30 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section id="candidats" className="bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTitle kicker="Candidats" title="Votre prochain challenge, sans friction" subtitle="Coaching, feedback sincère et visibilité claire sur l'avancement." />
            </div>
            <div>
              <Card>
                <CardHeader><CardTitle>Déposez votre CV</CardTitle><CardDescription>Nous revenons vers vous si une opportunité correspond.</CardDescription></CardHeader>
                <CardContent>
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault()
                      const form = e.currentTarget
                      const fd = new FormData(form)
                      await sendFormspree(FORMSPREE_CV, fd, setCvState)
                      if (cvState.ok) form.reset()
                    }}
                    className="space-y-3"
                  >
                    <Input name="Nom complet" placeholder="Nom & Prénom" required />
                    <Input name="Email" type="email" placeholder="Email" required />
                    <Input name="Téléphone" type="tel" placeholder="Téléphone (facultatif)" />
                    <Input name="Lien CV" type="url" placeholder="Lien de CV (Drive/Dropbox) ou joindre plus tard" />
                    <Textarea name="Message" placeholder="Secteurs, localisations, prétentions…" />
                    {/* Honey pot anti-spam */}
                    <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">Envoi sécurisé via Formspree.</div>
                      <Button type="submit" disabled={cvState.loading}>{cvState.loading ? 'Envoi…' : 'Envoyer'}</Button>
                    </div>
                    <FormStatus state={cvState} />
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

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
                        <span className="flex items-center gap-2"><Building2 className="w-4 h-4" />{job.sector}</span>
                        <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{job.location}</span>
                        <Badge>{job.type}</Badge>
                      </CardDescription>
                    </div>
                    <Button as="a" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Candidature — ' + job.title)}`} variant="secondary" className="px-3 py-1.5 text-sm">Postuler</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5" /> Package attractif, rôle à fort impact</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5" /> Environnement exigeant, équipe senior</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5" /> Process rapide & confidentiel</li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="contact">
        <Container className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <SectionTitle kicker="Contact" title="Discutons de vos besoins" subtitle="Vous pouvez aussi nous écrire directement par email." />
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div>
            </div>
          </div>
          <Card>
            <CardHeader><CardTitle>Nous confier un besoin</CardTitle><CardDescription>Réponse sous 24h ouvrées.</CardDescription></CardHeader>
            <CardContent>
              <form
                onSubmit={async (e) => {
                  e.preventDefault()
                  const form = e.currentTarget
                  const fd = new FormData(form)
                  await sendFormspree(FORMSPREE_NEED, fd, setNeedState)
                  if (needState.ok) form.reset()
                }}
                className="space-y-3"
              >
                <div className="grid md:grid-cols-2 gap-3">
                  <Input name="Entreprise" placeholder="Entreprise" required />
                  <Input name="Nom" placeholder="Votre nom" required />
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <Input name="Email" type="email" placeholder="Votre email" required />
                  <Input name="Téléphone" type="tel" placeholder="Téléphone (facultatif)" />
                </div>
                <Input name="Poste à pourvoir" placeholder="Intitulé du poste" required />
                <Textarea name="Détails" placeholder="Contexte, missions, localisation, salaire..." />
                {/* Honey pot anti-spam */}
                <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">Envoi sécurisé via Formspree.</div>
                  <Button type="submit" disabled={needState.loading}>{needState.loading ? 'Envoi…' : 'Envoyer'} <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </div>
                <FormStatus state={needState} />
              </form>
            </CardContent>
          </Card>
        </Container>
      </Section>

      <footer className="border-t">
        <Container className="py-10 grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-black text-white grid place-items-center font-bold">E&W</div>
              <div>
                <p className="font-medium">Edgar & Winston</p>
                <p className="text-gray-600">Recrutement Paie · Comptabilité · Juridique</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">Paris • Lyon • Remote France</p>
          </div>
          <div>
            <p className="font-medium mb-2">Navigation</p>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#expertises" className="hover:text-black">Nos services</a></li>
              <li><a href="#metiers" className="hover:text-black">Nos métiers</a></li>
              <li><a href="#offres" className="hover:text-black">Offres</a></li>
              <li><a href="#faq" className="hover:text-black">FAQ</a></li>
              <li><a href="#contact" className="hover:text-black">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-2">Ressources</p>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">Mentions légales</a></li>
              <li><a href="#" className="hover:text-black">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-black">RGPD & cookies</a></li>
              <li><a href="#" className="hover:text-black">Blog</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-2">Contact</p>
            <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </Container>
        <div className="py-6 text-center text-xs text-gray-500 border-t">
          © {new Date().getFullYear()} Edgar & Winston — Tous droits réservés.
        </div>
      </footer>

    </div>
  )
}

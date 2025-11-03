
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/card'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Badge } from './components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Handshake, Search, CheckCircle2, Phone, Mail } from 'lucide-react'

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={['w-full py-20 md:py-28', className].join(' ')}>{children}</section>
)
const Container = ({ children, className = '' }) => (
  <div className={['mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className].join(' ')}>{children}</div>
)

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* HERO */}
      <Section id="accueil" className="pt-16 md:pt-20">
        <Container className="grid md:grid-cols-2 gap-10 items-center">
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
              <Button><Handshake className="w-4 h-4 mr-2" />Confier un recrutement</Button>
              <Button variant="secondary"><Search className="w-4 h-4 mr-2" />Envoyer mon CV</Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="p-6 rounded-2xl border bg-white">
                <div className="text-3xl md:text-4xl font-semibold">≤ 72 h</div>
                <div className="mt-2 text-sm text-gray-500">Envoi des 1ers CV</div>
              </div>
              <div className="p-6 rounded-2xl border bg-white">
                <div className="text-3xl md:text-4xl font-semibold">80k+</div>
                <div className="mt-2 text-sm text-gray-500">Profils qualifiés en base</div>
              </div>
              <div className="p-6 rounded-2xl border bg-white">
                <div className="text-3xl md:text-4xl font-semibold">4.8/5</div>
                <div className="mt-2 text-sm text-gray-500">Satisfaction clients</div>
              </div>
            </div>
          </div>
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative rounded-2xl border overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                  alt="Réunion professionnelle dans un cabinet de recrutement"
                  className="w-full h-full object-cover aspect-[5/3] grayscale"
                  loading="eager"
                  fetchpriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-white/30 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* CONTACT QUICK */}
      <Section id="contact" className="bg-gray-50">
        <Container className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Discutons de vos besoins</h2>
            <p className="mt-4 text-gray-600">Dites-nous en plus sur vos recrutements ou votre projet professionnel.</p>
            <div className="mt-6 space-y-3 text-gray-700">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> +33 1 84 00 00 00</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> contact@edgarwinston.com</div>
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
                <div className="text-xs text-gray-500">En envoyant, vous acceptez notre politique de confidentialité.</div>
                <Button>Envoyer</Button>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </div>
  )
}

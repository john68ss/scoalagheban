import { useMemo, useState } from 'react'

type Faq = {
  q: string
  a: string
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-drive-orange/30 bg-drive-orange/10 px-3 py-1.5 text-xs font-medium text-drive-orange backdrop-blur-sm transition hover:border-drive-orange/40 hover:bg-drive-orange/15">
      {children}
    </span>
  )
}

function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker: string
  title: string
  subtitle: string
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <div className="mb-4 inline-flex items-center justify-center">
        <span className="rounded-full bg-gradient-to-r from-drive-orange/20 to-drive-blue/20 border border-drive-orange/30 px-5 py-2.5 text-base font-bold text-drive-orange uppercase tracking-wide">
          {kicker}
        </span>
      </div>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
        {subtitle}
      </p>
    </div>
  )
}

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs: Faq[] = useMemo(
    () => [
      {
        q: 'Unde au loc ședințele?',
        a: 'În oraș + poligon (în funcție de nivel), cu punct de întâlnire flexibil. Stabilim împreună traseul și obiectivele.',
      },
      {
        q: 'Pot face ore suplimentare înainte de examen?',
        a: 'Da. Putem crea un plan intensiv în ultimele 7–14 zile: manevre, parcări, intersecții dificile și simulare examen.',
      },
      {
        q: 'Ce mașină folosim?',
        a: 'Mașină modernă, întreținută, cu dublă comandă. Într-o ședință îți explic setările și reperele, ca să te simți în control.',
      },
      {
        q: 'Dacă am emoții la volan?',
        a: 'Lucrăm gradual: respirație, repere simple, repetare în zone cu trafic redus, apoi creștem dificultatea. Te susțin fără presiune.',
      },
    ],
    [],
  )

  return (
    <div id="acasa">
        <section className="mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <div className="mb-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <Badge>� +10 ani experiență</Badge>
                <Badge>� 100% calm & umor</Badge>
                <Badge>⏰ Flexibil cu programul</Badge>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Salut! Sunt{' '}
                <span className="block mt-2 text-drive-orange drop-shadow-[0_0_40px_rgba(255,107,53,0.8)]" style={{ textShadow: '0 0 60px rgba(255,107,53,0.6), 0 0 30px rgba(255,107,53,0.4)' }}>
                  Ghița Gheban
                </span>
              </h1>
              
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70 lg:mx-0">
                Instructor auto cu peste 10 ani de experiență. Nu-ți fac morală, nu urlu, nu-ți distrug nervii. 
                Te învăț să conduci <span className="text-drive-orange font-semibold">calm, corect și cu încredere</span> — 
                cu repere clare, multă răbdare și puțin umor (că așa e mai ușor!). 🚗💨
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-drive-orange to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-drive-orange/30 transition hover:shadow-2xl hover:shadow-drive-orange/50 hover:scale-105"
                >
                  Programează o ședință
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>

              {/* Stats - better aligned */}
              <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
                {[
                  { value: '+500', label: 'elevi mulțumiți', color: 'text-drive-orange' },
                  { value: '4.9/5', label: 'rating mediu', color: 'text-drive-blue' },
                  { value: '99%', label: 'promovabilitate', color: 'text-drive-green' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 text-center backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10"
                  >
                    <div className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-white/60 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual card - simplified & colorful */}
            <div className="relative">
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 backdrop-blur-sm shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-lg font-bold text-white flex items-center gap-2">
                      Plan de progres
                      <span className="h-2 w-2 rounded-full bg-drive-orange animate-pulse" />
                    </div>
                    <div className="text-sm text-white/60">în 3 pași simpli</div>
                  </div>
                  <span className="rounded-lg border border-drive-orange/30 bg-drive-orange/10 px-3 py-1 text-xs font-semibold text-drive-orange">
                    LIVE
                  </span>
                </div>

                {/* Steps */}
                <div className="grid gap-4">
                  {[
                    { icon: '🎯', title: 'Evaluare', desc: 'Analizăm nivelul și obiectivele tale', color: 'from-blue-500 to-cyan-500' },
                    { icon: '⚙️', title: 'Planificare', desc: 'Plan personalizat cu repere clare', color: 'from-purple-500 to-pink-500' },
                    { icon: '🚀', title: 'Progres', desc: 'Exersăm și pregătim examenul', color: 'from-green-500 to-emerald-500' },
                  ].map((step, idx) => (
                    <div
                      key={step.title}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 transition hover:border-white/20 hover:bg-white/10"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-2xl shadow-lg`}>
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-white/40">#{idx + 1}</span>
                            <div className="text-base font-bold text-white">{step.title}</div>
                          </div>
                          <div className="mt-1 text-sm leading-relaxed text-white/70">{step.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-drive-orange/10 to-drive-blue/10 p-5">
                  <div>
                    <div className="text-sm font-bold text-white">Disponibil azi</div>
                    <div className="text-xs text-white/60">Programări rapide</div>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-drive-orange to-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-drive-orange/25 transition hover:shadow-xl hover:shadow-drive-orange/40"
                  >
                    Contact →
                  </a>
                </div>

                {/* Bottom stats */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                    <div className="text-xs text-white/60 mb-2">Stil</div>
                    <div className="text-sm font-semibold text-white mb-3">Conducere defensivă</div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-drive-orange to-orange-500" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                    <div className="text-xs text-white/60 mb-2">Focus</div>
                    <div className="text-sm font-semibold text-white mb-3">Parcări & manevre</div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[64%] rounded-full bg-gradient-to-r from-drive-blue to-blue-500" />
                    </div>                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* About Me - Personality Section */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-drive-orange/10 via-drive-blue/10 to-white/5 p-8 sm:p-12 backdrop-blur-sm">
            {/* Decorative elements */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-drive-orange/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-drive-blue/20 blur-3xl" />
            
            <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Image placeholder - aici va fi imaginea */}
              <div className="relative mx-auto w-full max-w-md">
                <div className="aspect-square overflow-hidden rounded-2xl border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-4">
                  {/* Decomentează acest bloc când ai imaginea în /public/instructor-masina.jpg */}
                  <img 
                    src="/instructor-masina.png" 
                    alt="Ghița Gheban - Instructor Auto" 
                    className="h-full w-full object-contain"
                  />
                  
                  {/* Placeholder - comentează dacă folosești imaginea de sus */}
                  {/* 
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🚗👨‍🏫</div>
                      <div className="text-sm text-white/60">Aici va apărea imaginea cu<br />Ghița și mașina</div>
                    </div>
                  </div>
                  */}
                </div>
                {/* Fun badge */}
                <div className="absolute -right-4 -top-4 rounded-xl border border-drive-green/40 bg-gradient-to-br from-drive-green/20 to-green-600/20 px-4 py-2 backdrop-blur-sm">
                  <div className="text-xs font-bold text-drive-green">😎 Instructor Cool</div>
                </div>
              </div>

              {/* About content */}
              <div className="flex flex-col justify-center">
                <div className="mb-4 inline-flex items-center gap-2">
                  <span className="text-3xl">👋</span>
                  <h2 className="text-3xl font-bold text-white">
                    De ce eu?
                  </h2>
                </div>
                
                <p className="mb-6 text-lg leading-relaxed text-white/80">
                  Știu, știu... toți instructorii zic același lucru: „sunt calm, sunt profesionist". 
                  Dar hai să-ți spun <span className="text-drive-orange font-semibold">ce mă face diferit</span>:
                </p>

                <div className="space-y-4">
                  {[
                    { icon: '🎯', title: 'Repere clare, nu confuzie', desc: 'Îți explic exact CE să te uiți, CÂND să virezi și DE CE. Fără „simte mașina" și alte enigme.' },
                    { icon: '😌', title: 'Zero stres, maxim calm', desc: 'Nu urlu, nu fac crize. Dacă greșești, e OK — așa se învață. Respirăm, analizăm, corectăm.' },
                    { icon: '😂', title: 'Umor (când situația cere)', desc: 'Un chef pe drum nu strică. Glumim, ascultăm muzică, facem learning-ul plăcut.' },
                    { icon: '🔧', title: 'Flexibil cu orarul', desc: 'Înțeleg că ai job, facultate, viață. Ne adaptăm — dimineață, seară, weekend, cum îți convine.' },
                    { icon: '📊', title: 'Progres vizibil', desc: 'După fiecare ședință știi exact ce ai învățat și ce urmează. Plan clar, fără surprize.' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:bg-white/10">
                      <div className="text-3xl">{item.icon}</div>
                      <div className="flex-1">
                        <div className="font-bold text-white">{item.title}</div>
                        <div className="mt-1 text-sm leading-relaxed text-white/70">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-xl border border-drive-orange/30 bg-drive-orange/10 p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💡</span>
                    <div>
                      <div className="font-bold text-white">Filosofia mea:</div>
                      <p className="mt-1 text-sm leading-relaxed text-white/80">
                        „Oricine poate să conducă. Dar să conduci <span className="text-drive-orange font-semibold">safe, relaxat și cu încredere</span> — 
                        asta necesită un instructor care chiar își pasă de progresul tău, nu doar de bani."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manual vs Automat Section */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionTitle
            kicker="Transmisie"
            title="Manual sau Automat? Tu alegi!"
            subtitle="Oferim training pentru ambele tipuri de transmisie. Fiecare are avantajele sale."
          />

          <div className="grid gap-8 lg:grid-cols-2 mb-12">
            {/* Manual Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-drive-blue/10 to-white/5 p-8 backdrop-blur-sm transition hover:border-drive-blue/30">
              <div className="absolute top-4 right-4">
                <div className="rounded-full bg-drive-blue/20 border border-drive-blue px-3 py-1 text-xs font-bold text-drive-blue">
                  CLASIC
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-drive-blue to-blue-600 flex items-center justify-center text-2xl">
                    ⚙️
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Transmisie Manuală</h3>
                    <p className="text-sm text-white/60">Controlul complet în mâinile tale</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-drive-blue mb-2 flex items-center gap-2">
                    <span>✓</span> Avantaje:
                  </h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-start gap-2">
                      <span className="text-drive-blue mt-1">•</span>
                      <span><strong className="text-white">Control total</strong> - simți mașina și drumul</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-drive-blue mt-1">•</span>
                      <span><strong className="text-white">Economie la carburant</strong> - consum redus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-drive-blue mt-1">•</span>
                      <span><strong className="text-white">Mai multe opțiuni</strong> - accesibilă pentru orice mașină</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-drive-blue mt-1">•</span>
                      <span><strong className="text-white">Îndemânare</strong> - dezvolți coordonare avansată</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-drive-blue mt-1">•</span>
                      <span><strong className="text-white">Permis universal</strong> - poți conduce orice tip de mașină</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white/60 mb-2 flex items-center gap-2">
                    <span>⚠️</span> Dezavantaje:
                  </h4>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Curbă de învățare mai lungă (plecări, schimbări)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Obositoare în trafic intens (ambreiaj constant)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Necesită mai multă atenție și coordonare</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-drive-blue/10 border border-drive-blue/20">
                <p className="text-sm text-white/80">
                  <strong className="text-drive-blue">Ideal pentru:</strong> Cei care vor control maxim, consum redus și flexibilitate maximă la alegerea mașinii.
                </p>
              </div>
            </div>

            {/* Automat Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-drive-orange/10 to-white/5 p-8 backdrop-blur-sm transition hover:border-drive-orange/30">
              <div className="absolute top-4 right-4">
                <div className="rounded-full bg-drive-orange/20 border border-drive-orange px-3 py-1 text-xs font-bold text-drive-orange">
                  MODERN
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-drive-orange to-orange-600 flex items-center justify-center text-2xl">
                    🤖
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Transmisie Automată</h3>
                    <p className="text-sm text-white/60">Simplu, rapid, fără stres</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-drive-orange mb-2 flex items-center gap-2">
                    <span>✓</span> Avantaje:
                  </h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-start gap-2">
                      <span className="text-drive-orange mt-1">•</span>
                      <span><strong className="text-white">Ușor de învățat</strong> - nu ai ambreiaj, nu schimbi viteze</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-drive-orange mt-1">•</span>
                      <span><strong className="text-white">Confort maxim</strong> - relaxant în trafic intens</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-drive-orange mt-1">•</span>
                      <span><strong className="text-white">Focus pe drum</strong> - te concentrezi doar pe condus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-drive-orange mt-1">•</span>
                      <span><strong className="text-white">Examen mai simplu</strong> - mai puține manevre de învățat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-drive-orange mt-1">•</span>
                      <span><strong className="text-white">Trend modern</strong> - majoritatea mașinilor noi sunt automate</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white/60 mb-2 flex items-center gap-2">
                    <span>⚠️</span> Dezavantaje:
                  </h4>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Permis limitat doar la automate (restricție A78)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Nu poți conduce manual fără examen suplimentar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Opțiuni mai limitate la mașini vechi/second-hand</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-drive-orange/10 border border-drive-orange/20">
                <p className="text-sm text-white/80">
                  <strong className="text-drive-orange">Ideal pentru:</strong> Cei care vor să învețe rapid, confort maxim în oraș și planifică să cumpere mașină automată.
                </p>
              </div>
            </div>
          </div>

          {/* Fleet Image */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Flota Noastră de Mașini</h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  Dispunem de mașini moderne, <strong className="text-white">ambele cu dublă comandă</strong>, 
                  întreținute regulat și adaptate perfect pentru învățare. Alegi transmisia care ți se potrivește cel mai bine!
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-drive-blue/20 flex items-center justify-center text-lg">⚙️</div>
                    <div>
                      <div className="font-semibold text-white">Mașină Manuală</div>
                      <div className="text-sm text-white/60">Model modern, echipată complet</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-drive-orange/20 flex items-center justify-center text-lg">🤖</div>
                    <div>
                      <div className="font-semibold text-white">Mașină Automată</div>
                      <div className="text-sm text-white/60">Ultimul model, tehnologie avansată</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <Badge>✓ Dublă comandă</Badge>
                  <Badge>🛡️ Asigurate</Badge>
                  <Badge>🔧 Service regulat</Badge>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/flota_masini.jpg" 
                  alt="Flota de mașini - Manual și Automat" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-drive-green/90 backdrop-blur-sm rounded-xl px-4 py-2 border border-drive-green">
                  <div className="text-xs font-bold text-white">✓ Ambele disponibile</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decision Helper */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-drive-blue/10 via-drive-orange/10 to-drive-green/10 border border-white/10">
            <div className="text-center">
              <h4 className="text-lg font-bold text-white mb-2">🤔 Nu știi ce să alegi?</h4>
              <p className="text-white/70 mb-4">
                Sună-mă și discutăm împreună! Îți explic diferențele detaliat și te ajut să alegi varianta perfectă pentru nevoile tale.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-drive-orange to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-drive-orange/25 transition hover:shadow-xl hover:shadow-drive-orange/40"
              >
                Contactează-mă pentru detalii →
              </a>
            </div>
          </div>
        </section>

        {/* Road stripe separator */}
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative py-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-8">
              <div className="w-14 h-14 rounded-full bg-drive-orange/20 border-2 border-drive-orange flex items-center justify-center p-2">
                <img src="/limita_viteza.png" alt="Limită viteză" className="w-full h-full object-contain" />
              </div>
              <div className="w-14 h-14 rounded-full bg-drive-blue/20 border-2 border-drive-blue flex items-center justify-center text-2xl">
                �
              </div>
              <div className="w-14 h-14 rounded-full bg-drive-green/20 border-2 border-drive-green flex items-center justify-center text-2xl">
                ✓
              </div>
            </div>
          </div>
        </div>

        {/* Services - colorful cards */}
        <section id="servicii" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionTitle
            kicker="Ce te învăț"
            title="De la 'mă sperie mașina' la 'conduc singur cu încredere'"
            subtitle="Toate lecțiile sunt adaptate la nivelul tău. Nu forțăm nimic — mergem în ritmul TĂU."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '🚗',
                title: 'Pentru începători (de la 0)',
                desc: 'Prima oară în mașină? Perfect! Învățăm totul de la bază: poziție, oglinzi, plecări line, cum să nu-ți faci griji în intersecții.',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: '�',
                title: 'Pregătire intensivă examen',
                desc: 'Examenul e aproape? Facem simulări complete, trasee specifice, corectăm greșelile clasice. Zero surprize la examen!',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: '🛡️',
                title: 'Conducere defensivă',
                desc: 'Te învăț să anticipezi manevrele celorlalți, să menții distanța, să frânezi corect. Esențial pentru condus în oraș!',
                color: 'from-orange-500 to-red-500',
              },
              {
                icon: '🅿️',
                title: 'Parcări & manevre (cu repere)',
                desc: 'Laterală, cu spatele, garare, întoarcere — toate cu repere CLARE. Fără „când simți că...", ci „când X e pe linia Y".',
                color: 'from-green-500 to-emerald-500',
              },
              {
                icon: '🔄',
                title: 'Reîmprospătare (după pauză)',
                desc: 'Ai permis dar n-ai mai condus? Ai emoții? Reluăm calm, recăpătăm încrederea, eliminăm fricile. Fără presiune.',
                color: 'from-teal-500 to-cyan-500',
              },
              {
                icon: '📊',
                title: 'Plan personalizat de progres',
                desc: 'Fiecare elev e diferit. Îți fac plan custom: ce exersăm, ce obiective avem, cum măsurăm progresul. Totul transparent.',
                color: 'from-indigo-500 to-blue-500',
              },
            ].map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition hover:border-white/20 hover:scale-105"
              >
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-3xl shadow-lg`}>
                  {s.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* FAQ - simplified */}
        <section id="faq" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionTitle
            kicker="FAQ"
            title="Întrebări frecvente"
            subtitle="Răspunsuri rapide la cele mai comune întrebări. Pentru altceva, scrie-ne direct."
          />

          <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
            {faqs.map((f, idx) => (
              <div
                key={f.q}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm transition hover:border-white/20"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full cursor-pointer text-left p-6 flex items-start gap-3 text-base font-bold text-white transition-colors hover:text-drive-orange"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-drive-orange to-orange-500 text-sm font-bold transition-transform">
                    {openFaq === idx ? '−' : '?'}
                  </span>
                  <span className="flex-1">{f.q}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6">
                    <p className="pl-9 text-sm leading-relaxed text-white/70">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact - improved colors */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionTitle
            kicker="Contact"
            title="Hai să începem!"
            subtitle="Completează formularul și îți răspund rapid. Sau sună direct."
          />

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Form - 3 cols */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm">
                <form className="grid gap-5">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-white">Nume complet</label>
                    <input
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 backdrop-blur-sm transition focus:border-drive-orange/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-drive-orange/20"
                      placeholder="Ex: Andrei Popescu"
                      autoComplete="name"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">                  <div>
                    <label className="mb-2 block text-sm font-semibold text-white">Telefon</label>
                    <input
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 backdrop-blur-sm transition focus:border-drive-orange/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-drive-orange/20"
                      placeholder="07xx xxx xxx"
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-white">Email (opțional)</label>
                    <input
                      type="email"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 backdrop-blur-sm transition focus:border-drive-orange/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-drive-orange/20"
                      placeholder="email@exemplu.ro"
                      autoComplete="email"
                    />
                  </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-white">Mesaj</label>
                    <textarea
                      rows={4}
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 backdrop-blur-sm transition focus:border-drive-orange/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-drive-orange/20"
                      placeholder="Spune-mi la ce nivel ești și când ai prefera să începem..."
                    />
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-drive-orange to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-drive-orange/30 transition hover:shadow-2xl hover:shadow-drive-orange/50 hover:scale-105"
                  >
                    Trimite mesajul
                    <span>→</span>
                  </button>
                  <p className="text-xs text-white/50">
                    * Demo UI. Funcționalitate de trimitere se adaugă la cerere.
                  </p>
                </form>
              </div>
            </div>

            {/* Info - 2 cols */}
            <div className="lg:col-span-2 grid gap-5 content-start">
              {/* Contact info */}
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-drive-orange/5 to-drive-blue/5 p-6 backdrop-blur-sm">
                <div className="mb-4 text-base font-bold text-white">📞 Contact direct</div>
                <div className="space-y-3">
                  <a 
                    href="tel:0765393553"
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:bg-white/10 hover:border-drive-orange/30 active:scale-95"
                  >
                    <span className="text-white/70">📱 Telefon</span>
                    <span className="font-semibold text-white">0765 393 553</span>
                  </a>
                  
                  <a
                    href="https://wa.me/40765393553?text=Bună%20ziua!%20Sunt%20interesat%20de%20lecții%20de%20condus."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-drive-green/30 bg-gradient-to-r from-drive-green/10 to-emerald-500/10 px-4 py-3 text-sm transition hover:bg-drive-green/20 hover:border-drive-green/50 active:scale-95 group"
                  >
                    <span className="text-white/70 flex items-center gap-2">
                      <span className="text-lg">💬</span>
                      WhatsApp
                    </span>
                    <span className="font-semibold text-drive-green group-hover:text-emerald-400 transition flex items-center gap-1">
                      Deschide chat
                      <span className="text-xs">→</span>
                    </span>
                  </a>
                  
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                    <span className="text-white/70">⏰ Program</span>
                    <span className="font-semibold text-white">09:00–19:00</span>
                  </div>
                </div>
              </div>

              {/* Promise */}
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm">
                <div className="mb-3 text-base font-bold text-white">✨ Ce primești</div>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-drive-orange">•</span>
                    <span>Repere clare și ușor de reținut</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-drive-blue">•</span>
                    <span>Feedback concret după fiecare lecție</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-drive-green">•</span>
                    <span>Plan personalizat de progres</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-drive-orange">•</span>
                    <span>Calm și răbdare în trafic</span>
                  </li>
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <Badge>🚗 Mașină modernă</Badge>
                <Badge>🛡️ Dublă comandă</Badge>
                <Badge>📍 Flexibil</Badge>
                <Badge>🚦 Experiență</Badge>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

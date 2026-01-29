export default function Invatare() {
  return (
    <div>
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center justify-center">
            <span className="rounded-full bg-gradient-to-r from-drive-orange/20 to-drive-blue/20 border border-drive-orange/30 px-5 py-2.5 text-base font-bold text-drive-orange uppercase tracking-wide">
              📚 Resurse Învățare
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
            Ghid Complet de Pregătire
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Tot ce trebuie să știi pentru a trece examenul auto cu brio. 
            Sfaturi practice, resurse utile și trucuri din experiența de peste 10 ani.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="grid gap-4 md:grid-cols-2 mb-16">
          <a 
            href="#examen-scris"
            className="group relative overflow-hidden rounded-2xl border border-drive-blue/30 bg-gradient-to-br from-drive-blue/10 to-white/5 p-6 backdrop-blur-sm transition hover:border-drive-blue/50 hover:scale-105"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-drive-blue to-blue-600 flex items-center justify-center text-3xl">
                📝
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Examen Scris</h3>
                <p className="text-sm text-white/60">Legislație, semnalizare, situații</p>
              </div>
            </div>
          </a>
          <a 
            href="#examen-oras"
            className="group relative overflow-hidden rounded-2xl border border-drive-orange/30 bg-gradient-to-br from-drive-orange/10 to-white/5 p-6 backdrop-blur-sm transition hover:border-drive-orange/50 hover:scale-105"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-drive-orange to-orange-600 flex items-center justify-center text-3xl">
                🚗
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Examen Oraș</h3>
                <p className="text-sm text-white/60">Condus practic, manevre, trasee</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Road stripe separator */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />
      </div>

      {/* Examen Scris Section */}
      <section id="examen-scris" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-drive-blue to-blue-600 flex items-center justify-center text-2xl">
              📝
            </div>
            <h2 className="text-3xl font-bold text-white">Pregătire Examen Scris</h2>
          </div>
          <p className="text-white/70 text-lg">
            26 de întrebări, minim 22 corecte pentru promovare. Iată tot ce trebuie să știi:
          </p>
        </div>

        {/* Key Points */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-drive-blue mb-4 flex items-center gap-2">
              <span>🎯</span> Informatii Cheie
            </h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <span className="text-drive-blue mt-1">•</span>
                <span><strong className="text-white">26 întrebări</strong> din baza de date oficială ARR</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-drive-blue mt-1">•</span>
                <span><strong className="text-white">Minim 22 corecte</strong> (aprox. 85%) pentru promovare</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-drive-blue mt-1">•</span>
                <span><strong className="text-white">30 de minute</strong> timp alocat (suficient dacă te-ai pregătit)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-drive-blue mt-1">•</span>
                <span><strong className="text-white">Întrebări cu variante</strong> - 1, 2 sau 3 răspunsuri corecte</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-drive-blue mt-1">•</span>
                <span><strong className="text-white">Categorii:</strong> Legislație (50%), Semnalizare (30%), Situații de circulație (20%)</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-drive-green/10 to-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-drive-green mb-4 flex items-center gap-2">
              <span>✓</span> Strategia de Învățare
            </h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <span className="text-drive-green mt-1">1.</span>
                <span><strong className="text-white">Citește legislația</strong> - nu învăța pe de rost, înțelege logica</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-drive-green mt-1">2.</span>
                <span><strong className="text-white">Semnele rutiere</strong> - învață pe categorii (interzicere, avertizare, obligare)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-drive-green mt-1">3.</span>
                <span><strong className="text-white">Teste simulate</strong> - fă minim 100 de chestionare înainte de examen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-drive-green mt-1">4.</span>
                <span><strong className="text-white">Greșeli frecvente</strong> - notează-le și revizuiește-le zilnic</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-drive-green mt-1">5.</span>
                <span><strong className="text-white">Ziua examenului</strong> - relaxează-te, ai timp suficient</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Resurse Online */}
        <div className="rounded-3xl border border-drive-blue/30 bg-gradient-to-br from-drive-blue/10 to-white/5 p-8 backdrop-blur-sm mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">🔗</span>
            Resurse Online Gratuite (Oficiale)
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <a 
              href="https://www.drpciv.ro/chestionare-auto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10 hover:border-drive-blue/30"
            >
              <div className="w-10 h-10 rounded-lg bg-drive-blue/20 flex items-center justify-center text-xl shrink-0">
                🏛️
              </div>
              <div>
                <div className="font-bold text-white group-hover:text-drive-blue transition">DRPCIV Oficial</div>
                <div className="text-sm text-white/60">Chestionare oficiale ARR - baza de date completă</div>
              </div>
            </a>

            <a 
              href="https://www.scoalasofer.ro/chestionare" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10 hover:border-drive-blue/30"
            >
              <div className="w-10 h-10 rounded-lg bg-drive-blue/20 flex items-center justify-center text-xl shrink-0">
                📱
              </div>
              <div>
                <div className="font-bold text-white group-hover:text-drive-blue transition">Școala Șofer</div>
                <div className="text-sm text-white/60">Teste interactive, explicații detaliate</div>
              </div>
            </a>

            <a 
              href="https://www.semneonline.ro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10 hover:border-drive-blue/30"
            >
              <div className="w-10 h-10 rounded-lg bg-drive-blue/20 flex items-center justify-center text-xl shrink-0">
                🚦
              </div>
              <div>
                <div className="font-bold text-white group-hover:text-drive-blue transition">Semne Online</div>
                <div className="text-sm text-white/60">Toate semnele rutiere cu explicații</div>
              </div>
            </a>

            <a 
              href="https://legislatie.just.ro/Public/DetaliiDocument/227011" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10 hover:border-drive-blue/30"
            >
              <div className="w-10 h-10 rounded-lg bg-drive-blue/20 flex items-center justify-center text-xl shrink-0">
                📖
              </div>
              <div>
                <div className="font-bold text-white group-hover:text-drive-blue transition">Legislație Rutieră</div>
                <div className="text-sm text-white/60">OUG 195/2002 - sursa oficială</div>
              </div>
            </a>
          </div>
        </div>

        {/* Tips from Instructor */}
        <div className="rounded-2xl border border-drive-orange/30 bg-gradient-to-br from-drive-orange/10 to-white/5 p-6 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Sfatul Instructorului:</h3>
              <p className="text-white/80 leading-relaxed mb-3">
                "După 10 ani de experiență, am observat că elevii care promovează cu ușurință sunt cei care <strong className="text-drive-orange">înțeleg logica</strong>, 
                nu cei care memorează. De exemplu, pentru prioritate: <em>„cine vine din dreapta ta are prioritate"</em> funcționează în 90% din cazuri. 
                Pentru semnele de interzicere: <em>„chenar roșu = NU ai voie"</em>. Simplu, clar, eficient!"
              </p>
              <p className="text-white/70 text-sm">
                <strong className="text-white">Pro tip:</strong> Fă cel puțin 3 teste pe zi în ultimele 2 săptămâni. Când ajungi să iei constant 25-26/26, ești pregătit! 🎯
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Road stripe separator */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Examen Oraș Section */}
      <section id="examen-oras" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-drive-orange to-orange-600 flex items-center justify-center text-2xl">
              🚗
            </div>
            <h2 className="text-3xl font-bold text-white">Pregătire Examen Oraș</h2>
          </div>
          <p className="text-white/70 text-lg">
            Partea practică - unde se vede pregătirea reală. Examinatorul evaluează condusul în trafic real.
          </p>
        </div>

        {/* Key Points */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-drive-orange mb-4 flex items-center gap-2">
              <span>📋</span> Ce Se Evaluează
            </h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <span className="text-drive-orange mt-1">•</span>
                <span><strong className="text-white">Manevre obligatorii:</strong> plecări în rampă, întoarcere, parcare laterală/cu spatele</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-drive-orange mt-1">•</span>
                <span><strong className="text-white">Condus în trafic:</strong> respectarea regulilor, fluiditate, anticipare</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-drive-orange mt-1">•</span>
                <span><strong className="text-white">Semnalizare:</strong> oglinzi, semnalizări, respectarea semnelor</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-drive-orange mt-1">•</span>
                <span><strong className="text-white">Atitudine:</strong> calm, încredere, reacție la situații neprevăzute</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-drive-orange mt-1">•</span>
                <span><strong className="text-white">Greșeli eliminatorii:</strong> prioritate nerespectată, accident, depășire continuă</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-drive-green/10 to-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-drive-green mb-4 flex items-center gap-2">
              <span>🎯</span> Puncte Cheie de Reușită
            </h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <span className="text-drive-green mt-1">✓</span>
                <span><strong className="text-white">Oglinzile</strong> - verifică ÎNTOTDEAUNA înainte de orice manevră</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-drive-green mt-1">✓</span>
                <span><strong className="text-white">Viteza</strong> - adaptată la condiții, nu prea rapid, nu prea lent</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-drive-green mt-1">✓</span>
                <span><strong className="text-white">Distanța</strong> - menține 2 secunde față de mașina din față</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-drive-green mt-1">✓</span>
                <span className="text-white"><strong>Anticipare</strong> - privește departe, nu doar în față</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-drive-green mt-1">✓</span>
                <span><strong className="text-white">Calm</strong> - dacă greșești o manevră mică, continuă calm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="rounded-3xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-white/5 p-8 backdrop-blur-sm mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">⚠️</span>
            Top 5 Greșeli Care Te Taie la Examen
          </h3>
          <div className="grid gap-4">
            {[
              { nr: '1', error: 'Nerespectarea priorității', fix: 'Verifică ÎNTOTDEAUNA stânga-dreapta la intersecții, chiar dacă ai prioritate' },
              { nr: '2', error: 'Uitatul oglinzilor', fix: 'Fă un obicei: oglindă → semnalizare → manevră. Întotdeauna!' },
              { nr: '3', error: 'Viteza neadaptată', fix: 'În localitate: max 50 km/h. Lângă școli/spitale: 30 km/h. Respectă-le!' },
              { nr: '4', error: 'Parcarea greșită', fix: 'Exersează până faci perfect: repere clare, nu după "simțire"' },
              { nr: '5', error: 'Panică/nervozitate', fix: 'Respiră adânc. Dacă greșești ceva minor, nu panica - continuă calm!' },
            ].map((item) => (
              <div key={item.nr} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 font-bold shrink-0">
                  {item.nr}
                </div>
                <div>
                  <div className="font-bold text-white mb-1">{item.error}</div>
                  <div className="text-sm text-white/70">✓ Soluție: {item.fix}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instructor's Final Advice */}
        <div className="rounded-2xl border border-drive-blue/30 bg-gradient-to-br from-drive-blue/10 to-white/5 p-6 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🏆</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Ultimul Sfat Înainte de Examen:</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                "Ziua examenului: <strong className="text-drive-blue">dormi 8 ore</strong>, ia un mic dejun consistent, 
                ajunge cu <strong className="text-drive-blue">15 minute înainte</strong>. În mașină, ascultă atent instrucțiunile examinatorului 
                și <strong className="text-drive-blue">conduce ca la ore</strong> - nu încerca să impresionezi cu viteză sau manevre fancy. 
                Calm, corect, constant. Asta caută examinatorul!"
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-lg bg-drive-green/10 border border-drive-green/20 p-3">
                  <div className="text-sm font-bold text-drive-green mb-1">✓ FĂ:</div>
                  <div className="text-xs text-white/70">Verifică oglinzile, respectă viteza, fii politicos, cere clarificări dacă nu înțelegi</div>
                </div>
                <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3">
                  <div className="text-sm font-bold text-red-400 mb-1">✗ NU FACE:</div>
                  <div className="text-xs text-white/70">Viteză mare, frânări bruște, uitat semnalizare, panică la greșeală mică</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="rounded-3xl border border-drive-orange/30 bg-gradient-to-br from-drive-orange/10 via-drive-blue/10 to-drive-green/10 p-12 backdrop-blur-sm text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ai nevoie de ajutor personalizat?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Discutăm împreună strategia ta de pregătire, îți răspund la orice întrebare 
            și te ajut să treci examenul cu încredere!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-drive-orange to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-drive-orange/30 transition hover:shadow-2xl hover:shadow-drive-orange/50 hover:scale-105"
            >
              Contactează-mă acum →
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-drive-blue/40 bg-drive-blue/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-drive-blue/20 hover:border-drive-blue/60"
            >
              ← Înapoi la pagina principală
            </a>
          </div>
        </div>
      </section>

      {/* Footer - simplified */}
      <footer className="border-t border-white/10 bg-gradient-to-b from-neo-bg to-[#030508] mt-20">
        <div className="h-2 bg-road-lines" />
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="text-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} • Ghița Gheban - Instructor Auto • Toate drepturile rezervate</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

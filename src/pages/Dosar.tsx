export default function Dosar() {
  return (
    <div>
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center justify-center">
            <span className="rounded-full bg-gradient-to-r from-drive-orange/20 to-drive-blue/20 border border-drive-orange/30 px-5 py-2.5 text-base font-bold text-drive-orange uppercase tracking-wide">
              📋 Documentație Necesară
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
            Ghid Complet pentru Dosar
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Tot ce trebuie să știi despre documentele necesare, etapele înscrierii și procesul complet 
            pentru obținerea permisului de conducere. Fără surprize, fără bătăi de cap! 📄
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          <div className="group relative overflow-hidden rounded-2xl border border-drive-blue/30 bg-gradient-to-br from-drive-blue/10 to-white/5 p-6 backdrop-blur-sm transition hover:border-drive-blue/50">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="text-xl font-bold text-white mb-2">Durată Totală</h3>
            <p className="text-white/70 text-sm">
              ~3-6 luni de la înscriere până la permis (în funcție de disponibilitate)
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-drive-orange/30 bg-gradient-to-br from-drive-orange/10 to-white/5 p-6 backdrop-blur-sm transition hover:border-drive-orange/50">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-white mb-2">Cost Aproximativ</h3>
            <p className="text-white/70 text-sm">
              ~2500-3500 lei (școală + taxe + examene + ore practice)
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-drive-green/30 bg-gradient-to-br from-drive-green/10 to-white/5 p-6 backdrop-blur-sm transition hover:border-drive-green/50">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-white mb-2">Documente</h3>
            <p className="text-white/70 text-sm">
              6 documente de bază + formulare (detalii mai jos)
            </p>
          </div>
        </div>
      </section>

      {/* Documente Necesare */}
      <section id="documente" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center justify-center">
            <span className="rounded-full bg-gradient-to-r from-drive-orange/20 to-drive-blue/20 border border-drive-orange/30 px-5 py-2.5 text-base font-bold text-drive-orange uppercase tracking-wide">
              📄 Etapa 1
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Documentele Necesare pentru Înscriere
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Pregătește aceste documente înainte să te înscrii la școala de șoferi. 
            Asigură-te că toate sunt valabile și în copii clare!
          </p>
        </div>

        <div className="grid gap-6">
          {/* Document 1 */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition hover:border-drive-orange/30 hover:bg-white/10">
            <div className="flex items-start gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-drive-orange to-orange-500 text-3xl shadow-lg">
                🆔
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-drive-orange/30 bg-drive-orange/10 px-3 py-1 text-xs font-medium text-drive-orange">
                    OBLIGATORIU
                  </span>
                  <h3 className="text-xl font-bold text-white">1. Carte de Identitate (CI) sau Buletin</h3>
                </div>
                <div className="space-y-3 text-white/70">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Ce trebuie:</span> Copie după CI/Buletin (față + verso), 
                    document valabil (nu expirat).
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Important:</span> Verifică ca toate datele să fie lizibile. 
                    Dacă ai CI vechi de carton, trebuie să faci CI electronic.
                  </p>
                  <div className="mt-4 rounded-xl border border-drive-blue/20 bg-drive-blue/5 p-4">
                    <p className="text-sm text-drive-blue font-medium">
                      💡 <span className="font-bold">Tip:</span> Fă xerox color dacă CI-ul are elemente holografice — 
                      unele instituții cer copii color pentru verificare.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Document 2 */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition hover:border-drive-orange/30 hover:bg-white/10">
            <div className="flex items-start gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-3xl shadow-lg">
                📸
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-drive-orange/30 bg-drive-orange/10 px-3 py-1 text-xs font-medium text-drive-orange">
                    OBLIGATORIU
                  </span>
                  <h3 className="text-xl font-bold text-white">2. Fotografii Tip Permis Auto</h3>
                </div>
                <div className="space-y-3 text-white/70">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Ce trebuie:</span> 4-6 fotografii color, 
                    format 3x4 cm, fond alb/deschis, fără ochelari de soare.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Unde le faci:</span> Orice fotograf (cere "poze pentru permis auto"). 
                    Costul: ~15-30 lei pentru 4 poze.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Cerințe:</span> Poză recentă (max 6 luni vechime), 
                    fără filtre, chip vizibil, fond neutru, îmbrăcăminte normală (nu uniformă/echipament sportiv).
                  </p>
                  <div className="mt-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
                    <p className="text-sm text-yellow-300 font-medium">
                      ⚠️ <span className="font-bold">Atenție:</span> Dacă porți ochelari de vedere, păstrează-i în poză — 
                      dar fără reflexii pe lentile!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Document 3 */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition hover:border-drive-orange/30 hover:bg-white/10">
            <div className="flex items-start gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-3xl shadow-lg">
                🏥
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-drive-orange/30 bg-drive-orange/10 px-3 py-1 text-xs font-medium text-drive-orange">
                    OBLIGATORIU
                  </span>
                  <h3 className="text-xl font-bold text-white">3. Certificat Medical Auto</h3>
                </div>
                <div className="space-y-3 text-white/70">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Ce trebuie:</span> Certificat medical eliberat de medic autorizat 
                    (medicină de familie sau centre medicale auto).
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Investigații necesare:</span>
                  </p>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li>Consult medic de familie / medicina muncii</li>
                    <li>Consult oftalmologic (verificare vedere)</li>
                    <li>Consult ORL (verificare auz)</li>
                    <li>Consult psihologic (test psihologic + interviu)</li>
                    <li>Analize (dacă este cazul, după vârsta/stare de sănătate)</li>
                  </ul>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Cost:</span> ~200-400 lei (în funcție de centru medical). 
                    Valabilitate: 6 luni.
                  </p>
                  <div className="mt-4 rounded-xl border border-drive-blue/20 bg-drive-blue/5 p-4">
                    <p className="text-sm text-drive-blue font-medium">
                      💡 <span className="font-bold">Tip:</span> Programează-te din timp la psiholog — 
                      în unele centre poate dura 1-2 săptămâni până la un loc liber!
                    </p>
                  </div>
                  <div className="mt-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
                    <p className="text-sm text-yellow-300 font-medium">
                      ⚠️ <span className="font-bold">Atenție:</span> Certificatul medical trebuie să fie valabil 
                      atât la înscriere cât și la susținerea examenului final!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Document 4 */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition hover:border-drive-orange/30 hover:bg-white/10">
            <div className="flex items-start gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-3xl shadow-lg">
                📜
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-drive-orange/30 bg-drive-orange/10 px-3 py-1 text-xs font-medium text-drive-orange">
                    OBLIGATORIU
                  </span>
                  <h3 className="text-xl font-bold text-white">4. Certificat de Cazier Judiciar</h3>
                </div>
                <div className="space-y-3 text-white/70">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Ce trebuie:</span> Certificat de cazier judiciar 
                    (se obține online sau de la Poliție).
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Cum îl obții:</span>
                  </p>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li><span className="font-semibold text-white">Online:</span> pe site-ul <a href="https://cazier.politiaromana.ro" target="_blank" rel="noopener noreferrer" className="text-drive-blue hover:text-drive-orange transition underline">cazier.politiaromana.ro</a> (cu semnătură electronică)</li>
                    <li><span className="font-semibold text-white">La ghișeu:</span> la Poliția locală din domiciliu (cu CI + taxă de timbru 7 lei)</li>
                  </ul>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Timp de procesare:</span> instant online / 3-5 zile la ghișeu. 
                    Valabilitate: 6 luni.
                  </p>
                  <div className="mt-4 rounded-xl border border-drive-blue/20 bg-drive-blue/5 p-4">
                    <p className="text-sm text-drive-blue font-medium">
                      💡 <span className="font-bold">Tip:</span> Dacă ai semnătură electronică, 
                      faci cazierul online în 5 minute, gratuit!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Document 5 */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition hover:border-drive-orange/30 hover:bg-white/10">
            <div className="flex items-start gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-500 text-3xl shadow-lg">
                🩸
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-drive-orange/30 bg-drive-orange/10 px-3 py-1 text-xs font-medium text-drive-orange">
                    OBLIGATORIU
                  </span>
                  <h3 className="text-xl font-bold text-white">5. Adeverință Grupă Sanguină</h3>
                </div>
                <div className="space-y-3 text-white/70">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Ce trebuie:</span> Adeverință cu grupa sanguină și Rh 
                    (se obține de la medicul de familie sau laborator).
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Cum o obții:</span> Analiză sânge la laborator autorizat 
                    sau solicitare la medicul de familie (dacă ai deja grupa înregistrată în fișă).
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Cost:</span> ~20-50 lei (analiză) sau gratuit (dacă ceri doar adeverința). 
                    Valabilitate: nelimitată (grupa sanguină nu se schimbă).
                  </p>
                  <div className="mt-4 rounded-xl border border-drive-blue/20 bg-drive-blue/5 p-4">
                    <p className="text-sm text-drive-blue font-medium">
                      💡 <span className="font-bold">Tip:</span> Dacă ai donat sânge vreodată, 
                      ai deja grupa sanguină în baza de date — cere doar o adeverință!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Document 6 */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition hover:border-drive-orange/30 hover:bg-white/10">
            <div className="flex items-start gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-3xl shadow-lg">
                ✍️
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-drive-blue/30 bg-drive-blue/10 px-3 py-1 text-xs font-medium text-drive-blue">
                    LA ȘCOALĂ
                  </span>
                  <h3 className="text-xl font-bold text-white">6. Formulare și Cereri</h3>
                </div>
                <div className="space-y-3 text-white/70">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Ce trebuie:</span> Formularele le primești de la școala de șoferi 
                    la înscriere — le completezi acolo.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Documente de completat:</span>
                  </p>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li>Cerere de înscriere la școala de șoferi</li>
                    <li>Declarație pe proprie răspundere (că nu ai antecedente, suspendări, etc.)</li>
                    <li>Contract cu școala de șoferi (citește-l cu atenție!)</li>
                    <li>Formular DRPCIV pentru dosarul de examen</li>
                  </ul>
                  <div className="mt-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
                    <p className="text-sm text-yellow-300 font-medium">
                      ⚠️ <span className="font-bold">Atenție:</span> Citește contractul înainte să semnezi! 
                      Verifică condițiile de anulare, rambursare, și ce includ tarifele.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procesul de Înscriere - Etape */}
      <section id="proces" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center justify-center">
            <span className="rounded-full bg-gradient-to-r from-drive-blue/20 to-drive-green/20 border border-drive-blue/30 px-5 py-2.5 text-base font-bold text-drive-blue uppercase tracking-wide">
              🗺️ Procesul Complet
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Etapele Înscrierii și Obținerii Permisului
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            De la documentație la permis în mână — pas cu pas, fără surprize!
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-drive-orange via-drive-blue to-drive-green opacity-30 hidden md:block" />

          <div className="space-y-8">
            {/* Etapa 1 */}
            <div className="relative flex gap-6">
              <div className="hidden md:flex shrink-0 items-start">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-drive-orange to-orange-500 text-2xl font-bold text-white shadow-xl">
                  1
                </div>
              </div>
              <div className="flex-1 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📋</span>
                  <h3 className="text-2xl font-bold text-white">Pregătirea Documentelor</h3>
                </div>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Obiectiv:</span> Adună toate documentele necesare înainte să mergi la școala de șoferi.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Durata:</span> 1-2 săptămâni (în funcție de programări la medici)
                  </p>
                  <div className="rounded-xl border border-drive-orange/20 bg-drive-orange/5 p-4">
                    <p className="text-sm font-medium">
                      ✅ <span className="font-bold text-white">Checklist:</span>
                    </p>
                    <ul className="mt-2 ml-4 space-y-1 text-sm list-disc">
                      <li>Xerox CI (față + verso)</li>
                      <li>4-6 fotografii format permis</li>
                      <li>Certificat medical auto (valid 6 luni)</li>
                      <li>Certificat cazier judiciar (valid 6 luni)</li>
                      <li>Adeverință grupă sanguină</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="relative flex gap-6">
              <div className="hidden md:flex shrink-0 items-start">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-2xl font-bold text-white shadow-xl">
                  2
                </div>
              </div>
              <div className="flex-1 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🏫</span>
                  <h3 className="text-2xl font-bold text-white">Înscrierea la Școala de Șoferi</h3>
                </div>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Ce faci:</span> Mergi la școala de șoferi aleasă, 
                    predai documentele și semnezi contractul.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Ce primești:</span>
                  </p>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li>Contract de pregătire (citește-l cu atenție!)</li>
                    <li>Formular de înscriere la DRPCIV</li>
                    <li>Acces la platforma online pentru învățat legislație</li>
                    <li>Programul cursurilor teoretice</li>
                  </ul>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Cost inițial:</span> ~1500-2500 lei 
                    (variază în funcție de pachetul ales: ore teorie + practică).
                  </p>
                  <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 mt-4">
                    <p className="text-sm text-yellow-300 font-medium">
                      ⚠️ <span className="font-bold">Important:</span> Întreabă exact ce include tariful: 
                      număr de ore practice, taxe DRPCIV, examene, carburant, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 3 */}
            <div className="relative flex gap-6">
              <div className="hidden md:flex shrink-0 items-start">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-2xl font-bold text-white shadow-xl">
                  3
                </div>
              </div>
              <div className="flex-1 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📚</span>
                  <h3 className="text-2xl font-bold text-white">Cursurile de Legislație (Teorie)</h3>
                </div>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Durata:</span> ~3-4 săptămâni 
                    (depinde de programul școlii: intensiv sau relaxat)
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Format:</span> Cursuri fizice (la școală) sau online. 
                    Minim 27 de ore de curs obligatorii.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Ce înveți:</span>
                  </p>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li>Legislație rutieră (reguli de circulație, priorități, depășiri)</li>
                    <li>Semnalizare rutieră (panouri, marcaje, semafoare)</li>
                    <li>Prim ajutor</li>
                    <li>Mecanică auto (bază)</li>
                    <li>Conduită preventivă și eco-driving</li>
                  </ul>
                  <div className="rounded-xl border border-drive-blue/20 bg-drive-blue/5 p-4 mt-4">
                    <p className="text-sm text-drive-blue font-medium">
                      💡 <span className="font-bold">Tip:</span> Învață în paralel acasă pe platforme 
                      (ScoalaSofer.ro, Chestionare.ro) — exersează câte 30 min/zi și vei trece ușor!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 4 */}
            <div className="relative flex gap-6">
              <div className="hidden md:flex shrink-0 items-start">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-2xl font-bold text-white shadow-xl">
                  4
                </div>
              </div>
              <div className="flex-1 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🚗</span>
                  <h3 className="text-2xl font-bold text-white">Orele Practice de Conducere</h3>
                </div>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Durata:</span> Minim 30 de ore obligatorii 
                    (în practică, cei mai mulți fac 35-40 ore pentru siguranță).
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Ce exersezi:</span>
                  </p>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li><span className="font-semibold text-white">Poligon (primele 10-12 ore):</span> pornire, oprire, manevre, parcări, deal</li>
                    <li><span className="font-semibold text-white">Oraș (restul orelor):</span> circulație, intersecții, priorități, conducere defensivă</li>
                    <li><span className="font-semibold text-white">Traseu examen:</span> în ultimele 3-5 ore exersezi traseele posibile pentru examen</li>
                  </ul>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Ritm recomandat:</span> 2-3 ședințe/săptămână 
                    pentru a nu uita ce ai învățat.
                  </p>
                  <div className="rounded-xl border border-drive-green/20 bg-drive-green/5 p-4 mt-4">
                    <p className="text-sm text-drive-green font-medium">
                      ✅ <span className="font-bold">Sfat:</span> Fii constant și comunică cu instructorul — 
                      spune-i ce îți face probleme (parcări, rotunjii, etc.) ca să exersați mai mult!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 5 */}
            <div className="relative flex gap-6">
              <div className="hidden md:flex shrink-0 items-start">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 text-2xl font-bold text-white shadow-xl">
                  5
                </div>
              </div>
              <div className="flex-1 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📝</span>
                  <h3 className="text-2xl font-bold text-white">Examenul Teoretic (Legislație)</h3>
                </div>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Când:</span> După ce finalizezi cursurile teoretice 
                    (școala te înscrie la examen).
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Format:</span> Test pe calculator — 26 întrebări, 
                    maxim 4 greșeli permise. Durata: 30 min.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Taxă examen:</span> ~70 lei (plătită prin școala de șoferi).
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Dacă pici:</span> Poți relua după 7-14 zile, 
                    plătești din nou taxa de 70 lei.
                  </p>
                  <div className="rounded-xl border border-drive-orange/20 bg-drive-orange/5 p-4 mt-4">
                    <p className="text-sm text-drive-orange font-medium">
                      🎯 <span className="font-bold">Obiectiv:</span> Fă simulări până când iei constant 24-26/26 
                      pe platformele online — atunci ești pregătit!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 6 */}
            <div className="relative flex gap-6">
              <div className="hidden md:flex shrink-0 items-start">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-pink-500 text-2xl font-bold text-white shadow-xl">
                  6
                </div>
              </div>
              <div className="flex-1 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🏙️</span>
                  <h3 className="text-2xl font-bold text-white">Examenul Practic (Oraș)</h3>
                </div>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Când:</span> După ce promovezi examenul teoretic 
                    și finalizezi orele practice (minim 30h).
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Format:</span> Conducere reală în trafic cu examinatorul. 
                    Durata: ~20-30 min.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Ce se evaluează:</span>
                  </p>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li>Pornire și oprire corectă</li>
                    <li>Respectarea regulilor de circulație</li>
                    <li>Adaptarea vitezei la condiții</li>
                    <li>Trecerea prin intersecții (cu/fără prioritate)</li>
                    <li>Parcări și manevre</li>
                    <li>Conduită preventivă și observație</li>
                  </ul>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Taxă examen:</span> ~135 lei.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Dacă pici:</span> Poți relua după 7-14 zile, 
                    plătești din nou taxa + posibil ore suplimentare cu instructorul.
                  </p>
                  <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 mt-4">
                    <p className="text-sm text-yellow-300 font-medium">
                      ⚠️ <span className="font-bold">Important:</span> Fii calm, concentrat și ascultă indicațiile examinatorului. 
                      Nu te panica dacă faci o mică greșeală — poți continua!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 7 */}
            <div className="relative flex gap-6">
              <div className="hidden md:flex shrink-0 items-start">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-drive-green to-emerald-600 text-2xl font-bold text-white shadow-xl">
                  7
                </div>
              </div>
              <div className="flex-1 rounded-2xl border border-drive-green/30 bg-gradient-to-br from-drive-green/10 to-white/5 p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🎉</span>
                  <h3 className="text-2xl font-bold text-white">Ridicarea Permisului de Conducere</h3>
                </div>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Când:</span> După promovarea examenului practic 
                    (de obicei în 3-7 zile lucrătoare).
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Unde:</span> La DRPCIV (Direcția Regim Permise de Conducere) 
                    sau la școala de șoferi (dacă oferă acest serviciu).
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Ce primești:</span> Permis de conducere categoria B 
                    (valabil 10 ani pentru sub 65 ani).
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Taxă eliberare permis:</span> ~75 lei.
                  </p>
                  <div className="rounded-xl border border-drive-green/20 bg-drive-green/5 p-4 mt-4">
                    <p className="text-sm text-drive-green font-medium">
                      🎊 <span className="font-bold">Felicitări!</span> Ai obținut permisul de conducere! 
                      Acum ești șofer începător pentru 1 an — condus cu prudență și încredere! 🚗💚
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Total Estimativ */}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
        <div className="rounded-3xl border border-drive-orange/30 bg-gradient-to-br from-drive-orange/10 to-drive-blue/10 p-8 backdrop-blur-sm sm:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">💰 Cost Total Estimativ</h2>
            <p className="text-white/70">Toate cheltuielile de la început până la permis în mână</p>
          </div>
          
          <div className="space-y-4">
            {[
              { item: 'Școală de șoferi (teorie + 30h practică)', cost: '1800-2500 lei' },
              { item: 'Certificat medical auto', cost: '200-400 lei' },
              { item: 'Fotografii tip permis', cost: '15-30 lei' },
              { item: 'Cazier judiciar (la ghișeu)', cost: '7 lei' },
              { item: 'Grupă sanguină (dacă nu ai)', cost: '20-50 lei' },
              { item: 'Taxă examen teoretic (DRPCIV)', cost: '70 lei' },
              { item: 'Taxă examen practic (DRPCIV)', cost: '135 lei' },
              { item: 'Taxă eliberare permis', cost: '75 lei' },
              { item: 'Ore suplimentare practice (dacă e cazul)', cost: '120-150 lei/oră' },
            ].map((row, idx) => (
              <div key={idx} className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="text-white/80 text-sm sm:text-base">{row.item}</span>
                <span className="font-bold text-drive-orange text-sm sm:text-base whitespace-nowrap">{row.cost}</span>
              </div>
            ))}
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-white">TOTAL ESTIMATIV:</span>
                <span className="text-2xl font-bold text-drive-green">~2.300 - 3.500 lei</span>
              </div>
              <p className="text-xs text-white/60 mt-2">
                * Costurile variază în funcție de școala de șoferi, orașul, și numărul de ore suplimentare necesare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Link-uri Utile */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            🔗 Link-uri Utile
          </h2>
          <p className="text-white/70">
            Resurse oficiale și platforme pentru pregătirea documentelor și a examenelor
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a 
            href="https://www.drpciv.ro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-drive-blue/30 bg-gradient-to-br from-drive-blue/10 to-white/5 p-6 backdrop-blur-sm transition hover:border-drive-blue/50 hover:scale-105"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">🏛️</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-drive-blue transition">
                  DRPCIV.ro — Site Oficial
                </h3>
                <p className="text-sm text-white/70">
                  Informații oficiale despre examene, legislație, programări și taxe. Tot ce e oficial e aici!
                </p>
              </div>
            </div>
          </a>

          <a 
            href="https://cazier.politiaromana.ro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-drive-orange/30 bg-gradient-to-br from-drive-orange/10 to-white/5 p-6 backdrop-blur-sm transition hover:border-drive-orange/50 hover:scale-105"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">📜</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-drive-orange transition">
                  Cazier Online — Poliția Română
                </h3>
                <p className="text-sm text-white/70">
                  Obține certificatul de cazier judiciar online în 5 minute (cu semnătură electronică).
                </p>
              </div>
            </div>
          </a>

          <a 
            href="https://www.scoalasofer.ro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-drive-green/30 bg-gradient-to-br from-drive-green/10 to-white/5 p-6 backdrop-blur-sm transition hover:border-drive-green/50 hover:scale-105"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">📚</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-drive-green transition">
                  ScoalaSofer.ro — Chestionare
                </h3>
                <p className="text-sm text-white/70">
                  Platformă gratuită cu toate chestionarele oficiale pentru examenul teoretic. Exersează zilnic!
                </p>
              </div>
            </div>
          </a>

          <a 
            href="https://legislatie.just.ro/Public/DetaliiDocument/14836" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-white/5 p-6 backdrop-blur-sm transition hover:border-purple-500/50 hover:scale-105"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">⚖️</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition">
                  Legislație Rutieră — OUG 195/2002
                </h3>
                <p className="text-sm text-white/70">
                  Codul Rutier oficial (actualizat). Aici găsești toate regulile de circulație și sancțiunile.
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* CTA Final */}
      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
        <div className="rounded-3xl border border-drive-orange/30 bg-gradient-to-r from-drive-orange/10 to-drive-blue/10 p-8 text-center backdrop-blur-sm sm:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Gata cu birocrația! <br />Hai să învățăm conducerea! 🚗
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Ai întrebări despre documente sau procesul de înscriere? 
            Îți explic tot la telefon sau ne vedem și discutăm pas cu pas!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-drive-orange to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-drive-orange/30 transition hover:shadow-2xl hover:shadow-drive-orange/50 hover:scale-105"
            >
              Contactează-mă acum
              <span className="text-xl">→</span>
            </a>
            <a
              href="/invatare"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-drive-blue/40 bg-drive-blue/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-drive-blue/20 hover:border-drive-blue/60"
            >
              Vezi Ghidul de Învățare
              <span className="text-xl">📚</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-neo-bg text-white">
      {/* Optimized backdrop - reduced effects */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Road background image - transparent */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: 'url(/drum.png)' }}
        />
        
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="absolute inset-0 bg-grid bg-[size:56px_56px] opacity-[0.06]" />
        
        {/* Road stripe decoration at top */}
        <div className="absolute top-20 left-0 right-0 h-2 bg-road-lines opacity-30" />
        <div className="absolute top-28 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        {/* Only 2 main glows instead of many - driving school colors */}
        <div className="absolute -top-40 left-1/2 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-drive-orange/20 via-drive-blue/20 to-drive-green/10 blur-3xl" />
        <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-gradient-to-tl from-drive-blue/15 to-transparent blur-3xl" />
        
        {/* Decorative traffic signs - real images */}
        <div className="absolute top-40 right-10 opacity-20 animate-floaty">
          <img src="/limita_viteza.png" alt="" className="w-20 h-20 object-contain" />
        </div>
        <div className="absolute top-60 left-10 opacity-15 animate-floaty" style={{ animationDelay: '1s' }}>
          <img src="/pericol_derapaj.png" alt="" className="w-20 h-20 object-contain" />
        </div>
        <div className="absolute bottom-40 right-20 opacity-15 animate-floaty" style={{ animationDelay: '2s' }}>
          <img src="/obligatoriu_dreapta.png" alt="" className="w-16 h-16 object-contain" />
        </div>
        <div className="absolute bottom-60 left-20 opacity-20 animate-floaty" style={{ animationDelay: '0.5s' }}>
          <img src="/stop.png" alt="" className="w-20 h-20 object-contain" />
        </div>
      </div>

      {/* Header - improved colors */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-gradient-to-b from-[#0a0f1e] to-neo-bg/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-3 sm:px-6 sm:py-4">
          <Link to="/" className="group inline-flex items-center gap-2 sm:gap-3">
            {/* Car icon with traffic sign background */}
            <div className="relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-drive-orange/20 to-drive-orange/10 border border-drive-orange/30 flex items-center justify-center text-lg sm:text-xl transition-transform group-hover:scale-110">
                🚗
              </div>
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-drive-green rounded-full border-2 border-neo-bg" title="Disponibil">
                <div className="absolute inset-0 bg-drive-green rounded-full animate-ping" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="text-base sm:text-lg font-bold tracking-tight text-white">Ghită Gheban</div>
              <div className="text-[10px] sm:text-xs text-drive-orange font-medium">🚦 Instructor Auto</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {[
              ['Acasă', '/#acasa'],
              ['Servicii', '/#servicii'],
              ['Tarife', '/#tarife'],
              ['FAQ', '/#faq'],
              ['Dosar', '/dosar'],
              ['Învățare', '/invatare'],
              ['Contact', '/#contact'],
            ].map(([label, href]) => {
              const isActive = 
                (href === '/dosar' && location.pathname === '/dosar') ||
                (href === '/invatare' && location.pathname === '/invatare')
              
              return (
                <a
                  key={href}
                  href={href}
                  className={cx(
                    "relative px-4 py-2 text-sm font-medium transition-all",
                    isActive 
                      ? "text-drive-orange"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-drive-orange/50 via-drive-orange to-drive-orange/50 shadow-[0_0_8px_rgba(255,107,53,0.8)]" />
                  )}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/#contact"
              className="hidden rounded-xl bg-gradient-to-r from-drive-orange to-orange-500 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-drive-orange/25 transition hover:shadow-xl hover:shadow-drive-orange/40 md:inline-flex"
            >
              Programează-te
            </a>
            <button
              type="button"
              aria-label="Deschide meniul"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neo-line bg-white/5 text-white/80 shadow-glow transition hover:shadow-glowStrong active:scale-95 md:hidden"
            >
              <span className="text-xl">≡</span>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div className={cx('md:hidden', mobileOpen ? 'block' : 'hidden')}>
          <div className="mx-auto max-w-6xl px-3 pb-3 sm:px-6 sm:pb-4">
            <div className="rounded-xl sm:rounded-2xl border border-neo-line bg-white/5 p-1.5 sm:p-2 shadow-glow">
              {[
                ['Acasă', '/#acasa'],
                ['Servicii', '/#servicii'],
                ['Tarife', '/#tarife'],
                ['FAQ', '/#faq'],
                ['Dosar', '/dosar'],
                ['Învățare', '/invatare'],
                ['Contact', '/#contact'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg sm:rounded-xl px-3 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 active:bg-white/10"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>
        {children}
      </main>

      {/* Footer - simplified */}
      <footer className="border-t border-white/10 bg-gradient-to-b from-neo-bg to-[#030508] mt-20">
        {/* Road stripe decoration */}
        <div className="h-2 bg-road-lines" />
        
        <div className="mx-auto max-w-6xl px-3 py-6 sm:px-6 sm:py-8">
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Main footer content */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                  <img src="/stop.png" alt="STOP" className="w-full h-full object-contain opacity-80" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">Ghița Gheban - Instructor Auto</div>
                  <div className="text-[10px] sm:text-xs text-white/60">Învață să conduci cu încredere</div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-center sm:text-left">
                <a className="text-xs sm:text-sm hover:text-drive-orange transition-colors active:text-drive-orange" href="/#servicii">
                  Servicii
                </a>
                <a className="text-xs sm:text-sm hover:text-drive-orange transition-colors active:text-drive-orange" href="/#tarife">
                  Tarife
                </a>
                <a className="text-xs sm:text-sm hover:text-drive-orange transition-colors active:text-drive-orange" href="/dosar">
                  Dosar
                </a>
                <a className="text-xs sm:text-sm hover:text-drive-orange transition-colors active:text-drive-orange" href="/invatare">
                  Învățare
                </a>
                <a className="text-xs sm:text-sm hover:text-drive-orange transition-colors active:text-drive-orange" href="/#contact">
                  Contact
                </a>
              </div>
            </div>
            
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            {/* Bottom info */}
            <div className="flex flex-col gap-2 text-[10px] sm:text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 justify-center sm:justify-start">
                <span>© {new Date().getFullYear()} • Instructor Auto Ghița Gheban</span>
                <span className="hidden sm:inline h-1 w-1 rounded-full bg-drive-orange/50" />
                <span className="hidden sm:inline">Design modern</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start flex-wrap">
                <span>🛡️ Autorizat ARR</span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span>✓ Asigurat</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

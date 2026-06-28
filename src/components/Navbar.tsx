import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Briefcase, Bus, Cpu, Info, Phone } from 'lucide-react';

const mobileNavItems = [
  { label: 'Solutions', href: '#solutions', icon: Briefcase },
  { label: 'Fleet', href: '#fleet', icon: Bus },
  { label: 'Tech', href: '#technology', icon: Cpu },
  { label: 'About', href: '#about', icon: Info },
  { label: 'Contact', href: '#contact', icon: Phone },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const bottomNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Measure the header's real rendered height and expose it as a CSS
  // variable, so other sections (e.g. Hero) can size their top spacing
  // off the actual header instead of a hardcoded guess that goes stale
  // every time the header's content changes.
  useEffect(() => {
    if (!headerRef.current) return;

    const setHeaderHeightVar = () => {
      const height = headerRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty('--header-height', `${height}px`);
    };

    setHeaderHeightVar();

    const resizeObserver = new ResizeObserver(setHeaderHeightVar);
    resizeObserver.observe(headerRef.current);

    window.addEventListener('resize', setHeaderHeightVar);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', setHeaderHeightVar);
    };
  }, [isScrolled]);

  // Same idea for the floating mobile bottom nav: measure its real height
  // (including its own bottom-4 offset from the screen edge) so any
  // section can reserve exactly enough space to clear it, instead of a
  // guessed padding value.
  useEffect(() => {
    if (!bottomNavRef.current) return;

    const setBottomNavHeightVar = () => {
      const navEl = bottomNavRef.current;
      if (!navEl) return;
      // offsetHeight (the bar itself) + its bottom-4 (16px) offset from
      // the screen edge + a little extra breathing room.
      const totalClearance = navEl.offsetHeight + 16 + 16;
      document.documentElement.style.setProperty('--bottom-nav-clearance', `${totalClearance}px`);
    };

    setBottomNavHeightVar();

    const resizeObserver = new ResizeObserver(setBottomNavHeightVar);
    resizeObserver.observe(bottomNavRef.current);

    window.addEventListener('resize', setBottomNavHeightVar);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', setBottomNavHeightVar);
    };
  }, []);

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            className={`flex items-center justify-between rounded-full transition-all duration-500 border ${
              isScrolled 
                ? 'bg-white/40 backdrop-blur-md border-white/60 shadow-[0_32px_64px_rgba(0,0,0,0.08)] px-6 py-3' 
                : 'bg-transparent border-white/0 shadow-none px-2 py-3'
            }`}
          >
            <div className="flex items-center gap-2 cursor-pointer shrink-0">
              <img src="/logo.png" alt="Blue Jay Travels" className="h-12 w-auto shrink-0" />
            </div>
            <a href="#contact" className="md:hidden px-5 py-2.5 bg-brand text-white text-sm font-bold rounded-full shadow-lg hover:bg-brand/90 active:scale-95 transition-all">
              Get Quote
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {['Solutions', 'Fleet', 'Technology', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-semibold text-deep-blue/70 uppercase tracking-widest hover:text-brand transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a href="#contact" className="px-8 py-3 bg-deep-blue text-white text-sm font-bold rounded-full shadow-2xl hover:bg-brand transition-all transform hover:scale-105 active:scale-95 inline-block text-center">
                Get a Quote
              </a>
            </div>

          </div>
        </div>
      </motion.header>

      {/* Mobile bottom tab bar */}
      <motion.nav
        ref={bottomNavRef}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden fixed bottom-4 left-4 right-4 z-50 glass-panel rounded-full mb-[env(safe-area-inset-bottom)] backdrop-blur-md [backdrop-filter:blur(12px)] [-webkit-backdrop-filter:blur(12px)]"
      >
        <div className="flex items-stretch justify-between px-1 py-1">
          {mobileNavItems.map((navItem) => {
            const Icon = navItem.icon;
            return (
              <a key={navItem.label} href={navItem.href} className="flex-1 flex flex-col items-center justify-center gap-1 py-2 rounded-full text-deep-blue/60 hover:text-brand active:text-brand hover:bg-white/40 transition-colors">
                <Icon size={20} strokeWidth={2} />
                <span className="text-[10px] font-semibold uppercase tracking-wide">{navItem.label}</span>
              </a>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
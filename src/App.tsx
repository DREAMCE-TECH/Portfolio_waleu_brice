import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download, Github, Linkedin, Mail, Sun, Moon, Globe } from 'lucide-react';
import { Button } from './components/ui/button';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { CV } from './components/CV';

type Page = 'home' | 'skills' | 'projects' | 'experience' | 'contact' | 'cv';
type Language = 'fr' | 'en';
type Theme = 'light' | 'dark';

const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      skills: 'Compétences',
      projects: 'Projets',
      experience: 'Expérience',
      contact: 'Contact',
      cv: 'CV',
    },
    download: 'Télécharger CV',
  },
  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      cv: 'CV',
    },
    download: 'Download CV',
  },
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [language, setLanguage] = useState<Language>('fr');
  const [theme, setTheme] = useState<Theme>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [direction, setDirection] = useState(1);
  const [showKeyboardHint, setShowKeyboardHint] = useState(true);

  const t = translations[language];

  const pages: Page[] = ['home', 'skills', 'projects', 'experience', 'contact', 'cv'];

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Navigate with arrow keys
      if (e.key === 'ArrowRight') {
        const currentIndex = pages.indexOf(currentPage);
        if (currentIndex < pages.length - 1) {
          navigateToPage(pages[currentIndex + 1]);
        }
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = pages.indexOf(currentPage);
        if (currentIndex > 0) {
          navigateToPage(pages[currentIndex - 1]);
        }
      }
      // Navigate with number keys (1-6)
      else if (e.key >= '1' && e.key <= '6') {
        const index = parseInt(e.key) - 1;
        if (index < pages.length) {
          navigateToPage(pages[index]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage]);

  const navigateToPage = (page: Page) => {
    const currentIndex = pages.indexOf(currentPage);
    const newIndex = pages.indexOf(page);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const pageVariants = {
    initial: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      transformOrigin: direction > 0 ? 'left' : 'right',
    }),
    animate: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
      transformOrigin: direction > 0 ? 'right' : 'left',
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  const renderPage = () => {
    const commonProps = { language, theme };
    switch (currentPage) {
      case 'home':
        return <Home {...commonProps} onNavigate={navigateToPage} />;
      case 'skills':
        return <Skills {...commonProps} />;
      case 'projects':
        return <Projects {...commonProps} />;
      case 'experience':
        return <Experience {...commonProps} />;
      case 'contact':
        return <Contact {...commonProps} />;
      case 'cv':
        return <CV {...commonProps} />;
      default:
        return <Home {...commonProps} onNavigate={navigateToPage} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Desktop Sidebar */}
      <aside className={`hidden lg:flex fixed left-0 top-0 h-screen w-64 flex-col border-r transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              theme === 'dark' ? 'bg-gradient-to-br from-blue-500 to-teal-500' : 'bg-gradient-to-br from-blue-600 to-teal-600'
            } text-white`}>
              <span className="text-xl">WB</span>
            </div>
            <div>
              <h2 className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Waleu Brice</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Back-End Dev</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => navigateToPage(page)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                currentPage === page
                  ? theme === 'dark'
                    ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-teal-600 text-white'
                  : theme === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {t.nav[page]}
            </button>
          ))}
        </nav>

        <div className="p-4 space-y-4 border-t border-gray-200 dark:border-gray-700">
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
            onClick={() => window.open('cv/cv.pdf', '_blank')}
          >
            <Download className="w-4 h-4 mr-2" />
            {t.download}
          </Button>

          <div className="flex items-center justify-center gap-3">
            <a 
              href="https://github.com/DREAMCE-TECH/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/brice-waleu-a1147531b" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:waleubrice76@gmail.com"
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2">
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
              <span className="text-xs ml-1">{language.toUpperCase()}</span>
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className={`lg:hidden fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              theme === 'dark' ? 'bg-gradient-to-br from-blue-500 to-teal-500' : 'bg-gradient-to-br from-blue-600 to-teal-600'
            } text-white`}>
              <span>WB</span>
            </div>
            <div>
              <h2 className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Waleu Brice</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Back-end Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`lg:hidden fixed left-0 top-16 bottom-0 w-64 z-50 flex flex-col transition-colors duration-300 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <nav className="flex-1 p-4 space-y-2">
                {pages.map((page) => (
                  <button
                    key={page}
                    onClick={() => navigateToPage(page)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      currentPage === page
                        ? theme === 'dark'
                          ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white'
                          : 'bg-gradient-to-r from-blue-600 to-teal-600 text-white'
                        : theme === 'dark'
                        ? 'text-gray-300 hover:bg-gray-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {t.nav[page]}
                  </button>
                ))}
              </nav>

              <div className="p-4 space-y-4 border-t border-gray-200 dark:border-gray-700">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
                  onClick={() => window.open('cv/cv.pdf', '_blank')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t.download}
                </Button>

                <div className="flex items-center justify-center gap-3">
                  <a 
                    href="https://github.com/DREAMCE-TECH/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/brice-waleu-a1147531b" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:waleubrice76@gmail.com"
                    className={`p-2 rounded-lg transition-colors ${
                      theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="lg:ml-64 min-h-screen pt-16 lg:pt-0">
        <div style={{ perspective: '2000px' }} className="min-h-screen">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="min-h-screen"
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
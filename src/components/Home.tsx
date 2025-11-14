import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type HomeProps = {
  language: 'fr' | 'en';
  theme: 'light' | 'dark';
  onNavigate: (page: 'projects' | 'contact') => void;
};

const content = {
  fr: {
    greeting: 'Bonjour, je suis',
    role: 'Développeur Back-End',
    subtitle: 'En transition vers DevOps',
    bio: "Passionné par le développement web et l'automatisation, je construis des solutions robustes et évolutives. Avec une expertise en PHP et des compétences croissantes en DevOps (Docker, Kubernetes, CI/CD), je transforme les idées en applications performantes.",
    hireMeBtn: 'Me contacter',
    projectsBtn: 'Voir mes projets',
    stats: {
      experience: 'Années d\'expérience',
      projects: 'Projets complétés',
      technologies: 'Technologies maîtrisées',
    },
  },
  en: {
    greeting: 'Hello, I am',
    role: 'Back-end Developer',
    subtitle: 'Evolving toward DevOps',
    bio: "Passionate about web development and automation, I build robust and scalable solutions. With expertise in PHP and growing skills in DevOps (Docker, Kubernetes, CI/CD), I transform ideas into high-performance applications.",
    hireMeBtn: 'Hire me',
    projectsBtn: 'View projects',
    stats: {
      experience: 'Years of experience',
      projects: 'Completed projects',
      technologies: 'Technologies mastered',
    },
  },
};

export function Home({ language, theme, onNavigate }: HomeProps) {
  const t = content[language];

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-teal-50'
    }`}>
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-blue-600 dark:text-blue-400"
              >
                {t.greeting}
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`text-5xl lg:text-6xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              >
                Waleu Brice
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-1"
              >
                <h2 className="text-2xl lg:text-3xl bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  {t.role}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{t.subtitle}</p>
              </motion.div>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              {t.bio}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                {t.hireMeBtn}
              </Button>
              <Button 
                onClick={() => onNavigate('projects')}
                variant="outline"
                className={`px-6 py-6 rounded-xl border-2 transition-all ${
                  theme === 'dark' 
                    ? 'border-gray-700 hover:border-blue-500 hover:bg-gray-800' 
                    : 'border-gray-300 hover:border-blue-600 hover:bg-gray-50'
                }`}
              >
                {t.projectsBtn}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                <div className="text-3xl bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t.stats.experience}</div>
              </div>
              <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                <div className="text-3xl bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t.stats.projects}</div>
              </div>
              <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                <div className="text-3xl bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t.stats.technologies}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-3xl blur-3xl"
              />
              <div className={`relative rounded-3xl overflow-hidden shadow-2xl ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } p-2`}>
                <ImageWithFallback
                  src='/img/IMG_5948.png'
                  // src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=700&fit=crop"
                  alt="Waleu Brice"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -bottom-6 -right-6 p-4 rounded-2xl shadow-xl ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                    {language === 'fr' ? 'Disponible pour de nouveaux projets' : 'Available for new projects'}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

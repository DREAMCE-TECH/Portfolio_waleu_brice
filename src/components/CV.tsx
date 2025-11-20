import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

type CVProps = {
  language: 'fr' | 'en';
  theme: 'light' | 'dark';
};

const content = {
  fr: {
    title: 'Curriculum Vitae',
    subtitle: 'Mon parcours professionnel en détail',
    download: 'Télécharger PDF',
    print: 'Imprimer',
    profile: 'Profil',
    profileText: "Je suis un étudiant en Licence Génie Logiciel à l’IUT de Douala dans le département Génie informatique, je souhaite intégrer une structure dynamique où je pourrais appliquer mes compétences en développement web pour concevoir des solutions modernes et intuitives à fin répondre efficacement aux besoins des utilisateurs.",
    skills: 'Compétences',
    experience: 'Expérience',
    education: 'Formation',
    languages: 'Langues',
    languagesList: [
      { name: 'Français', level: 'Langue maternelle' },
      { name: 'Anglais', level: 'Courant (C1)' },
      // { name: 'Espagnol', level: 'Intermédiaire (B1)' },
    ],
  },
  en: {
    title: 'Curriculum Vitae',
    subtitle: 'My professional background in detail',
    download: 'Download PDF',
    print: 'Print',
    profile: 'Profile',
    profileText: 'I am a student pursuing a Bachelor\'s degree in Software Engineering at IUT of Douala in the Computer Engineering department. I aim to join a dynamic organization where I can apply my web development skills to design modern and intuitive solutions that effectively meet user needs.',
    skills: 'Skills',
    experience: 'Experience',
    education: 'Education',
    languages: 'Languages',
    languagesList: [
      { name: 'French', level: 'Native' },
      { name: 'English', level: 'Fluent (C1)' },
      // { name: 'Spanish', level: 'Intermediate (B1)' },
    ],
  },
};

export function CV({ language, theme }: CVProps) {
  const t = content[language];

  const handleDownload = () => {
    // Créer un lien temporaire pour télécharger le PDF
    const link = document.createElement('a');
    link.href = 'cv.pdf';
    link.download = 'Waleu_Brice_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`min-h-screen p-6 lg:p-12 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className={`text-4xl lg:text-5xl mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {t.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={handleDownload}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6"
            >
              <Download className="w-4 h-4 mr-2" />
              {t.download}
            </Button>
            <Button
              onClick={handlePrint}
              variant="outline"
              className={theme === 'dark' ? 'border-gray-700 hover:bg-gray-800' : ''}
            >
              {t.print}
            </Button>
          </div>
        </motion.div>

        {/* CV Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`rounded-2xl shadow-2xl overflow-hidden ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          {/* CV Header with Personal Info */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl mb-2">Waleu Brice</h2>
              <p className="text-xl mb-6 text-blue-100">
                {language === 'fr' ? 'Développeur Back-End' : 'Back-End Developer'}
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:waleubrice76@gmail.com" className="hover:underline">
                    waleubrice76@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+237676492235" className="hover:underline">
                    +237 6 76 49 22 35
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Douala, Cameroun</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <a href="https://linkedin.com/in/brice-waleu-a1147531b" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    linkedin.com/in/brice-waleu
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <a href="https://github.com/DREAMCE-TECH" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    github.com/DREAMCE-TECH
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CV Body */}
          <div className="p-8 space-y-8">
            {/* Profile */}
            <div>
              <h3 className={`text-2xl mb-4 pb-2 border-b-2 border-blue-600 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {t.profile}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t.profileText}
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className={`text-2xl mb-4 pb-2 border-b-2 border-blue-600 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {t.skills}
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className={`mb-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                    Frontend
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• HTML</li>
                    <li>• CSS</li>
                    <li>• JS</li>
                    <li>• React</li>
                  </ul>
                </div>
                <div>
                  <h4 className={`mb-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                    Backend
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• PHP</li>
                    <li>• My SQL</li>
                    <li>• Node.js / Express</li>
                    <li>• MongoDB</li>
                  </ul>
                </div>
                {/* <div>
                  <h4 className={`mb-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                    DevOps
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Docker / Kubernetes</li>
                    <li>• CI/CD (GitLab, GitHub)</li>
                    <li>• AWS / Terraform</li>
                    <li>• Linux / Git</li>
                  </ul>
                </div> */}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className={`text-2xl mb-4 pb-2 border-b-2 border-blue-600 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {t.experience}
              </h3>
              <div className="space-y-6">
                {/* <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {language === 'fr' ? 'Développeur Full Stack Senior' : 'Senior Full Stack Developer'}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400">TechCorp Solutions</p>
                    </div>
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      2022 - {language === 'fr' ? 'Présent' : 'Present'}
                    </span>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• {language === 'fr' 
                      ? 'Lead technique pour applications web React/Node.js' 
                      : 'Technical lead for React/Node.js web applications'}</li>
                    <li>• {language === 'fr' 
                      ? 'Migration vers architecture microservices avec Docker/Kubernetes' 
                      : 'Migration to microservices architecture with Docker/Kubernetes'}</li>
                    <li>• {language === 'fr' 
                      ? 'Mise en place pipeline CI/CD et automatisation déploiements' 
                      : 'CI/CD pipeline setup and deployment automation'}</li>
                    <li>• {language === 'fr' 
                      ? 'Mentorat équipe de 5 développeurs' 
                      : 'Mentoring team of 5 developers'}</li>
                  </ul>
                </div> */}

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {language === 'fr' ? 'Développeur Back-End' : 'Back-End Developer'}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400">PINTO COMPANY</p>
                    </div>
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      2024 - 2025
                    </span>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• {language === 'fr' 
                      ? "Développement d'une application web de comptabilité" 
                      : 'Development of an accounting web application'}</li>
                    <li>• {language === 'fr' 
                      ? 'Amélioration des performances de 60%' 
                      : 'Performance improvement of 60%'}</li>
                    <li>• {language === 'fr' 
                      ? 'Proposition de solution innoventes' 
                      : 'proposal of innovative solutions'}</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {language === 'fr' ? 'Développeur Frontend' : 'Frontend Developer'}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400">MENTALISTS</p>
                    </div>
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      2023 - 2024
                    </span>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• {language === 'fr' 
                      ? 'Implémentation complète de l\'interface principale' 
                      : 'Complete implementation of main interface'}</li>
                    <li>• {language === 'fr' 
                      ? 'Mise en place de bonnes pratiques de codage' 
                      : 'implementation of good coding practices'}</li>
                    <li>• {language === 'fr' 
                      ? 'Amélioration accessibilité et SEO' 
                      : 'Accessibility and SEO improvement'}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education & Languages */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-2xl mb-4 pb-2 border-b-2 border-blue-600 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {t.education}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {language === 'fr' ? 'DUT en Genie Informatique' : 'DUT in Computer Engineering'}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400">
                      {language === 'fr' ? 'IUT de Douala' : 'Douala IUT'}
                    </p>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      2024 - 2025
                    </p>
                  </div>
                  <div>
                    <h4 className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {language === 'fr' ? 'BAC D' : 'BAC D'}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400">
                      {language === 'fr' ? 'ITG' : 'ITG'}
                    </p>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      2021 - 2022
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`text-2xl mb-4 pb-2 border-b-2 border-blue-600 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {t.languages}
                </h3>
                <div className="space-y-3">
                  {t.languagesList.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                        {lang.name}
                      </span>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

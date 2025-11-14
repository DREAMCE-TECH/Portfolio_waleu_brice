import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type ProjectsProps = {
  language: 'fr' | 'en';
  theme: 'light' | 'dark';
};

const content = {
  fr: {
    title: 'Projets & Réalisations',
    subtitle: 'Une sélection de mes meilleurs projets',
    viewGithub: 'Voir sur GitHub',
    viewLive: 'Voir le site',
  },
  en: {
    title: 'Projects & Achievements',
    subtitle: 'A selection of my best projects',
    viewGithub: 'View on GitHub',
    viewLive: 'View site',
  },
};

const projects = {
  fr: [
    {
      title: 'Plateforme E-commerce',
      description: 'Application e-commerce avec gestion de panier, paiements, et tableau de bord admin. Architecture monolitique.',
      image: '/img/Project3.png',
      // image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/DREAMCE-TECH/Dreamce-store.git',
      // live: 'https://example.com',
    },
    {
      title: 'Voyage',
      description: 'Dashboard de monitoring temps réel avec alertes automatiques. Visualisation des bief pour la destination souhaiter.',
      image: '/img/Project4.png',
      // image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript', 'BOOSTRAP'],
      github: 'https://github.com/DREAMCE-TECH/Dreamce-voyage.git',
      live: null,
    },
    {
      title: 'restoration',
      description: 'plate forme dynamique de restauration rapide avec gestion de menu, commandes en ligne, et tableau de bord admin. Architecture monolitique.',
      image: '/img/Project5.png',
      // image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=500&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript', 'BOOSTRAP'],
      github: 'https://github.com/DREAMCE-TECH/Dreamce-restauration.git',
      live: null,
    },
    {
      title: 'Application de streaming',
      description: 'application web de streaming ou vous pouvez regarder des films et des series en ligne gratuitement.',
      image: '/img/Project2.png',
      // image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/DREAMCE-TECH/Dreamce-streaming.git',
      // live: 'https://example.com',
    },
    {
      title: 'mon CV',
      description: 'mon CV en ligne pour me decouvrir un peu plus.',
      image: '/img/Project1.png',
      // image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript', 'BOOSTRAP'],
      github: 'https://github.com:DREAMCE-TECH/Dreamce-cv.git',
      // live: 'https://example.com',
    },
    {
      title: 'commande de plat',
      description: 'plate forme de commande de plat en ligne avec gestion de menu, commandes en ligne, et tableau de bord admin. Architecture monolitique.',
      image: '/img/Project6.png',
      // image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/DREAMCE-TECH/Dreamce-food.git',
      live: null,
    },
  ],
  en: [
    {
      title: 'E-commerce Platform',
      description: 'E-commerce application with cart management, payments, and admin dashboard. Monolithic architecture.',
      image: '/img/Project3.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/DREAMCE-TECH/Dreamce-store.git',
      // live: 'https://example.com',
    },
    {
      title: 'Travel Dashboard',
      description: 'Real-time monitoring dashboard with automatic alerts. Visualization of briefs for the desired destination.',
      image: '/img/Project4.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'BOOSTRAP'],
      github: 'https://github.com/DREAMCE-TECH/Dreamce-voyage.git',
      live: null,
    },
    {
      title: 'Food Delivery Platform',
      description: 'Dynamic fast food platform with menu management, online orders, and admin dashboard. Monolithic architecture.',
      image: '/img/Project5.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'BOOSTRAP'],
      github: 'https://github.com/DREAMCE-TECH/Dreamce-restauration.git',
      live: null,
    },
    {
      title: 'Streaming Application',
      description: 'Web streaming application where you can watch movies and series online for free.',
      image: '/img/Project2.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/DREAMCE-TECH/Dreamce-streaming.git',
      // live: 'https://example.com',
    },
    {
      title: 'My Resume',
      description: 'My online resume to get to know me a little better.',
      image: '/img/Project1.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'BOOSTRAP'],
      github: 'https://github.com:DREAMCE-TECH/Dreamce-cv.git',
      // live: 'https://example.com',
    },
    {
      title: 'Food Ordering System',
      description: 'Online food ordering platform with menu management, online orders, and admin dashboard. Monolithic architecture.',
      image: '/img/Project6.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/DREAMCE-TECH/Dreamce-food.git',
      live: null,
    },
  ],
};

export function Projects({ language, theme }: ProjectsProps) {
  const t = content[language];
  const projectList = projects[language];

  return (
    <div className={`min-h-screen p-6 lg:p-12 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl lg:text-5xl mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-xs rounded-full ${
                        theme === 'dark' 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={() => window.open(project.github, '_blank')}
                    variant="outline"
                    className={`flex-1 ${
                      theme === 'dark' 
                        ? 'border-gray-700 hover:bg-gray-700' 
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t.viewGithub}
                  </Button>
                  {project.live && (
                    <Button
                      onClick={() => window.open(project.live, '_blank')}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t.viewLive}
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

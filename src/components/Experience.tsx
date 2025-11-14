import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

type ExperienceProps = {
  language: 'fr' | 'en';
  theme: 'light' | 'dark';
};

const content = {
  fr: {
    title: 'Expérience & Formation',
    subtitle: 'Mon parcours professionnel et académique',
    experienceTitle: 'Expérience Professionnelle',
    educationTitle: 'Formation',
    certificationsTitle: 'Certifications',
    present: 'Présent',
  },
  en: {
    title: 'Experience & Education',
    subtitle: 'My professional and academic journey',
    experienceTitle: 'Professional Experience',
    educationTitle: 'Education',
    certificationsTitle: 'Certifications',
    present: 'Present',
  },
};

const experiences = {
  fr: [
    // {
    //   role: 'Développeur Full Stack Senior',
    //   company: 'TechCorp Solutions',
    //   period: '2022 - Présent',
    //   description: 'Lead technique pour le développement d\'applications web modernes. Mise en place de l\'infrastructure DevOps et formation de l\'équipe aux meilleures pratiques CI/CD.',
    //   achievements: [
    //     'Migration réussie vers une architecture microservices',
    //     'Réduction de 40% du temps de déploiement',
    //     'Mentorat de 5 développeurs juniors',
    //   ],
    // },
    {
      role: 'Développeur Back-End ',
      company: 'PINTO COMPANY',
      period: '2024 - 2025',
      description: "Développement de solutions web pour des clients B2B. Spécialisation dans PHP et My SQL avec intégration d'une API Rest.",
      achievements: [
        "Développement d'une application web de comptabilité",
        'Amélioration des performances de 60%',
        'Proposition de solution innoventes',
      ],
    },
    {
      role: 'Développeur Frontend',
      company: 'MENTALISTS',
      period: '2023 - 2024',
      description: 'Création d\'interfaces utilisateur modernes et responsives. Collaboration avec les designers UX/UI.',
      achievements: [
        'Implémentation complète de l\'interface principale',
        'Mise en place de bonnes pratiques de codage',
        'Optimisation SEO et accessibilité',
      ],
    },
  ],
  en: [
    // {
    //   role: 'Senior Full Stack Developer',
    //   company: 'TechCorp Solutions',
    //   period: '2022 - Present',
    //   description: 'Technical lead for modern web application development. Setup of DevOps infrastructure and team training on CI/CD best practices.',
    //   achievements: [
    //     'Successful migration to microservices architecture',
    //     '40% reduction in deployment time',
    //     'Mentored 5 junior developers',
    //   ],
    // },
    {
      role: 'Back-End Developer',
      company: 'PINTO COMPANY',
      period: '2024 - 2025',
      description: 'Web solutions development for B2B clients. Specialization in PHP and My SQL with API Rest integration.',
      achievements: [
        'Development of an accounting web application',
        'Performance improvement of 60%',
        'proposal of innovative solutions',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'MENTALISTS',
      period: '2023 - 2024',
      description: 'Creation of modern and responsive user interfaces. Collaboration with UX/UI designers.',
      achievements: [
        'Complete implementation of main interface',
        'implementation of good coding practices',
        'SEO and accessibility optimization',
      ],
    },
  ],
};

const education = {
  fr: [
    {
      degree: 'DUT en Genie Informatique',
      school: 'IUT de Douala',
      period: '2024 - 2025',
      description: 'Spécialisation en développement web et architecture logicielle',
    },
    {
      degree: 'BAC D',
      school: 'ITG',
      period: '2021 - 2022',
      description: 'Formation générale en science et informatique',
    },
  ],
  en: [
    {
      degree: 'DUT in Computer Engineering',
      school: 'Douala IUT',
      period: '2024 - 2025',
      description: 'Specialization in web development and software architecture',
    },
    {
      degree: 'BAC D',
      school: 'ITG',
      period: '2021 - 2022',
      description: 'General training in science and computer science',
    },
  ],
};

// const certifications = {
//   fr: [
//     { name: 'AWS Certified Solutions Architect', year: '2023' },
//     { name: 'Kubernetes Administrator (CKA)', year: '2023' },
//     { name: 'Docker Certified Associate', year: '2022' },
//     { name: 'Professional Scrum Master', year: '2021' },
//   ],
//   en: [
//     { name: 'AWS Certified Solutions Architect', year: '2023' },
//     { name: 'Kubernetes Administrator (CKA)', year: '2023' },
//     { name: 'Docker Certified Associate', year: '2022' },
//     { name: 'Professional Scrum Master', year: '2021' },
//   ],
// };

export function Experience({ language, theme }: ExperienceProps) {
  const t = content[language];
  const experienceList = experiences[language];
  const educationList = education[language];
  // const certificationsList = certifications[language];

  return (
    <div className={`min-h-screen p-6 lg:p-12 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto">
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

        <div className="space-y-12">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-teal-600">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h2 className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {t.experienceTitle}
              </h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className={`absolute left-4 top-0 bottom-0 w-0.5 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
              }`} />

              <div className="space-y-8">
                {experienceList.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="relative pl-12"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-gradient-to-br from-blue-600 to-teal-600 ring-4 ring-gray-50 dark:ring-gray-900" />

                    <div className={`p-6 rounded-2xl shadow-lg ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    }`}>
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className={`text-xl mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            {exp.role}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                        </div>
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                        }`}>
                          <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-teal-600 dark:text-teal-400 mt-1">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {t.educationTitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {educationList.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`p-6 rounded-2xl shadow-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <h3 className={`text-xl mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {edu.degree}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 mb-2">{edu.school}</p>
                  <div className={`flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-600 to-red-600">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {t.certificationsTitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {certificationsList.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  className={`p-4 rounded-xl shadow-md flex items-center justify-between ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    {cert.name}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    theme === 'dark' ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}

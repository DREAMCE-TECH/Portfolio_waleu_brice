import { motion } from 'motion/react';
import { Code, Server, Cloud, Database, Wrench, GitBranch } from 'lucide-react';

type SkillsProps = {
  language: 'fr' | 'en';
  theme: 'light' | 'dark';
};

const content = {
  fr: {
    title: 'Compétences & Technologies',
    subtitle: 'Mon stack technique et mes domaines d\'expertise',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps & Cloud',
      database: 'Base de données',
      tools: 'Outils & Autres',
    },
  },
  en: {
    title: 'Skills & Technologies',
    subtitle: 'My technical stack and areas of expertise',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps & Cloud',
      database: 'Database',
      tools: 'Tools & Others',
    },
  },
};

const skills = {
  frontend: [
    { name: 'HTML', level: 95, color: 'from-gray-800 to-gray-600' },
    { name: 'CSS', level: 85, color: 'from-teal-500 to-blue-500' },
    { name: 'java Script', level: 75, color: 'from-green-500 to-teal-500' },
    { name: 'React', level: 10, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 10, color: 'from-blue-600 to-blue-400' },
  ],
  backend: [
    { name: 'PHP', level: 90, color: 'from-green-600 to-green-400' },
    { name: 'Node.js', level: 20, color: 'from-green-600 to-green-400' },
    { name: 'Express', level: 25, color: 'from-gray-700 to-gray-500' },
    { name: 'REST APIs', level: 30, color: 'from-indigo-500 to-blue-500' },
    { name: 'Python', level: 10, color: 'from-blue-500 to-yellow-500' },
    { name: 'GraphQL', level: 10, color: 'from-pink-500 to-purple-500' },
  ],
  devops: [
    { name: 'Docker', level: 5, color: 'from-blue-500 to-blue-600' },
    { name: 'Kubernetes', level: 5, color: 'from-blue-600 to-purple-600' },
    { name: 'CI/CD', level: 10, color: 'from-orange-500 to-red-500' },
    { name: 'AWS', level: 5, color: 'from-orange-400 to-yellow-500' },
    // { name: 'Terraform', level: 65, color: 'from-purple-600 to-purple-400' },
  ],
  database: [
    { name: 'MySQL', level: 90, color: 'from-blue-500 to-orange-500' },
    { name: 'MongoDB', level: 80, color: 'from-green-600 to-green-400' },
    { name: 'PostgreSQL', level: 10, color: 'from-blue-600 to-blue-400' },
    // { name: 'Redis', level: 75, color: 'from-red-600 to-red-400' },
  ],
  tools: [
    { name: 'VS Code', level: 95, color: 'from-blue-500 to-blue-600' },
    { name: 'Wamp', level: 75, color: 'from-red-600 to-red-400' },
    { name: 'Linux', level: 60, color: 'from-yellow-600 to-orange-600' },
    { name: 'Git', level: 50, color: 'from-orange-600 to-red-600' },
    { name: 'Jira', level: 10, color: 'from-blue-600 to-blue-500' },
  ],
};

const categoryIcons = {
  frontend: Code,
  backend: Server,
  devops: Cloud,
  database: Database,
  tools: Wrench,
};

export function Skills({ language, theme }: SkillsProps) {
  const t = content[language];

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

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className={`p-6 rounded-2xl shadow-lg ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-teal-600">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {t.categories[category as keyof typeof t.categories]}
                  </h2>
                </div>

                <div className="space-y-4">
                  {items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + index * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`h-2 rounded-full overflow-hidden ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 + 0.2 }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`mt-8 p-6 rounded-2xl shadow-lg ${
            theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 to-teal-50'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-teal-600 flex-shrink-0">
              <GitBranch className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className={`text-xl mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {language === 'fr' ? 'En apprentissage continu' : 'Continuous Learning'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {language === 'fr' 
                  ? "Actuellement en formation approfondie sur DevOps et Cloud Computing. Je me concentre sur l'amélioration de mes compétences en Kubernetes, Infrastructure as Code, et les pratiques CI/CD."
                  : "Currently in advanced training on DevOps and Cloud Computing. I'm focusing on improving my skills in Kubernetes, Infrastructure as Code, and CI/CD practices."}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

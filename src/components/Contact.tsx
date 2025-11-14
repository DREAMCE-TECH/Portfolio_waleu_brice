import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';

type ContactProps = {
  language: 'fr' | 'en';
  theme: 'light' | 'dark';
};

const content = {
  fr: {
    title: 'Me Contacter',
    subtitle: 'N\'hésitez pas à me contacter pour discuter de vos projets',
    form: {
      name: 'Nom',
      namePlaceholder: 'Votre nom',
      email: 'Email',
      emailPlaceholder: 'votre@email.com',
      subject: 'Sujet',
      subjectPlaceholder: 'Sujet de votre message',
      message: 'Message',
      messagePlaceholder: 'Votre message...',
      send: 'Envoyer le message',
      success: 'Message envoyé avec succès!',
    },
    info: {
      title: 'Informations de Contact',
      email: 'Email',
      phone: 'Téléphone',
      location: 'Localisation',
    },
    social: {
      title: 'Réseaux Sociaux',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
  },
  en: {
    title: 'Contact Me',
    subtitle: 'Feel free to reach out to discuss your projects',
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      subject: 'Subject',
      subjectPlaceholder: 'Subject of your message',
      message: 'Message',
      messagePlaceholder: 'Your message...',
      send: 'Send message',
      success: 'Message sent successfully!',
    },
    info: {
      title: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
    },
    social: {
      title: 'Social Networks',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
  },
};

export function Contact({ language, theme }: ContactProps) {
  const t = content[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`p-8 rounded-2xl shadow-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.form.name}
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.form.namePlaceholder}
                  required
                  className={theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : ''}
                />
              </div>

              <div>
                <label className={`block mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.form.email}
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.form.emailPlaceholder}
                  required
                  className={theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : ''}
                />
              </div>

              <div>
                <label className={`block mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.form.subject}
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.form.subjectPlaceholder}
                  required
                  className={theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : ''}
                />
              </div>

              <div>
                <label className={`block mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.form.message}
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.form.messagePlaceholder}
                  required
                  rows={6}
                  className={theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : ''}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-6"
                disabled={submitted}
              >
                {submitted ? (
                  t.form.success
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t.form.send}
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`p-8 rounded-2xl shadow-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <h2 className={`text-2xl mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {t.info.title}
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-teal-600 flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className={`mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {t.info.email}
                    </p>
                    <a
                      href="mailto:waleubrice76@gmail.com"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      waleubrice76@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-teal-600 flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className={`mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {t.info.phone}
                    </p>
                    <a
                      href="tel:+237676492235"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      +237 6 76 49 22 35
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-teal-600 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className={`mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {t.info.location}
                    </p>
                    <p className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                      Douala, Cameroun
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Networks */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`p-8 rounded-2xl shadow-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <h2 className={`text-2xl mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {t.social.title}
              </h2>

              <div className="space-y-4">
                <a
                  href="https://github.com/DREAMCE-TECH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    theme === 'dark' 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-600">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                      {t.social.github}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      DREAMCE-TECH
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/brice-waleu-a1147531b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    theme === 'dark' 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                      {t.social.linkedin}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Brice Waleu
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`p-4 rounded-2xl shadow-lg overflow-hidden ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className={`w-full h-48 rounded-xl flex items-center justify-center ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <MapPin className={`w-12 h-12 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-300'}`} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

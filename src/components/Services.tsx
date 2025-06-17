import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, FileText, Brain, Briefcase, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: GraduationCap,
      title: 'University Admissions',
      description: 'Expert guidance through the entire application process, from university selection to application submission.',
      features: ['Application Strategy', 'Essay Writing Support', 'Interview Preparation'],
      href: '/services/admissions'
    },
    {
      icon: FileText,
      title: 'Visa Assistance',
      description: 'Complete support for student visa applications and documentation for studying abroad.',
      features: ['Document Preparation', 'Visa Interview Prep', 'Legal Compliance'],
      href: '/services/visa'
    },
    {
      icon: Brain,
      title: 'Test Preparation',
      description: 'Comprehensive coaching for standardized tests including SAT, GRE, GMAT, IELTS, and TOEFL.',
      features: ['Personalized Study Plans', 'Practice Tests', 'Score Improvement'],
      href: '/services/test-prep'
    },
    {
      icon: Briefcase,
      title: 'Career Counseling',
      description: 'Professional guidance to align your academic choices with long-term career goals.',
      features: ['Career Assessment', 'Industry Insights', 'Networking Support'],
      href: '/services/career'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Expert Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive educational consulting services designed to help you achieve your academic goals and career aspirations.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-primary-200"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-primary-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href={service.href}
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 transform hover:scale-105"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
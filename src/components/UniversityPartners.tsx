import React from "react";
import { motion } from "framer-motion";

const UniversityPartners: React.FC = () => {
  const partners = [
    {
      name: "Harvard University",
      logo: "https://logos-world.net/wp-content/uploads/2021/09/Harvard-Logo.png",
      alt: "Harvard University shield logo",
    },
    {
      name: "Stanford University",
      logo: "https://logos-world.net/wp-content/uploads/2020/06/Stanford-Logo.png",
      alt: "Stanford University tree logo",
    },
    {
      name: "MIT",
      logo: "https://logos-world.net/wp-content/uploads/2020/06/MIT-Logo.png",
      alt: "MIT Massachusetts Institute of Technology logo",
    },
    {
      name: "Oxford University",
      logo: "https://logos-world.net/wp-content/uploads/2021/09/Oxford-Logo.png",
      alt: "University of Oxford coat of arms",
    },
    {
      name: "Cambridge University",
      logo: "https://logos-world.net/wp-content/uploads/2021/09/Cambridge-Logo.png",
      alt: "University of Cambridge coat of arms",
    },
    {
      name: "University of Toronto",
      logo: "https://logos-world.net/wp-content/uploads/2021/09/University-of-Toronto-Logo.png",
      alt: "University of Toronto shield logo",
    },
    {
      name: "Yale University",
      logo: "https://logos-world.net/wp-content/uploads/2021/09/Yale-Logo.png",
      alt: "Yale University shield logo",
    },
    {
      name: "Princeton University",
      logo: "https://logos-world.net/wp-content/uploads/2021/09/Princeton-Logo.png",
      alt: "Princeton University shield logo",
    },
    {
      name: "Columbia University",
      logo: "https://logos-world.net/wp-content/uploads/2021/09/Columbia-Logo.png",
      alt: "Columbia University crown logo",
    },
    {
      name: "University of Pennsylvania",
      logo: "https://logos-world.net/wp-content/uploads/2021/09/University-of-Pennsylvania-Logo.png",
      alt: "University of Pennsylvania shield logo",
    },
    {
      name: "Imperial College London",
      logo: "https://logos-world.net/wp-content/uploads/2021/09/Imperial-College-London-Logo.png",
      alt: "Imperial College London logo",
    },
    {
      name: "London School of Economics",
      logo: "https://logos-world.net/wp-content/uploads/2021/09/LSE-Logo.png",
      alt: "London School of Economics logo",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our University Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We have established partnerships with top universities worldwide to
            provide you with the best opportunities.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 group"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="h-12 w-auto max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
                onError={(e) => {
                  // Fallback to a simple text logo if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const fallback = document.createElement("div");
                  fallback.className =
                    "text-sm font-semibold text-gray-600 text-center px-2";
                  fallback.textContent = partner.name;
                  target.parentNode?.appendChild(fallback);
                }}
              />
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
          <p className="text-gray-600 mb-6">
            And many more prestigious institutions worldwide
          </p>
          <a
            href="/partners"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200"
          >
            View All Partners
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default UniversityPartners;

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Dilhara Wijesiri",
      university: "Harvard University",
      program: "MBA",
      image:
        "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote:
        "Rivil International is one of the best Educational consultants in Sri Lanka. I have had the best experience with them from day one. My Consultant Vihanga Deneth handled my case professionally, everything was explained well in advance, and executed perfectly.",
      rating: 5,
    },
    {
      name: "Gayan Wijesuriya",
      university: "Stanford University",
      program: "Computer Science",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote:
        "I am grateful to Rivil International for their professional and efficient handling of my New Zealand student visa application. Their expertise, clear guidance, and attention to detail were key to the successful outcome. I highly recommend their services to anyone seeking trusted visa consultancy support.",
      rating: 5,
    },
    {
      name: "Pushpani Wanniarachchi",
      university: "MIT",
      program: "Engineering",
      image:
        "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote:
        "Rivil International is one of the best Educational consultants in Sri Lanka. I have had the best experience with them from day one. My Consultant Vihanga Deneth handled my case professionally, everything was explained well in advance, and executed perfectly.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Hear from our successful students who achieved their academic dreams
            with our guidance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-primary-300 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.program} at {testimonial.university}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/success-stories"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200"
          >
            View More Stories
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

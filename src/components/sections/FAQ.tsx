import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "What types of projects do you take on?",
    answer: "I specialize in end-to-end full-stack architectures and complex native Android applications. From scaling robust database layers and backend services to polishing client-side UI/UX, I build platforms that are ready for production from day one."
  },
  {
    question: "Do you only do Android development?",
    answer: "While I have deep expertise in native Android development with Kotlin and Jetpack Compose, my focus is highly full-stack. I build robust React/Next.js web applications, scalable Node.js server architectures, and manage database integrations across MongoDB and Firebase, among others."
  },
  {
    question: "How do we get started?",
    answer: "Getting started is simple! Just send me a message or a quick email with a brief summary of your idea or business goals. We will then schedule a friendly, casual chat to discuss what you want to achieve, work out a clear step-by-step plan together, and see how I can help bring your project to life."
  },
  {
    question: "Can you help migrate my legacy app to a modern stack?",
    answer: "Absolutely. I have extensive experience in modernizing legacy architectures, bringing applications from old frameworks to efficient, modern stacks like Next.js for the web or Jetpack Compose for Android, with minimal downtime and data guarantees."
  },
  {
    question: "What is your preferred tech stack?",
    answer: "I rely on tools that prioritize type safety, scale, and velocity. Typically this includes TypeScript, Next.js, and React for the frontend; Node.js, Express, and MongoDB/Firebase for the backend; and Kotlin with Jetpack Compose for Android applications."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 relative overflow-hidden" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-white/50 text-lg max-w-xl mx-auto">
            Details on how we collaborate, my technical expertise, and what to expect when we build together.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-white pr-8">
                    {faq.question}
                  </span>
                  <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 transition-colors ${isOpen ? 'bg-gray-100 dark:bg-white/10' : ''}`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-gray-600 dark:text-white/70" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-600 dark:text-white/70" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-600 dark:text-white/60 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

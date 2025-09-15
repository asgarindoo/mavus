"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { FileQuestion } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "How does the platform ensure data security?",
    answer:
      "We implement bank-grade encryption, multi-factor authentication, and comply with SOC 2 Type II standards. All data is encrypted both in transit and at rest, with regular security audits conducted by third-party firms.",
  },
  {
    id: 2,
    question: "What's the typical implementation timeline?",
    answer:
      "Most clients see full implementation within 4-8 weeks, depending on complexity. Our dedicated onboarding team provides white-glove service throughout the entire process, ensuring minimal disruption to your operations.",
  },
  {
    id: 3,
    question: "Can the platform integrate with existing systems?",
    answer:
      "Yes, our platform offers robust API connectivity and pre-built integrations with major financial systems including Bloomberg, Refinitiv, and most major OMS/EMS platforms. Custom integrations are also available.",
  },
  {
    id: 4,
    question: "What kind of support do you provide?",
    answer:
      "We provide 24/7 technical support, dedicated account management, and comprehensive training programs. Our support team averages under 2-minute response times for critical issues.",
  },
  {
    id: 5,
    question: "How does pricing work for enterprise clients?",
    answer:
      "Enterprise pricing is customized based on trading volume, number of users, and specific feature requirements. We offer transparent, scalable pricing with no hidden fees and volume discounts for larger implementations.",
  },
]

export default function FAQSection() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null)
  const [hoveredQuestion, setHoveredQuestion] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-black mb-4 text-balance">Questions? We have answers.</h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto text-pretty">
            Get clarity on how our platform can transform your trading operations
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Questions Column */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`group cursor-pointer transition-all duration-300 ${
                    activeQuestion === faq.id || hoveredQuestion === faq.id
                    ? "opacity-100"
                    : "opacity-70"
                }`}
                onClick={() => setActiveQuestion(activeQuestion === faq.id ? null : faq.id)}
                onMouseEnter={() => setHoveredQuestion(faq.id)}
                onMouseLeave={() => setHoveredQuestion(null)}
              >
                <div className="flex items-start gap-4 p-6 rounded-md border border-gray-100 hover:border-gray-200 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-black mb-2 text-pretty">{faq.question}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>View answer</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeQuestion === faq.id ? "rotate-90" : "group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Answer Column */}
          <div className="md:sticky md:top-8 md:h-fit">
            <div className="bg-gray-50 rounded-md p-8 min-h-[400px] flex items-center justify-center">
              {activeQuestion ? (
                <div key={activeQuestion} className="animate-in fade-in-0 slide-in-from-right-4 duration-500">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-lg font-medium mb-4">
                      {String(faqs.findIndex((f) => f.id === activeQuestion) + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-2xl font-light text-black mb-4 text-balance">
                      {faqs.find((f) => f.id === activeQuestion)?.question}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-pretty">
                    {faqs.find((f) => f.id === activeQuestion)?.answer}
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4 mx-auto">
                    <FileQuestion className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-gray-500 font-light">Select a question to view the answer</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

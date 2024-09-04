"use client"
import React, { useState } from "react";

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "How much does it cost to set up a store?", answer: "" },
    { question: "What kind of digital products can I sell?", answer: "" },
    {
      question: "Do I need technical skills to use the platform?",
      answer:
        "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!",
    },
    { question: "Is there a limit to the number of products I can list?", answer: "" },
    { question: "How do I receive payments for my sales?", answer: "" },
    { question: "Can I sell internationally on this marketplace?", answer: "" },
    { question: "What support and resources are available for sellers?", answer: "" },
    { question: "Is there a review process for uploaded products?", answer: "" },
  ];

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <h2 className="text-xl font-semibold mb-4">FREQUENTLY ASKED QUESTIONS</h2>
      <p className="text-center mb-8 text-gray-600">
        Quick answers to questions you may have. Can’t find what you’re looking for? 
        <br /> Check out our full documentation
      </p>
      <div className="w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-2 rounded-lg border border-gray-300 bg-[#E4F1F0] text-[#244642]"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 px-6 text-left"
            >
              <span className="font-medium">{faq.question}</span>
              <span className="text-2xl">
                {openIndex === index ? "—" : "+"}
              </span>
            </button>
            {openIndex === index && faq.answer && (
              <div className="px-6 pb-4 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

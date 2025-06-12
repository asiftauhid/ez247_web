import React from 'react';
import Background from './background';

const WhyChooseUs = () => {
  return (
    <section className="relative px-10 md:px-20 py-32 min-h-screen">
      <Background />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Why Choose Us?</h2>
        
        <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg p-12 max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Easy Access */}
            <div className="flex items-start gap-8">
              <h3 className="text-2xl font-semibold text-gray-800 w-64">Easy Access</h3>
              <p className="text-lg text-gray-600 flex-1">
                Get all the information you need from one AI agent—no browsing, no delays.
              </p>
            </div>

            {/* 24/7 Available */}
            <div className="flex items-start gap-8">
              <h3 className="text-2xl font-semibold text-gray-800 w-64">24/7 Available</h3>
              <p className="text-lg text-gray-600 flex-1">
                Always on. Always ready. Service available 24 hours a day, 7 days a week.
              </p>
            </div>

            {/* Seamless Exp */}
            <div className="flex items-start gap-8">
              <h3 className="text-2xl font-semibold text-gray-800 w-64">Seamless Exp.</h3>
              <p className="text-lg text-gray-600 flex-1">
                Speak clearly in any language—with interruptible, natural conversations tailored to you.
              </p>
            </div>

            {/* Private & Local */}
            <div className="flex items-start gap-8">
              <h3 className="text-2xl font-semibold text-gray-800 w-64">Private & Local</h3>
              <p className="text-lg text-gray-600 flex-1">
                All data stays local with no external leakage—your privacy is fully protected.
              </p>
            </div>

            {/* Smarter With Every Call */}
            <div className="flex items-start gap-8">
              <h3 className="text-2xl font-semibold text-gray-800 w-64">Smarter With Every Call</h3>
              <p className="text-lg text-gray-600 flex-1">
                Every call, every outcome used to refine matching, enhance success rates, and personalize experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function UseCases() {
  // Use case data for each product (separate lists)
  const useCasesProduct1 = [
    {
      title: 'Use Case - Food Ordering',
      description:
        'Call the EZ247 AI agent for Middle Eastern food recommendations. The AI will chat and understand your preferences, suggests matching restaurants, shares menus, and places the final order—seamlessly, all within a single call.',
    },
    // Add more use cases for Product 1 here
  ];
  const useCasesProduct2 = [
    {
        title: 'Use Case - Receiving Calls | Taxi',
        description:
          'EZ247 AI agent can handle incoming taxi booking calls—automatically answering, processing requests, and dispatching cars in real time.',
      },
      {
        title: 'Use Case - Proactively Calling | Real Estate Sales',
        description:
          'Let EZ247 AI agent be your tireless top salesperson—understanding customer needs and reaching out intelligently, 24/7.',
      },
    // Add more use cases for Product 2 here
  ];
  const useCasesProduct3 = [
    {
      title: 'Use Case - Job Market Intermediary',
      description:
        'Applicants submit their profiles and do interviews with the EZ247 AI agent.\nRecruiters request candidates, and the AI delivers the best match.\nAll driven by data, not luck.',
    },
  ];

  // State for each product's use case overlay
  const [openUseCase, setOpenUseCase] = useState([false, false, false]);
  // State for current use case index for each product
  const [useCaseIndex, setUseCaseIndex] = useState([0, 0, 0]);

  // Helper to open overlays (and reset index)
  const handleOpen = (idx: number) => {
    setOpenUseCase((prev) => prev.map((v, i) => (i === idx ? true : false)));
    setUseCaseIndex((prev) => prev.map((v, i) => (i === idx ? 0 : v)));
  };
  // Helper to close overlays (do NOT reset index here)
  const handleClose = (idx: number) => {
    setOpenUseCase((prev) => prev.map((v, i) => (i === idx ? false : v)));
  };
  // Helper to go to next use case
  const handleNext = (idx: number, total: number) => {
    setUseCaseIndex((prev) => prev.map((v, i) => (i === idx ? (v + 1) % total : v)));
  };

  // Reset use case index only after overlay is closed (for each product)
  useEffect(() => {
    openUseCase.forEach((isOpen, idx) => {
      if (!isOpen && useCaseIndex[idx] !== 0) {
        // Delay reset to allow animation to finish (match transition duration)
        setTimeout(() => {
          setUseCaseIndex((prev) => prev.map((v, i) => (i === idx ? 0 : v)));
        }, 500); // 500ms matches transition duration-500
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openUseCase]);

  return (
    <section id="products" className="px-4 md:px-8 py-16 z-40">
      <div className="max-w-[1200px] mx-auto px-0.5 md:px-2">
        <h2 className="text-[35px] font-bold text-[#333] mb-10">Products & Use Cases</h2>
        
        {/* First product */}
        <div className="relative mb-32" style={{ height: '250px' }}>
          {/* Description Card - overlaid on top */}
          <div className="relative z-20" style={{ width: '65%', height: '350px' }}>
            <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 w-full h-full transition-all duration-500 absolute inset-0 ${openUseCase[0] ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              style={{ zIndex: 2 }}
            >
              <h3 className="text-[25px] font-bold text-[#333] mb-6">One Customer to Multiple Service Providers</h3>
              <p className="text-lg text-gray-600 mb-8">One call to the EZ247 AI agent connects you with all relevant service providers—no research required.</p>
              <button
                className="px-8 py-3 bg-[#0a2342] text-white rounded-full font-medium hover:bg-[#163e6c] transition"
                onClick={() => handleOpen(0)}
              >
                See Use Case
              </button>
            </div>
            {/* Use Case Card - overlays only the card area */}
            <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 w-full h-full transition-all duration-500 absolute inset-0 ${openUseCase[0] ? 'opacity-100 translate-x-0 z-30' : 'opacity-0 pointer-events-none translate-x-8'} animate-none`}
              style={{ zIndex: 3 }}
            >
              <h3 className="text-[25px] font-bold text-[#333] mb-6">{useCasesProduct1[useCaseIndex[0]].title}</h3>
              <p className="text-lg text-gray-600 mb-8" style={{ whiteSpace: 'pre-line' }}>
                {useCasesProduct1[useCaseIndex[0]].description}
              </p>
              <div className="flex gap-3">
                <button
                  className="px-8 py-3 bg-gray-200 text-gray-500 rounded-full font-medium hover:bg-gray-300 transition"
                  onClick={() => handleClose(0)}
                >
                  Back to Description
                </button>
                {useCasesProduct1.length > 1 && useCaseIndex[0] < useCasesProduct1.length - 1 && (
                  <button
                    className="px-8 py-3 bg-[#0a2342] text-white rounded-full font-medium hover:bg-[#163e6c] transition"
                    onClick={() => handleNext(0, useCasesProduct1.length)}
                  >
                    See Another One
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* Image Card - positioned behind and extending right */}
          <div className="absolute top-[20px] right-0 w-[500px] h-[300px] z-10">
            <Image 
              src="/images/product1.png"
              alt="Customer Service"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Product  - Reversed */}
        <div className="relative mb-32" style={{ height: '250px' }}>
          {/* Description Card - overlaid on top, positioned right */}
          <div className="relative z-20 ml-auto" style={{ width: '65%', height: '350px' }}>
            <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 w-full h-full transition-all duration-500 absolute inset-0 ${openUseCase[1] ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              style={{ zIndex: 2 }}
            >
              <h3 className="text-[25px] font-bold text-[#333] mb-6">One Service Provider to Multiple Customers</h3>
              <p className="text-lg text-gray-600 mb-8">Let EZ247 AI agent handle inbound calls and proactively reach out to high-intent customers on your behalf.</p>
              <button
                className="px-8 py-3 bg-[#0a2342] text-white rounded-full font-medium hover:bg-[#163e6c] transition"
                onClick={() => handleOpen(1)}
              >
                See Use Case
              </button>
            </div>
            {/* Use Case Card - overlays only the card area */}
            <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 w-full h-full transition-all duration-500 absolute inset-0 ${openUseCase[1] ? 'opacity-100 translate-x-0 z-30' : 'opacity-0 pointer-events-none translate-x-8'} animate-none`}
              style={{ zIndex: 3 }}
            >
              <h3 className="text-[25px] font-bold text-[#333] mb-6">{useCasesProduct2[useCaseIndex[1]].title}</h3>
              <p className="text-lg text-gray-600 mb-8" style={{ whiteSpace: 'pre-line' }}>
                {useCasesProduct2[useCaseIndex[1]].description}
              </p>
              <div className="flex gap-3">
                <button
                  className="px-8 py-3 bg-gray-200 text-gray-500 rounded-full font-medium hover:bg-gray-300 transition"
                  onClick={() => handleClose(1)}
                >
                  Back to Description
                </button>
                {useCasesProduct2.length > 1 && useCaseIndex[1] < useCasesProduct2.length - 1 && (
                  <button
                    className="px-8 py-3 bg-[#0a2342] text-white rounded-full font-medium hover:bg-[#163e6c] transition"
                    onClick={() => handleNext(1, useCasesProduct2.length)}
                  >
                    See Another One
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* Image Card - positioned behind and extending left */}
          <div className="absolute top-[20px] left-0 w-[500px] h-[300px] z-10">
            <Image 
              src="/images/product2.png"
              alt="Service Provider"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Third Product */}
        <div className="relative" style={{ height: '340px' }}>
          {/* Description Card - overlaid on top */}
          <div className="relative z-20" style={{ width: '65%', height: '350px' }}>
            <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 w-full h-full transition-all duration-500 absolute inset-0 ${openUseCase[2] ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              style={{ zIndex: 2 }}
            >
              <h3 className="text-[25px] font-bold text-[#333] mb-6">Customers &lt;&gt; Service Providers</h3>
              <p className="text-lg text-gray-600 mb-8">EZ247 AI acts as a smart middleman, instantly matching customers with the best-fit service providers.</p>
              <button
                className="px-8 py-3 bg-[#0a2342] text-white rounded-full font-medium hover:bg-[#163e6c] transition"
                onClick={() => handleOpen(2)}
              >
                See Use Case
              </button>
            </div>
            {/* Use Case Card - overlays only the card area */}
            <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 w-full h-full transition-all duration-500 absolute inset-0 ${openUseCase[2] ? 'opacity-100 translate-x-0 z-30' : 'opacity-0 pointer-events-none translate-x-8'} animate-none`}
              style={{ zIndex: 3 }}
            >
              <h3 className="text-[25px] font-bold text-[#333] mb-6">{useCasesProduct3[useCaseIndex[2]].title}</h3>
              <p className="text-lg text-gray-600 mb-8" style={{ whiteSpace: 'pre-line' }}>
                {useCasesProduct3[useCaseIndex[2]].description}
              </p>
              <div className="flex gap-3">
                <button
                  className="px-8 py-3 bg-gray-200 text-gray-500 rounded-full font-medium hover:bg-gray-300 transition"
                  onClick={() => handleClose(2)}
                >
                  Back to Description
                </button>
                {useCasesProduct3.length > 1 && useCaseIndex[2] < useCasesProduct3.length - 1 && (
                  <button
                    className="px-8 py-3 bg-[#0a2342] text-white rounded-full font-medium hover:bg-[#163e6c] transition"
                    onClick={() => handleNext(2, useCasesProduct3.length)}
                  >
                    See Another One
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* Image Card - positioned behind and extending right */}
          <div className="absolute top-[20px] right-0 w-[500px] h-[300px] z-10">
            <Image 
              src="/images/product3.png"
              alt="Customer and Service Provider Connection"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 
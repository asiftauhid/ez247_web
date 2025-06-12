import Image from "next/image";

export default function UseCases() {
  return (
    <section id="products" className="px-4 md:px-8 py-16 z-40">
      <div className="max-w-[1200px] mx-auto px-0.5 md:px-2">
        <h2 className="text-[35px] font-bold text-[#333] mb-10">Products & Use Cases</h2>
        
        {/* First Use Case */}
        <div className="relative mb-32" style={{ height: '250px' }}>
          {/* Description Card - overlaid on top */}
          <div className="relative z-20 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 max-w-[65%] h-[350px]">
            <h3 className="text-[25px] font-bold text-[#333] mb-6">One Customer to Multiple Service Providers</h3>
            <p className="text-lg text-gray-600 mb-8">One call to the EZ247 AI agent connects you with all relevant service providers—no research required.</p>
            <button className="px-8 py-3 bg-[#0a2342] text-white rounded-full font-medium hover:bg-[#163e6c] transition">
              See Use Case
            </button>
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

        {/* Second Use Case - Reversed */}
        <div className="relative mb-32" style={{ height: '250px' }}>
          {/* Description Card - overlaid on top, positioned right */}
          <div className="relative z-20 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 max-w-[65%] ml-auto h-[350px]">
            <h3 className="text-[25px] font-bold text-[#333] mb-6">One Service Provider to Multiple Customers</h3>
            <p className="text-lg text-gray-600 mb-8">Let EZ247 AI agent handle inbound calls and proactively reach out to high-intent customers on your behalf.</p>
            <button className="px-8 py-3 bg-[#0a2342] text-white rounded-full font-medium hover:bg-[#163e6c] transition">
              See Use Case
            </button>
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

        {/* Third Use Case */}
        <div className="relative" style={{ height: '340px' }}>
          {/* Description Card - overlaid on top */}
          <div className="relative z-20 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 max-w-[65%] h-[350px]">
            <h3 className="text-[25px] font-bold text-[#333] mb-6">Customers &lt;&gt; Service Providers</h3>
            <p className="text-lg text-gray-600 mb-8">EZ247 AI acts as a smart middleman, instantly matching customers with the best-fit service providers.</p>
            <button className="px-8 py-3 bg-[#0a2342] text-white rounded-full font-medium hover:bg-[#163e6c] transition">
              See Use Case
            </button>
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
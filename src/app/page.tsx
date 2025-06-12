import Image from "next/image";
import UseCases from "./elements/usecases";
import WhyChooseUs from "./elements/whychooseus";
import Team from "./elements/team";
import ContactUs from "./elements/contactus";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div 
          className="flex justify-between items-center px-12 py-3"
          style={{
            backgroundImage: 'url("/navbar.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="EZ247 Logo" width={40} height={40} />
            <span className="font-bold text-xl tracking-tight text-white">EZ247</span>
          </div>
          <nav className="hidden md:flex gap-12 text-lg font-semibold">
            <a href="#" className="text-white hover:text-blue-200">Home</a>
            <a href="#products" className="text-white hover:text-blue-200">Products & Use Cases</a>
            <a href="#team" className="text-white hover:text-blue-200">Team</a>
            <a href="#contact" className="text-white hover:text-blue-200">Contact</a>
          </nav>
          <a href="#" className="ml-4 px-6 py-2 rounded-full bg-white/30 text-white font-semibold shadow hover:bg-white/50 transition border border-white/30">Join Mailing List</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center pt-48 pb-12 px-0 overflow-hidden">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full z-40">
          <Image
            src="/gradient.png"
            alt="Background Gradient"
            width={1920}
            height={1080}
            className="w-full transform -translate-y-3"
            priority
          />
        </div>
        <div className="relative flex flex-col md:flex-row w-full max-w-7xl mx-auto items-start justify-between px-12 z-45">
          {/* Headline and Subheadline */}
          <div className="flex-1 pt-8">
            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-[1.05] text-gray-900 mb-6" style={{lineHeight: 1.05}}>
              Easily<br />Accessible,<br />
              <span className="text-[#1e40af]">Available 24/7</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              EZ247 is a voice-based AI agent that connects users to any service with a single call. No searching—just instant, 24/7 access to the right provider in real time.
            </p>
          </div>
          {/* Video Card with Glassmorphism */}
          <div className="flex-1 flex justify-end items-start pt-8 mt-12 md:mt-0 md:ml-8">
            <div className="w-full max-w-xl aspect-video bg-white/60 backdrop-blur-lg rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/I4v9hiUpzjU"
                title="Demo video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Use Cases */}
      <UseCases />

      {/* Why Choose Us? */}
      <WhyChooseUs />

      {/* Team */}
      <Team />

      {/* Footer with Contact Us */}
      <footer className="relative w-full py-2">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white" />
        <div className="relative z-10">
          <ContactUs />
        </div>
      </footer>
    </div>
  );
}

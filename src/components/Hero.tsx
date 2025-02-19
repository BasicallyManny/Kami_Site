import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ReactNode } from "react";
import { Engine } from "@tsparticles/engine"; 


import KamiPFP from "../assets/KamiPFP.png";
import kamiAddSS from "../assets/kamiAddSS.png";
import kamicmdSS from "../assets/kamicmdSS.png";
import kamiHelpSS from "../assets/kAMIHelpSS.png";

// Define types for CustomButton props
interface CustomButtonProps {
  children: ReactNode;
  className?: string;
  [key: string]: unknown; // For other props like onClick, href, etc.
}

// Define types for CustomCard props
interface CustomCardProps {
  title: string;
  description: string;
}

export const Hero: React.FC = () => {
  const particlesInit = async (main: unknown) => {
    await loadFull(main as Engine); // Assert the type here
  };
  

  const screenshots = [kamiHelpSS, kamicmdSS, kamiAddSS];

  // Previous Button and Card components remain the same
  const CustomButton = ({ children, className = "", ...props }: CustomButtonProps) => (
    <button
      className={`group relative px-10 py-4 text-lg rounded-none bg-gradient-to-r 
        from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 
        transition-all duration-300 shadow-2xl font-minecraft transform 
        border-b-4 border-emerald-700 active:border-b-0 active:translate-y-1 ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
      {children}
    </button>
  );

  const CustomCard = ({ title, description }: CustomCardProps) => (
    <div className="relative group w-full max-w-3xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
      <div className="relative bg-stone-800 bg-opacity-90 shadow-2xl border-2 border-stone-700 
        hover:border-emerald-400 transition-all duration-500 hover:scale-105 p-8
        before:absolute before:inset-0 before:border-2 before:border-emerald-400/20 before:scale-105 before:opacity-0 
        before:hover:opacity-100 before:transition-all before:duration-500">
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-400" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-400" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-emerald-400" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-emerald-400" />
        <h2 className="text-2xl font-minecraft mb-4 text-emerald-300 group-hover:text-emerald-200 transition-colors">
          {title}
        </h2>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-stone-900 via-gray-900 to-stone-800 text-white overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: { color: "#0f0f0f" },
          fpsLimit: 60,
          particles: {
            color: { value: "#10b981" },
            links: {
              enable: true,
              color: "#10b981",
              distance: 150,
              opacity: 0.3
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              outModes: "bounce"
            },
            number: { value: 50 },
            opacity: { value: 0.5 },
            shape: { type: "square" },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />

      {/* Decorative pixels */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-emerald-500 opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-4 h-4 bg-emerald-500 opacity-20 animate-pulse" />
      <div className="absolute top-40 right-40 w-2 h-2 bg-emerald-400 opacity-20 animate-pulse" />
      <div className="absolute bottom-40 left-40 w-2 h-2 bg-emerald-400 opacity-20 animate-pulse" />

      <div className="container mx-auto px-4 py-8 flex flex-col gap-24 relative z-10">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-emerald-400 blur-lg opacity-20 animate-pulse" />
            <img
              src={KamiPFP}
              alt="Kami Bot Profile"
              className="relative w-44 h-44 mx-auto rounded-none border-4 border-emerald-400 shadow-2xl 
                hover:scale-110 transition-transform duration-500"
            />
          </motion.div>

          <motion.h1
            className="text-5xl font-minecraft text-emerald-400 drop-shadow-2xl tracking-wide"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block hover:scale-105 transition-transform">Kami Bot</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Your Ultimate Minecraft Discord Bot for coordinate management and AI-powered insights.
          </motion.p>

          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-emerald-400 blur-lg opacity-10" />
            <a
              href="https://discord.com/oauth2/authorize?client_id=1316273389903675402"
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
            >
              <CustomButton>Add to Discord</CustomButton>
            </a>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="space-y-12">
          <h2 className="text-3xl font-minecraft text-lime-400 text-center mb-8">✨ Features</h2>
          <div className="space-y-8">
            {[
              { title: "🗺️ Coordinate Management", description: "Store, retrieve, and manage Minecraft coordinates for bases, resources, and more." },
              { title: "🤖 AI-Powered Insights", description: "Ask questions about Minecraft and get conversational answers powered by LangChain and OpenAI." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 + index * 0.1 }}
              >
                <CustomCard
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="py-16 px-4">
          <h2 className="text-3xl font-minecraft text-lime-400 text-center mb-12">
            🤩 Bot Previews
          </h2>

          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-8 justify-center items-center">
              {screenshots.map((img, index) => (
                <motion.div
                  key={index}
                  className="relative group w-full max-w-2xl mx-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect container */}
                  <div className="absolute inset-0 bg-emerald-400 rounded-lg blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                  {/* Image container */}
                  <div className="relative w-full overflow-hidden">
                    <img
                      src={img}
                      alt={`Kami Bot Screenshot ${index + 1}`}
                      className="w-full h-96 object-cover rounded-lg shadow-2xl border-4 border-stone-700 
              group-hover:border-emerald-400 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* Links Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-minecraft text-lime-400 text-center mb-8">🔗 Quick Links</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <a
              href="https://github.com/BasicallyManny/Kami-2.0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <CustomButton className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                GitHub Repository
              </CustomButton>
            </a>
            <a
              href="https://mannyfong.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <CustomButton className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                Visit Portfolio
              </CustomButton>
            </a>
          </div>
        </section>

        <footer className="text-center text-gray-500 font-minecraft border-t border-stone-700 pt-6">
          <p>
            &copy; {new Date().getFullYear()} Kami Bot. Built with Discord.py, FastAPI, MongoDB, and LangChain.
          </p>
        </footer>
      </div>
    </div>
  );
};

import sketch from "../assets/Kai's chalk illustration with laptop.png";
import copyContent from "../copy/Hero.json";

const Hero = () => {
  return (
    <section className="relative flex items-start justify-center text-white pt-20 md:pt-28">

  <div className="w-[90%] max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">

    {/* LEFT */}
    <div className="flex flex-col gap-6 text-left">
        <div className="absolute center w-24 p-50 bg-emerald-600 opacity-50 blur-3xl animate-[blob_5s_ease-in-out_infinite] pointer-events-none"></div>
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
        {copyContent.mainHeroHeading}
      </h1>

      <p className="text-gray-400 text-lg max-w-md font-stretch-expanded font-mono">
        {copyContent.mainHeroSubheading}
      </p>

      <div className="flex gap-4 mt-4 flex-wrap">
        <button className="px-6 py-3 rounded-xl bg-lime-500 text-black font-medium hover:opacity-90 transition">
          View Projects
        </button>
        <button className="px-6 py-3 rounded-xl border border-lime-500 hover:bg-white/10 transition">
          Contact
        </button>
      </div>

    </div>

    {/* RIGHT */}
    <div className="relative flex justify-center md:">

      <div className="absolute w-64 h-64 bg-teal-400/30 blur-3xl rounded-full"></div>

      <div className="relative w-full md:w-72 md:h-72 rounded-2xl overflow-hidden border border-white/10">

        <img
          src={sketch}
          className="w-full h-full object-cover grayscale contrast-125 brightness-100"
        />

        <div className="absolute inset-0 bg-teal-600 opacity-60"></div>

      </div>

    </div>

  </div>

</section>
  );
};

export default Hero;

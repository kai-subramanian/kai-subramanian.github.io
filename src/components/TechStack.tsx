export default function TechStack() {
  return (
    <section className="w-full flex justify-center text-white py-24">

      <div className="w-[90%] max-w-5xl mx-auto flex flex-col gap-12">

        <h2 className="text-5xl md:text-6xl font-semibold">
          Tech Stack
        </h2>

        <div className="flex flex-col gap-6">

          {/* Layer */}
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <span className="text-gray-500 sm:text-lg text-xs font-stretch-expanded">Frameworks</span>
            <div className="flex gap-3 font-mono">
              <span className="px-3 py-1 bg-white/10 rounded-full">Springboot</span>
            </div>
          </div>

          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <span className="text-gray-500 sm:text-lg text-xs font-stretch-expanded">Languages</span>
            <div className="flex gap-3 font-mono">
              <span className="px-3 py-1 bg-white/10 rounded-full">Java</span>
              <span className="px-3 py-1 bg-white/10 rounded-full">Python</span>
            </div>
          </div>

          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <span className="text-gray-500 sm:text-lg text-xs font-stretch-expanded">Infrastructure</span>
            <div className="flex gap-3 font-mono">
              <span className="px-3 py-1 bg-white/10 rounded-full">AWS</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
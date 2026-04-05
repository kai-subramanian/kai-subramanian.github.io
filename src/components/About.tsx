import AboutCopy from "../copy/About.json";

export default function About() {
  return (
    <section className="w-full flex justify-center text-white pb-36">

      <div className="w-[90%] max-w-5xl mx-auto mt-10 grid md:grid-cols-2 gap-12 items-start">
      
        {/* LEFT */}
        <div>
          <h2 className="text-5xl md:text-6xl font-semibold h-6">
            About Me
          </h2>
        </div>
        
        {/* RIGHT */}
        <div className="flex flex-col text-gray-400 leading-relaxed font-stretch-expanded text-justify text-xl">
          <p>
            {AboutCopy.myWork}
          </p>
          <br></br>
          <br></br>
          <br></br>
          <p>
            {AboutCopy.myFutureFocus}
          </p>

        </div>

      </div>

    </section>
  );
}
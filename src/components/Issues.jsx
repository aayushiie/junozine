import React from "react";
import { Link } from "react-router-dom";

const Issues = () => {
  return (
    <section className="flex flex-col md:flex-row gap-8 md:gap-12 px-4 sm:px-6 md:px-12 lg:px-20 py-12 max-w-5xl mx-auto">

      {/* Left Column: Heading + Submission Link */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="montserrat-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Issue 01: First Lines
        </h1>
        <Link 
          to="/submissionguidelines" 
          className="text-xl italic underline hover:text-green-800"
        >
          Read Submission Guidelines          
        </Link>
      </div>

      {/* Right Column: Description */}
      <div className="flex-1">
        <p className="roboto-mono-text sm:text-md leading-relaxed">
          The first keystroke that sets a program in motion. The shy hello before
          a friendship. The blinking cursor that hums into a sentence. Every
          journey has its first line.
          <br />
          For our debut issue, <i className="italic font-bold text-[#b1a1ed]">First Lines</i>, we
          are celebrating beginnings in all their forms. We invite you to dive
          into the moments that changed everything—the first creative leap that
          felt like flying, the small choices that became seismic shifts, the
          first time you felt like you belonged—or didn't—and the momentum it
          sparked.
          <br /><br />
          Send us your art, stories, poems, essays, and designs that trace the
          sparks, stumbles, and serendipities that became the first lines of
          something unforgettable.
        </p>
      </div>

    </section>
  );
};

export default Issues;

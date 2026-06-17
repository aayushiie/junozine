import React from "react";

const Events = () => {
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="montserrat-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-16">
          Events
        </h1>

        <article className="max-w-xl roboto-mono-text">
          <p className="text-sm uppercase tracking-widest mb-2">
            Workshop · 2026
          </p>

          <h2 className="text-2xl md:text-3xl mb-4">
            Identity & Representation in STEM
          </h2>

          <p className="leading-relaxed mb-6">
            A writing workshop on finding stories, poems, and personal meaning
            within science, technology, engineering, and mathematics.
          </p>

          <a
            href="https://global-inkwell.wixsite.com/glik/projects-1"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Read more →
          </a>
        </article>
      </div>
    </section>
  );
};

export default Events;
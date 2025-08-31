import React from 'react'

const Submission = () => {
  return (
    <section className="montserrat-heading px-4 sm:px-6 md:px-12 lg:px-20 py-8 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">
        Submission Guidelines
      </h2>

      <p className="roboto-mono-text text-base sm:text-lg mb-6 leading-relaxed">
        We welcome submissions from our community of creatives in tech. Please review the following before sending us your work:
      </p>

      <ol className="roboto-mono-text list-decimal list-inside space-y-6">
        <li>
          <strong className="font-semibold text-lg underline">Who can submit</strong>  
          <div>
            If you are a student or work in tech, and identify as a woman or gender-expansive person, we invite you to share your creativity with us.
          </div>
        </li>
        <li>
          <strong className="font-semibold text-lg underline">How to submit</strong>  
          <div>
            Please send your submissions to us via email. Attach your work as a document and ensure the file is accessible
            (set to public or grant explicit editing access) so our editors can review it.
          </div>
        </li>
        <li>
          <strong className="font-semibold text-lg underline">Review process</strong>  
          <div>
            As a small team, we carefully review and edit each submission. You can expect a response from our editors within
            <span className="font-semibold"> 7-10 days</span>.
          </div>
        </li>
      </ol>

      <p className="roboto-mono-text mt-8 text-base sm:text-lg">
        Got any questions? Email us at{" "}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=junozine.magazine@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-[#FF4C65] hover:underline roboto-mono-text"
        >
          junozine.magazine@gmail.com
        </a>
      </p>
    </section>
  )
}

export default Submission

import React from 'react'
import AnimatedUnderline from './AnimatedUnderline'

const Submission = () => {
  return (
    <section className="montserrat-heading px-4 sm:px-6 md:px-12 lg:px-20 py-8 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">
        Submission Guidelines
      </h2>

      <p className="roboto-mono-text text-base sm:text-lg mb-6 leading-relaxed">
        We welcome submissions from our community of creatives in STEM. Please review the following guidelines before sending us your work:
      </p>

      <ol className="roboto-mono-text list-decimal list-inside space-y-6">
        <li>
          <strong className="font-semibold text-lg underline">Who can submit</strong>
          <div>
            If you are a student or work in STEM, and identify as a woman or gender-expansive person, we invite you to share your creativity with us. You can send us your artwork, poetry, essays, writings for our issue. We'll send you revisions on your work before publishing it in our magazine.
          </div>
        </li>
        <li>
          <strong className="font-semibold text-lg underline">How to submit</strong>
          <div>
            Please send your submissions to us via email {" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=junozine.magazine@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-800 montserrat-heading"
            >
            <AnimatedUnderline text="here" />
            </a>
            .
            <div>
              - For writings, attach your work as a document and ensure the file is accessible
              (set to public or grant explicit editing access) so our editors can review it.
            </div>
             <div>
              - For art pieces, you can submit in any format, preferably PNG or JPG/JPEG images. 
            </div>
          </div>
        </li>
        <li>
          <strong className="font-semibold text-lg underline">Review process</strong>
          <div>
            As a small team, we carefully review and edit each submission. You can expect a response from our editors within
            <span className="font-semibold"> 3-5 days</span>.
          </div>
        </li>
      </ol>

      <p className="roboto-mono-text mt-8 text-base sm:text-lg">
        Got any questions? Email us at{" "}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=junozine.magazine@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-green-800 montserrat-heading"
        >
          junozine.magazine@gmail.com
        </a>
      </p>
    </section>
  )
}

export default Submission

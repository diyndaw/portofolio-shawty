export default function Contact() {
  return (
    <section id="contact" className="section section--alt" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header fade-in visible">
          <span className="section-tag">06 · Contact</span>
          <h2 id="contact-heading" className="section-title">Mari Terhubung</h2>
          <p className="section-subtitle">
            Saya terbuka untuk peluang kerja full-time, freelance, dan kolaborasi.
          </p>
        </div>
        <div className="contact__simple fade-in visible">
          <div className="contact__pills" aria-label="Media sosial dan profil profesional">
            <a
              href="mailto:dindalyyaa@gmail.com"
              className="contact-pill contact-pill--gmail"
              aria-label="Gmail"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Gmail</span>
            </a>

            <a
              href="https://www.linkedin.com/in/dindaalyaainsani/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill contact-pill--linkedin"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://instagram.com/dindalyya"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill contact-pill--instagram"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

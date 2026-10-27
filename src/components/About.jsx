export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header fade-in visible">
          <span className="section-tag">01 · About</span>
          <h2 id="about-heading" className="section-title">Tentang Saya</h2>
        </div>
        <div className="about__simple-card fade-in visible">
          <div className="about__meta-row">
            <span className="about__meta-badge">
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
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Depok, Jawa Barat</span>
            </span>
            <span className="about__meta-badge about__meta-badge--remote">
              <span className="pulse-dot" aria-hidden="true"></span>
              <span>Open to Remote &amp; Hybrid</span>
            </span>
          </div>

          <div className="about__text">
            <p className="about__lead">
              Saya adalah lulusan <strong>Sistem Informasi</strong> dari Universitas Respati Indonesia (2026) dengan IPK{' '}
              <strong>3.76/4.0</strong>. Memiliki pengalaman di bidang <strong>Android Development</strong>, administrasi, dan customer
              service, serta sebagai Asisten Laboratorium dan mentor robotik.
            </p>
            <p className="about__body">
              Saya terbiasa mengembangkan aplikasi menggunakan <strong>Java</strong>,{' '}
              <strong>Android Studio</strong>, dan <strong>Firebase</strong>. Memiliki kemampuan
              komunikasi, problem solving, dan kerja sama tim yang baik, serta mampu beradaptasi dengan lingkungan baru.
            </p>
            <p className="about__body">
              Saya berminat mengembangkan karier profesional di bidang teknologi informasi, pelayanan pelanggan,
              administrasi, dan bidang profesional lainnya.
            </p>
          </div>

          <div className="about__values">
            <div className="value-pill">🎯 Problem Solver</div>
            <div className="value-pill">📊 Data-Driven</div>
            <div className="value-pill">🤝 Team Player</div>
            <div className="value-pill">🚀 Fast Learner</div>
          </div>
        </div>
      </div>
    </section>
  )
}

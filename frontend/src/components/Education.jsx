export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-heading">
      <div className="container">
        <div className="section-header fade-in visible">
          <span className="section-tag">04 · Education</span>
          <h2 id="education-heading" className="section-title">Pendidikan</h2>
        </div>
        <div className="edu-grid">
          <div className="edu-card fade-in visible">
            <div className="edu-card__icon" aria-hidden="true">🎓</div>
            <div className="edu-card__content">
              <h3 className="edu-card__degree">S1 Sistem Informasi</h3>
              <p className="edu-card__school">Universitas Respati Indonesia</p>
              <time className="edu-card__year" dateTime="2022/2026">2022 — 2026</time>
              <p className="edu-card__meta">IPK: <strong>3.76 / 4.00</strong></p>
              <p className="edu-card__thesis">
                <strong>Skripsi:</strong> Rancang Bangun Sistem Informasi Pengelolaan Event Berbasis Android pada Botanicology
              </p>
            </div>
          </div>

          <div className="edu-card fade-in visible">
            <div className="edu-card__icon" aria-hidden="true">🏫</div>
            <div className="edu-card__content">
              <h3 className="edu-card__degree">Teknik Komputer dan Jaringan</h3>
              <p className="edu-card__school">SMK Plus PGRI 1 Cibinong</p>
              <time className="edu-card__year" dateTime="2018/2021">2018 — 2021</time>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

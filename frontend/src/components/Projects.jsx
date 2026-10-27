export default function Projects() {
  const projects = [
    {
      title: 'Aplikasi Bank Sampah Berbasis Android',
      image: '/assets/images/banksa.webp',
      alt: 'Aplikasi Bank Sampah Berbasis Android',
      problem:
        'Pengelolaan tabungan sampah, pencatatan transaksi, dan jual beli sampah daur ulang masih berisiko dilakukan secara manual sehingga menyulitkan pemantauan saldo dan riwayat transaksi.',
      solution:
        'Mengembangkan aplikasi Android untuk mengelola tabungan digital nasabah, mencatat transaksi sampah, memantau saldo, serta mendukung proses jual beli sampah daur ulang.',
      result:
        'Menghasilkan aplikasi yang membantu proses pencatatan tabungan, pengelolaan transaksi, dan pemantauan data nasabah secara lebih terstruktur.',
      stack: ['Java', 'Android Studio', 'Firebase Authentication', 'Firebase Realtime Database'],
    },
    {
      title: 'Aplikasi Monitoring IoT Berbasis Android',
      image: '/assets/images/tampilan-iot.webp',
      alt: 'Aplikasi Monitoring IoT Berbasis Android',
      problem:
        'Pemantauan suhu dan kelembapan secara langsung membutuhkan alat yang dapat menampilkan kondisi lingkungan secara jelas dan mudah dibaca.',
      solution:
        'Mengembangkan aplikasi Android untuk memantau data suhu dan kelembapan dari perangkat sensor, serta menampilkan informasi tersebut pada running text agar kondisi lingkungan mudah dipantau.',
      result:
        'Menghasilkan sistem monitoring yang mengintegrasikan aplikasi Android, sensor, dan running text untuk menampilkan informasi suhu serta kelembapan..',
      stack: ['Java', 'Android Studio', 'Firebase Realtime Database'],
    },
    {
      title: 'Aplikasi Pengelolaan Event Berbasis Android',
      image: '/assets/images/exp.webp',
      alt: 'Aplikasi Pengelolaan Event Berbasis Android',
      problem:
        'Pengelolaan event menggunakan berbagai platform terpisah membuat data pendaftaran peserta kurang terintegrasi, proses absensi kurang praktis, dan pengingat kegiatan belum otomatis.',
      solution:
        'Merancang dan mengembangkan aplikasi Android untuk mengelola publikasi event, pendaftaran peserta, tiket digital berbasis QR Code, absensi, notifikasi, serta laporan kegiatan.',
      result:
        'Menghasilkan sistem pengelolaan event terintegrasi yang membantu penyelenggara mengelola pendaftaran, memverifikasi kehadiran peserta, dan memantau data kegiatan.',
      stack: ['Java', 'Android Studio', 'Firebase Authentication', 'Cloud Firestore', 'QR Code'],
    },
  ]

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header fade-in visible">
          <span className="section-tag">02 · Projects</span>
          <h2 id="projects-heading" className="section-title">Proyek</h2>
          <p className="section-subtitle">Beberapa proyek yang saya kerjakan</p>
        </div>

        <div className="projects__grid">
          {projects.map(proj => (
            <article
              key={proj.title}
              className="project-card fade-in visible"
              aria-label={`Proyek: ${proj.title}`}
            >
              <div className="project-card__image-wrap">
                <img
                  src={proj.image}
                  alt={proj.alt}
                  loading="lazy"
                  className="project-card__image"
                />
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{proj.title}</h3>
                <div className="project-psr">
                  <div className="psr-item">
                    <span className="psr-label psr-label--problem">Masalah</span>
                    <p>{proj.problem}</p>
                  </div>
                  <div className="psr-item">
                    <span className="psr-label psr-label--solution">Solusi</span>
                    <p>{proj.solution}</p>
                  </div>
                  <div className="psr-item">
                    <span className="psr-label psr-label--result">Hasil</span>
                    <p>{proj.result}</p>
                  </div>
                </div>
                <div className="project-card__stack">
                  {proj.stack.map(tech => (
                    <span key={tech} className="stack-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

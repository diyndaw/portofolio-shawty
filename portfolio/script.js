'use strict';

/* ── Helpers ─────────────────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ── Year ────────────────────────────────────────────────────────── */
const yearEl = $('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── Dark / Light Mode ───────────────────────────────────────────── */
const html = document.documentElement;
const themeBtn = $('#theme-toggle');
const STORAGE_KEY = 'portfolio-theme';

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEY, theme);
  if (themeBtn) themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

// Initialize
const savedTheme = localStorage.getItem(STORAGE_KEY)
  || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
applyTheme(savedTheme);

themeBtn?.addEventListener('click', () => {
  applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

/* ── Navbar scroll behavior ──────────────────────────────────────── */
const navbar = $('#navbar');
const backTop = $('#back-to-top');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 50;
  navbar?.classList.toggle('scrolled', scrolled);
  backTop?.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

backTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── Mobile menu ─────────────────────────────────────────────────── */
const hamburger   = $('#hamburger');
const mobileMenu  = $('#mobile-menu');
const mobileLinks = $$('.mobile-nav-link');

function closeMobileMenu() {
  mobileMenu?.classList.remove('open');
  mobileMenu?.setAttribute('aria-hidden', 'true');
  hamburger?.setAttribute('aria-expanded', 'false');
}

hamburger?.addEventListener('click', () => {
  const isOpen = mobileMenu?.classList.toggle('open');
  mobileMenu?.setAttribute('aria-hidden', String(!isOpen));
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

// Close on outside click
document.addEventListener('click', e => {
  if (!navbar?.contains(e.target)) closeMobileMenu();
});

/* ── Active nav link on scroll ───────────────────────────────────── */
const sections  = $$('section[id]');
const navLinks  = $$('.nav-link');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach(s => sectionObserver.observe(s));

/* ── Fade-in on scroll ───────────────────────────────────────────── */
const fadeEls = $$('.fade-in');

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      // Stagger within a group
      const delay = entry.target.closest('.skills__groups, .projects__grid, .timeline, .edu-grid, .album-grid')
        ? Array.from(entry.target.parentElement.children).indexOf(entry.target) * 80
        : 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => fadeObserver.observe(el));

/* ── Smooth anchor scroll ────────────────────────────────────────── */
$$('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = $(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    closeMobileMenu();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Update URL without jump
    history.pushState(null, '', link.getAttribute('href'));
  });
});


/* ══════════════════════════════════════════════════════════════════
   DATA GALERI (SERTIFIKAT & KEGIATAN KULIAH)
   Semua data disimpan dalam satu array / object agar mudah diperbarui.
   - certificates: { title, issuer, year, image, link, featured }
     (urutan: featured dulu, lalu tahun terbaru ke terlama)
   - albums: { title, year, category, cover, photos: [{ src, caption }] }
══════════════════════════════════════════════════════════════════ */
const galleryData = {
  certificates: [
    // ── TAHUN 2026 ───────────────────────────────────────────────────
    {
      title: 'NVIDIA Campus Roadshow',
      issuer: 'NVIDIA',
      year: '2026',
      category: 'Data & AI',
      image: 'assets/image/sertifikat/2026 - NVIDIA Campus Roadshow_page-0001.webp',
      link: ''
    },
    {
      title: 'Benchmarking',
      issuer: 'Universitas Respati Indonesia',
      year: '2026',
      category: 'Kepemimpinan & Organisasi',
      image: 'assets/image/sertifikat/2026-Benchmarking.webp',
      link: ''
    },
    {
      title: 'Workshop PT SRIKANDI',
      issuer: 'PT Srikandi',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026-Workshop PT-SRIKANDI.webp',
      link: ''
    },
    {
      title: 'Workshop: Manifesting Your Future',
      issuer: 'Universitas Respati Indonesia',
      year: '2026',
      category: 'Akademik',
      image: 'assets/image/sertifikat/2026-Workshop-Manifesting-Your-Future.webp',
      link: ''
    },
    {
      title: 'Algoritma & Pemrograman Dasar',
      issuer: 'CODEPOLITAN',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026-CODEPOLITAN-Algoritma-Pemrograman-Dasar.webp',
      link: ''
    },
    {
      title: 'Belajar Git Pemula',
      issuer: 'CODEPOLITAN',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026-CODEPOLITAN-Belajar-Git-Pemula.webp',
      link: ''
    },
    {
      title: 'Belajar PHP untuk Pemula',
      issuer: 'CODEPOLITAN',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026-CODEPOLITAN-Belajar-PHP-untuk-Pemula.webp',
      link: ''
    },
    {
      title: 'Dasar HTML',
      issuer: 'CODEPOLITAN',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026 - CODEPOLITAN - Dasar HTML.webp',
      link: ''
    },
    {
      title: 'Dasar CSS',
      issuer: 'CODEPOLITAN',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026 - CODEPOLITAN - Dasar CSS.webp',
      link: ''
    },
    {
      title: 'Bootstrap CSS Framework',
      issuer: 'CODEPOLITAN',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026 - CODEPOLITAN - Bootstrap CSS Framework.webp',
      link: ''
    },
    {
      title: 'Halaman Website Portofolio Menggunakan Tailwind CSS',
      issuer: 'CODEPOLITAN',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026 - CODEPOLITAN - Halaman Website Portofolio Menggunakan Tailwind CSS.webp',
      link: ''
    },
    {
      title: 'Pengenalan Database Menggunakan MySQL',
      issuer: 'CODEPOLITAN',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026 - CODEPOLITAN - Pengenalan Database Menggunakan MySQL.webp',
      link: ''
    },
    {
      title: 'Konsep Dasar Pemrograman Berorientasi Objek di PHP',
      issuer: 'CODEPOLITAN',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026 - CODEPOLITAN - Konsep Dasar Pemrograman Berorientasi Objek di PHP.webp',
      link: ''
    },
    {
      title: 'Penggunaan Database MySQL pada Pemrograman PHP',
      issuer: 'CODEPOLITAN',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026 - CODEPOLITAN - Penggunaan Database MySQL pada Pemrograman PHP.webp',
      link: ''
    },
    {
      title: 'Landing Page Website dengan Bootstrap 4',
      issuer: 'CODEPOLITAN',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026 - CODEPOLITAN - Landing Page Website dengan Bootstrap 4.webp',
      link: ''
    },
    {
      title: 'Menguasai Framework CodeIgniter',
      issuer: 'CODEPOLITAN',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026 - CODEPOLITAN- Menguasai Framework CodeIgniter.webp',
      link: ''
    },
    {
      title: 'Membangun Website Toko Online Berbasis CodeIgniter',
      issuer: 'CODEPOLITAN',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026 - CODEPOLITAN - Membangun Website Toko Online Berbasis CodeIgniter.webp',
      link: ''
    },
    {
      title: 'Laravel 11 Membuat Backend Aplikasi Social Media dengan REST API',
      issuer: 'CODEPOLITAN',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026 - CODEPOLITAN - Laravel 11 Membuat Backend Aplikasi Social Media dengan REST API.webp',
      link: ''
    },
    {
      title: 'Pengembangan Web Fullstack dengan Laravel 11',
      issuer: 'CODEPOLITAN',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026 - CODEPOLITAN - Pengembangan Web Fullstack dengan Laravel 11.webp',
      link: ''
    },
    {
      title: 'Mengembangkan Aplikasi Restoran berbasis QR dengan Laravel 12',
      issuer: 'CODEPOLITAN',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026 - CODEPOLITAN - Mengembangkan Aplikasi Restoran berbasis QR dengan Laravel 12.webp',
      link: ''
    },
    {
      title: 'Terminal atau CMD',
      issuer: 'CODEPOLITAN',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026 - CODEPOLITAN - Terminal atau CMD.webp',
      link: ''
    },
    {
      title: 'Text Editor',
      issuer: 'CODEPOLITAN',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026 - CODEPOLITAN - Text Editor.webp',
      link: ''
    },
    {
      title: 'Pemrograman Komputer',
      issuer: 'CODEPOLITAN',
      year: '2026',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2026 - CODEPOLITAN - Pemrograman Komputer.webp',
      link: ''
    },

    // ── TAHUN 2025 ───────────────────────────────────────────────────
    {
      title: 'Capstone Project IoT',
      issuer: 'Universitas Respati Indonesia',
      year: '2025',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2025-Capstone-Project-IoT.webp',
      link: ''
    },
    {
      title: 'Seminar AI & Machine Learning',
      issuer: 'Universitas Respati Indonesia',
      year: '2025',
      category: 'Data & AI',
      image: 'assets/image/sertifikat/2025-Seminar-AI.webp',
      link: ''
    },
    {
      title: 'Workshop Robotic',
      issuer: 'Universitas Respati Indonesia',
      year: '2025',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2025-Workshop-Robotic.webp',
      link: ''
    },

    // ── TAHUN 2024 ───────────────────────────────────────────────────
    {
      title: 'Pembuat Aplikasi Bank Sampah',
      issuer: 'Universitas Respati Indonesia',
      year: '2024',
      category: 'Teknologi',
      image: 'assets/image/sertifikat/2024-Sertifikat-Magang.webp',
      link: '',
      tag: 'Pengembangan Aplikasi'
    },
    {
      title: 'Narasumber Sosialisasi Perancangan Aplikasi Purwarupa Program Aplikasi Bank Sampah',
      issuer: 'Universitas Respati Indonesia',
      year: '2024',
      category: 'Pengabdian & Pengajaran',
      image: 'assets/image/sertifikat/2024-Penghargaan-Narasumber.webp',
      link: '',
      tag: 'Pengabdian Kepada Masyarakat'
    },
    {
      title: 'Logic Test Samsung Innovation Campus Batch 6',
      issuer: 'Samsung Innovation Campus',
      year: '2024',
      category: 'Data & AI',
      image: 'assets/image/sertifikat/2024-SIC6.webp',
      link: '',
      tag: 'Artificial Intelligence'
    },
    {
      title: 'Mini Course; Intro To Data Analytics',
      issuer: 'RevoU',
      year: '2024',
      category: 'Data & AI',
      image: 'assets/image/sertifikat/2024-RevoU.webp',
      link: '',
      tag: 'Data Analytics'
    },

    // ── TAHUN 2023 ───────────────────────────────────────────────────
    {
      title: '#Brand VINDES: Maximizing Brand Strategy through Digital Marketing and Collaboration',
      issuer: 'Belajarlagi',
      year: '2023',
      category: 'Lainnya',
      image: 'assets/image/sertifikat/2023-VINDES.webp',
      link: '',
      tag: 'Digital Marketing'
    },

    // ── TAHUN 2022 ───────────────────────────────────────────────────
    {
      title: 'Pengenalan Kehidupan Kampus bagi Mahasiswa Baru',
      issuer: 'Universitas Respati Indonesia',
      year: '2022',
      category: 'Akademik',
      image: 'assets/image/sertifikat/2022-PKKMB.webp',
      link: '',
      tag: 'Akademik'
    },
    {
      title: 'Latihan Kepemimpinan Mahasiswa',
      issuer: 'Universitas Respati Indonesia',
      year: '2022',
      category: 'Kepemimpinan & Organisasi',
      image: 'assets/image/sertifikat/2022-LKM.webp',
      link: '',
      tag: 'Kepemimpinan'
    }
  ],
  albums: [
    {
      title: 'Mentoring ARCC 2026',
      photos: [
        {
          src: 'assets/image/kegiatan/arcc/mentoring5.webp',
          caption: 'ARCC, Pekan Halal Indonesia'
        },
        {
          src: 'assets/image/kegiatan/arcc/mentoring2.webp',
          caption: 'Juara 1 dan Juara 2 Coding Scratch'
        },
        {
          src: 'assets/image/kegiatan/arcc/mentoring1.webp',
          caption: 'Juara 1 dan Juara 2 Coding Scratch'
        },
        {
          src: 'assets/image/kegiatan/arcc/mentoring4.webp',
          caption: 'Coding Scratch'
        },
        {
          src: 'assets/image/kegiatan/arcc/coding.webp',
          caption: 'Coding Scratch'
        },
        {
          src: 'assets/image/kegiatan/arcc/sb.webp',
          caption: 'Speed Building'
        },
        {
          src: 'assets/image/kegiatan/arcc/mentoring3.webp',
          caption: 'AIRO'
        }
      ]
    },
    {
      title: 'Mentoring KOSSMI 2026',
      photos: [
        {
          src: 'assets/image/kegiatan/kossmi26/mentoring9.webp',
          caption: 'Babak Final KOSSMI 2026 tingkat Nasional'
        },
        {
          src: 'assets/image/kegiatan/kossmi26/mentoring8.webp',
          caption: 'Robot Leanbot'
        },
        {
          src: 'assets/image/kegiatan/kossmi26/mentoring6.webp',
          caption: 'Mendapatkan medali Perunggu'
        },
        {
          src: 'assets/image/kegiatan/kossmi26/mentoring7.webp',
          caption: 'Mendapatkan medali Perunggu'
        },
        {
          src: 'assets/image/kegiatan/kossmi26/mentoring11.webp',
          caption: 'Persiapan final'
        },
        {
          src: 'assets/image/kegiatan/kossmi26/mentoring12.webp',
          caption: 'Persiapan final'
        },
        {
          src: 'assets/image/kegiatan/kossmi26/mentoring10.webp',
          caption: 'Arena Leanbot'
        },
        {
          src: 'assets/image/kegiatan/kossmi26/mentoring13.webp',
          caption: 'Babak penyisihan membuat smart gorden berbasis IoT'
        },
        {
          src: 'assets/image/kegiatan/kossmi26/iot.webp',
          caption: 'Babak penyisihan membuat smart gorden berbasis IoT'
        }
      ]
    },
    {
      title: 'Ekstrakurikuler Robotic',
      photos: [
        {
          src: 'assets/image/kegiatan/robotic/demo-robot-2026.webp',
          caption: 'Demo ekskul robotic'
        },
        {
          src: 'assets/image/kegiatan/robotic/robot5.webp',
          caption: 'Kegiatan ekskul robotic'
        },
        {
          src: 'assets/image/kegiatan/robotic/robot1.webp',
          caption: 'Kegiatan ekskul robotic'
        },
        {
          src: 'assets/image/kegiatan/robotic/robot2.webp',
          caption: 'Kegiatan ekskul robotic'
        },
        {
          src: 'assets/image/kegiatan/robotic/robot3.webp',
          caption: 'Kegiatan ekskul robotic'
        },
        {
          src: 'assets/image/kegiatan/robotic/robot4.webp',
          caption: 'Kegiatan ekskul robotic'
        },
        {
          src: 'assets/images/airo_3.webp',
          caption: 'Robot Alpha 1E'
        }
      ]
    },
    {
      title: 'Ekstrakurikuler Scratch',
      photos: [
        {
          src: 'assets/image/kegiatan/scratch/scratch1.webp',
          caption: 'Kegiatan Pembelajaran Scratch'
        },
        {
          src: 'assets/image/kegiatan/scratch/scratch2.webp',
          caption: 'Dokumentasi Scratch - Sesi 2'
        },
        {
          src: 'assets/image/kegiatan/scratch/demo-scratch1.webp',
          caption: 'Demo Scratch Project'
        }
      ]
    },
    {
      title: 'LAM INFOKOM 2025',
      photos: [
        {
          src: 'assets/image/kegiatan/laminfokom/lam-infokom1.webp',
          caption: 'Sosialisasi & Pendalaman Instrumen Akreditasi 2.0 LAM INFOKOM'
        },
        {
          src: 'assets/image/kegiatan/laminfokom/lam-infokom-7.webp',
          caption: 'Registrasi tamu'
        },
        {
          src: 'assets/image/kegiatan/laminfokom/lam-infokom-6.webp',
          caption: 'Kegiatan LAM INFOKOM'
        },
        {
          src: 'assets/image/kegiatan/laminfokom/lam-infokom3.webp',
          caption: 'LAM INFOKOM hari kedua'
        },
        {
          src: 'assets/image/kegiatan/laminfokom/lam-infokom2.webp',
          caption: 'Registrasi tamu di hari kedua'
        },
        {
          src: 'assets/image/kegiatan/laminfokom/lam-infokom-5.webp',
          caption: 'Registrasi tamu di hari kedua'
        },
        {
          src: 'assets/image/kegiatan/laminfokom/lam-infokom-4.webp',
          caption: 'Banner LAM INFOKOM'
        }
      ]
    },
    {
      title: 'Magang MBKM',
      photos: [
        {
          src: 'assets/image/kegiatan/magang/banksam3.webp',
          caption: 'Kegiatan Pengabdian Kepada Masyarakat'
        },
        {
          src: 'assets/images/bank_sam.webp',
          caption: 'Kegiatan Pengabdian Kepada Masyarakat'
        },
        {
          src: 'assets/image/sertifikat/2024-Sertifikat-Magang.webp',
          caption: 'Sertifikat Magang'
        },
        {
          src: 'assets/image/sertifikat/2024-Penghargaan-Narasumber.webp',
          caption: 'Sertifikat Penghargaan Narasumber'
        },
        {
          src: 'assets/image/kegiatan/magang/banksam5.webp',
          caption: 'Diskusi dengan Mentor'
        },
        {
          src: 'assets/image/kegiatan/magang/banksam1.webp',
          caption: 'Buku tabungan warga'
        },
        {
          src: 'assets/image/kegiatan/magang/banksam11.webp',
          caption: 'Kegiatan pekerja di Bank Sampah'
        },
        {
          src: 'assets/image/kegiatan/magang/banksam6.webp',
          caption: 'Pemilihan sampah daur ulang'
        }
      ]
    },
    {
      title: 'Kegiatan Lainnya',
      photos: [
        {
          src: 'assets/image/kegiatan/lainnya/panitia1.webp',
          caption: 'Panitia Seminar'
        },
        {
          src: 'assets/image/kegiatan/lainnya/pkkmb-alpha.webp',
          caption: 'Kegiatan PKKMB 2025'
        },
        {
          src: 'assets/image/kegiatan/lainnya/lomba-akpjt.webp',
          caption: 'Peserta Lomba Robotic AKPJT 2025'
        },
        {
          src: 'assets/image/kegiatan/lainnya/lomba-akpjt1.webp',
          caption: 'Peserta Lomba Robotic AKPJT 2025'
        },
        {
          src: 'assets/image/kegiatan/lainnya/pkkmb-2024.webp',
          caption: 'Kegiatan PKKMB 2024'
        }
      ]
    }
  ]
};

const certificates = galleryData.certificates;
const albums = galleryData.albums;

/**
 * Data foto dokumentasi pengalaman kerja & organisasi.
 * Format: { experienceId, src, caption }
 */
const experiencePhotos = [
  // ── Asisten Laboratorium (URI) ──────────────────────────────────
  {
    experienceId: 'aslab',
    src: 'assets/images/ket_aslab.webp',
    caption: 'Surat keterangan Asisten Laboratorium.'
  },
  {
    experienceId: 'aslab',
    src: 'assets/images/airo_1.webp',
    caption: 'Pendampingan kegiatan robotik kepada siswa-siswi.'
  },
  {
    experienceId: 'aslab',
    src: 'assets/images/airo_2.webp',
    caption: 'Mentoring kegiatan lomba KOSSMI 2026 tingkat nasional di Universitas Telkom.'
  },
  {
    experienceId: 'aslab',
    src: 'assets/images/airo_3.webp',
    caption: 'Humanoid Robot ; Alpha 1E.'
  },

  // ── Android Developer (Bank Sampah Sumber Jaya) ─────────────────
  {
    experienceId: 'android-dev',
    src: 'assets/images/ket_mgg.webp',
    caption: 'Surat keterangan magang.'
  },
  {
    experienceId: 'android-dev',
    src: 'assets/images/sertif_1.webp',
    caption: 'Sertifikat magang.'
  },
  {
    experienceId: 'android-dev',
    src: 'assets/images/sertif_2.webp',
    caption: 'Penghargaan Narasumber.'
  },
  {
    experienceId: 'android-dev',
    src: 'assets/images/bank_sam.webp',
    caption: 'Kegiatan Pengabdian Kepada Masyarakat.'
  },

  // ── Customer Service (Toko Online IGO Indonesia) ───────────────
  {
    experienceId: 'cs-igo',
    src: 'assets/images/ket_igo.webp',
    caption: 'Surat keterangan bekerja.'
  }
];

// Fallback SVG image bila file foto bermasalah/offline
const placeholderSvgFallback = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%231e1e2a'/%3E%3Cpath d='M140 180l40-50 50 60h-90zm90-20l30 40h-60l30-40z' fill='%236366f1'/%3E%3Ccircle cx='160' cy='110' r='14' fill='%23a855f7'/%3E%3Ctext x='50%25' y='245' text-anchor='middle' fill='%238888a8' font-family='sans-serif' font-size='13' font-weight='600'%3EDokumentasi Foto%3C/text%3E%3C/svg%3E";

/* ── Lightbox State & Elements ───────────────────────────────────── */
const lightboxEl        = $('#lightbox');
const lightboxBackdrop  = $('#lightbox-backdrop');
const lightboxCloseBtn  = $('#lightbox-close');
const lightboxPrevBtn   = $('#lightbox-prev');
const lightboxNextBtn   = $('#lightbox-next');
const lightboxImg       = $('#lightbox-img');
const lightboxCaption   = $('#lightbox-caption');
const lightboxCounter   = $('#lightbox-counter');

let activeGalleryPhotos = [];
let activePhotoIndex    = 0;
let lastFocusedElement  = null;

/**
 * Render foto yang aktif ke dalam elemen Lightbox
 */
function renderLightboxPhoto(index) {
  if (!activeGalleryPhotos.length) return;
  activePhotoIndex = (index + activeGalleryPhotos.length) % activeGalleryPhotos.length;
  const photo = activeGalleryPhotos[activePhotoIndex];

  if (lightboxImg) {
    lightboxImg.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.96)';

    setTimeout(() => {
      lightboxImg.src = photo.src;
      lightboxImg.alt = photo.caption || 'Foto dokumentasi';
      lightboxImg.onerror = function() {
        this.onerror = null;
        this.src = placeholderSvgFallback;
      };

      if (lightboxCaption) lightboxCaption.textContent = photo.caption || '';
      if (lightboxCounter) {
        lightboxCounter.textContent = `${activePhotoIndex + 1} / ${activeGalleryPhotos.length}`;
      }

      lightboxImg.style.opacity = '1';
      lightboxImg.style.transform = 'scale(1)';
    }, 120);
  }
}

/**
 * Buka Lightbox dengan koleksi foto (mendukung sertifikat, kegiatan, atau pengalaman)
 */
function openLightbox(photos, startIndex = 0, triggerEl = null) {
  if (!photos || !photos.length || !lightboxEl) return;

  // Normalisasi objek foto agar fleksibel
  activeGalleryPhotos = photos.map(p => {
    let caption = p.caption;
    if (!caption && p.title) {
      caption = `${p.title}${p.issuer ? ' — ' + p.issuer : ''}${p.year ? ' (' + p.year + ')' : ''}`;
    }
    return {
      src: p.src || p.image,
      caption: caption || 'Dokumentasi'
    };
  });

  lastFocusedElement = triggerEl || document.activeElement;

  lightboxEl.removeAttribute('hidden');
  lightboxEl.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  renderLightboxPhoto(startIndex);
  setTimeout(() => lightboxCloseBtn?.focus(), 80);
}

/**
 * Tutup Lightbox dan kembalikan fokus ke elemen pemicu
 */
function closeLightbox() {
  if (!lightboxEl || lightboxEl.hasAttribute('hidden')) return;

  lightboxEl.setAttribute('hidden', '');
  lightboxEl.setAttribute('aria-hidden', 'true');

  // Jika modal semua sertifikat masih terbuka, kunci scroll body tetap dipertahankan
  if (!certModalModule.isOpen()) {
    document.body.style.overflow = '';
  }

  activeGalleryPhotos = [];
  activePhotoIndex = 0;

  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

function showPrevPhoto() {
  renderLightboxPhoto(activePhotoIndex - 1);
}

function showNextPhoto() {
  renderLightboxPhoto(activePhotoIndex + 1);
}

// Event listener tombol kontrol Lightbox
lightboxCloseBtn?.addEventListener('click', closeLightbox);
lightboxBackdrop?.addEventListener('click', closeLightbox);
lightboxPrevBtn?.addEventListener('click', showPrevPhoto);
lightboxNextBtn?.addEventListener('click', showNextPhoto);

// Tutup lightbox jika klik di luar gambar / container
lightboxEl?.addEventListener('click', e => {
  if (e.target === lightboxEl || e.target === lightboxBackdrop) {
    closeLightbox();
  }
});

// Navigasi keyboard (Esc untuk tutup, Panah Kiri/Kanan untuk ganti foto, Focus trap)
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    // 1. Jika lightbox terbuka, tutup HANYA lightbox (modal tetap terbuka)
    if (lightboxEl && !lightboxEl.hasAttribute('hidden')) {
      e.preventDefault();
      closeLightbox();
      return;
    }
    // 2. Jika modal sertifikat terbuka dan lightbox tidak terbuka, tutup modal sertifikat
    if (certModalModule.isOpen()) {
      e.preventDefault();
      closeCertModal();
      return;
    }
  } else if (e.key === 'ArrowLeft') {
    if (lightboxEl && !lightboxEl.hasAttribute('hidden')) {
      e.preventDefault();
      showPrevPhoto();
    }
  } else if (e.key === 'ArrowRight') {
    if (lightboxEl && !lightboxEl.hasAttribute('hidden')) {
      e.preventDefault();
      showNextPhoto();
    }
  } else if (e.key === 'Tab') {
    // Focus trap di Lightbox (prioritas tertinggi saat lightbox aktif)
    if (lightboxEl && !lightboxEl.hasAttribute('hidden')) {
      const focusable = [lightboxCloseBtn, lightboxPrevBtn, lightboxNextBtn].filter(el => el && !el.disabled);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
      return;
    }

    // Focus trap di Modal Semua Sertifikat saat aktif
    if (certModalModule.isOpen()) {
      const modalEl = $('#cert-modal');
      if (!modalEl) return;
      const focusable = modalEl.querySelectorAll(
        'button:not([disabled]):not([hidden]), input:not([disabled]):not([hidden]), [tabindex]:not([tabindex="-1"])'
      );
      const visibleFocusable = Array.from(focusable).filter(el => el.offsetParent !== null);
      if (!visibleFocusable.length) return;
      const first = visibleFocusable[0];
      const last = visibleFocusable[visibleFocusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
});

// Dukungan Swipe gesture di layar sentuh HP
let touchStartX = 0;
let touchStartY = 0;

lightboxEl?.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

lightboxEl?.addEventListener('touchend', e => {
  const touchEndX = e.changedTouches[0].screenX;
  const touchEndY = e.changedTouches[0].screenY;
  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;

  if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX > 0) {
      showPrevPhoto();
    } else {
      showNextPhoto();
    }
  }
}, { passive: true });

/**
 * ── HALAMAN UTAMA: SERTIFIKAT TERBARU ───────────────────────────────
 * Tampilkan 6 sertifikat paling baru, diurutkan dari tahun terbaru ke terlama.
 */
function renderFeaturedCertificates() {
  const container = $('#cert-featured-grid');
  const btnText = $('#btn-open-cert-modal-text');
  const openModalBtn = $('#btn-open-cert-modal');

  if (!container) return;
  container.innerHTML = '';

  const totalCount = galleryData.certificates.length;
  if (btnText) {
    btnText.textContent = `Lihat Semua Sertifikat (${totalCount})`;
  }

  // Bind click tombol buka modal semua sertifikat
  openModalBtn?.addEventListener('click', () => {
    openCertModal(openModalBtn);
  });

  // Urutkan sertifikat dari tahun terbaru ke terlama
  const sortedCertificates = [...galleryData.certificates].sort(
    (a, b) => parseInt(b.year, 10) - parseInt(a.year, 10)
  );

  const displayedCards = sortedCertificates.slice(0, 6);

  displayedCards.forEach((cert, idx) => {
    const card = document.createElement('article');
    card.className = 'cert-card fade-in visible';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-haspopup', 'dialog');
    card.setAttribute('aria-label', `Sertifikat ${cert.title} dari ${cert.issuer} (${cert.year})`);

    const hasLink = Boolean(cert.link && cert.link.trim() !== '');

    card.innerHTML = `
      <div class="cert-card__media-wrap">
        <button type="button" class="cert-card__media" aria-label="Perbesar foto: ${cert.title}">
          <img
            src="${cert.image}"
            alt="Sertifikat ${cert.title} dari ${cert.issuer} (${cert.year})"
            width="400"
            height="300"
            loading="lazy"
            decoding="async"
            class="cert-card__img"
            onerror="this.onerror=null;this.src='${placeholderSvgFallback}';"
          />
          <div class="cert-card__overlay" aria-hidden="true">
            <span class="cert-card__zoom-badge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="14"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
              Perbesar
            </span>
          </div>
        </button>
      </div>
      <div class="cert-card__body">
        <div class="cert-card__header-meta">
          <time class="cert-card__year" datetime="${cert.year}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="cert-card__year-icon" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            ${cert.year}
          </time>
        </div>
        <h3 class="cert-card__title">${cert.title}</h3>
        <p class="cert-card__issuer">${cert.issuer}</p>
        ${hasLink ? `
          <div class="cert-card__footer">
            <a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="cert-card__link-btn" aria-label="Lihat Kredensial ${cert.title} (buka tab baru)">
              <span>Lihat Kredensial</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        ` : ''}
      </div>
    `;

    const openFeaturedLightbox = () => {
      const photos = displayedCards.map(c => ({
        src: c.image,
        caption: `${c.title} — ${c.issuer} (${c.year})`
      }));
      openLightbox(photos, idx, card);
    };

    const mediaBtn = card.querySelector('.cert-card__media');
    mediaBtn?.addEventListener('click', e => {
      e.stopPropagation();
      openFeaturedLightbox();
    });

    card.addEventListener('click', e => {
      if (e.target.closest('a')) return;
      openFeaturedLightbox();
    });

    card.addEventListener('keydown', e => {
      if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('a')) {
        e.preventDefault();
        openFeaturedLightbox();
      }
    });

    container.appendChild(card);
  });
}

/**
 * ── MODAL PANEL SEMUA SERTIFIKAT ──────────────────────────────────
 * Menampilkan seluruh daftar sertifikat dalam format grid thumbnail rapat.
 * Klik thumbnail membuka Lightbox dengan keterangan lengkap.
 */
const certModalModule = (function() {
  let modalBatchCount = 1;
  const BATCH_SIZE = 24;
  let lastModalTrigger = null;

  const modalEl        = $('#cert-modal');
  const backdropEl     = $('#certmodal-backdrop');
  const closeBtnEl     = $('#certmodal-close');
  const titleCountEl   = $('#certmodal-title-count');
  const gridEl         = $('#certmodal-grid');
  const moreWrapEl     = $('#certmodal-more-wrap');
  const moreBtnEl      = $('#certmodal-btn-more');
  const moreBtnTextEl  = $('#certmodal-btn-more-text');

  let isEventsBound = false;

  function renderGrid() {
    if (!gridEl) return;
    gridEl.innerHTML = '';

    const allCerts = galleryData.certificates;
    const totalCount = allCerts.length;

    // Progressive Batch Display (24 per batch)
    const displayedCount = Math.min(modalBatchCount * BATCH_SIZE, totalCount);
    const batchList = allCerts.slice(0, displayedCount);

    batchList.forEach((cert, idx) => {
      const thumb = document.createElement('button');
      thumb.type = 'button';
      thumb.className = 'certmodal-thumb fade-in visible';
      thumb.setAttribute('aria-label', `Perbesar sertifikat: ${cert.title} dari ${cert.issuer} (${cert.year})`);

      thumb.innerHTML = `
        <div class="certmodal-thumb__img-wrap">
          <img
            src="${cert.image}"
            alt="Sertifikat ${cert.title} dari ${cert.issuer} (${cert.year})"
            width="300"
            height="225"
            loading="lazy"
            decoding="async"
            class="certmodal-thumb__img"
            onerror="this.onerror=null;this.src='${placeholderSvgFallback}';"
          />
          <div class="certmodal-thumb__overlay" aria-hidden="true">
            <span class="certmodal-thumb__title">${cert.title}</span>
            <span class="certmodal-thumb__issuer">${cert.issuer}</span>
            <span class="certmodal-thumb__year">${cert.year}</span>
          </div>
        </div>
        <div class="certmodal-thumb__touch-caption" aria-hidden="true">
          <span class="certmodal-thumb__touch-title">${cert.title}</span>
        </div>
      `;

      thumb.addEventListener('click', () => {
        // Caption lightbox: "Judul — Penerbit (Tahun)"
        const lightboxPhotos = allCerts.map(c => ({
          src: c.image,
          caption: `${c.title} — ${c.issuer} (${c.year})`
        }));
        openLightbox(lightboxPhotos, idx, thumb);
      });

      gridEl.appendChild(thumb);
    });

    // Handle Tombol "Muat lebih banyak"
    if (moreWrapEl) {
      const hasMore = displayedCount < totalCount;
      moreWrapEl.hidden = !hasMore;
      if (hasMore && moreBtnTextEl) {
        moreBtnTextEl.textContent = `Muat lebih banyak (${totalCount - displayedCount} tersisa)`;
      }
    }
  }

  function bindEvents() {
    if (isEventsBound) return;
    isEventsBound = true;

    closeBtnEl?.addEventListener('click', closeCertModal);
    backdropEl?.addEventListener('click', closeCertModal);

    // Muat lebih banyak batch
    moreBtnEl?.addEventListener('click', () => {
      modalBatchCount++;
      renderGrid();
    });
  }

  function open(triggerEl = null) {
    if (!modalEl) return;
    lastModalTrigger = triggerEl || document.activeElement;

    modalEl.removeAttribute('hidden');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (titleCountEl) {
      titleCountEl.textContent = `(${galleryData.certificates.length})`;
    }

    modalBatchCount = 1;
    bindEvents();
    renderGrid();

    setTimeout(() => {
      closeBtnEl?.focus();
    }, 80);
  }

  function close() {
    if (!modalEl || modalEl.hasAttribute('hidden')) return;

    modalEl.setAttribute('hidden', '');
    modalEl.setAttribute('aria-hidden', 'true');

    // Pulihkan scroll body jika lightbox tidak sedang terbuka
    if (!lightboxEl || lightboxEl.hasAttribute('hidden')) {
      document.body.style.overflow = '';
    }

    if (lastModalTrigger && typeof lastModalTrigger.focus === 'function') {
      lastModalTrigger.focus();
    }
  }

  return {
    open,
    close,
    renderGrid,
    isOpen: () => modalEl && !modalEl.hasAttribute('hidden')
  };
})();

function openCertModal(triggerEl) {
  certModalModule.open(triggerEl);
}

function closeCertModal() {
  certModalModule.close();
}

function renderCertModalGrid(filters) {
  certModalModule.renderGrid();
}

/**
 * Grid Album Kegiatan Kuliah
 * Sampul/thumbnail diambil langsung dari foto pertama kegiatan.
 * Di dalam kartu terdapat pratinjau foto-foto kegiatan,
 * dan saat diklik langsung membuka Lightbox untuk melihat seluruh foto lainnya yang lebih banyak.
 */
function renderAlbums() {
  const grid = $('#album-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const allAlbums = galleryData.albums || [];

  allAlbums.forEach(album => {
    const card = document.createElement('article');
    card.className = 'album-card fade-in visible';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-haspopup', 'dialog');
    card.setAttribute('aria-label', `Buka kegiatan ${album.title} (${album.photos.length} foto)`);

    // Ambil thumbnail/sampul langsung dari foto pertama
    const firstPhoto = (album.photos && album.photos[0]) || { src: placeholderSvgFallback, caption: album.title };
    const coverSrc = firstPhoto.src || placeholderSvgFallback;
    const photoCount = album.photos ? album.photos.length : 0;

    card.innerHTML = `
      <div class="album-card__cover-wrap">
        <span class="album-card__count-badge">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          ${photoCount} foto
        </span>
        <img
          src="${coverSrc}"
          alt="Foto utama ${album.title}"
          width="600"
          height="375"
          loading="lazy"
          class="album-card__cover"
          onerror="this.onerror=null;this.src='${placeholderSvgFallback}';"
        />
        <div class="album-card__overlay" aria-hidden="true">
          <span class="album-card__action-hint">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8" x2="11" y2="14"/>
              <line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
            Lihat Semua Foto
          </span>
        </div>
      </div>
      <div class="album-card__body">
        <h3 class="album-card__title">${album.title}</h3>
      </div>
    `;

    const openAlbumLightbox = () => {
      openLightbox(album.photos, 0, card);
    };

    card.addEventListener('click', openAlbumLightbox);

    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openAlbumLightbox();
      }
    });

    grid.appendChild(card);
  });
}

/**
 * Inisialisasi Tab Galeri (Sertifikat & Kegiatan Kuliah)
 * Dengan animasi fade dan navigasi keyboard (role="tablist", aria-selected)
 */
function initGalleryTabs() {
  const tabBtns = $$('.gallery-tab');
  const panels = $$('.gallery-panel');

  if (!tabBtns.length || !panels.length) return;

  function switchTab(selectedTab, setFocus = true) {
    const targetPanelId = selectedTab.getAttribute('aria-controls');

    tabBtns.forEach(btn => {
      const isActive = btn === selectedTab;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
      btn.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    panels.forEach(panel => {
      if (panel.id === targetPanelId) {
        panel.hidden = false;
        panel.classList.add('active');
        requestAnimationFrame(() => {
          panel.classList.add('fade-in-show');
        });
      } else {
        panel.classList.remove('fade-in-show');
        panel.classList.remove('active');
        panel.hidden = true;
      }
    });

    if (setFocus) {
      selectedTab.focus();
    }
  }

  tabBtns.forEach((tab, index) => {
    tab.addEventListener('click', () => switchTab(tab, false));

    tab.addEventListener('keydown', e => {
      let nextIndex = null;
      if (e.key === 'ArrowRight') {
        nextIndex = (index + 1) % tabBtns.length;
      } else if (e.key === 'ArrowLeft') {
        nextIndex = (index - 1 + tabBtns.length) % tabBtns.length;
      } else if (e.key === 'Home') {
        nextIndex = 0;
      } else if (e.key === 'End') {
        nextIndex = tabBtns.length - 1;
      }

      if (nextIndex !== null) {
        e.preventDefault();
        switchTab(tabBtns[nextIndex], true);
      }
    });
  });

  const activePanel = $('.gallery-panel.active');
  if (activePanel) {
    activePanel.classList.add('fade-in-show');
  }
}

/**
 * Inisialisasi Galeri Dokumentasi pada setiap kartu Experience
 */
function initExperienceGalleries() {
  const galleryContainers = $$('.doc-gallery[data-experience-id]');

  galleryContainers.forEach(container => {
    const experienceId = container.getAttribute('data-experience-id');
    const photos = experiencePhotos.filter(p => p.experienceId === experienceId);

    if (!photos.length) return;

    const maxVisible = 4;
    const visiblePhotos = photos.slice(0, maxVisible);
    const hasMore = photos.length > maxVisible;
    const remainingCount = photos.length - maxVisible;

    container.innerHTML = '';

    const label = document.createElement('div');
    label.className = 'doc-gallery__label';
    label.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span>Dokumentasi (${photos.length} foto)</span>
    `;
    container.appendChild(label);

    const strip = document.createElement('div');
    strip.className = 'doc-gallery__strip';

    visiblePhotos.forEach((photo, idx) => {
      const isLastWithMore = hasMore && idx === maxVisible - 1;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `doc-thumb${isLastWithMore ? ' doc-thumb--more' : ''}`;

      if (isLastWithMore) {
        btn.setAttribute('aria-label', `Lihat foto dokumentasi: ${photo.caption} (dan ${remainingCount} foto lainnya)`);
      } else {
        btn.setAttribute('aria-label', `Lihat foto dokumentasi: ${photo.caption}`);
      }

      btn.innerHTML = `
        <img
          src="${photo.src}"
          alt="${photo.caption || 'Foto dokumentasi ' + (idx + 1)}"
          loading="lazy"
          onerror="this.onerror=null;this.src='${placeholderSvgFallback}';"
        />
        ${isLastWithMore ? `<span class="doc-thumb__more-overlay" aria-hidden="true">+${remainingCount}</span>` : ''}
      `;

      btn.addEventListener('click', () => {
        openLightbox(photos, idx, btn);
      });

      strip.appendChild(btn);
    });

    container.appendChild(strip);
  });
}

/**
 * Inisialisasi seluruh modul galeri saat DOM siap
 */
function initAllModules() {
  renderFeaturedCertificates();
  renderAlbums();
  initGalleryTabs();
  initExperienceGalleries();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllModules);
} else {
  initAllModules();
}


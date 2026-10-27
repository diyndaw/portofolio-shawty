export const personalInfo = {
  name: "Dinda",
  fullName: "Dinda alya",
  role: "Full-Stack Engineer & UI/UX Specialist",
  tagline: "Membangun Aplikasi Web Modern Berperforma Tinggi & Pengalaman Digital yang Memukau",
  shortBio: "Berpengalaman lebih dari 4 tahun dalam merancang dan mengembangkan aplikasi web berskala enterprise. Spesialisasi dalam ekosistem React, TypeScript, Node.js, Next.js, dan optimasi performa ujung-ke-ujung.",
  location: "Jakarta, Indonesia",
  timezone: "WIB (UTC+7)",
  email: "dindalyyaa@gmail.com",
  availability: "Terbuka untuk Proyek Freelance & Full-Time",
  linkedin: "https://www.linkedin.com/in/dindaalyaainsani/",
  instagram: "https://instagram.com/dindalyya",
  twitter: "https://x.com",
  cvUrl: "#contact"
};


export const stats = [
  { value: "4+", label: "Tahun Pengalaman", suffix: "Thn" },
  { value: "28+", label: "Proyek Selesai", suffix: "Proyek" },
  { value: "99.8%", label: "Kepuasan Klien", suffix: "Rating" },
  { value: "15+", label: "Kontribusi Open Source", suffix: "Repo" }
];

export const skillsData = {
  frontend: [
    { name: "React 19 / Next.js", level: 95, icon: "Atom", tag: "Advanced" },
    { name: "TypeScript", level: 90, icon: "FileCode2", tag: "Advanced" },
    { name: "Tailwind CSS v4", level: 96, icon: "Palette", tag: "Mastery" },
    { name: "Vue.js / Nuxt", level: 82, icon: "Layers", tag: "Proficient" },
    { name: "State Management (Zustand/Redux)", level: 90, icon: "Cpu", tag: "Advanced" }
  ],
  backend: [
    { name: "Node.js / Express / NestJS", level: 92, icon: "Server", tag: "Advanced" },
    { name: "PostgreSQL & Prisma ORM", level: 88, icon: "Database", tag: "Advanced" },
    { name: "Redis & Caching", level: 84, icon: "Zap", tag: "Proficient" },
    { name: "REST & GraphQL APIs", level: 90, icon: "Network", tag: "Advanced" },
    { name: "Golang (Go)", level: 75, icon: "Binary", tag: "Intermediate" }
  ],
  devops: [
    { name: "Docker & Containerization", level: 85, icon: "Boxes", tag: "Proficient" },
    { name: "CI/CD Pipeline & DevOps", level: 88, icon: "GitBranch", tag: "Advanced" },
    { name: "AWS / Cloudflare / Vercel", level: 86, icon: "Cloud", tag: "Proficient" },
    { name: "Linux & Nginx", level: 82, icon: "Terminal", tag: "Proficient" }
  ],
  design: [
    { name: "Figma UI/UX & Prototyping", level: 90, icon: "Figma", tag: "Advanced" },
    { name: "Design System Architecture", level: 92, icon: "Component", tag: "Advanced" },
    { name: "Responsive & Accessibility (a11y)", level: 95, icon: "Sparkles", tag: "Mastery" }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "Shawty - Modern URL Shortener & Analytics",
    category: "Full-Stack",
    description: "Platform pemendek URL enterprise dengan analitik real-time, custom domain, QR code generator otomatis, dan deteksi bot tingkat lanjut.",
    longDescription: "Sistem URL shortener dengan throughput tinggi yang dibangun menggunakan arsitektur caching multi-layer (Redis + Postgres), visualisasi analitik interaktif berbasis chart, serta dashboard manajemen link yang responsif.",
    tags: ["React 19", "Tailwind CSS v4", "Node.js", "PostgreSQL", "Redis", "Vite"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://dindaalya.dev",
    featured: true,
    metrics: "120k+ Link Dialihkan / Menit • 99.99% Uptime"
  },
  {
    id: 2,
    title: "NovaFlow - AI SaaS Project Management",
    category: "Full-Stack",
    description: "Aplikasi manajemen proyek kolaboratif berbasis kecerdasan buatan untuk auto-summarizing sprint, kanban interaktif, dan estimasi beban kerja tim.",
    longDescription: "Platform produktivitas terintegrasi OpenAI API untuk automasi pembagian tugas, real-time sync menggunakan WebSocket, serta notifikasi instan lintas platform.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "OpenAI API", "Prisma", "WebSockets"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://dindaalya.dev",
    featured: true,
    metrics: "Digunakan oleh 40+ Tim Startup • Realtime Sync"
  },
  {
    id: 3,
    title: "Apex Finance - Crypto & Asset Portfolio Tracker",
    category: "Frontend",
    description: "Dashboard finansial Web3 interaktif dengan candlestick chart real-time, pelacakan portofolio multi-wallet, dan simulasi keuntungan.",
    longDescription: "Dashboard keuangan mutakhir dengan visualisasi chart interaktif berbasis TradingView API, dark mode glassmorphism mewah, dan kalkulasi PnL instan.",
    tags: ["React", "Tailwind CSS", "Chart.js", "Web3.js", "Vite"],
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://dindaalya.dev",
    featured: true,
    metrics: "Latensi Data < 150ms • Dark UI Glassmorphism"
  },
  {
    id: 4,
    title: "CloudVault - Secure Encrypted Cloud Storage",
    category: "Full-Stack",
    description: "Sistem penyimpanan file terenkripsi ujung-ke-ujung (E2EE) dengan pembagian tautan berbatas waktu, upload multi-part, dan pratinjau media cepat.",
    longDescription: "Penyimpanan awan terdesentralisasi dengan enkripsi AES-256 sisi klien, integrasi S3-compatible bucket, dan streaming media langsung dari browser tanpa decrypt latency.",
    tags: ["Node.js", "React", "AWS S3", "Docker", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://dindaalya.dev",
    featured: false,
    metrics: "Enkripsi AES-256 Sisi Klien • Multi-part Chunk Upload"
  },
  {
    id: 5,
    title: "PulseUI - React Design System & Component Library",
    category: "UI/UX",
    description: "Kumpulan 50+ komponen React accessible (WCAG compliant) dengan animasi halus, variasi tema dinamis, dan dokumentasi interaktif.",
    longDescription: "Design system open-source yang dirancang untuk mempercepat pengembangan UI tanpa kompromi performa dan aksesibilitas ramah pembaca layar.",
    tags: ["Figma", "React", "Tailwind CSS", "Storybook", "TypeScript"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://dindaalya.dev",
    featured: false,
    metrics: "2.4k+ Download Bulanan • 100% Skor Aksesibilitas"
  },
  {
    id: 6,
    title: "NeuroDoc - AI Medical Document Analyzer",
    category: "AI & Cloud",
    description: "Sistem pemrosesan dokumen medis otomatis berbasis Vision-Language Model untuk ekstraksi data lab dan diagnosis perbantuan dokter.",
    longDescription: "Aplikasi healthcare bersertifikasi privasi data dengan OCR tingkat tinggi, parsing resep tulisan tangan, dan ringkasan riwayat medis terstruktur.",
    tags: ["Python", "FastAPI", "React", "LangChain", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://dindaalya.dev",
    featured: false,
    metrics: "Akurasi Ekstraksi 97.4% • HIPAA Compliant Architecture"
  }
];

export const experienceData = [
  {
    period: "2023 - Sekarang",
    role: "Senior Full-Stack Engineer",
    company: "TechNova Solusindo",
    type: "Full-Time",
    description: "Memimpin tim engineer beranggotakan 6 orang dalam merancang ulang core platform SaaS perusahaan, meningkatkan waktu muat 64% dan menangani lebih dari 2 juta request harian.",
    achievements: [
      "Mengurangi biaya infrastruktur AWS sebesar 35% dengan migrasi ke serverless & caching strategi",
      "Membangun design system internal yang memangkas waktu perilisan fitur baru dari 3 minggu menjadi 1 minggu"
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"]
  },
  {
    period: "2021 - 2023",
    role: "Frontend Specialist",
    company: "Kreasi Digital Nusantara",
    type: "Full-Time",
    description: "Mengembangkan berbagai aplikasi web interaktif, dashboard analitik, dan progressive web apps (PWA) untuk klien perbankan dan retail terkemuka.",
    achievements: [
      "Mencapai skor Lighthouse 98+ pada performa dan aksesibilitas untuk 12+ portal web",
      "Mengimplementasikan state management tersentralisasi dan optimasi virtualized rendering"
    ],
    tech: ["React", "Vue.js", "Tailwind CSS", "REST API", "Jest", "Vite"]
  },
  {
    period: "2020 - 2021",
    role: "Junior Web Developer",
    company: "Inovasi Studio",
    type: "Contract",
    description: "Membantu pembuatan website corporate, sistem katalog e-commerce, dan integrasi payment gateway.",
    achievements: [
      "Membangun 15+ website responsif dengan waktu implementasi tepat waktu",
      "Mengotomasi pengujian form dan alur checkout pesanan"
    ],
    tech: ["JavaScript", "HTML5", "CSS3 / Sass", "Bootstrap", "PHP / Laravel"]
  }
];

export const testimonialsData = [
  {
    name: "Budi Santoso",
    role: "VP of Engineering at FinEdge",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    text: "Dinda memiliki kemampuan luar biasa dalam menerjemahkan kebutuhan bisnis rumit menjadi antarmuka yang sangat elegan dan cepat. Kode yang ditulisnya sangat bersih, terdokumentasi, dan mudah dipelihara.",
    rating: 5
  },
  {
    name: "Sarah Wijaya",
    role: "Product Lead at CloudScale",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    text: "Bekerja sama dengan Dinda adalah pengalaman yang sangat menyenangkan. Dia tidak hanya sekadar eksekutor fitur, tapi selalu memberikan insight arsitektur dan UI/UX yang meningkatkan kepuasan pengguna akhir kami.",
    rating: 5
  },
  {
    name: "David Kurniawan",
    role: "Founder at NexaSaaS",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "Kecepatan eksekusi dan perhatian terhadap detail animasinya benar-benar level dunia. Proyek kami selesai 2 minggu lebih cepat dari deadline dengan kualitas luar biasa!",
    rating: 5
  }
];

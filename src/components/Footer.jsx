export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <p className="footer__copy">
          &copy; <span id="year">{year}</span> Dinda Alya Ainsani &middot; Dibuat dengan vanilla dan HTML/CSS/JS
        </p>
        <p className="footer__sub">Depok, Jawa Barat &middot; Open to Remote &amp; Hybrid</p>
      </div>
    </footer>
  )
}

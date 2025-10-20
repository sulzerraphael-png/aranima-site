export default function Page(){
  return (
    <main>
      <header className="sticky" style={{position:'sticky',top:0,backdropFilter:'blur(8px)',background:'rgba(255,255,255,.7)',borderBottom:'1px solid rgba(199,164,94,.35)',zIndex:50}}>
        <nav className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 0'}}>
          <a href="#home" style={{display:'flex',alignItems:'center',gap:'12px',fontWeight:600,fontSize:'1.1rem'}}>
            <img src="/logo.png" alt="Aranima Logo" className="logo-img" />
            Aranima
          </a>
          <div style={{display:'flex',gap:'16px',fontSize:'.9rem'}}>
            <a href="#angebote">Angebote</a>
            <a href="#ansatz">Ansatz</a>
            <a href="#about">Über mich</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </nav>
      </header>

      <section id="about" className="section">
        <div className="container">
          <div className="card" style={{display:'grid',gap:24,gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',alignItems:'center'}}>
            <div style={{borderRadius:16,overflow:'hidden',aspectRatio:'1/1',boxShadow:'0 8px 24px rgba(0,0,0,.12)'}}>
              <img
                src="/about.jpg"
                alt="Raphael Sulzer – Über mich"
                className="about-photo"
                style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}
              />
            </div>
            <div>
              <h2>Über mich</h2>
              <p style={{marginTop:8,opacity:.9,lineHeight:1.6}}>
                Raphael Sulzer – Elementarpädagoge, Energetiker, Raumhalter. Ich begleite mit ruhiger Präsenz und einer Liebe für das Einfache:
                Atem, Berührung, Begegnung. Ausbildung und Erfahrung in frühkindlicher Pädagogik, Reiki und archetypischer Arbeit fließen zusammen.
              </p>
              <div style={{marginTop:12,display:'flex',gap:12}}>
                <a href="#kontakt" className="btn">Kennenlernen</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

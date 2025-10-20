export default function Page(){
  return (
    <main>
      <header style={{position:'sticky',top:0,backdropFilter:'blur(6px)',background:'rgba(255,255,255,.7)',borderBottom:'1px solid rgba(199,164,94,.3)',zIndex:50}}>
        <nav className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 0'}}>
          <a href="#home" style={{display:'flex',alignItems:'center',gap:'12px',fontWeight:600,fontSize:'1.1rem',color:'var(--brand-ink)'}}>
            <img src="/logo.png" alt="Aranima Logo" style={{height:'40px',width:'40px',transition:'0.3s transform',borderRadius:'50%'}} onMouseOver={e=>e.currentTarget.style.transform='scale(1.15) rotate(-3deg)'} onMouseOut={e=>e.currentTarget.style.transform='scale(1) rotate(0deg)'} />
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

      <section id="home" style={{padding:'64px 0'}} className="container">
        <div style={{display:'grid',gap:'32px',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',alignItems:'center'}}>
          <div>
            <h1 style={{fontSize:'2.6rem',fontWeight:700,lineHeight:1.2}}>Aranima – ein Raum zum Entfalten<br/>und für sanfte Energie, Begegnung im Herzen</h1>
            <p style={{marginTop:16,lineHeight:1.6,maxWidth:600}}>
              <em>Aranima</em> vereint <em>Ara</em> – den geweihten, geschützten Raum – und <em>Anima</em> – die lebendige Seele.
              Es ist kein Programm, keine Methode, sondern ein offener, gehaltener Raum, in dem Heilfrequenzen wirken dürfen
              und du dich erinnerst an das, was du bist. Still. Echt. Tragend.
            </p>
          </div>
          <div style={{position:'relative',borderRadius:'24px',overflow:'hidden',boxShadow:'0 4px 12px rgba(0,0,0,.15)'}}>
            <img src="/logo-hero.png" alt="Aranima Hero" style={{width:'100%',height:'auto',display:'block'}}/>
          </div>
        </div>
      </section>

      <section id="ansatz" style={{marginTop:80}} className="container">
        <h2 style={{fontSize:'2rem',fontWeight:600}}>Ansatz</h2>
        <p style={{marginTop:12,lineHeight:1.6,maxWidth:720}}>
          Was geschieht, wenn du einen Raum betrittst, in dem nichts von dir erwartet wird – und doch alles möglich ist?
          Ich halte diesen Raum. Dort können Atem und Stille, Rhythmus und Bildsprache ihr Werk tun. So entsteht ein leiser Wandel, der trägt.
        </p>
        <div style={{marginTop:24,borderRadius:'24px',overflow:'hidden',boxShadow:'0 8px 24px rgba(0,0,0,.2)'}}>
          <img src="/frequenz.jpg" alt="Frequenzbild" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
      </section>

      <footer style={{borderTop:'1px solid rgba(0,0,0,.1)',padding:'32px 0',marginTop:64,textAlign:'center',fontSize:'.8rem',opacity:.7}}>
        © {new Date().getFullYear()} Aranima · Raum · Heilung · Bewusstsein
      </footer>
    </main>
  )
}
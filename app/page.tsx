export default function Page(){
  return (<main>
    <header className="sticky">
      <nav className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 0'}}>
        <a href="#home" style={{display:'flex',alignItems:'center',gap:'12px',fontWeight:600,fontSize:'1.1rem'}}>
          <img src="/logo.png" alt="Aranima Logo" className="logo-img" /> Aranima
        </a>
        <div style={{display:'flex',gap:'16px',fontSize:'.9rem'}}>
          <a href="#angebote">Angebote</a><a href="#ansatz">Ansatz</a><a href="#about">Über mich</a><a href="#kontakt">Kontakt</a>
        </div>
      </nav>
    </header>

    <section id="home" className="section">
      <div className="container" style={{display:'grid',gap:'32px',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',alignItems:'center'}}>
        <div>
          <p style={{letterSpacing:'.25em',textTransform:'uppercase',fontSize:'.7rem'}}><small className="muted">Raum · Heilung · Bewusstsein</small></p>
          <h1 style={{fontSize:'2.6rem'}}>Aranima – ein Raum zum Entfalten<br/>und für sanfte Energie, Begegnung im Herzen</h1>
          <p style={{marginTop:16,lineHeight:1.6,maxWidth:640}}>
            <em>Aranima</em> vereint <em>Ara</em> – den geweihten, geschützten Raum – und <em>Anima</em> – die lebendige Seele. Es ist kein Programm, keine Methode, sondern ein offener, gehaltener Raum, in dem Heilfrequenzen wirken dürfen und du dich erinnerst an das, was du bist. Still. Echt. Tragend.
          </p>
          <div style={{display:'flex',gap:12,marginTop:16}}>
            <a href="#angebote" className="btn btn-primary">Angebote entdecken</a>
            <a href="#kontakt" className="btn">Kostenloses Erstgespräch</a>
          </div>
        </div>
        <div style={{position:'relative',borderRadius:'24px',overflow:'hidden',boxShadow:'0 4px 12px rgba(0,0,0,.15)'}}>
          <img src="/logo-hero.png" alt="Aranima Hero" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
      </div>
    </section>

    <section className="container" style={{marginTop:16}}>
      <div className="grid-3">
        <div className="card hover-card" style={{position:'relative'}}>
          <div className="grad-1" style={{position:'absolute',inset:0,opacity:.5}}/>
          <h3 style={{margin:0}}>Behutsam</h3>
          <p className="extra" style={{marginTop:8,opacity:.9}}>Wir arbeiten in deinem Tempo – präsent, zugewandt, urteilsfrei. Der Körper darf weich werden, die Seele atmen.</p>
          <span className="hint">mehr ↗</span>
        </div>
        <div className="card hover-card" style={{position:'relative'}}>
          <div className="grad-2" style={{position:'absolute',inset:0,opacity:.5}}/>
          <h3 style={{margin:0}}>Ganzheitlich</h3>
          <p className="extra" style={{marginTop:8,opacity:.9}}>Körper, Seele und Geist im Einklang – Berührung, Atem, Rhythmus und innere Bilder finden zusammen.</p>
          <span className="hint">mehr ↗</span>
        </div>
        <div className="card hover-card" style={{position:'relative'}}>
          <div className="grad-3" style={{position:'absolute',inset:0,opacity:.5}}/>
          <h3 style={{margin:0}}>Wirkungsorientiert</h3>
          <p className="extra" style={{marginTop:8,opacity:.9}}>Sanfte Methoden, spürbare Veränderung im Alltag – leise, echt, nachhaltig.</p>
          <span className="hint">mehr ↗</span>
        </div>
      </div>
    </section>

    <section id="angebote" className="section">
      <div className="container">
        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:24,flexWrap:'wrap'}}>
          <div><h2>Angebote</h2><p className="muted">Zwei Wege – beide geführt vom selben Raum.</p></div>
        </div>
        <div className="grid-2" style={{marginTop:16}}>
          <div className="card hover-card">
            <span style={{fontSize:12}} className="muted">1:1 · 60–90 Min</span>
            <h3 style={{margin:'6px 0 0 0'}}>Aranima · Raumhalten & Heilfrequenzen</h3>
            <p style={{marginTop:8,opacity:.9}}>Der Kern meiner Arbeit: Ich halte einen stillen, sicheren Raum, in dem Heilfrequenzen wirken. Jede Session kann – je nach Bedarf – durch Archetypenarbeit, achtsame Berührung aus der Shiatsu-Praxis oder Impulse mit OH-Karten bereichert werden.</p>
            <p className="extra" style={{marginTop:8,opacity:.9}}>Ablauf: Ankommen · Atem/Regulation · stilles Halten · Nachspüren. 60–90 Min, 1:1.</p>
            <a href="#kontakt" className="btn" style={{marginTop:12,justifyContent:'center'}}>Termin anfragen</a>
          </div>
          <div className="card hover-card">
            <span style={{fontSize:12}} className="muted">1:1 · 60 Min</span>
            <h3 style={{margin:'6px 0 0 0'}}>Reiki · Universelle Lichtenergie</h3>
            <p style={{marginTop:8,opacity:.9}}>Reiki ist die Begleitung durch universelle Lebensenergie. Durch Handauflegen/berührungsnahe Arbeit wird dein System eingeladen, in Balance zu kommen – beruhigend, klärend, tragend.</p>
            <p className="extra" style={{marginTop:8,opacity:.9}}>Auf Wunsch ergänzt durch Archetypen-Impulse, Shiatsu-Elemente oder OH-Karten. 60 Min, 1:1.</p>
            <a href="#kontakt" className="btn" style={{marginTop:12,justifyContent:'center'}}>Termin anfragen</a>
          </div>
        </div>
      </div>
    </section>

    <section id="ansatz" className="section">
      <div className="container" style={{display:'grid',gap:'24px',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',alignItems:'center'}}>
        <div>
          <h2>Ansatz</h2>
          <p style={{marginTop:12,lineHeight:1.6,maxWidth:720}}>Was geschieht, wenn du einen Raum betrittst, in dem nichts von dir erwartet wird – und doch alles möglich ist? Ich halte diesen Raum. Dort können Atem und Stille, Rhythmus und Bildsprache ihr Werk tun. So entsteht ein leiser Wandel, der trägt.</p>
          <ul style={{marginTop:8,opacity:.95}}>
            <li>achtsame Präsenz und klare Grenzen</li>
            <li>Berührung, Atem, Rhythmus</li>
            <li>intuitives Arbeiten mit Bildern/Archetypen</li>
          </ul>
        </div>
        <div className="card" style={{padding:0,overflow:'hidden'}}>
          <img src="/frequenz.jpg" alt="Frequenzbild" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
      </div>
    </section>

    <section id="about" className="section">
      <div className="container">
        <div className="card" style={{display:'grid',gap:24,gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',alignItems:'center'}}>
          <div style={{borderRadius:16,background:'linear-gradient(135deg,#EDE7FF,#DDF4F3,#FFE9DF)',aspectRatio:'1/1'}}/>
          <div>
            <h2>Über mich</h2>
            <p style={{marginTop:8,opacity:.9,lineHeight:1.6}}>Raphael Sulzer – Elementarpädagoge, Energetiker, Raumhalter. Ich begleite mit ruhiger Präsenz und einer Liebe für das Einfache: Atem, Berührung, Begegnung. Ausbildung und Erfahrung in frühkindlicher Pädagogik, Reiki und archetypischer Arbeit fließen zusammen.</p>
            <div style={{marginTop:12,display:'flex',gap:12}}><a href="#kontakt" className="btn">Kennenlernen</a></div>
          </div>
        </div>
      </div>
    </section>

    <section className="container" style={{marginTop:32}}>
      <div style={{borderRadius:24,background:'var(--teal)',color:'white',padding:'24px',display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',alignItems:'center'}}>
        <div><h3 style={{margin:0}}>Bereit für einen ersten Schritt?</h3><p style={{marginTop:8,opacity:.9}}>Schreibe mir für ein unverbindliches Vorgespräch (15 Min, online oder in Wien).</p></div>
        <div style={{textAlign:'right'}}><a href="#kontakt" className="btn" style={{background:'white',color:'var(--ink)'}}>Erstgespräch buchen</a></div>
      </div>
    </section>

    <section id="kontakt" className="section">
      <div className="container">
        <h2>Kontakt</h2>
        <p className="muted">Schreib mir – ich melde mich zeitnah.</p>
        <div className="grid-2" style={{marginTop:12}}>
          <input placeholder="Dein Name" className="btn" />
          <input type="email" placeholder="E‑Mail" className="btn" />
          <input placeholder="Telefon (optional)" className="btn" style={{gridColumn:'1 / -1'}}/>
          <textarea placeholder="Worum geht es?" rows={5} className="btn" style={{gridColumn:'1 / -1'}}/>
          <a href="mailto:sulzer.raphael@gmail.com" className="btn btn-primary" style={{justifySelf:'start'}}>Per E‑Mail senden – sulzer.raphael@gmail.com</a>
        </div>
      </div>
    </section>

    <footer>© {new Date().getFullYear()} Aranima · Raum · Heilung · Bewusstsein</footer>
  </main>)
}
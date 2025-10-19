export default function Page(){
  return (
    <main>
      <header style={{position:'sticky',top:0,backdropFilter:'blur(6px)',background:'rgba(255,255,255,.7)',borderBottom:'1px solid rgba(199,164,94,.3)',zIndex:50}}>
        <nav className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 0'}}>
          <a href="#home" style={{fontWeight:600,fontSize:'1.1rem',color:'var(--brand-ink)'}}>Aranima</a>
          <div style={{display:'flex',gap:'16px',fontSize:'.9rem'}}>
            <a href="#angebote">Angebote</a>
            <a href="#ansatz">Ansatz</a>
            <a href="#about">Über mich</a>
            <a href="#kontakt">Kontakt</a>
          </div>
          <a className="btn" href="#kontakt">Termin anfragen</a>
        </nav>
      </header>

      <section id="home" className="gradient-hero">
        <div className="container" style={{display:'grid',gridTemplateColumns:'1fr',gap:'24px',alignItems:'center',padding:'64px 0'}}>
          <div>
            <p style={{letterSpacing:'.25em',textTransform:'uppercase',fontSize:'.7rem'}}><small className="muted">Raum · Heilung · Bewusstsein</small></p>
            <h1 style={{margin:'8px 0',fontSize:'2.6rem',lineHeight:1.15,fontWeight:700}}>Sanfte Energie, klarer Raum –<br/>Begegnung im Herzen</h1>
            <p style={{maxWidth:680,lineHeight:1.6}}>Aranima schafft einen geborgenen Rahmen, in dem Heilfrequenzen wirken dürfen. Ich halte den Raum – du begegnest dir selbst. In Stille, im Atem, im Fluss.</p>
            <div style={{display:'flex',gap:'12px',marginTop:'16px'}}>
              <a className="btn btn-primary" href="#angebote">Angebote entdecken</a>
              <a className="btn" href="#kontakt">Kostenloses Erstgespräch</a>
            </div>
            <div style={{marginTop:'12px'}}><small className="muted">Wien · energetische Hilfestellungen · Reiki · Archetypenarbeit</small></div>
          </div>
        </div>
      </section>

      <section className="container" style={{marginTop:32,display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>
        {[
          {t:'Behutsam', d:'Wir arbeiten in deinem Tempo – präsent, zugewandt, urteilsfrei.'},
          {t:'Ganzheitlich', d:'Körper, Seele und Geist im Einklang – mit Achtsamkeit und Klarheit.'},
          {t:'Wirkungsorientiert', d:'Sanfte Methoden, spürbare Veränderung im Alltag.'},
        ].map((c,i)=> (
          <div key={i} className="card">
            <h3 style={{margin:0}}>{c.t}</h3>
            <p style={{marginTop:8,opacity:.85}}>{c.d}</p>
          </div>
        ))}
      </section>

      <section id="angebote" className="container" style={{marginTop:64}}>
        <div style={{display:'flex',gap:24,alignItems:'flex-end',justifyContent:'space-between',flexWrap:'wrap'}}>
          <div>
            <h2 style={{margin:'0 0 4px 0'}}>Angebote</h2>
            <p className="muted">Energetische Hilfestellungen, die dich ins Spüren bringen.</p>
          </div>
          <div style={{display:'flex',gap:8}}>
            <select className="btn" style={{padding:'.6rem .8rem'}}><option>Alle</option><option>1:1</option><option>Gruppen</option></select>
            <input placeholder="Suche…" className="btn" style={{padding:'.6rem .8rem',width:160}}/>
          </div>
        </div>

        <div style={{display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',marginTop:16}}>
          {[
            {title:'Raumhalten · Heilfrequenzen', txt:'Ein stiller, sicherer Rahmen, in dem du dich regulieren und neu ordnen kannst.', badge:'1:1 · 60–90 Min'},
            {title:'Reiki · Lichtenergie', txt:'Sanfte Berührung/Handauflegen unterstützt dein System beim Ausbalancieren.', badge:'1:1 · 60 Min'},
            {title:'Archetypen nach C.G. Jung', txt:'Mit inneren Bildern Klarheit gewinnen und Ressourcen aktivieren.', badge:'1:1/Gruppe'},
          ].map((c,i)=>(
            <div key={i} className="card" style={{display:'flex',flexDirection:'column'}}>
              <span style={{fontSize:12}} className="muted">{c.badge}</span>
              <h3 style={{margin:'6px 0 0 0'}}>{c.title}</h3>
              <p style={{marginTop:8,opacity:.85,flex:1}}>{c.txt}</p>
              <a href="#kontakt" className="btn" style={{justifyContent:'center'}}>Termin anfragen</a>
            </div>
          ))}
        </div>
      </section>

      <section id="ansatz" className="container" style={{marginTop:64,display:'grid',gap:24,gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',alignItems:'center'}}>
        <div>
          <h2>Ansatz</h2>
          <p style={{marginTop:8,opacity:.9,lineHeight:1.6}}>Nicht ich heile – ich halte den Raum. In dieser achtsamen Weite kann dein System die Impulse aufnehmen, die ohnehin da sind: Atem, Rhythmus, Stille, Klang. So entsteht ein leiser Wandel, der trägt.</p>
          <ul style={{marginTop:8,opacity:.95}}>
            <li>achtsame Präsenz und klare Grenzen</li>
            <li>Berührung, Atem, Rhythmus</li>
            <li>intuitives Arbeiten mit Bildern/Archetypen</li>
          </ul>
        </div>
        <div className="gradient-block" style={{height:260,borderRadius:24,boxShadow:'0 8px 24px rgba(0,0,0,.08)'}}/>
      </section>

      <section id="about" className="container" style={{marginTop:64}}>
        <div className="card" style={{display:'grid',gap:24,gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',alignItems:'center'}}>
          <div className="gradient-block" style={{aspectRatio:'1/1',borderRadius:16}}/>
          <div>
            <h2>Über mich</h2>
            <p style={{marginTop:8,opacity:.9,lineHeight:1.6}}>Raphael Sulzer – Elementarpädagoge, Energetiker, Raumhalter. Ich begleite mit ruhiger Präsenz und einer Liebe für das Einfache: Atem, Berührung, Begegnung. Ausbildung und Erfahrung in frühkindlicher Pädagogik, Reiki und archetypischer Arbeit fließen zusammen.</p>
            <div style={{marginTop:12,display:'flex',gap:12}}>
              <a href="#kontakt" className="btn">Kennenlernen</a>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{marginTop:64}}>
        <div style={{borderRadius:24,background:'var(--brand-teal)',color:'white',padding:'24px',display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',alignItems:'center'}}>
          <div>
            <h3 style={{margin:0}}>Bereit für einen ersten Schritt?</h3>
            <p style={{marginTop:8,opacity:.9}}>Schreibe mir für ein unverbindliches Vorgespräch (15 Min, online oder in Wien).</p>
          </div>
          <div style={{textAlign:'right'}}>
            <a href="#kontakt" className="btn" style={{background:'white',color:'var(--brand-ink)'}}>Erstgespräch buchen</a>
          </div>
        </div>
      </section>

      <section id="kontakt" className="container" style={{marginTop:64,marginBottom:64}}>
        <h2>Kontakt</h2>
        <p className="muted">Schreib mir – ich melde mich zeitnah.</p>
        <div style={{display:'grid',gap:12,gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',marginTop:12}}>
          <input placeholder="Dein Name" className="btn" />
          <input type="email" placeholder="E‑Mail" className="btn" />
          <input placeholder="Telefon (optional)" className="btn" style={{gridColumn:'1 / -1'}}/>
          <textarea placeholder="Worum geht es?" rows={5} className="btn" style={{gridColumn:'1 / -1'}}/>
          <a href="mailto:sulzer.raphael@gmail.com" className="btn btn-primary" style={{justifySelf:'start'}}>Per E‑Mail senden – sulzer.raphael@gmail.com</a>
        </div>
      </section>

      <footer style={{borderTop:'1px solid #eaeaea',padding:'32px 0'}}>
        <div className="container">
          <small className="muted">© {new Date().getFullYear()} Aranima · Impressum · Datenschutz</small>
        </div>
      </footer>
    </main>
  )
}
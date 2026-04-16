import React, { useState, useEffect } from 'react';

function App() {
  const [showSticky, setShowSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        // Show sticky CTA if scrolling up, hide if scrolling down or at the very top.
        if (currentScrollY < lastScrollY && currentScrollY > 200) {
          setShowSticky(true);
        } else {
          setShowSticky(false);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToQuote = (e) => {
    e.preventDefault();
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="navbar">
        <div className="container nav-container">
          <img 
            src="https://dynamicws.com.au/wp-content/uploads/2020/09/OFV10113-Dynamic_Transparent.png" 
            alt="Dynamic Warehouse Solutions Logo" 
            className="brand-logo" 
          />
          <a href="#quote" className="btn btn-primary" onClick={scrollToQuote}>Get A Quote</a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" style={{ background: `linear-gradient(to right, rgba(26,30,35,0.95) 0%, rgba(26,30,35,0.7) 100%), url(${import.meta.env.BASE_URL}images/hastings-hero.jpeg) no-repeat center center/cover` }}>
          <div className="container hero-container">
            <div className="hero-content">
              <h1>Custom Mezzanine Offices for Melbourne Businesses</h1>
              <p>Turn wasted vertical space into a productive, boutique industrial workspace. Expertly designed, engineered, and soundproofed for modern Australian distribution hubs.</p>
              <div className="hero-cta-group">
                <a href="#quote" className="btn btn-primary" onClick={scrollToQuote}>Request a Custom Proposal</a>
                <a href="https://dynamicws.com.au/build-your-own-mezzanine/" className="btn btn-secondary">Build Your Estimate Online</a>
              </div>
            </div>
            <div className="hero-features">
              <div className="glass-panel" style={{ position: 'relative', bottom: 'auto', left: 'auto', width: '100%' }}>
                <h3>Why Build Upwards?</h3>
                <ul>
                  <li><strong>✓</strong> Zero Relocation Costs</li>
                  <li><strong>✓</strong> Integrated Warehouse Oversight</li>
                  <li><strong>✓</strong> Boutique Industrial Finishes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* One-Stop Solutions Section */}
        <section className="one-stop">
          <div className="container">
            <div className="section-heading text-center">
              <h2>One-Stop Warehouse Mezzanine Solutions</h2>
              <p>Our professional team provides custom mezzanine design, supply, and installation services for warehouses across Melbourne.</p>
            </div>
            <div className="one-stop-grid">
              <div className="solution-card">
                <h3>Design</h3>
                <p>Dynamic offers a 'Free Layout & Design Service', and our Design Team will present a recommended warehouse fit out solution based on your needs.</p>
              </div>
              <div className="solution-card">
                <h3>Supply</h3>
                <p>All products are manufactured and tested to our exacting control processors. All products are backed up by a minimum 5 year Warranty.</p>
              </div>
              <div className="solution-card">
                <h3>Install</h3>
                <p>Dynamic has the experience and processes to ensure your project runs smoothly and on time. Here at Dynamic we use only the best – qualified mezzanine installers for our projects.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Insights / Trends Section */}
        <section className="insights">
          <div className="container">
            <div className="insights-grid">
              <div className="insight-card">
                <h3>The 'Boutique Industrial' Trend</h3>
                <p>The days of clinical demountable boxes are over. We integrate raw structural power with refined finishes, using exposed steel, glass partitions, and premium textures to create an unforgettable workspace.</p>
              </div>
              <div className="insight-card">
                <h3>Superior Soundproofing</h3>
                <p>Acoustic separation is critical. Using commercial-grade glass, ceiling baffles, and dense cavity systems, we block out forklift noise so your team can focus and conduct meetings in peace.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Gallery & Project Briefs */}
        <section className="projects">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Melbourne Mezzanine Projects</h2>
              <p>Explore our recent custom fitouts across Victoria's leading distribution and manufacturing hubs.</p>
            </div>

            <div className="project-showcase">
              <div className="project-item">
                <div className="project-images">
                  <img src={`${import.meta.env.BASE_URL}images/industry-cladding-1.jpeg`} alt="Industry Cladding Corporate Mezzanine Space" className="main-img" />
                  <img src={`${import.meta.env.BASE_URL}images/industry-cladding-2.jpeg`} alt="Industry Cladding Ground View" className="sub-img" />
                </div>
                <div className="project-brief">
                  <h3>Industry Cladding & Roofing</h3>
                  <p>A full-scale structural expansion requiring an office space that matched the company's architectural profile. We delivered a multi-tiered mezzanine finished in deep charcoals and warm textures, balancing operational demands with high-end corporate presentation.</p>
                  <a href="#" className="btn btn-secondary" style={{ marginTop: '20px', borderColor: '#b1d236', color: '#23282f' }}>View Project</a>
                </div>
              </div>

              <div className="project-item reverse">
                <div className="project-images">
                  <img src={`${import.meta.env.BASE_URL}images/paramount-1.jpeg`} alt="Paramount Liquor Glass Front Mezzanine" className="main-img" />
                  <img src={`${import.meta.env.BASE_URL}images/paramount-2.jpeg`} alt="Paramount Liquor Interior Hub" className="sub-img" />
                </div>
                <div className="project-brief">
                  <h3>Paramount Liquor</h3>
                  <p>Paramount required a sophisticated, sound-isolated operational hub suspended above their high-turnover liquor staging facility. The result was a sleek, glass-fronted mezzanine offering clear sightlines alongside quiet meeting zones.</p>
                  <a href="#" className="btn btn-secondary" style={{ marginTop: '20px', borderColor: '#b1d236', color: '#23282f' }}>View Project</a>
                </div>
              </div>

              <div className="project-item">
                <div className="project-images">
                  <img src={`${import.meta.env.BASE_URL}images/hastings-1.jpeg`} alt="Hastings Mezzanine Office Overlook" className="main-img" />
                  <img src={`${import.meta.env.BASE_URL}images/hastings-2.jpeg`} alt="Hastings Operational Floorspace" className="sub-img" />
                </div>
                <div className="project-brief">
                  <h3>Hastings Mezzanine Fitout</h3>
                  <p>A fast-growing distribution hub needed dedicated administrative zones without sacrificing ground-floor picking space. We designed an independent mezzanine level equipped with climate-controlled offices directly overlooking the warehouse.</p>
                  <a href="#" className="btn btn-secondary" style={{ marginTop: '20px', borderColor: '#b1d236', color: '#23282f' }}>View Project</a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Lead Capture Form (CRO Optimized) */}
        <section id="quote" className="lead-capture">
          <div className="container lead-container">
            <div className="lead-content">
              <h2>Ready to Expand Your Workspace?</h2>
              <p>Discuss your operational bottlenecks with our structural experts. We provide comprehensive site appraisals and tailored boutique industrial designs.</p>
            </div>
            <div className="form-wrapper">
              <form className="cro-form" onSubmit={(e) => { e.preventDefault(); alert('Lead captured in mockup.'); }}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Business Email</label>
                    <input type="email" id="email" placeholder="john@company.com.au" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="0400 000 000" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="project_details">Brief Project Details (Optional)</label>
                  <textarea id="project_details" rows="3" placeholder="I.e., Need approx. 50sqm mezzanine office with boardroom..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Request Callback</button>
                <p className="form-footer">Need a fast quote right now? <br/><a href="https://dynamicws.com.au/build-your-own-mezzanine/">Build your estimate online ➝</a></p>
              </form>
            </div>
          </div>
          <div className="container" style={{ marginTop: '4rem' }}>
            <div className="badge-banner-projects text-center" style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <img 
                src="https://dynamicws.com.au/wp-content/uploads/2021/02/registered-builder-grey.png" 
                alt="Registered Commercial Building Practitioner" 
                style={{ maxWidth: '200px', display: 'block', margin: '0 auto 1.5rem auto' }}
              />
              <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
                Dynamic Warehouse Solutions is a certified Commercial Building Practitioner. Every custom mezzanine office we deliver guarantees strict adherence to Australian safety regulations, building codes, and structural integrity standards.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container text-center">
          <p>&copy; 2026 Dynamic Warehouse Solutions. Designed for Melbourne Businesses.</p>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className={`sticky-cta ${showSticky ? 'visible' : ''}`}>
        <a href="#quote" onClick={scrollToQuote}>Request a custom proposal</a>
      </div>
    </>
  );
}

export default App;

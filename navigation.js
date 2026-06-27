class NavigationMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .wide-strip {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 6vh;
          background-color: rgba(0, 0, 0, 0.7); z-index: 10;
          display: flex; align-items: stretch;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .nav-group { flex: 1; display: flex; position: relative; }
        .logo-island { flex: 0 0 120px; display: flex; justify-content: center; align-items: center; background-color: black; border-left: 1px solid rgba(255, 255, 255, 0.1); border-right: 1px solid rgba(255, 255, 255, 0.1); z-index: 11; }
        .logo-island a { display: block; height: 111%; }
        .logo-island img { height: 100%; filter: grayscale(1) brightness(2); }
        
        .tile { flex: 1; display: flex; justify-content: center; align-items: center; color: white; text-decoration: none; font-family: 'Roboto Mono', monospace; font-size: 1.3vh; letter-spacing: 2px; transition: background-color 0.4s; border-right: 1px solid rgba(255, 255, 255, 0.1); mix-blend-mode: difference; }
        .tile:hover { background-color: white; color: black; }

        .secondary-anchors { position: absolute; right: 0; top: 100%; width: 33.33%; display: flex; flex-direction: column; align-items: center; pointer-events: none; }
        .guestbook-tab { pointer-events: auto; text-decoration: none; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.1); border-top: none; padding: 10px 20px; width: fit-content; min-width: 140px; border-radius: 0; mix-blend-mode: difference; transition: background 0.3s, transform 0.3s; display: flex; align-items: center; justify-content: center; gap: 10px; }
        .guestbook-tab:hover { background: rgba(255, 255, 255, 0.15); transform: translateY(2px); }
        .guestbook-tab .label-part { font-family: 'Roboto Mono', monospace; font-size: 11px; letter-spacing: 2px; color: white; text-transform: uppercase; opacity: 0.8; }

        .mobile-menu-checkbox, .mobile-top-bar, .mobile-nav-overlay { display: none; }

        @media (max-width: 768px) {
          .wide-strip { display: none !important; }
          .mobile-top-bar { display: flex; flex-direction: row; position: fixed; top: 0; left: 0; width: 100%; height: 80px; background-color: #050505; align-items: stretch; justify-content: space-between; z-index: 9999; border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
          .mobile-logo-left { height: 100%; display: flex; align-items: center; justify-content: center; background-color: #000; padding: 0 20px; }
          .mobile-logo-left img { height: 80px; filter: grayscale(1) brightness(2); }
          .mobile-actions-right { display: flex; align-items: stretch; }
          .sitemap-btn { display: flex; align-items: center; color: rgba(255, 255, 255, 0.85); text-decoration: none; font-family: 'Roboto Mono', monospace; font-size: 12px; padding: 0 16px; background-color: #000; border-left: 1px solid rgba(255, 255, 255, 0.1); }
          .hamburger-btn { display: inline-flex; align-items: center; gap: 6px; cursor: pointer; height: 100%; padding: 0 20px; background-color: #000; border-left: 1px solid rgba(255, 255, 255, 0.1); }
          .hamburger-text-left, .hamburger-text-right { color: #fff; font-family: 'Roboto Mono', monospace; font-size: 16px; font-weight: 700; transition: 0.25s; }
          .hamburger-icon { width: 14px; height: 12px; position: relative; }
          .hamburger-icon span { display: block; width: 100%; height: 2px; background: white; position: absolute; transition: 0.3s; }
          .hamburger-icon span:nth-child(1) { top: 0px; } .hamburger-icon span:nth-child(2) { top: 5px; } .hamburger-icon span:nth-child(3) { top: 10px; }
          
          .mobile-menu-checkbox:checked ~ .mobile-top-bar .hamburger-icon span:nth-child(1) { top: 5px; transform: rotate(45deg); }
          .mobile-menu-checkbox:checked ~ .mobile-top-bar .hamburger-icon span:nth-child(2) { opacity: 0; }
          .mobile-menu-checkbox:checked ~ .mobile-top-bar .hamburger-icon span:nth-child(3) { top: 5px; transform: rotate(-45deg); }

          .mobile-nav-overlay { 
            display: flex; position: fixed; top: 80px; left: 0; right: 0; bottom: 0; 
            background: #050505; z-index: 9998; flex-direction: column; align-items: center; 
            justify-content: flex-start; padding: 20px; opacity: 0; pointer-events: none; 
            transition: 0.3s; overflow-y: auto; -webkit-overflow-scrolling: touch;
          }
          .mobile-menu-checkbox:checked ~ .mobile-nav-overlay { opacity: 1; pointer-events: auto; }
          
          .mobile-primary-links { display: flex; flex-direction: column; align-items: center; gap: 12px; width: 100%; }
          .mobile-primary-links a { color: #fff; text-decoration: none; font-family: 'Roboto Mono', monospace; font-size: 18px; opacity: 0.7; }
          .nav-ascii { color: #333; font-size: 8px; margin: 2px 0; }
          
          .mobile-guestbook { margin-top: 25px; padding: 10px 20px; border: 1px solid rgba(255, 255, 255, 0.23); color: white; font-family: 'Roboto Mono'; text-decoration: none; font-size: 14px; }
          .mobile-bonus { margin-top: 25px; font-family: 'Roboto Mono'; font-size: 12px; color: #949494; text-transform: uppercase; letter-spacing: 2px; text-decoration: none; margin-bottom: 40px; }
        }
      </style>

     <div class="wide-strip">
        <div class="nav-group">
          <a href="/writings.html" class="tile">WRITINGS</a>
          <a href="/works.html" class="tile">WORKS</a>
          <a href="/gallery.html" class="tile">GALLERY</a>
        </div>
        <div class="logo-island"><a href="/index.html"><img src="/images/logo/logo-mb.jpg" alt="MB"></a></div>
        <div class="nav-group">
          <a href="/about.html" class="tile">ABOUT</a>
          <a href="/contact.html" class="tile">CONTACT</a>
          <a href="/sitemap.html" class="tile">├─ sitemap</a>
          <div class="secondary-anchors">
            <a href="/directory.html" class="guestbook-tab">
              <span class="label-part">WEB DIRECTORY</span>
            </a>
          </div>
        </div>
      </div>

      <input type="checkbox" id="menu-toggle" class="mobile-menu-checkbox">
      <div class="mobile-top-bar">
        <div class="mobile-logo-left"><a href="/index.html"><img src="/images/logo/logo-mb.jpg" alt="MB"></a></div>
        <div style="flex: 1;"></div>
        <div class="mobile-actions-right">
          <a href="/sitemap.html" class="sitemap-btn">├─ sitemap</a>
          <label for="menu-toggle" class="hamburger-btn">
            <span class="hamburger-text-left">M</span>
            <div class="hamburger-icon"><span></span><span></span><span></span></div>
            <span class="hamburger-text-right">NU</span>
          </label>
        </div>
      </div>

      <div class="mobile-nav-overlay">
        <nav class="mobile-primary-links">
          <a href="/gallery.html">GALLERY</a>
          <span class="nav-ascii">╌ ╌ ╌</span>
          <a href="/works.html">WORKS</a>
          <span class="nav-ascii">╌ ╌ ╌</span>
          <a href="/writings.html">WRITINGS</a>
          <span class="nav-ascii">╌ ╌ ╌</span>
          <a href="/about.html">ABOUT</a>
          <span class="nav-ascii">╌ ╌ ╌</span>
          <a href="/contact.html">CONTACT</a>
        </nav>
        <a href="https://annoise.atabook.org" target="_blank" class="mobile-guestbook">✎ GUESTBOOK</a>
        <a href="/directory.html" class="mobile-bonus">⟡ WEB DIRECTORY ⟡</a>
      </div>
    `;

    const checkbox = this.querySelector('#menu-toggle');
    this.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => { if (checkbox) checkbox.checked = false; });
    });
  }
}
customElements.define('navigation-menu', NavigationMenu);

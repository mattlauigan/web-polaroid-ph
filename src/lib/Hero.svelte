<script lang="ts">
  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
</script>

<section id="hero" class="hero">
  <div class="hero-overlay"></div>

  <!-- <div class="film-strip top right">
    {#each Array(12) as _}
      <div class="film-hole"></div>
    {/each}
  </div> -->

  <div class="hero-content">
    <p class="badge">Est. 2019 · Philippines</p>
    <h1 class='slogan'>
      Capture the Moments <span style='color:#BD6628'>That Matter</span>
    </h1>
    <p class="tagline">
      Instant polaroid photography for weddings, corporate events,<br class="desktop-br" />
      anniversaries, and every gathering worth remembering.
    </p>
    <div class="hero-actions">
      <button class="btn-primary" onclick={() => scrollTo('quote')}>Get a Free Quote</button>
      <button class="btn-secondary" onclick={() => scrollTo('portfolio')}>View Our Work</button>
    </div>

    <div class="hero-stats">
      <!-- <div class="stat">
        <span class="stat-num">500+</span>
        <span class="stat-label">Events Covered</span>
      </div> -->
      <!-- <div class="stat-divider"></div> -->
      <div class="stat">
        <span class="stat-num">10K+</span>
        <span class="stat-label">Prints Delivered</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-num">100%</span>
        <span class="stat-label">Happy Clients</span>
      </div>
    </div>
  </div>

  <div class="polaroid-float p1">
    <div class="polaroid-inner">
      <img src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" alt="Wedding moment" />
      <p>Wedding Day</p>
    </div>
  </div>
  <div class="polaroid-float p2">
    <div class="polaroid-inner">
      <img src="https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" alt="Company event" />
      <p>Team Moments</p>
    </div>
  </div>
  <div class="polaroid-float p3">
    <div class="polaroid-inner">
      <img src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" alt="Celebration" />
      <p>Celebrations</p>
    </div>
  </div>

  <!-- <div class="film-strip bottom">
    {#each Array(12) as _}
      <div class="film-hole"></div>
    {/each}
  </div> -->

  <button class="scroll-cue" onclick={() => scrollTo('services')} aria-label="Scroll to services">
    <span>Scroll Down</span>
    <div class="arrow"></div>
  </button>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    background: #37353E;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 70% 50%, rgba(189,102,40,0.15) 0%, transparent 60%),
      radial-gradient(ellipse at 20% 80%, rgba(189,102,40,0.08) 0%, transparent 50%);
  }

  /* .film-strip {
    position: absolute;
    left: 0;
    right: 0;
    height: 40px;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0 20px;
    z-index: 1;
  }

  .film-strip.top { top: 0; }
  .film-strip.bottom { bottom: 0; }

  .film-hole {
    width: 18px;
    height: 24px;
    border-radius: 3px;
    background: #37353E;
    border: 1px solid rgba(255,255,255,0.1);
    flex-shrink: 0;
  } */

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 24px 100px;
    width: 100%;
    box-sizing: border-box;
  }

  .badge {
    width: fit-content;
    background: rgba(189,102,40,0.2);
    border: 1px solid rgba(189,102,40,0.4);
    color: #BD6628;
    font-size: 13px;
    font-weight: 600;
    text-align: left;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 6px 16px;
    border-radius: 20px;
    margin-bottom: 24px;
    animation: fadeUp 0.8s ease both;
  }

  .slogan {
    font-size: clamp(42px, 7vw, 84px);
    text-align: left;
    font-weight: 800;
    line-height: 1.05;
    color: #fff;
    margin: 0 0 24px;
    max-width: 700px;
    animation: fadeUp 0.8s 0.1s ease both;
  }

  .tagline {
    font-size: clamp(16px, 2vw, 19px);
    color: rgba(255,255,255,0.7);
    max-width: 540px;
    line-height: 1.6;
    margin: 0 0 36px;
    animation: fadeUp 0.8s 0.2s ease both;
  }

  .hero-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    animation: fadeUp 0.8s 0.3s ease both;
    margin-bottom: 60px;
  }

  .btn-primary {
    background: #BD6628;
    color: #fff;
    border: none;
    padding: 14px 32px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    letter-spacing: 0.3px;
  }

  .btn-primary:hover {
    background: #a0551f;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(189,102,40,0.4);
  }

  .btn-secondary {
    background: transparent;
    color: #fff;
    border: 2px solid rgba(255,255,255,0.3);
    padding: 14px 32px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s, transform 0.2s;
  }

  .btn-secondary:hover {
    border-color: #BD6628;
    background: rgba(189,102,40,0.1);
    transform: translateY(-2px);
  }

  .hero-stats {
    display: flex;
    align-items: center;
    gap: 32px;
    animation: fadeUp 0.8s 0.4s ease both;
  }

  .stat { text-align: center; }

  .stat-num {
    display: block;
    font-size: 28px;
    font-weight: 800;
    color: #BD6628;
    line-height: 1;
  }

  .stat-label {
    display: block;
    font-size: 12px;
    color: rgba(255,255,255,0.5);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 4px;
  }

  .stat-divider {
    width: 1px;
    height: 40px;
    background: rgba(255,255,255,0.15);
  }

  .polaroid-float {
    position: absolute;
    z-index: 2;
    animation: float 4s ease-in-out infinite;
  }

  .polaroid-inner {
    background: #fff;
    padding: 10px 10px 30px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    transform: rotate(-3deg);
  }

  .polaroid-inner img {
    width: 140px;
    height: 140px;
    object-fit: cover;
    display: block;
  }

  .polaroid-inner p {
    margin: 8px 0 0;
    font-size: 12px;
    color: #37353E;
    text-align: center;
    font-style: italic;
  }

  .p1 {
    right: 12%;
    top: 15%;
    animation-delay: 0s;
    transform: rotate(4deg);
  }

  .p2 {
    right: 22%;
    top: 45%;
    animation-delay: 1.3s;
    transform: rotate(-5deg);
  }

  .p3 {
    right: 6%;
    top: 52%;
    animation-delay: 0.7s;
    transform: rotate(2deg);
  }

  .p1 .polaroid-inner { transform: rotate(4deg); }
  .p2 .polaroid-inner { transform: rotate(-5deg); }
  .p3 .polaroid-inner { transform: rotate(2deg); }

  .scroll-cue {
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    z-index: 2;
    animation: fadeIn 1s 1s ease both;
    background: none;
    border: none;
    padding: 0;
  }

  .scroll-cue span {
    font-size: 11px;
    color: rgba(255,255,255,0.4);
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .arrow {
    width: 1px;
    height: 36px;
    background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
    animation: scrollArrow 1.5s ease-in-out infinite;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }

  @keyframes scrollArrow {
    0%, 100% { opacity: 0.4; transform: scaleY(1); }
    50% { opacity: 1; transform: scaleY(1.3); }
  }

  .desktop-br { display: block; }

  @media (max-width: 900px) {
    .polaroid-float { display: none; }
    .desktop-br { display: none; }
    .hero-content { padding: 100px 24px 80px; }
  }

  @media (max-width: 480px) {
    .hero-stats { gap: 20px; }
    .stat-num { font-size: 22px; }
  }
</style>

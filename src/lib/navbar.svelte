<script lang="ts">
  let isScrolled = $state(false)
    const sections = [
      "services",
      "portfolio",
      "testimonials",
      "get a quote",
      "contact",
    ];
  
    const scrollTo = (id: string) => {
      console.log(id);
      const el= document.getElementById(id)
      if (el) el.scrollIntoView({behavior: 'smooth'})
    };

  $effect(()=> {
    const handler = () => {isScrolled = window.scrollY > 20}
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  })
  </script>
  
  <header class:isScrolled>
    <button
      class="logo-btn"
      onclick={() => scrollTo("hero")}
      aria-label="Go to top"
    >
      <img src="#" alt="polaroid_ph" class="logo" />
    </button>
    <nav>
      {#each sections as section}
        <button onclick={() => scrollTo(section)}>{section}</button>
      {/each}
      <button>Book Now</button>
    </nav>
  </header>
  
  <style>
    header {
      position: fixed ;
      top:0;
      left:0;
      height: 3rem;
      width: 100vw;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      z-index: 50;
      transition: background-color 0.3s, box-shadow 0.3s , padding 0.3s;
    }

    header.isScrolled{
      background-color: grey;
      box-shadow: 0 2px 20px rgba(0,0,0,0.3);
      padding: 10px 0;
    }
  
    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 1rem;
    }
  </style>
  
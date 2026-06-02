<script lang="ts">
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
  </script>
  
  <header>
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
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  
    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 1rem;
    }
  </style>
  
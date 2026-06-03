<script lang="ts">
    type props = {
        name: string;
        description: string;
        features: string[];
    };

    const serviceList: props[] = [
        { name: "Ala-ala", description: "Perfect for intimate gatherings, birthdays, bridal showers, and small celebrations where every photo captures a meaningful moment.", features: ["30 Instax Films", "Up to 30 Instant Prints", "Generic Memento Book"] },
        { name: "Gunita", description: "Designed for growing celebrations and special occasions where guests can freely create and leave heartfelt messages.", features: ["40 Instax Films", "Up to 40 Instant Prints", "Generic Memento Book"] },
        { name: "Litrato", description: "A balanced package ideal for weddings, debuts, and milestone events with enough prints to capture every smile and candid moment.", features:  ["50 Instax Films", "Up to 50 Instant Prints", "Generic Memento Book"] },
        { name: "Bakás", description: "Perfect for larger celebrations where every guest can become part of the story and leave a piece of themselves in your memory book.", features: ["70 Instax Films", "Up to 70 Instant Prints", "Generic Memento Book"]  },
        { name: "Ukit", description: "Our premium package for grand celebrations. Designed to ensure no special moment goes uncaptured and every memory finds its place in your keepsake collection.", features: ["100 Instax Films", "Up to 100 Instant Prints", "Generic Memento Book"]  },
    ];
</script>

<section id="services">
    <div>
        <p class="line-1">what we offer</p>
        <h1 class="line-2">Packages</h1>
        <pre
            class="tagline">We bring the magic of instant film photography to every event,
delivering warm, tangible memories your guests will treasure forever.
        </pre>
    </div>
    <div class="services">
    {#each serviceList as serv}
        <p>{serv.name}</p>
        <p>{serv.description}</p>
        <ul>
        {#each serv.features as feat }
         <li>
            <p>{feat}</p>
         </li>
        {/each}
    </ul>
    {/each}
    </div>
</section>

<style>
    .line-1 {
        text-transform: uppercase;
    }

    .line-2 {
        font-size: 4rem;
        font-weight: 1000;
        letter-spacing: 0.1rem;
    }

    .services {
        display: grid;
        grid-template-rows: auto auto auto;
        grid-row: 3;
    }
</style>

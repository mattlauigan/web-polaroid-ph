<script lang="ts">
    import { allCategories, serviceCategories } from "./enums";

    type photosType = {
        cat: serviceCategories;
        src:  string;
        label: string;
    };

    let activeCategory = $state(serviceCategories.default);

    const photos : photosType[]= [
        {
            src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
            label: "Wedding Day",
            cat: serviceCategories.wed,
        },
        {
            src: "https://images.pexels.com/photos/1068857/pexels-photo-1068857.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
            label: "Team Building",
            cat: serviceCategories.corp,
        },
        {
            src: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
            label: "Anniversary Dinner",
            cat: serviceCategories.anniv,
        },
        {
            src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
            label: "Wedding Ceremony",
            cat: serviceCategories.wed,
        },
        {
            src: "https://images.pexels.com/photos/1429519/pexels-photo-1429519.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
            label: "Birthday Bash",
            cat: serviceCategories.bday,
        },
        {
            src: "https://images.pexels.com/photos/1306791/pexels-photo-1306791.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
            label: "Company Outing",
            cat: serviceCategories.corp,
        },
        {
            src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
            label: "Sweet 18",
            cat: serviceCategories.bday,
        },
        {
            src: "https://images.pexels.com/photos/1135738/pexels-photo-1135738.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
            label: "Silver Anniversary",
            cat: serviceCategories.anniv,
        },
        {
            src: "https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
            label: "Company Launch",
            cat: serviceCategories.corp,
        },
    ];

    const filtered = $derived(
        activeCategory === serviceCategories.default
            ? photos
            : photos.filter((p) => p.cat === activeCategory),
    );

    let lightboxSrc = $state("");
    let lightboxLabel = $state("");

    function openLightbox(src: string, label: string) {
        lightboxSrc = src;
        lightboxLabel = label;
    }

    function closeLightbox() {
        lightboxSrc = "";
    }
</script>

<section id="portfolio" class="portfolio">
    <div class="container">
        <div class="section-header">
            <span class="overline">Our Work</span>
            <h2>Portfolio</h2>
            <p class="section-desc">
                A glimpse into the moments we've had the honor of preserving.
                Every frame tells a story.
            </p>
        </div>
    </div>

    <div class="filter-tabs">
        {#each allCategories as cat}
            <button
                class:active={activeCategory === cat}
                onclick={() => (activeCategory = cat)}>{cat}</button
            >
        {/each}
    </div>

    <div class="photo-grid">
        {#each filtered as photo (photo.src)}
            <button onclick={() => openLightbox(photo.src, photo.label)}>
                <div class="polaroid-frame">
                    <img
                        src={photo.src}
                        loading="eager"
                        alt="polaroid_ph {photo.label}"
                    />
                </div>
                <p class="polaroid-caption">{photo.label}</p>
                <div class="hover-overlay">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <circle
                            cx="14"
                            cy="14"
                            r="13"
                            stroke="white"
                            stroke-width="2"
                        />
                        <path
                            d="M10 14h8M14 10v8"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                    </svg>
                </div>
            </button>
        {/each}
    </div>

    {#if lightboxSrc}
        <div
            class="lightbox"
            onkeydown={(e) => e.key === "Escape" && closeLightbox()}
            onclick={closeLightbox}
            role="dialog"
            aria-modal="true"
            tabindex="-1"
        >
            <button
                class="close-btn"
                onclick={closeLightbox}
                aria-label="Close"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M6 6l12 12M6 18L18 6"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                </svg>
            </button>
            <div
                class="lightbox-inner"
                role="presentation"
                onclick={(e) => e.stopPropagation()}
            >
                <div class="lightbox-polaroid">
                    <img src={lightboxSrc} alt={lightboxLabel} />
                    <p>{lightboxLabel}</p>
                </div>
            </div>
        </div>
    {/if}
</section>

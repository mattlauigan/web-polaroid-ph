<script lang="ts">
    import {
        SupabaseClient,
        type PostgrestSingleResponse,
    } from "@supabase/supabase-js";
    import { serviceCategories } from "./enums";
    import { supabase } from "./supabaseClient";
    import { onMount } from "svelte";

    type testimonialType = {
        client_name: string;
        event_category: serviceCategories;
        event_place: string;
        avatar: string;
        quote: string;
        stars: 1 | 2 | 3 | 4 | 5;
    };

    // const testimonials: testimonialType[] = [
    //     {
    //         client_name: "Maria Santos",
    //         event_category: serviceCategories.wed,
    //         event_place: "Tagaytay",
    //         avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    //         quote: "polaroid_ph made our wedding even more magical! Every guest was lining up for prints and everyone left with a smile. The team was so professional and the setup was absolutely beautiful.",
    //         stars: 5,
    //     },
    //     {
    //         client_name: "James Cruz",
    //         event_category: serviceCategories.corp,
    //         event_place: "BGC, Manila",
    //         avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    //         quote: "We hired them for our annual company gathering and the branded overlays were a hit! Great team, quick setup, and our employees loved taking home polaroid prints. 10/10 would book again.",
    //         stars: 5,
    //     },
    //     {
    //         client_name: "Lea Reyes",
    //         event_category: serviceCategories.debut ,
    //         event_place: "Cebu",
    //         avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    //         quote: "My daughter's debut was absolutely perfect. The polaroid booth was the star of the night. Guests couldn't stop taking photos and the props were so fun. Thank you polaroid_ph!",
    //         stars: 5,
    //     },
    //     {
    //         client_name: "Ryan Lim",
    //         event_category: serviceCategories.anniv,
    //         event_place: "Davao",
    //         avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    //         quote: "Booked them for our silver anniversary and they exceeded all expectations. The guestbook memory album they helped us create is something we'll cherish forever. Highly recommended!",
    //         stars: 5,
    //     },
    //     {
    //         client_name: "Carla Mendoza",
    //         event_category: serviceCategories.bday,
    //         event_place: "Quezon City",
    //         avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    //         quote: "The best addition to any party! Fast prints, amazing quality, and the team was so friendly and fun to work with. All my guests kept asking who the photographer was. Amazing service!",
    //         stars: 5,
    //     },
    // ];
    //   let testimonials: TestimonialData | null = $state(null); // Use 'let testimonials = null' if on Svelte 4
  
  

    let testimonials: testimonialType[] = $state([]);
    let loading = $state(true)
    let error = $state<string | null>(null);

  onMount(() => {
    const fetchTestimonials = async () => {
      try {
        loading = true;
        const { data, error: supabaseError } = await supabase
          .from("testimonials")
          .select();

        if (supabaseError) throw supabaseError;

        testimonials = data;
      } catch (err: any) {
        error = err.message || 'Failed to fetch testimonials';
      } finally {
        loading = false;
      }
    };

    fetchTestimonials();
  });

    let currentIndex = $state(0);
    let transitioning = $state(false);

    function goTo(index: number) {
        if (transitioning) return;
        transitioning = true;
        setTimeout(() => {
            currentIndex = index;
            transitioning = false;
        }, 200);
    }

    function prev() {
        goTo((currentIndex - 1 + testimonials.length) % testimonials.length);
    }

    function next() {
        goTo((currentIndex + 1) % testimonials.length);
    }

    $effect(() => {
        const interval = setInterval(next, 6000);
        return () => clearInterval(interval);
    });

    let showForm = $state(false);
    let formName = $state("");
    let formEmail = $state("");
    let formEvent = $state("");
    let formMessage = $state("");
    let formRating = $state(5);
    let formLoading = $state(false);
    let formSuccess = $state(false);
    let formError = $state("");

    async function submitTestimonial(e: Event) {
        e.preventDefault();
        formError = "";
        formLoading = true;

        const { error: dbError } = await supabase.from("testimonials").insert({
            name: formName,
            email: formEmail,
            event: formEvent,
            quote: formMessage,
            rating: formRating,
        });

        formLoading = false;

        if (dbError) {
            formError = "Something went wrong. Please try again.";
        } else {
            formSuccess = true;
            formName = "";
            formEmail = "";
            formEvent = "";
            formMessage = "";
            formRating = 5;
        }
    }
</script>

<section id="testimonials" class="testimonials">
    <div class="container">
        <div class="section-header">
            <span class="overline">What Clients Say</span>
            <h2>Testimonials</h2>
            <p class="section-desc">
                Don't just take our word for it — hear from the people who've
                celebrated with us.
            </p>
        </div>

        <div class="carousel">
            <div class="testimonial-card" class:fade={transitioning}>
                <div class="quote-icon">"</div>
                <p class="quote-text">{testimonials[currentIndex].quote}</p>
                <div class="stars">
                    {#each Array(testimonials[currentIndex].stars) as _}
                        <span class="star">★</span>
                    {/each}
                </div>
                <div class="reviewer">
                    <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].client_name}
                        class="avatar"
                    />
                    <div>
                        <strong>{testimonials[currentIndex].client_name}</strong
                        >
                        <span
                            >{testimonials[currentIndex].event_category} • {testimonials[
                                currentIndex
                            ].event_place}
                        </span>
                    </div>
                </div>
            </div>

            <div class="carousel-controls">
                <button class="ctrl-btn" onclick={prev} aria-label="Previous">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M12 5l-5 5 5 5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>

                <div class="dots">
                    {#each testimonials as _, i}
                        <button
                            class="dot"
                            class:active={i === currentIndex}
                            onclick={() => goTo(i)}
                            aria-label={`Go to testimonial ${i + 1}`}
                        ></button>
                    {/each}
                </div>

                <button class="ctrl-btn" onclick={next} aria-label="Next">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M8 5l5 5-5 5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>

        <div class="submission-section">
            <button
                class="submit-btn-toggle"
                onclick={() => (showForm = !showForm)}
            >
                {showForm ? "Cancel" : "Share Your Experience"}
            </button>

            {#if showForm}
                <div class="submission-form">
                    {#if formSuccess}
                        <div class="success-msg">
                            <div class="success-icon">🎉</div>
                            <h4>Thank You!</h4>
                            <p>
                                Your testimonial has been submitted and will be
                                featured soon.
                            </p>
                            <button
                                class="btn-reset"
                                onclick={() => {
                                    showForm = false;
                                    formSuccess = false;
                                }}>Close</button
                            >
                        </div>
                    {:else}
                        <form onsubmit={submitTestimonial}>
                            <h4>Share Your Feedback</h4>

                            <div class="form-row">
                                <div class="field">
                                    <label for="t-name">Your Name *</label>
                                    <input
                                        id="t-name"
                                        type="text"
                                        bind:value={formName}
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div class="field">
                                    <label for="t-email">Email *</label>
                                    <input
                                        id="t-email"
                                        type="email"
                                        bind:value={formEmail}
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div class="field">
                                <label for="t-event"
                                    >Event Type (e.g., Wedding, Birthday)</label
                                >
                                <input
                                    id="t-event"
                                    type="text"
                                    bind:value={formEvent}
                                    placeholder="Wedding · Tagaytay"
                                />
                            </div>

                            <div class="field">
                                <span>Rating</span>
                                <div class="rating-input">
                                    {#each [1, 2, 3, 4, 5] as rating}
                                        <button
                                            type="button"
                                            class="star-btn"
                                            class:active={formRating >= rating}
                                            onclick={() =>
                                                (formRating = rating)}
                                            aria-label={`${rating} stars`}
                                        >
                                            ★
                                        </button>
                                    {/each}
                                </div>
                            </div>

                            <div class="field">
                                <label for="t-msg">Your Testimonial *</label>
                                <textarea
                                    id="t-msg"
                                    bind:value={formMessage}
                                    placeholder="Share your experience with polaroid_ph..."
                                    rows="4"
                                    required
                                ></textarea>
                            </div>

                            {#if formError}
                                <p class="error-msg">{formError}</p>
                            {/if}

                            <button
                                type="submit"
                                class="submit-btn"
                                disabled={formLoading}
                            >
                                {formLoading
                                    ? "Submitting..."
                                    : "Submit Testimonial"}
                            </button>
                        </form>
                    {/if}
                </div>
            {/if}
        </div>

        <div class="trust-bar">
            {#each [["500+", "Events"], ["10K+", "Happy Clients"], ["5★", "Avg. Rating"], ["2019", "Est. Year"]] as [num, label]}
                <div class="trust-item">
                    <span class="trust-num">{num}</span>
                    <span class="trust-label">{label}</span>
                </div>
            {/each}
        </div>
    </div>
</section>

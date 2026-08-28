---
layout: page
permalink: /interests/
title: Beyond Research
nav: true
nav_order: 7
---

Beyond research, I find joy in photography, camping, and wandering through flea markets.

Travel introduces me to new places, new people, and the cultures that shape their ways of life. Along the way, photography allows me to pause, observe more closely, and preserve moments for years to come. Below is a selection of photographs I have captured on these journeys.

{% assign photo_collections = site.data.photo_collections | sort: "collection_order" %}
{% assign photo_files = site.static_files | sort: "path" %}
{% assign photo_extensions = ".jpg,.jpeg,.png,.webp,.gif,.avif" | split: "," %}

<div class="photo-collections">
  {% for collection in photo_collections %}
    {% assign photo_count = 0 %}
    {% for photo in photo_files %}
      {% assign photo_extension = photo.extname | downcase %}
      {% if photo.path contains collection.dir and photo_extensions contains photo_extension %}
        {% assign photo_count = photo_count | plus: 1 %}
      {% endif %}
    {% endfor %}
    {% if photo_count > 0 %}
    <section class="photo-collection" data-stacked-carousel tabindex="0" aria-label="{{ collection.collection_name }} photo collection">
      <header class="photo-collection__header">
        <div>
          <span class="photo-collection__eyebrow">Collection {{ collection.collection_order | prepend: "0" | slice: -2, 2 }}</span>
          <h2>{{ collection.collection_name }}</h2>
        </div>
        <span class="photo-collection__counter" aria-live="polite">1 / {{ photo_count }}</span>
      </header>

      <div class="stacked-carousel__stage">
        {% assign photo_number = 0 %}
        {% for photo in photo_files %}
          {% assign photo_extension = photo.extname | downcase %}
          {% if photo.path contains collection.dir and photo_extensions contains photo_extension %}
            <figure class="stacked-carousel__slide" data-slide-index="{{ photo_number }}">
              <img src="{{ photo.path | relative_url }}" alt="{{ collection.collection_name }} photograph {{ photo_number | plus: 1 }}" loading="lazy" decoding="async">
            </figure>
            {% assign photo_number = photo_number | plus: 1 %}
          {% endif %}
        {% endfor %}

        <div class="stacked-carousel__controls">
          <button type="button" data-carousel-prev aria-label="Previous {{ collection.collection_name }} photograph">←</button>
          <button type="button" data-carousel-next aria-label="Next {{ collection.collection_name }} photograph">→</button>
        </div>
      </div>
    </section>
    {% endif %}

{% endfor %}
</div>

<style>
  .photo-collections { display: grid; gap: 4.5rem; margin-top: 3rem; }
  .photo-collection { border-top: 1px solid var(--global-divider-color); outline: none; padding-top: 0.85rem; }
  .photo-collection:focus-visible { outline: 2px solid var(--global-theme-color); outline-offset: 0.6rem; }
  .photo-collection__header { align-items: end; display: flex; justify-content: space-between; margin-bottom: 1rem; }
  .photo-collection__header h2 { border: 0; margin: 0.15rem 0 0; padding: 0; }
  .photo-collection__eyebrow, .photo-collection__counter { color: var(--global-text-color-light); font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase; }
  .stacked-carousel__stage { aspect-ratio: var(--active-photo-ratio, 3 / 2); overflow: hidden; perspective: 1200px; position: relative; transition: aspect-ratio 300ms ease; }
  .stacked-carousel__slide { left: 11%; margin: 0; opacity: 0; pointer-events: none; position: absolute; top: 50%; transform: translateY(-50%) scale(0.78); transition: opacity 300ms ease, transform 380ms cubic-bezier(.2,.7,.2,1); width: 78%; z-index: 0; }
  .stacked-carousel__slide::after { bottom: 0.75rem; color: rgb(255 255 255 / 72%); content: "Zhongxin Hu"; font-size: 0.66rem; letter-spacing: 0.08em; pointer-events: none; position: absolute; right: 0.8rem; text-shadow: 0 1px 3px rgb(0 0 0 / 55%); text-transform: uppercase; z-index: 2; }
  .stacked-carousel__slide img { border: 1px solid rgb(255 255 255 / 24%); border-radius: 0.35rem; box-shadow: 0 1rem 2.4rem rgb(20 38 29 / 20%); display: block; height: auto; width: 100%; }
  .stacked-carousel__slide[data-position="0"] { opacity: 1; pointer-events: auto; transform: translateY(-50%) scale(1); z-index: 5; }
  .stacked-carousel__stage[data-active-orientation="portrait"] { aspect-ratio: auto; height: min(82vh, 50rem); }
  .stacked-carousel__slide[data-position="0"][data-orientation="portrait"] { height: min(76vh, 46rem); left: 50%; transform: translate(-50%, -50%); width: fit-content; }
  .stacked-carousel__slide[data-position="0"][data-orientation="portrait"] img { height: 100%; max-width: 78vw; width: auto; }
  .stacked-carousel__slide[data-position="-1"] { opacity: 0.58; transform: translate(-19%, -50%) scale(0.88) rotateY(5deg); z-index: 4; }
  .stacked-carousel__slide[data-position="1"] { opacity: 0.58; transform: translate(19%, -50%) scale(0.88) rotateY(-5deg); z-index: 4; }
  .stacked-carousel__slide[data-position="-2"] { opacity: 0.24; transform: translate(-31%, -50%) scale(0.78) rotateY(8deg); z-index: 3; }
  .stacked-carousel__slide[data-position="2"] { opacity: 0.24; transform: translate(31%, -50%) scale(0.78) rotateY(-8deg); z-index: 3; }
  .stacked-carousel__controls { display: flex; inset: 50% calc(11% + 0.55rem) auto; justify-content: space-between; pointer-events: none; position: absolute; transform: translateY(-50%); z-index: 8; }
  .stacked-carousel__controls button { align-items: center; backdrop-filter: blur(5px); background: rgb(247 250 247 / 78%); border: 1px solid rgb(79 126 102 / 32%); border-radius: 50%; box-shadow: 0 0.3rem 1rem rgb(20 38 29 / 16%); color: var(--global-theme-color-dark); display: inline-flex; font-size: 1.15rem; height: 2.6rem; justify-content: center; padding: 0; pointer-events: auto; width: 2.6rem; }
  .stacked-carousel__controls button:hover { background: rgb(247 250 247 / 94%); border-color: var(--global-theme-color); color: var(--global-theme-color-dark); }
  @media (max-width: 600px) {
    .photo-collections { gap: 3.5rem; }
    .stacked-carousel__stage { touch-action: pan-y; }
    .stacked-carousel__slide { left: 5%; width: 90%; }
    .stacked-carousel__stage[data-active-orientation="portrait"] { height: min(76vh, 40rem); }
    .stacked-carousel__slide[data-position="0"][data-orientation="portrait"] { height: min(70vh, 36rem); max-width: 90%; }
    .stacked-carousel__slide[data-position="0"][data-orientation="portrait"] img { max-width: 86vw; }
    .stacked-carousel__controls { inset-inline: calc(5% + 0.45rem); }
    .stacked-carousel__controls button { height: 2.35rem; width: 2.35rem; }
  }
  @media (prefers-reduced-motion: reduce) { .stacked-carousel__slide { transition: none; } }
</style>

<script>
  (() => {
    document.querySelectorAll('[data-stacked-carousel]').forEach((carousel) => {
      const slides = [...carousel.querySelectorAll('[data-slide-index]')];
      const counter = carousel.querySelector('.photo-collection__counter');
      const stage = carousel.querySelector('.stacked-carousel__stage');
      let active = 0;
      let pointerStart = null;

      const updateRatio = () => {
        const image = slides[active].querySelector('img');
        if (image.naturalWidth && image.naturalHeight) {
          const orientation = image.naturalHeight > image.naturalWidth ? 'portrait' : 'landscape';
          slides[active].dataset.orientation = orientation;
          stage.dataset.activeOrientation = orientation;
          stage.style.setProperty('--active-photo-ratio', `${image.naturalWidth} / ${image.naturalHeight}`);
        }
      };

      const render = () => {
        slides.forEach((slide, index) => {
          let offset = index - active;
          if (offset > slides.length / 2) offset -= slides.length;
          if (offset < -slides.length / 2) offset += slides.length;
          slide.dataset.position = Math.abs(offset) <= 2 ? offset : 'hidden';
          slide.setAttribute('aria-hidden', offset === 0 ? 'false' : 'true');
        });
        counter.textContent = `${active + 1} / ${slides.length}`;
        const activeImage = slides[active].querySelector('img');
        if (activeImage.complete) updateRatio();
        else activeImage.addEventListener('load', updateRatio, { once: true });
      };

      const move = (step) => { active = (active + step + slides.length) % slides.length; render(); };
      carousel.querySelector('[data-carousel-prev]').addEventListener('click', () => move(-1));
      carousel.querySelector('[data-carousel-next]').addEventListener('click', () => move(1));
      carousel.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') move(-1);
        if (event.key === 'ArrowRight') move(1);
        if (event.key === 'Home') { active = 0; render(); }
        if (event.key === 'End') { active = slides.length - 1; render(); }
      });
      stage.addEventListener('pointerdown', (event) => { pointerStart = event.clientX; });
      stage.addEventListener('pointerup', (event) => {
        if (pointerStart === null) return;
        const distance = event.clientX - pointerStart;
        if (Math.abs(distance) > 45) move(distance > 0 ? -1 : 1);
        pointerStart = null;
      });
      stage.addEventListener('pointercancel', () => { pointerStart = null; });
      render();
    });
  })();
</script>

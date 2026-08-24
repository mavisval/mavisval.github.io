---
layout: page
permalink: /interests/
title: Beyond Research
nav: true
nav_order: 7
---

Outside research, I enjoy photography. Use the arrows, keyboard, or swipe to browse each collection.

{% assign collection_data = "Iceland|iceland|dscf1415.jpg,dscf1706.jpg,dscf1694.jpg,dscf1693.jpg,dscf1692.jpg,dscf1660.jpg,dscf1655.jpg,dscf1646.jpg,dscf1631.jpg,dscf1567.jpg,dscf1350.jpg,dscf1344.jpg,dscf1290.jpg,dscf1285.jpg,dscf1246.jpg,dscf1752.jpg,dscf1725.jpg,dscf1721.jpg,dscf1657.jpg,dscf1613.jpg,dscf1612.jpg,dscf1611.jpg,dscf1606.jpg,dscf1594.jpg,dscf1590.jpg,dscf1554.jpg,dscf1543.jpg,dscf1533.jpg,dscf1496.jpg,dscf1504.jpg,dscf1452.jpg,dscf1370.jpg,dscf1359.jpg,dscf1338.jpg,dscf1321.jpg,dscf1301.jpg,dscf1274.jpg,dscf1270.jpg,dscf1201.jpg,dscf1188.jpg,dscf1198.jpg,dscf1654.jpg,dscf1624.jpg,dscf1620.jpg,dscf1609.jpg,dscf1448.jpg,dscf1440.jpg,dscf1347.jpg,dscf1336.jpg,dscf1317.jpg,dscf1242.jpg,dscf1228.jpg,dscf1125.jpg,dscf1069.jpg,dscf1071.jpg,dscf1473.jpg,dscf1307.jpg,dscf1090.jpg,dscf1060.jpg;Morocco|morocco|dscf7969.jpg,dscf7152.jpg,dscf7549.jpg,dscf8001.jpg,dscf8015.jpg,dscf8031.jpg,dscf7742.jpg,dscf7811.jpg,dscf7822.jpg,dscf7555.jpg,dscf7093.jpg,dscf7040.jpg,dscf7337.jpg,dscf7382.jpg,dscf7525.jpg,dscf7010.jpg,dscf7042.jpg,dscf7329.jpg,dscf7388.jpg,dscf7522.jpg,dscf7013.jpg,dscf7656.jpg,dscf7663.jpg,dscf7664.jpg,dscf7676.jpg,dscf8017.jpg,chefchaouen-clock.jpg,chefchaouen-alley.jpg,chefchaouen-blue-street.jpg,chefchaouen-courtyard.jpg;Dolomites|dolomites|dolomites-01.jpg,dolomites-02.jpg,dolomites-03.jpg,dolomites-04.jpg,dolomites-05.jpg,dolomites-06.jpg,dolomites-07.jpg,dolomites-08.jpg,dolomites-09.jpg,dolomites-10.jpg;Others|others|others-01.jpg,others-02.jpg,others-03.jpg,others-04.jpg,others-05.jpg" | split: ";" %}

<div class="photo-collections">
  {% for collection in collection_data %}
    {% assign fields = collection | split: "|" %}
    {% assign photos = fields[2] | split: "," %}
    <section class="photo-collection" data-stacked-carousel tabindex="0" aria-label="{{ fields[0] }} photo collection">
      <header class="photo-collection__header">
        <div>
          <span class="photo-collection__eyebrow">Collection {{ forloop.index | prepend: "0" | slice: -2, 2 }}</span>
          <h2>{{ fields[0] }}</h2>
        </div>
        <span class="photo-collection__counter" aria-live="polite">1 / {{ photos.size }}</span>
      </header>

      <div class="stacked-carousel__stage">
        {% for photo in photos %}
          {% capture image_path %}/assets/img/{{ fields[1] }}/{{ photo }}{% endcapture %}
          <figure class="stacked-carousel__slide" data-slide-index="{{ forloop.index0 }}">
            <img src="{{ image_path | relative_url }}" alt="{{ fields[0] }} photograph {{ forloop.index }}" loading="lazy" decoding="async">
          </figure>
        {% endfor %}
      </div>

      <div class="stacked-carousel__controls">
        <button type="button" data-carousel-prev aria-label="Previous {{ fields[0] }} photograph">←</button>
        <button type="button" data-carousel-next aria-label="Next {{ fields[0] }} photograph">→</button>
      </div>
    </section>
  {% endfor %}
</div>

<style>
  .photo-collections { display: grid; gap: 5rem; margin-top: 2.5rem; }
  .photo-collection { outline: none; }
  .photo-collection:focus-visible { outline: 2px solid var(--global-theme-color); outline-offset: 0.75rem; }
  .photo-collection__header { align-items: end; display: flex; justify-content: space-between; margin-bottom: 1rem; }
  .photo-collection__header h2 { margin: 0.15rem 0 0; }
  .photo-collection__eyebrow, .photo-collection__counter { color: var(--global-text-color-light); font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase; }
  .stacked-carousel__stage { height: clamp(20rem, 58vw, 42rem); overflow: hidden; perspective: 1200px; position: relative; }
  .stacked-carousel__slide { height: 88%; left: 11%; margin: 0; opacity: 0; pointer-events: none; position: absolute; top: 4%; transform: translateX(0) scale(0.74); transition: opacity 360ms ease, transform 420ms cubic-bezier(.2,.7,.2,1); width: 78%; z-index: 0; }
  .stacked-carousel__slide img { background: #111; border-radius: 0.6rem; box-shadow: 0 1.25rem 3rem rgb(0 0 0 / 28%); height: 100%; object-fit: contain; width: 100%; }
  .stacked-carousel__slide[data-position="0"] { opacity: 1; pointer-events: auto; transform: translateX(0) scale(1); z-index: 5; }
  .stacked-carousel__slide[data-position="-1"] { opacity: 0.64; transform: translateX(-18%) scale(0.88) rotateY(7deg); z-index: 4; }
  .stacked-carousel__slide[data-position="1"] { opacity: 0.64; transform: translateX(18%) scale(0.88) rotateY(-7deg); z-index: 4; }
  .stacked-carousel__slide[data-position="-2"] { opacity: 0.28; transform: translateX(-31%) scale(0.77) rotateY(10deg); z-index: 3; }
  .stacked-carousel__slide[data-position="2"] { opacity: 0.28; transform: translateX(31%) scale(0.77) rotateY(-10deg); z-index: 3; }
  .stacked-carousel__controls { display: flex; gap: 0.6rem; justify-content: center; margin-top: 0.8rem; }
  .stacked-carousel__controls button { align-items: center; background: var(--global-bg-color); border: 1px solid var(--global-divider-color); border-radius: 50%; color: var(--global-text-color); display: inline-flex; font-size: 1.25rem; height: 2.8rem; justify-content: center; transition: background 160ms ease, color 160ms ease; width: 2.8rem; }
  .stacked-carousel__controls button:hover { background: var(--global-theme-color); color: #fff; }
  @media (max-width: 600px) {
    .photo-collections { gap: 3.5rem; }
    .stacked-carousel__stage { height: 65vw; min-height: 16rem; }
    .stacked-carousel__slide { height: 92%; left: 5%; width: 90%; }
  }
  @media (prefers-reduced-motion: reduce) { .stacked-carousel__slide { transition: none; } }
</style>

<script>
  (() => {
    document.querySelectorAll('[data-stacked-carousel]').forEach((carousel) => {
      const slides = [...carousel.querySelectorAll('[data-slide-index]')];
      const counter = carousel.querySelector('.photo-collection__counter');
      let active = 0;
      let touchStart = null;

      const render = () => {
        slides.forEach((slide, index) => {
          let offset = index - active;
          if (offset > slides.length / 2) offset -= slides.length;
          if (offset < -slides.length / 2) offset += slides.length;
          slide.dataset.position = Math.abs(offset) <= 2 ? offset : 'hidden';
          slide.setAttribute('aria-hidden', offset === 0 ? 'false' : 'true');
        });
        counter.textContent = `${active + 1} / ${slides.length}`;
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
      carousel.addEventListener('touchstart', (event) => { touchStart = event.changedTouches[0].clientX; }, { passive: true });
      carousel.addEventListener('touchend', (event) => {
        if (touchStart === null) return;
        const distance = event.changedTouches[0].clientX - touchStart;
        if (Math.abs(distance) > 45) move(distance > 0 ? -1 : 1);
        touchStart = null;
      }, { passive: true });
      render();
    });
  })();
</script>

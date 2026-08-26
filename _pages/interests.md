---
layout: page
permalink: /interests/
title: Beyond Research
nav: true
nav_order: 7
---

Outside research, I enjoy photography. These collections gather landscapes and small details from my travels.

{% assign photo_collections = site.pages | where: "photo_collection", true | sort: "collection_order" %}
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
    <section class="photo-collection" aria-label="{{ collection.collection_name }} photo collection">
      <header class="photo-collection__header">
        <div>
          <span class="photo-collection__eyebrow">Collection {{ collection.collection_order | prepend: "0" | slice: -2, 2 }}</span>
          <h2>{{ collection.collection_name }}</h2>
        </div>
        <span class="photo-collection__counter">{{ photo_count }} photographs</span>
      </header>

      <div class="photo-contact-sheet">
        {% assign photo_number = 0 %}
        {% for photo in photo_files %}
          {% assign photo_extension = photo.extname | downcase %}
          {% if photo.path contains collection.dir and photo_extensions contains photo_extension %}
            {% assign sheet_position = photo_number | modulo: 5 %}
            <figure class="photo-contact-sheet__item{% if sheet_position == 0 %} photo-contact-sheet__item--featured{% endif %}">
              <img src="{{ photo.path | relative_url }}" alt="{{ collection.collection_name }} photograph {{ photo_number | plus: 1 }}" loading="lazy" decoding="async">
              <figcaption>{{ collection.collection_name }} · {{ photo_number | plus: 1 | prepend: "0" | slice: -2, 2 }}</figcaption>
            </figure>
            {% assign photo_number = photo_number | plus: 1 %}
          {% endif %}
        {% endfor %}
      </div>
    </section>
    {% endif %}

{% endfor %}
</div>

<style>
  .photo-collections { display: grid; gap: 4.5rem; margin-top: 3rem; }
  .photo-collection { border-top: 1px solid var(--global-divider-color); padding-top: 0.85rem; }
  .photo-collection__header { align-items: end; display: flex; justify-content: space-between; margin-bottom: 1rem; }
  .photo-collection__header h2 { border: 0; margin: 0.15rem 0 0; padding: 0; }
  .photo-collection__eyebrow, .photo-collection__counter { color: var(--global-text-color-light); font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase; }
  .photo-contact-sheet { display: grid; gap: 0.85rem; grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .photo-contact-sheet__item { margin: 0; position: relative; }
  .photo-contact-sheet__item--featured { grid-column: 1 / -1; }
  .photo-contact-sheet__item::after { bottom: 2.3rem; color: rgb(255 255 255 / 72%); content: "Zhongxin Hu"; font-size: 0.66rem; letter-spacing: 0.08em; pointer-events: none; position: absolute; right: 0.75rem; text-shadow: 0 1px 3px rgb(0 0 0 / 55%); text-transform: uppercase; }
  .photo-contact-sheet__item img { background: #111; display: block; height: clamp(15rem, 34vw, 27rem); object-fit: cover; width: 100%; }
  .photo-contact-sheet__item--featured img { height: clamp(22rem, 56vw, 43rem); }
  .photo-contact-sheet__item figcaption { color: var(--global-text-color-light); font-size: 0.74rem; letter-spacing: 0.04em; padding-top: 0.35rem; text-transform: uppercase; }
  @media (max-width: 600px) {
    .photo-collections { gap: 3.5rem; }
    .photo-contact-sheet { grid-template-columns: 1fr; }
    .photo-contact-sheet__item--featured { grid-column: auto; }
    .photo-contact-sheet__item img, .photo-contact-sheet__item--featured img { height: auto; }
  }
</style>

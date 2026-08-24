---
layout: page
permalink: /interests/
title: Beyond Research
nav: true
nav_order: 7
---

<div class="interest-introduction" markdown="1">

Beyond research, I find joy in photography, camping, and wandering through flea markets.

Travel introduces me to new places, new people, and the cultures that shape their ways of life. Along the way, photography allows me to pause, observe more closely, and preserve moments for years to come. Below is a selection of photographs I have captured on these journeys.

</div>

<div class="interest-gallery">
  <section class="gallery-collection">
    <div class="gallery-heading">
      <p>Collection 01</p>
      <h2>Iceland</h2>
    </div>
    <div class="gallery-grid">
      {% assign iceland_photos = "dscf1415.jpg,dscf1706.jpg,dscf1694.jpg,dscf1693.jpg,dscf1692.jpg,dscf1660.jpg,dscf1655.jpg,dscf1646.jpg,dscf1631.jpg,dscf1567.jpg,dscf1350.jpg,dscf1344.jpg,dscf1290.jpg,dscf1285.jpg,dscf1246.jpg,dscf1752.jpg,dscf1725.jpg,dscf1721.jpg,dscf1657.jpg,dscf1613.jpg,dscf1612.jpg,dscf1611.jpg,dscf1606.jpg,dscf1594.jpg,dscf1590.jpg,dscf1554.jpg,dscf1543.jpg,dscf1533.jpg,dscf1496.jpg,dscf1504.jpg,dscf1452.jpg,dscf1370.jpg,dscf1359.jpg,dscf1338.jpg,dscf1321.jpg,dscf1301.jpg,dscf1274.jpg,dscf1270.jpg,dscf1201.jpg,dscf1188.jpg,dscf1198.jpg,dscf1654.jpg,dscf1624.jpg,dscf1620.jpg,dscf1609.jpg,dscf1448.jpg,dscf1440.jpg,dscf1347.jpg,dscf1336.jpg,dscf1317.jpg,dscf1242.jpg,dscf1228.jpg,dscf1125.jpg,dscf1069.jpg,dscf1071.jpg,dscf1473.jpg,dscf1307.jpg,dscf1090.jpg,dscf1060.jpg" | split: "," %}
      {% for photo in iceland_photos %}
        <figure>
          <img src="{{ '/assets/img/iceland/' | append: photo | relative_url }}" alt="Iceland landscape and travel photograph" loading="lazy">
        </figure>
      {% endfor %}
    </div>
  </section>

  <section class="gallery-collection">
    <div class="gallery-heading">
      <p>Collection 02</p>
      <h2>Places & details</h2>
    </div>
    <div class="gallery-grid">
      <figure>
        <img src="{{ '/assets/img/10.jpg' | relative_url }}" alt="Historic city architecture" loading="lazy">
      </figure>
      <figure>
        <img src="{{ '/assets/img/8.jpg' | relative_url }}" alt="Green door and window" loading="lazy">
      </figure>
      <figure class="gallery-wide">
        <img src="{{ '/assets/img/6.jpg' | relative_url }}" alt="Hot-air balloons above a valley" loading="lazy">
      </figure>
    </div>
  </section>
</div>

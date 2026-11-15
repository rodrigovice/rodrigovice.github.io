---
layout: default
nav: home
title: Rodrigo Vicente
---
<section class="hero wrap">
  <div class="hero-copy"><p class="eyebrow"><span class="status-dot"></span> theoretical (astro)physicist · Amsterdam</p><h1><span class="headline-line">strong gravity.</span><span class="headline-line">gravitational waves.</span><em class="headline-line">dark matter.</em></h1><p class="hero-description">Searching for dark matter and new fundamental physics through gravitational waves and strong gravity.</p><div class="hero-actions"><a class="button" href="{{ '/research/' | relative_url }}">explore my research <span aria-hidden="true">↗</span></a><a class="hero-secondary" href="https://inspirehep.net/authors/1418746">publication list <span aria-hidden="true">↗</span></a></div></div>
  <figure class="hero-portrait"><img src="{{ '/assets/bkboard_bw.jpeg' | relative_url }}" alt="Rodrigo Vicente discussing physics at a blackboard" width="900" height="1100" fetchpriority="high"><figcaption><span>Rodrigo Vicente</span><span>GRAPPA Postdoctoral Fellow<br>University of Amsterdam</span></figcaption></figure>
</section>
<section class="intro-strip wrap"><p>Everything we know about dark matter comes from gravity. Where better to look than <em>around black holes?</em><br>And... how better than with <em>gravitational waves?</em></p></section>
<section class="section wrap" aria-labelledby="research-heading">
  <div class="section-heading"><div><h2 class="eyebrow" id="research-heading">01 / Research</h2></div><a class="text-link" href="{{ '/research/' | relative_url }}">want to know more? <span aria-hidden="true">↗</span></a></div>
  <div class="research-grid">
    <a class="research-item" href="{{ '/research/#environments' | relative_url }}"><span class="research-number">I</span>{% include circumbinary-disc.html %}<h3>Peeking around black holes and binaries.</h3><p>Studying how gas, stars, and dark matter shape the evolution of compact binaries.</p><span class="text-link">Matter matters. <span aria-hidden="true">↗</span></span></a>
    <a class="research-item" href="{{ '/research/#waves' | relative_url }}"><span class="research-number">II</span>{% include gw-waveforms.html %}<h3>Searching for new physics in waveforms.</h3><p>Modelling how (dark) matter affects gravitational-wave signals and testing its signatures against observations.</p><span class="text-link">Reading GW signals. <span aria-hidden="true">↗</span></span></a>
    <a class="research-item" href="{{ '/research/#dark-matter' | relative_url }}"><span class="research-number">III</span>{% include dark-matter-halo.html %}<h3>Illuminating the dark sector with gravity.</h3><p>Developing new gravitational probes of dark matter and its microscopic properties.</p><span class="text-link">Revealing the invisible. <span aria-hidden="true">↗</span></span></a>
  </div>
</section>
<section class="results-band"><div class="section wrap" aria-labelledby="results-heading"><div class="section-heading"><div><h2 class="eyebrow" id="results-heading">02 / Highlights</h2></div><a class="text-link" href="{{ '/publications/' | relative_url }}">selected publications <span aria-hidden="true">↗</span></a></div>{% if site.data.highlights.size > 0 %}<div class="highlights-grid">{% for highlight in site.data.highlights %}{% include highlight.html %}{% endfor %}</div>{% else %}{% include results-empty.html %}{% endif %}</div></section>
<section class="section wrap" aria-labelledby="news-heading"><div class="section-heading"><div><h2 class="eyebrow" id="news-heading">03 / News & notes</h2></div><a class="text-link" href="{{ '/blog/' | relative_url }}">all updates <span aria-hidden="true">↗</span></a></div>{% if site.posts.size > 0 %}{% for post in site.posts limit: 3 %}{% include news.html %}{% endfor %}{% else %}{% include news-empty.html %}{% endif %}</section>
<section class="contact-strip wrap"><div><p class="eyebrow">Let’s connect</p></div><a class="button button-outline" href="{{ '/contact/' | relative_url }}">get in touch <span aria-hidden="true">↗</span></a></section>

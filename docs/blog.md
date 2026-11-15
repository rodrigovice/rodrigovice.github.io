---
layout: construction
title: News & notes
nav: news
eyebrow: From the notebook
intro: Research highlights, talks, and updates from my work.
permalink: /blog/
---
<div class="news-list">{% if site.posts.size > 0 %}{% for post in site.posts %}{% include news.html level=2 excerpts=true %}{% endfor %}{% else %}{% include news-empty.html level=2 %}{% endif %}</div>
<a class="text-link archive-link" href="{{ '/feed.xml' | relative_url }}">Follow updates via RSS ↗</a>

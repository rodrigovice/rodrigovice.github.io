# Updating the website

The site keeps the GitHub Pages / Jekyll setup. The design is self-contained; it does not rely on a remote theme or an external font service.

## Add a news item or research note

Create a Markdown file in `_posts/`, named `YYYY-MM-DD-short-title.md`. Start it with:

```yaml
---
title: Your update title
category: Research
subtitle: An optional one-line introduction.
---
A short opening paragraph, used in the news archive.

<!--more-->

The rest of your update. Add headings, links, and images as needed.
```

Use an actual date on or before today. Future-dated posts stay hidden until a build on or after that date. Categories can be Research, Talk, News, or any label you prefer. Posts automatically appear on the homepage, the news archive at `/blog/`, and the RSS feed. The empty state disappears when the first post is added.

## Add a selected publication

Replace `[]` in `_data/papers.yml` with a list of entries. Add newer items at the top:

```yaml
- title: "Full paper title"
  year: 2026
  authors: "Author names"
  venue: "Journal reference or arXiv identifier"
  topic: "Dark matter"
  url: "https://arxiv.org/abs/YOUR-PAPER-ID"
  summary: "A short explanation of the result."
```

All appear at `/publications/`. Homepage highlights are edited separately in `_data/highlights.yml`. The complete publication list always links to INSPIRE. Topic filters are created automatically from the `topic` labels you use. Search matches titles, authors, and summaries.

## Expand the research overview

Edit `research.md`. Each of the three sections already has a stable anchor for the homepage links. Add text or figures inside those sections as you develop them.

## Update biography and contact details

- `resume.md`: biography and academic experience; retains the original `/resume/` address.
- `contact.md`: contact page.
- `_config.yml`: name, email, description, and site URL.
- `index.md`: homepage introduction and section order.
- `assets/css/main.css`: colours, type sizes, and layout.

## Preview and publish

With a current Ruby installation and Bundler:

```sh
cd docs
bundle install
bundle exec jekyll serve
```

Open the local address printed by Jekyll. Keep GitHub Pages configured to build from `docs/` on your existing publishing branch. Push the reviewed changes to that branch when ready. No hosting migration is required.

The `_posts/` directory and selected publication list are intentionally empty. No example articles, papers, or announcements are published.

## Edit homepage highlights

`_data/highlights.yml` contains the short homepage summaries. Each entry has a `title`, a `summary`, and a `links` list. Each link has a `label` and a `url`. Keep the summaries brief; use the links to direct readers to individual papers.

## Restore a page under construction

Research, Publications, and News currently use `layout: construction`. About and Contact use `layout: page` and are visible. Their existing content remains in the original source files. When a page is ready, change its front matter back to `layout: page` to display it.

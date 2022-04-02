---
permalink: test
title: "Test Page"
---

({{ site.manifesto | default: 'unknown-manifesto' }})

({{ site.manifest | default: 'unknown-manifest' }})

({{ site.favicon }})

{% if site.favicon %}

yes

{{ '/favicon.ico' | relative_url }}

{% else %}

no

{% endif %}

***

{% include back.html %}

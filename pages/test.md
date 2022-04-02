---
title: "Test Page"
---

{{ site.favicon }}

{% if site.favicon %}

yes

{{ '/favicon.ico' | relative_url }}

{% endif %}

***

{% include back.html %}

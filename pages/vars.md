---
permalink: vars
title: "Site's variables"
---

<style>.markdown-body .highlight pre{max-height:400px}</style>

```yml

theme: {{ site.theme }}
remote_theme: {{ site.remote_theme }}

title: {{ site.title }}
description: {{ site.description }}

```

##### site.github

```json
{{ site.github }}
```

##### page

```json
{{ page }}
```

***

{% include back.html %}

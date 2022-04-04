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

```yml
{
  baseUrl: {{ site.github.baseUrl }},
  build_revision: {{ site.github.build_revision }},
  clone_url: {{ site.github.clone_url }},
  contributors: {{ site.github.contributors.length }},
  environment: {{ site.github.environment }},
  issues_url: {{ site.github.issues_url }},
  language: {{ site.github.language }},
  license: {{ site.github.license }},
  owner: {{ site.github.owner }},
  owner_gravatar_url: {{ site.github.owner_gravatar_url }},
  owner_name: {{ site.github.owner_name }},
  owner_url: {{ site.github.owner_url }},
  project_tagline: {{ site.github.project_tagline }},
  project_title: {{ site.github.project_title }},
  latest_release: {{ site.github.latest_release }},
  releases: {{ site.github.releases.length }},
  releases_url: {{ site.github.releases_url }},
  repository_name: {{ site.github.repository_name }},
  repository_nwo: {{ site.github.nwo }},
  repository_url: {{ site.github.repository_url }},
  show_downloads: {{ site.github.show_downloads }},
  url: {{ site.github.url }},
  wiki_url: {{ site.github.wiki_url }},
  tar_url: {{ site.github.tar_url }},
  zip_url: {{ site.github.zip_url }}
}
```

##### site.sass

```json
{{ site.sass }}
```

##### page

```yml
permalink: {{ page.permalink }}
title: {{ page.title }}
layout: {{ page.layout }}
content: # content
dir: {{ page.dir }}
name: {{ page.name }}
path: {{ page.path }}
url: {{ page.url }}
```

***

{% include back.html %}

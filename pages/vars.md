---
permalink: vars
title: "Site's variables"
---

```yml

theme: {{ site.theme }}
remote_theme: {{ site.remote_theme }}

title: {{ site.title }}
description: {{ site.description }}

```
{: height="10em" }

##### site.github

```json
{{ site.github }}
```
{: height="10em" }

##### page

```json
{{ page }}
```
{: height="10em" }

***

1. {% github_edit_link "Improve this page" %}

2. {% github_edit_link %}

3. {{ github_edit_link }}

4. {{ github }}

5. {{ github.edit_link }}

6. {{ site }}

7. {{ site.github }}

8. {{ site.github.edit_link }}

***

{% include back.html %}

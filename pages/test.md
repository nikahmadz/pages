---
permalink: test
title: "Test Page"

categories:
---

# {{ page.title }}

{{ site.time | date: '%Y' }}
{{ site.url }}

#### breadcrumbs

{% if page.categories and page.categories != empty %}
<nav id="breadcrumbs">
<a href="{{ site.url }}">Home</a> /
<a href="{{ site.url }}{{ page.categories | first }}/">{{ page.categories | first | replace: '-',' ' | capitalize }}</a>
</nav>
{% endif %}

#### pagination

<nav class="pagination">
{% capture collection %}{{ include.collections }}{% endcapture %}
{% for post in site.[collection] %}
	{% if post.url == page.url %}
	  {% assign post_index0 = forloop.index0 %}
	  {% assign post_index1 = forloop.index %}
	{% endif %}
{% endfor %}
{% for post in site.[collection] %}
	{% if post_index0 == forloop.index %}{% assign next_post = post %}{% endif %}
	{% if post_index1 == forloop.index0 %}{% assign prev_post = post %}{% endif %}
{% endfor %}
{% if prev_post %}<a class="prev" href="{{ site.url }}{{ prev_post.url }}">{{ prev_post.title }}</a>{% endif %}
{% if next_post %}<a class="next" href="{{ site.url }}{{ next_post.url }}">{{ next_post.title }}</a>{% endif %}
</nav>


<div style="margin-top:4rem"></div>

***

{% include back.html %}

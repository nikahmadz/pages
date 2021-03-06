## Getting started

If you're not familiar with **Github Pages**
check out the [official documentation][documentation] to know how it works.

Go to your **Github** repository and follow this guide to get it up and running.

[new]: https://github.com/new "Create new repository"
[documentation]: https://docs.github.com/en/pages "Github Pages Documentation"

#### Using template remotely
{: .text-green }

Simply set the `remote_theme` value in your `_config.yml` file.

```yml
remote_theme: {{ site.github.repository_nwo }}
```

1. Open your site's repository. Edit the content of  `_config.yml` file.
2. Remove existing values of `theme` and `remote_theme` and set the new value as above.
3. Then activate **Github Pages**.


#### Activating Github Pages
{: .text-green }

Go to **Github Pages Settings** of your repository.  
`//github.com/<user-name>/<repo-name>/settings/pages`

1. Scroll down to the **Source** section.
2. Choose the source of your website. eg: `main/(root)`
3. Click **Save**.

- Your app will be accessible at `//<user-name>.github.io/<repo-name>`.


#### Writing content
{: .text-green }

**Github Pages** uses [Jekyyll][jekyllrb.com] to build your website.
Familiarize your self on the basics of [front-matter][],
[writing posts][], and [creating pages][].

On every content you create, start with the following **front-matter**.
If you don't specify the value, default is used.

[jekyllrb.com]: https://jekyllrb.com/
[front-matter]: https://jekyllrb.com/docs/frontmatter/ "Read more"
[writing posts]: https://jekyllrb.com/docs/posts/
[creating pages]: https://jekyllrb.com/docs/pages/

```yml
---
layout: layout-name
title: "Title of the article"
description: "Short description for the article."
site_title: # (optional: false) will hide first <h1>
permalink: # (optional: permalink)
---
```


***

## Using markdown

Markdown is a lightweight and easy-to-use syntax for styling your content. It includes &hellip;

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

{% include edit-this.html %}

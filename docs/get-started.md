## Getting started with Pages

#### Using template remotely

1. Edit the content `_config.yml` file of your site's repository.
2. Remove existing values of `theme` and `remote_theme`.
3. Then activate **Github Pages**.

```yml
# The theme of your site
remote_theme: nikahmadz/pages@v0.1.12
```


#### Activating Github Pages

Go to **Github Pages Settings** of your repository.  
`//github.com/<user-name>/<repo-name>/settings/pages`

1. Scroll down to the **Source** section.
2. Choose the source of your website. eg: `main/(root)`
3. Click **Save**.

- Your app will be accessible at `//<user-name>.github.io/<repo-name>`.
- Find out how you can [customize your theme here](https://github.com/pages-themes).


#### Writing content

On every content you create, start with the following front-matter.
If you don't specify the `layout` value, default value is used.

```yml
---
layout: layout-name
title: "Title of the article" # (optional: page.title)
description: "Short description for the article." # (optional: page.description)
site_title: # (optional: false) will hide first <h1>
permalink: # (optional: permalink) path-name for the page
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

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
and check out the [documentation](https://docs.github.com/categories/github-pages-basics/).

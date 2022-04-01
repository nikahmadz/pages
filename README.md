# [Pages][intro]
>✨ Build beautiful website in minutes

***

This template helps you build websites on <b>Github</b>.
It has everything configured to get you started right away.
Maintain the content of your website with any code editor you like.
You can write your content in Markdown and HTML.
When you commit your code, <b>Github Pages</b> will build your website from the content of your files.

**[Get started][start]** &middot;
**[View on Github][github]** &middot;
**[Demo][demo]**

[intro]: https://nikahmadz.github.io/pages/ "Introduction to Pages"
[start]: #how-to-use-it "Find out how you can use this template to build websites"
[demo]:  #demo "View live demo"

***

<p><img src="https://picsum.photos/id/1039/1024/368" alt="Large image" class="width-full centered"></p>

> Images for this demo came from [picsum.photos](https://picsum.photos/) and [unsplash](https://unsplash.com)

***

## <span id="demo">Available layouts</span>

**Demo** :
**[Base](//nikahmadz.github.io/pages/demo/base)**
**[Prime](//nikahmadz.github.io/pages/demo/prime)**
**[Primer](//nikahmadz.github.io/pages/demo/primer)**

## How to use it?

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

***

## Getting help

Having trouble with **Github Pages**?
[Contact support](https://support.github.com/contact) to sort it out.

## Sponsor

🌱 If you use this work and like it, **please consider [supporting my work][pay]**, so I can continue making it better.

[pay]: https://nikahmadz.github.io/#!pay "See payment options"


<div style="margin-top:4rem"></div>

***

❤️ [nikahmadz][] &middot; [Github][github] &middot; [Discuss][discuss]

[nikahmadz]: https://nikahmadz.github.io "Go to nikahmadz.github.io"
[github]:    https://github.com/nikahmadz/pages "View source on Github"
[discuss]:   https://github.com/nikahmadz/pages/discussions "Lets discuss about Pages"

---
layout: primer
---
> **Template Demo**

<p class="bg-secondary p-3 text-slategray text-small">This template helps you build websites on <b>Github</b>.
It has everything pre-configured to get you started right away.
You can write your content in Markdown and HTML.
Maintain the content of your website with any code editor you like.
When you commit your code, <b>Github Pages</b> will build your website from the content of your files.</p>

**[Intro][intro]** &middot;
**[How to use it][how]** &middot;
**[View on Github][source]**

[intro]:  https://nikahmadz.github.io/pages/ "Introduction to Prime"
[how]:    https://nikahmadz.github.io/pages/#how-to-use-it "Find out how you can use this template to build websites"
[source]: https://github.com/nikahmadz/pages "View on Github"

***

## Write your content

![Small image](https://picsum.photos/id/299/400/300){: .centered.float-sm-right.m-sm-4 }

**Include image with floats and margins**.

<span class="text-gray">Following texts are meaningless fillers to fill up some space for the rest of this demo. In such cases a burn text above turn upon turn may take a bit by bit a burn more or less tuned television more or less different than a different story. Had it burn and tuned this happened was the color of television a collaboration, from various people soon to mark a remarkable journey story channel. This happened to people various bit by bit.</span>
{: .indent.text-justify }

<span class="text-gray">Each time and the story channel a different story all a different story, to a pleasure the color of television. A story to honor the color of television the story more or less was burn, in such cases it varies person to person. This happened to the color of television as pleasure.</span>
{: .indent.text-justify }

***

## Text styles &amp; color

Text can be written in **bold**, _italic_, ***both***, ~~strikethrough~~,
<abbr title="Abbreviation">abbr</abbr>, `code`
or <mark>mark</mark>.

<b class="text-primary">primary</b>
<b class="text-secondary">secondary</b>
<b class="text-gray">gray</b>
<b class="text-slategray">slategray</b>
<b class="text-red">red</b>
<b class="text-blue">blue</b>
<b class="text-green">green</b>
<b class="text-purple">purple</b>
<b class="text-pending">pending</b>
<b class="text-orange">orange</b>
<b class="text-orange-light">orange-light</b>

## Text blocks

> You can write a bunch of text in a blockquote.
>
> > A blockquote can be nested too.

<!-- This content will not appear in the rendered Markdown -->

## Collapsible blocks

<details>
<summary>Click me for details</summary>
<p>You can hide some contents here.</p>
</details>

## Code blocks

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

```
Long, single-line `code blocks` should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

## Include images big and small

Add full scale images, align them centered or float them left or right.

![Large image](https://picsum.photos/id/3/1024/368){: .width-full.centered }

> Images for this demo came from [picsum.photos](https://picsum.photos/)

***

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

***

## List

###### Unordered

- level 1 item
    - level 2 item
        - level 3 item
        - level 3 item
    - level 2 item
- level 1 item

###### Ordered

1. Item one
    1. Item a
        1. Item x
        1. Item y
    1. Item b
1. Item two


## Definitions

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1970</dd>
</dl>

## Table

###### Markdown table

| Description       | Status       | Notes      |
| :---------------- | :----------: | ---------: |
| good swedish fish | ok           | nice       |
| good and plenty   | out of stock | nice       |
| good `oreos`      | ok           | hmm        |
| good `zoute` drop | ok           | yumm       |

***

## Links

{% if site.posts.size > 0 %}

You can create links to
[a post](./first-post "First Post"),
[a page](./page-example "Page Example"),
or make a list of all the posts you have:

<ul>
  {% for post in site.posts %}
    <li><a href=".{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

{% else %}

You can create links to
[a page](./page-example "Page Example").

{% endif %}

If you link to a missing page, you'll see [an error](./404 "Page not found").

***

## Footnotes

A footnote[^1] creates a list of references at the bottom of a page.

Normally you would use number as reference [^2].

You can also use word as reference [^note].

[^1]: A footnote reference.

[^2]: Footnote can also have multiple lines.
    Every new line in footnote should be prefixed with 2 space or 4 space indentation.

[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  

***

<div class="text-center text-grey"> Ends </div>

***

[Home][1] &middot; [Github][2] &middot; [Discuss][3]

[1]:https://nikahmadz.github.io "Go to nikahmadz.github.io"
[2]:https://github.com/nikahmadz "Follow me on Github"
[3]:https://github.com/nikahmadz/nikahmadz.github.io/discussions "Go to Discussion Room"

***

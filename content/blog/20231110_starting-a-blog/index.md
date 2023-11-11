---
title: Starting a Blog
datePublished: November 10, 2023
---

Hello! This is my attempt at starting a blog. If there is at least one post after this, then you know that it was at least somewhat of a success.

I have two main reasons for starting this blog. The first is reputation. I opted to drop out of college after only my first year. I did this partly because I was offered a job, but also because I didn't believe that a Computer Science degree would provide me with much value besides the piece of paper that says I know stuff. Up until I attended college, everything I knew about computers had been self-taught. I did it out of curiosity and passion, and I even started working professionally before I attended college. Am I saying that Computer Science is a useless degree and that no one should do it? No. For someone who is genuinely new to the field, a Computer Science degree teaches you the fundamentals that you need to be successful. For me, I already had a solid understanding of the fundamentals, and even had experience working with specific technologies (mostly web), so I had to consider if the additional knowledge I'd gain from going to college was worth the hefty price tag. I knew that there were classes that could be useful, such as Data Science, Robotics, and some other electives, but I knew that I would have to take them with other classes that were probably not necessary or relevant for future work that I would do. I was a Computer Science major, and I was still required to take physics, biology, and chemistry. Considering all of that, and the fact that I had been offered a job during my first year, I decided that for me, college was not worth the hefty price tag. So I made the bet that I could be successful without it. However, if you don't have a piece of paper that says you know stuff, you have to demonstrate your knowledge and skills in other ways. Hence, I'm starting this blog.

The second reason for starting this blog is to build a repository of knowledge. I'm constantly learning things, and inevitably after enough time has passed, I forget what I have learned. I would like be able to go back and reference things that I have done and things that I learned along the way. By making it public, I have the added benefit of being able to share it with other people.

With all of that said, it's time to get into the meat of this blog post. Since these blog posts are about documenting how I did things, this blog post will be about creating this blog. So let's get started.

## Picking the tech stack

The first thing I had to consider is whether to use a blogging platform like [medium.com](https://medium.com) (or the decentralized version, [paragraph.xyz](https://paragraph.xyz)), or build off of my own website. While the ease of getting started with a platform like medium was attractive, I also feared what might happen if I entrusted my life's work to a platform that I didn't know the future of. What if I decide that I don't want to use medium anymore? Maybe they change their pricing or their interface in such a manner that I don't like? All of my content would be stuck there, and moving it out would be a pain. To be clear, these problems aren't unique to medium; any blogging platform would have the same problems. Considering these concerns, I decided that I want my blog articles to be written in markdown files. Markdown files are simple, the format is widely recognized and portable, meaning that I can use a vareity of different tools and technologies to display them, and I can store them wherever I want. By choosing to write my blog articles in markdown, I'm not locking myself into anything.

By the time I had started building the blog, I had already started building my personal website using [11ty](https://www.11ty.dev/). I decided to use 11ty because it was the easiest for me. Configuration files are written in JSON, templates can be written in a variety of different templating languages, it uses npm for its tooling (though I opted to use [bun](https://bun.sh)), and most importantly, it easily converts mardown files into html files using your templates. I didn't think it was worth using some fancy framework like Next or Nuxt because I figured that everything would be statically generated, and if I need a fancy UI framework, I can just include it later. The goal with this site is to keep it stupid simple.

To host the the actual site, I opted for [Netflify](https://netlify.com). This goes along with the theme of simplicity for this project. All you have to do to get started is upload a folder with static files, and Bob's your uncle. Netlify also has a build feature that allows you to run a build script when you push to a git repository (a feature that I ended up utilizing), but we'll get into that later.

## Getting started with 11ty

The cool thing about 11ty is that you can start using it without any configuration. The program simply scans your current directory for any source files, builds them into html files, and puts them in a directory called `_site`.

In order to use 11ty, you have to somehow get its npm package. I'm using [bun](https://bun.sh) because I'm cool 😎, but you could also use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com).

The first thing I tried was creating an `index.md` file in the root and placing the following contents inside of it:

```md
# Intro

Hello, world!
```

Then after running `bunx @11ty/eleventy`, it generated a file `_site/index.html` with the following contents:

```html
<h1>Intro</h1>
<p>Hello, world!</p>
```

If you want to use a custom layout, put it in the `_includes` directory. I created a file called `_includes/home-layout.hbs` with the following contents:

```handlebars
<html>
  <head>
    <title>Hello world</title>
  </head>

  <body>
    <h1>Cool site</h1>
    <main>\{{{ content }}}</main>
  </body>
</html>
```

The important part here is that `\{{{ content }}}` tells handlebars to render the content of the markdown file in raw html. The next step is to modify the markdown file to tell 11ty to use the layout. I modified `index.md` to look like this:

```markdown
---
layout: home-layout.hbs
---

# Intro

Hello, world!
```

Now when I run `bunx @11ty/eleventy`, it generates the following html file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello world</title>
  </head>

  <body>
    <h1>Cool site</h1>
    <main>
      <h1>Intro</h1>
      <p>Hello, world!</p>
    </main>
  </body>
</html>
```

Neat, huh?

## Setting up Vite and Sass

Even though CSS has gotten a lot of new features in the recent months, I still prefer to use [Sass](https://sass-lang.com/) because it has a few more features that I really like using (mainly nested selectors). Unfortunately, in order to use Sass, you need to somehow include the Sass compilation to the build step. This is usually done in a bundler, such as [Vite](https://vitejs.dev/). In addition to processing our Sass files, Vite will also allow us to easily bundle any frameworks (like [Vue](https://vuejs.org/)) for any pages that need it.

Fortunately, there is an 11ty plugin called [eleventy-plugin-vite](https://github.com/11ty/eleventy-plugin-vite) that uses Vite to post-process the files that 11ty generates. Getting it set up is easy. First, install the plugin:

```sh
bun install @11ty/eleventy-plugin-vite
```

Then create a `eleventy.config.js` file with the following contents:

```ts
const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin);
};
```

To get Sass working, simply install the `sass` package:

```sh
bun install sass
```

That's it! Now you can write `.sass` and `.scss` files and include them directly into your templates.

## Configuring syntax highlighting

A lot of my blog articles are going to include code samples. For those, I want syntax highlighting so that they're easy to read. For this, I'm using [Prism](https://prismjs.com/). To get it working, I first installed the `prismjs` package:

```sh
bun install prismjs
```

Then I created a script to load the Prism library and initialize it:

```ts
// scripts/prism.ts

import Prism from "prismjs";

// if you are intending to use Prism functions manually, you will need to set:
Prism.manual = true;

Prism.highlightAll();
```

Then in my template, I included the script:

```html
<!-- _includes/blog-post-layout.hbs -->
<script type="module" src="/scripts/prism.ts"></script>
```

I also installed the [vite-plugin-prismjs]() Vite plugin so that I could configure it with Vite. I modified my `eleventy.config.js` file to look like this:
```js
const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
const VitePrismPlugin = require("vite-plugin-prismjs").default;

module.exports = function (eleventyConfig) {
  // ...

  // Add the Vite plugin
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      plugins: [
        VitePrismPlugin({
          languages: [
            "markup",
            "markdown",
            "handlebars",
            "css",
            "shell",
            "clike",
            "javascript",
            "typescript",
          ],
          theme: "okaidia",
          css: true,
        }),
      ],
    },
  });

  // ...
};
```

Now all of my code has pretty syntax highlighting. Yay!

## Conclusion

That's it for this blog post. I hope you enjoyed it!

### Resources I used to build this project

- [11ty](https://www.11ty.dev/)
- [bun](https://bun.sh)
- [Netlify](https://netlify.com)
- [eleventy-plugin-vite](https://github.com/11ty/eleventy-plugin-vite)
- [Prism](https://prismjs.com/)
- [vite-plugin-prismjs](https://github.com/code-farmer-i/vite-plugin-prismjs)

# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./Screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Pruthuvi9/intro-component-with-signup-form-master)
- Live Site URL: [Add live site URL here](https://pruthuvi9.github.io/intro-component-with-signup-form-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- Mobile-first workflow
- Bootstrap
- Google Fonts

### What I learned

I learnt how to connect JS with HTML and CSS.

```js
if (firstName.value === '') {
    e.preventDefault();
    document.getElementById('first-name-error').innerText = 'First Name cannot be empty';
    
    firstName.style['border-color'] = 'hsl(0, 100%, 74%)';
    firstName.style['border-width'] = '3px';

    document.getElementById('error-icon-firstname').className = 'material-icons-outlined md-24';
    document.getElementById('error-icon-firstname').innerText = 'error';
  }
```

### Continued development

- Rebuild this with React and add a functioning backend using Node.js or SQL

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- (https://attacomsian.com/blog/javascript-set-css-styles) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.


## Author

- Frontend Mentor - [https://www.frontendmentor.io/profile/Pruthuvi9]
- Twitter - [https://twitter.com/pruthuvi1995]


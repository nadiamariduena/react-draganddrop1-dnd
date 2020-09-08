## APP in progress

#### Reorder a List with DND REACT

<h4>React DnD is built on top of the HTML5 drag and drop API. It is a reasonable default because it screenshots the dragged DOM node and uses it as a “drag preview” out of the box. It's handy that you don't have to do any drawing as the cursor moves. This API is also the only way to handle the file drop events.</h4>

<p>

Unfortunately, the HTML5 drag and drop API also has some downsides. It does not work on touch screens, and it provides less customization opportunities on IE than in other browsers.

This is why the HTML5 drag and drop support is implemented in a pluggable way in React DnD. You don't have to use it. You can write a different implementation, based on touch events, mouse events, or something else entirely. Such pluggable implementations are called the backends in React DnD. Only the HTML5 backend comes with the library, but more may be added in the future.

</p>

https://react-dnd.github.io/react-dnd/docs/overview - source!
[dnd](https://react-dnd.github.io/react-dnd/docs/overview)

<br>
<br>

### DND installation

```javascript

npm install --save react-dnd-html5-backend

npm i styled-components

npm install reset-css
```

<!-- https://github.com/react-dnd/react-dnd-html5-backend - More Info!
[dnd](https://github.com/react-dnd/react-dnd-html5-backend) -->

<a src="https://github.com/react-dnd/react-dnd-html5-backend">More Info! </a>

<br>
<br>

## STYLED COMPONENTS

<br>
<br>

<p>You know how you can call functions with parenthesis? (myFunc()) Well, now you can also call functions with backticks! (learn more about tagged template literals)</p>

<br>
<br>

```javascript
import styled from "styled-components";

const Button = styled.button``;
```

<p>This Button variable here is now a React component that you can use like any other React component! This unusual backtick syntax is a new JavaScript feature called a tagged template literal.</p>

### PRO & CONS

<p> This pseudo-code may very well work with existing solutions already, but I guess the first thing I’d ask myself if I found myself doing something like this would be, why not just use Sass, since it looks identical? Aside from the benefit of the potential for scoped styles (using some bespoke Sass library, or even a naming convention like BEM, could also solve the issue of scoping), this article notes that other reasons why people may choose CSS-in-JS over Sass include:

</p>

https://levelup.gitconnected.com/react-css-in-js-es6-objects-vs-tagged-template-literals-71670e78995f - More Info!
[React & CSS-in-JS: ES6 Objects vs Tagged Template Literals](https://levelup.gitconnected.com/react-css-in-js-es6-objects-vs-tagged-template-literals-71670e78995f)

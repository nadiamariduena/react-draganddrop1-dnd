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

``` npm install --save react-dnd-html5-backend

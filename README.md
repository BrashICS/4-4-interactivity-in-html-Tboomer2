# 4.4 - Interactivity in HTML

- This entire README is your task. Read it carefully and follow the instructions.

---

Working in the console has been fun, but it's not very interactive. Also, **the console is meant for developers, not users**. 

This repo contains a very simple HTML file with a few elements on the page. [Check it out](index.html).

Notice the head has a `<script>` tag that loads our [script.js](script.js) file. This tag will load _and run_ the JavaScript right away, so we add the `defer` attribute to tell the browser to load it last.
```JS
<script src="script.js" defer></script>
```

Let's test the loading of the script. Go to your [JavaScript file](script.js) and add a `console.log("Hello World!")`. Preview your [index.html file](index.html). **_Where's the console?_**

> _The console is hidden from the user. Press `CTRL+SHIFT+J` (⌘+option+J on a Mac) to open the developer tools. If that doesn't work, check your browser's documentation on how to open the developer console. (Sometimes F12)_

The console is helpful for _debugging_ and _testing_ but it also opens our code to mischief-makers who might play with our functions and variables.

- Want to print something more interesting? Try: `console.log(document.title)`

## Interactivity

Check out [the HTML file](index.html). You will see a `button` and a `span`.
```JS
<button id="click_btn">Click Me</button>
... <span id="click_count">0</span> ...
```

More importantly, notice how they have an `id`. This gives the element a _unique identifier_ so we can manipulate it with JavaScript.

#### Input
There are _several_ ways to [get input from the user](https://www.w3schools.com/js/js_input_examples.asp) but we'll start with a `click` _event_.

When a user uses the keyboard, clicks with the mouse, speaks into a microphone, moves the mouse, or touches their touchscreen - these are called **_events_**. In order to _react_ to an event, we register [an event listener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp).

To do this, we _attach_ (or add) the listener to an element on the document:
```JS
document.getElementById("unique_id").addEventListener(TYPE, FUNCTION_TO_CALL)

// Example
document.getElementById("my_button").addEventListener("click", my_func)

function my_func() {
  console.log("I was clicked!")
}
```

---

#### Let's try it:
In [your JavaScript file](#script.js), add an event listener to the button on your page. Have it call a function that prints "The button was clicked" to the console. _Test it_.

---

Lovely! But useless.

We want to update the value inside the `<span>` that keeps track of how many times we've clicked the button.

#### Output

We can manipulate any element in the Document Object Model (DOM) that has an identification. Most elements have `.innerText`, `.innerHTML` or `.textContent`. In our particular example, we will to modify the `.textContent`.
```JS
document.getElementById("my_element").textContent = "Some text"
```

#### Let's try it:

Let's have a **global** variable `clicks` that starts at 0 when the project loads.
```JS
let clicks = 0
```

Now let's modify our button click function so that it increases `clicks` by one and updates our `<span>` with the value. _Test it_.

## Your Task

Modify your page by adding two more buttons - give them unique identifiers. Have one of the buttons _reduce_ the value of clicks by one and the other button _reset_ the clicks to zero. These functions should also print to the console for testing purposes.

Feel free to modify any of the page content to your liking.



<br><br><br><br><br><br><br>
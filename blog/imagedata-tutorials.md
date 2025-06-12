<!DOCTYPE html>
<html>
<!--
  
  Sadly I didn't get this done before the contest ended :(
  
  11 Lessons, most which have an interactive demo at the end
  
  I tried to explain things quickly but also throughly so I hope you both understand and don't die of boredom.
  
  Suggestions for improvements and pointing out any spelling mistakes if I made any (because I working on this at one in the morning) would be cool.
  
-->
<head>
  <title>ImageData Tutorials</title>
  
  <!-- my CSS styling -->
  <style>
body {
    margin: 20px;
    font-family: trebuchet MS, sans-serif;
    font-size: 16px;
}

p {
    line-height: 24px;
}

canvas {
    margin: auto;
    display: block;
}

.page {
    display: none;
}

.lesson-link {
    display: block;
    background-color : rgb(13, 146, 63);
    color: white;
    text-align: center;
    font-size: 18px;
    padding: 15px;
    border-radius: 4px;
    margin-bottom: 8px;
    text-decoration: none;
}

.lesson-link:hover {
    background-color: rgb(8, 94, 41);
    cursor: pointer;
}

.lesson-link-left {
    width: 40%;
    float: left;
}

.lesson-link-right {
    width: 40%;
    float: right;
}

.lesson-link-small {
    width: 150px;
    height: 16px;
    padding-top: 9px;
}

.language-javascript {
    font-size: 14px !important;
}

.run-button {
    background-color: rgb(13, 146, 63);
    color: white;
    border: none;
    border-radius: 3px;
    padding: 10px;
    padding-left: 15px;
    padding-right: 15px;
}
.run-button:hover {
    background-color: rgb(8, 94, 41);
    cursor: pointer;
}

.output-container {
    border: none;
    width: 400px;
    height: 0px;
    overflow: hidden;
}

.editor {
    height: 300px;
}

  </style>
  
  <!-- import JQuery -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  
  <!-- import Prism.js -->
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-okaidia.min.css">
  <script src="https://cdn.jsdelivr.net/gh/vExcess/library_files@main/prism.js"></script>
  
  <!-- import Ace.js -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.1.9/ace.js"></script>
</head>
<body>

  <!-- HOME PAGE -->
  <div class="page">
    <h1>ImageData Tutorials</h1>
  
    <p>A year ago I had made an imageData tutorial program in PJS, but it wasn't great. It was hard to read and it had a lot of important information missing from it because I didn't really know imageData too well myself when I made that tutorial. So now I am making a new tutorial which I hope will be easier to read, will explain imageData more throughly and completely, and be interactive :D</p>
    
    <h2>Lessons:</h2>
    <a class="lesson-link" href="javascript: changePage(2)">Prerequisites --- Color</a>
    <a class="lesson-link" href="javascript: changePage(3)">Tutorial 1 --- What is imageData</a>
    <a class="lesson-link" href="javascript: changePage(4)">Tutorial 2 --- How to use imageData</a>
    <a class="lesson-link" href="javascript: changePage(5)">Tutorial 3 --- Non-grayscale background</a>
    <a class="lesson-link" href="javascript: changePage(6)">Tutorial 4 --- Calculating x and y coordinates</a>
    <a class="lesson-link" href="javascript: changePage(7)">Tutorial 5 --- Inverting colors</a>
    <a class="lesson-link" href="javascript: changePage(8)">Tutorial 6 --- Calculating index with x and y</a>
    <a class="lesson-link" href="javascript: changePage(9)">Tutorial 7 --- Optimizations</a>
    <a class="lesson-link" href="javascript: changePage(10)">Tutorial 8 --- PImages & Offscreen buffers</a>
    <a class="lesson-link" href="javascript: changePage(11)">Tutorial 9 --- Fixing Khan Academy bugs</a>
    <a class="lesson-link" href="javascript: changePage(12)">Tutorial 10 --- Using Processing.pixels</a>
    <a class="lesson-link" href="javascript: changePage(13)">Tutorial 11 --- imageData outside of PJS</a>
    
    <br><br><br>
  </div>
  
  <!-- PREREQUISITES PAGE -->
  <div class="page">
    <a class="lesson-link lesson-link-left lesson-link-small" href="javascript: changePage(1)">Home</a>
    <a class="lesson-link lesson-link-right lesson-link-small" href="javascript: changePage(3)">Next Lesson</a>
    
    <br><br>
    
    <h1>Color</h1>
    
    <h3>What is color?</h3>
    <p>
      Color is the visually perceptable property of light. There are many different colors such as red, orange, yellow, green, blue, purple, black, brown, white, etc. There's pretty much an infinite amount of colors. A cool property of light is that we can mix primary colors together to make other colors.
    </p>
    
    
    <br><h3>What are the primary colors?</h3>
    <p>
      Most people think the primary colors are red, yellow, and blue. But that is completely false. There is actually two ways of making color: additive and subtractive coloring. 
      
      <br><br>
      
      <strong>Subtractive color</strong> - Creating color by removing certain colors from white
      <br><br>
      In subtractive coloring the primary colors are cyan, magenta, and yellow. As you can see, you start off with white (all the colors) and by adding cyan, magenta, and yellow you are subracting other colors and by mixing all 3 together with white you get black.
    </p>
    
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/SubtractiveColor.svg" height="200">
    
    <p>
      <strong>Additive color</strong> - Creating color by adding light together
      <br><br>
      In additive coloring the primary colors are red, green, and blue. You can see that it starts off with black (the absence of color) and by adding red, green, and blue you are adding light and by mixing all 3 together you get white.
    </p>
    
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/AdditiveColor.svg" height="200">
    
    <br><br><br><h3>So what format do computers use?</h3>
    <p>
       Well think about it. The screen starts off as black (the absence of light) and then it creates light. That means that computer monitors use additive coloring. The computer monitor can create nearly any seeable color by emitting different combinations of red, green, and blue light.
      <br><br>
      There are different formats to store the amount of red, green, and blue to combine. But for this we simply store how much of red, green, and blue as an integer between 0 and 255 (inclusive). This, I would say, is the most common way to store color.
    </p>
    
    <br><h3>How can we manipulate a color?</h3>
    <p>
      <strong>Inverting a color:</strong>
      You can invert a color by setting it's red value to 255 minus the amount of red. And then doing the same for both green and blue.
      
      <br><br>
      
      <strong>Darkening a color:</strong>
      You can darken a color by multiplying each of it's red, green, and blue values by a number between 0 and 1.
      
      <br><br>
      
      <strong>Brightening a color:</strong>
      You can brighten a color by multiplying each of it's red, green, and blue values by a number greater than 1.
    </p>
    
    <br><h3>What is inverting a color?</h3>
    <p>
      Inverting a color is using the color on the opposite side of the color wheel from it. Intrestingly, red, green, and blue are the inverse colors for cyan, magenta, and yellow.
    </p>
    
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Hsv_color_circle.svg" height="200">
    
    <br><br><br>
    
    <a class="lesson-link lesson-link-left" href="javascript: changePage(1)">Home</a>
    <a class="lesson-link lesson-link-right" href="javascript: changePage(3)">Next Lesson</a>

  </div>
  
  <!-- TUTORIAL 1 PAGE -->
  <div class="page">
    <a class="lesson-link lesson-link-left lesson-link-small" href="javascript: changePage(2)">Previous Lesson</a>
    <a class="lesson-link lesson-link-right lesson-link-small" href="javascript: changePage(4)">Next Lesson</a>
    
    <br><br>
    
    <h1>What is imageData?</h1>
    
    <h3>First off, why learn to use imageData</h3>
    <p>There are many things that Khan Academy doesn't teach you that are good to know. imageData is one of them. imageData can be used to draw fancy graphics and gradients relatively quickly. The reason to learn imageData is because it is <strong>WAY</strong> faster than drawing a bunch of <em>point()</em> commands on the canvas.</p>

    <br><h3>What is imageData</h3>
    <p>imageData is an object that represents the pixel data of a canvas or image. The imageData object has 3 properties: <em>width</em>, <em>height</em>, and <em>data</em>. As you might expect the width property simply represents how many pixels wide the canvas is, and height represents how many pixels tall it is. The data property however, is where things get interesting.</p>
    
    <br><h3>imageData.data format</h3>
    <p>The data property is an array that stores all the pixel data of the canvas. You would expect the data to be stored in a grid made out of nested arrays where each coordinate has it's own color somewhat like so:</p>
    
    <pre><code class="language-javascript">[  
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,1,0,0,1,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,1,0,0,0,0,1,0],
  [0,0,1,1,1,1,0,0],
  [0,0,0,0,0,0,0,0]
]</code></pre>
    
    <p>
      But this it <strong>NOT</strong> the case. The data is actually stored in a single array of numbers. This array is not just a normal array however. It is a <em>Uint8ClampedArray</em>. This is a special kind of array called a typed array that is different than a normal array.
    </p>
    
    <br><h3>What is a Uint8ClampedArray?</h3>
    <p> 
      Uint8ClampedArray is a kind of typed array that is faster than normal array. Typed Arrays can only store numbers and don't have a lot of methods such as push() and splice().
      
      <br><br>
      <strong>U</strong> - means that array is unsigned. Unsigned means the array can only store positive numbers and not negative numbers
      
      <br><br>
      <strong>int</strong> - means that the array can only hold integer numbers. Meaning it can't hold numbers with decimal places
      
      <br><br>
      <strong>8</strong> - means that each value will be stored with 8 bits. Using 8 bits you can only store numbers from 0 to 255
      
      <br><br>
      <strong>Clamped</strong> - means that if you try and put a number less than 0 it will round it up to 0 and if you put a number larger than 255 it will round it down to 255
      
      <br><br>
      Typed arrays have other differences too. You can only change data that is in it. You are unable to add new data or remove data. Because of that you will not be able to do <em>arr.push()</em> or <em>arr.splice()</em>. Those are just two methods that can't be used on a typed array, but there are many others.
    </p>
    
    <br><h3>Back to imageData.data format</h3>
    <p>So all the pixel data is stored in one typed array. How does it do this? Well it stores one long array of red, green, blue, and alpha values. Each RGBA group is one pixel.</p>
    
    <pre><code class="language-javascript">[red,green,blue,alpha, red,green,blue,alpha, red,green,blue,alpha, red,green,blue,alpha...]</code></pre>
    
    <br><h3>What is the alpha value</h3>
    <p>The alpha value is how transparent a pixel of an image is. 0 means the pixel is transparent and you can see what was drawn behind it. 255 means the pixel is fully opaque meaning you can't see what what drawn behind it.</p>
    
    <br><h3>How does it draw these RGBA values</h3>
    <p>When the program draws the imageData it starts at (0, 0) the top left corner of the canvas. Then it draws pixels horizontally until it reaches it's width, then it goes to the next row down and starts at the beginning of that row (0, 1) and it repeats that pattern until it gets the the end of its data.
      <br><br>
      So arr[0],arr[1],arr[2],arr[3] go to the pixel at (0,0)
      <br>
      arr[4],arr[5],arr[6],arr[7] go to the pixel at (1,0)
      <br>
      arr[8],arr[9],arr[10],arr[11] go to the pixel at(2,0)
      <br>
      ...
    </p>
    
    <br>
    
    <a class="lesson-link lesson-link-left" href="javascript: changePage(1)">Home</a>
    <a class="lesson-link lesson-link-right" href="javascript: changePage(4)">Next Lesson</a>

  </div>
  
  <!-- TUTORIAL 2 PAGE -->
  <div class="page">
    <a class="lesson-link lesson-link-left lesson-link-small" href="javascript: changePage(3)">Previous Lesson</a>
    <a class="lesson-link lesson-link-right lesson-link-small" href="javascript: changePage(5)">Next Lesson</a>
    
    <br><br>
    
    <h1>How to use imageData?</h1>
    
    <h3>Loading imageData</h3>
    <p>
    Alright! Now that you have learned all the boring details of what imageData is, now you get to learn how to actually use it.
      <br><br>
      Ok, so the first step of using imageData is you need to load all the pixel data from the canvas into imageData or else imageData is just a useless empty object. To do that using PJS you run the
    </p>
      
      <pre><code class="language-javascript">loadPixels();</code></pre>

    <p>command. This sets imageData.width to the width of the canvas, imageData.height to the height of the canvas, and loads all the pixel data from the canvas into imageData.data
      <br><br>
      The next thing we want to do is store a reference to all the pixel data. That way we dont have to say <em>imageData.data</em> everytime we want to change something. This makes it easier for us and also for the computer since it doesn't have to dig through the object to find the data property a ton of times. To store a reference to the data we simply write:
    </p>
    
    <pre><code class="language-javascript">var p = imageData.data;</code></pre>
    
    <p>
      You can name the variable whatever you want, but I chose p to represent pixels. But what is <strong>very important</strong> to note is that this does <strong>NOT</strong> copy the data from imageData.data into the variable p. Instead it creates a reference back to the original imageData.data variable.
    </p>
    
    <br><h3>Manipulating the data</h3>
    <p>Now the data is loaded, so next thing we want to do is edit it. To do that we simply loop through the array and can edit it's value just like any other array.</p>
    
    <pre><code class="language-javascript">for (var i = 0; i &lt; p.length; i += 1) {
  p[i] = 255;
}</code></pre>

    <p>That just set every single red value, green value, blue value, and alpha value to 255. This will make a blank white screen. But actually nothing will have changed on the canvas at this point because we edited the value in imageData, but haven't drawn the edited values onto the canvas yet.</p>
    
    <br><h3>Drawing the data</h3>
    <p>To draw the data back onto the canvas simply run the updatePixels() command. This draws all the edited pixel data onto the canvas.</p>
    <pre><code class="language-javascript">updatePixels();</code></pre>
    
    <br><h3>Interactive Demo</h3>
    <p>Here is the full working demo. You can press the "Run Demo" button to run the code. You can also edit the code and hit the run button again to see how it changes. Note: Be careful not to create any infinite loops because my basic editor doesn't have any infinite loop protection.</p>
    
    <div class="editor"></div>
    
    <br>
    
    <button class="run-button">Run Demo</button>
    <button class="run-button">Stop Demo</button>
    
    <br><br>
    
    <div class="output-container"></div>
    
    <script type="text">
var page = pages[3];

var outputContainer = page.getElementsByClassName("output-container")[0];

var iframe = document.createElement("iframe");
iframe.className = "output-container";
iframe.style.width = "400px";
iframe.style.height = "400px";
outputContainer.appendChild(iframe);

iframe.sandbox.add("allow-pointer-lock", "allow-same-origin", "allow-scripts", "allow-popups", "allow-modals", "allow-forms", "allow-downloads");

var editorContainer = page.getElementsByClassName("editor")[0];
var id = Math.random().toString();
editorContainer.id = id;

var editor = ace.edit(id);
var editorSession = editor.getSession();
editor.setShowPrintMargin(false);

editor.setTheme("ace/theme/monokai");
editorSession.setMode("ace/mode/javascript");

var starterCode = 
`// load the pixel data into imageData
loadPixels();

// create a reference to imageData.data
var p = imageData.data;

// currently the canvas is completely white
// how about we make it completely gray.
// to do this we loop through the array 
// of data and set everything to 100
for (var i = 0; i < p.length; i++) {
  p[i] = 100;
}

// draw the new pixel data onto the canvas
updatePixels();
`;

editor.setValue(starterCode);
editor.clearSelection();

var buttons = page.getElementsByClassName("run-button");

buttons[1].onclick = function () {
  outputContainer.style.border = "none";
  outputContainer.style.height = "0px";
  
  iframe.remove();
};

buttons[0].onclick = function () {
  outputContainer.style.border = "1px solid black";
  outputContainer.style.height = "400px";
  
  iframe.remove();
  outputContainer.appendChild(iframe);
  
  var ifrWin = iframe.contentWindow || iframe.window;
  var ifrDoc = iframe.contentDocument || iframe.document;
  
  ifrDoc.write('<!DOCTYPE html><html><body><' + 'script' + '>' + `
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
    
    var pjsScript = document.createElement("script");
    pjsScript.classList.add("pjs-src");
    pjsScript.type = "data";
    pjsScript.innerHTML = ` + JSON.stringify(editor.getValue()) + `;
    document.body.appendChild(pjsScript);
    
    var runScript = document.createElement("script");
    runScript.src = "https://cdn.jsdelivr.net/gh/vExcess/library_files@main/runPJS.js";
    document.body.appendChild(runScript);
  ` + '</' + 'script' + '><!DOCTYPE html><html><head></head><body>');
  
  console.log(iframe);
};
    </script>

    <br><br>
    <a class="lesson-link lesson-link-left" href="javascript: changePage(1)">Home</a>
    <a class="lesson-link lesson-link-right" href="javascript: changePage(5)">Next Lesson</a>

  </div>
  
  <!-- TUTORIAL 3 PAGE -->
  <div class="page">
    <a class="lesson-link lesson-link-left lesson-link-small" href="javascript: changePage(4)">Previous Lesson</a>
    <a class="lesson-link lesson-link-right lesson-link-small" href="javascript: changePage(6)">Next Lesson</a>
    
    <br><br>
    
    <h1>Non-grayscale background</h1>

    <p>
      We made the whole screen gray. And that's kinda cool, but we want to be able to make the screen whatever color we want. To do this we have to specifically edit each of the red, green, and blue values to the values we want them to have.
      <br><br>
      To do this we can increment by 4 instead of by 1 in our for loop. We increment by 4 because there are 4 values for each pixel (red, green, blue, alpha). If we do that p[i] will always be a red value, p[i + 1] will always be green and so on.
    </p>
    
    <br><h3>Interactive Demo</h3>

    <div class="editor"></div>
    
    <br>
    
    <button class="run-button">Run Demo</button>
    <button class="run-button">Stop Demo</button>
    
    <br><br>
    
    <div class="output-container"></div>
    
    <script type="text">
var page = pages[4];

var outputContainer = page.getElementsByClassName("output-container")[0];

var iframe = document.createElement("iframe");
iframe.className = "output-container";
iframe.style.width = "400px";
iframe.style.height = "400px";
outputContainer.appendChild(iframe);

iframe.sandbox.add("allow-pointer-lock", "allow-same-origin", "allow-scripts", "allow-popups", "allow-modals", "allow-forms", "allow-downloads");

var editorContainer = page.getElementsByClassName("editor")[0];
var id = Math.random().toString();
editorContainer.id = id;

var editor = ace.edit(id);
var editorSession = editor.getSession();
editor.setShowPrintMargin(false);

editor.setTheme("ace/theme/monokai");
editorSession.setMode("ace/mode/javascript");

var starterCode = 
`loadPixels();
var p = imageData.data;

// I want to make light blue
// light blue is made by mixing: no red, some green, lotta blue
for (var i = 0; i < p.length; i += 4) {
  // set each red value to 0
  p[i] = 0;
  
  // set each green value to 150
  p[i + 1] = 150;
  
  // set each blue value to 200
  p[i + 2] = 200;
  
  // set alpha value to 255
  p[i + 3] = 255;
}

updatePixels();
`;

editor.setValue(starterCode);
editor.clearSelection();

var buttons = page.getElementsByClassName("run-button");

buttons[1].onclick = function () {
  outputContainer.style.border = "none";
  outputContainer.style.height = "0px";
  
  iframe.remove();
};

buttons[0].onclick = function () {
  outputContainer.style.border = "1px solid black";
  outputContainer.style.height = "400px";
  
  iframe.remove();
  outputContainer.appendChild(iframe);
  
  var ifrWin = iframe.contentWindow || iframe.window;
  var ifrDoc = iframe.contentDocument || iframe.document;
  
  ifrDoc.write('<!DOCTYPE html><html><body><' + 'script' + '>' + `
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
    
    var pjsScript = document.createElement("script");
    pjsScript.classList.add("pjs-src");
    pjsScript.type = "data";
    pjsScript.innerHTML = ` + JSON.stringify(editor.getValue()) + `;
    document.body.appendChild(pjsScript);
    
    var runScript = document.createElement("script");
    runScript.src = "https://cdn.jsdelivr.net/gh/vExcess/library_files@main/runPJS.js";
    document.body.appendChild(runScript);
  ` + '</' + 'script' + '><!DOCTYPE html><html><head></head><body>');
  
  console.log(iframe);
};
    </script>

    <br><br>
    <a class="lesson-link lesson-link-left" href="javascript: changePage(1)">Home</a>
    <a class="lesson-link lesson-link-right" href="javascript: changePage(6)">Next Lesson</a>

  </div>
  
  <!-- TUTORIAL 4 PAGE -->
  <div class="page">
    <a class="lesson-link lesson-link-left lesson-link-small" href="javascript: changePage(5)">Previous Lesson</a>
    <a class="lesson-link lesson-link-right lesson-link-small" href="javascript: changePage(7)">Next Lesson</a>
    
    <br><br>
    
    <h1>Calculating x and y coordinates</h1>

    <p>
      Cool, in the last lesson we basically re-created the <em>background()</em> command. But we want to do more than just create a solid color. What we want to do is change what color is being drawn depending on x and y coordinates of the pixel.
      <br><br>
      We can calculate the x and y positions of the pixel we are currently editing using the following two equations:
      <br><br>
      <span style="margin-left: 15px">x = (index / valuesPerPixel) % graphicWidth</span>
      <br>
      <span style="margin-left: 15px">y = roundDown((index / valuesPerPixel) / graphicWidth)</span>
        <br><br>
        We can implement those two equations using the following two lines of code:
    </p>
    
    <pre><code class="language-javascript">var x = (i / 4) % width;
var y = floor((i / 4) / width);</code></pre>
    
    <p>We can then base the color value on the x and y positions to create a cool gradient as shown in the demo below</p>
    
    <br><h3>Interactive Demo</h3>

    <div class="editor"></div>
    
    <br>
    
    <button class="run-button">Run Demo</button>
    <button class="run-button">Stop Demo</button>
    
    <br><br>
    
    <div class="output-container"></div>
    
    <script type="text">
var page = pages[5];

var outputContainer = page.getElementsByClassName("output-container")[0];

var iframe = document.createElement("iframe");
iframe.className = "output-container";
iframe.style.width = "400px";
iframe.style.height = "400px";
outputContainer.appendChild(iframe);

iframe.sandbox.add("allow-pointer-lock", "allow-same-origin", "allow-scripts", "allow-popups", "allow-modals", "allow-forms", "allow-downloads");

var editorContainer = page.getElementsByClassName("editor")[0];
var id = Math.random().toString();
editorContainer.id = id;

var editor = ace.edit(id);
var editorSession = editor.getSession();
editor.setShowPrintMargin(false);

editor.setTheme("ace/theme/monokai");
editorSession.setMode("ace/mode/javascript");

var starterCode = 
`loadPixels();
var p = imageData.data;

for (var i = 0; i < p.length; i += 4) {
  // calculate the x and y coordinates of the pixel
  var x = (i / 4) % width;
  var y = floor((i / 4) / width);
	
	// set the red to half the x value
  p[i] = x / 2;
  
  // set the green to half the y value
  p[i + 1] = y / 2;
  
  // set blue to 0
  p[i + 2] = 0;
  
  // set alpha to 255
  p[i + 3] = 255;
}

updatePixels();
`;

editor.setValue(starterCode);
editor.clearSelection();

var buttons = page.getElementsByClassName("run-button");

buttons[1].onclick = function () {
  outputContainer.style.border = "none";
  outputContainer.style.height = "0px";
  
  iframe.remove();
};

buttons[0].onclick = function () {
  outputContainer.style.border = "1px solid black";
  outputContainer.style.height = "400px";
  
  iframe.remove();
  outputContainer.appendChild(iframe);
  
  var ifrWin = iframe.contentWindow || iframe.window;
  var ifrDoc = iframe.contentDocument || iframe.document;
  
  ifrDoc.write('<!DOCTYPE html><html><body><' + 'script' + '>' + `
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
    
    var pjsScript = document.createElement("script");
    pjsScript.classList.add("pjs-src");
    pjsScript.type = "data";
    pjsScript.innerHTML = ` + JSON.stringify(editor.getValue()) + `;
    document.body.appendChild(pjsScript);
    
    var runScript = document.createElement("script");
    runScript.src = "https://cdn.jsdelivr.net/gh/vExcess/library_files@main/runPJS.js";
    document.body.appendChild(runScript);
  ` + '</' + 'script' + '><!DOCTYPE html><html><head></head><body>');
  
  console.log(iframe);
};
    </script>

    <br><br>
    <a class="lesson-link lesson-link-left" href="javascript: changePage(1)">Home</a>
    <a class="lesson-link lesson-link-right" href="javascript: changePage(7)">Next Lesson</a>

  </div>
  
  <!-- TUTORIAL 5 PAGE -->
  <div class="page">
    <a class="lesson-link lesson-link-left lesson-link-small" href="javascript: changePage(6)">Previous Lesson</a>
    <a class="lesson-link lesson-link-right lesson-link-small" href="javascript: changePage(8)">Next Lesson</a>
    
    <br><br>
    
    <h1>Inverting Colors</h1>
    
    <p>
      As you learned in the colors lesson you can invert a color by subtracting each red, green, and blue value from 255. In the last lesson we learned how to calculate the x and y position of the pixel. Now we will combine the two to invert the colors of the pixels that are near the mouse. Being able to edit a pixel color based on it's current color is very useful for creating filters.
    </p>
    
    <br><h3>Interactive Demo</h3>

    <div class="editor"></div>
    
    <br>
    
    <button class="run-button">Run Demo</button>
    <button class="run-button">Stop Demo</button>
    
    <br><br>
    
    <div class="output-container"></div>
    
    <script type="text">
var page = pages[6];

var outputContainer = page.getElementsByClassName("output-container")[0];

var iframe = document.createElement("iframe");
iframe.className = "output-container";
iframe.style.width = "400px";
iframe.style.height = "400px";
outputContainer.appendChild(iframe);

iframe.sandbox.add("allow-pointer-lock", "allow-same-origin", "allow-scripts", "allow-popups", "allow-modals", "allow-forms", "allow-downloads");

var editorContainer = page.getElementsByClassName("editor")[0];
var id = Math.random().toString();
editorContainer.id = id;

var editor = ace.edit(id);
var editorSession = editor.getSession();
editor.setShowPrintMargin(false);

editor.setTheme("ace/theme/monokai");
editorSession.setMode("ace/mode/javascript");

var starterCode = 
`draw = function(){
  // this time lets draw something first
  // draw a blue background
  background(0, 0, 255);
  
  // lets draw a red rectangle on the right
  noStroke();
  fill(255, 0, 0);
  rect(200, 0, 200, 400);
  
  // draw an image of buzz lightyear
  image(getImage('pixar/buzz'), 40, 20, 350, 350);
  
  // now load the current pixels from the canvas into imageData
  // you only need to loadPixels once if you are not going to base the new color values on the old ones
  // but since we are basing the new colors on the old ones we need to load the current pixels into imageData every frame
  loadPixels();
  
  var p = imageData.data;

  for (var i = 0; i < p.length; i += 4) {
    var x = (i / 4) % width;
    var y = (i / 4) / width;
    
    var distFromMouse = dist(x, y, mouseX, mouseY);
    
    // if the pixel is less than 50 pixels away from the cursor
    if (distFromMouse < 50) {
      // then invert the color
      p[i]     = 255 - p[i];
      p[i + 1] = 255 - p[i + 1];
      p[i + 2] = 255 - p[i + 2];
    }
  }
  
  updatePixels();
  
  // print out the FPS to see how fast this is running
  fill(0, 0, 0);
  text("FPS: " + round(this.__frameRate), 10, 20);
};
`;

editor.setValue(starterCode);
editor.clearSelection();

var buttons = page.getElementsByClassName("run-button");

buttons[1].onclick = function () {
  outputContainer.style.border = "none";
  outputContainer.style.height = "0px";
  
  iframe.remove();
};

buttons[0].onclick = function () {
  outputContainer.style.border = "1px solid black";
  outputContainer.style.height = "400px";
  
  iframe.remove();
  outputContainer.appendChild(iframe);
  
  var ifrWin = iframe.contentWindow || iframe.window;
  var ifrDoc = iframe.contentDocument || iframe.document;
  
  ifrDoc.write('<!DOCTYPE html><html><body><' + 'script' + '>' + `
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
    
    var pjsScript = document.createElement("script");
    pjsScript.classList.add("pjs-src");
    pjsScript.type = "data";
    pjsScript.innerHTML = ` + JSON.stringify(editor.getValue()) + `;
    document.body.appendChild(pjsScript);
    
    var runScript = document.createElement("script");
    runScript.src = "https://cdn.jsdelivr.net/gh/vExcess/library_files@main/runPJS.js";
    document.body.appendChild(runScript);
  ` + '</' + 'script' + '><!DOCTYPE html><html><head></head><body>');
  
  console.log(iframe);
};
    </script>

    <br><br>
    <a class="lesson-link lesson-link-left" href="javascript: changePage(1)">Home</a>
    <a class="lesson-link lesson-link-right" href="javascript: changePage(8)">Next Lesson</a>

  </div>
  
  <!-- TUTORIAL 6 PAGE -->
  <div class="page">
    <a class="lesson-link lesson-link-left lesson-link-small" href="javascript: changePage(7)">Previous Lesson</a>
    <a class="lesson-link lesson-link-right lesson-link-small" href="javascript: changePage(9)">Next Lesson</a>
    
    <br><br>
    
    <h1>Calculating index with x and y</h1>
    
    <p>
      We know how to calculate the x and y positions of a pixel given an array index. But how do we calculate the array index if we have an x and y coordinate? Well we simple use the following equation:
      <br><br>
      <span style="margin-left: 15px">index = (x + y * graphicWidth) * valuesPerPixel</span>
      <br><br>
      In code that would look like this:
    </p>
    
    <pre><code class="language-javascript">var idx = (x + y * width) * 4;</code></pre>
    
    <p>Being able to calculate the index given an x and y coordinate is used for only accessing certain pixels without having to loop through all of them. This is useful for doing something like creating a color picker.</p>
    
    <br><h3>Interactive Demo</h3>

    <div class="editor"></div>
    
    <br>
    
    <button class="run-button">Run Demo</button>
    <button class="run-button">Stop Demo</button>
    
    <br><br>
    
    <div class="output-container"></div>
    
    <script type="text">
var page = pages[7];

var outputContainer = page.getElementsByClassName("output-container")[0];

var iframe = document.createElement("iframe");
iframe.className = "output-container";
iframe.style.width = "400px";
iframe.style.height = "400px";
outputContainer.appendChild(iframe);

iframe.sandbox.add("allow-pointer-lock", "allow-same-origin", "allow-scripts", "allow-popups", "allow-modals", "allow-forms", "allow-downloads");

var editorContainer = page.getElementsByClassName("editor")[0];
var id = Math.random().toString();
editorContainer.id = id;

var editor = ace.edit(id);
var editorSession = editor.getSession();
editor.setShowPrintMargin(false);

editor.setTheme("ace/theme/monokai");
editorSession.setMode("ace/mode/javascript");

var starterCode = 
`function drawGraphic () {
  background(0, 0, 255);
    
  noStroke();
  fill(255, 0, 0);
  rect(200, 0, 200, 400);
  
  image(getImage('pixar/buzz'), 40, 20, 350, 350);
}

drawGraphic();

// this is outside the draw function because
// the graphic isn't changing so we don't need 
// to update the pixels that are in imageData
loadPixels();

var p = imageData.data;

draw = function () {
  drawGraphic();
  
  // calculate index for the mouse coodinates
  var idx = (mouseX + mouseY * width) * 4;
  
  // get the RGB values at that index
  var r = p[idx];
  var g = p[idx + 1];
  var b = p[idx + 2];
  
  // draw the color we have selected above the mouse
  stroke(0, 0, 0);
  fill(r, g, b);
  ellipse(mouseX, mouseY - 15, 25, 25);
  
};
`;

editor.setValue(starterCode);
editor.clearSelection();

var buttons = page.getElementsByClassName("run-button");

buttons[1].onclick = function () {
  outputContainer.style.border = "none";
  outputContainer.style.height = "0px";
  
  iframe.remove();
};

buttons[0].onclick = function () {
  outputContainer.style.border = "1px solid black";
  outputContainer.style.height = "400px";
  
  iframe.remove();
  outputContainer.appendChild(iframe);
  
  var ifrWin = iframe.contentWindow || iframe.window;
  var ifrDoc = iframe.contentDocument || iframe.document;
  
  ifrDoc.write('<!DOCTYPE html><html><body><' + 'script' + '>' + `
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
    
    var pjsScript = document.createElement("script");
    pjsScript.classList.add("pjs-src");
    pjsScript.type = "data";
    pjsScript.innerHTML = ` + JSON.stringify(editor.getValue()) + `;
    document.body.appendChild(pjsScript);
    
    var runScript = document.createElement("script");
    runScript.src = "https://cdn.jsdelivr.net/gh/vExcess/library_files@main/runPJS.js";
    document.body.appendChild(runScript);
  ` + '</' + 'script' + '><!DOCTYPE html><html><head></head><body>');
  
  console.log(iframe);
};
    </script>

    <br><br>
    <a class="lesson-link lesson-link-left" href="javascript: changePage(1)">Home</a>
    <a class="lesson-link lesson-link-right" href="javascript: changePage(9)">Next Lesson</a>

  </div>
  
  <!-- TUTORIAL 7 PAGE -->
  <div class="page">
    <a class="lesson-link lesson-link-left lesson-link-small" href="javascript: changePage(8)">Previous Lesson</a>
    <a class="lesson-link lesson-link-right lesson-link-small" href="javascript: changePage(10)">Next Lesson</a>
    
    <br><br>
    
    <h1>Optimizations</h1>
    
    <h3>Bitwise Operators</h3>
    <p>
      What we have already is pretty fast compared to drawing a ton of points. But we can make it even faster. How? By using bitwise operators! Specifically the left and right bit shift operators and the OR bitwise operator. Simply shifting bits over is faster than performing expensive multiplication and division.
      <br><br>
      Computers store data in bits. Basically a series of electric charges and absences of electric charges. We can represent a charge with a 1 and no charge with a 0. So we can represent a number as a series of 0's and 1's. This called binary. Each 0 or 1 is a bit. Remember the imageData.data values are stored using 8 bits. So each value can be represented similar to this: 00000000
      <br><br>
      00000000 = 0
      <br>
      00000001 = 1
      <br>
      00000010 = 2
      <br>
      00000100 = 4
      <br>
      00001000 = 8
      <br>
      00010000 = 16
      <br>
      00100000 = 32
      <br>
      01000000 = 64
      <br>
      10000000 = 128
      <br><br>
      Notice a pattern? Every time you move the bit 1 to the left the result gets multiplied by two. Also if you go in the reverse order then each time you move the bit to the right it gets divided by 2. And everytime you move the bit 2 units left the result gets multiplied by 4, and also moving 2 to the right divides by 4.
      <br><br>
      Now lets take a look at the equations we are using
    </p>
    
    <pre><code class="language-javascript">var x = (i / 4) % width;
var y = floor((i / 4) / width);
var idx = (x + y * width) * 4;</code></pre>
    
    <p>
      Oh look at that! Just by luck we are multiplying and dividing by 4. What we can do is just shift the bits over instead of actually doing math. We will end up with the same result and it will be faster! We can do this using the left-shift bitwise operator (&lt;&lt;) and the right-shift bitwise operator (>>).
    </p>
    
    <pre><code class="language-javascript">var x = (i >> 2) % width;
var y = floor((i >> 2) / width);
var idx = (x + y * width) &lt;&lt; 2;</code></pre>

    <p>
      Well that is faster, but there is still one more trick we can do. See that floor() command? Well that command is slowing us down. We can do this using the bitwise OR operator by doing "| 0". This will cast the number into an integer by discarding the decimal part of the number. Technically this does <strong>not</strong> do the exact same thing as <em>floor()</em> but for our purposes chopping off the decimal is the same thing as rounding the number down.
      <br><br>
      So these are the fully optimized equations:
    </p>
    
    <pre><code class="language-javascript">var x = (i >> 2) % width;
var y = ((i >> 2) / width) | 0;
var idx = (x + y * width) &lt;&lt; 2;</code></pre>

    <p>You should be able to simply swap out the old code with this new one and get the same result, but it runs slightly faster.</p>
    
    <br><h3>Storing object properties in a variable</h3>
    <p>
      When you do something like <em>obj.property</em> it takes the computer a little bit of extra time to perform a property lookup on that object to find the property you want. That is why something like this although it works just fine is quite inefficient:
    </p>
    
    <pre><code class="language-javascript">for (var i = 0; i &lt; imageData.data.length; i += 4) {
  var x = (i >> 2) % imageData.width;
  var y = ((i >> 2) / imageData.width) | 0;
	
  imageData.data[i] = x / 2;
  imageData.data[i + 1] = y / 2;
  imageData.data[i + 2] = 0;
  imageData.data[i + 3] = 255;
}</code></pre>

    <p>By storing copies or references to those commonly used object properties we can make our code more efficient because the computer doesn't have to search through the object for the property every time we use it. Not only that but the code looks cleaner this way:</p>
    
    <pre><code class="language-javascript">var p = imageData.data;
var w = imageData.width;
var len = p.length;

for (var i = 0; i &lt; len; i += 4) {
  var x = (i >> 2) % w;
  var y = ((i >> 2) / w) | 0;
	
  p[i] = x / 2;
  p[i + 1] = y / 2;
  p[i + 2] = 0;
  p[i + 3] = 255;
}</code></pre>

    <p>
      But here's a neat trick. Instead of creating those variables above the loop you can create them in the header of the loop. You can actually create more than one variable to use in a for loop like so:
    </p>
    
    <pre><code class="language-javascript">for (var i = 0, w = imageData.width, len = p.length; i &lt; len; i += 4) {
  var x = (i >> 2) % w;
  var y = ((i >> 2) / w) | 0;
	
  p[i] = x / 2;
  p[i + 1] = y / 2;
  p[i + 2] = 0;
  p[i + 3] = 255;
}</code></pre>
    
    <br><h3>Localizing variables</h3>
    <p>
      Localizing your variables will significantly increase your run speed. You do this by putting everything inside an immediately invoked function. This is a function that gets called right after it is defined.
    </p>
    
    <pre><code class="language-javascript">(function () {
  loadPixels();

  var p = imageData.data;

  for (var i = 0, len = p.length; i &lt; len; i++) {
    p[i] = 100;
  }

  updatePixels();
})();</code></pre>
    
    <br><br>
    <a class="lesson-link lesson-link-left" href="javascript: changePage(1)">Home</a>
    <a class="lesson-link lesson-link-right" href="javascript: changePage(10)">Next Lesson</a>

  </div>
  
  <!-- TUTORIAL 8 PAGE -->
  <div class="page">
    <a class="lesson-link lesson-link-left lesson-link-small" href="javascript: changePage(9)">Previous Lesson</a>
    <a class="lesson-link lesson-link-right lesson-link-small" href="javascript: changePage(11)">Next Lesson</a>
    
    <br><br>
    
    <h1>PImages & Offscreen buffers</h1>
    
    <p>
      Not only can you use imageData with the main canvas, but you can also use it with PImages and offscreen buffers created with createGraphics();
    </p>
    
    <br><h3>Offscreen Buffers</h3>
    <p>Using imageData on an offscreen buffer is as simple as creating a new graphic using createGraphics() and then storing it in a variable, and then prepending that variable onto loadPixels, imageData, updatePixels, and width like so:</p>
    
    <pre><code class="language-javascript">// create offscreen graphics
var gfx = createGraphics(255, 255, P2D);

gfx.loadPixels();

var p = gfx.imageData.data;

for (var i = 0; i &lt; p.length; i += 4) {
  var x = (i / 4) % gfx.width;
  var y = floor((i / 4) / gfx.width);
	
  p[i] = x;
  p[i + 1] = y;
  p[i + 2] = 0;
  p[i + 3] = 255;
}

gfx.updatePixels();

image(gfx, 73, 73);
</code></pre>
    
    <br><h3>PImages</h3>
    <p>Using imageData on images is pretty much the same, but it does have a couple of slight differences. The first difference is that you don't need to load the imageData for an image. The second diffence is that to update the pixels you call <em>img.set();</em> instead of <em>updatePixels();</em></p>
    
    <pre><code class="language-javascript">// create an image
var gfx = get(0, 0, 255, 255);
    
// notice we are not using and loadPixels()
var p = gfx.imageData.data;

for (var i = 0; i &lt; p.length; i += 4) {
  var x = (i / 4) % gfx.width;
  var y = floor((i / 4) / gfx.width);
	
  p[i] = x;
  p[i + 1] = y;
  p[i + 2] = 0;
  p[i + 3] = 255;
}

// use gfx.set() instead of gfx.updatePixels()
gfx.set();

image(gfx, 73, 73);</code></pre>

    <p>And just like that with a few tiny changes you can use imageData on offscreen graphics and PImages instead of just the main canvas.</p>

    <br><br>
    <a class="lesson-link lesson-link-left" href="javascript: changePage(1)">Home</a>
    <a class="lesson-link lesson-link-right" href="javascript: changePage(11)">Next Lesson</a>

  </div>
  
  <!-- TUTORIAL 9 PAGE -->
  <div class="page">
    <a class="lesson-link lesson-link-left lesson-link-small" href="javascript: changePage(10)">Previous Lesson</a>
    <a class="lesson-link lesson-link-right lesson-link-small" href="javascript: changePage(12)">Next Lesson</a>
    
    <br><br>
    
    <h1>Fixing Khan Academy bugs</h1>
    
    <p>
      For some reason using imageData on Khan Academy is quite buggy. I assume that is the reason why Khan Academy doesn't teach about imageData themselves. There are many bugs, but fortunately they are relatively easy to work around.
    </p>
    
    <br><h3>Bug 1 - Mixed tabs and spaces</h3>
    <p>There is just something about working with imageData that messes up the code indentation in a way that oh noes does not like. He will report an error saying mixed tabs and spaces. The only solution to this problem is to remove all indentation from the broken segment of code and re-indent it.</p>
    
    <br><h3>Bug 2 - variables undefined</h3>
    <p>
      For some reason when working with imageData oh noes has a bad habit of saying that variables that are defined are undefined. This is the most common bug and there are many ways to fix it.
      <br><br>
      <strong>Method 1 - pre-define variables</strong>
      <br>
      Simply define the variable before using it. This will trick oh noes into knowing that the variable is defined, but it won't change anything becuase PJS will overwrite your definition of the variable. Example:
    </p>
    
    <pre><code class="language-javascript">var imageData = {
  width: 0,
  height: 0,
  data: []
};

loadPixels();

var p = imageData.data;
for (var i = 0; i &lt; p.length; i++) {
  p[i] = 150;
}

updatePixels();
</code></pre>
    
    <p>
      This method won't always work. It seems to work fine for preventing this error when using imageData on the main canvas, but this won't work if you are using imageData on a PImage.
      <br><br>
      <strong>Method 2 - if statements</strong>
      <br>
      Put all buggy commands inside if statements. This method of working around the bug is much more reliable. It should work in all sitations. Problem is that it's quite tedious to do and looks bad. Example:
    </p>

    <pre><code class="language-javascript">var gfx = get(0, 0, 255, 255);

var p = gfx;
if (p.imageData) {
  p = p.imageData;
}
if (p.data) {
  p = p.data;
}

for (var i = 0; i &lt; p.length; i++) {
  p[i] = 150;
}

if (gfx.set) {
  gfx.set();
}

image(gfx, 73, 73);
</code></pre>

    <p>
      <strong>Method 3 - Program.restart()</strong>
      <br>
      Force the program to restart at least once before running the program. This is a simple fix to implement, but I do not recommend using it because it's not very reliable and doesn't seem to fix everything. Not only that but if it messes up, then your program is in an infinite restart loop. And there seems to be a decent chance it will get messed up for no reason. The last reason not to use it is that this fix is specific to Khan Academy and not standard code. Example:
    </p>
    
    <pre><code class="language-javascript">// set restarts to itself plus one
// or default to 0 if restarts is undefined
var restarts = restarts + 1 || 0;
if (restarts &lt; 1) {
  Program.restart();
}

loadPixels();

var p = imageData.data;
for (var i = 0; i &lt; p.length; i++) {
  p[i] = 150;
}

updatePixels();</code></pre>

    <p>
      <strong>Method 4 - nested draw function</strong>
      <br>
      Sticking your entire program in a draw function and then redefining the draw function within that outer draw function should fix all imageData bugs. This is a very simple fix and very reliable. It doesn't use any environment specific features so overall this the fix I recommend using. Example:
    </p>
    
    <pre><code class="language-javascript">draw = function () {
  var gfx = get(0, 0, 255, 255);
  
  var p = gfx.imageData.data;
  
  for (var i = 0; i &lt; p.length; i++) {
    p[i] = 150;
  }
  
  gfx.set();
  
  image(gfx, 73, 73);
  
  draw = function () {
    ellipse(random(400), random(400), 10, 10);
  };
};
</code></pre>

    <p>There are a few cases where this will cause an error with a part of your code, but this can easily be fixed by moving that part of code outside the outer draw function.</p>

    <br><br>
    <a class="lesson-link lesson-link-left" href="javascript: changePage(1)">Home</a>
    <a class="lesson-link lesson-link-right" href="javascript: changePage(12)">Next Lesson</a>

  </div>
  
  <!-- TUTORIAL 10 PAGE -->
  <div class="page">
    <a class="lesson-link lesson-link-left lesson-link-small" href="javascript: changePage(11)">Previous Lesson</a>
    <a class="lesson-link lesson-link-right lesson-link-small" href="javascript: changePage(13)">Next Lesson</a>
    
    <br><br>
    
    <h1>Using Processing.js pixels</h1>
    
    <p>
      Processing.js has a variable called <em>pixels</em>. It essentially is a mini library for making working with imageData easier. <em>pixels</em> only has 5 methods: <em>getLength</em>, <em>getPixel</em>, <em>setPixel</em>, <em>toArray</em>, and <em>set</em>.
      <br><br>
      Before I explain what each method does it is essential to note that part of what makes pixels easier to work with is that it does not store colors in RGBA format like this
      <br>
    </p>
    
    <pre><code class="language-javascript">[r,g,b,a, r,g,b,a, r,g,b,a]</code></pre>
      
    <p>
      Instead it stores colors as an array of Processing.js colors like so 
      <br>
    </p>
    
    <pre><code class="language-javascript">[color(r, g, b, a), color(r, g, b, a), color(r, g, b, a)]</code></pre>
    
    <p>
      and note that PJS colors are actually just numbers. When the <em>color()</em> command is run it outputs a single number. So if you were to print out <em>pixels.toArray()</em> you would get something like this
    </p>
    
    <pre><code class="language-javascript">[-16777216, -10250929, -65536, -3027515]</code></pre>
    
    <br><h3>pixels.getLength()</h3>
    <p>
      This returns the number of pixels in imageData. If your canvas is 400 pixels wide and 200 pixels tall, then <em>pixels.getLength()</em> will return <em>80000</em> because 400 x 200 = 80,000
    </p>
    
    <br><h3>pixels.getPixel(index)</h3>
    <p>
      This returns the color of a pixel at a certain index. It returns the color as a single number exactly like <em>get(x, y)</em> would. Note that when calculating the index you don't need to multiply by 4 because there is only 1 value per pixel in <em>pixels</em>.
    </p>
    
    <br><h3>pixels.setPixel(index, color)</h3>
    <p>
      This sets the color of a pixel at a certain index. Note that when calculating the index you don't need to multiply by 4 because there is only 1 value per pixel in <em>pixels</em>.
    </p>
    
    <br><h3>pixels.toArray()</h3>
    <p>
      This returns <em>imageData.data</em> as an array of Processing colors (as explained at above) instead of RGBA format.
    </p>
    
    <br><h3>pixels.set(arrayOfColors)</h3>
    <p>
      This copies an array of Processing colors into <em>imageData.data</em>. This is the same as <em>pixels.setPixel()</em> except that it does a whole array of colors at once instead of just one.
    </p>
    
    <br><h3>Interactive Demo</h3>

    <div class="editor"></div>
    
    <br>
    
    <button class="run-button">Run Demo</button>
    <button class="run-button">Stop Demo</button>
    
    <br><br>
    
    <div class="output-container"></div>
    
    <script type="text">
var page = pages[11];

var outputContainer = page.getElementsByClassName("output-container")[0];

var iframe = document.createElement("iframe");
iframe.className = "output-container";
iframe.style.width = "400px";
iframe.style.height = "400px";
outputContainer.appendChild(iframe);

iframe.sandbox.add("allow-pointer-lock", "allow-same-origin", "allow-scripts", "allow-popups", "allow-modals", "allow-forms", "allow-downloads");

var editorContainer = page.getElementsByClassName("editor")[0];
var id = Math.random().toString();
editorContainer.id = id;

var editor = ace.edit(id);
var editorSession = editor.getSession();
editor.setShowPrintMargin(false);

editor.setTheme("ace/theme/monokai");
editorSession.setMode("ace/mode/javascript");

var starterCode = 
`background(255, 0, 0);
image(getImage('pixar/buzz'), 30, 150, 350, 350);

loadPixels();

// sets a the pixel at a certain index to a specific color
for (var i = 400 * 75; i < 400 * 150; i++) {
  pixels.setPixel(i, color(0, 0, 0));
}

// nothing fancy here; just an array of random colors I made
var data = [];
for (var i = 0; i < 400 * 50; i++) {
  data.push(color(random(255), random(255), random(255)));
}

// copies the array of random colors into imageData
pixels.set(data);

draw = function () {
  updatePixels();
  
  // calculate index for the mouse coodinates
  // note: we aren't multiplying by 4 because pixels 
  // uses 1 color per pixel instead of RGBA which is 4
  var idx = mouseX + mouseY * width;
  
  // returns the color of a pixel at a certain index
  var clr = pixels.getPixel(idx);

  // draw the color we have selected above the mouse
  fill(clr);
  stroke(255, 255, 255);
  ellipse(mouseX, mouseY - 15, 26, 26);
  
  fill(255, 255, 255);
  rect(0, 350, 400, 50);
  
  textSize(14);
  fill(0, 0, 0);
  
  // returns an array of all the pixel colors on the screen as PJS colors
  text("pixels.toArray(): " + pixels.toArray().slice(0, 15), 10, 370);
  
  // returns the number of pixels on the screen
  text("pixels.getLength(): " + pixels.getLength(), 10, 390);
};
`;

editor.setValue(starterCode);
editor.clearSelection();

var buttons = page.getElementsByClassName("run-button");

buttons[1].onclick = function () {
  outputContainer.style.border = "none";
  outputContainer.style.height = "0px";
  
  iframe.remove();
};

buttons[0].onclick = function () {
  outputContainer.style.border = "1px solid black";
  outputContainer.style.height = "400px";
  
  iframe.remove();
  outputContainer.appendChild(iframe);
  
  var ifrWin = iframe.contentWindow || iframe.window;
  var ifrDoc = iframe.contentDocument || iframe.document;
  
  ifrDoc.write('<!DOCTYPE html><html><body><' + 'script' + '>' + `
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
    
    var pjsScript = document.createElement("script");
    pjsScript.classList.add("pjs-src");
    pjsScript.type = "data";
    pjsScript.innerHTML = ` + JSON.stringify(editor.getValue()) + `;
    document.body.appendChild(pjsScript);
    
    var runScript = document.createElement("script");
    runScript.src = "https://cdn.jsdelivr.net/gh/vExcess/library_files@main/runPJS.js";
    document.body.appendChild(runScript);
  ` + '</' + 'script' + '><!DOCTYPE html><html><head></head><body>');
  
  console.log(iframe);
};
    </script>

    <br><br>
    <a class="lesson-link lesson-link-left" href="javascript: changePage(1)">Home</a>
    <a class="lesson-link lesson-link-right" href="javascript: changePage(13)">Next Lesson</a>

  </div>
  
  <!-- TUTORIAL 11 PAGE -->
  <div class="page">
    <a class="lesson-link lesson-link-left lesson-link-small" href="javascript: changePage(12)">Previous Lesson</a>
    <a class="lesson-link lesson-link-right lesson-link-small" href="javascript: changePage(1)">Home</a>
    
    <br><br>
    
    <h1>Using ImageData outside of Processing.js</h1>
    
    <h3>The Native Canvas API</h3>
    <p>
      Processing.js isn't the only place that has imageData. The native JS canvas API has imageData too. You can create a new image data object using:
    </p>
    
    <pre><code class="language-javascript">var exampleImageData = new ImageData(255, 255);</code></pre>
    
    <p>
      I'm just using 2 parameters, width and height, to create it although there are many other syntaxes that you can learn about here <a href="https://developer.mozilla.org/en-US/docs/Web/API/ImageData/ImageData" target="_blank">Mozilla Developer - ImageData()</a>
      <br><br>
      Once you create it you can use it just like you learned earlier except you don't need to loadPixels and instead of using updatePixels you use
    </p>
    
    <pre><code class="language-javascript">ctx.putImageData(imageData, x, y);</code></pre>
    
    <br><h3>p5.js</h3>
    <p>
      p5.js is pretty much the same as Processing.js except instead of using imageData you use pixels. In p5 <em>pixels</em> is the imageData itself instead of a library for working with imageData. The other difference is that p5 has pixel density which means you can have multiple pixels in one pixel. Learn more here <a href="https://p5js.org/reference/#/p5/loadPixels" target="_blank">p5.js - loadPixels()</a>
    </p>
    
    <br><h3>Interactive Demo</h3>

    <div class="editor"></div>
    
    <br>
    
    <button class="run-button">Run Demo</button>
    <button class="run-button">Stop Demo</button>
    
    <br><br>
    
    <div class="output-container"></div>
    
    <script type="text">
var page = pages[12];

var outputContainer = page.getElementsByClassName("output-container")[0];

var iframe = document.createElement("iframe");
iframe.className = "output-container";
iframe.style.width = "400px";
iframe.style.height = "400px";
outputContainer.appendChild(iframe);

iframe.sandbox.add("allow-pointer-lock", "allow-same-origin", "allow-scripts", "allow-popups", "allow-modals", "allow-forms", "allow-downloads");

var editorContainer = page.getElementsByClassName("editor")[0];
var id = Math.random().toString();
editorContainer.id = id;

var editor = ace.edit(id);
var editorSession = editor.getSession();
editor.setShowPrintMargin(false);

editor.setTheme("ace/theme/monokai");
editorSession.setMode("ace/mode/javascript");

var starterCode = 
`// get the context of a canvas
var ctx = externals.canvas.getContext("2d");

// create an new ImageData object
var exampleImageData = new ImageData(255, 255);

// create refrence
var p = exampleImageData.data;

// edit the pixels like normal
for (var i = 0; i < p.length; i += 4) {
  p[i] = (i / 4) % exampleImageData.width;
  p[i + 1] = 0;
  p[i + 2] = Math.floor((i / 4) / exampleImageData.width);
  p[i + 3] = 255;
}

// draw the pixels using canvas context.putImageData
ctx.putImageData(exampleImageData, 73, 73);
`;

editor.setValue(starterCode);
editor.clearSelection();

var buttons = page.getElementsByClassName("run-button");

buttons[1].onclick = function () {
  outputContainer.style.border = "none";
  outputContainer.style.height = "0px";
  
  iframe.remove();
};

buttons[0].onclick = function () {
  outputContainer.style.border = "1px solid black";
  outputContainer.style.height = "400px";
  
  iframe.remove();
  outputContainer.appendChild(iframe);
  
  var ifrWin = iframe.contentWindow || iframe.window;
  var ifrDoc = iframe.contentDocument || iframe.document;
  
  ifrDoc.write('<!DOCTYPE html><html><body><' + 'script' + '>' + `
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
    
    var pjsScript = document.createElement("script");
    pjsScript.classList.add("pjs-src");
    pjsScript.type = "data";
    pjsScript.innerHTML = ` + JSON.stringify(editor.getValue()) + `;
    document.body.appendChild(pjsScript);
    
    var runScript = document.createElement("script");
    runScript.src = "https://cdn.jsdelivr.net/gh/vExcess/library_files@main/runPJS.js";
    document.body.appendChild(runScript);
  ` + '</' + 'script' + '><!DOCTYPE html><html><head></head><body>');
  
  console.log(iframe);
};
    </script>

    <br><br>
    <a class="lesson-link lesson-link-left" href="javascript: changePage(1)">Home</a>

  </div>
  
  <!-- CHANGE PAGE SCRIPT -->
  <script type>
var pages = document.getElementsByClassName('page');

function changePage (index) {
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
    
    var iframes = pages[i].getElementsByTagName("iframe");
    for (var j = 0; j < iframes.length; j++) {
      iframes[j].parentNode.style.height = "0px";
      iframes[j].parentNode.style.border = "none";
      iframes[j].remove();
    }
  }
  
  pages[index - 1].style.display = 'block';
  
  var scripts = pages[index - 1].getElementsByTagName("script");
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].type === "text") {
      var code = scripts[i].innerHTML;
      $("<script>").html(code).appendTo(pages[index - 1]);
    }
  }
  
  window.scroll(0, 0);
}

changePage(1);
  </script>
  
</body>
</html> <!-- 1,660 lines of code yay! -->
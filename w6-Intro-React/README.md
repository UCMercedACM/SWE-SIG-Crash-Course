## What is React?
So far in this series, we've covered HTML, CSS, and JavaScript. While these tools are sufficient for certain websites and web apps (the difference between the two is that apps are interactive, while websites don't have user interactivity), some projects benefit from using a "library" (a set of "tools" that will add some benefits to your coding experience for certain tasks). One of these libraries is **React**. 

ReactJS is a JavaScript library for building user interfaces. User interfaces, usually shortened to UI, are things that a user can interact with on the webpage. This is why often times we'll refer to React projects as React apps. The React website can be found [here](https://reactjs.org). It contains documentation for beginner and advanced topics, some of which we'll touch upon in this series, as well as some tutorials and other useful information.

React is created by Facebook, and Facebook actually uses React in their websites and applications! This means that Facebook is directly invested in improved React, which is great for us non-Facebook developers as well using React!
React could be considered decently new, as opposed to some other libraries such as AngularJS and jQuery. Even though it is newer than some other libraries, it's extremely popular, and only growing in popularity! Some other companies that user React are Airbnb, Uber, Netflix, Skype, and more! The general number of websites that use React are around 10 million. 

All this is to show that React is an extremely popular library, and something viable for usage whether you're just starting your web development journey, or are learning for the first time!

### Why React?
Popularity is definitely a selling factor, but why do we use React specifically? This is something we'll come to realize throughout the series. The basic concepts of React that make it so great to use is **reusability** and **efficiency**. Let's consider Twitter, for example. Twitter is comprised of a bunch of posts, each of which have a *user*, *tweet*, *likes*, and *Retweets*. 

This is true for all posts, if we were to simplify them down, ignoring livestreams and whatnot. We could copy paste the code for a post multiple times, but in HTML, this would include a LOT of repeated and lengthy code. We won't dive into what React can do to fix this specifically at this moment, but React in short can simplify this greatly, and reduce the need for repeating such large pieces of code!

```html
<div>
    <div>
    <img src="profile.png">
    <p> Sean </p>
    <button> … </button>
    <p> This is my Tweet </p>
    <p> numLikes </p>
    <p> numRetweets </p>
   <button> Like </button>
   <button> Retweet </button>
   <button> Share </button>
    </div>
     <div>
    <img src="profile.png">
    <p> Jet </p>
    <button> … </button>
    <p> This is my Tweet </p>
    <p> numLikes </p>
    <p> numRetweets </p>
   <button> Like </button>
   <button> Retweet </button>
   <button> Share </button>
    </div>
     <div>
    <img src="profile.png">
    <p> David </p>
    <button> … </button>
    <p> This is my Tweet </p>
    <p> numLikes </p>
    <p> numRetweets </p>
   <button> Like </button>
   <button> Retweet </button>
   <button> Share </button>
    </div>
</div>

 ```
 This block of code represents just 3 tweets, yet it's over 50 lines of code.  
 Using React, we could write
 ```jsx
 
return(
<>
tweets.map((tweetData) =>
<Tweet data=tweetData />
)
</>
)

 ```
 and accomplish the same thing! *No matter* how many tweets we end up displaying, this code can stay the same!

## Setting up a React Project
Before we get started, one thing that's important to introduce is the terminal! It's possible you may already have experience using the terminal, but in the case that you don't, ~terminal~ essentially refers to a text-based interface that we can send commands to. Those commands will execute different things in our computer. We're going to be using the terminal with a couple commands to interact with our application, so we'll need to see it a bit. Luckily, Visual Studio Code includes a place to open the terminal, so we won't have to worry too much about it! A terminal may look something similar to the image below.

You can open the terminal on your computer by either opening spotlight (Cmd+Space) and searching for “Terminal” on MacOS, or opening the start menu (Windows key) and searching for “cmd” on Windows.

Now, we must download something called [Node](https://nodejs.org/en/) (download link here, download LTS not current!). Node, without delving too deep conceptually, is another tool that is necessary for us to run our React application. You can check if you have node installed already by typing `node -v` into the terminal (after typing this, press Enter to let the terminal know that you're done typing a command!). If a number shows up, then you've already installed Node! If there is no number or there is an error, click the link above to download Node! The reason for needing Node is a little complex, but for our purposes the main reason is because of something called **npm**, short for Node Package Manager! "Package managers”, in essence, let us install, update, and remove programs. npm is a package manager for Node programs and tools, that we can install, update, and remove. It also contains commands that will be how we actually run our React app!

## Node and NPM

### What are Node and NPM?

Nodejs is a runtime that brings JavaScript code out of the browser and into your hardware. This enables a wealth of possibilities, as JavaScript code suddenly is enabled to interface with common I/O operations and user-level applications!

NPM stands for **Node Package Manager**. This is the tool used to manage package installation and dependency for Node applications. It has a registry of over 800,000 packages at its disposal.

### How do I install Node (and NPM)?

You can install Node and NPM from a single installer that you can find at the [downloads page of nodejs.org](https://nodejs.org/en/download/). 
Installed with defaults, this will install **both nodejs and npm**.

### How do I use Node?

Easy enough! Just open up a terminal on your computer and run the command `node`. If it is installed properly, you should be presented with a console.
Now, we can run any piece of JavaScript code that we might want to from within the terminal.

## How to Work in React
There are 3 main steps to starting a React application. First, create a folder anywhere on your computer. Typically, we don't put spaces in folder names, so use hyphens if you have to separate words. In our Github repository (where you are currently viewing this), the folders are a good example of how to do so! It's good practice to do so. 

Open Visual Studio Code, and open the folder. This can be done in two ways. VSC has a welcome menu that has an option to open a folder. It can be done this way. Otherwise, both MacOS and Windows will have a menu bar at the top. You can click File -> Open Folder and navigate to the folder using your file explorer (Finder on Mac). 

Once you've done so, you can open the terminal! In the same menu bar where File is, there is a tab called "Terminal"! Click Terminal --> New Terminal. 

On that topic, we can actually create our React application! Unfortunately, it isn't as simple as just opening a file as it was with HTML, but lucky for us, npm provides us with the simplicity to do almost that! First, React requires a lot of files for its functionality, but we don't have to make it ourself. npm has the following command, `npx create-react-app my-app`, that will create the React project will *all* its necessary tools! When running that command, it'll take a big to completely finish, but once you see "Happy Hacking", and the ability to type again, then you'll know it's done! What this does is create all the necessary React files in a folder called `my-app`. Realistically, you can name the folder whatever you'd like, but the default one for tutorials is my-app.

Just some extraneous knowledge, but you may actually create all the files in the folder you are idrectly running it from without creating another folder inside it. This is done by doing `npx create-react-app .`. `.` represents the current folder we are in, in terms of the file system organization. If this sounds like nonsense, don't worry too much! There's no real difference between the two methods, it may actually be more desired to have it in its own folder for most purposes.

Once your React application is ready to go, we will execute the next two commands in the terminal:
`cd my-app`
`npm start`

`cd` stands for "change directory", essentially taking you to whatever folder you specify. There is a little more to the command, but we'll refrain from going too far into it, since for our purposes this is all we'll need to do.
`npm start` is just an npm command that asks to start running the project. This will create something called "localhost", and clicking on that link that appears in the terminal will take you to your React app! This is just a local "server" for your React application while you develop. Once you kill the terminal, the server will close.

Within the default React files, there's a lot of files that can be a little complex and confusing, but for now, we will only focus on the `src` folder. This folder contains files that directly contribute to the content on the page. The content is held in all JavaScript files, since React is a JS library. We'll talk more about what you can do in src in future workshops as well as later in this workshop, but for now, just consider `App.js` and `App.css` as our main files. Any content you put in here will directly appear on the page. Think of `App.css` as the `style.css`, and `App.js` sort of like the index.html from our HTML workshop.

> There actually is an index.html file in public, but we don't put content in there, however that still is the entry point for the website.

Anything we put into the `App.js` will appear if its within the parantheses in the return statement JavaScript expressions on the page. Again, we won't get too deep into each individual piece, but feel free to observe what is in `App.js`! 

### Introducing Import
At the top, you may notice some sentences that start with `import`. We'll get into export more at a later point in this workshop. `import` simply allows us to use contents from another file in our current file. When `App.css` is imported, that means that all the style rules from that file will apply to `App.js`! We can also import some other files, including other JS files and images, but we'll see that at a later point!

### JSX
You may notice something a little strange in `App.js`-- it looks like HTML mixed in the JavaScript code! This actually isn't pure HTML, this is something called JSX! JSX is sort of a hybrid of JS and HTML.

JSX extends what JavaScript usually allows in order to allow for HTML-like elements. They're not actually HTML elements. They create React “elements”. These will describes the look of the UI to React, in order to know how to display the content on the page!

For example, we can do the following, and this is totally valid!

```js
let element = <h1>Hello, world!</h1>;
```

Another feature we'll use extensively is putting variables and other JavaScript expressions inside React elements using {braces} (sometimes people call these curly brackets). For example:

```js
const name = 'Sean';
const facts = <p>{name} is swag :)</p>
```

is another totally valid statement! This allows for a ton of flexibility for how to write our code.



## Components
### What is a component?
Components represent a way to reuse elements on your web application. Imagine a Twitter feed where each post has the format but is filled slightly differently. In this case, it would be insane to have to go through and change each and every HTML element if we wanted to edit the format of a post. For example, if we wanted to make all of the usernames unbolded instead of bolded, we may have to go through each and every post element and delete a tag. The solution to this madness is components. 

### How do we create components?
To begin working with components, we usually create a new folder called `components` for them in the `src` folder. After this is done, we can create a `.js` file to store our component (`Post.js` for example). Setting up the component will look something like the following:
```js
import React from 'react';

function Post(){
    return <h1>hello</h1>;
}

export default Post;
```

What's shown here from the top:
1. React is imported so we can use parts of it in our file.
2. A function is defined where
    1. The name matches the name of the file
    2. A single JSX element is returned from the function
3. The component is exported so we can later import it into another file

### How do we use the component?
After our component is well defined and exported, we can use the component by importing it into another file.

#### How do we import files?
Importing is done in React using the import keyword (what a shocker) followed by a path to the file as a string. For example, if we wanted to import the `Post` component into the `App.js` file, we could simply write the line:
```js
import Post from './components/Post.js'
```

A few things to note here:
1. The word before `from` has to exactly match whatever the name from the export (which should also match the name of your file)
2. The path to the file is surrounded by quotation marks (either is fine, but try to be consistent)
3. The path begins with `.`, which simply refers to the folder this file is currently in (in `App.js`, this refers to `src`)

Once we have our component imported, we can create elements similar to how we used HTML tags in the past. If I wanted to render a Post component, I could simply return `<Post />` from `App()`.

## So what is React? Why is it so popular?

React is **a library for building user interfaces. It is declarative, component-based, and "learn once, write anywhere"**. Here's what all those terms mean:
* **declarative**: your code is free to *describe* what it does, rather than implement every little detail. Think of it as the difference between writing HTML and writing C++.
* **component-based**: your interface will be compartmentalized into discrete components.
  * This makes life easier for us down the line, since our code will be far more maintainable. Imagine if Facebook kept all it's interface code in a single HTML file!
* **"learn once, write anywhere"**: your code will work regardless the other technologies you use. Additional features are painless.

### But why is it so popular?

Sure, there are other libraries out there like Vue and Angular but React has amassed insurmountable popularity primarily because of one feature that it brought to the table:

**React only updates what needs to be updated**

Allow me to reiterate this. This is the thing that made React so popular:

**React will only update what needs to be updated in your interface**

What this means is that if you are running something that handles a ridiculous amount of data every time a new piece of data comes in, you don't have to update every single element of the interface.

In short, React.....reacts!

## `create-react-app`

`create-react-app` is a tool made by Facebook that **bootstraps** (see: sets up) an NPM package with handy scripts, all the dependencies you need, and a sample app for you to get started with! All we need to do to create our app is run:

```sh
create-react-app <folderName>
```

Once this runs, you'll create a new package with all the dependencies for a react app already installed, and a handful of scripts to run, test, and build your app at your disposal. More specifically,
* We can serve the project locally with `npm start`
* We can build the project for production with `npm build`
* We can run any tests we have written with `npm test`

Let's run the demo. Change directories into the folder we just made, and run `npm start` or `npm run start`. This will begin serving the application on a development server so that we can see what the app looks like at present.

You should get a page that looks like:

![a rotating atom, the logo for React](https://code.visualstudio.com/assets/docs/nodejs/reactjs/welcome-to-react.png)

Let's investigate how this all works.

## Understanding the `create-react-app` demo

Well, judging by the fact that the webpage tells us to "Edit src/App.js and save to reload.", why don't we do just that?

Navigate in your package folder to [src/App.js](src/App.js). Once in, we can see what it is that React wants us to edit:

```js
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

Pretty short and sweet! If we change something in the file, we can see that the webpage on our browser will automatically reflect our changes. So what does this demo tell us?
* We can return HTML as easily as anything else.
* We can import CSS files and others - not just JS - to our code.
  * Notice we import `./App.css`, and its styles are applied to the component.
  * Notice how we import `logo.svg` as `logo` and then use it later as a value: `src={logo}`.
* Some of our HTML properties exist under a different name.
  * `class` becomes `className`, for example.

### HTML in JS: JSX

The first thing that we mentioned is one of React's great parts. This is something called JSX. It allows us to pass around HTML as easily as anything else in React.

If we are passing it around, though, it needs to all be contained in a single container tag. Notice how our return statement up above wraps it in a `<div>` tag?

In any case, let's change up the structure a little bit by adding in an `<h1>` tag:

```js
// ...
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
// ...
```

Better yet, let's try adding in the header tag but use a variable:

```js
// ...
function App() {
  const greeting = "Hello";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{greeting}</h1>
// ...
```

#### Things that were renamed

There are a few properties from HTML that have been renamed in React's JSX. That is, there are a few **DOM elements** that have been renamed. Here are example changes from what we've learned for reference:
* `class` -> `className`
* `onchange` -> `onChange`

Notice the trend? **DOM element names have just been made camel-cased**. That's all there is to it! A more complete list (including how inline styling has changed), can be found [here](https://reactjs.org/docs/dom-elements.html).

### Including other files

We can include other files in our React components very easily through `import` statements.

Typically for a React component, this means that we style our JSX through a CSS file. In the case of our App component, this is `App.css`.

# Resources

There is no way we could possibly cover all of this material in a single README, so here are a variety of resources for you to check out at your leisure!

## Node, NPM
* [tutorialspoint's piece on "What is Node?"](https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm)
* [How to publish your own package to NPM](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)

## Classes and Modules
* Classes
  * [MDN's reference guide to ES6 classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
  * [JavaScript's private class fields (new material, worth a read!)](https://www.sitepoint.com/javascript-private-class-fields/)
  * [Even newer, the **proposed** addition of public and private class fields to JavaScript](https://github.com/tc39/proposal-class-fields#private-fields)
* Modules
  * [MDN's reference guide on modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
  * [tutorialspoint's guide to exports](https://www.tutorialspoint.com/es6/es6_modules.htm)
* Bind
  * [JavaScript's bind method uses and practical applications](https://www.javascripttutorial.net/javascript-bind/)
  * [The MDN reference for Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)

## React
* [React's official guide to getting started](https://reactjs.org/docs/getting-started.html)
* [React docs on the React.Component interface](https://reactjs.org/docs/react-component.html)
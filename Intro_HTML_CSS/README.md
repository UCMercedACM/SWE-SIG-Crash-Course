# Intro to HTML and CSS


# Getting Started
Install VS Code onto your system 

```
https://code.visualstudio.com/download
```

Navigate to Extensions and add Liveserver

```
https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
```

Open VS Code and create a folder named "Intro_To_HTML" create two files named ```index.html``` and ```index.css```

## Intro to HTML

HTML Stands for Hyper Text Markup Language

This is the building block for any website you visit. Visit this link and right click on the page, navigate to Inspect.
```
https://www.w3schools.com/html/html_basic.asp
```

Here you will see the HTML for this page.

## index.html
When deploying your website to a webserver it looks for the "first" item in your directory which would be "index.html" always name your main HTML file "index.html"


# Basic File Structure
Each HTML file starts with a ```<!DOCTYPE html>``` this indicates that the file is written in html, add this to the top of your file.

Lets add some basic code to your HTML File. We will come back to this in a minute! 

```
<!DOCTYPE html>
<html>

<head>My First Website</head>

<body>
    <h1>Header</h1>
    <p>Paragrap</p>
</body>


</html>
```

Add this to your html File and save it. We will then right click on your index.html and click "Open with live Server" You will now see your first website!

## Commenting
To comment sections of HTML we encapsulate it with ```<!-- --->```

For example 

```
<!--
html>

<head>My First Website</head>

<body>
    <h1>Header</h1>
    <p>Paragrap</p>
</body>


</html>
--->
```
# More about Tags
Tags are an essential part of understanding HTML. Tags begin with an opening tag ```<tag>``` and closing tag with a forward slash ```</tag>```
Tags enclose either plan text or other tags. In the example above you can see we have an ```<html></html>``` tag that encloses the entire file. Inside this tag we start defining other elements of our page including the ```<head></head>```  and the ```<body></body>``` tag.

* ### ```<head>```
Tags placed inside the head tag does not render to the page. This is used for refering to other files such as CSS and or weblinks that work with your site.


* ### ```<body>```
Your markup language will be typed within this tag. This is where you include your title, paragraphs, pictures or links. 



* ## ```<h1></h1>```
header tags stand for "Header size (insert 1-6)"  1 being the biggest sized header.

* ## ```<p></p>```
Paragraph tags display large chunks of text

* ## ```<a href="(insert link)"></a>```
This adds an hyperlink to your webpage, anything added within the tag will be hyperlinked.

* ## ```<ol></ol>```
An ordered list of ```<li></li>``` (Think of 1.,2.,3.)

* ## ```<ul></ul>```
Unordered lists of items. (Think of bullet Points)

* ## ```<li></li>```
This Tag is used for defining the items within the lists above



# Lets update the HTML!

Now that we have covered basics in Tags lets update our HTML:

```
<html>

<head>
<!----Place Cool Links here!--->
</head>

<body>
    <h1>Header One</h1>
    <h2>Header</h2>
    <h2>Header</h2>
    <h2>Header</h2>
    <p>This is ACM's Intro to HTML and CSS workshop!</p>
    <ul>
        <li>Item 1</li>
        <li> Item 2 </li>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> The secret to getting into google</a>
</body>
</html>
```

# The ```<div></div>``` Tag
The DIV Tag stand for 'Division' and it does not modify your text by itself. It is used for dividing your webpage into readable sections and for defining areas that your CSS will apply to, we will add this later.

Update your HTML to apply the ```<div></div>``` tag to close the items within your body.

```
html>

<head>
<!-Place Cool Links here!--->
</head>

<body>
 <div>
    <h1>Header One</h1>
    <h2>Header</h2>
    <h2>Header</h2>
    <h2>Header</h2>
    <p>This is ACM's Intro to HTML and CSS workshop!</p>
    <ul>
        <li>Item 1</li>
        <li> Item 2 </li>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>
 </div>
</body>
</html>
```
# Lets add an Image!

The ```<img>``` tag displays images onto your website!

Here is an example:
```
<img src="https://www.universityofcalifornia.edu/sites/default/files/uc-merced-econ-impact.jpg" alt="UC Merced" />
```


# Intro To CSS










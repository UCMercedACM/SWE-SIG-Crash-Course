# Intro to APIs

## Getting Started

Download Postman `https://www.postman.com/`
Star this repo!

## PostMan

Postman is an application used for API testing. It is an HTTP client that tests HTTP requests, utilizing a graphical user interface, through which we obtain different types of responses that need to be subsequently validated.

## What is an API ?

API stand for "Application programming interface" or as google would say "An application programming interface is a connection between computers or between computer programs. It is a type of software interface, offering a service to other pieces of software".

Think of API's as a way to get information someone else has created and using it within your own project.
Web APIs form the backbone of the internet: it's how frontends (i.e. a website) can get information from backends/databases.

Here are some examples of API's `https://github.com/public-apis/public-apis`
Look through this and start to get a good idea of how API's can be tethered towards your own projects.

## HTTP Requests

HTTP stands for Hyper Text Transfer Protocol

- The protocol used for data exchange on the Web
- A client-server protocol where requests are made by a client and responded to by a server

Requests and responses are sent via messages that include:

- A start line (request or status)
- Headers (zero or more)
- An empty line
- Optional message body

![requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages/httpmsg2.png)

## Request and Responses

Client

- Initiates the HTTP request
- Interprets the response
- Can be web browser, mobile app or other

Server

- Sends a HTTP response from a client request
- Often a collection of servers (not just one)

![http](https://lh3.googleusercontent.com/proxy/3_DK7ytPlDbIRCuXoTLFwf4VNqGGuWqH9yn3JyjA23he8AGFyesf70oX9BiydLI6We3VVLt5c3rro1b1rcmHigisy09dofo_hMDuBGxRbz5pnm7ZunPjjdxODsCY_nIX2kFOalzh7DA)

## HTTP Status Codes

![codes](https://miro.medium.com/max/920/1*w_iicbG7L3xEQTArjHUS6g.jpeg)

## JSON

JSON stands for "JavaScript Object Notation" remember the objects we covered in the last workshop?
JSON is a lightweight format for storing and transporting data
JSON is often used when data is sent from a server to a web page
Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays

```JSON
{
"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]
}
```

## Types of requests/responses (methods)

### GET

- Used to retrieve information from a server
- The query string (name/value pairs) is sent in the URL of the request
- GET requests should never be used when dealing with sensitive data
- GET requests are only used to request data (not modify)

### POST

- Used to send data to a server to create a resource
- The data sent to the server is stored in the body of the HTTP request
- POST requests are used when dealing with sensitive data

### DELETE

- Deletes a specified resource

### PUT

- Less common than POST
- Used to send data to a server to update a resource

## Async JS functions

In a synchronous programming model, things happen one at a time. When you call a function that performs a long-running action, it returns only when the action has finished and it can return the result. This stops your program for the time the action takes.

An asynchronous model allows multiple things to happen at the same time. When you start an action, your program continues to run. When the action finishes, the program is informed and gets access to the result (for example, the data read from disk).

In a synchronous environment, where the request function returns only after it has done its work, the easiest way to perform this task is to make the requests one after the other. This has the drawback that the second request will be started only when the first has finished. The total time taken will be at least the sum of the two response times.

### Await

The await keyword, well, awaits a response from something. In particular, for whatever thing we're awaiting, we won't execute any more code until we get what we're waiting for. As you can imagine, this is a very useful programming pattern! You only want to update data after you receive it, and this is the way to do it.

## Fetch

Fetch is an API used by JavaScript to make HTTP request to an API's information you want.
The most basic example is a simple GET request (in the larger set of possible HTTP requests). GET requests are, well, you getting something. But in particular, it means that all the service really needs to know is the path to the resource, no extra options required!
When you call fetch with just a URL, you make a GET request by default.

## JSON reponse (using Postman)

1. GET https://jsonplaceholder.typicode.com/posts
2. POST https://jsonplaceholder.typicode.com/users
   - Body > Raw > JSON
   - Copy the JSON below into the body

```JSON
[
    {
        "id": 11,
        "name": "Krishna Rungta",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }
]
```

## Resources

### PostMan

`https://learning.postman.com/docs/getting-started/introduction/`

### Async Functions

`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function`

## Project Ideas !

Using an image API implement a feature to be able to look up certain kind of photos

Using an Pokemon API implement a search function to find different kind of Pokemon

Using a Rhyme API implement a feature so that a user can see which words rhyme with the searched word.

API Ideas!!!! `https://github.com/public-apis/public-apis`

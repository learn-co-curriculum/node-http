# Core HTTP Node Module

## Overview

In web development we rely on HTTP(S) protocol to enable the communication between clients and servers. A server is typically a complex application like Microsoft IIS, Tomcat or Apache. If you haven't heard about these technologies that's okay. Just think of them as an application which needs to process the logic that developers write in some programming language, and output the results to clients (i.e., browsers). 

The key here is that these servers are overly complex and not fun to work with. They take years for someone to master due to the shear number of configurations and features which they posses. In addition, most of them are painfully slow because they use the blocking input/output model. (Refer to Unit 1 for the definitions of blocking and non-blocking I/O.)

Node was built from the ground-up for networking, and there's a core `http` module which developers can use to implement their own HTTP servers. For the HTTPS protocol, developers can use `https` module which is very similar to `http`. 

With Node and `http`, you can build full-blown HTTP web servers **and implement your logic** right there in the same environment, compared to other technologies where web server and the programming language environment and logic are separate components. (Having two parts talks to each other instead of having just one thing do everything introduces additional complexity.)

This lesson will cover the `http` module API and its main methods. We'll explain main methods and properties of `request` and `response`.

## Objectives

1. Describe `http` module API
1. Comprehend the server and its main API
1. Describe request and its main methods and properties
1. Describe response and its main methods and properties

## `http`

As we wrote in the overview, `http` will allow us to build HTTP web server which are non-blocking and fast. We can leverage JavaScript to write our logic. So let's create a simple server.

`http` is a core module so to use it we can just import it with `require('http')`. So let's do that in a new file `server.js`:

```js
var http = require('http')
```


## `createServer`

So far we imported the module but it doesn't do anything yet. We need to define your server and its responses. To do so, let's create the server object with the aptly named `createServer()` method:

```js
var http = require('http')

var server = http.createServer(function(request, response) {
  // Logic to process request and send back response
})
```

The most interesting thing will happen in the callback function of the `createServer` (request handler), i.e., its argument. To process the request and output response back, we need two objects: `request` and `response`. They are the arguments of the callback function.


## `request`

We defined the server and got it ready to read the data from the response, like a URL and an HTTP method of the request (GET /users). How do we go about doing it?

We can utilize `request` and the properties `request.url` and `request.method`:

```js
var http = require('http')

var server = http.createServer(function(request, response) {
  console.log('URL: ', request.url)
  console.log('METHOD: ', request.method)
  // Logic to send back response
})
```

`request` has many other properties but to finish our request handler, let's implement the output to the client.

## `response`

After reading the request information and performing some I/O (reading from a database), we can send the results back to the client. To do this, we use `response.end()` and some hard-coded data:

```
var http = require('http')

var server = http.createServer(function(request, response) {
  console.log('URL: ', request.url)
  console.log('METHOD: ', request.method)
  var users = ['56b64e2c765eb2fdb6238f7b', '56b64e2e765eb2fdb6238f7c', '56b64e2f765eb2fdb6238f7d']
  response.end('Your request ' + request.url + ':' + JSON.stringify(users)) 
})
```


## `listen`

By now, we have implemented the request handler and create the server object. However, if you run this application, nothing will happen. This is because we only defined the server and its request handler. We didn't boot up or launched the server!

To tell Node to use the server definition and run the server, we need to utilize `listen` with the port number on which we want the server to accept incoming requests:

```js
server.listen(3000)
```

The full `server.js` file is this:

```js

var http = require('http')

var server = http.createServer(function(request, response) {
  console.log('URL: ', request.url)
  console.log('METHOD: ', request.method)
  var users = ['56b64e2c765eb2fdb6238f7b', '56b64e2e765eb2fdb6238f7c', '56b64e2f765eb2fdb6238f7d']
```

The next line will send the response which is a string. `JSON.stringify()` is a method to convert JavaScript/Node objects into strings.

```js  
  response.end('Your request ' + request.url + ':' + JSON.stringify(users)) 
})

server.listen(3000)
```

You can run it with `node server`. Leave the terminal window open (don't expect to see unicorns or anything like that!). To see the `console.log` outputs,open your browser at <http://localhost:3000/users>. Now, notice the output in the browser:

```
Your request to /users:["56b64e2c765eb2fdb6238f7b","56b64e2e765eb2fdb6238f7c","56b64e2f765eb2fdb6238f7d"]
```

While the terminal output will be similar to this:

```
URL:  /users
METHOD:  GET
```

We observed that accessing request data such as `url` and `method` works. We send back the response in text format (it had an array of user IDs).

In just a few lines of code, we were able to create an HTTP server. It's not very comprehensive, but that's the beauty of Node—you can start small and then add more functionality as you go along.

## Resources

1. [Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
1. [Official http documentation](https://nodejs.org/dist/latest-v5.x/docs/api/http.html)
1. [Creating a HTTP web server video](https://www.youtube.com/watch?v=RUH1y6H55Ao)

---

<a href='https://learn.co/lessons/node-http' data-visibility='hidden'>View this lesson on Learn.co</a>

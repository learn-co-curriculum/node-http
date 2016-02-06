# Core http Node Module

## Overview

In the web development we rely on HTTP(S) protocol to enable the communication between clients (mostly browsers but can be other servers) and servers. Server is typically a complex application like Microsoft IIS, Tomcat or Apache. If you haven't heard about these technologies that's okay. Just think of them as an application which needs to process the logic that developers write in some programming language, and output the results to clients (i.e., browsers). 

The key here is that these servers are overly complex and not fun to work with. They take years for someone to master due to the shear number of configurations and features which they posses. In addition, most of them are painfully slow because they use the blocking input/output model. (Refer to Unit 1 for the definitions of blocking and non-blocking I/O.)

Node was build from the ground-up for networking, and there's a core `http` module using which developers can implement their own HTTP servers. For the HTTPS protocol, developers can use `https` module which is very similar to `http`. 

With Node and `http`, you can build full-blown HTTP web servers **and implement your logic** right there in the same environment. Contrast it with other technologies where web server and the programming language environment and logic are separate components. (Having two parts talks to each other instead of having just one thing do everything introduces additional complexity.)

This lesson will cover the `http` module API and its main methods. We'll explain main methods and properties of `request` and `response`.

## Objectives

1. Describe http module API
1. Comprehend the server and its main API
1. Describe request and its main methods and properties
1. Describe response and its main methods and properties

## http

## createServer

## listen

## request

## response

## Resources

1. []()
1. []()
1. []()


---

<a href='https://learn.co/lessons/node-http' data-visibility='hidden'>View this lesson on Learn.co</a>

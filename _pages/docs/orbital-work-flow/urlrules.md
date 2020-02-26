---
layout: single
title: Url Rules
permalink: /docs/urlrules
sidebar:
  nav: "docs"
---

## What are they?

In a Mockdefinition file, the scenarios have a series of matching rules, this includes Url match rules.

Url match rules are rules that govern the request url endpoint path property. This allows you to mock out the different
valid and invalid endpoint path url values.

Once a key and a value of the request url endpoint have been added, you will need to also add a response. The response
includes the status code and the Body of the response. 

## How do they work?

When you add a url match rule and response, this enables you to mock out what the response is to requests with 
these chosen url match rules.

After uploading the Mockdefinition to the server using the Orbital Designer, you can now generate a request with 
tools like Postman that will replicate the scenario. Setting the url endpoint path to match the rule(s) that you 
have created and receiving back the responses mocked out earlier.
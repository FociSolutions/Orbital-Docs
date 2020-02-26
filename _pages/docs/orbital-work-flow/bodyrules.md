---
layout: single
title: Body Rules
permalink: /docs/bodyrules
sidebar:
  nav: "docs"
---

## What are they?

In a Mockdefinition file, the scenarios have a series of matching rules, this includes Body match rules.

Body match rules are rules that govern the requests body property. This allows you to mock out the different
valid and invalid body values.

Once a value of the request body has been added, you will need to also add a response. The response
includes the status code and the Body of the response. 

## How do they work?

When you add a Body match rule and response, this allows you to mock out what the response is to requests with 
these chosen Body match rules.

After uploading the Mockdefinition to the server using the Orbital Designer, you can now generate a request with 
tools like Postman that will meet the criteria of the scenario. Setting the body to match the rule(s) that you 
have created and receiving back the responses mocked out earlier.
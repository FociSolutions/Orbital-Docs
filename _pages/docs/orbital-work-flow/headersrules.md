---
layout: single
title: Header Match Rules
permalink: /docs/headersrules
sidebar:
  nav: "docs"
---

## What are they?

In a Mockdefinition file, the Scenarios have a series of matching rules, this includes Header match rules.

Header match rules are rules that govern the request header properties. This allows you to mock out the different
valid and invalid headers of API endpoints.

Once a key and a value of the request have been added, you will need to also add a response. The response includes
the status code and the Body of the response. 

## How do they work?

When you add a header match rule and response, this enables you to mock out what the response is to requests with 
these chosen header rules.

After uploading the Mockdefinition to the server using the Orbital Designer, you can now generate a request with 
tools like Postman that will replicate the scenario. Setting the header to match the rule(s) that you have created,
and receiving back the responses mocked out earlier.

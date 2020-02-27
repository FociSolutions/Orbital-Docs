---
layout: single
title: Url Rules
permalink: /docs/urlrules
sidebar:
  nav: "docs"
---

## What are they?

In a mockdefinition file, the scenarios have a series of matching rules, these include url match rules.

Url match rules are rules that govern the request url endpoint path property. This allows you to mock out the different
valid and invalid endpoint path url values.

## How do they work?

When you add a url match rule and response, this enables you to mock out what the response is to requests with 
these chosen url match rules.

After uploading the mockdefinition to the server using the Orbital Designer, you can now generate a request with 
tools like Postman that will replicate the scenario. Setting the url endpoint path to match the rule(s) that you 
have created and receiving back the responses mocked out earlier.

### Creating a url match rule in the Orbital Designer

Once a new mockdefinition is generated, you start at the Endpoint Overview. This displays the available endpoints 
along with their verbs, endpoint path and if there are any existing scenarios.

#### Overview of the endpoints

![Endpoint Overview](/Orbital-Docs/assets/images/orbital-ui/endpointoverview.png)

Select the endpoint to add a scenario, or update an existing one. There will be a default scenario to get going.

#### The default scenario for /pets

![Scenario Overview](/Orbital-Docs/assets/images/orbital-ui/scenariooverview.png)

#### Adding a url match rule

![URL Request Match - Request](/Orbital-Docs/assets/images/request-match-rules/addingurlmatchrule.png)

We have added the value of ```/pets``` and the rule of ```Equals```. This
rule will check the request url endpoint path to ensure they have the same value.

Once a value and rule for the url match rule has been added, you will need to add a response. The response
includes the status code, an optional header and the body of the response. 

#### Response being populated

![URL Request Match - Response](/Orbital-Docs/assets/images/request-match-rules/addingurlmatchruleresponse.png)

In the response section, the status code is a ```200``` and we added a body in the response.

Now click ```Save``` to save the scenario and head back to the main Scenario Overview page.

---
layout: single
title: Body Rules
permalink: /docs/bodyrules
sidebar:
  nav: "docs"
classes: wide
---

## What are they?

In a mockdefinition file, the scenarios have a series of matching rules, these include body match rules.

Body match rules are rules that govern the requests body property. This allows you to mock out the different
valid and invalid body values.

## How do they work?

When you add a body match rule and response, this allows you to mock out what the response is to requests with 
these chosen body match rules.

After uploading the mockdefinition to the server using the Orbital Designer, you can now generate a request with 
tools like Postman that will meet the criteria of the scenario. Setting the body to match the rule(s) that you 
have created and receiving back the responses mocked out earlier.

### Creating a url match rule in the Orbital Designer

Once a new mockdefinition is generated, you start at the Endpoint Overview. This displays the available endpoints
along with their verbs, endpoint path and if there are any existing scenarios.

#### Here we see the overview of the endpoints

![Endpoint Overview](/Orbital-Docs/assets/images/orbital-ui/endpointoverview.png)

Select the endpoint to have a scenario added. There will be a default scenario to get going.

#### The default scenario for /pets

![Scenario Overview](/Orbital-Docs/assets/images/orbital-ui/scenariooverview.png)

#### Here we have the input for adding a url match rule

![URL Request Match - Request](/Orbital-Docs/assets/images/request-match-rules/addingbodymatchrule.png)

localhost:4000?Search=Orbital

We have added the value of ```/pets``` the rule of ```Equals```. This
rule will check request url endpoint path to ensure they have the correct value.

Once a value of the request body has been added, you will need to also add a response. The response
includes the status code and the Body of the response. 

Once a value and rule for the url match rule has been added, you will need to also add a response. The response
includes the status code and the body of the response. 

#### Here we have the response being populated

![URL Request Match - Response](/Orbital-Docs/assets/images/request-match-rules/addingbodymatchruleresponse.png)

In the response section, the status code is a ```200``` and we added a body in the response.

Now click ```Save``` to save the scenario and head back to the main Scenario Overview page.
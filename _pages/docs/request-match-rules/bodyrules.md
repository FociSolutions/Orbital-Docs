---
layout: single
title: Body Rules
permalink: /docs/bodyrules
sidebar:
  nav: 'docs'
classes: wide
---

## What are they?

In a Mockdefinition file, the scenarios have a series of matching rules, these include body match rules.

Body match rules are rules that govern the requests body property. This allows you to mock out the different
valid and invalid body values.

## How do they work?

When you add a body match rule and response, this allows you to mock out what the response is to requests with
these chosen body match rules.

After uploading the Mockdefinition to the server using the Orbital Designer, you can now generate a request with
tools like Postman that will meet the criteria of the scenario. Setting the body to match the rule(s) that you
have created and receiving back the responses mocked out earlier.

### Creating a URL match rule in the Orbital Designer

Once a new Mockdefinition is generated, you start at the Endpoint Overview. This displays the available endpoints
along with their verbs, endpoint path and if there are any existing scenarios.

#### Here we see the overview of the endpoints

![Endpoint Overview](../../../assets/images/orbital-ui/endpointoverview.png)

Select the endpoint to have a scenario added. There will be a default scenario to get going.

#### The default scenario for /pets

![Scenario Overview](../../../assets/images/orbital-ui/scenariooverview.png)

#### Here we have the input for adding a URL match rule

![URL Request Match - Request](../../../assets/images/request-match-rules/addingbodymatchrule.png)

We have added the value of `/pets` the rule of `Equals`. This
rule will check request URL endpoint path to ensure they have the correct value.

Once a value of the request body has been added, you will need to also add a response. The response
includes the status code and the Body of the response.

Once a value and rule for the URL match rule has been added, you will need to also add a response. The response
includes the status code and the body of the response.

#### Here we have the response being populated

![URL Request Match - Response](../../../assets/images/request-match-rules/addingbodymatchruleresponse.png)

In the response section, the status code is a `200` and we added a body in the response.

Now click "Save" to save the scenario and head back to the main Scenario Overview page.

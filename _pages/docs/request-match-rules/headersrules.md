---
layout: single
title: Header Match Rules
permalink: /docs/headersrules
sidebar:
  nav: 'docs'
classes: wide
---

### What are they?

In a Mockdefinition file, the scenarios have a series of matching rules, these include header match rules.

Header match rules are rules that govern the request header properties. This allows you to mock out the different
valid and invalid headers of API endpoints.

### How do they work?

When you add a header match rule and response, this enables you to mock out what the response is to requests with
these chosen header rules.

After uploading the Mockdefinition to the server using the Orbital Designer, you can now generate a request with
tools like Postman that will replicate the scenario. Setting the header to match the rule(s) that you have created,
and receiving back the responses mocked out earlier.

### Creating a header match rule in the Orbital Designer

Once a new Mockdefinition is generated, you start at the Endpoint Overview. This displays the available endpoints
along with their verbs, endpoint path and if there are any existing scenarios.

#### Overview of the endpoints

![Endpoint Overview](../../../assets/images/orbital-ui/endpointoverview.png)

Select the endpoint to add a scenario, or update an existing one. There will be a default scenario to get going.

#### The default scenario for /pets

![Scenario Overview](../../../assets/images/orbital-ui/scenariooverview.png)

#### Adding a header match rule

![Header Request Match - Request](../../../assets/images/request-match-rules/addingheadermatchrule.png)

We have added the key value pair of `Content-Type` and `application/json` with the rule of `Equals`. This
rule will check request headers to ensure they have the correct key and value.

Once a key and a value of the request have been added, you will need to also add a response. The response includes
the status code, an optional header and the body of the response.

#### Response being populated

![Header Request Match - Response](../../../assets/images/request-match-rules/addingheadermatchruleresponse.png)

In the response section, the status code is a `200` and we added a body.

Now click "Save" to save the scenario and head back to the main Scenario Overview page.

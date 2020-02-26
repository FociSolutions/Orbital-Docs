---
layout: single
title: Header Match Rules
permalink: /docs/headersrules
sidebar:
  nav: "docs"
---

### What are they?

In a Mockdefinition file, the Scenarios have a series of matching rules, this includes Header match rules.

Header match rules are rules that govern the request header properties. This allows you to mock out the different
valid and invalid headers of API endpoints.

### How do they work?

When you add a header match rule and response, this enables you to mock out what the response is to requests with 
these chosen header rules.

After uploading the Mockdefinition to the server using the Orbital Designer, you can now generate a request with 
tools like Postman that will replicate the scenario. Setting the header to match the rule(s) that you have created,
and receiving back the responses mocked out earlier.

### Creating a header match rule

Once a new Mockdefinition is generated, you start at the Endpoint Overview. This displays the available endpoints
along with their verbs, endpoint path and if there are any existing Scenarios.

#### Here we see the overview of the endpoints

![Endpoint Overview](/Orbital-Docs/assets/images/orbital-ui/endpointoverview.png)

Select the endpoint to have a Scenario added. There will be a default Scenario to get going.

#### The default Scenario for /pets

![Scenario Overview](/Orbital-Docs/assets/images/orbital-ui/scenariooverview.png)

#### Here we have the input for adding a Header match rule

![Header Request Match - Request](/Orbital-Docs/assets/images/request-match-rules/addingheadermatchrule.png)

We have added the key value pair of ```Content-Type``` and ```application/json``` with the Rule of ```Equals```. This
rule will check request headers to ensure they have the correct key and value.

Once a key and a value of the request have been added, you will need to also add a response. The response includes
the status code and the Body of the response. 

#### Here we have the response being populated

![Header Request Match - Response](/Orbital-Docs/assets/images/request-match-rules/addingheadermatchruleresponse.png)

In the response section, the status code is a ```200``` and we added a body in the response.

Now click ```Save``` to save the Scenario and head back to the main Scenario page.


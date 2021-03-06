---
layout: single
title: Body Rules
permalink: /docs/body-rules
sidebar:
  nav: 'docs'
classes: wide
---

## What are they?

Body rules are rules which determine when the request body is matched. There are several different ways a body
could match a scenario, including text equality, text contains, JSON contains, and more.

## How do they work?

When you add a body match rule and response, this allows you to mock out what the response is to requests with
these chosen body match rules.

After uploading the mockdefinition to the server using the designer, you can now generate a request with
tools like Postman that will meet the criteria of the scenario.

### Creating a URL match rule in the designer

Once a new mockdefinition is generated, you start at the Endpoint Overview. This displays the available endpoints
along with their verbs, endpoint path and if there are any existing scenarios.

![Endpoint Overview](../../../assets/images/orbital-ui/endpoint-overview.png)

Select the endpoint to have a scenario added. There will be a default scenario to get going.

#### The default scenario for /pets

![Scenario Overview](../../../assets/images/orbital-ui/scenario-overview.png)

Clicking on the scenario reveals the URL request match rules:

![URL Request Match - Request](../../../assets/images/request-match-rules/adding-body-match-rule.png)

The image shows the rule of `/pets` and the rule type of `Equals`. This
rule will check request URL endpoint path to ensure they have the correct value.

Once a value of the request body and URL has been added, you will need to also add a response. The response
includes the status code and the Body of the response.

![URL Request Match - Response](../../../assets/images/request-match-rules/adding-body-match-rule-response.png)

Click "Save" to save the scenario and return to the Scenario Overview page.

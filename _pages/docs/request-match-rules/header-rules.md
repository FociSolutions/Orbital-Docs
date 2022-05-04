---
layout: single
title: Header Match Rules
permalink: /docs/header-rules
sidebar:
  nav: "docs"
classes: wide
---

### What are they?

Header match rules are rules that govern the request header properties. This allows you to mock out the different
valid and invalid headers of API endpoints.

### How do they work?

When you add a header match rule and response, this enables you to mock out what the response is to requests with
these chosen header rules.

### Creating a header match rule in the Designer

Once a new mockdefinition is generated, you start at the Endpoint Overview. This displays the available endpoints
along with their verbs, endpoint path and if there are any existing scenarios.

#### Overview of the endpoints

![Endpoint Overview](../../../assets/images/orbital-ui/endpoint-overview.png)

Select the endpoint to add a scenario, or update an existing one. The following image shows a default scenario for `/pets`:

![Scenario Overview](../../../assets/images/orbital-ui/scenario-overview.png)

#### Adding a header match rule

![Header Request Match - Request](../../../assets/images/request-match-rules/adding-header-match-rule.png)

Select a Header Match Rules option from the Request Rule Type dropdown menu. The image shows the example of key value pair of `Content-Type` and `application/json` with the rule type of `Equals` for the New Scenario. This rule will check request headers to ensure they match. Click Save button to add the rule.

Once a request rule have been added, you will need to also add a response. The response includes
the status code, an optional header, and the JSON body of the response. The following image shows the example of the response:

![Header Request Match - Response](../../../assets/images/request-match-rules/adding-header-match-rule-response.png)

Clicking "Save" adds new response to scenario.

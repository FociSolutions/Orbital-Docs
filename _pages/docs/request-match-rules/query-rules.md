---
layout: single
title: Query Rules
permalink: /docs/query-rules
sidebar:
  nav: "docs"
classes: wide
---

## What are they?

Query param match rules are rules that govern the request query properties. This allows you to mock out the different
valid and invalid query values.

Once a key and a value of the request query have been added, you will need to also add a response. The response
includes the status code and the body of the response.

## How do they work?

When you add a query param match rule and response, this allows you to mock out what the response is to requests with
these chosen query rules.

After uploading the mockdefinition to the server using the designer, you can now generate a request using CURL commands or your favorite testing tool. Set the query parameters to match the rule(s) that you have created and receive back the responses mocked out earlier in the scenario.

### Creating a query match rule in the designer

Once a new mockdefinition is generated, you start at the Endpoint Overview. This displays the available endpoints
along with their verbs, endpoint path and if there are any existing scenarios.

#### Overview of the endpoints

![Endpoint Overview](../../../assets/images/orbital-ui/endpoint-overview.png)

Select the endpoint to add a scenario, or update an existing one. The following image shows "Default OK Scenario", let's add "Query param match rule" scenario for `/pets`.

![Scenario Overview](../../../assets/images/orbital-ui/scenario-overview.png)

#### Adding a query param match rule

![Query Request Match - Request](../../../assets/images/request-match-rules/adding-query-match-rule.png)

In "Query param match rule" scenario select a "Request" tab and chose a "Query Param Match Rules" option from the "Request Rule Type" dropdown menu. The image shows the key value pair of `Search` and `Orbital` (which will match `http://localhost:5000/?Search=Orbital`) with the rule of `Equals`. This rule will check request query parameters to ensure they have the correct key and value. Click + button to add the rule.

Once a key and a value of the request have been added, you will need to add a response. Select "Response" tab. The response includes the response type (by default Custom), status code (by default - 200), an optional header and the JSON body of the response `"body": "Response body for Query param match rule"`. The following image shows which response to use:

![Query Request Match - Response](../../../assets/images/request-match-rules/adding-query-match-rule-response.png)

Click "Save" to save the scenario and return to the Scenario Overview page.

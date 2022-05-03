---
layout: single
title: Scenarios
permalink: /docs/scenarios
sidebar:
  nav: "docs"
classes: wide
---

The scenarios describe what the endpoint will expect from the user's HTTP request and the response the user
should expect from the endpoint. An endpoint must have at least one scenario, but can have multiple. When the server receives a request for an endpoint, it checks all the available scenarios and uses the one with the best match against the incoming request. If multiple scenarios are matched, the first one is used.

A scenario consists of:

- **Metadata:** a title and description to explain the purpose of the scenario.
- **Policies:** principles and commands that can be run after a scenario is matched ([see more](/docs/policies)).
- **Request Match Rules:** these rules will indicate what the users HTTP request has to match to get a response from the server.
- **Response:** the server's response to the user's HTTP request.

The request match rules include [Header rules](./header-rules), [Query rules](./query-rules), [URL rules](./url-rules), and [Body rules](./body-rules).

---
layout: single
title: Architecture of Orbital's Designer
permalink: /docs/architecture/designer
sidebar:
  nav: 'docs'
classes: wide
---

The purpose of this project is to make it very easy to mock a server capable of responding to requests using a list of endpoints. This reduces the _frontend-backend_ team coupling, allowing teams to work independently.

## Designer

The designer is an easy-to-use web-based editor which can create Mockdefinitions. To create a new Mockdefinition, simply import an existing OpenAPI 2.0 definition and the endpoints will be populated in the editor view. Additionally, the Mockdefinition can be exported to the server or saved locally. The designer is the recommended way to edit and create Mockdefinitions because it validates the scenarios when saving them, preventing common mistakes such as an invalid HTTP status code or a response which is not formatted correctly.

### How it works

The designer is an _SPA_ which runs on Angular. When the user loads a Mockdefinition, it is stored in the DesignerStore. Multiple Mockdefinitions can be imported from the server simultaneously and will be added to the DesignerStore. The Mockdefinitions can be switched in the designer, allowing you to work on multiple Mockdefinitions at the same time.

### Creating a new Mockdefinition

A Mockdefinition contains an OpenAPI spec and a list of scenario(s) for each endpoint in that OpenAPI spec. An OpenAPI spec cannot be used by itself because it does not have the required information to match all incoming requests; the requests could have headers, queries, bodies, and different URL types, including what to respond with.

### Importing from Server

When a user wants to edit a Mockdefinition that is currently stored on the server, they can edit it by importing it from the server. This allows them to edit it in the designer, and then re-export it to the server later. The user could download the Mockdefinition from the server and then import it into the designer as a file, but this is a shortcut to make the process more efficient.

### Uploading an existing Mockdefinition

In order for the server to respond to endpoints, it requires at least one Mockdefinition. Uploading a Mockdefinition allows the server to respond to endpoints because it has to have the list of endpoints and responses available to respond to the incoming request with.

### Downloading a Mockdefinition

Downloading Mockdefinitions allow you to share them with others, or to save them to use later. Since the server stores all Mockdefinitions in an ephemeral in-memory database, **all Mockdefinitions must be downloaded before shutting down the server, otherwise they will be lost.**

Note: when using this feature from the designer, click “Allow this site to download multiple files” warning (or a similar warning) as this is required to download multiple Mockdefinitions at once. This security feature on your browser is used to prevent malicious sites from making the user download many files at once.

### Components

**Designer:** allows the user to create Mockdefinitions using a _web-based_ UI. These can be exported or imported from the server.

**Mockdefinition:** A Mockdefinition contains an OpenAPI spec and a list of scenario(s) for each endpoint in that OpenAPI spec. An OpenAPI spec cannot be used by itself because it does not have the required information to match all incoming requests; the requests could have headers, queries, bodies, and different URL types, including what to respond with. A Mockdefinition is an _annotated_ version of the OpenAPI spec.

**Endpoint:** this is the URL captured from the OpenAPI spec as part of the Mockdefinition.

**Scenario:** defines what rules the request must match to return a specific response. Each scenario defines one response.

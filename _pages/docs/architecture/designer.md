---
layout: single
title: Architecture of Orbital's Designer
permalink: /docs/architecture/designer
sidebar:
  nav: 'docs'
classes: wide
---

The purpose of Orbital is to make it very easy to mock a server capable of responding to requests using a list of endpoints. This reduces the _frontend-backend_ team coupling, allowing teams to work independently.

## Designer

The designer is an easy-to-use web-based editor which can create Mockdefinitions. To create a new Mockdefinition, simply import an existing OpenAPI 2.0 or 3.0 definition and the endpoints will be populated in the editor view. Additionally, the Mockdefinition can be exported to the server or saved locally. The designer is the recommended way to edit and create Mockdefinitions because it validates the scenarios when saving them, preventing common mistakes such as an invalid HTTP status code or a response which is not formatted correctly.

### How it works

The designer is an _SPA_ which runs on Angular. When the user loads a Mockdefinition, it is stored in the DesignerStore. Multiple Mockdefinitions can be imported from the server simultaneously and will be added to the DesignerStore. The Mockdefinitions can be switched in the designer, allowing multiple Mockdefinitions to be edited in the same workspace.

### Creating a new Mockdefinition

Creating a new Mockdefinition will create a set of default scenarios for all endpoints in the specified OpenAPI spec. These scenarios represent which responses should be returned when the request criteria are met.

### Importing from Server

In order to edit Mockdefinitions stored on the server, they have to be imported to the designer. When editing is finished, the Mockdefinitions can be re-exported to the server so that they can be used to match requests. Additionally, the Mockdefinitions can be downloaded locally and can be uploaded or edited later.

### Uploading an existing Mockdefinition

In order for the server to respond to endpoints, it requires at least one Mockdefinition. Uploading a Mockdefinition allows the server to respond to endpoints because it has to have the list of endpoints and responses available to respond to the incoming request with.

### Downloading a Mockdefinition

Downloading Mockdefinitions allow you to share them with others, or to save them to use later. Since the server stores all Mockdefinitions in an ephemeral in-memory database, **all Mockdefinitions must be downloaded before shutting down the server, otherwise they will be lost.**

Note: when using this feature from the designer, click “Allow this site to download multiple files” warning (or a similar warning) as this is required to download multiple Mockdefinitions simultaneously.

### Components

**Designer:** allows creating Mockdefinitions using a _web-based_ UI. These can be exported or imported from the server.

**Mockdefinition:** contains an OpenAPI spec and a list of scenario(s) for each endpoint in that OpenAPI spec. An OpenAPI spec cannot be used by itself because it does not have the required information to match all incoming requests; the requests could have headers, queries, bodies, and different URL types, including what to respond with. A Mockdefinition is an _annotated_ version of the OpenAPI spec.

**Endpoint:** this is the URL and HTTP method type from the OpenAPI spec.

**Scenario:** defines which rules the request must match to return a specific response. Each scenario defines one response.

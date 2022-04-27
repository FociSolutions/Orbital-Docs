---
layout: single
title: Quick-Start Guide
permalink: /docs/quick-start-guide
sidebar:
  nav: "docs"
classes: wide
---

This quick-start guide will show how to make a simple pet store which returns a pet by name. If no pets are found, it will return a custom message.

1. Deploy the components using [Docker](/docs/installation) to start up the designer and server.
2. Navigate to [http://localhost:4200](http://localhost:4200) in your browser.
3. Download [petstore.json](https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/json/petstore.json) or use your own sample OpenAPI file.
4. Click "Create new Mock".
5. Use `Pet Store Mock` as the mockdefinition&#39;s title.
6. Use `petstore.json` as the OpenAPI file.
7. Click "Next".
8. You will be presented with a list of endpoints available in `petstore.json`. Click on "GET /pets".
9. In order for the mockdefinition to match requests, it has to be uploaded to the server. Click on "Export Mock to Server" in the left-hand sidebar.
10. Move the mockdefinition that you&#39;ve created to the right-hand side using the arrows.
11. Use [http://localhost:5000/api/v1/OrbitalAdmin](http://localhost:5000/api/v1/OrbitalAdmin) as the server URL.
12. Click "Upload".
13. If uploading was successful, it will say that it was successful after a few seconds and move the exported mockdefinition to the left-hand side.
    a. If it was not successful, ensure that your server is running. For more information, refer to the Installation instructions and ensure that "[http://localhost:5000](http://localhost:5000)" can be accessed in your browser.
14. Navigate to [http://localhost:5000/pets](http://localhost:5000/pets) in your browser. It should display `No pets found`, as a pet has not been specified.
15. Navigate to [http://localhost:5000/pets?pet=sammy](http://localhost:5000/pets?pet=sammy) in your browser. It should display `Sammy the cat`.

Congratulations! You have created your very first Orbital Mock. Feel free to edit the example or use a different OpenAPI spec to match different types of requests.

If you want to learn more about scenarios, [policies](/docs/policies), or different rule matching with [header rules](./header-rules), [query rules](./query-rules), [URL rules](./url-rules) and [body rules](./body-rules).

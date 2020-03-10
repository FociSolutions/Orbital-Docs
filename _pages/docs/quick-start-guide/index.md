---
layout: single
title: Quick-Start Guide
permalink: /docs/quick-start-guide
sidebar:
  nav: 'docs'
classes: wide
---

This quick start guide will show you how to make a simple petstore which returns a pet by name. If no pets are found, it will return a custom message.

1. Deploy the components using [Docker](/docs/installation) to start up the designer and server.
2. Navigate to [http://localhost:4200](http://localhost:4200) in your browser.
3. Download [petstore.json](https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/json/petstore.json) or use your own sample OpenAPI file.
4. Click &quot;Create new Mock&quot;.
5. Use `Pet Store Mock` as the Mockdefinition&#39;s title.
6. Use `petstore.json` as the OpenAPI file.
7. Click &quot;Next&quot;.
8. You will be presented with a list of endpoints available in `petstore.json`. Click on &quot;GET /pets&quot;.
9. Create a new scenario which will match all requests to the &quot;GET /pets&quot; endpoint [(http://localhost:5000/pets)](http://localhost:5000/pets), and do not match any other scenario(s) that we have provided:
   10. Click the scenario called &quot;default title for /pet&quot;.
   11. Start by filling the "Metadata" section. Give the new scenario a new name (call it `Default Scenario`) and description. The name is required.
   12. Set the response status code to `200`.
   13. Click "Response" then set the response body to `"No pets found"` (with quotes).
   14. Click &quot;Save&quot;.
10. Create another scenario which will return `Sammy the cat` when a user goes to [http://localhost:5000/pets?pet=sammy](http://localhost:5000/pets?pet=sammy):
    11. Click &quot;+&quot; to create a new scenario.
    12. Set the title to `Return a pet`.
    13. Under &quot;Query Match Rules&quot;, type in `pet` as the key and `sammy` as the value.
    14. Click &quot;+&quot; next to the entry.
    15. In "Request Match Rules", remove the "Accept All" match rule in the "URL Match Rules" section. This rule is automatically added to new Mockdefinitions.
    16. Set the response status code to `200`.
    17. Set the response body to `"Sammy the cat"` (with quotes).
    18. Click "Save".
11. In order for the Mockdefinition to match requests, it has to be uploaded to the Mockdefinition server. Click on &quot;Export Mock to Server&quot; in the left-hand sidebar.
12. Move the Mockdefinition that you&#39;ve created to the right-hand side using the arrows.
13. Use [http://localhost:5000/api/v1/OrbitalAdmin](http://localhost:5000/api/v1/OrbitalAdmin) as the server URI.
14. Click &quot;Upload&quot;.
15. If uploading was successful, it will say that it was successful after a few seconds and move the exported Mockdefinition to the left-hand side.
    16. If it was not successful, ensure that your server is running. For more information, refer to the Installation instructions and ensure that you can access &quot;[http://localhost:5001](http://localhost:5001)&quot; in your browser.
16. Navigate to [http://localhost:5000/pets](http://localhost:5000/pets) in your browser. It should display `No pets found`, as we did not specify a pet.
17. Navigate to [http://localhost:5000/pets?pet=sammy](http://localhost:5000/pets?pet=sammy) in your browser. It should display `Sammy the cat`.

Congratulations! You have created your very first Orbital Mock. Feel free to edit the example or use a different OpenAPI definition to match different types of requests.

If you want to learn more about scenarios, [policies](/docs/policies), or different rule matching with [Header rules](./headersrules), [Query rules](./queryrules), [URL rules](./urlrules) and [Body rules](./bodyrules).

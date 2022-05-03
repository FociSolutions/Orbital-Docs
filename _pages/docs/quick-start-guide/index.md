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
2. Navigate to the Designer (<http://localhost:4200>) in your browser.
3. Download [petstore.json](https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/json/petstore.json) or use your own sample OpenAPI file.
4. Click "Create new Mock" and fill out the form to create a new mockdefinition.

   ![Create New Mock Form](../../../assets/images/orbital-ui/create-new-mock.png)

5. Edit the **GET** `/pets` endpoint to provide a non-empty response.

   a. Click on the **GET** `/pets` endpoint, then click on "Default OK Scenario"

   b. Click on the "Response" tab and set the Response Body to `{"pets":[{"name":"sherlock"}]}` then click "Save".

6. Activate the completed mock definition by Exporting it to the server.

   Click on "Export Mock to Server" in the left side menu.

   ![Export to Server Menu Item](../../../assets/images/orbital-ui/export-to-server.png)

   The default server url is <http://localhost:5000/api/v1/OrbitalAdmin>. Select the mockdefinition that you&#39;ve created and click the right arrow `>` to move it to the right-hand side, then click "Upload". If there is an error, ensure that the server is running by accessing
   <http://localhost:5000> in your browser; if it's not running, refer to the [Installation Instructions](/docs/installation) to set it up.

   ![Export to Server Form](../../../assets/images/orbital-ui/export-to-server-modal.png)

7. Test the deployment of the mock definition by submitting requests to the mock server.
   - Navigate to <http://localhost:5000/pets> in your browser. It should display `{"pets":[{"name":"sherlock"}]}`, which was configured above.
   - Navigate to <http://localhost:5000/pets/sherlock> in your browser. It should display `{}` since no response was configured.

Congratulations! You have created your very first Orbital Mock. Feel free to edit the example or use a different OpenAPI spec to match different types of requests.

If you want to learn more about [scenarios](/docs/scenarios), [policies](/docs/policies), or different rule matching with [header rules](./header-rules), [query rules](./query-rules), [URL rules](./url-rules) and [body rules](./body-rules).

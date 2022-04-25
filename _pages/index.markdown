---
title: "Orbital"
layout: splash
permalink: /
date: 2016-03-23T11:48:41-04:00
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/geometric-green-1920.jpg
  actions:
    - label: "Get Started"
      url: "docs/quick-start-guide"
  caption: ""
excerpt: "Orbital is a mocking tool that enables rapid microservice development and testing"
feature_row:
  - image_path:
    title: "Request Matching Rules"
    excerpt: "Incorporating highly flexible and customizable request matching rules, virtually any kind of request can be matched."
    url: "docs/mockdefinition"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path:
    title: "Flexible Deployment"
    excerpt: "Built with Docker and .NET Core, Orbital can be deployed anywhere Docker is supported, including Windows, Linux, and macOS."
    url: "docs/installation"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path:
    title: "Isolated Pipeline"
    excerpt: "Orbital's modular pipeline architecture allows for easy development, request matching, and debugging."
    url: "docs/architecture/server"
    btn_label: "Read More"
    btn_class: "btn--primary"
---

{% include feature_row %}

Orbital is a mocking tool that enables rapid _microservice_ development and testing. Orbital supports mocking services by using the OpenAPI spec in both YAML and JSON. Orbital allows for parallel development between front-end and back-end teams by reducing the dependencies between each other. This allows for increased productivity because the back-end team does not have to wait for the front-end team, and vice-versa. Deploying Orbital in your organization is very easy, and can remove these dependencies.

Orbital uses the mockdefinition format to know when and what response to return when a request is matched. A mockdefinition is an annotated OpenAPI spec (written in JSON) that contains the scenarios used to match requests for each endpoint. The OpenAPI spec defines a standard, programming language-agnostic interface description for APIs, allowing humans and computers to understand the capabilities of a service without source code.

The mockdefinition format is very powerful and easy to use. Here is how the endpoint `PUT /pet/sammy` is matched (and returns `"Page for Sammy the cat"`):

```json
{
   "metadata":{
      "title":"My mockdefinition",
      "description":""
   },
   "openApi":{...},
   "scenarios":[
      {
         "id":"514dd661-9405-469f-9183-0cf9f50e25a7",
         "metadata":{
            "title":"Match a Pet",
            "description":""
         },
         "verb":1,
         "path":"/pet",
         "response":{
            "headers":{},
            "body":"\"Page for Sammy the cat\"",
            "status":200
         },
         "requestMatchRules":{
            "headerRules":[],
            "queryRules":[],
            "bodyRules":[],
            "urlRules":[
               {
                  "type":5,
                  "rule":{
                     "urlPath":"/pet/sammy"
                  }
               }
            ]
         }
      }
   ]
}
```

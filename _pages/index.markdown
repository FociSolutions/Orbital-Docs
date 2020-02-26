---
title: "Orbital"
layout: splash
permalink: /
date: 2016-03-23T11:48:41-04:00
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/planets.jpg
  actions:
    - label: "Get Started"
      url: "docs/quick-start-guide"
  caption: ""
excerpt: "Orbital is an HTTP mocking framework that enables teams to achieve rapid software development and testing"
feature_row:
  - image_path:
    title: "Request Matching Rules"
    excerpt: "Incorporating highly flexible and customizable request matching rules, virtually any kind of request can be matched"
    url: "#TBD"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path:
    title: "Flexible Deployment"
    excerpt: "Built with Docker and .NET Core, Orbital can be deployed anywhere Docker is supported, including Windows, Linux, and macOS"
    url: "docs/installation/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path:
    title: "Server"
    excerpt: "Orbital's modular pipeline architecture allows for easy development, request matching, and debugging"
    url: "docs/architecture/server"
    btn_label: "Read More"
    btn_class: "btn--primary"
---

{% include feature_row %}

The Mockdefinition format is very powerful and easy to use. Here is how the endpoint `PUT /pet/sammy` is matched (and returns `"Page for Sammy the cat"`):

```json
{
   "metadata":{
      "title":"My Mockdefinition",
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

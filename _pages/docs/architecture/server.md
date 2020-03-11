---
layout: single
title: Architecture of Orbital's Server
permalink: /docs/architecture/server
sidebar:
  nav: 'docs'
classes: wide
---

## Server

The purpose of the server is to provide an endpoint onto which the scenarios can be run for each endpoint. Furthermore, it also stores Mockdefinitions (which can then be downloaded by the designer to be re-edited if required.)

![](../../assets/images/image1.png)

Figure 1. High-level architecture diagram of the server.

### How it works

### Sample message flow

- The user requests “[_http://localhost:5000/pets/sammy_](http://localhost:5000/pets/sammy)”.

- The request goes to the server’s middleware, and the middleware determines that it is not the admin endpoint, and so gathers all scenarios from all uploaded Mockdefinitions.

- The list of scenarios are passed to the _Message Processor Input._

- From there, see the section _Matching an endpoint/scenario_ for more information regarding how a request is matched.

### Matching an endpoint/scenario

For each endpoint, there are a list of scenarios. In each scenario, there are a list of rules that determine when the request is matched.

A new scenario which matches all requests (also called a _failsafe_) will be added to all new Mockdefinitions that are created when using the designer. Existing Mockdefinitions (ones which were previously exported from the designer) are not modified. This means that there will always be a response, no matter what the request type is. This default scenario can be removed if you wish from the designer to change the behavior. This does not occur when editing the Mockdefinition manually (for example, using a text editor.)

These are the rules which determine when a scenario or endpoint is matched:

1.  The client requests an endpoint on the server (for example /pets/sammy, when the user navigates to [_http://localhost:5000/pets/sammy_](http://localhost:5000/pets/sammy).) The request URL always begins with a slash.

2.  The client’s request (URL and method type) are matched against a list of endpoints. These endpoints are part of the server’s Mockdefinition, which the user has uploaded. See the _Which Mockdefinition is matched?_ section for more information. The _Equality URL Rules_ apply (except for a URL matching rule, which matches it exactly.) The method type must match exactly in order for the endpoints’ scenarios to consider matching (for example a GET request.) Additionally, the following rules apply depending on the endpoint type:

    1.  If the endpoint is parameterized, see section [How parameterized endpoints are matched](#how-parameterized-endpoints-are-matched) for more information. If the endpoint is not parameterized, then it will be matched according to the _Equality URL Rules_ definition.

    2.  Depending on how many endpoints match from the previous step:

        1.  If **zero** endpoints match, then return an error and do not continue to the next step.

        2.  If **only one** endpoint matches, then return a collection of scenarios for that endpoint which matches for the next step.

        3.  If **more than one** endpoints match (e.g. a parameterized endpoint), including the method types for those endpoints, then a union of all matching endpoints’ scenarios are returned for the next step.

    3.  From this collection of returned endpoints:

        1.  See section [How the response selector works](#how-the-response-selector-works).

### How parameterized endpoints are matched

Orbital does not implement 100% of the OpenAPI spec. Additionally, there are some modifications to the default behavior of how endpoints match which are different than how the OpenAPI spec suggests. These differences are described as follows:

- All parameters must be in the URL as in the endpoint. For example, the URL [_http://localhost/pets/1/2_](http://localhost/pets/1/2) would not match /pets/{id}/{id2}/{id3}, because {id3} is missing. The required attribute in the OpenAPI spec is ignored.

- If there are enough parameters specified to fulfill all parameterizations, then the URL will be matched and the other paths will be optional. For example, the URL “[_https://localhost:5001/pet/uploadImage_](https://localhost:5001/pet/uploadImage)” matches the endpoint /pet/**{petId}**/uploadImage (here, uploadImage is used in place of {petId}), however /pet/uploadImage/**test** does not because **uploadImage** is automatically considered optional but still has to be fully specified or not specified at all; **test** is not exactly equal to an empty string or **uploadImage**).

- Here are some examples of how the paths can and cannot match, and what parameterizations are valid in the OpenAPI spec but not valid for Orbital:

  - If the user requests /pets/1, /pets/xxx, /pets/xyz/, or /pets/12345 the URL /pets/{petId} will match.

  - If the user requests /pets/a/1, /pets/abcde/defgh, or /pets/abc/def, the URL /pets/{petId}/{adoptionId} will match.

  - If the user requests /pets/abc/sdasd/abc, /pets/32hchd/dhdha/abc, the URL /pets/{petId}/{adoptionId}/abc will match.

  - Although valid in the OpenAPI spec, paths with parameters concatenated with URL components are not matched in Orbital:

    - /pets/abc{petId} does not match /pets/abc1 .

    - /pets/{petId}abc does not match /pets/1abc .

    - /pets/abc{petId}def does not match /abc1def .

  - Paths with parameters concatenated with other parameters are considered as a single component and not individually matched: /pets/{petId}{adoptionId} will match /pets/a .

  - Parameterization syntax is not validated, which means:

    - /pets/{petId/test} will validate successfully, matching /pets/abc, and /pets/123 and not /pets/123/456 .

    - /pets/{petId } will validate successfully; any character is allowed inside of the {} except for { or }.

  - OpenAPI's type attribute (such as string or int) is ignored, and any text is allowed to be a parameter in the URL.

  - Paths such as /test//test is the same as /test/test (n or more slashes are compacted into one when parsing the query).

### How to determine which response is returned when multiple scenarios match an endpoint

- All scenarios which match the body, query, URL, and/or header(s) are put into a single list (preserving duplicates.) For example:

  - request “A” has a query of “q=1” and a header of “Content-Type=text/plain”.
  - scenario “B” that matches the query “q=1”.
  - scenario “C” which matches “Content-Type=text/plain” for the headers.
  - scenario “D” which matches “q=1” and “Content-Type=text/plain”.
  - all scenarios are part of the same endpoint.

  Then, both scenarios B, C, and D would be added to the lists; the header list would have C and D, the query list would have B, C, and D, etc.

- The scenarios are grouped by their id (each group is now a list of scenarios, which contains the body, query, URL, and header match results.) Each one of these types (body, query, URL, and header) can be a successful match (matched exactly), failure match (did not match), or ignore match (user did not specify any rules.)

  1.  Headers, queries, and bodies are matched individually; there can be multiple successful and failure matches per group in a scenario. This means if I have headers X, Y, and Z and my request has header X, then it will successfully match header X, but not header Y and Z. Similarly, if I don’t specify any headers, then any headers sent in the request will be ignored.

  2.  Headers and queries rule type (for example equals or contains) matches just the value. The key must be an exact equality match.

  3.  Multiple bodies can be matched in the request only if one of the match types is not textual equals or JSON equals, and there is at least one type. Warning: if the body match type is JSON equals, then the structure can only be nested up to C\#’s stack limit ([_14250_](https://rosettacode.org/wiki/Find_limit_of_recursion#C.23).) Otherwise, it will throw an error and could crash the server.

  4.  To see when URL rules are matched, see section [How are URL rules matched?](#how-are-url-rules-matched).

- If a group contains a match failure (i.e. a scenario failed to match on the body, query, URL, or header) then the scenario will be discarded from the potential candidates to be returned to the user, except for headers. Headers are treated individually, which means that they are not part of the match group and so if one does not match that does not mean that the entire scenario is discarded. If the user did not specify a rule for the body, then the match type will be “ignore” and thus not failure and will not be discarded from the group.

### How the response selector works

1.  If there is **only one scenario, and that scenario matches the request**, it will be returned.

2.  If there are **multiple scenarios which match exactly**, then the one with the lowest item index plus the item index of the endpoint will match. For example:

    1.  Scenario A in endpoint A and scenario B in endpoint B both match request R. Endpoint A is positioned before endpoint B in the designer. Therefore, scenario A gets precedence.

    2.  Scenario A in endpoint A and scenario B in endpoint B both match request R. Since scenario A is before scenario B in the designer, then scenario A will match R.

    3.  Scenario A, B, and C are in endpoint A. Scenario D, E, F are in endpoint B. All scenarios (except A and B) match request R. Since endpoint A is above endpoint B, then all scenarios within endpoint A get precedence. Therefore, scenario C will match R.

3.  If there is **only one scenario, and it partially matches** (i.e. one of the rules match the request), then it will be returned.

4.  If there are **no scenarios defined**, then return a default response (status code 400).

5.  If there are **multiple scenarios that partially match**, then:

    1.  See section (How to determine which response is returned when multiple scenarios match a request)[#how-to-determine-which-response-is-returned-when-multiple-scenarios-match-a-request].

    2.  This process is repeated for all remaining scenarios.

    3.  Now, there is a list of scenario(s) remaining **which might be empty**:

        1.  If the **list is empty**, return a default response (status code 400).

        2.  If the **list is not empty**:

            1.  Calculate how many successful matches there were for each group. For example, if two headers matched and a body rule in the scenario, then it would get a score of 3.

            2.  **Sort the groups by score (greatest first)**:

                1.  If **all matches are zero (or all are ignore)**, then choose the first scenario.

                2.  **Otherwise**, choose the first scenario in the sorted list, then return the response from that scenario. The sorting method is stable, which means that if two items do not need to be sorted (i.e. they have the same score), then their order will not be changed. For sorting:

                    1.  Scenarios near the top of the list in the designer get priority.

                    2.  Within those, headers, body, query, and URL matches get priority in that order (headers being the highest).

            3.  Return the response to the user.

### How are URL rules matched?

- Match everything after the host name. For example, [\*http://localhost**/sammy/pets\***](http://localhost/sammy/pets)**,** including the leading / .

- Cannot inherit parameterization, but endpoints can. For example, if the endpoint is “/pets/{petId}”, then specifying “{petId}” in the URL rule will not match it and would be treated as a string literal.

- Must use a valid C\# regex when matching with regexes. For example, “\\d{0,9}” to match a digit (without quotes).

- Can be always void matches if the URL specified does not match the endpoint, or is not partially composed of the endpoint. For example, it is possible to have a valid URL rule, but it is impossible for the scenario to match. An example of this is any URL rule whose first character is not equal to the first character of the endpoint’s URL, and the endpoint’s URL is an equality rule.

- Regexes do not have a time limit; be careful when constructing the regexes. It is possible to hang the server if the regex is too complicated or the request input is very long.

### Which Mockdefinition is matched?

The title of the Mockdefinition that was least recently uploaded will take precedence; this means that if B was uploaded before A, and if B contains a matching endpoint, then A won’t be considered (or any others after it.)

Here are some examples (A, B, and C are identical Mockdefinitions except the responses are different. “A” and “B” are the names of the Mockdefinitions):

- If A is uploaded and then B, A’s endpoint matches.

- If B is uploaded and then A, B’s endpoint matches.

- If B is uploaded and then A and then C, B’s endpoint matches.

- If B is uploaded and then A and then C then deleted A, then B’s endpoint matches (suggesting no re-ordering).

- If A is uploaded and then B, and then uploaded B again, A’s endpoint matches.

- If A is uploaded and then B, then uploaded A again, A’s endpoint matches.

- If only A is uploaded, then A’s endpoint matches.

### Definitions

**Equality URL Rules:** /test/, test/, //test//test, /test all match the /test endpoint. The URL is matched via splitting the slashes and removing the empty entries, then recombining the URL.

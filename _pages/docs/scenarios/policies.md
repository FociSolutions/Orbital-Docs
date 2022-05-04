---
layout: single
title: Policies
permalink: /docs/policies
sidebar:
  nav: "docs"
classes: wide
---

Policies allow certain principles and commands to run after a scenario has been matched. For example, adding a delay policy will delay the request by the specified number of milliseconds within the scenario that the request matched.

## Adding a new policy

To add or edit a policy, select a scenario for an endpoint and go to the "General" tab.

![Policy Empty](/assets/images/request-match-rules/policy-empty.png)

Select the Policy Type and type in the number of milliseconds to delay the request (if it matches this scenario), then click "+" to add it and Save to commit the change to the scenario.

![Policy Filled](/assets/images/request-match-rules/policy-filled.png)

Currently, the only supported policy is the 'Delay Response' policy. Only one delay policy can be added to each scenario, but the value of the delay can be changed and the policy can be removed.

**_Warning:_ adding a delay policy for a long period of time can cause the server to hang, as the policies are not cancelled if the request is cancelled. The server must be restarted manually if this situation occurs.**

---
layout: single
title: Contributing
permalink: /docs/contributing/
sidebar:
  nav: 'docs'
classes: wide
---

Welcome! We're excited to have contributors like you interested in supporting Orbital. Since Orbital is a _modular solution_, there are lots of tasks available.

## Getting Started

If you haven't already, you should check out our [Quick-Start Guide](/docs/quick-start-guide/) section. That's where you'll find our installation guide and an overview of the project.

You should also take a moment to look at our [Code of Conduct](/docs/code-of-conduct/).

Once you've covered those bases, take a look at our section on [Testing](#testing) or our [Code Standards](#code-standards). See something wrong or missing? Try [Bug Reporting](#bug-reporting) and [Feature Suggestions](#feature-suggestions). If you're ready to write some code, then you should refer to [Contributing Code](#contributing-code).

You can always reach out to us by contacting the project team at [opensource@focisolutions.com](mailto:opensource@focisolutions.com).

## Testing

In order to best maintain Orbital, we have done our best to cover as much code as possible with unit tests. Our testing framework of choice is Xunit and Jasmine. If you're not familiar with them already, we suggest you check out the documentation at their site here: [https://xunit.github.io/](https://xunit.github.io/) and [https://jasmine.github.io/](https://jasmine.github.io/).

It is expected that any code added to the project will not impact the percentage code covered. That means that thorough unit tests will be included with any new code, for both success and failure conditions.

For Orbital Server, we don't unit test our repositories. Repositories should be as thin as possible in creating paths of access to other services, databases, files, etc. By keeping these interactions as simple as possible and pushing logic up to the service level we feel confident in trusting our repository functionality. In cases such as the repositories, where code is not going to be unit tested, the `ExcludeFromCodeCoverage` attribute should be used.

## Code Standards

Our coding standards can be found in our external [Style Guide](/docs/styleguide).

## Bug Reporting

Here's how to report a bug:

- **Before you report a bug**, please make sure it hasn't already been reported. You can do that by checking our [backlog](https://dev.azure.com/focisolutions/Orbital/_workitems/recentlycreated/).
- **Use a clear title to describe the problem.** This will help diagnose the issue and prioritize it.
- **Give thorough steps to reproduce the bug.** Include a step-by-step guide to reproducing the error. Remember to explain how you did something, not just what you did. Be detailed.
- **Include all the information you have.** More than just how to reproduce the bug, tell us everything you know and have gathered to present. Here are a few questions to get you started:
  - What environment are you using?
  - What user permissions was everything running under?
  - What was the data submitted into the system?
  - What was the expected outcome?
  - What was the actual outcome?
  - Was any error reported? Please send any copies of error messages and/or stack traces.
  - What information is in the logs? If logging was not activated, turn on logging and re-produce the bug.
  - Has this ever worked before? If so, what's different about the circumstances of this instance?
- **Attach some files.** Add log files, screenshots, even animated GIFs that might show more information about the bug.
- **Suggest a solution.** Maybe the fix isn't obvious, but even if you're not going to code a solution we would appreciate your inclusion of the fruits of your investigation so far.
- **Submit your bug.** Send us an email with all the information to the project team at [opensource@focisolutions.com](mailto:opensource@focisolutions.com).

## Feature Suggestions

We know Orbital has the room for many cool new features. You see that too? Want to tell us about it? Give this a try:

- As with [bugs](#bug-reporting), please **check the list** of [outstanding and in-development features](https://dev.azure.com/focisolutions/Orbital/_workitems/recentlycreated/) to make sure it hasn't already been reported.
- **Create a descriptive and clear title.** This will help us find it later on.
- **Provide a thorough description of the feature.** Can you add a step-by-step guide? Describe each step of interaction and expected behavior in execution.
- **Explain the added value.** What priority should this feature be? Why? How would it make Orbital more useful to the most people?
- **Include documentation.** Link to any supporting documentation that might be necessary.
- **Label it as an enhancement.** We don't want to confuse our features and bugs.

## Contributing Code

Ready to get in there and make some commits? Great! We recommend you start by taking a look at the outstanding issues for a few bugs you can squash. Once you've familiarized yourself with the code, maybe tackle a feature request.

Here are a few guidelines to making your contribution:

- **Check the project for existing pull requests.** Best to prevent the duplication of effort.
- **Create a new branch for your work.** It's best to create the branch from the issue itself to keep the naming consistent.
- **Follow our [style guide](/docs/styleguide).**
- **Include unit tests.** Check out our [testing guidelines](#testing) for more details.
- **Submit a pull request.** We'll take a look at your work before it gets merged in.
- **Address any comments or suggestions.** If we have any feedback we'll want to resolve that before a merge.

---
layout: single
title: Orbital Designer Style Guide
permalink: /docs/designer-style-guide
sidebar:
  nav: 'docs'
classes: wide
---

Much of our style guide pulls directly from [Angular's Style Guide](https://angular.io/guide/styleguide). When in doubt, their documentation is a good place to look.

## Guiding Principle: Consistency is king

While we try hard to adhere to our style guide, sometimes conventions work their way into the code and just start getting used across the board. As such, we think it is most important that the code is consistent in its construction. If there is something in this style guide that is something that doesn't adhere to either this guide or the code, please change it to follow the lead of the rest of the code. We're counting on everyone working together to keep our code as readable as possible.

## Naming Convention

Use consistent names for all symbols using a pattern that describes the symbols feature then its type; Angular recommends `feature.type.ts`. This will help provide a consistent way to find content at a glance. Again, consistency is king and is important when working with a team. Even though it isn't easy managing consistency, it will pay off anytime someone needs to revisit any part of the code base.

## Layout Conventions

Have a short-term view of implementation and a long-term vision; starting small but keeping in mind where the app is heading down the road. All of the app's code goes into the `src` folder. All feature areas are in their own folder with their own `NgModule`.

All content is one asset per file. Each component, service, and pipe is in its own file. All of their vendor scripts are to be store in another folder and not in the `src` folder. Also, using the naming conventions above should also help keep the project organized.

### LIFT

Structure the app such that you can _Locate_ code quickly, _Identify_ the code at a glance, keep the _Flattest_ structure you can, and _Try_ to be _DRY_ (Don't Repeat Yourself).
This will provide a consistent structure that scales well, is modular, and makes it easier to increase developer efficiency by finding code quickly.
Being _DRY_ is important, but not crucial if it sacrifices the other elements of _LIFT_.

Some overall structural guidelines include starting small and try to manage a road map of the direction of the project. Make sure all code is in the `src` folder.
Think about creating a folder for a component when it has multiple accompanying files. This helps keep the app structure small and easy to maintain in the initial stages of development, while being easy to evolve as the app grows.

## Commenting Conventions

- Use the standard Javascript commenting. In short, enter `/**` and you will see an `*/` appear. You will enter your comments between the asterisks. If there are parameters to the function you are commenting, use the `@param` keyword to specify that parameter and what it is.
  For example:

```javascript
/**
 * Sets the selected list to the items passed into it.
 * @param items The list of items to set as selected from the left list.
 */
```

- Place the comment on a separate line, not at the end of a line of code.
- Begin the comment text with an uppercase letter and end comment text with a period.
- Insert one space between the comment delimiter (`*`) and the comment text, as shown in the following example:

```javascript
/**
 * Completes event emitter
 */
```

- Do not create formatted blocks of asterisks around comments. We find this to be a waste of space and time.

## Coding Style

Everyone has hers or his own coding style. Going back to our guiding principle, we can all agree that it is most important to be consistent in the style throughout a project. Here are some notes to help keep you in step with the style of Orbital:

- Avoid using abbreviations. We try to only use them when they are common and part of a longer name (i.e. `ConfigService`).
- Our tab and indention size is four.
- Declare each variable independently, never in the same statement.

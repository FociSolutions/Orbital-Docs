---
layout: single
title: Orbital Server Style Guide
permalink: /docs/server_style_guide/
sidebar:
  nav: 'docs'
---

Much of our style guide pulls directly from Microsoft's [C# Coding Conventions](https://docs.microsoft.com/en-us/dotnet/articles/csharp/programming-guide/inside-a-program/coding-conventions#Anchor_3). When in doubt, their documentation is a good place to look.

## Guiding Principle: Consistency is king.

While we try hard to adhere to our style guide, sometimes conventions work their way into the code and just start getting used across the board. As such, we think it is most important that the code is consistent in its construction. If there is something in this style guide that is being ignored throughout the code, please follow the convention already in place. If you see something that doesn't adhere to either this guide or the code, please change it to follow the lead of the rest of the code. We're counting on everyone working together to keep our code as readable as possible.

## Naming Conventions

“c” = camelCase
“P” = PascalCase
“x” = Not Applicable.

| Identifier      | Public | Protected | Internal | Private | Notes                                                                                           |
| --------------- | ------ | --------- | -------- | ------- | ----------------------------------------------------------------------------------------------- |
| Project File    | P      | x         | x        | x       | Match Assembly & Namespace.                                                                     |
| Source File     | P      | x         | x        | x       | Match contained class.                                                                          |
| Namespace       | P      | x         | x        | x       | Partial Project/Assembly match.                                                                 |
| Class or Struct | P      | P         | P        | P       | Add suffix of subclass.                                                                         |
| Interface       | P      | P         | P        | c       | Prefix with a capital I. Use `this` keyword to reference the `private`s.                        |
| Method          | P      | P         | P        | c       | Use a Verb or Verb-Object pair. Use `this` keyword to reference the `private`s.                 |
| Property        | P      | P         | P        | c       | Do not prefix with Get or Set. Use `this` keyword to reference the `private`s .                 |
| Field           | P      | P         | P        | c       | Only use Private fields. No Hungarian Notation! Use `this` keyword to reference the `private`s. |
| Constant        | P      | P         | P        | P       | Use `this` keyword to reference the `private`s.                                                 |
| Static Field    | P      | P         | P        | c       | Only use Private fields. Use `this` keyword to reference the `private`s.                        |
| Enum            | P      | P         | P        | P       | Options are also PascalCase.                                                                    |
| Delegate        | P      | P         | P        | P       |                                                                                                 |
| Event           | P      | P         | P        | P       |                                                                                                 |

Use `camelCase` for private members and use the `this` keyword to reference them. This way there is a differentiation between `private` class members and passed in method variables.

Do not include using directives. Use `namespace` qualifications instead. If you know that a `namespace` is imported by default in a project, you do not have to fully qualify the names from that `namespace`.

## Layout Conventions

Good layout uses formatting to emphasize the structure of the code and makes the code easier to read. Please conform to the following conventions:

- Write only one statement per line.
- Write only one declaration per line.
- Add at least one blank line between method definitions and property definitions.
- Use parentheses to make clauses in an expression apparent, as shown in the following code:

```csharp
            if ((val1 > val2) && (val1 > val3))
            {
                // Take appropriate action.
            }
```

## Commenting Conventions

- Please use the XML Documentation Features, for more information, visit the [How-To Guide](https://docs.microsoft.com/en-us/dotnet/articles/csharp/programming-guide/xmldoc/how-to-use-the-xml-documentation-features). In short, enter `///` followed by any XML tags or text strings. If you enter `///` on the line before the definition, Visual Studio creates a template of a documentation comment and fills in the parameters and other information.
  For example:

```csharp
            ///<summary>
            ///summary description
            ///</summary>
            ///<remarks>
            ///This is a sample.
            ///</remarks>
```

- Place the comment on a separate line, not at the end of a line of code.
- Begin the comment text with an uppercase letter and end comment text with a period.
- Insert one space between the comment delimiter (`//`) and the comment text, as shown in the following example:

```csharp
            // The following declaration calls a job. It does not run
            // the job logic.
```

- Do not create formatted blocks of asterisks around comments. We find this to be a waste of space and time.

## Language Guidelines

We've only included commonly used guidelines here.

- Use `implicit typing` for local variables when either the type of the variable is obvious from the right side of the assignment, or when the precise type is not important. When dealing with primitive types (`int`, `string`, `double`, etc) use predefined names.

```csharp
            // Example where the type of a variable is clear from the context.
            var list = new List<string>();

            // Exceptions
           int index = 100;
```

- Try to use variable names which not only reflect the use of the variable, but also the type.

```csharp
            var selectedCustomer = CustomerService.SelectCustomer(customerId);
```

- Use `implicit typing` to determine the type of the loop variable in `for` and `foreach` loops.

The following example uses `implicit typing` in a `for` statement.

```csharp
            var syllable = "ha";
            var laugh = "";
            for (var i = 0; i < 10; i++)
            {
                laugh += syllable;
                Console.WriteLine(laugh);
            }
```

The following example uses `implicit typing` in a `foreach` statement.

```csharp
            foreach (var ch in laugh)
            {
                if (ch == 'h')
                    Console.Write("H");
                else
                    Console.Write(ch);
            }
            Console.WriteLine();
```

## Coding Style

Everyone has hers or his own coding style, and everyone thinks theirs is best. Going back to our guiding principle, we can all agree that it is most important to be consistent in the style throughout a project. Here are some notes to help keep you in step with the style of Orbital:

- Avoid using abbreviations. We try to only use them when they are common and part of a longer name (i.e. `ConfigService`).
- Declare only one `namespace` per file.
- One class per file. The rare exception should be models for unit tests specific to the tests in that file. Don't use them in other files.
- Always place curly braces, `{` and `}`, on a new line.
- Always use curly braces, `{` and `}`, in conditional statements.
- Our tab and indention size is four.
- Declare each variable independently. Never in the same statement.
- Place namespace `using` statements together at the top of file. Group .NET namespaces above custom namespaces.
- Keep lambda statements tidy. If they have more than two `.`,then indent and use multiple lines. Avoid nested lambdas if possible.
- Group internal `class` implementation by type in the following order:
  1.       Member variables.
  2.       Constructors & Finalizers.
  3.       Nested Enums, Structs, and Classes.
  4.       Properties
  5.       Methods
  6.       Sequence declarations within type groups based upon access modifier and visibility:
  - Public
  - Protected
  - Internal
  - Private
- Use #region statements to group implementations and code when applicable.
- Indent code within brackets.
- Use white space (tabs, line breaks, etc) liberally to separate and organize code.
- One attribute per line above the class declaration.
- The following attribute declarations all get separate lines:
  - Assembly scope
  - Type scope
  - Method scope
  - Member scope
- Parameter attribute declarations go inline with the parameter.
- Do not explicitly specify a type of an `enum` or values of `enum`s

```csharp
            // Bad!
           public enum Direction : long
           {
               North = 1,
               East ,
               South ,
               West
           }

           // Good!
           public enum Direction
           {
               North = 1,
               East,
               South,
               West
           }
```

- Do not suffix `enum` names with `Enum`

```csharp
           // Bad!
           public enum CoinEnum
           {
               Penny,
               Nickel,
               Dime,
               Quarter,
               Dollar
           }

           // Good!
           public enum Coin
           {
               Penny,
               Nickel,
               Dime,
               Quarter,
               Dollar
           }
```

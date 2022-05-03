---
layout: single
title: Installation
permalink: /docs/installation
sidebar:
  nav: "docs"
classes: wide
---

**Note: Orbital uses an in-memory database. Please save or export all data (via Download mockdefinitions or Export Mock to Server) before exiting, otherwise it will be lost.**

It's very easy to get started, just [download the Docker Engine for Linux, Mac, and Windows](https://hub.docker.com/?overlay=onboarding):

## Using Docker

`docker run -p 4200:80 focisolutions/orbitaldesigner`

`docker run -p 5000:80 focisolutions/orbitalmock`

The designer will be running on <http://localhost:4200>, and the server on <http://localhost:5000>.

## Using Docker Compose

Install [Docker Compose](https://docs.docker.com/compose/install/)

Create a docker-compose.yml file with the following contents:

```yaml
services:
  designer:
    # Pull Orbital Designer
    image: focisolutions/orbitaldesigner
    ports:
      - "4200:80"

  mock:
    # Pull Orbital Mock Server
    image: focisolutions/orbitalmock
    ports:
      - "5000:80"
```

To start Orbital run:

`docker compose up`

The designer will be running on <http://localhost:4200>, and the server on <http://localhost:5000>.

# Build From the source

## Requirements

Linux:

- the [Linux .NET 5.0 SDK](https://docs.microsoft.com/dotnet/core/install/linux-package-managers).
- the [Linux npm and the NodeJS package manager](https://nodejs.org/en/download/package-manager/).
- git via `apt-get install git`.

Windows:

- the [Windows .NET 5.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-5.0.407-windows-x64-installer).
- the [Windows npm and the NodeJS package manager](https://nodejs.org/en/download/).
- the Git [.exe installer for Windows](https://git-scm.com/download/win).

macOS:

- the [macOS .NET 5.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-5.0.407-macos-x64-installer).
- the [macOS npm and the NodeJS package manager](https://nodejs.org/en/download/).
- the Git [installer for macOS](https://git-scm.com/download/mac).

## Clone

`git clone https://github.com/FociSolutions/Orbital.git`

## Server

`cd Orbital/src/Orbital.Mock.Server`

`dotnet run` (defaults to <http://localhost:5000> and <https://localhost:5001>)

## Designer

`cd Orbital/src/orbital-designer/src`

`npm install`

`npm run build`

`npm run start` (defaults to <http://localhost:4200>)

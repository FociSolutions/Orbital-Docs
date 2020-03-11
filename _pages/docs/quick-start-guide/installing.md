---
layout: single
title: Installation
permalink: /docs/installation/
sidebar:
  nav: 'docs'
classes: wide
---

**Note: Orbital uses an in-memory database. Please save or export all data (via Download Mockdefinitions or Export Mock to Server) before exiting, otherwise it will be lost.**

It's very easy to get started; just [download the Docker Engine for Linux, Mac, and Windows](https://hub.docker.com/?overlay=onboarding):

## Using Docker

`docker run -p 4200:80 focisolutions/orbitaldesigner`

`docker run -p 5000:80 focisolutions/orbitalmock`

The mock definition designer will be running on `http://localhost:4200`, and the server on `http://localhost:5000`.

## Using Docker Compose

Install [Docker Compose](https://docs.docker.com/compose/install/)

`git clone https://github.com/FociSolutions/Orbital.git`

`cd Orbital`

`docker-compose build`

`docker-compose up -d`

The mock definition designer will be running on `http://localhost:4200`, and the server on `http://localhost:5000`.

# Build From the source

## Requirements

If you're running Linux, you'll need:

- the [Linux .NET 2.2 SDK](https://docs.microsoft.com/dotnet/core/install/linux-package-managers).
- the [Linux npm and the NodeJS package manager](https://nodejs.org/en/download/package-manager/).
- git via `apt-get install git`.

If you're running Windows, you'll need:

- the [Windows .NET 2.2 SDK](https://dotnet.microsoft.com/download/dotnet-core/thank-you/sdk-2.2.100-windows-x64-installer).
- the [Windows npm and the NodeJS package manager](https://nodejs.org/en/download/).
- the Git [.exe installer for Windows](https://git-scm.com/download/win).

## Clone

`git clone https://github.com/FociSolutions/Orbital.git`

## Server

`cd Orbital/src/Orbital.Mock.Server`

`dotnet run` (defaults to http://localhost:5000)

## Designer

`cd Orbital/src/orbital-designer/src`

`npm install`

`npm run build`

`npm run start` (defaults to http://localhost:4200)

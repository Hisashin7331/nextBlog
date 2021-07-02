# NEXT.BLOG

## Description

Simple blog app built to learn NextJS, TypeScript, GraphQL and TailwindCSS.

## Live

### [See this page live](https://next-blog-cxfag7db8-hisashin7331.vercel.app/)

## Technologies and libraries

Backend created using:

-   React: v17.0.2
-   NextJS: v17.0.2
-   ApolloClient: v3.3.20
-   GraphQL: v15.5.1
-   SASS: v1.35.1
-   TailwindCSS: v2.2.4
-   TypeScript: v4.3.4
-   hamburger-react: v2.4.1
-   html-react-parser: v1.2.7
-   react-waypoint: v10.1.0

## Features

-   Reading blog posts
-   Creating, updating and deleting posts/users through GraphCMS
-   Searching for posts

## Setup

To run this project firstly clone this repository, then run

```
cd ./nextBlog
npm install
```

then, create an .env.local file and create the following environment variable

```
CMS_URI=*your CMS URI, I used GraphCMS*
```

then run command below, and there you go

```
npm run dev
```

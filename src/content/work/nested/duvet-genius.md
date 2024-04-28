---
title: DiscO'Tech
publishDate: 2023-09-04 00:00:00
img: /assets/discotech.png
img_alt: Pearls of silky soft white cotton, bubble up under vibrant lighting
description: |
  FrontEnd interface of platform allowing the referencing of all musical genres.
  Faker API for Démo
tags:
  - React
  - REST API
  - Music
---
##### 🔭 Demo

This project hosted at : [https://discotech-git-master-yanberdins-projects.vercel.app/](https://discotech-git-master-yanberdins-projects.vercel.app/)

BackOffice App/API (Symfony) : [https://github.com/YanBerdin/api-discOtech](https://github.com/YanBerdin/api-discOtech)

Interactive, dynamic, and responsive integration of our mockup

The application has been designed to be responsive. It adapts to different screen sizes to provide an optimal user experience on both mobile devices and desktops.

##### `CRUD of data from our external API`

The application uses Axios to retrieve data from the external API. Security measures have been implemented to protect the user's connection to the API, notably by using JWT tokens.

##### `Response to SEO issues`

Although the application was not developed with Server Side Rendering (SSR), SEO issues are taken into account by using semantic HTML tags, ensuring high color contrast, and using informative anchor tags.

##### 👓 `Accessibility`

- Use of semantic HTML tags
- Informative anchor tags (links)
- Alt attributes for images
- High color contrast
- Flexible font sizes
- Labels for form elements
- Testing with assistive tools

##### ⚛️ `React Libraries`

- **Axios**: Used to perform API requests
- **Bootstrap**: Used for graphic integration in HTML and CSS
- **NPM**: JavaScript package manager
- **React-router-dom**: Used to manage routing
- **Redux**: Centralized state management of data
- **Slick-carousel**: Component library for creating image carousels
- **Vite**: Development server and build tool
- **PropTypes**: Checking the data type of props

##### 🔒 `Security`

##### `Protection against XSS vulnerabilities: Cross-Site Scripting attack`

- Validation of data coming from the user and the server (responses to AJAX requests). Same principle of double-validation as on the server side.
- Securing forms and data writing methods by synchronization token (random & single-use), whose access is protected by CORS.

##### `Securing the user's connection to the API`

- Creation of a connection variable to the API in the '.env' file
  - Avoids exposing the URL and versioning without each commit modifying the connection URL
  - Everyone can define their environment according to their Dev/Prod use

##### `CORS`

- Token approach
- Use of Axios to add an Interceptor and retrieve / send the JWT
- The JWT token is retrieved from the localstorage and sent to each of our API requests, avoiding passing the id of the connected user who is already identified in the token.
- This solution is sometimes criticized for its security risks. Indeed, in case of XSS vulnerabilities, the localstorage is accessible and therefore the token can be retrieved by a pirate. However, in case of XSS vulnerabilities, the state and all entered data are just as recoverable. This is why neither Password nor Login in clear text are stored in the state.

##### `Logout Management`

To manage logout, it is enough to forget the token on the front-end. Remove it from the state or from the Axios configuration when the user expresses the intention to log out.

##### `Protection against CSRF attacks (Cross-Site Request Forgery)`

Our REST API does not use cookies / sessions because it must remain stateless. Without theft of cookies or session, the CSRF attack is very unlikely.

# JATE Text Editor

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

Jate is a simple text editor that is designed as a single page webpage and also meets the PWA criteria. This application will function offline and features a number of data persistence techniques that serve as redundancy in case one of the options in not supported. This application features IndexedDB api; Which is used for storing information.

---

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [User-Story](#user-story)
- [Acceptance-Criteria](#acceptance-criteria)
- [Screenshots](#screenshots)
- [CodeSnippets](#codeSnippets)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Important-Information-Questions](#important-information-questions)

---

## Installation

To install this application you have to run "npm install" followed by "npm build" in the command line. Running these commands will import all the required modules and dependencies. Next, start the program by running "npm run start:dev" in the command line and open the web browser to https://localhost:3001/.


---

## Usage

This application can be used as a text editor that can be downloaded as a standard alone application. 

---

## Technologies

- **IDB**
- **Heroku**
- **Workbox**
- **Express**
- **Node.js**
- **GitHub**

---

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Screenshots

#### Screenshot of the homePage

![HomePage](./assets/screen1.jpg)

#### 

![Add Delete](./assets/        .gif)

---

## CodeSnippets

#### Add data to IDB

``` JavaScript 
export const getDb = async () => {
  const jateDb = await openDB('jate', 1);
  const trans = jateDb.transaction('jate', 'readonly');
  const notes = trans.objectStore('jate');
  const request = notes.getAll();
  const result = await request;
  return result;
};
```

#### On first loading page caching

``` JavaScript
const pageCache = new CacheFirst({
	cacheName: 'page-cache',
	plugins: [
		new CacheableResponsePlugin({
			statuses: [0, 200],
		}),
		new ExpirationPlugin({
			maxAgeSeconds: 30 * 24 * 60 * 60,
		}),
	],
});
```

---

## Tests

N/A

---

## **Important-Information-Questions**

---

## License

The license used on this project was MIT license

[license link](https://opensource.org/licenses/MIT)

## Contributors

Kyle Vance

## Questions

If you have any questions regarding this project, please reach me by email at vanceofalifetime@protonmail.com

[Live Link](https://enigmatic-garden-09228.herokuapp.com/)

[LinkedIn](https://www.linkedin.com/in/kyle-s-vance/)
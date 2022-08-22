# 📚 MyReads: A Book Tracking App
## 📌 Overview
In this project, I create a web application that allows you to select and categorize books you have read, are currently reading, or want to read.
## 📰 Project Main Pages :
This projects contains only two pages :
- **First Page** : it is the main project page which contains ```Three``` bookshelves :
  - **Currenly Reading Shelf** : contains books you are currently reading.
  - **Want To Read Shelf** : contains books you want to read.
  - **Read Shelf** : contain books you read.
 - **Second Page** : it is the project page contains a search field where you can search about any book then get the result displayed throughout this page.

## 📥 Installation
In order to run this project you will need to install [node.js](https://nodejs.org/en/) globally on your device after that :

###### Clone Project
```
git clone git@github.com:EmanAwadAli/MyReadsApp.git
```
###### Install npm packages
```
npm install
```
###### Start your Project
```
npm start
```
## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   └── index.html # DO NOT MODIFY
└── src
    ├── components
        ├── Book # Display book data [image - title - ... etc].
        ├── BookShelf # Display each shelf with all its books.
        └── ShelfSelect # Display select box of all available shelves names.
    ├── costants
        └── Shelfs # Contains all available shelves names.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── pages
        ├── BookShelves.js # Contains three bookshelves.
        └── Search.js  # Where you can search about specific book and add it to a shelf.
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` Contains all book data like title, id ... etc
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## 💡 Note :
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## 💡 Helpful Links If You Want To Try Developing This Project From Start : 
- [Project Starter Code](https://github.com/udacity/reactnd-project-myreads-starter)
- [Project Rubrics](https://review.udacity.com/#!/rubrics/918/view)

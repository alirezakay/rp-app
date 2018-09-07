# rp-app
> create react-php app with php live dev server - use php at backend, react at frontend

<p>
    <img align="left" src="https://raw.githubusercontent.com/alirezakay/rp-app/master/icon-react.png" alt="ICON IMG" width="150">
    <b>+</b>
    <img align="right" src="https://raw.githubusercontent.com/alirezakay/rp-app/master/icon-php.png" alt="ICON IMG" width="150">
</p>

## Usage
This package gives you a nice react app development tool combining with php for the back-end.

You can simply test and debug in php live dev server.

This project uses the following technos:

 - [rp-app-core](https://npmjs.com/package/rp-app-core)
    - webpack
    - babel
    - node-php-server
    - nodemon
    - ...

This is just the beginning of the project! 
So if there was some bugs, just mention it.
We'll try to fix it. 

<hr />

***NOTE THAT***

> You can not use inline php codes in react files directly.

>> But you can use php in the **index.php** (index file) or use ajax requests.

### Install
Install the package by `npm` or `yarn`.

Note that you must have already installed *yarn* by: `npm i -g yarn`.

```
npm i -g rp-app
```
OR
```
yarn global add rp-app
```

### Create And Run
You can create an app with the command bellow ( \`**dir**\` is the directory name, you wanna be created! ) :

```
rp-app create <dir>
```

Then, run the app on the dev server by:

```
cd <dir>
npm start
```

***Congrats***!

Now, your default browser is going to be opened at this address: **`http://localhost:4000`**

You can change the default contents by changing the files mentioned at the [hierarchy section](https://github.com/alirezakay/rp-app#hierarchy-of-app)


<hr />

## Hierarchy Of App

\-

\------ .babelrc

\------ webpack.config.js

\------ nodemon.json

\------ package.json

\------ [node_modules] 

\------ [public] 

\---------------|

\--------------- **index.php**

\--------------- favicon.ico

\--------------- [reloader]

\------ [scripts]

\------ [src]

\------------|

\------------ [assets] 

\------------ [components] 

<hr />

### Some Notes

*Note That*: You can change configs of the dev server in `scripts` folder.

*Note That*: This rp-app creator just packs for development purposes. For now (V 0.0.X) there is **no** `build` options for **production** mode. You can config it by manipulating *scripts* folder.

*Note That*: You can see the hirearchy of files (core files) in `rp-app-core` package.

<br />

***Note That***: This server can be auto reloaded just on **one tab**. So please pay attention that there not to be more than one tab opened on the browser.

***Note That***: Each auto refreshing time is something between [6~10]() seconds. So if you want not to be refreshed automatically, just remove the **script** bellow the **`index.php`** file: `<script src="./reloader/reloader.js"></script>`



### Author
[Alireza Kavian](https://alireza-kavian.github.io)

### Licence
This package is under **Apache-2.0** LICENCE







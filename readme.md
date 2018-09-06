# rp-app
> create react-php app with php live development server - use php at backend and react for frontend

<img src="https://raw.githubusercontent.com/alirezakay/rp-app/master/icon.png" alt="ICON IMG" width="150">

## Usage
This package gives you a nice react app development combining with php for back-end.

You can simply test in live php dev server.

This project uses the following technos:

 - [rp-app-core](https://npmjs.com/package/rp-app-core)
    - webpack
    - babel
    - node-php-server
    - nodemon
    - ...

This is just the beginning of the project! 
So if there is some bugs, just mention it.
We will try to fix it. 

<hr />

***NOTE THAT***

> You can not use inline php codes in react files straightly

>> But you can use php in index.php (index file) and use ajax requests.

>> Test with live php server

### Install
Install the package by `npm` or `yarn`.

Note that you should have already installed yarn by `npm i -g yarn`.

```
npm i -g rp-app
```

```
yarn global add rp-app
```

### Create And Run
You can create an app with the command bellow ( \`dir\` is the directory name you wanna be created! ):

```
rp-app create <dir>
```

Then, run the default app contents on the dev server by:

```
cd <dir>
npm start
```

***Congrats***!

Now, your default browser will be opened in this address: **`http://localhost:4000`**

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
This package is under Apache-2.0 LICENCE







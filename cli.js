#!/usr/bin/env node

const program = require('commander');
const colors = require('colors');
const cmd = require('node-cmd');
const path = require('path');

let make_gray = (txt) => {
    return colors.gray(txt); //display the help text in red on the console
}

let runner = (dir) => {
    if (!dir._args) {
        reactAppCreator(dir);
    }
}

let reactAppCreator = (dir) => {
    console.log(colors.magenta.bold("\ncreate-rp-app-cli is running ..."));
    console.log(colors.gray("creating directory \`" + dir + "\` and initializing"));
    console.log(colors.gray("please wait - it might take several minutes"));
    const printer = setInterval(() => {
        process.stdout.write("-");
    }, 150);
    cmd.get(
        `mkdir ${dir} && cd ./an && npm install rp-app-core --no-save && cp -rf ./node_modules/rp-app-core/. ./ && rm -rf ./node_modules/rp-app-core`, (err, data, stderr) => {
            clearInterval(printer);
            console.log("");
            if (err) {
                console.log(colors.red(err));
                return;
            } else if (stderr) {
                console.log(colors.yellow(stderr));
            }
            const printer2 = setInterval(() => {
                process.stdout.write(colors.bold.gray("#"));
            }, 500);
            cmd.get(`cd ${dir} && npm install`, (err, data, stderr) => {
                clearInterval(printer2);
                if (err) {
                    console.log(colors.red(err));
                    return;
                } else if (stderr) {
                    console.log(colors.yellow(stderr));
                }
                console.log(data);
                console.log("\n<><>DONE!<><>\nRun with the commands below");
                console.log(colors.blue("cd " + dir));
                console.log(colors.blue("npm start") + " or " + colors.blue("yarn start"));
                console.log("");
            })
        }
    );
}


program
    .version('0.0.1')
    .command('create <dir_name>')
    .description('creates a directory with the given name and initializes the react-php app')
    .action(runner);

if (!process.argv.slice(2).length) {
    program.outputHelp(make_gray);
}

program.parse(process.argv); // end with parse to parse through the input
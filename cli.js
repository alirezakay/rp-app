#!/usr/bin/env node

const program = require('commander');
const colors = require('colors');
const cmd = require('node-cmd');

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
        process.stdout.write(colors.grey("-"));
    }, 150);

    let superx = "";
    if(process.platform.toLowerCase() !== "win32"){
        superx = "sudo ";
    }
    const cmnd1 = `mkdir ${dir} && cd ./${dir} && ${superx}npm install rp-app-core --no-save && cp -rf ./node_modules/rp-app-core/. ./ && sudo rm -rf ./node_modules/rp-app-core`;
    cmd.get(
        cmnd1, (err, data, stderr) => {
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
                console.log(colors.red("\n<>DONE<>\n")+"To run, type the commands below");
                console.log(colors.gray("cd " + dir));
                console.log(colors.gray("npm start") + " or " + colors.blue("yarn start"));
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
#!/usr/bin/env node

const program = require('commander');
const colors = require('colors');
const cmd = require('node-cmd');
const sudo = require('sudo-prompt');


let make_gray = (txt) => {
    return colors.gray(txt); //display the help text in red on the console
}

let runner = (dir, c) => {
    if (!dir._args) {
        reactAppCreator(dir, c);
    }
}


let reactAppCreator = (dir, c) => {
    console.log(c.parent.rawArgs[1]);
    
    let superx = "";
    if(process.platform.toLowerCase() !== "win32"){
        superx = "sudo ";
        const options = {
            name: 'RP APP CLI',
        };
        sudo.exec('pwd', options,
            (error, stdout, stderr) => {
              if (error) throw error;
              core(superx, dir);
            }
        );
    }
    else{
        core(superx, dir);
    }
}

let core = (superx, dir) => {
    console.log(colors.green("\n[rp-app-cli] is running..."));
    console.log(colors.gray("creating directory \`" + dir + "\` and initializing"));
    console.log(colors.gray("please wait\nIt might take several minutes"));
    const printer = setInterval(() => {
        process.stdout.write(colors.grey("-"));
    }, 150);


    const cmnd1 = `mkdir ${dir} && cd ./${dir} && ${superx}npm install rp-app-core --no-save --prefix ./ && cp -rf ./node_modules/rp-app-core/. ./ && sudo rm -rf ./node_modules/rp-app-core`;
    cmd.get(
        cmnd1, (err, data, stderr) => {
            clearInterval(printer);
            console.log("");
            if (err) {
                console.log(colors.red(err));
                return;
            } else if (stderr) {
                // console.log(colors.yellow(stderr));
            }
            let odd = true;
            const printer2 = setInterval(() => {
                process.stdout.write(colors.bold.gray(odd?"<":">"));
                odd = !odd;
            }, 700);
            cmd.get(`cd ${dir} && ${superx}npm install`, (err, data, stderr) => {
                clearInterval(printer2);
                if (err) {
                    console.log(colors.red(err));
                    return;
                } else if (stderr) {
                    // console.log(colors.yellow(stderr));
                }
                console.log("");
                console.log(data);
                console.log(colors.red("\n|DONE|\n\n")+"To run, type the commands below:\n");
                console.log(colors.magenta("cd " + dir));
                console.log(colors.magenta(superx+"npm start") + " or " + colors.magenta(superx+"yarn start"));
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
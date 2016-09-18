#!/bin/env node

{
    'use strict';
    const display = require(__dirname + '/libs/display.js');
    const supervisorClient = require(__dirname + '/libs/supervisorClient.js');
    const request = require('request');
    const chalk = require('chalk');
    const debug = require('debug')('main');
    let updating = false;

    console.log(chalk.cyan('Main application running'));

    supervisorClient.start(500, ()=> {
        supervisorClient.on('status', (status) => {
          console.log(chalk.white('Supervisor status update: ' + status));
            switch (status) {
                case "Idle":
                    display.image(display.presets.smile);
                    break;
                case "Installing":
                    display.image(display.presets.busy);
                    break;
                case "Downloading":
                    display.image(display.presets.download);
                    break;
                case "Starting":
                    display.image(display.presets.fwd);
                    break;
                case "Stopping":
                    display.image(display.presets.stop);
                    break;
            }
        });
    });
}

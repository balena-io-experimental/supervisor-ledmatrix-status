#!/bin/env node

{
    'use strict';
    const display = require(__dirname + '/libs/display.js');
    const request = require('request');
    const debug = require('debug')('main');
    let updating = false;

    setInterval(function keepalive() {
        request(process.env.RESIN_SUPERVISOR_ADDRESS + '/v1/device?apikey=' + process.env.RESIN_SUPERVISOR_API_KEY, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                body = JSON.parse(body);
                debug('supervisor', body);
                switch (body.status) {
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
            }
        });
    }, 500);
}

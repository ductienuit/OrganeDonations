const express = require('express');
const path = require('path');
const espress = require('express');
const request = require('request');
// const cjson = require('cjson');
const EVT = require('evtjs');
const sha256 = require('js-sha256');
// const apiCaller = require('../config/config.everi');
const { apiCaller, pubkey } = require('../config/config.everi');

const router = express.Router();

router.get('/getinfo', async (req, res) => {
    const info = await apiCaller.getInfo();
    res.send(info);
});

router.post('/add', async (req, res, next) => {
    try {
        const hashed = sha256(res.body.identity);
        const a = await apiCaller.pushTransaction(
            { maxCharge: 100000 },
            new EVT.EvtAction('addmeta', {
                'key': hashed,
                'value': res.body.info,
                'creator': pubkey
            }, '.domain', 'mydomain')
        );

        return res.send(typeof a);
    } catch (err) {
        return next(err);
    }
});

router.get('/createdomain', async (req, res, next) => {
    try {
        await apiCaller.pushTransaction(
            { maxCharge: 1000000 },
            new EVT.EvtAction('newdomain',
            {
                'name': 'mynewdomain',
                'creator': pubkey,
                'issue': {
                    'name': 'issue',
                    'threshold': 1,
                    'authorizers': [{
                        'ref': pubkey,
                        'weight': 1
                    }]
                },
                'transfer': {
                    'name': 'transfer',
                    'threshold': 1,
                    'authorizers': [{
                        'ref': '[G] .OWNER',
                        'weight': 1
                    }]
                },
                'manage': {
                    'name': 'manage',
                    'threshold': 1,
                    'authorizers': [{
                        'ref': `[A] ${pubkey}`,
                        'weight': 1
                    }]
                }
            })
        );
        return res.send('Successfully');
    } catch (err) {
        return next(err);
    }
});

module.exports = router;

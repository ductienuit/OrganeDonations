const EVT = require('evtjs');

const priKey = '5JjTa99RqdHHyYUiqMh3pUD5dHw1AfraHrtyJtbx6KDdGuzoRhb';
// exports.pubKey = EVT.EvtKey.privateToPublic(priKey);
exports.pubkey = 'EVT73CUXDoCincxZpGecRj5wxNzHwbZctHov93qiYah4CZaWJge3D';

const endpoint = {
    host: 'testnet1.everitoken.io',
    port: 8888,
    protocol: 'http'
};
// const generatePrivateKey = async () => {
//     let key = await EVT.EvtKey.randomPrivateKey();

//     while (!EVT.EvtKey.isValidPrivateKey(key)) {
//         key = await EVT.EvtKey.randomPrivateKey()
//                 .then(res => {
//                     console.log(`Get private key successfully: ${res}`);
//                 });
//     }
//     return key;
// };
exports.apiCaller = EVT({
    keyProvider: priKey,
    endpoint
});

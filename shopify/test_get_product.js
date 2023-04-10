require("globalthis/auto");
const request = require('request');

const shopName =  'solutionsshop-net';
const accessToken = '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';   //pass
const apiKey = 'd7512afa5a43190f22bfb731edd4280a';
const apiSecret = 'f377837dd65b93bcc487e0f50765f646';
const endpoint = 'products'
const url = `https://${apiKey}:${accessToken}@${shopName}.myshopify.com/admin/api/2022-10/${endpoint}.json`

const options = {
    "method" : 'GET',
    'url' : `https://${apiKey}:${accessToken}@${shopName}.myshopify.com/admin/api/2022-10/${endpoint}.json`,
    'headers' :{
        'Content-Type' : 'application/json',
        'X-Shopify-Access-Token' : accessToken,
        'X-Shopify-Secret-Key' : apiSecret   //not needed 
    }, 
   
};

request(options, function (err, res) {
    if (err) {
        throw new Error(err);
    }
    
    console.log("getting", url)
    console.log(res.body);
})
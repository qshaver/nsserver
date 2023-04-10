require("globalthis/auto");
const request = require('request');

const shopName =  'solutionsshop-net';
const accessToken = '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';   //pass
const apiKey = 'd7512afa5a43190f22bfb731edd4280a';
const apiSecret = 'f377837dd65b93bcc487e0f50765f646';
const endpoint = 'orders'
const url = `https://${apiKey}:${accessToken}@${shopName}.myshopify.com/admin/api/2022-10/${endpoint}.json`

const options = {
    "method" : 'POST',
    'url' : `https://${apiKey}:${accessToken}@${shopName}.myshopify.com/admin/api/2022-10/${endpoint}.json`,
    'headers' :{
        'Content-Type' : 'application/json',
        'X-Shopify-Access-Token' : accessToken,
        'X-Shopify-Secret-Key' : apiSecret
    },
    "body": JSON.stringify({
        "order" : {
            "line_items": [
              {
                "title": "Test order hitesh",
                "price": 74.99,
                "grams": "1300",
                "quantity": 3,
                "tax_lines": [
                  {
                    "price": 13.5,
                    "rate": 0.06,
                    "title": "State tax"
                  }
                ]
              },
            ],
            "transactions": [
              {
                "kind": "sale",
                "status": "success",
                "amount": 238.47
              }
            ],
            "total_tax": 13.5,
            "currency": "USD",
            "email":"test@hitesh.com"
             }})
};

request(options, function (err, res) {
    if (err) {
        throw new Error(err);
    }
    console.log("creating order", url)
    console.log(res.body);
})
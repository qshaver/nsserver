
require('@shopify/shopify-api/adapters/node');
const express = require("express");
const Datastore = require("nedb");
// const {default: createShopifyAuth} = require('@shopify/koa-shopify-auth');
// const {verifyRequest} = require('@shopify/koa-shopify-auth');
// const {Shopify, ApiVersion} = require('@shopify/shopify-api');
const Shopify = require('@shopify/shopify-api');

// const Shopify = require('shopify-api-node');

const path = require('path');

//STEPS TO RUN
//npm install api
//npm install globalthis
// node index.js

//USE BELOW CODE WHEN YOU WANT TO USE SQLITE DATABASE

// const sqlite3 = require("sqlite3");
// const { open } = require("sqlite");
// const easyship = require('@easyship/api-sdk')({
//   apiKey: 'prod_k31AsLGnjnDLBwvRQXCozN6EQ0eic6aG88lA7LWc42I='
// });
// // setup database
// let db = null;
// (async () => {
//   db = await open({
//     filename: 'database.db',
//     driver: sqlite3.Database
//   });
//   await db.run(`CREATE TABLE IF NOT EXISTS apidata (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     x TEXT,
//     y TEXT,
//     longtimestamp INTEGER
//   )`);
// })();
// Save the data in the database
// await db.run(
// INSERT INTO apidata (x, y, longtimestamp) VALUES ('${JSON.stringify( data )}', '${JSON.stringify(items)}', ${timestamp})
// );

// setup NeDB database
// set up database
// const database = new Datastore({ filename: "database.db", autoload: true });


const database = new Datastore({ filename: path.join(__dirname, 'database1.db'), autoload: true });


database.loadDatabase((err) => {
  if (err) {
    console.log('Error loading database:', err);
  } else {
    console.log('Database loaded successfully!');
  }
});

//  const shopName =  'solutionsshop-net.myshopify.com';
// const accessToken = '1dd8b7501253d71ae6708d7c3f943046';
// const apiKey = '1dd8b7501253d71ae6708d7c3f943046';
// const apiSecret = 'be30fba4ffbc4ec76761048d46d8f6ce';


// const shopifyAuth = createShopifyAuth({
//   apiKey: '1dd8b7501253d71ae6708d7c3f943046',
//   secret: 'be30fba4ffbc4ec76761048d46d8f6ce',
//   scopes: ['read_products', 'write_orders'],
//   async afterAuth(ctx) {
//     const {shop, accessToken} = ctx.session;
//     const client = new Shopify({
//       shopName: shop,
//       accessToken: accessToken,
//       apiVersion: ApiVersion.October20,
//     });
//     // create session object
//     const session = await client.session();
//     // use session object to create order
//    // Session is built by the OAuth process
// // Session is built by the OAuth process

// // const order = new Shopify.rest.Order({session: session});
    
    
//   const order = new Shopify.rest.Order({session: session});
//   // Do something with the order object
      
    
// order.line_items = [
//   {
//     "variant_id": 447654529,
//     "quantity": 1
//   }
// ];
// order.customer = {
//   "first_name": "Paul",
//   "last_name": "Norman",
//   "email": "paul.norman@example.com"
// };
// order.billing_address = {
//   "first_name": "John",
//   "last_name": "Smith",
//   "address1": "123 Fake Street",
//   "phone": "555-555-5555",
//   "city": "Fakecity",
//   "province": "Ontario",
//   "country": "Canada",
//   "zip": "K2P 1L4"
// };
// order.shipping_address = {
//   "first_name": "Jane",
//   "last_name": "Smith",
//   "address1": "123 Fake Street",
//   "phone": "777-777-7777",
//   "city": "Fakecity",
//   "province": "Ontario",
//   "country": "Canada",
//   "zip": "K2P 1L4"
// };
// order.email = "jane@example.com";
// order.transactions = [
//   {
//     "kind": "authorization",
//     "status": "success",
//     "amount": 50.0
//   }
// ];
// order.financial_status = "partially_paid";
// await order.save({
//   update: true,
// });
//       console.log("sent order");




//   },
// });

// // middleware to verify requests

// console.log(shopifyAuth);

// shopifyAuth();



// const Shopify = require('shopify-api-node');
const shopName =  'solutionsshop-net.myshopify.com';
const accessToken = '1dd8b7501253d71ae6708d7c3f943046';
const apiKey = '1dd8b7501253d71ae6708d7c3f943046';
const apiSecret = 'be30fba4ffbc4ec76761048d46d8f6ce';

const shopify = Shopify.shopifyApi({
  shopName: shopName,
  accessToken: accessToken,
  apiKey: apiKey,
  apiSecretKey: apiSecret,
  scopes: ['read_products','write_orders','write_checkouts'],
  hostName: 'ngrok-tunnel-address'
});

const session= shopify.session;
// console.log(shopify);

const order = {
  line_items: [
    {
      "title": "Big Brown Bear Boots",
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
    }
  ],
  transactions: [
    {
      "kind": "sale",
      "status": "success",
      "amount": 238.47
    }
  ],
  total_tax: 13.5,
  currency: "EUR"
};

 console.log(Shopify.Order);

(async () => {
  try {
   const order = new Shopify.Order({session: session});
    
    console.log(order);
     
order.line_items = [
  {
    "variant_id": 447654529,
    "quantity": 1
  }
];
order.customer = {
  "first_name": "Paul",
  "last_name": "Norman",
  "email": "paul.norman@example.com"
};
order.billing_address = {
  "first_name": "John",
  "last_name": "Smith",
  "address1": "123 Fake Street",
  "phone": "555-555-5555",
  "city": "Fakecity",
  "province": "Ontario",
  "country": "Canada",
  "zip": "K2P 1L4"
};
order.shipping_address = {
  "first_name": "Jane",
  "last_name": "Smith",
  "address1": "123 Fake Street",
  "phone": "777-777-7777",
  "city": "Fakecity",
  "province": "Ontario",
  "country": "Canada",
  "zip": "K2P 1L4"
};
order.email = "jane@example.com";
order.transactions = [
  {
    "kind": "authorization",
    "status": "success",
    "amount": 50.0
  }
];
order.financial_status = "partially_paid";
await order.save({
  update: true,
});
      console.log("sent order");

  } catch (error) {
    console.error(error);
  }
})();





//   // console.log(res);
  
    
//   // console.log(data);
//     // database.insert(data);
//   })
//   .catch((err) => console.error(err));




// setup and run an express server
const app = express();
const port = 4000;
app.listen(port, () => {
  console.log("Starting server using port " + port);
});

app.use(express.static("public"));
app.use(express.json());
// app.use(middleware);


//new API to Store EASYSHIP response in db [NEW API ENDPOINT]
app.post("/api/getrate", async (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;

  // Extract the required data from the request body
  const qnty1 = Number(data.freshdesk_webhook.ticket_cf_product_quantity) || 0;
  const qnty2 =
    Number(data.freshdesk_webhook.ticket_cf_product_2_quantity) || 0;
  const destination_address = {
    line1: data.freshdesk_webhook.ticket_cf_shipping_address,
    line2: data.freshdesk_webhook.ticket_cf_shipping_address_2,
    city: data.freshdesk_webhook.ticket_cf_shipping_city,
    state: data.freshdesk_webhook.ticket_cf_shipping_state,
    postalCode: data.freshdesk_webhook.ticket_cf_shipping_zip,
    countryCode: "US",
  };
  const items = [
    {
      category: "health_beauty",
      declaredCurrency: "USD",
      declaredCustomsValue: 59.95,
      description: "Electric Shaver and Trimming System with Travel Case",
      hsCode: "8510.10.00",
      length: 11,
      width: 9,
      height: 4,
      originCountryCode: "US",
      quantity: qnty1,
      sku: "QS-3300",
      weight: 2 * qnty1,
    },
    {
      category: "Accessory (no-battery)",
      declaredCurrency: "USD",
      declaredCustomsValue: 4.95,
      description: "Shaver Replacement Heads...",
      hsCode: "8510.10.00",
      length: 5,
      width: 5,
      height: 1,
      originCountryCode: "US",
      quantity: qnty2,
      sku: "SH-2300",
      weight: qnty2,
    },
  ];
  
   // Call the EasyFetch API endpoint to get the shipping rates
  try {
    const rates = await sdk.rates.get({
      originAddress: {
        countryCode: "US",
        postalCode: "32225",
        city: "Jacksonville",
        state: "FL",
      },
      destinationAddress: destination_address,
      items: items,
    });
    data.rates = rates;

    console.log(data);
    response.send(data);
  } catch (error) {
    console.error(error);
    response.status(500).send({ error: error.message });
  }
  

  // Insert the data object into the NeDB database
  database.insert({ data, items, timestamp }, (err, newDoc) => {
    if (err) {
      console.error(err);
      response.status(500).send(err);
    } else {
      console.log(newDoc);
      response.json(newDoc);
    }
  });
});




// set up routing endpoint for my api [NOT WORKING PREVIOUS API]
app.post("/api", async (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;

  // Extract the required data from the request body
  const qnty1 = Number(data.freshdesk_webhook.ticket_cf_product_quantity) || 0;
  const qnty2 =
    Number(data.freshdesk_webhook.ticket_cf_product_2_quantity) || 0;
  const destination_address = {
    line1: data.freshdesk_webhook.ticket_cf_shipping_address,
    line2: data.freshdesk_webhook.ticket_cf_shipping_address_2,
    city: data.freshdesk_webhook.ticket_cf_shipping_city,
    state: data.freshdesk_webhook.ticket_cf_shipping_state,
    postalCode: data.freshdesk_webhook.ticket_cf_shipping_zip,
    countryCode: "US",
  };
  const items = [
    {
      category: "health_beauty",
      declaredCurrency: "USD",
      declaredCustomsValue: 59.95,
      description: "Electric Shaver and Trimming System with Travel Case",
      hsCode: "8510.10.00",
      length: 11,
      width: 9,
      height: 4,
      originCountryCode: "US",
      quantity: qnty1,
      sku: "QS-3300",
      weight: 2 * qnty1,
    },
    {
      category: "Accessory (no-battery)",
      declaredCurrency: "USD",
      declaredCustomsValue: 4.95,
      description: "Shaver Replacement Heads",
      hsCode: "8510.10.00",
      length: 4,
      width: 4,
      height: 2,
      originCountryCode: "US",
      quantity: qnty2,
      sku: "QS-3301",
      weight: 0.2 * qnty2,
    },
  ];

  // Call the EasyFetch API endpoint to get the shipping rates
  try {
    const rates = await sdk.rates.get({
      originAddress: {
        countryCode: "US",
        postalCode: "32225",
        city: "Jacksonville",
        state: "FL",
      },
      destinationAddress: destination_address,
      items: items,
    });
    data.rates = rates;

    console.log(data);
    response.send(data);
  } catch (error) {
    console.error(error);
    response.status(500).send({ error: error.message });
  }
});

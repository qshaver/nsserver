require("globalthis/auto");

const sdk = require("api")("@easyship/v2023.01#xwp13lfv2pii3");
sdk.auth("prod_k31AsLGnjnDLBwvRQXCozN6EQ0eic6aG88lA7LWc42I=");

// SAMPLE SDK API REQUEST TO FETCH DATA
sdk
  .rates_request({
    origin_address: {
      line_1: "123 Test Street",
      line_2: "Block 3",
      state: "Yuen Long",
      city: "Hong Kong",
      postal_code: "0000",
      country_alpha2: "HK",
      contact_name: "Foo Bar",
      company_name: null,
      contact_phone: null,
      contact_email: "asd@asd.com",
    },
    destination_address: {
      line_1: "123 Test Street",
      line_2: "Block 3",
      state: "Yuen Long",
      city: "Hong Kong",
      postal_code: "0000",
      country_alpha2: "HK",
      contact_name: "Foo Bar",
      company_name: null,
      contact_phone: null,
      contact_email: "asd@asd.com",
    },
    incoterms: "DDU",
    insurance: { is_insured: false },
    courier_selection: { apply_shipping_rules: true },
    shipping_settings: { units: { weight: "kg", dimensions: "cm" } },
    parcels: [
      {
        box: null,
        items: [
          {
            quantity: 2,
            dimensions: { length: 1, width: 2, height: 3 },
            description: "item",
            category: "fashion",
            sku: "sku",
            origin_country_alpha2: "HK",
            actual_weight: 10,
            declared_currency: "USD",
            declared_customs_value: 20,
          },
        ],
        total_actual_weight: 1,
      },
    ],
  })
  .then(({ data }) => {
    // do something with the parsed data
  
  // Insert the data object into the NeDB database
   database.insert({ data }, (err, newDoc) => {
    if (err) {
      console.error(err);
      // response.status(500).send(err);
    } else {
      console.log("Data is Saved in NeDB", data, newDoc);
      // response.json(newDoc);
    }
  });

});
  
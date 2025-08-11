/** Chunk was on web.js **/
/** chunk id: 311850, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => i
});
var Chunk301766 = require("./301766.js");

function i(e) {
  return null == e ? {} : Object.keys(e).reduce((t, n) => {
    if (null == e) return t;
    let i = e[n];
    return t[n] = {
      countryPrices: {
        countryCode: i.country_prices.country_code,
        prices: i.country_prices.prices.map(e => (0, r.kH)(e, true))
      },
      paymentSourcePrices: {}
    }, t
  }, {})
}
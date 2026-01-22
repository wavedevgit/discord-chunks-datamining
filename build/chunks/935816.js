/** Chunk was on web.js **/
/** chunk id: 935816, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => i
});
var Chunk832946 = require("./832946.js");

function i(e) {
  return null == e ? {} : Object.keys(e).reduce((t, n) => {
    if (null == e) return t;
    let i = e[n];
    return t[n] = {
      countryPrices: {
        countryCode: i.country_prices.country_code,
        prices: i.country_prices.prices.map(e => (0, r.n_)(e, true))
      },
      paymentSourcePrices: {}
    }, t
  }, {})
}
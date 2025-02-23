/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  l: () => i
});
var r = n(301766);

function i(e) {
  return null == e ? {} : Object.keys(e).reduce((t, n) => {
    if (null == e) return t;
    let i = e[n];
    return t[n] = {
      countryPrices: {
        countryCode: i.country_prices.country_code,
        prices: i.country_prices.prices.map(e => (0, r.kH)(e, !0))
      },
      paymentSourcePrices: {}
    }, t
  }, {})
}
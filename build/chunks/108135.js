/** Chunk was on web.js **/
/** chunk id: 108135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => a,
  d: () => o
});
var Chunk964268 = require("./964268.jsx"),
  Chunk981631 = require("./981631.js"),
  a = function(e) {
    return e.ORB_CHECKOUT = "orb_checkout", e.PREMIUM_CHECKOUT = "premium_checkout", e.COLLECTIBLES_CHECKOUT = "collectibles_checkout", e
  }({});
let o = {
  orb_checkout: {
    implemented: true,
    flowType: "orb_checkout",
    UnifiedCheckoutContextProvider: Chunk964268.X,
    UnifiedCheckoutCustomHeader: Chunk964268.P,
    purchaseType: Chunk981631.GZQ.ONE_TIME
  },
  premium_checkout: {
    implemented: false,
    flowType: "premium_checkout"
  },
  collectibles_checkout: {
    implemented: false,
    flowType: "collectibles_checkout"
  }
}
/** Chunk was on web.js **/
/** chunk id: 159351, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Xt: () => i,
  fw: () => o
});
var Chunk570140 = require("./570140.js");

function i(e) {
  r.Z.dispatch({
    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
    stripePaymentMethod: e
  })
}

function o() {
  Chunk570140.Z.wait(() => Chunk570140.Z.dispatch({
    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
  }))
}
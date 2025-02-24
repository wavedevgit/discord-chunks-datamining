/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Xt: () => i,
  fw: () => o
});
var r = n(570140);

function i(e) {
  r.Z.dispatch({
    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
    stripePaymentMethod: e
  })
}

function o() {
  r.Z.wait(() => r.Z.dispatch({
    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
  }))
}
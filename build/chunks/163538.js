/** Chunk was on web.js **/
/** chunk id: 163538, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk295405 = require("./295405.js"),
  Chunk166403 = require("./166403.js");

function s() {
  let e = (0, r.bG)([a.A], () => a.A.getPremiumTypeSubscription());
  return (0, r.bG)([i.A], () => {
    var t;
    return (null == e ? true : e.paymentSourceId) != null ? null == (t = i.A.getPaymentSource(e.paymentSourceId)) ? true : t.country : null
  })
}
/** Chunk was on web.js **/
/** chunk id: 53900, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk853872 = require("./853872.js"),
  Chunk78839 = require("./78839.js");

function o() {
  let e = (0, r.e7)([a.Z], () => a.Z.getPremiumTypeSubscription());
  return (0, r.e7)([i.Z], () => {
    var t;
    return (null == e ? true : e.paymentSourceId) != null ? null == (t = i.Z.getPaymentSource(e.paymentSourceId)) ? true : t.country : null
  })
}
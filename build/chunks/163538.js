/** Chunk was on 62733 **/
/** chunk id: 163538, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk295405 = require("./295405.js"),
  Chunk166403 = require("./166403.js");

function a() {
  let e = (0, i.bG)([r.A], () => r.A.getPremiumTypeSubscription());
  return (0, i.bG)([l.A], () => {
    var n;
    return (null == e ? true : e.paymentSourceId) != null ? null == (n = l.A.getPaymentSource(e.paymentSourceId)) ? true : n.country : null
  })
}
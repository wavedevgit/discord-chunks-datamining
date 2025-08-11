/** Chunk was on 75708 **/
/** chunk id: 757861, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => a
});
var Chunk509545 = require("./509545.js"),
  Chunk212895 = require("./212895.js"),
  Chunk66683 = require("./66683.js");

function a(e, t) {
  var n;
  let {
    enabled: a
  } = (0, s.k)({
    location: "Subscription Details"
  }), l = i.Z.get(null != (n = e.premiumPlanIdFromItems) ? n : "");
  if (null != l && a) {
    let n = (0, r.DE)(l, null == t ? true : t.id, false),
      i = n.length > 0 ? n[0] : e.currency;
    if (1 === n.length && (null == t ? true : t.id) === e.paymentSourceId && (0, r.tD)(l.id, i, null == t ? true : t.id)) returntrue
  }
  returnfalse
}
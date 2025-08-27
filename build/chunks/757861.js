/** Chunk was on web.js **/
/** chunk id: 757861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => o
});
var Chunk509545 = require("./509545.js"),
  Chunk212895 = require("./212895.js"),
  Chunk66683 = require("./66683.js");

function o(e, t) {
  var n;
  let {
    enabled: o
  } = (0, a.k)({
    location: "Subscription Details"
  }), s = r.Z.get(null != (n = e.premiumPlanIdFromItems) ? n : "");
  if (null != s && o) {
    let n = (0, i.DE)(s, null == t ? true : t.id, false),
      r = n.length > 0 ? n[0] : e.currency;
    if (1 === n.length && (null == t ? true : t.id) === e.paymentSourceId && (0, i.tD)(s.id, r, null == t ? true : t.id)) returntrue
  }
  returnfalse
}
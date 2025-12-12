/** Chunk was on web.js **/
/** chunk id: 757861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => o
});
var Chunk509545 = require("./509545.js"),
  Chunk212895 = require("./212895.js");

function o(e, t) {
  var n;
  let o = r.Z.get(null != (n = e.premiumPlanIdFromItems) ? n : "");
  if (null != o) {
    let n = (0, i.DE)(o, null == t ? true : t.id, false),
      r = n.length > 0 ? n[0] : e.currency;
    if (1 === n.length && (null == t ? true : t.id) === e.paymentSourceId && (0, i.tD)(o.id, r, null == t ? true : t.id)) returntrue
  }
  returnfalse
}
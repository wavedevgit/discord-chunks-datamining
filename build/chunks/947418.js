/** Chunk was on web.js **/
/** chunk id: 947418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => a
});
var Chunk97352 = require("./97352.js"),
  Chunk83617 = require("./83617.js");

function a(e, t) {
  var n;
  let a = r.A.get(null != (n = e.premiumPlanIdFromItems) ? n : "");
  if (null != a) {
    let n = (0, i._w)(a, null == t ? true : t.id, false),
      r = n.length > 0 ? n[0] : e.currency;
    if (1 === n.length && (null == t ? true : t.id) === e.paymentSourceId && (0, i.jJ)(a.id, r, null == t ? true : t.id)) returntrue
  }
  returnfalse
}
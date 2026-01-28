/** Chunk was on 5606 **/
/** chunk id: 947418, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => l
});
var Chunk97352 = require("./97352.js"),
  Chunk83617 = require("./83617.js");

function l(e, t) {
  var n;
  let l = r.A.get(null != (n = e.premiumPlanIdFromItems) ? n : "");
  if (null != l) {
    let n = (0, i._w)(l, null == t ? true : t.id, false),
      r = n.length > 0 ? n[0] : e.currency;
    if (1 === n.length && (null == t ? true : t.id) === e.paymentSourceId && (0, i.jJ)(l.id, r, null == t ? true : t.id)) returntrue
  }
  returnfalse
}
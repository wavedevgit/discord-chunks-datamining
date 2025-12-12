/** Chunk was on web.js **/
/** chunk id: 858719, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d,
  C7: () => c,
  kE: () => u,
  ws: () => l
});
var Chunk399606 = require("./399606.js"),
  Chunk937615 = require("./937615.js"),
  Chunk914788 = require("./914788.js"),
  Chunk546791 = require("./546791.js"),
  Chunk292352 = require("./292352.js");

function l(e) {
  return (0, r.Wu)([o.Z], () => o.Z.getActionsForDisplayType(e))
}

function c(e) {
  return (0, r.e7)([o.Z], () => o.Z.getTotalForDisplayType(e))
}

function u() {
  return (0, Chunk399606.e7)([Chunk914788.Z], () => Object.values(Chunk292352.MY).some(e => o.Z.getTotalForDisplayType(e) > 0))
}

function d(e) {
  var t;
  let n = null != (t = c(e)) ? t : 0;
  if (e === s.MY.TOTAL_VOICE_MINUTES) return (0, a.yH)(n);
  if (e === s.MY.PURCHASES) {
    let e = o.Z.getTotalSpendAmount(),
      t = o.Z.getTotalSpendCurrency();
    if (null != e && null != t) return (0, i.qr)(e, t)
  }
  return n
}
/** Chunk was on web.js **/
/** chunk id: 400641, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gn: () => c,
  Ju: () => d,
  _w: () => l,
  lI: () => u
});
var Chunk417597 = require("./417597.js"),
  Chunk580630 = require("./580630.js"),
  Chunk695515 = require("./695515.js"),
  Chunk923531 = require("./923531.js"),
  Chunk191627 = require("./191627.js");

function l(e) {
  return (0, r.yK)([a.A], () => a.A.getActionsForDisplayType(e))
}

function c(e) {
  return (0, r.bG)([a.A], () => a.A.getTotalForDisplayType(e))
}

function u() {
  return (0, r.bG)([a.A], () => Object.values(o.NV).some(e => a.A.getTotalForDisplayType(e) > 0))
}

function d(e) {
  var t;
  let n = null != (t = c(e)) ? t : 0;
  if (e === o.NV.TOTAL_VOICE_MINUTES) return (0, s.hO)(n);
  if (e === o.NV.PURCHASES) {
    let e = a.A.getTotalSpendAmount(),
      t = a.A.getTotalSpendCurrency();
    if (null != e && null != t) return (0, i.RS)(e, t)
  }
  return n
}
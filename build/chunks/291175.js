/** Chunk was on web.js **/
/** chunk id: 291175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  RZ: () => l,
  fv: () => a,
  gn: () => s
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk474936 = require("./474936.js");
let a = e => o.vK[e],
  s = e => null == a(e) ? null : e,
  l = (e, t) => {
    if (null == t) return null;
    let n = a(e);
    if (null == n) return null;
    let r = i()(t);
    return r.add(n.tenureReqNumMonths, "months"), r.add(1, "days"), r.toDate()
  }
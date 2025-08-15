/** Chunk was on web.js **/
/** chunk id: 291175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  RZ: () => l,
  fv: () => o,
  gn: () => s
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk474936 = require("./474936.js");
let o = e => a.vK[e],
  s = e => null == o(e) ? null : e,
  l = (e, t) => {
    if (null == t) return null;
    let n = o(e);
    if (null == n) return null;
    let r = i()(t);
    return r.add(n.tenureReqNumMonths, "months"), r.add(1, "days"), r.toDate()
  }
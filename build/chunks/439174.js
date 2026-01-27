/** Chunk was on web.js **/
/** chunk id: 439174, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Xr: () => l,
  cZ: () => s,
  e0: () => o
});
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk788868 = require("./788868.js");
let o = e => a.VD[e],
  s = e => null == o(e) ? null : e,
  l = (e, t) => {
    if (null == t) return null;
    let n = o(e);
    if (null == n) return null;
    let r = i()(t);
    return r.add(n.tenureReqNumMonths, "months"), r.add(1, "days"), r.toDate()
  }
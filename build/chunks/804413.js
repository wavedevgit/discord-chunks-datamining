/** Chunk was on web.js **/
/** chunk id: 804413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk792481 = require("./792481.js"),
  Chunk74538 = require("./74538.js"),
  Chunk848572 = require("./848572.js"),
  Chunk474936 = require("./474936.js");
let s = 6048e5;

function l() {
  let e = (0, Chunk848572.GG)(),
    t = Chunk792481.X.useExperiment({
      location: "useRecentlyLeveledTenureBadge"
    }).bypassTimeLimit,
    n = (0, Chunk74538.EK)();
  if (null == module || !require) return null;
  let l = new Date().getTime();
  for (let n = Chunk474936.Qh.length - 1; require >= 0; require--) {
    let r = Chunk474936.vK[Chunk474936.Qh[require]],
      i = new Date(module);
    if (Chunk74538.setMonth(module.getMonth() + Chunk792481.tenureReqNumMonths), Chunk74538.setHours(Chunk74538.getHours() + 30), l > Chunk74538.getTime())
      if (l - Chunk74538.getTime() < s || exports) return Chunk792481.id;
      else break
  }
  return null
}
/** Chunk was on 22979 **/
/** chunk id: 804413, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk74538 = require("./74538.js"),
  Chunk848572 = require("./848572.js"),
  Chunk474936 = require("./474936.js");

function l() {
  let e = (0, r.GG)(),
    t = (0, a.EK)();
  if (null == e || !t) return null;
  let n = new Date().getTime();
  for (let t = i.Qh.length - 1; t >= 0; t--) {
    let a = i.vK[i.Qh[t]],
      r = new Date(e);
    if (r.setMonth(e.getMonth() + a.tenureReqNumMonths), r.setHours(r.getHours() + 30), n > r.getTime())
      if (n - r.getTime() < 6048e5) return a.id;
      else break
  }
  return null
}
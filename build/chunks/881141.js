/** Chunk was on 36054 **/
/** chunk id: 881141, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk927578 = require("./927578.js"),
  Chunk112848 = require("./112848.js"),
  Chunk788868 = require("./788868.js");

function i() {
  let e = (0, l.Xb)(),
    t = (0, a.nK)();
  if (null == e || !t) return null;
  let n = new Date().getTime();
  for (let t = r.sp.length - 1; t >= 0; t--) {
    let a = r.VD[r.sp[t]],
      l = new Date(e);
    if (l.setMonth(e.getMonth() + a.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime())
      if (n - l.getTime() < 6048e5) return a.id;
      else break
  }
  return null
}
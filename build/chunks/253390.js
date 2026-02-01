/** Chunk was on 24665 **/
/** chunk id: 253390, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  v: () => c
}), require("./65821.js"), require("./896048.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk97352 = require("./97352.js"),
  Chunk927578 = require("./927578.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js");

function c(e, n) {
  let t = r.A.get(e.planId);
  i()(null != t, "missing premium subscription plan");
  let l = r.A.getForSkuAndInterval((0, a.mH)(s.pe.GUILD), t.interval, t.intervalCount);
  i()(null != l, "missing premium guild plan");
  let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
    u = (e.status === o.Dmq.CANCELED ? 0 : (0, a.bx)(c)) + n,
    p = c.filter(e => e.planId !== l.id);
  if (u < 0) throw Error("Invalid adjustment");
  return 0 === u ? p : [...p, {
    planId: l.id,
    quantity: u
  }]
}
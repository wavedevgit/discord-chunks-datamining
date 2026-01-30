/** Chunk was on 78376 **/
/** chunk id: 253390, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => c
}), require("./65821.js"), require("./896048.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk97352 = require("./97352.js"),
  Chunk927578 = require("./927578.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js");

function c(e, t) {
  let n = l.A.get(e.planId);
  i()(null != n, "missing premium subscription plan");
  let r = l.A.getForSkuAndInterval((0, s.mH)(a.pe.GUILD), n.interval, n.intervalCount);
  i()(null != r, "missing premium guild plan");
  let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
    d = (e.status === o.Dmq.CANCELED ? 0 : (0, s.bx)(c)) + t,
    u = c.filter(e => e.planId !== r.id);
  if (d < 0) throw Error("Invalid adjustment");
  return 0 === d ? u : [...u, {
    planId: r.id,
    quantity: d
  }]
}
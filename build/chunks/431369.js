/** Chunk was on 75708 **/
/** chunk id: 431369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => c
}), require("./415506.js"), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js");

function c(e, t) {
  let n = s.Z.get(e.planId);
  r()(null != n, "missing premium subscription plan");
  let i = s.Z.getForSkuAndInterval((0, a.Wz)(l.Si.GUILD), n.interval, n.intervalCount);
  r()(null != i, "missing premium guild plan");
  let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
    d = (e.status === o.O0b.CANCELED ? 0 : (0, a.uV)(c)) + t,
    u = c.filter(e => e.planId !== i.id);
  if (d < 0) throw Error("Invalid adjustment");
  return 0 === d ? u : [...u, {
    planId: i.id,
    quantity: d
  }]
}
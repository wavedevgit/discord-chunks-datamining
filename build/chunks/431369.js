/** Chunk was on 49289 **/
/** chunk id: 431369, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  g: () => s
}), require("./415506.js"), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js");

function s(e, n) {
  let t = i.Z.get(e.planId);
  r()(null != t, "missing premium subscription plan");
  let o = i.Z.getForSkuAndInterval((0, a.Wz)(l.Si.GUILD), t.interval, t.intervalCount);
  r()(null != o, "missing premium guild plan");
  let s = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
    p = (e.status === c.O0b.CANCELED ? 0 : (0, a.uV)(s)) + n,
    _ = s.filter(e => e.planId !== o.id);
  if (p < 0) throw Error("Invalid adjustment");
  return 0 === p ? _ : [..._, {
    planId: o.id,
    quantity: p
  }]
}
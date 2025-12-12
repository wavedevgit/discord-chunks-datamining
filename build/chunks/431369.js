/** Chunk was on web.js **/
/** chunk id: 431369, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => c
}), require("./415506.js"), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js");

function c(e, t) {
  let n = o.Z.get(e.planId);
  i()(null != n, "missing premium subscription plan");
  let r = o.Z.getForSkuAndInterval((0, a.Wz)(s.Si.GUILD), n.interval, n.intervalCount);
  i()(null != r, "missing premium guild plan");
  let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
    u = (e.status === l.O0b.CANCELED ? 0 : (0, a.uV)(c)) + t,
    d = c.filter(e => e.planId !== r.id);
  if (u < 0) throw Error("Invalid adjustment");
  return 0 === u ? d : [...d, {
    planId: r.id,
    quantity: u
  }]
}
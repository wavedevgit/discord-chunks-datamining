/** Chunk was on web.js **/
/** chunk id: 253390, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
  let n = a.A.get(e.planId);
  i()(null != n, "missing premium subscription plan");
  let r = a.A.getForSkuAndInterval((0, s.mH)(o.pe.GUILD), n.interval, n.intervalCount);
  i()(null != r, "missing premium guild plan");
  let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
    u = (e.status === l.Dmq.CANCELED ? 0 : (0, s.bx)(c)) + t,
    d = c.filter(e => e.planId !== r.id);
  if (u < 0) throw Error("Invalid adjustment");
  return 0 === u ? d : [...d, {
    planId: r.id,
    quantity: u
  }]
}
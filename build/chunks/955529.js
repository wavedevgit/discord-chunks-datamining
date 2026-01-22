/** Chunk was on web.js **/
/** chunk id: 955529, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk97352 = require("./97352.js");

function s() {
  let [e, t] = r.useState(true), [n, s] = r.useState(true), [o, l] = r.useState(true);
  return {
    selectedSkuId: e,
    selectedPlan: (0, i.bG)([a.A], () => null != n ? a.A.get(n) : null),
    setSelectedSkuId: t,
    setSelectedPlanId: s,
    selectedPlanNotification: o,
    setSelectedPlanNotification: l
  }
}
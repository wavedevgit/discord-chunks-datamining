/** Chunk was on web.js **/
/** chunk id: 735521, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk509545 = require("./509545.js");

function o() {
  let [e, t] = r.useState(true), [n, o] = r.useState(true), [s, l] = r.useState(true);
  return {
    selectedSkuId: e,
    selectedPlan: (0, i.e7)([a.Z], () => null != n ? a.Z.get(n) : null),
    setSelectedSkuId: t,
    setSelectedPlanId: o,
    selectedPlanNotification: s,
    setSelectedPlanNotification: l
  }
}
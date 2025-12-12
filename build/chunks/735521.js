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
  let [e, t] = Chunk473749.useState(true), [n, o] = Chunk473749.useState(true), [s, l] = Chunk473749.useState(true);
  return {
    selectedSkuId: module,
    selectedPlan: (0, Chunk442837.e7)([Chunk509545.Z], () => null != require ? Chunk509545.Z.get(require) : null),
    setSelectedSkuId: exports,
    setSelectedPlanId: o,
    selectedPlanNotification: s,
    setSelectedPlanNotification: l
  }
}
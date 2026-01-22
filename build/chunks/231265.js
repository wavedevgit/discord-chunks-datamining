/** Chunk was on web.js **/
/** chunk id: 231265, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => l,
  _: () => c
});
var Chunk40185 = require("./40185.js"),
  Chunk478097 = require("./478097.js"),
  Chunk196042 = require("./196042.js"),
  Chunk412260 = require("./412260.js"),
  Chunk985018 = require("./985018.jsx");
async function l() {
  let e = s.A.bogoPromotion,
    t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
    n = await (0, r.nq)(),
    {
      enabled: o
    } = a.oy.getCurrentConfig({
      location: "153d31_6"
    }, {
      autoTrackExposure: false
    }),
    {
      enabled: l
    } = i.A.getCurrentConfig({
      location: "153d31_7"
    }, {
      autoTrackExposure: t && o && n
    });
  return t && l && o && n
}

function c() {
  return o.intl.string(o.t.iQTfWx)
}
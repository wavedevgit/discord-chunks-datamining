/** Chunk was on 2292 **/
/** chunk id: 231265, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  C: () => o,
  _: () => c
});
var Chunk40185 = require("./40185.js"),
  Chunk478097 = require("./478097.js"),
  Chunk196042 = require("./196042.js"),
  Chunk412260 = require("./412260.js"),
  Chunk985018 = require("./985018.jsx");
async function o() {
  let e = a.A.bogoPromotion,
    t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
    r = await (0, n.nq)(),
    {
      enabled: s
    } = l.oy.getCurrentConfig({
      location: "153d31_6"
    }, {
      autoTrackExposure: false
    }),
    {
      enabled: o
    } = i.A.getCurrentConfig({
      location: "153d31_7"
    }, {
      autoTrackExposure: t && s && r
    });
  return t && o && s && r
}

function c() {
  return s.intl.string(s.t.iQTfWx)
}
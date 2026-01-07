/** Chunk was on web.js **/
/** chunk id: 346497, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => c,
  k: () => l
});
var Chunk367074 = require("./367074.js"),
  Chunk617799 = require("./617799.js"),
  Chunk61196 = require("./61196.js"),
  Chunk1844 = require("./1844.js"),
  Chunk388032 = require("./388032.jsx");
async function l() {
  let e = o.Z.bogoPromotion,
    t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
    n = await (0, r.Qw)(),
    {
      enabled: s
    } = a.Am.getCurrentConfig({
      location: "153d31_6"
    }, {
      autoTrackExposure: false
    }),
    {
      enabled: l
    } = i.Z.getCurrentConfig({
      location: "153d31_7"
    }, {
      autoTrackExposure: t && s && n
    });
  return t && l && s && n
}

function c() {
  return s.intl.string(s.t.iQTfWx)
}
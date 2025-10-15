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
  let e = Chunk1844.Z.bogoPromotion,
    t = null != module && new Date(module.endDate).valueOf() >= Date.now() && new Date(module.startDate).valueOf() <= Date.now(),
    n = await (0, Chunk367074.Qw)(),
    {
      enabled: s
    } = Chunk61196.Am.getCurrentConfig({
      location: "153d31_6"
    }, {
      autoTrackExposure: false
    }),
    {
      enabled: l
    } = Chunk617799.Z.getCurrentConfig({
      location: "153d31_7"
    }, {
      autoTrackExposure: exports && Chunk388032 && require
    });
  return exports && l && Chunk388032 && require
}

function c() {
  return Chunk388032.intl.string(Chunk388032.t.iQTfW1)
}
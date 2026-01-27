/** Chunk was on web.js **/
/** chunk id: 572164, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ao: () => c,
  Et: () => l,
  TD: () => s,
  XT: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk723702 = require("./723702.js"),
  Chunk734066 = require("./734066.js"),
  Chunk274372 = require("./274372.js");

function s() {
  let e = (0, a.Pm)(),
    t = o.A.getState().clipsSettings.clipsEnabled;
  return e && t
}

function l() {
  let e = (0, a.sw)(),
    t = (0, r.bG)([o.A], () => o.A.getState().clipsSettings.clipsEnabled);
  return e && t
}

function c() {
  let e = s(),
    t = (0, i.isWindows)(),
    n = o.A.getState().clipsSettings.decoupledClipsEnabled;
  return e && t && n
}

function u() {
  let e = l(),
    t = (0, i.isWindows)(),
    n = (0, r.bG)([o.A], () => o.A.getState().clipsSettings.decoupledClipsEnabled);
  return e && t && n
}
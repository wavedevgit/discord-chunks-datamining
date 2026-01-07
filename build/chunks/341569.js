/** Chunk was on web.js **/
/** chunk id: 341569, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CY: () => c,
  LI: () => s,
  nq: () => u,
  z8: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk358085 = require("./358085.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js");

function s() {
  let e = (0, a.w2)(),
    t = o.Z.getState().clipsSettings.clipsEnabled;
  return e && t
}

function l() {
  let e = (0, a.w9)(),
    t = (0, r.e7)([o.Z], () => o.Z.getState().clipsSettings.clipsEnabled);
  return e && t
}

function c() {
  let e = s(),
    t = (0, i.isWindows)(),
    n = o.Z.getState().clipsSettings.decoupledClipsEnabled;
  return e && t && n
}

function u() {
  let e = l(),
    t = (0, i.isWindows)(),
    n = (0, r.e7)([o.Z], () => o.Z.getState().clipsSettings.decoupledClipsEnabled);
  return e && t && n
}
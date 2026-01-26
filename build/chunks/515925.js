/** Chunk was on web.js **/
/** chunk id: 515925, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G1: () => l,
  Ih: () => a,
  Oy: () => u,
  kk: () => o,
  t7: () => c,
  tR: () => s,
  uU: () => f,
  xd: () => i.x,
  xy: () => d
});
var Chunk31436 = require("./31436.js"),
  Chunk279234 = require("./279234.js");

function a() {
  return (0, r.Ay)().ExperimentCacher
}

function s(e) {
  var t;
  return null != (t = (0, r.Ay)().BlockedDomainsStore.isBlockedDomain(e)) ? t : null
}

function o(e) {
  (0, r.Ay)().BlockedDomainsStore.startFetchingBlockedDomains(e)
}

function l() {
  return "libdiscore logs are part of the main app logs"
}

function c(e, t) {
  return (0, r.Ay)().rustMultiply(e, t)
}

function u() {
  (0, r.Ay)().crash()
}

function d(e) {
  return (0, r.Ay)().generateLaunchSignature(e)
}

function f() {
  return null
}
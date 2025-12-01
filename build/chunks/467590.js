/** Chunk was on web.js **/
/** chunk id: 467590, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $R: () => u,
  AG: () => l,
  Md: () => a,
  PJ: () => o,
  Sz: () => f,
  Ub: () => d,
  X6: () => Chunk511495.X,
  gi: () => p,
  pf: () => s,
  rs: () => c
});
var Chunk128813 = require("./128813.js"),
  Chunk511495 = require("./511495.js");

function a() {
  return (0, Chunk128813.ZP)().ExperimentCacher
}

function o(e) {
  var t;
  return null != (t = (0, r.ZP)().BlockedDomainsStore.isBlockedDomain(e)) ? t : null
}

function s(e) {
  (0, r.ZP)().BlockedDomainsStore.startFetchingBlockedDomains(e)
}

function l() {
  return "libdiscore logs are part of the main app logs"
}

function c(e, t) {
  return (0, r.ZP)().rustMultiply(e, t)
}

function u() {
  (0, Chunk128813.ZP)().crash()
}

function d(e) {
  return (0, r.ZP)().generateLaunchSignature(e)
}

function f() {
  return null
}

function p() {
  return null
}
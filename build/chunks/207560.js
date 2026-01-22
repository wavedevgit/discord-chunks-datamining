/** Chunk was on web.js **/
/** chunk id: 207560, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SJ: () => f,
  TR: () => d,
  To: () => o,
  aX: () => s,
  d6: () => a,
  fk: () => u,
  u0: () => c,
  yv: () => l
});
var Chunk311907 = require("./311907.js"),
  Chunk81428 = require("./81428.js");

function a(e) {
  return i.A.isFeatureAgeGated(e)
}

function s(e) {
  return (0, r.bG)([i.A], () => i.A.isFeatureAgeGated(e))
}

function o(e) {
  return i.A.isSettingTeenByDefault(e)
}

function l(e) {
  return (0, r.bG)([i.A], () => i.A.isSettingTeenByDefault(e))
}

function c() {
  return i.A.hasAgeGatedFeatures()
}

function u() {
  return (0, r.bG)([i.A], () => i.A.hasAgeGatedFeatures())
}

function d() {
  return i.A.hasTeenDefaults()
}

function f() {
  return (0, r.bG)([i.A], () => i.A.hasTeenDefaults())
}
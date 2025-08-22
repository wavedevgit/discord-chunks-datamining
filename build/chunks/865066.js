/** Chunk was on web.js **/
/** chunk id: 865066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  hi: () => u,
  s2: () => d,
  sU: () => f
});
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594190 = require("./594190.js"),
  Chunk765504 = require("./765504.js"),
  Chunk388032 = require("./388032.jsx");

function l() {
  returnfalse
}

function c() {
  return Chunk765504.Z.getConfig({
    location: "testing"
  }).force
}

function u() {
  return (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.canShowAdminWarning) && !l() && c()
}

function d(e) {
  return e.canShowAdminWarning && !l() && c()
}

function f() {
  (0, Chunk481060.showToast)((0, Chunk481060.createToast)(Chunk388032.intl.string(Chunk388032.t.kQnWb2), Chunk481060.ToastType.SUCCESS))
}
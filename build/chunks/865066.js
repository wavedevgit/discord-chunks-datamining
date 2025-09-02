/** Chunk was on web.js **/
/** chunk id: 865066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  hi: () => d,
  s2: () => f,
  sU: () => _
});
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594190 = require("./594190.js"),
  Chunk998502 = require("./998502.js"),
  Chunk765504 = require("./765504.js"),
  Chunk388032 = require("./388032.jsx");

function c() {
  return Chunk998502.ZP.IsSystemServiceInstalled() || false
}

function u() {
  return (Chunk998502.ZP.CanSystemServiceBeInstalled() || false) && Chunk765504.Z.getConfig({
    location: "testing"
  }).force
}

function d() {
  return (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.canShowAdminWarning) && !c() && u()
}

function f(e) {
  return e.canShowAdminWarning && !c() && u()
}

function _() {
  Chunk998502.ZP.InstallSystemService().then(() => {
    (0, Chunk481060.showToast)((0, Chunk481060.createToast)(Chunk388032.intl.string(Chunk388032.t.kQnWb2), Chunk481060.ToastType.SUCCESS))
  }).catch(e => {
    (0, i.showToast)((0, i.createToast)(l.intl.string(l.t.sdKYCA), i.ToastType.FAILURE)), console.error(e)
  })
}
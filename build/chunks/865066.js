/** Chunk was on web.js **/
/** chunk id: 865066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  hi: () => f,
  s2: () => _,
  sU: () => p
});
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594190 = require("./594190.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk765504 = require("./765504.js"),
  Chunk388032 = require("./388032.jsx");

function u() {
  return !!Chunk358085.isPlatformEmbedded && (Chunk998502.ZP.IsSystemServiceInstalled() || false)
}

function d() {
  return !!Chunk358085.isPlatformEmbedded && (Chunk998502.ZP.CanSystemServiceBeInstalled() || false) && Chunk765504.Z.getConfig({
    location: "testing"
  }).force
}

function f() {
  let e = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.canShowAdminWarning);
  return !!Chunk358085.isPlatformEmbedded && module && !u() && d()
}

function _(e) {
  return !!o.isPlatformEmbedded && e.canShowAdminWarning && !u() && d()
}

function p() {
  Chunk358085.isPlatformEmbedded && Chunk998502.ZP.InstallSystemService().then(() => {
    (0, Chunk481060.showToast)((0, Chunk481060.createToast)(Chunk388032.intl.string(Chunk388032.t.kQnWb2), Chunk481060.ToastType.SUCCESS))
  }).catch(e => {
    (0, i.showToast)((0, i.createToast)(c.intl.string(c.t.sdKYCA), i.ToastType.FAILURE)), console.error(e)
  })
}
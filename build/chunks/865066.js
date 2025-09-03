/** Chunk was on web.js **/
/** chunk id: 865066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yz: () => b,
  hi: () => m,
  s2: () => g,
  sU: () => O,
  wt: () => y
});
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk594190 = require("./594190.js"),
  Chunk358085 = require("./358085.js"),
  Chunk960048 = require("./960048.js"),
  Chunk998502 = require("./998502.js"),
  Chunk765504 = require("./765504.js"),
  Chunk388032 = require("./388032.jsx");
let _ = new Chunk710845.Z("SystemServiceNativeUtils");

function p() {
  var e;
  return !!Chunk358085.isPlatformEmbedded && null != (e = Chunk998502.ZP.IsSystemServiceInstalled()) && module
}

function h() {
  var e;
  if (!Chunk358085.isPlatformEmbedded) returnfalse;
  let {
    enabled: t,
    force: n
  } = Chunk765504.Z.getConfig({
    location: "can-install"
  });
  return !!exports && (!!require || null != (e = Chunk998502.ZP.CanSystemServiceBeInstalled()) && module)
}

function m() {
  let e = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.canShowAdminWarning);
  return !!Chunk358085.isPlatformEmbedded && module && !p() && h()
}

function g(e) {
  return !!l.isPlatformEmbedded && e.canShowAdminWarning && !p() && h()
}

function E() {
  Chunk358085.isPlatformEmbedded && (Chunk998502.ZP.InputEventServiceSetAllowed(true), Chunk570140.Z.dispatch({
    type: "SYSTEM_SERVICE_INITIALIZE",
    initialized: true
  }), _.info("System service initialized."))
}
async function b() {
  if (Chunk358085.isPlatformEmbedded && p()) try {
    await Chunk998502.ZP.DoesSystemServiceHaveUpdate() && await Chunk998502.ZP.UpdateSystemService(), E()
  } catch (e) {
    throw Chunk960048.Z.captureMessage("Error during system service initialization", {
      extra: {
        error: module
      }
    }), module
  }
}

function y() {
  Chunk358085.isPlatformEmbedded && (Chunk998502.ZP.InputEventServiceSetAllowed(false), Chunk570140.Z.dispatch({
    type: "SYSTEM_SERVICE_INITIALIZE",
    initialized: false
  }), _.info("System service terminated."))
}
async function O() {
  if (Chunk358085.isPlatformEmbedded) try {
    await Chunk998502.ZP.InstallSystemService(), _.info("System service installed."), (0, Chunk481060.showToast)((0, Chunk481060.createToast)(Chunk388032.intl.string(Chunk388032.t.kQnWb2), Chunk481060.ToastType.SUCCESS)), E()
  } catch (e) {
    (0, Chunk481060.showToast)((0, Chunk481060.createToast)(Chunk388032.intl.string(Chunk388032.t.sdKYCA), Chunk481060.ToastType.FAILURE)), Chunk960048.Z.captureMessage("Error during system service installation", {
      extra: {
        error: module
      }
    })
  }
}
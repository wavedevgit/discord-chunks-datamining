/** Chunk was on web.js **/
/** chunk id: 865066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yz: () => y,
  hi: () => g,
  s2: () => E,
  sU: () => I,
  wt: () => O
}), require("./415506.js");
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
let _ = new Chunk710845.Z("SystemServiceNativeUtils"),
  p = false;

function h() {
  var e;
  return !!Chunk358085.isPlatformEmbedded && null != (e = Chunk998502.ZP.IsSystemServiceInstalled()) && module
}

function m() {
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

function g() {
  let e = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.canShowAdminWarning);
  return !!Chunk358085.isPlatformEmbedded && module && !h() && m()
}

function E(e) {
  return !!l.isPlatformEmbedded && e.canShowAdminWarning && !h() && m()
}

function b() {
  Chunk358085.isPlatformEmbedded && (Chunk998502.ZP.InputEventServiceSetAllowed(true), Chunk570140.Z.dispatch({
    type: "SYSTEM_SERVICE_INITIALIZE",
    initialized: true
  }), _.info("System service initialized."))
}
async function y() {
  if (Chunk358085.isPlatformEmbedded && h()) try {
    await Chunk998502.ZP.DoesSystemServiceHaveUpdate() && await Chunk998502.ZP.UpdateSystemService(), b()
  } catch (e) {
    throw Chunk960048.Z.captureMessage("Error during system service initialization", {
      extra: {
        error: module
      }
    }), _.error("System service initialization failed", module), module
  }
}

function O() {
  Chunk358085.isPlatformEmbedded && (Chunk998502.ZP.InputEventServiceSetAllowed(false), Chunk570140.Z.dispatch({
    type: "SYSTEM_SERVICE_INITIALIZE",
    initialized: false
  }), _.info("System service terminated."))
}

function v(e) {
  if (e instanceof Error) try {
    let t = JSON.parse(e.message);
    if (null == t.error_code || null == t.error_message) return;
    return t
  } catch (e) {
    return
  }
}
async function I() {
  if (Chunk358085.isPlatformEmbedded) try {
    await Chunk998502.ZP.InstallSystemService(), _.info("System service installed."), (0, Chunk481060.showToast)((0, Chunk481060.createToast)(Chunk388032.intl.string(Chunk388032.t.kQnWb2), Chunk481060.ToastType.SUCCESS)), b()
  } catch (t) {
    let e = v(exports);
    if (null == module && exports instanceof Error) {
      (0, Chunk481060.showToast)((0, Chunk481060.createToast)(Chunk388032.intl.formatToPlainString(Chunk388032.t.sdKYCA, {
        error: exports.message
      }), Chunk481060.ToastType.FAILURE)), Chunk960048.Z.captureMessage("Unknown error during system service installation", {
        extra: {
          error: exports
        }
      }), _.error("System service install failed.", exports);
      return
    }
    if (null == module) {
      (0, Chunk481060.showToast)((0, Chunk481060.createToast)(Chunk388032.intl.formatToPlainString(Chunk388032.t.sdKYCA, {
        error: exports
      }), Chunk481060.ToastType.FAILURE)), Chunk960048.Z.captureMessage("Really unknown error during system service installation", {
        extra: {
          error: exports
        }
      }), _.error("System service install failed.", exports);
      return
    }
    if (module.error_code === p) {
      (0, Chunk481060.showToast)((0, Chunk481060.createToast)(Chunk388032.intl.string(Chunk388032.t.xu9k8P), Chunk481060.ToastType.FAILURE)), _.error("User cancelled system service install.");
      return
    }(0, Chunk481060.showToast)((0, Chunk481060.createToast)(Chunk388032.intl.formatToPlainString(Chunk388032.t.sdKYCA, {
      error: module.error_message
    }), Chunk481060.ToastType.FAILURE)), Chunk960048.Z.captureMessage("Error during system service installation", {
      extra: {
        error: module
      }
    }), _.error("System service install failed.", module)
  }
}
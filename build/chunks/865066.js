/** Chunk was on web.js **/
/** chunk id: 865066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yz: () => v,
  hi: () => b,
  s2: () => y,
  sU: () => S,
  wt: () => I
}), require("./415506.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk594190 = require("./594190.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk960048 = require("./960048.js"),
  Chunk998502 = require("./998502.js"),
  Chunk765504 = require("./765504.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let h = new Chunk710845.Z("SystemServiceNativeUtils"),
  m = false;

function g() {
  var e;
  return !!Chunk358085.isPlatformEmbedded && null != (e = Chunk998502.ZP.IsSystemServiceInstalled()) && module
}

function E() {
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

function b() {
  let e = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.canShowAdminWarning);
  return !!Chunk358085.isPlatformEmbedded && module && !g() && E()
}

function y(e) {
  return !!c.isPlatformEmbedded && e.canShowAdminWarning && !g() && E()
}

function O(e) {
  c.isPlatformEmbedded && (d.ZP.InputEventServiceSetAllowed(true), a.Z.dispatch({
    type: "SYSTEM_SERVICE_INITIALIZE",
    initialized: true,
    modules: ["input-service"]
  }), h.info("System service initialized."), l.default.track(_.rMx.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, {
    success: true,
    source: e,
    modules: ["input-service"]
  }))
}
async function v(e) {
  if (c.isPlatformEmbedded && g()) try {
    await d.ZP.DoesSystemServiceHaveUpdate() && await d.ZP.UpdateSystemService(), O(e)
  } catch (e) {
    throw u.Z.captureMessage("Error during system service initialization", {
      extra: {
        error: e
      }
    }), h.error("System service initialization failed", e), e
  }
}

function I() {
  Chunk358085.isPlatformEmbedded && (Chunk998502.ZP.InputEventServiceSetAllowed(false), Chunk570140.Z.dispatch({
    type: "SYSTEM_SERVICE_INITIALIZE",
    initialized: false,
    modules: ["input-service"]
  }), h.info("System service terminated."))
}

function T(e) {
  if (e instanceof Error) try {
    let t = JSON.parse(e.message);
    if (null == t.error_code || null == t.error_message) return;
    return t
  } catch (e) {
    return
  }
}
async function S(e) {
  if (c.isPlatformEmbedded) try {
    await d.ZP.InstallSystemService(), h.info("System service installed."), l.default.track(_.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
      success: true,
      source: e
    }), (0, i.showToast)((0, i.createToast)(p.intl.string(p.t.kQnWb2), i.ToastType.SUCCESS)), O("after-install")
  } catch (n) {
    let t = T(n);
    if (null == t && n instanceof Error) {
      (0, i.showToast)((0, i.createToast)(p.intl.formatToPlainString(p.t.sdKYCA, {
        error: n.message
      }), i.ToastType.FAILURE)), u.Z.captureMessage("Unknown error during system service installation", {
        extra: {
          error: n
        }
      }), h.error("System service install failed.", n), l.default.track(_.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
        success: false,
        source: e,
        error_message: n.message
      });
      return
    }
    if (null == t) {
      (0, i.showToast)((0, i.createToast)(p.intl.formatToPlainString(p.t.sdKYCA, {
        error: n
      }), i.ToastType.FAILURE)), u.Z.captureMessage("Really unknown error during system service installation", {
        extra: {
          error: n
        }
      }), h.error("System service install failed.", n), l.default.track(_.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
        success: false,
        source: e,
        error_message: null == n ? true : n.toString()
      });
      return
    }
    if (l.default.track(_.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
        success: false,
        source: e,
        error_code: t.error_code,
        error_message: t.error_message
      }), t.error_code === m) {
      (0, i.showToast)((0, i.createToast)(p.intl.string(p.t.xu9k8P), i.ToastType.FAILURE)), h.error("User cancelled system service install.");
      return
    }(0, i.showToast)((0, i.createToast)(p.intl.formatToPlainString(p.t.sdKYCA, {
      error: t.error_message
    }), i.ToastType.FAILURE)), u.Z.captureMessage("Error during system service installation", {
      extra: {
        error: t
      }
    }), h.error("System service install failed.", t)
  }
}
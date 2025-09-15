/** Chunk was on web.js **/
/** chunk id: 865066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yz: () => I,
  hi: () => y,
  s2: () => O,
  sU: () => C,
  wt: () => T
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
    enabled: t
  } = Chunk765504.Z.getConfig({
    location: "can-install"
  });
  return !!exports && null != (e = Chunk998502.ZP.CanSystemServiceBeInstalled()) && module
}

function b() {
  var e;
  let {
    enabled: t
  } = Chunk765504.Z.getConfig({
    location: "can-install-hook"
  });
  return !!Chunk358085.isPlatformEmbedded && !!exports && null != (e = Chunk998502.ZP.CanSystemServiceBeInstalled()) && module
}

function y() {
  let e = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.canShowAdminWarning),
    t = b();
  return !!Chunk358085.isPlatformEmbedded && module && !g() && exports
}

function O(e) {
  return !!c.isPlatformEmbedded && e.canShowAdminWarning && !g() && E()
}

function v(e) {
  c.isPlatformEmbedded && (d.ZP.InputEventServiceSetStatusCallback(e => {
    h.info("Keybinds helper status changed", e)
  }), d.ZP.InputEventServiceSetAllowed(true), a.Z.dispatch({
    type: "SYSTEM_SERVICE_INITIALIZE",
    initialized: true,
    modules: ["input-service"]
  }), h.info("System service initialized."), l.default.track(_.rMx.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, {
    success: true,
    source: e,
    modules: ["input-service"]
  }))
}
async function I(e) {
  if (c.isPlatformEmbedded && g()) try {
    await d.ZP.DoesSystemServiceHaveUpdate() && await d.ZP.UpdateSystemService(), v(e)
  } catch (e) {
    throw u.Z.captureMessage("Error during system service initialization", {
      extra: {
        error: e
      }
    }), h.error("System service initialization failed", e), e
  }
}

function T() {
  Chunk358085.isPlatformEmbedded && (Chunk998502.ZP.InputEventServiceSetAllowed(false), Chunk570140.Z.dispatch({
    type: "SYSTEM_SERVICE_INITIALIZE",
    initialized: false,
    modules: ["input-service"]
  }), h.info("System service terminated."))
}

function S(e) {
  if (e instanceof Error) try {
    let t = JSON.parse(e.message);
    if (null == t.error_code || null == t.error_message) return;
    return t
  } catch (e) {
    return
  }
}

function A(e, t) {
  t && (0, i.showToast)(e)
}
async function C(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  if (c.isPlatformEmbedded && d.ZP.CanSystemServiceBeInstalled()) try {
    await d.ZP.InstallSystemService(), h.info("System service installed."), l.default.track(_.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
      success: true,
      source: e
    }), A((0, i.createToast)(p.intl.string(p.t.kQnWb2), i.ToastType.SUCCESS), t), v("after-install")
  } catch (r) {
    let n = S(r);
    if (null == n && r instanceof Error) {
      A((0, i.createToast)(p.intl.formatToPlainString(p.t.sdKYCA, {
        error: r.message
      }), i.ToastType.FAILURE), t), u.Z.captureMessage("Unknown error during system service installation", {
        extra: {
          error: r
        }
      }), h.error("System service install failed.", r), l.default.track(_.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
        success: false,
        source: e,
        error_message: r.message
      });
      return
    }
    if (null == n) {
      A((0, i.createToast)(p.intl.formatToPlainString(p.t.sdKYCA, {
        error: r
      }), i.ToastType.FAILURE), t), u.Z.captureMessage("Really unknown error during system service installation", {
        extra: {
          error: r
        }
      }), h.error("System service install failed.", r), l.default.track(_.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
        success: false,
        source: e,
        error_message: null == r ? true : r.toString()
      });
      return
    }
    if (l.default.track(_.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
        success: false,
        source: e,
        error_code: n.error_code,
        error_message: n.error_message
      }), n.error_code === m) {
      A((0, i.createToast)(p.intl.string(p.t.xu9k8P), i.ToastType.FAILURE), t), h.error("User cancelled system service install.");
      return
    }
    A((0, i.createToast)(p.intl.formatToPlainString(p.t.sdKYCA, {
      error: n.error_message
    }), i.ToastType.FAILURE), t), u.Z.captureMessage("Error during system service installation", {
      extra: {
        error: n
      }
    }), h.error("System service install failed.", n)
  }
}
/** Chunk was on web.js **/
/** chunk id: 865066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O9: () => b,
  OK: () => P,
  Yz: () => I,
  aL: () => g,
  hi: () => y,
  s2: () => O,
  sU: () => N,
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
  Chunk517110 = require("./517110.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let m = new Chunk710845.Z("SystemServiceNativeUtils"),
  h = false;

function g() {
  var e;
  return !!Chunk358085.isPlatformEmbedded && null != (e = Chunk998502.ZP.IsSystemServiceInstalled()) && module
}

function E() {
  return !!Chunk358085.isPlatformEmbedded && true === Chunk998502.ZP.CanSystemServiceBeInstalled()
}

function b() {
  var e;
  return !!Chunk358085.isPlatformEmbedded && null != (e = Chunk998502.ZP.CanSystemServiceBeInstalled()) && module
}

function y() {
  let e = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.canShowAdminWarning),
    t = b();
  return !!Chunk358085.isPlatformEmbedded && module && !g() && exports
}

function O(e) {
  return !!c.isPlatformEmbedded && e.canShowAdminWarning && !g() && E()
}

function v(e, t, n) {
  (0, f.a)(e, t), "running" === t.state ? (m.info("".concat(e, " initialized.")), l.default.track(p.rMx.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, {
    success: true,
    source: n,
    modules: [e]
  })) : "failure" === t.state && (m.info("".concat(e, " failed to initialize."), t), l.default.track(p.rMx.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, {
    success: false,
    source: n,
    modules: [e]
  }))
}

function S(e) {
  c.isPlatformEmbedded && (d.ZP.InputEventServiceSetStatusCallback(t => {
    v("input-service", t, e)
  }), d.ZP.InputEventServiceSetAllowed(true), d.ZP.ToolServiceSetStatusCallback(t => {
    v("tool-service", t, e)
  }), d.ZP.ToolServiceSetAllowed(true))
}
async function I(e) {
  if (c.isPlatformEmbedded && g()) try {
    await d.ZP.DoesSystemServiceHaveUpdate() && await d.ZP.UpdateSystemService(), S(e)
  } catch (e) {
    throw u.Z.captureMessage("Error during system service initialization", {
      extra: {
        error: e
      }
    }), m.error("System service initialization failed", e), e
  }
}
async function T() {
  Chunk358085.isPlatformEmbedded && (Chunk998502.ZP.InputEventServiceSetAllowed(false), Chunk998502.ZP.ToolServiceSetAllowed(false), await Chunk570140.Z.dispatch({
    type: "SYSTEM_SERVICE_INITIALIZE",
    status: {
      state: "unknown"
    },
    modules: ["input-service"]
  }), await Chunk570140.Z.dispatch({
    type: "SYSTEM_SERVICE_INITIALIZE",
    status: {
      state: "unknown"
    },
    modules: ["tool-service"]
  }), m.info("System service terminated."))
}

function A(e) {
  if (e instanceof Error) try {
    let t = JSON.parse(e.message);
    if (null == t.error_code || null == t.error_message) return;
    return t
  } catch (e) {
    return
  }
}

function C(e, t) {
  t && (0, i.showToast)(e)
}
async function N(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  if (c.isPlatformEmbedded && d.ZP.CanSystemServiceBeInstalled()) try {
    await d.ZP.InstallSystemService(), m.info("System service installed."), l.default.track(p.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
      success: true,
      source: e
    }), C((0, i.createToast)(_.intl.string(_.t.kQnWby), i.ToastType.SUCCESS), t), S("after-install")
  } catch (r) {
    let n = A(r);
    if (null == n && r instanceof Error) {
      C((0, i.createToast)(_.intl.formatToPlainString(_.t.sdKYCE, {
        error: r.message
      }), i.ToastType.FAILURE), t), u.Z.captureMessage("Unknown error during system service installation", {
        extra: {
          error: r
        }
      }), m.error("System service install failed.", r), l.default.track(p.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
        success: false,
        source: e,
        error_message: r.message
      });
      return
    }
    if (null == n) {
      C((0, i.createToast)(_.intl.formatToPlainString(_.t.sdKYCE, {
        error: r
      }), i.ToastType.FAILURE), t), u.Z.captureMessage("Really unknown error during system service installation", {
        extra: {
          error: r
        }
      }), m.error("System service install failed.", r), l.default.track(p.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
        success: false,
        source: e,
        error_message: null == r ? true : r.toString()
      });
      return
    }
    if (l.default.track(p.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
        success: false,
        source: e,
        error_code: n.error_code,
        error_message: n.error_message
      }), n.error_code === h) {
      C((0, i.createToast)(_.intl.string(_.t.xu9k8G), i.ToastType.FAILURE), t), m.error("User cancelled system service install.");
      return
    }
    C((0, i.createToast)(_.intl.formatToPlainString(_.t.sdKYCE, {
      error: n.error_message
    }), i.ToastType.FAILURE), t), u.Z.captureMessage("Error during system service installation", {
      extra: {
        error: n
      }
    }), m.error("System service install failed.", n)
  }
}
async function P(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  if (c.isPlatformEmbedded) try {
    await T(), await d.ZP.UninstallSystemService(), m.info("System service uninstalled."), C((0, i.createToast)(_.intl.string(_.t.dThS5H), i.ToastType.SUCCESS), t), l.default.track(p.rMx.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
      success: true,
      source: e
    })
  } catch (r) {
    let n = A(r);
    if (null == n && r instanceof Error) {
      C((0, i.createToast)(_.intl.formatToPlainString(_.t.oHh3oI, {
        error: r.message
      }), i.ToastType.FAILURE), t), u.Z.captureMessage("Unknown error during system service uninstallation", {
        extra: {
          error: r
        }
      }), m.error("System service uninstall failed.", r), l.default.track(p.rMx.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
        success: false,
        source: e,
        error_message: r.message
      });
      return
    }
    if (null == n) {
      C((0, i.createToast)(_.intl.formatToPlainString(_.t.oHh3oI, {
        error: r
      }), i.ToastType.FAILURE), t), u.Z.captureMessage("Really unknown error during system service uninstallation", {
        extra: {
          error: r
        }
      }), m.error("System service uninstall failed.", r), l.default.track(p.rMx.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
        success: false,
        source: e,
        error_message: null == r ? true : r.toString()
      });
      return
    }
    l.default.track(p.rMx.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
      success: false,
      source: e,
      error_code: n.error_code,
      error_message: n.error_message
    }), C((0, i.createToast)(_.intl.formatToPlainString(_.t.oHh3oI, {
      error: n.error_message
    }), i.ToastType.FAILURE), t), u.Z.captureMessage("Error during system service uninstallation", {
      extra: {
        error: n
      }
    }), m.error("System service uninstall failed.", n)
  }
}
/** Chunk was on web.js **/
/** chunk id: 865066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O9: () => y,
  OK: () => R,
  Yz: () => T,
  aL: () => E,
  hi: () => O,
  s2: () => v,
  sU: () => N,
  wt: () => S
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
  Chunk517110 = require("./517110.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let m = new Chunk710845.Z("SystemServiceNativeUtils"),
  g = false;

function E() {
  var e;
  return !!Chunk358085.isPlatformEmbedded && null != (e = Chunk998502.ZP.IsSystemServiceInstalled()) && module
}

function b() {
  if (!Chunk358085.isPlatformEmbedded || true !== Chunk998502.ZP.CanSystemServiceBeInstalled()) returnfalse;
  let {
    enabled: e
  } = Chunk765504.Z.getConfig({
    location: "can-install"
  });
  return module
}

function y() {
  var e;
  let t = !!Chunk358085.isPlatformEmbedded && null != (e = Chunk998502.ZP.CanSystemServiceBeInstalled()) && module,
    n = exports ? "can-install-hook" : "can-install-hook-disabled",
    {
      enabled: r
    } = Chunk765504.Z.useConfig({
      location: require
    });
  return !!exports && Chunk442837
}

function O() {
  let e = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.canShowAdminWarning),
    t = y();
  return !!Chunk358085.isPlatformEmbedded && module && !E() && exports
}

function v(e) {
  return !!c.isPlatformEmbedded && e.canShowAdminWarning && !E() && b()
}

function I(e) {
  c.isPlatformEmbedded && (d.ZP.InputEventServiceSetStatusCallback(t => {
    (0, _.z)(t), "running" === t.state ? (m.info("System service initialized."), l.default.track(p.rMx.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, {
      success: true,
      source: e,
      modules: ["input-service"]
    })) : "failure" === t.state && (m.info("System service failed to initialize.", t), l.default.track(p.rMx.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, {
      success: false,
      source: e,
      modules: ["input-service"]
    }))
  }), d.ZP.InputEventServiceSetAllowed(true))
}
async function T(e) {
  if (c.isPlatformEmbedded && E()) try {
    await d.ZP.DoesSystemServiceHaveUpdate() && await d.ZP.UpdateSystemService(), I(e)
  } catch (e) {
    throw u.Z.captureMessage("Error during system service initialization", {
      extra: {
        error: e
      }
    }), m.error("System service initialization failed", e), e
  }
}
async function S() {
  Chunk358085.isPlatformEmbedded && (Chunk998502.ZP.InputEventServiceSetAllowed(false), await Chunk570140.Z.dispatch({
    type: "SYSTEM_SERVICE_INITIALIZE",
    inputServiceStatus: {
      state: "unknown"
    },
    modules: ["input-service"]
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
    }), C((0, i.createToast)(h.intl.string(h.t.kQnWby), i.ToastType.SUCCESS), t), I("after-install")
  } catch (r) {
    let n = A(r);
    if (null == n && r instanceof Error) {
      C((0, i.createToast)(h.intl.formatToPlainString(h.t.sdKYCE, {
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
      C((0, i.createToast)(h.intl.formatToPlainString(h.t.sdKYCE, {
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
      }), n.error_code === g) {
      C((0, i.createToast)(h.intl.string(h.t.xu9k8G), i.ToastType.FAILURE), t), m.error("User cancelled system service install.");
      return
    }
    C((0, i.createToast)(h.intl.formatToPlainString(h.t.sdKYCE, {
      error: n.error_message
    }), i.ToastType.FAILURE), t), u.Z.captureMessage("Error during system service installation", {
      extra: {
        error: n
      }
    }), m.error("System service install failed.", n)
  }
}
async function R(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  if (c.isPlatformEmbedded) try {
    await S(), await d.ZP.UninstallSystemService(), m.info("System service uninstalled."), C((0, i.createToast)(h.intl.string(h.t.dThS5H), i.ToastType.SUCCESS), t), l.default.track(p.rMx.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
      success: true,
      source: e
    })
  } catch (r) {
    let n = A(r);
    if (null == n && r instanceof Error) {
      C((0, i.createToast)(h.intl.formatToPlainString(h.t.oHh3oI, {
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
      C((0, i.createToast)(h.intl.formatToPlainString(h.t.oHh3oI, {
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
    }), C((0, i.createToast)(h.intl.formatToPlainString(h.t.oHh3oI, {
      error: n.error_message
    }), i.ToastType.FAILURE), t), u.Z.captureMessage("Error during system service uninstallation", {
      extra: {
        error: n
      }
    }), m.error("System service uninstall failed.", n)
  }
}
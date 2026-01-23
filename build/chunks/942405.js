/** Chunk was on web.js **/
/** chunk id: 942405, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AV: () => T,
  NP: () => O,
  TC: () => E,
  Tn: () => S,
  XQ: () => b,
  sL: () => w,
  yA: () => v,
  z8: () => R
}), require("./65821.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk15285 = require("./15285.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk728458 = require("./728458.js"),
  Chunk837921 = require("./837921.js"),
  Chunk309576 = require("./309576.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let h = new Chunk626584.A("SystemServiceNativeUtils"),
  m = false,
  g = 0;

function E() {
  var e;
  return !!c.isPlatformEmbedded && null != (e = d.Ay.IsSystemServiceInstalled()) && e
}

function y() {
  return !!c.isPlatformEmbedded && true === d.Ay.CanSystemServiceBeInstalled()
}

function b() {
  var e;
  return !!c.isPlatformEmbedded && null != (e = d.Ay.CanSystemServiceBeInstalled()) && e
}

function O() {
  let e = (0, r.bG)([o.Ay], () => o.Ay.canShowAdminWarning),
    t = b();
  return !!c.isPlatformEmbedded && e && !E() && t
}

function v(e) {
  return !!c.isPlatformEmbedded && e.canShowAdminWarning && !E() && y()
}

function A(e, t, n) {
  (0, f.H)(e, t), "running" === t.state ? (h.info("".concat(e, " initialized.")), l.default.track(p.HAw.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, {
    success: true,
    source: n,
    modules: [e]
  })) : "failure" === t.state && (h.info("".concat(e, " failed to initialize."), t), l.default.track(p.HAw.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, {
    success: false,
    source: n,
    modules: [e]
  }))
}

function I(e) {
  c.isPlatformEmbedded && (d.Ay.InputEventServiceSetStatusCallback(t => {
    A("input-service", t, e)
  }), d.Ay.InputEventServiceSetAllowed(true), d.Ay.ToolServiceSetStatusCallback(t => {
    A("tool-service", t, e)
  }), d.Ay.ToolServiceSetAllowed(true))
}
async function S(e) {
  if (c.isPlatformEmbedded && E()) try {
    await d.Ay.DoesSystemServiceHaveUpdate() && await d.Ay.UpdateSystemService(), I(e)
  } catch (e) {
    throw u.A.captureMessage("Error during system service initialization", {
      extra: {
        error: e
      }
    }), h.error("System service initialization failed", e), e
  }
}
async function T() {
  c.isPlatformEmbedded && (d.Ay.InputEventServiceSetAllowed(false), d.Ay.ToolServiceSetAllowed(false), await a.h.dispatch({
    type: "SYSTEM_SERVICE_INITIALIZE",
    status: {
      state: "unknown"
    },
    modules: ["input-service"]
  }), await a.h.dispatch({
    type: "SYSTEM_SERVICE_INITIALIZE",
    status: {
      state: "unknown"
    },
    modules: ["tool-service"]
  }), h.info("System service terminated."))
}

function C(e) {
  if (e instanceof Error) try {
    let t = JSON.parse(e.message);
    if (null == t.error_code || null == t.error_message) return;
    return t
  } catch (e) {
    return
  }
}

function N(e, t) {
  t && (0, i.showToast)(e)
}
async function w(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  if (c.isPlatformEmbedded && d.Ay.CanSystemServiceBeInstalled()) try {
    await d.Ay.InstallSystemService(), h.info("System service installed."), l.default.track(p.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
      success: true,
      source: e
    }), N((0, i.createToast)(_.intl.string(_.t.kQnWby), i.ToastType.SUCCESS), t), I("after-install")
  } catch (r) {
    let n = C(r);
    if (null == n && r instanceof Error) {
      N((0, i.createToast)(_.intl.formatToPlainString(_.t.sdKYCE, {
        error: r.message
      }), i.ToastType.FAILURE), t), u.A.captureMessage("Unknown error during system service installation", {
        extra: {
          error: r
        }
      }), h.error("System service install failed.", r), l.default.track(p.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
        success: false,
        source: e,
        error_message: r.message
      });
      return
    }
    if (null == n) {
      N((0, i.createToast)(_.intl.formatToPlainString(_.t.sdKYCE, {
        error: r
      }), i.ToastType.FAILURE), t), u.A.captureMessage("Really unknown error during system service installation", {
        extra: {
          error: r
        }
      }), h.error("System service install failed.", r), l.default.track(p.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
        success: false,
        source: e,
        error_message: null == r ? true : r.toString()
      });
      return
    }
    if (l.default.track(p.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
        success: false,
        source: e,
        error_code: n.error_code,
        error_message: n.error_message
      }), n.error_code === m) {
      N((0, i.createToast)(_.intl.string(_.t.xu9k8G), i.ToastType.FAILURE), t), h.error("User cancelled system service install.");
      return
    }
    N((0, i.createToast)(_.intl.formatToPlainString(_.t.sdKYCE, {
      error: n.error_message
    }), i.ToastType.FAILURE), t), n.error_code !== g && u.A.captureMessage("Error during system service installation", {
      extra: {
        error: n
      }
    }), h.error("System service install failed.", n)
  }
}
async function R(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  if (c.isPlatformEmbedded) try {
    await T(), await d.Ay.UninstallSystemService(), h.info("System service uninstalled."), N((0, i.createToast)(_.intl.string(_.t.dThS5H), i.ToastType.SUCCESS), t), l.default.track(p.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
      success: true,
      source: e
    })
  } catch (r) {
    let n = C(r);
    if (null == n && r instanceof Error) {
      N((0, i.createToast)(_.intl.formatToPlainString(_.t.oHh3oI, {
        error: r.message
      }), i.ToastType.FAILURE), t), u.A.captureMessage("Unknown error during system service uninstallation", {
        extra: {
          error: r
        }
      }), h.error("System service uninstall failed.", r), l.default.track(p.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
        success: false,
        source: e,
        error_message: r.message
      });
      return
    }
    if (null == n) {
      N((0, i.createToast)(_.intl.formatToPlainString(_.t.oHh3oI, {
        error: r
      }), i.ToastType.FAILURE), t), u.A.captureMessage("Really unknown error during system service uninstallation", {
        extra: {
          error: r
        }
      }), h.error("System service uninstall failed.", r), l.default.track(p.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
        success: false,
        source: e,
        error_message: null == r ? true : r.toString()
      });
      return
    }
    l.default.track(p.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
      success: false,
      source: e,
      error_code: n.error_code,
      error_message: n.error_message
    }), N((0, i.createToast)(_.intl.formatToPlainString(_.t.oHh3oI, {
      error: n.error_message
    }), i.ToastType.FAILURE), t), u.A.captureMessage("Error during system service uninstallation", {
      extra: {
        error: n
      }
    }), h.error("System service uninstall failed.", n)
  }
}
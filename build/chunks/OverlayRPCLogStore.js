/** Chunk was on web.js **/
/** chunk id: 996283, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  VD: () => h,
  sU: () => p
}), require("./321073.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk118356 = require("./118356.js"),
  Chunk73153 = require("./73153.js"),
  Chunk635731 = require("./635731.js"),
  Chunk41984 = require("./41984.js"),
  Chunk127242 = require("./127242.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Chunk118356.Vy("LegacyOverlayClient"),
  f = 1e3,
  p = 1e4,
  _ = 2e4,
  h = "Heartbeat",
  m = new Chunk635731.A(f),
  g = null,
  E = null;

function y(e) {
  let {
    level: t,
    message: n,
    timestamp: r,
    context: i
  } = e;
  if (!c.A.hasRenderDebugMode(l.x7.LegacyOverlayLogging) || __OVERLAY__) returnfalse;
  if (m.push({
      level: t,
      message: n,
      timestamp: r,
      context: i
    }), n === h && (g = Date.now()), n !== h) switch (t) {
    case "error":
    case "crash":
      d.error(n);
      break;
    case "warn":
      d.warn(n);
      break;
    case "info":
      d.info(n);
      break;
    default:
      d.log(n)
  }
  returntrue
}

function b() {
  null == E && (E = setInterval(() => {
    if (null != g) {
      let e = Date.now() - g;
      e > _ && (d.warn("No heartbeat for ".concat(Math.round(e / 1e3), "s - overlay may be unresponsive")), g = null)
    }
  }, p))
}

function O() {
  null != E && (clearInterval(E), E = null)
}

function v(e) {
  let {
    enabled: t,
    mode: n
  } = e;
  return n === l.x7.LegacyOverlayLogging && (t ? b() : O()), false
}

function A(e) {
  let {
    logs: t
  } = e;
  return t.forEach(e => y(e)), true
}
class I extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.A), c.A.hasRenderDebugMode(l.x7.LegacyOverlayLogging) && b()
  }
  getAllLogs() {
    return m
  }
  getLogsByLevel(e) {
    return m.filter(t => t.level === e)
  }
  getErrorLogs() {
    return m.filter(e => "error" === e.level || "crash" === e.level)
  }
}
u(I, "displayName", "OverlayRPCLogStore"), new I(Chunk73153.h, {
  OVERLAY_RENDER_DEBUG_MODE: v,
  OVERLAY_ADD_LOGS_BATCH: A
})
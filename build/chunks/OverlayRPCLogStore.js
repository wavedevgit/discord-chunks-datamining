/** Chunk was on web.js **/
/** chunk id: 951806, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F0: () => m,
  bk: () => p
}), require("./539854.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk579092 = require("./579092.js"),
  Chunk570140 = require("./570140.js"),
  Chunk188274 = require("./188274.js"),
  Chunk837268 = require("./837268.js"),
  Chunk338949 = require("./338949.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Chunk579092.Yd("LegacyOverlayClient"),
  f = 1e3,
  p = 1e4,
  _ = 2e4,
  m = "Heartbeat",
  h = new Chunk188274.Z(f),
  g = null,
  E = null;

function b(e) {
  let {
    level: t,
    message: n,
    timestamp: r,
    context: i
  } = e;
  if (!c.Z.hasRenderDebugMode(l.GO.LegacyOverlayLogging) || __OVERLAY__) returnfalse;
  if (h.push({
      level: t,
      message: n,
      timestamp: r,
      context: i
    }), n === m && (g = Date.now()), n !== m) switch (t) {
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

function y() {
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
  return n === l.GO.LegacyOverlayLogging && (t ? y() : O()), false
}

function S(e) {
  let {
    logs: t
  } = e;
  return t.forEach(e => b(e)), true
}
class I extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(c.Z), c.Z.hasRenderDebugMode(l.GO.LegacyOverlayLogging) && y()
  }
  getAllLogs() {
    return h
  }
  getLogsByLevel(e) {
    return h.filter(t => t.level === e)
  }
  getErrorLogs() {
    return h.filter(e => "error" === e.level || "crash" === e.level)
  }
}
u(I, "displayName", "OverlayRPCLogStore"), new I(Chunk570140.Z, {
  OVERLAY_RENDER_DEBUG_MODE: v,
  OVERLAY_ADD_LOGS_BATCH: S
})
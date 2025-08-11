/** Chunk was on web.js **/
/** chunk id: 427860, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C7: () => a,
  JC: () => h,
  l6: () => s
}), require("./539854.js"), require("./415506.js"), require("./388685.js");
var Chunk759174 = require("./759174.js"),
  Chunk709054 = require("./709054.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var a = function(e) {
    return e.NativeOOP = "native_oop", e.NativeLegacy = "native_legacy", e.OOPModule = "oop_module", e.LegacyModule = "legacy_module", e.Renderer = "renderer", e
  }({}),
  s = function(e) {
    return e.Info = "info", e.Error = "error", e.Warning = "warn", e
  }({});

function l(e) {
  let t = "nativeId" in e,
    n = "pid" in e;
  return !t && !n
}

function c(e) {
  return l(e) ? "native-".concat(e.id) : null != e.nativeId ? "native-".concat(e.nativeId) : null
}

function u(e) {
  var t, n;
  let r = [e.type, null != (n = null == (t = e.pid) ? true : t.toString()) ? n : "null-pid"],
    i = c(e);
  return null != i && r.push(i), r
}

function d(e) {
  return -e.timestamp
}

function f(e, t, n) {
  var r;
  let o = i.default.fromTimestamp(Math.floor(e.timestamp));
  return {
    id: o,
    key: o,
    nativeId: Number(e.id),
    timestamp: e.timestamp,
    name: e.name,
    data: e.data,
    type: t,
    pid: n,
    logType: "info",
    stack: null != (r = Error().stack) ? r : ""
  }
}

function _() {
  return performance.timeOrigin + performance.now()
}
class p {
  addBreadcrumb(e) {
    return this.breadcrumbs.set(e.id, e)
  }
  getLatestBreadcrumbId() {
    return this.maxNativeBreadcrumbId
  }
  addNativeBreadcrumb(e, t, n) {
    let r = c(e);
    if (null == r) throw Error("Native breadcrumb has no native id");
    if (this.breadcrumbs.size(r) > 0) returnfalse;
    this.maxNativeBreadcrumbId = Math.max(this.maxNativeBreadcrumbId, Number(e.id));
    let i = f(e, t, n);
    return this.addBreadcrumb(i)
  }
  addModuleBreadcrumb(e, t, n, r) {
    var o;
    let a = arguments.length > 4 && true !== arguments[4] ? arguments[4] : "info",
      s = _(),
      l = i.default.fromTimestamp(Math.floor(s)),
      c = {
        id: l,
        key: l,
        nativeId: null,
        timestamp: s,
        name: e,
        data: t,
        type: n,
        pid: r,
        logType: a,
        stack: null != (o = Error().stack) ? o : ""
      };
    return this.addBreadcrumb(c)
  }
  getBreadcrumbs(e) {
    return [this.breadcrumbs.values(e, true), this.breadcrumbs.version]
  }
  constructor() {
    o(this, "breadcrumbs", new Chunk759174.h(u, d)), o(this, "maxNativeBreadcrumbId", 0)
  }
}
let h = new p
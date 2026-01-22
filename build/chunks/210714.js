/** Chunk was on web.js **/
/** chunk id: 210714, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => g,
  d: () => m
}), require("./747238.js"), require("./896048.js");
var Chunk835245 = require("./835245.js"),
  Chunk77729 = require("./77729.js"),
  Chunk954571 = require("./954571.js"),
  Chunk837921 = require("./837921.js"),
  Chunk614792 = require("./614792.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p() {
  return window.GLOBAL_ENV.HTML_TIMESTAMP
}
class _ {
  trackEvent(e) {
    let t = Date.now();
    requestIdleCallback(() => {
      a.default.track(l.HAw.APP_UI_VIEWED, f(u({}, E(), b()), {
        load_id: this.loadId,
        screen_name: e,
        duration_ms_since_app_opened: t - p(),
        app_hardware_acceleration_enabled: s.Ay.getEnableHardwareAcceleration()
      }))
    })
  }
  trackTTI() {
    var e, t, n;
    if (window.__TTI_COMPLETED) return;
    window.__TTI_COMPLETED = true;
    let r = null == (n = window.location) || null == (t = n.pathname) || null == (e = t.split("/")) ? true : e[1];
    requestIdleCallback(() => {
      let e = p();
      o.A.firstRenderAfterReadyPayload.record();
      let t = o.A.serializeWebPerfStartupMetrics(e);
      a.default.track(l.HAw.APP_WEB_PERF_STARTUP_METRICS, u({
        load_id: this.loadId,
        url_root_path: r
      }, t));
      try {
        s.Ay.appFirstRenderAfterReadyPayload()
      } catch (e) {}
    })
  }
  trackAppUIViewed(e) {
    if (!this.appUIViewed) {
      this.trackEvent(e);
      try {
        s.Ay.appViewed()
      } catch (e) {}
      this.appUIViewed = true
    }
  }
  constructor() {
    c(this, "loadId", (0, r.A)()), c(this, "appUIViewed", false)
  }
}
let h = new _;

function m(e) {
  h.trackAppUIViewed(e)
}

function g() {
  h.trackTTI()
}

function E() {
  var e, t, n;
  let r = "--campaign-id=";
  for (let a of null != (e = null === i.A || true === i.A || null == (n = i.A.processUtils) || null == (t = n.getMainArgvSync) ? true : t.call(n)) ? e : [])
    if (a.startsWith(r)) return {
      referrer: a.substr(r.length)
    };
  return {}
}

function b() {
  let e = false,
    t = {
      total_compressed_byte_size: 0,
      total_uncompressed_byte_size: 0,
      total_transfer_byte_size: 0,
      js_compressed_byte_size: 0,
      js_uncompressed_byte_size: 0,
      js_transfer_byte_size: 0,
      css_compressed_byte_size: 0,
      css_uncompressed_byte_size: 0,
      css_transfer_byte_size: 0
    };
  return null != window.performance && null != window.performance.getEntries && window.performance.getEntries().forEach(n => {
    let r = null != n.encodedBodySize ? n.encodedBodySize : n.decodedBodySize,
      i = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
      a = n.transferSize;
    null != i && null != r && (e = true, t.total_compressed_byte_size += r, t.total_uncompressed_byte_size += i, null != a && (t.total_uncompressed_byte_size += a), "resource" === n.entryType && ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && (t.js_compressed_byte_size += r, t.js_uncompressed_byte_size += i, null != a && (t.js_uncompressed_byte_size += a)), "link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && (t.css_compressed_byte_size += r, t.css_uncompressed_byte_size += i, null != a && (t.css_uncompressed_byte_size += a))))
  }), e ? t : {}
}
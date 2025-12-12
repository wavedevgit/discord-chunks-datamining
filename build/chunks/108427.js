/** Chunk was on web.js **/
/** chunk id: 108427, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => h,
  t: () => g
}), require("./35282.js"), require("./388685.js");
var Chunk772848 = require("./772848.js"),
  Chunk579806 = require("./579806.js"),
  Chunk626135 = require("./626135.js"),
  Chunk998502 = require("./998502.js"),
  Chunk218543 = require("./218543.js"),
  Chunk981631 = require("./981631.js");

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
      a.default.track(l.rMx.APP_UI_VIEWED, f(u({}, E(), b()), {
        load_id: this.loadId,
        screen_name: e,
        duration_ms_since_app_opened: t - p(),
        app_hardware_acceleration_enabled: o.ZP.getEnableHardwareAcceleration()
      }))
    })
  }
  trackTTI() {
    var e, t, n;
    if (window.__TTI_COMPLETED) return;
    window.__TTI_COMPLETED = true;
    let r = null == (n = window.location) || null == (t = require.pathname) || null == (e = exports.split("/")) ? true : module[1];
    requestIdleCallback(() => {
      let e = p();
      Chunk218543.Z.firstRenderAfterReadyPayload.record();
      let t = Chunk218543.Z.serializeWebPerfStartupMetrics(module);
      Chunk626135.default.track(Chunk981631.rMx.APP_WEB_PERF_STARTUP_METRICS, u({
        load_id: this.loadId,
        url_root_path: Chunk772848
      }, exports))
    })
  }
  trackAppUIViewed(e) {
    if (!this.appUIViewed) {
      this.trackEvent(e);
      try {
        o.ZP.appViewed()
      } catch (e) {}
      this.appUIViewed = true
    }
  }
  constructor() {
    c(this, "loadId", (0, Chunk772848.Z)()), c(this, "appUIViewed", false)
  }
}
let m = new _;

function h(e) {
  m.trackAppUIViewed(e)
}

function g() {
  m.trackTTI()
}

function E() {
  var e, t, n;
  let r = "--campaign-id=";
  for (let a of null != (n = null === Chunk579806.Z || true === Chunk579806.Z || null == (t = Chunk579806.Z.processUtils) || null == (e = exports.getMainArgvSync) ? true : module.call(exports)) ? require : [])
    if (Chunk626135.startsWith(Chunk772848)) return {
      referrer: Chunk626135.substr(Chunk772848.length)
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
  }), module ? exports : {}
}
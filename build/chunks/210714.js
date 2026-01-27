/** Chunk was on 86142 **/
/** chunk id: 210714, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  D: () => g,
  d: () => p
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

function d() {
  return window.GLOBAL_ENV.HTML_TIMESTAMP
}
let h = new class {
  trackEvent(e) {
    let t = Date.now();
    requestIdleCallback(() => {
      var n, r;
      let a, c;
      s.default.track(o.HAw.APP_UI_VIEWED, (n = u({}, function() {
        var e, t, n;
        let r = "--campaign-id=";
        for (let s of null != (e = null === i.A || true === i.A || null == (n = i.A.processUtils) || null == (t = n.getMainArgvSync) ? true : t.call(n)) ? e : [])
          if (s.startsWith(r)) return {
            referrer: s.substr(r.length)
          };
        return {}
      }(), (a = false, c = {
        total_compressed_byte_size: 0,
        total_uncompressed_byte_size: 0,
        total_transfer_byte_size: 0,
        js_compressed_byte_size: 0,
        js_uncompressed_byte_size: 0,
        js_transfer_byte_size: 0,
        css_compressed_byte_size: 0,
        css_uncompressed_byte_size: 0,
        css_transfer_byte_size: 0
      }, null != window.performance && null != window.performance.getEntries && window.performance.getEntries().forEach(e => {
        let t = null != e.encodedBodySize ? e.encodedBodySize : e.decodedBodySize,
          n = null != e.decodedBodySize ? e.decodedBodySize : e.encodedBodySize,
          r = e.transferSize;
        null != n && null != t && (a = true, c.total_compressed_byte_size += t, c.total_uncompressed_byte_size += n, null != r && (c.total_uncompressed_byte_size += r), "resource" === e.entryType && ("script" === e.initiatorType && null != e.name && null != e.name.match(/\.js/) && (c.js_compressed_byte_size += t, c.js_uncompressed_byte_size += n, null != r && (c.js_uncompressed_byte_size += r)), "link" === e.initiatorType && null != e.name && null != e.name.match(/\.css/) && (c.css_compressed_byte_size += t, c.css_uncompressed_byte_size += n, null != r && (c.css_uncompressed_byte_size += r))))
      }), a ? c : {})), r = r = {
        load_id: this.loadId,
        screen_name: e,
        duration_ms_since_app_opened: t - d(),
        app_hardware_acceleration_enabled: l.Ay.getEnableHardwareAcceleration()
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n))
    })
  }
  trackTTI() {
    var e, t, n;
    if (window.__TTI_COMPLETED) return;
    window.__TTI_COMPLETED = true;
    let r = null == (n = window.location) || null == (t = n.pathname) || null == (e = t.split("/")) ? true : e[1];
    requestIdleCallback(() => {
      let e = d();
      a.A.firstRenderAfterReadyPayload.record();
      let t = a.A.serializeWebPerfStartupMetrics(e);
      s.default.track(o.HAw.APP_WEB_PERF_STARTUP_METRICS, u({
        load_id: this.loadId,
        url_root_path: r
      }, t));
      try {
        l.Ay.appFirstRenderAfterReadyPayload()
      } catch (e) {}
    })
  }
  trackAppUIViewed(e) {
    if (!this.appUIViewed) {
      this.trackEvent(e);
      try {
        l.Ay.appViewed()
      } catch (e) {}
      this.appUIViewed = true
    }
  }
  constructor() {
    c(this, "loadId", (0, r.A)()), c(this, "appUIViewed", false)
  }
};

function p(e) {
  h.trackAppUIViewed(e)
}

function g() {
  h.trackTTI()
}
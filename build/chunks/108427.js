/** Chunk was on 72453 **/
n.d(t, {
  e: () => d
}), n(47120), n(301563);
var r = n(772848),
  i = n(579806),
  a = n(626135),
  o = n(998502),
  l = n(981631);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = new class {
  trackEvent(e, t) {
    let n = Date.now();
    requestIdleCallback(() => {
      var r, o;
      a.default.track(e, (r = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            s(e, t, n[t])
          })
        }
        return e
      }({}, function() {
        var e, t, n;
        let r = "--campaign-id=";
        for (let a of null !== (n = null === i.Z || void 0 === i.Z ? void 0 : null === (t = i.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n ? n : [])
          if (a.startsWith(r)) return {
            referrer: a.substr(r.length)
          };
        return {}
      }(), function() {
        let e = !1,
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
          null != i && null != r && (e = !0, t.total_compressed_byte_size += r, t.total_uncompressed_byte_size += i, null != a && (t.total_uncompressed_byte_size += a), "resource" === n.entryType && ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && (t.js_compressed_byte_size += r, t.js_uncompressed_byte_size += i, null != a && (t.js_uncompressed_byte_size += a)), "link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && (t.css_compressed_byte_size += r, t.css_uncompressed_byte_size += i, null != a && (t.css_uncompressed_byte_size += a))))
        }), e ? t : {}
      }()), o = o = {
        load_id: this.loadId,
        screen_name: t,
        duration_ms_since_app_opened: n - window.GLOBAL_ENV.HTML_TIMESTAMP
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
      }), r))
    })
  }
  trackAppUIViewed(e) {
    if (!this.appUIViewed) {
      this.trackEvent(l.rMx.APP_UI_VIEWED, e);
      try {
        o.ZP.appViewed()
      } catch (e) {}
      this.appUIViewed = !0
    }
  }
  constructor() {
    s(this, "loadId", (0, r.Z)()), s(this, "appUIViewed", !1)
  }
};

function d(e) {
  c.trackAppUIViewed(e)
}
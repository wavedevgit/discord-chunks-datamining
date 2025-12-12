/** Chunk was on 88499 **/
/** chunk id: 599857, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p,
  _: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk462654 = require("./462654.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk756148 = require("./756148.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  let {
    sitekey: t,
    action: n,
    onVerify: i
  } = e, [l, u] = r.useState("uninitialized"), m = r.useCallback(e => {
    o.default.track(d.rMx.RECAPTCHA_MODAL_EVENT, {
      recaptcha_event_name: e
    })
  }, []), p = r.useCallback(e => {
    m("handle-verify"), i(e)
  }, [i, m]), h = r.useCallback(() => {
    var e, a, r;
    null == (r = window) || null == (a = r.grecaptcha) || null == (e = a.enterprise) || e.ready(async () => {
      var e;
      m("recaptcha-ready"), p(await (null == (e = window) ? true : e.grecaptcha).enterprise.execute(t, null != n ? {
        action: n
      } : true)), u("loaded")
    })
  }, [t, n, p, m]), x = r.useCallback(() => {
    u("running"), m("recaptcha-loading"), c.I.loadRecaptchaScript(t, h, m)
  }, [t, h, m]);
  return r.useEffect(() => {
    "uninitialized" === l && x()
  }, [x, l]), r.useEffect(() => () => {
    m("recaptcha-unloading"), document.querySelectorAll('script[src*="recaptcha/enterprise.js"],.grecaptcha-badge').forEach(e => {
      var t;
      return null == (t = e.parentNode) ? true : t.removeChild(e)
    }), null != window.grecaptcha && delete window.grecaptcha
  }, [m]), (0, a.jsx)(s.$jN, {})
}
let m = e => {
  var t, n, {
      theme: r
    } = e,
    s = function(e, t) {
      if (null == e) return {};
      var n, a, r = function(e, t) {
        if (null == e) return {};
        var n, a, r = {},
          i = Object.keys(e);
        for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["theme"]);
  let o = (0, l.wj)(r) ? "dark" : "light";
  return (0, a.jsx)(i.Z, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        a = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), a.forEach(function(t) {
        var a;
        a = n[t], t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = a
      })
    }
    return e
  }({
    sitekey: d.OL7
  }, s), n = n = {
    theme: o
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
};
m.Themes = {
  LIGHT: "light",
  DARK: "dark"
}, m.Sizes = {
  COMPACT: "compact",
  NORMAL: "normal",
  INVISIBLE: "invisible"
};
let p = m
/** Chunk was on 90228 **/
/** chunk id: 354949, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p,
  d: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk3745 = require("./3745.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk966284 = require("./966284.js"),
  Chunk652215 = require("./652215.js");

function u(e) {
  let {
    sitekey: t,
    action: n,
    onVerify: r
  } = e, [i, u] = l.useState("uninitialized"), m = l.useCallback(e => {
    o.default.track(d.HAw.RECAPTCHA_MODAL_EVENT, {
      recaptcha_event_name: e
    })
  }, []), p = l.useCallback(e => {
    m("handle-verify"), r(e)
  }, [r, m]), h = l.useCallback(() => {
    var e, a, l;
    null == (l = window) || null == (a = l.grecaptcha) || null == (e = a.enterprise) || e.ready(async () => {
      var e;
      m("recaptcha-ready"), p(await (null == (e = window) ? true : e.grecaptcha).enterprise.execute(t, null != n ? {
        action: n
      } : true)), u("loaded")
    })
  }, [t, n, p, m]), x = l.useCallback(() => {
    u("running"), m("recaptcha-loading"), c.Z.loadRecaptchaScript(t, h, m)
  }, [t, h, m]);
  return l.useEffect(() => {
    "uninitialized" === i && x()
  }, [x, i]), l.useEffect(() => () => {
    m("recaptcha-unloading"), document.querySelectorAll('script[src*="recaptcha/enterprise.js"],.grecaptcha-badge').forEach(e => {
      var t;
      return null == (t = e.parentNode) ? true : t.removeChild(e)
    }), null != window.grecaptcha && delete window.grecaptcha
  }, [m]), (0, a.jsx)(s.y$y, {})
}
let m = e => {
  var t, n;
  let {
    theme: l
  } = e, s = function(e, t) {
    if (null == e) return {};
    var n, a, l, r = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
      return r
    }
    if (r = function(e, t) {
        if (null == e) return {};
        var n, a, l = {},
          r = Object.getOwnPropertyNames(e);
        for (a = 0; a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
    return r
  }(e, ["theme"]), o = (0, i.Mw)(l) ? "dark" : "light";
  return (0, a.jsx)(r.A, (t = function(e) {
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
    sitekey: d._Ak
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
/** Chunk was on 12494 **/
r.d(t, {
  Z: () => d,
  _: () => f
}), r(388685);
var n = r(255367),
  i = r(73800),
  c = r(15155),
  o = r(780384),
  l = r(481060),
  a = r(626135),
  s = r(756148),
  u = r(981631);

function f(e) {
  let {
    sitekey: t,
    action: r,
    onVerify: c
  } = e, [o, f] = i.useState("uninitialized"), p = i.useCallback(e => {
    a.default.track(u.rMx.RECAPTCHA_MODAL_EVENT, {
      recaptcha_event_name: e
    })
  }, []), d = i.useCallback(e => {
    p("handle-verify"), c(e)
  }, [c, p]), y = i.useCallback(() => {
    var e, n, i;
    null == (i = window) || null == (n = i.grecaptcha) || null == (e = n.enterprise) || e.ready(async () => {
      var e;
      p("recaptcha-ready"), d(await (null == (e = window) ? void 0 : e.grecaptcha).enterprise.execute(t, null != r ? {
        action: r
      } : void 0)), f("loaded")
    })
  }, [t, r, d, p]), g = i.useCallback(() => {
    f("running"), p("recaptcha-loading"), s.I.loadRecaptchaScript(t, y, p)
  }, [t, y, p]);
  return i.useEffect(() => {
    "uninitialized" === o && g()
  }, [g, o]), i.useEffect(() => () => {
    p("recaptcha-unloading"), document.querySelectorAll('script[src*="recaptcha/enterprise.js"],.grecaptcha-badge').forEach(e => {
      var t;
      return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
    }), null != window.grecaptcha && delete window.grecaptcha
  }, [p]), (0, n.jsx)(l.$jN, {})
}
let p = e => {
  var t, r, {
      theme: i
    } = e,
    l = function(e, t) {
      if (null == e) return {};
      var r, n, i = function(e, t) {
        if (null == e) return {};
        var r, n, i = {},
          c = Object.keys(e);
        for (n = 0; n < c.length; n++) r = c[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(e);
        for (n = 0; n < c.length; n++) r = c[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
      }
      return i
    }(e, ["theme"]);
  let a = (0, o.wj)(i) ? "dark" : "light";
  return (0, n.jsx)(c.Z, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n
      })
    }
    return e
  }({
    sitekey: u.OL7
  }, l), r = r = {
    theme: a
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
};
p.Themes = {
  LIGHT: "light",
  DARK: "dark"
}, p.Sizes = {
  COMPACT: "compact",
  NORMAL: "normal",
  INVISIBLE: "invisible"
};
let d = p
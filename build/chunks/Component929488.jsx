/** Chunk was on 39522 **/
/** chunk id: 929488, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk435769 = require("./435769.js"),
  Chunk3745 = require("./3745.js"),
  Chunk835245 = require("./835245.js"),
  Chunk731738 = require("./731738.js"),
  Chunk319400 = require("./319400.js"),
  Chunk831062 = require("./831062.js"),
  Chunk954571 = require("./954571.js"),
  Chunk577015 = require("./577015.js"),
  Chunk354949 = require("./354949.jsx"),
  Chunk652215 = require("./652215.js");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let v = e => {
  let {
    captchaService: t = p.MS.RECAPTCHA,
    sitekey: r,
    rqdata: v,
    onRender: m,
    onVerify: O,
    onError: g,
    onOpen: C,
    onClose: E,
    onChalExpired: w,
    size: A,
    userflow: R
  } = e, j = function(e, t) {
    if (null == e) return {};
    var r, n, a, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (a = 0, r = Reflect.ownKeys(e); a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var r, n, a = {},
          i = Object.getOwnPropertyNames(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
      }(e, t), Object.getOwnPropertySymbols)
      for (a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
  }(e, ["captchaService", "sitekey", "rqdata", "onRender", "onVerify", "onError", "onOpen", "onClose", "onChalExpired", "size", "userflow"]), _ = a.useRef(null), x = (0, c.A)(), [P, k] = a.useState(false), S = a.useCallback(e => {
    d.default.track(f.HAw.CAPTCHA_EVENT, {
      captcha_event_name: e,
      captcha_service: t,
      sitekey: r,
      captcha_flow_key: x
    })
  }, [x, t, r]), I = a.useCallback(e => {
    l.A.increment({
      name: s.K.CAPTCHA_EVENT,
      tags: ["event_name:".concat(e), "captcha_service:".concat(t)]
    })
  }, [t]), D = a.useCallback(() => {
    if (t === p.MS.HCAPTCHA) {
      var e, r;
      null != v && "" !== v && null != _.current && (null == (e = _.current) || e.setData({
        rqdata: v
      })), "invisible" === A && null != _.current && (null == (r = _.current) || r.execute())
    }
  }, [v, _, A, t]), L = a.useCallback(() => {
    P || (S("initial-load"), I("initial-load"), k(true)), D()
  }, [I, P, S, D]);
  a.useEffect(() => {
    D()
  }, [D]), a.useEffect(() => {
    L()
  }, [L]);
  let T = a.useCallback(() => {
      S("error"), I("error"), D(), null == g || g()
    }, [S, I, D, g]),
    N = a.useCallback(e => {
      S("verify"), I("verify"), O(e)
    }, [I, O, S]),
    M = a.useCallback(() => {
      S("render"), (0, u.emitCaptchaDistributionMetric)(R), null == m || m()
    }, [m, S, R]),
    K = a.useCallback(() => {
      S("open"), I("open"), (0, u.emitCaptchaDistributionMetric)(R), null == C || C()
    }, [I, C, S, R]),
    V = a.useCallback(() => {
      S("close"), null == E || E(), D()
    }, [E, S, D]),
    H = a.useCallback(() => {
      S("chal-expire"), null == w || w()
    }, [w, S]);
  return ((null == r || "" === r) && (r = f._Ak), t === p.MS.RECAPTCHA) ? (0, n.jsx)(o.A, b(y({}, j), {
    onLoad: L,
    onRender: M,
    onVerify: N,
    onError: T,
    sitekey: r
  })) : t === p.MS.RECAPTCHA_ENTERPRISE ? (0, n.jsx)(h.d, b(y({}, j), {
    onLoad: L,
    onRender: M,
    onVerify: N,
    onError: T,
    sitekey: r,
    action: R
  })) : t === p.MS.HCAPTCHA ? (0, n.jsx)(i.A, b(y({
    ref: _
  }, j), {
    sitekey: r,
    onLoad: L,
    onError: T,
    onVerify: N,
    onChalExpired: H,
    onOpen: K,
    onClose: V,
    size: A,
    reCaptchaCompat: false
  })) : (0, n.jsx)(o.A, b(y({}, j), {
    sitekey: r,
    onLoad: L,
    onRender: M,
    onVerify: N,
    onError: T
  }))
}
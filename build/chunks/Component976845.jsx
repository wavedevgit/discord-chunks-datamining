/** Chunk was on 75215 **/
/** chunk id: 976845, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  ZP: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk60488 = require("./60488.jsx"),
  Chunk934248 = require("./934248.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk647917 = require("./647917.js");

function s(e) {
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

function f(e, t) {
  if (null == e) return {};
  var r, n, l = function(e, t) {
    if (null == e) return {};
    var r, n, l = {},
      o = Object.keys(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
  }
  return l
}
let p = {
    width: 60,
    height: 60
  },
  O = e => {
    let {
      currentAnimationType: t,
      animationTypeRef: r,
      onSetAnimationDurationMS: n,
      play: o,
      getDuration: u
    } = e, a = u(), c = null != a ? 1e3 * a : 3e3;
    (0, l.useEffect)(() => {
      null !== t && t !== r.current && (r.current = t, o())
    }, [t, o, r]), (0, l.useEffect)(() => {
      n(c)
    }, [n, c])
  },
  y = e => {
    var {
      currentAnimationType: t
    } = e, r = f(e, ["currentAnimationType"]);
    let l = (0, u.D)(null != t ? t : "earn"),
      {
        Component: o
      } = l;
    return O(s({
      currentAnimationType: t
    }, r, f(l, ["Component"]))), (0, n.jsx)(o, b(s({}, p), {
      size: "custom",
      className: i.orbsLottie,
      useLottieDefaultColors: true
    }))
  },
  d = e => {
    var {
      currentAnimationType: t
    } = e, r = f(e, ["currentAnimationType"]);
    let l = (0, o.v)(null != t ? t : "earn"),
      {
        Component: u
      } = l;
    return O(s({
      currentAnimationType: t
    }, r, f(l, ["Component"]))), (0, n.jsx)(u, b(s({}, p), {
      size: "custom",
      className: i.orbsLottie,
      useLottieDefaultColors: true
    }))
  },
  m = e => {
    let t = (0, c.ZP)();
    return (0, a.ap)(t) ? (0, n.jsx)(d, s({}, e)) : (0, n.jsx)(y, s({}, e))
  }
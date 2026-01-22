/** Chunk was on 35894 **/
/** chunk id: 178052, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk33851 = require("./33851.js"),
  o = require.n(Chunk33851),
  Chunk432022 = require("./432022.js"),
  Chunk615300 = require("./615300.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk475743 = require("./475743.js");

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = {
    duration: 100,
    easing: Chunk615300.A.Easing.inOut(Chunk615300.A.Easing.back()),
    clamp: true
  },
  m = {
    duration: 2e3,
    easing: Chunk615300.A.Easing.quad,
    clamp: true
  };

function p(e) {
  let {
    value: t,
    children: n,
    equalityFn: i = o(),
    style: s
  } = e, p = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["value", "children", "equalityFn", "style"]), j = (0, u.A)(t), [{
    spring: g
  }, h] = (0, d.zhh)(() => ({
    spring: 0
  }), "animate-always"), x = (0, d.rdh)(c.A.colors.BACKGROUND_BASE_LOW).hex(), y = (0, d.rdh)(c.A.colors.CONTROL_BRAND_FOREGROUND).hex(), O = l.useCallback(() => {
    h({
      spring: 1,
      config: b
    }), h({
      spring: 0,
      config: m,
      delay: 300
    })
  }, [h]);
  l.useEffect(() => {
    null == t || null == j || i(t, j) || O()
  }, [O, t, j, i]);
  let v = null == g ? true : g.to({
      range: [0, 1],
      output: ["".concat(x, "00"), "".concat(y, "27")]
    }),
    H = null != s ? f(C({}, s), {
      backgroundColor: v
    }) : {
      backgroundColor: v
    };
  return (0, r.jsx)(a.animated.tr, f(C({}, p), {
    style: H,
    children: n
  }))
}
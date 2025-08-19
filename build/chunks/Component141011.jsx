/** Chunk was on 45620 **/
/** chunk id: 141011, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk692547 = require("./692547.js"),
  Chunk607070 = require("./607070.js"),
  Chunk302221 = require("./302221.js"),
  Chunk884697 = require("./884697.js"),
  Chunk372654 = require("./372654.js"),
  Chunk992171 = require("./992171.js");

function f(e) {
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

function m(e, t) {
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
let b = e => {
  let {
    asset: t,
    size: r = p.yV,
    className: a,
    style: b,
    children: h,
    categoryBannerOverride: _
  } = e, v = (0, o.e7)([c.Z], () => c.Z.saturation), O = l.useMemo(() => {
    if (null == t) return b;
    let e = null != t && /^http/i.test(t) || null != t && /^blob:https?:\/\/[^\/]+\//i.test(t) ? t : (0, d.uV)(t, {
        size: r,
        format: "jpg"
      }),
      n = (null == _ ? true : _.blur) ? {
        filter: "blur(2px)",
        transform: "scale(1.02)"
      } : {};
    if (1 === v) return f(m(f({}, b), {
      backgroundImage: (null == _ ? true : _.addGradient) ? "url(".concat(e, "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)") : "url(".concat(e, ")"),
      backgroundBlendMode: "multiply",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }), n);
    let l = (0, u.aD)(s.Z.unsafe_rawColors.BLACK_500.resolve().hex(), 1 - v);
    return f(m(f({}, b), {
      backgroundImage: "linear-gradient(".concat(l, ", ").concat(l, "), url(").concat(e, ")"),
      backgroundBlendMode: "saturation",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }), n)
  }, [t, r, v, b, null == _ ? true : _.blur, null == _ ? true : _.addGradient]);
  return (0, n.jsx)("div", {
    className: i()(g.banner, a),
    style: O,
    children: h
  })
}
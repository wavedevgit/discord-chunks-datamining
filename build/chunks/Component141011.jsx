/** Chunk was on 45620 **/
/** chunk id: 141011, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk692547 = require("./692547.js"),
  Chunk607070 = require("./607070.js"),
  Chunk302221 = require("./302221.js"),
  Chunk884697 = require("./884697.js"),
  Chunk372654 = require("./372654.js"),
  Chunk992171 = require("./992171.js");

function p(e) {
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

function h(e, t) {
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
let _ = e => {
  let {
    asset: t,
    size: n = g.yV,
    className: a,
    style: _,
    children: m,
    categoryBannerOverride: C
  } = e, b = (0, i.e7)([c.Z], () => c.Z.saturation), E = l.useMemo(() => {
    if (null == t) return _;
    let e = null != t && /^http/i.test(t) || null != t && /^blob:https?:\/\/[^\/]+\//i.test(t) ? t : (0, d.uV)(t, {
        size: n,
        format: "jpg"
      }),
      r = (null == C ? true : C.blur) ? {
        filter: "blur(2px)",
        transform: "scale(1.02)"
      } : {};
    if (1 === b) return p(h(p({}, _), {
      backgroundImage: (null == C ? true : C.addGradient) ? "url(".concat(e, "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)") : "url(".concat(e, ")"),
      backgroundBlendMode: "multiply",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }), r);
    let l = (0, u.aD)(o.Z.unsafe_rawColors.BLACK_500.resolve().hex(), 1 - b);
    return p(h(p({}, _), {
      backgroundImage: "linear-gradient(".concat(l, ", ").concat(l, "), url(").concat(e, ")"),
      backgroundBlendMode: "saturation",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }), r)
  }, [t, n, b, _, null == C ? true : C.blur, null == C ? true : C.addGradient]);
  return (0, r.jsx)("div", {
    className: s()(f.banner, a),
    style: E,
    children: m
  })
}
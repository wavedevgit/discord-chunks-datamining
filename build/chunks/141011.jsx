/** Chunk was on 78223 **/
/** chunk id: 141011, original params: e,n,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk692547 = require("./692547.js"),
  Chunk607070 = require("./607070.js"),
  Chunk302221 = require("./302221.js"),
  Chunk884697 = require("./884697.js"),
  Chunk372654 = require("./372654.js"),
  Chunk534215 = require("./534215.js");

function m(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = r[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function v(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      r.push.apply(r, l)
    }
    return r
  })(Object(n)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
  }), e
}
let O = e => null != e && /^http/i.test(e),
  p = e => null != e && /^blob:https?:\/\/[^\/]+\//i.test(e),
  f = e => {
    let {
      asset: n,
      size: r = g.yV,
      className: o,
      style: f,
      children: y,
      categoryBannerOverride: j
    } = e, h = (0, u.e7)([s.Z], () => s.Z.saturation), B = t.useMemo(() => {
      if (null == n) return f;
      let e = O(n) || p(n) ? n : (0, d.uV)(n, {
          size: r,
          format: "jpg"
        }),
        l = (null == j ? true : j.blur) ? {
          filter: "blur(2px)",
          transform: "scale(1.02)"
        } : {};
      if (1 === h) return m(v(m({}, f), {
        backgroundImage: (null == j ? true : j.addGradient) ? "url(".concat(e, "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)") : "url(".concat(e, ")"),
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }), l);
      let t = (0, c.aD)(i.Z.unsafe_rawColors.BLACK_500.resolve().hex(), 1 - h);
      return m(v(m({}, f), {
        backgroundImage: "linear-gradient(".concat(t, ", ").concat(t, "), url(").concat(e, ")"),
        backgroundBlendMode: "saturation",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }), l)
    }, [n, r, h, f, null == j ? true : j.blur, null == j ? true : j.addGradient]);
    return <div className={a()(b.banner, o)} style={B}>{y}</div>
  }
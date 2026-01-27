/** Chunk was on web.js **/
/** chunk id: 592819, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => O
}), require("./228524.js"), require("./65821.js");
var Chunk310784 = require("./310784.js"),
  i = require.n(Chunk310784),
  Chunk563304 = require("./563304.js"),
  o = require.n(Chunk563304),
  Chunk907211 = require("./907211.js"),
  Chunk93132 = require("./93132.js"),
  Chunk199222 = require("./199222.js"),
  Chunk857526 = require("./857526.js"),
  Chunk677370 = require("./677370.js"),
  Chunk680049 = require("./680049.js"),
  Chunk669393 = require("./669393.js");
let {
  Themes: _
} = Chunk680049.zv, {
  SemanticColors: h
} = Chunk907211.z, {
  RawColors: m
} = Chunk93132.z, {
  Shadows: g
} = Chunk857526.z, {
  Spacing: E
} = Chunk677370.z, y = Symbol("semanticColor");

function b(e) {
  if ("string" == typeof e) {
    let t = e.toUpperCase();
    if (!(t in _)) throw Error("Invalid theme: ".concat(e));
    e = _[t]
  }
  return e
}
let O = {
  themes: _,
  colors: o()(h, (e, t) => ({
    [y]: t
  })),
  unsafe_rawColors: m,
  shadows: o()(g, e => {
    function t(t) {
      return {
        resolve: (n, r) => t(e[n].nativeStyles, r)
      }
    }
    return {
      shadowOffset: t((e, t) => t ? true : e.shadowOffset),
      shadowColor: t((e, t) => t ? e.shadowColorAndroid : e.shadowColor),
      shadowOpacity: t(e => e.shadowOpacity),
      shadowRadius: t(e => e.shadowRadius),
      elevation: t(e => e.elevation)
    }
  }),
  radii: Chunk199222.T,
  spacing: E,
  internal: {
    isSemanticColor: e => "object" == typeof e && null !== e && y in e,
    getSemanticColorName: e => e[y],
    resolveSemanticColor(e, t, n) {
      var r, a;
      e = b(e);
      let o = h[t[y]],
        {
          category: s
        } = o,
        l = o[e],
        c = m[l.raw],
        u = l.opacity;
      if ((null == n ? true : n.gradient) != null && "gradient" in o) {
        let e = o.gradient[null == n ? true : n.gradient.theme];
        if (null != e) {
          let t = i()(e.color in m ? m[e.color] : null == n ? true : n.gradient.colors[e.color]);
          "saturation" in e && (t = t.set("hsl.s", e.saturation)), "lightness" in e && (t = t.set("hsl.l", e.lightness)), c = t.hex(), u = "opacity" in e ? e.opacity : 1
        }
      }
      let d = null != (r = null == n ? true : n.contrast) ? r : 1,
        f = null != (a = null == n ? true : n.saturation) ? a : 1;
      return (f < 1 && (c = (0, p.d)(c, s, f)), 1 !== d && (c = (0, p.yq)(c, s, e, d)), 1 === u) ? c : i()(c).alpha(u).hex()
    },
    adjustColorSaturation: (e, t, n) => (0, p.d)(e, n, t),
    adjustColorContrast: (e, t, n, r) => (0, p.yq)(e, n, r, t)
  }
}
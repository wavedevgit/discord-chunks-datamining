/** Chunk was on web.js **/
/** chunk id: 376345, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => O
}), require("./953529.js"), require("./415506.js");
var Chunk688619 = require("./688619.js"),
  i = require.n(Chunk688619),
  Chunk402903 = require("./402903.js"),
  o = require.n(Chunk402903),
  Chunk707427 = require("./707427.js"),
  Chunk8800 = require("./8800.js"),
  Chunk949180 = require("./949180.js"),
  Chunk868858 = require("./868858.js"),
  Chunk897710 = require("./897710.js"),
  Chunk15202 = require("./15202.js"),
  Chunk211468 = require("./211468.js");
let {
  Themes: p
} = Chunk15202.V, {
  SemanticColors: h
} = Chunk707427.V, {
  RawColors: m
} = Chunk8800.V, {
  Shadows: g
} = Chunk868858.V, {
  Spacing: E
} = Chunk897710.V, b = Symbol("semanticColor");

function y(e) {
  if ("string" == typeof e) {
    let t = e.toUpperCase();
    if (!(t in p)) throw Error("Invalid theme: ".concat(e));
    e = p[t]
  }
  return e
}
let O = {
  themes: p,
  colors: o()(h, (e, t) => ({
    [b]: t
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
  radii: Chunk949180.w,
  spacing: E,
  internal: {
    isSemanticColor: e => "object" == typeof e && null !== e && b in e,
    getSemanticColorName: e => e[b],
    resolveSemanticColor(e, t, n) {
      var r, a;
      e = y(e);
      let o = h[t[b]],
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
      return (f < 1 && (c = (0, _.dO)(c, s, f)), 1 !== d && (c = (0, _.pq)(c, s, e, d)), 1 === u) ? c : i()(c).alpha(u).hex()
    },
    adjustColorSaturation: (e, t, n) => (0, _.dO)(e, n, t),
    adjustColorContrast: (e, t, n, r) => (0, _.pq)(e, n, r, t)
  }
}
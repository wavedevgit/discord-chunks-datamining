/** Chunk was on web.js **/
/** chunk id: 827734, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => L
}), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk310784 = require("./310784.js"),
  i = require.n(Chunk310784),
  Chunk119479 = require("./119479.js"),
  s = require.n(Chunk119479),
  Chunk563304 = require("./563304.js"),
  l = require.n(Chunk563304),
  Chunk93132 = require("./93132.js"),
  Chunk949816 = require("./949816.js"),
  Chunk589448 = require("./589448.js"),
  Chunk415720 = require("./415720.js"),
  Chunk626757 = require("./626757.js"),
  Chunk788894 = require("./788894.js"),
  Chunk199222 = require("./199222.js"),
  Chunk857526 = require("./857526.js"),
  Chunk677370 = require("./677370.js");
let {
  Themes: E
} = require("./680049.js").zv, {
  SemanticColors: y
} = Chunk589448.z, {
  RawColors: b
} = Chunk93132.z, {
  SemanticColorExperiments: O
} = Chunk949816.z, {
  SemanticColorHighContrast: v
} = Chunk415720.z, {
  Shadows: A
} = Chunk857526.z, {
  Spacing: I
} = Chunk677370.z, {
  Modules: S
} = Chunk788894.z, {
  Layout: T,
  Space: C
} = Chunk626757.zv, N = l()(b, e => i()(e)), w = {
  themes: E,
  modules: S,
  colors: l()(y, (e, t) => {
    let n = t;
    return {
      css: x(n),
      resolve(t) {
        var r, i, a, s, o, l, c;
        let u = e[t.theme],
          d = u.raw,
          f = u.opacity;
        if (n in O && null != t.enabledExperiments && t.enabledExperiments.length > 0)
          for (let e of t.enabledExperiments) {
            let o = null == (i = O[n]) || null == (r = i[e]) ? true : r[t.theme];
            null != o && (d = null != (a = o.raw) ? a : d, f = null != (s = o.opacity) ? s : f)
          }
        if (true === t.highContrastModeEnabled) {
          let e = null == (o = v[n]) ? true : o[t.theme];
          null != e && (d = null != (l = e.raw) ? l : d, f = null != (c = e.opacity) ? c : f)
        }
        if (1 === f) return w.unsafe_rawColors[d].resolve(t);
        {
          let e = N[d];
          return 0 !== e.alpha() && 1 !== f && (e = e.alpha(f)), R(e, t.saturation)
        }
      }
    }
  }),
  unsafe_rawColors: l()(b, (e, t) => {
    let n = t,
      r = N[n];
    return {
      css: x(n),
      resolve(e) {
        var t;
        return R(r, null != (t = null == e ? true : e.saturation) ? t : 1)
      }
    }
  }),
  shadows: l()(A, (e, t) => ({
    css: x(t),
    resolve: t => ({
      boxShadow: e[t.theme].boxShadow,
      filter: e[t.theme].filter,
      nativeStyles: e[t.theme].nativeStyles
    })
  })),
  radii: Chunk199222.T,
  spacing: l()(I, e => "".concat(e, "px")),
  layout: l()(T, e => "number" == typeof e ? "".concat(e, "px") : e),
  space: l()(C, e => ({
    css: e.css,
    resolve(t) {
      let {
        density: n
      } = t;
      return e.resolve(n)
    }
  }))
};

function R(e, t) {
  return {
    spring() {
      let n = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      return P(e, t, n).hex("rgba")
    },
    hsl() {
      let n = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      return P(e, t, n).css("hsl")
    },
    hex() {
      let n = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      return P(e, t, n).hex()
    },
    int() {
      let n = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
        r = P(e, t, n),
        i = r.num();
      return 1 !== r.alpha() ? i << 8 | Math.round(255 * r.alpha()) : i
    },
    rgba() {
      let n = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      return P(e, t, n).rgba()
    }
  }
}

function P(e, t, n) {
  var r;
  let i = s()(null != (r = n.opacity) ? r : 1, 0, 1),
    a = e;
  return 1 !== t && (a = a.set("hsl.s", a.get("hsl.s") * t)), 1 !== i && (a = a.alpha(a.alpha() * i)), a
}

function D(e) {
  return e.toLowerCase().replace(/_/g, "-")
}

function x(e, t) {
  let n = null != t ? D(t) : null,
    r = D(e);
  return "var(--".concat([n, r].filter(Boolean).join("-"), ")")
}
let L = w
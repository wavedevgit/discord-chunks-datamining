/** Chunk was on web.js **/
/** chunk id: 692547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk688619 = require("./688619.js"),
  i = require.n(Chunk688619),
  Chunk595182 = require("./595182.js"),
  o = require.n(Chunk595182),
  Chunk402903 = require("./402903.js"),
  l = require.n(Chunk402903),
  Chunk8800 = require("./8800.js"),
  Chunk240096 = require("./240096.js"),
  Chunk521904 = require("./521904.js"),
  Chunk915840 = require("./915840.js"),
  Chunk196548 = require("./196548.js"),
  Chunk387117 = require("./387117.js"),
  Chunk949180 = require("./949180.js"),
  Chunk868858 = require("./868858.js"),
  Chunk897710 = require("./897710.js");
let {
  Themes: E
} = require("./15202.js").V, {
  SemanticColors: b
} = Chunk521904.V, {
  RawColors: y
} = Chunk8800.V, {
  SemanticColorExperiments: O
} = Chunk240096.V, {
  SemanticColorHighContrast: v
} = Chunk915840.V, {
  Shadows: I
} = Chunk868858.V, {
  Spacing: S
} = Chunk897710.V, {
  Modules: T
} = Chunk387117.V, {
  Layout: A,
  Space: C
} = Chunk196548.VV, N = l()(y, e => i()(e)), R = {
  themes: E,
  modules: T,
  colors: l()(b, (e, t) => {
    let n = t;
    return {
      css: L(n),
      resolve(t) {
        var r, i, a, o, s, l, c;
        let u = e[t.theme],
          d = u.raw,
          f = u.opacity;
        if (n in O && null != t.enabledExperiments && t.enabledExperiments.length > 0)
          for (let e of t.enabledExperiments) {
            let s = null == (i = O[n]) || null == (r = i[e]) ? true : r[t.theme];
            null != s && (d = null != (a = s.raw) ? a : d, f = null != (o = s.opacity) ? o : f)
          }
        if (true === t.highContrastModeEnabled) {
          let e = null == (s = v[n]) ? true : s[t.theme];
          null != e && (d = null != (l = e.raw) ? l : d, f = null != (c = e.opacity) ? c : f)
        }
        if (1 === f) return R.unsafe_rawColors[d].resolve(t);
        {
          let e = N[d];
          return 0 !== e.alpha() && 1 !== f && (e = e.alpha(f)), P(e, t.saturation)
        }
      }
    }
  }),
  unsafe_rawColors: l()(y, (e, t) => {
    let n = t,
      r = N[n];
    return {
      css: L(n),
      resolve(e) {
        var t;
        return P(r, null != (t = null == e ? true : e.saturation) ? t : 1)
      }
    }
  }),
  shadows: l()(I, (e, t) => ({
    css: L(t),
    resolve: t => ({
      boxShadow: e[t.theme].boxShadow,
      filter: e[t.theme].filter,
      nativeStyles: e[t.theme].nativeStyles
    })
  })),
  radii: Chunk949180.w,
  spacing: l()(S, e => "".concat(e, "px")),
  layout: l()(A, e => "number" == typeof e ? "".concat(e, "px") : e),
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

function P(e, t) {
  return {
    spring() {
      let n = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      return w(e, t, n).hex("rgba")
    },
    hsl() {
      let n = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      return w(e, t, n).css("hsl")
    },
    hex() {
      let n = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      return w(e, t, n).hex()
    },
    int() {
      let n = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
        r = w(e, t, n),
        i = r.num();
      return 1 !== r.alpha() ? i << 8 | Math.round(255 * r.alpha()) : i
    },
    rgba() {
      let n = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      return w(e, t, n).rgba()
    }
  }
}

function w(e, t, n) {
  var r;
  let i = o()(null != (r = n.opacity) ? r : 1, 0, 1),
    a = e;
  return 1 !== t && (a = a.set("hsl.s", a.get("hsl.s") * t)), 1 !== i && (a = a.alpha(a.alpha() * i)), a
}

function D(e) {
  return e.toLowerCase().replace(/_/g, "-")
}

function L(e, t) {
  let n = null != t ? D(t) : null,
    r = D(e);
  return "var(--".concat([n, r].filter(Boolean).join("-"), ")")
}
let x = R
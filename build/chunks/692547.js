/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => P
}), n(47120), n(757143), n(301563);
var r = n(688619),
  i = n.n(r),
  o = n(595182),
  a = n.n(o),
  s = n(402903),
  l = n.n(s),
  c = n(35782),
  u = n(190558),
  d = n(196548),
  f = n(387117),
  p = n(949180),
  _ = n(777910),
  h = n(897710);
let {
  Themes: m
} = n(15202).V, {
  SemanticColors: g,
  RawColors: E
} = u.V, {
  SemanticColorExperiments: v
} = c.V, {
  Shadows: b
} = _.V, {
  Spacing: y
} = h.V, {
  Modules: O
} = f.V, {
  Layout: S
} = d.V, I = l()(E, e => i()(e)), T = {
  themes: m,
  modules: O,
  colors: l()(g, (e, t) => {
    let n = t;
    return {
      css: R(n),
      resolve(t) {
        let r = e[t.theme],
          i = r.raw,
          o = r.opacity;
        if (n in v && null != t.enabledExperiments && t.enabledExperiments.length > 0)
          for (let e of t.enabledExperiments) {
            var a, s, l, c;
            let r = null === (s = v[n]) || void 0 === s ? void 0 : null === (a = s[e]) || void 0 === a ? void 0 : a[t.theme];
            null != r && (i = null !== (l = r.raw) && void 0 !== l ? l : i, o = null !== (c = r.opacity) && void 0 !== c ? c : o)
          }
        if (1 === o) return T.unsafe_rawColors[i].resolve(t);
        {
          let e = I[i];
          return 0 !== e.alpha() && 1 !== o && (e = e.alpha(o)), N(e, t.saturation)
        }
      }
    }
  }),
  unsafe_rawColors: l()(E, (e, t) => {
    let n = t,
      r = I[n];
    return {
      css: R(n),
      resolve(e) {
        var t;
        return N(r, null !== (t = null == e ? void 0 : e.saturation) && void 0 !== t ? t : 1)
      }
    }
  }),
  shadows: l()(b, (e, t) => ({
    css: R(t),
    resolve: t => ({
      boxShadow: e[t.theme].boxShadow,
      filter: e[t.theme].filter,
      nativeStyles: e[t.theme].nativeStyles
    })
  })),
  radii: p.w,
  spacing: l()(y, e => "".concat(e, "px")),
  layout: l()(S, e => "number" == typeof e ? "".concat(e, "px") : e)
};

function N(e, t) {
  return {
    spring() {
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return A(e, t, n).hex("rgba")
    },
    hsl() {
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return A(e, t, n).css("hsl")
    },
    hex() {
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return A(e, t, n).hex()
    },
    int() {
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = A(e, t, n),
        i = r.num();
      return 1 !== r.alpha() ? i << 8 | Math.round(255 * r.alpha()) : i
    }
  }
}

function A(e, t, n) {
  var r;
  let i = a()(null !== (r = n.opacity) && void 0 !== r ? r : 1, 0, 1),
    o = e;
  return 1 !== t && (o = o.set("hsl.s", o.get("hsl.s") * t)), 1 !== i && (o = o.alpha(o.alpha() * i)), o
}

function C(e) {
  return e.toLowerCase().replace(/_/g, "-")
}

function R(e, t) {
  let n = null != t ? C(t) : null,
    r = C(e);
  return "var(--".concat([n, r].filter(Boolean).join("-"), ")")
}
let P = T
/** Chunk was on 39010 **/
/** chunk id: 519110, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk80932 = require("./80932.js"),
  Chunk2052 = require("./2052.js"),
  Chunk543241 = require("./543241.js"),
  Chunk339085 = require("./339085.js"),
  Chunk633302 = require("./633302.js"),
  Chunk691251 = require("./691251.js"),
  Chunk268350 = require("./268350.js"),
  Chunk217590 = require("./217590.js"),
  Chunk453070 = require("./453070.js"),
  Chunk926491 = require("./926491.js"),
  Chunk378233 = require("./378233.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), l.forEach(function(e) {
      var l;
      l = n[e], e in t ? Object.defineProperty(t, e, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = l
    })
  }
  return t
}

function E(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(t);
      n.push.apply(n, l)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}

function v(t) {
  return b.ZP.getByName(t.replace(/(^:|:$)/g, ""))
}

function P(t) {
  let {
    type: e,
    id: n,
    name: P,
    isInExpressionPicker: h = false
  } = t, {
    location: I
  } = (0, u.O)(), x = i.useMemo(() => E(m({}, I), {
    section: h ? S.jXE.EXPRESSION_PICKER : S.jXE.CONTEXT_MENU
  }), [I, h]), C = (0, g.Go)(), N = (0, r.e7)([y.Z], () => e === d.S.STICKER && null != n ? y.Z.getStickerById(n) : null), k = null != N && C.includes(N.id), w = (0, r.e7)([s.ZP], () => {
    if (e === d.S.EMOJI) {
      if (null != n) return s.ZP.getDisambiguatedEmojiContext().getById(n);
      else if (null != P) {
        var t;
        return null != (t = v(P)) ? t : v(b.ZP.convertSurrogateToName(P))
      }
    }
  }), A = (0, c.C1)(null, w);
  return null != N && e === d.S.STICKER ? (0, O.J8)(N) && !(0, O.V9)(N) ? null : k ? (0, l.jsx)(o.sNh, {
    id: "unfavorite",
    action: () => (0, p.hW)(N.id),
    label: j.intl.string(j.t.XhzKyF)
  }) : (0, l.jsx)(o.sNh, {
    id: "favorite",
    action: () => {
      (0, f.cQ)({
        sticker: N,
        location: E(m({}, x), {
          object: S.qAy.STICKER
        })
      }), (0, p.SA)(null == N ? true : N.id)
    },
    label: j.intl.string(j.t.kWmiPW)
  }) : null != w && e === d.S.EMOJI ? A ? (0, l.jsx)(o.sNh, {
    id: "unfavorite",
    action: () => (0, a.Xe)(w),
    label: j.intl.string(j.t.Ay49KA)
  }) : (0, l.jsx)(o.sNh, {
    id: "favorite",
    action: () => {
      (0, c.J1)({
        emoji: w,
        location: E(m({}, x), {
          object: S.qAy.EMOJI
        })
      }), (0, a.$K)(w)
    },
    label: j.intl.string(j.t.nNsr67)
  }) : true
}
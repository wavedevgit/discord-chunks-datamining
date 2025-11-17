/** Chunk was on 39010 **/
/** chunk id: 519110, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function v(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), r.forEach(function(e) {
      var r;
      r = n[e], e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = r
    })
  }
  return t
}

function E(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n.push.apply(n, r)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}

function P(t) {
  return b.ZP.getByName(t.replace(/(^:|:$)/g, ""))
}

function h(t) {
  let {
    type: e,
    id: n,
    name: h,
    isInExpressionPicker: m = false
  } = t, {
    location: I
  } = (0, c.O)(), w = i.useMemo(() => E(v({}, I), {
    section: m ? j.jXE.EXPRESSION_PICKER : j.jXE.CONTEXT_MENU
  }), [I, m]), C = (0, f.Go)(), N = (0, l.e7)([y.Z], () => e === d.S.STICKER && null != n ? y.Z.getStickerById(n) : null), k = null != N && C.includes(N.id), x = (0, l.e7)([s.ZP], () => {
    if (e === d.S.EMOJI) {
      if (null != n) return s.ZP.getDisambiguatedEmojiContext().getById(n);
      else if (null != h) {
        var t;
        return null != (t = P(h)) ? t : P(b.ZP.convertSurrogateToName(h))
      }
    }
  }), A = (0, u.C1)(null, x);
  return null != N && e === d.S.STICKER ? (0, O.J8)(N) && !(0, O.V9)(N) ? null : k ? (0, r.jsx)(o.sNh, {
    id: "unfavorite",
    action: () => (0, p.hW)(N.id),
    label: S.intl.string(S.t.XhzKyF)
  }) : (0, r.jsx)(o.sNh, {
    id: "favorite",
    action: () => {
      (0, g.cQ)({
        sticker: N,
        location: E(v({}, w), {
          object: j.qAy.STICKER
        })
      }), (0, p.SA)(null == N ? true : N.id)
    },
    label: S.intl.string(S.t.kWmiPW)
  }) : null != x && e === d.S.EMOJI ? A ? (0, r.jsx)(o.sNh, {
    id: "unfavorite",
    action: () => (0, a.Xe)(x),
    label: S.intl.string(S.t.Ay49KA)
  }) : (0, r.jsx)(o.sNh, {
    id: "favorite",
    action: () => {
      (0, u.J1)({
        emoji: x,
        location: E(v({}, w), {
          object: j.qAy.EMOJI
        })
      }), (0, a.$K)(x)
    },
    label: S.intl.string(S.t.nNsr67)
  }) : true
}
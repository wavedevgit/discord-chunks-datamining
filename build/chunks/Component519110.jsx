/** Chunk was on web.js **/
/** chunk id: 519110, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./704826.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e) {
  return d.ZP.getByName(e.replace(/(^:|:$)/g, ""))
}

function S(e) {
  let {
    type: t,
    id: n,
    name: y,
    isInExpressionPicker: v = false
  } = e, {
    location: S
  } = (0, l.O)(), A = i.useMemo(() => I(O({}, S), {
    section: v ? E.jXE.EXPRESSION_PICKER : E.jXE.CONTEXT_MENU
  }), [S, v]), N = (0, h.Go)(), C = (0, o.e7)([m.Z], () => t === f.S.STICKER && null != n ? m.Z.getStickerById(n) : null), R = null != C && N.includes(C.id), P = (0, o.e7)([u.ZP], () => {
    if (t === f.S.EMOJI) {
      if (null != n) return u.ZP.getDisambiguatedEmojiContext().getById(n);
      else if (null != y) {
        var e;
        return null != (e = T(y)) ? e : T(d.ZP.convertSurrogateToName(y))
      }
    }
  }), w = (0, c.C1)(null, P);
  return null != C && t === f.S.STICKER ? (0, g.J8)(C) && !(0, g.V9)(C) ? null : R ? (0, r.jsx)(a.sNh, {
    id: "unfavorite",
    action: () => (0, _.hW)(C.id),
    label: b.intl.string(b.t.XhzKyM)
  }) : (0, r.jsx)(a.sNh, {
    id: "favorite",
    action: () => {
      (0, p.cQ)({
        sticker: C,
        location: I(O({}, A), {
          object: E.qAy.STICKER
        })
      }), (0, _.SA)(null == C ? true : C.id)
    },
    label: b.intl.string(b.t.kWmiPT)
  }) : null != P && t === f.S.EMOJI ? w ? (0, r.jsx)(a.sNh, {
    id: "unfavorite",
    action: () => (0, s.Xe)(P),
    label: b.intl.string(b.t.Ay49KC)
  }) : (0, r.jsx)(a.sNh, {
    id: "favorite",
    action: () => {
      (0, c.J1)({
        emoji: P,
        location: I(O({}, A), {
          object: E.qAy.EMOJI
        })
      }), (0, s.$K)(P)
    },
    label: b.intl.string(b.t["nNsr6+"])
  }) : true
}
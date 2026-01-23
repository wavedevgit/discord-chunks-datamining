/** Chunk was on 46132 **/
/** chunk id: 253925, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk554375 = require("./554375.js"),
  Chunk212245 = require("./212245.js"),
  Chunk822123 = require("./822123.js"),
  Chunk508675 = require("./508675.js"),
  Chunk7584 = require("./7584.js"),
  Chunk60587 = require("./60587.js"),
  Chunk631576 = require("./631576.js"),
  Chunk891090 = require("./891090.js"),
  Chunk256449 = require("./256449.js"),
  Chunk679382 = require("./679382.js"),
  Chunk378058 = require("./378058.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function v(t) {
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

function S(t) {
  return b.Ay.getByName(t.replace(/(^:|:$)/g, ""))
}

function A(t) {
  let {
    type: e,
    id: n,
    name: A,
    isInExpressionPicker: C = false
  } = t, {
    location: I
  } = (0, u.p)(), x = r.useMemo(() => E(v({}, I), {
    section: C ? j.JJy.EXPRESSION_PICKER : j.JJy.CONTEXT_MENU
  }), [I, C]), P = (0, y.ln)(), h = (0, i.bG)([f.A], () => e === g.g.STICKER && null != n ? f.A.getStickerById(n) : null), w = null != h && P.includes(h.id), k = (0, i.bG)([s.Ay], () => {
    if (e === g.g.EMOJI) {
      if (null != n) return s.Ay.getDisambiguatedEmojiContext().getById(n);
      else if (null != A) {
        var t;
        return null != (t = S(A)) ? t : S(b.Ay.convertSurrogateToName(A))
      }
    }
  }), D = (0, c.O7)(null, k);
  return null != h && e === g.g.STICKER ? (0, O.Xw)(h) && !(0, O.Y4)(h) ? null : w ? (0, l.jsx)(o.Drp, {
    id: "unfavorite",
    action: () => (0, p.vr)(h.id),
    label: m.intl.string(m.t.XhzKyF)
  }) : (0, l.jsx)(o.Drp, {
    id: "favorite",
    action: () => {
      (0, d.Dt)({
        sticker: h,
        location: E(v({}, x), {
          object: j.ZSU.STICKER
        })
      }), (0, p.uK)(null == h ? true : h.id)
    },
    label: m.intl.string(m.t.kWmiPW)
  }) : null != k && e === g.g.EMOJI ? D ? (0, l.jsx)(o.Drp, {
    id: "unfavorite",
    action: () => (0, a.Sw)(k),
    label: m.intl.string(m.t.Ay49KA)
  }) : (0, l.jsx)(o.Drp, {
    id: "favorite",
    action: () => {
      (0, c.C5)({
        emoji: k,
        location: E(v({}, x), {
          object: j.ZSU.EMOJI
        })
      }), (0, a.V4)(k)
    },
    label: m.intl.string(m.t.nNsr67)
  }) : true
}
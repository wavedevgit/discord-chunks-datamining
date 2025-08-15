/** Chunk was on web.js **/
/** chunk id: 926243, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk607070 = require("./607070.js"),
  Chunk339085 = require("./339085.js"),
  Chunk906411 = require("./906411.js"),
  Chunk633302 = require("./633302.js"),
  Chunk691251 = require("./691251.js"),
  Chunk536442 = require("./536442.js"),
  Chunk912893 = require("./912893.js"),
  Chunk430824 = require("./430824.js"),
  Chunk358085 = require("./358085.js"),
  Chunk288406 = require("./288406.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk999642 = require("./999642.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = N(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let C = (e, t) => "".concat(e, ":").concat(t),
  R = Chunk73800.forwardRef(function(e, t) {
    var {
      emoji: n,
      isFavorite: i,
      isLargeSize: a,
      isMediumSize: c,
      isInspected: u,
      isDisabled: d,
      showPulse: _,
      columnIndex: h,
      rowIndex: m,
      size: E,
      surrogateCodePoint: v,
      allowAnimatedEmoji: T,
      selectedItemClassName: N,
      inNitroLockedSection: C
    } = e, R = A(e, ["emoji", "isFavorite", "isLargeSize", "isMediumSize", "isInspected", "isDisabled", "showPulse", "columnIndex", "rowIndex", "size", "surrogateCodePoint", "allowAnimatedEmoji", "selectedItemClassName", "inNitroLockedSection"]);
    let P = (0, s.e7)([g.Z], () => n.type === f.B.GUILD ? g.Z.getGuild(n.guildId) : true, [n]),
      w = () => {
        let e = n.allNamesString;
        return ((null == P ? true : P.name) != null && (e = y.intl.formatToPlainString(y.t["nXv4/P"], {
          names: e,
          guildName: P.name
        })), i) ? y.intl.formatToPlainString(y.t["9FI9Z2"], {
          names: e
        }) : e
      },
      D = d && !C;
    return (0, r.jsx)(l.tEY, {
      children: (0, r.jsx)("button", S(I({}, R), {
        className: o()(O.emojiItem, {
          [O.emojiItemLarge]: a,
          [O.emojiItemMedium]: c,
          [O.emojiItemSelected]: u,
          [null != N ? N : ""]: u,
          [O.showPulse]: _
        }),
        "data-type": p.S.EMOJI,
        "data-id": n.id,
        "data-name": n.name,
        "data-surrogates": "surrogates" in n ? n.surrogates : null,
        "data-animated": n.animated ? "true" : null,
        ref: t,
        children: (0, r.jsx)(b.Z, {
          "aria-label": w(),
          columnIndex: h,
          rowIndex: m,
          emoji: n,
          size: E,
          surrogateCodePoint: v,
          allowAnimatedEmoji: T,
          isLocked: D
        })
      }))
    })
  });

function P(e) {
  let {
    descriptor: t,
    emojiItemKey: a,
    isInspected: o,
    rowIndex: f,
    channelGuildId: p,
    onInspect: g,
    onSelect: b,
    isScrolling: O,
    isUsingKeyboardNavigation: v,
    showEmojiFavoriteTooltip: T,
    surrogateCodePoint: N,
    selectedItemClassName: P,
    getEmojiItemProps: w,
    isMediumSize: D,
    isLargeSize: L,
    pulseItemKey: x,
    allowAnimatedEmoji: M,
    setPulseItemKey: k,
    messageId: j,
    isBurstReaction: U,
    rowPosition: G,
    inNitroLockedSection: B
  } = e, [V, F] = i.useState(""), Z = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), H = (0, s.e7)([d.ZP], () => d.ZP.getDisambiguatedEmojiContext(p), [p]), Y = i.useRef(null), {
    emoji: W,
    size: K,
    isDisabled: z,
    columnIndex: q
  } = t, X = e => {
    if (e.stopPropagation(), O.current || v.current) return;
    let n = e.altKey;
    n && !d.ZP.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(W) && k(a), (0, h.Kw)(h.v6.FAVORITE_EMOJI_TOOLTIP), b(t, {
      isFinalSelection: !e.shiftKey,
      toggleFavorite: n
    })
  }, Q = () => {
    O.current || v.current || g(t)
  }, J = e => {
    (0, c.jW)(e, async () => {
      let {
        default: e
      } = await n.e("39010").then(n.bind(n, 269254));
      return t => (0, r.jsx)(e, I({}, t))
    })
  }, $ = function() {
    var e;
    let {
      onMouseEnter: t,
      onMouseLeave: n
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, s = null != (e = w(q, f)) ? e : {}, {
      ref: l,
      tabIndex: c,
      onFocus: u
    } = s, d = A(s, ["ref", "tabIndex", "onFocus"]);
    return (0, i.createElement)("li", S(I({}, d), {
      key: a,
      ref: Y
    }), V !== C(q, f) && (0, r.jsx)(R, {
      ref: l,
      emoji: W,
      isFavorite: H.isFavoriteEmojiWithoutFetchingLatest(W),
      isLargeSize: L,
      isMediumSize: D,
      isInspected: o,
      isDisabled: z,
      showPulse: x === a,
      allowAnimatedEmoji: M,
      onFocus: null != u ? u : Q,
      onMouseMove: Q,
      onMouseEnter: t,
      onMouseLeave: n,
      onClick: e => {
        if (null != Y.current && null != G && null != j && !e.shiftKey && null != W.name && U && !Z && M) {
          let e = null == W.id ? _.ZP.convertNameToSurrogate(W.name) : W.name,
            t = Y.current.getBoundingClientRect();
          t.x = G.x + (q + 1) * K, F(C(q, f)), (0, m.U)(j, e, W.id, t)
        }
        X(e)
      },
      onContextMenu: J,
      tabIndex: c,
      columnIndex: q,
      rowIndex: f,
      size: K,
      surrogateCodePoint: N,
      selectedItemClassName: P,
      inNitroLockedSection: B
    }))
  };
  return T ? (0, r.jsx)(l.ua7, {
    text: y.intl.formatToPlainString(y.t.glqNsb, {
      key: (0, E.isMac)() ? "Opt" : "Alt"
    }),
    position: "top",
    delay: 200,
    children: e => $(e)
  }, a) : $()
}
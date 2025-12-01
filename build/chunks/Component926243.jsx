/** Chunk was on web.js **/
/** chunk id: 926243, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk176354 = require("./176354.js"),
  Chunk358085 = require("./358085.js"),
  Chunk288406 = require("./288406.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk999642 = require("./999642.js");

function S(e, t, n) {
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
      S(e, t, n[t])
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

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e, t) {
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
let P = (e, t) => "".concat(e, ":").concat(t),
  R = Chunk473749.forwardRef(function(e, t) {
    var {
      emoji: n,
      isFavorite: i,
      isLargeSize: a,
      isMediumSize: c,
      isInspected: u,
      isDisabled: d,
      showPulse: p,
      columnIndex: m,
      rowIndex: h,
      size: b,
      surrogateCodePoint: S,
      allowAnimatedEmoji: T,
      selectedItemClassName: N,
      inNitroLockedSection: P
    } = e, R = C(e, ["emoji", "isFavorite", "isLargeSize", "isMediumSize", "isInspected", "isDisabled", "showPulse", "columnIndex", "rowIndex", "size", "surrogateCodePoint", "allowAnimatedEmoji", "selectedItemClassName", "inNitroLockedSection"]);
    let w = (0, s.e7)([g.Z], () => n.type === f.B.GUILD ? g.Z.getGuild(n.guildId) : true, [n]),
      D = () => {
        let e = (0, E.nY)(n);
        return ((null == w ? true : w.name) != null && (e = O.intl.formatToPlainString(O.t["nXv4/B"], {
          names: e,
          guildName: w.name
        })), i) ? O.intl.formatToPlainString(O.t["9FI9Z0"], {
          names: e
        }) : e
      },
      x = d && !P;
    return (0, r.jsx)(l.tEY, {
      children: (0, r.jsx)("button", A(I({}, R), {
        className: o()(v.emojiItem, {
          [v.emojiItemLarge]: a,
          [v.emojiItemMedium]: c,
          [v.emojiItemSelected]: u,
          [null != N ? N : ""]: u,
          [v.showPulse]: p
        }),
        "data-type": _.S.EMOJI,
        "data-id": n.id,
        "data-name": n.name,
        "data-surrogates": "surrogates" in n ? n.surrogates : null,
        "data-animated": n.animated ? "true" : null,
        ref: t,
        children: (0, r.jsx)(y.Z, {
          "aria-label": D(),
          columnIndex: m,
          rowIndex: h,
          emoji: n,
          size: b,
          surrogateCodePoint: S,
          allowAnimatedEmoji: T,
          isLocked: x
        })
      }))
    })
  });

function w(e) {
  let {
    descriptor: t,
    emojiItemKey: a,
    isInspected: o,
    rowIndex: f,
    channelGuildId: _,
    onInspect: g,
    onSelect: E,
    isScrolling: y,
    isUsingKeyboardNavigation: v,
    showEmojiFavoriteTooltip: S,
    surrogateCodePoint: T,
    selectedItemClassName: N,
    getEmojiItemProps: w,
    isMediumSize: D,
    isLargeSize: x,
    pulseItemKey: L,
    allowAnimatedEmoji: j,
    setPulseItemKey: M,
    messageId: k,
    isBurstReaction: U,
    rowPosition: G,
    inNitroLockedSection: Z
  } = e, [B, F] = i.useState(""), V = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), H = (0, s.e7)([d.ZP], () => d.ZP.getDisambiguatedEmojiContext(_), [_]), Y = i.useRef(null), {
    emoji: W,
    size: K,
    isDisabled: z,
    columnIndex: q
  } = t, Q = e => {
    if (e.stopPropagation(), y.current || v.current) return;
    let n = e.altKey;
    n && !d.ZP.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(W) && M(a), (0, m.Kw)(m.v6.FAVORITE_EMOJI_TOOLTIP), E(t, {
      isFinalSelection: !e.shiftKey,
      toggleFavorite: n
    })
  }, X = () => {
    y.current || v.current || g(t)
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
    } = s, d = C(s, ["ref", "tabIndex", "onFocus"]);
    return (0, i.createElement)("li", A(I({}, d), {
      key: a,
      ref: Y
    }), B !== P(q, f) && (0, r.jsx)(R, {
      ref: l,
      emoji: W,
      isFavorite: H.isFavoriteEmojiWithoutFetchingLatest(W),
      isLargeSize: x,
      isMediumSize: D,
      isInspected: o,
      isDisabled: z,
      showPulse: L === a,
      allowAnimatedEmoji: j,
      onFocus: null != u ? u : X,
      onMouseMove: X,
      onMouseEnter: t,
      onMouseLeave: n,
      onClick: e => {
        if (null != Y.current && null != G && null != k && !e.shiftKey && null != W.name && U && !V && j) {
          let e = null == W.id ? p.ZP.convertNameToSurrogate(W.name) : W.name,
            t = Y.current.getBoundingClientRect();
          t.x = G.x + (q + 1) * K, F(P(q, f)), (0, h.U)(k, e, W.id, t)
        }
        Q(e)
      },
      onContextMenu: J,
      tabIndex: c,
      columnIndex: q,
      rowIndex: f,
      size: K,
      surrogateCodePoint: T,
      selectedItemClassName: N,
      inNitroLockedSection: Z
    }))
  };
  return S ? (0, r.jsx)(l.aML, {
    "data-migration-pending": true,
    text: O.intl.formatToPlainString(O.t.glqNsf, {
      key: (0, b.isMac)() ? "Opt" : "Alt"
    }),
    position: "top",
    delay: 200,
    children: e => $(e)
  }, a) : $()
}
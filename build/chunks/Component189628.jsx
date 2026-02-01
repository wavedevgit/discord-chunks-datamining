/** Chunk was on web.js **/
/** chunk id: 189628, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk775602 = require("./775602.js"),
  Chunk508675 = require("./508675.js"),
  Chunk770335 = require("./770335.js"),
  Chunk7584 = require("./7584.js"),
  Chunk60587 = require("./60587.js"),
  Chunk450510 = require("./450510.js"),
  Chunk147421 = require("./147421.js"),
  Chunk71393 = require("./71393.js"),
  Chunk690521 = require("./690521.js"),
  Chunk723702 = require("./723702.js"),
  Chunk692092 = require("./692092.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk351341 = require("./351341.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
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

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = w(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let R = (e, t) => "".concat(e, ":").concat(t),
  P = Chunk64700.forwardRef(function(e, t) {
    let [n, ...i] = [e, t], {
      emoji: a,
      isFavorite: l,
      isLargeSize: u,
      isMediumSize: d,
      isInspected: f,
      isDisabled: _,
      showPulse: m,
      columnIndex: g,
      rowIndex: b,
      size: I,
      surrogateCodePoint: T,
      allowAnimatedEmoji: w,
      selectedItemClassName: R,
      inNitroLockedSection: P
    } = n, D = N(n, ["emoji", "isFavorite", "isLargeSize", "isMediumSize", "isInspected", "isDisabled", "showPulse", "columnIndex", "rowIndex", "size", "surrogateCodePoint", "allowAnimatedEmoji", "selectedItemClassName", "inNitroLockedSection"]), [L] = i, x = (0, s.bG)([E.A], () => a.type === p.i.GUILD ? E.A.getGuild(a.guildId) : true, [a]), M = () => {
      let e = (0, y.N)(a);
      return ((null == x ? true : x.name) != null && (e = v.intl.formatToPlainString(v.t["nXv4/B"], {
        names: e,
        guildName: x.name
      })), l) ? v.intl.formatToPlainString(v.t["9FI9Z0"], {
        names: e
      }) : e
    }, j = _ && !P;
    return (0, r.jsx)(c.vN3, {
      children: (0, r.jsx)("button", C(S({}, D), {
        className: o()(A._X, {
          [A.lG]: u,
          [A.Lh]: d,
          [A.Bx]: f,
          [null != R ? R : ""]: f,
          [A.TV]: m
        }),
        "data-type": h.g.EMOJI,
        "data-id": a.id,
        "data-name": a.name,
        "data-surrogates": "surrogates" in a ? a.surrogates : null,
        "data-animated": a.animated ? "true" : null,
        ref: L,
        children: (0, r.jsx)(O.A, {
          "aria-label": M(),
          columnIndex: g,
          rowIndex: b,
          emoji: a,
          size: I,
          surrogateCodePoint: T,
          allowAnimatedEmoji: w,
          isLocked: j
        })
      }))
    })
  });

function D(e) {
  var t;
  let {
    descriptor: a,
    emojiItemKey: o,
    isInspected: c,
    rowIndex: p,
    channelGuildId: h,
    onInspect: E,
    onSelect: y,
    isScrolling: O,
    isUsingKeyboardNavigation: A,
    showEmojiFavoriteTooltip: I,
    surrogateCodePoint: T,
    selectedItemClassName: w,
    getEmojiItemProps: D,
    isMediumSize: L,
    isLargeSize: x,
    pulseItemKey: M,
    allowAnimatedEmoji: j,
    setPulseItemKey: k,
    messageId: U,
    isBurstReaction: G,
    rowPosition: V,
    inNitroLockedSection: F
  } = e, [B, H] = i.useState(""), Y = (0, s.bG)([d.A], () => d.A.useReducedMotion), W = (0, s.bG)([f.Ay], () => f.Ay.getDisambiguatedEmojiContext(h), [h]), K = i.useRef(null), {
    emoji: z,
    size: q,
    isDisabled: Z,
    columnIndex: Q
  } = a, X = e => {
    if (e.stopPropagation(), O.current || A.current) return;
    let t = e.altKey;
    t && !f.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(z) && k(o), (0, m.sF)(m._2.FAVORITE_EMOJI_TOOLTIP), y(a, {
      isFinalSelection: !e.shiftKey,
      toggleFavorite: t
    })
  }, J = () => {
    O.current || A.current || E(a)
  }, $ = e => {
    (0, u.L3)(e, async () => {
      let {
        default: e
      } = await n.e("46132").then(n.bind(n, 233503));
      return t => (0, r.jsx)(e, S({}, t))
    })
  }, ee = null != (t = D(Q, p)) ? t : {}, {
    ref: et,
    tabIndex: en,
    onFocus: er
  } = ee, ei = N(ee, ["ref", "tabIndex", "onFocus"]), ea = B !== R(Q, p) ? (0, r.jsx)(P, {
    ref: et,
    emoji: z,
    isFavorite: W.isFavoriteEmojiWithoutFetchingLatest(z),
    isLargeSize: x,
    isMediumSize: L,
    isInspected: c,
    isDisabled: Z,
    showPulse: M === o,
    allowAnimatedEmoji: j,
    onFocus: null != er ? er : J,
    onMouseMove: J,
    onClick: e => {
      if (null != K.current && null != V && null != U && !e.shiftKey && null != z.name && G && !Y && j) {
        let e = null == z.id ? _.Ay.convertNameToSurrogate(z.name) : z.name,
          t = K.current.getBoundingClientRect();
        t.x = V.x + (Q + 1) * q, H(R(Q, p)), (0, g.h)(U, e, z.id, t)
      }
      X(e)
    },
    onContextMenu: $,
    tabIndex: en,
    columnIndex: Q,
    rowIndex: p,
    size: q,
    surrogateCodePoint: T,
    selectedItemClassName: w,
    inNitroLockedSection: F
  }) : null;
  return (0, i.createElement)("li", C(S({}, ei), {
    key: o,
    ref: K
  }), I ? (0, r.jsx)(l.m_, {
    text: v.intl.formatToPlainString(v.t.glqNsf, {
      key: (0, b.isMac)() ? "Opt" : "Alt"
    }),
    position: "top",
    delay: 200,
    children: ea
  }) : ea)
}
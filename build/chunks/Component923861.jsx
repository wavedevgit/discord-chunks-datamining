/** Chunk was on web.js **/
/** chunk id: 923861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => P
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk304072 = require("./304072.js"),
  Chunk736653 = require("./736653.js"),
  Chunk189551 = require("./189551.js"),
  Chunk770335 = require("./770335.js"),
  Chunk598770 = require("./598770.js"),
  Chunk850992 = require("./850992.js"),
  Chunk860371 = require("./860371.jsx"),
  Chunk594061 = require("./594061.js"),
  Chunk771104 = require("./771104.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk484333 = require("./484333.js"),
  Chunk189628 = require("./189628.jsx"),
  Chunk732139 = require("./732139.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk351341 = require("./351341.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
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

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e, t) {
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
let P = e => {
  let {
    emojiDescriptors: t,
    emojiSize: a,
    onSelect: S,
    onSelectSoundmoji: C,
    onInspect: w,
    surrogateCodePoint: P,
    getEmojiItemProps: D,
    getEmojiRowProps: x,
    isScrolling: L,
    isUsingKeyboardNavigation: j,
    rowIndex: M,
    allowAnimatedEmoji: k,
    showEmojiFavoriteTooltip: U,
    channelGuildId: G,
    category: V,
    selectedItemClassName: F,
    channelId: B,
    messageId: H,
    isBurstReaction: Y,
    inNitroLockedSection: W,
    handleScrollUpOnSectionCollapse: K
  } = e, z = n(619508), q = n(404828), X = n(600003), Z = n(318121), Q = n(443336), $ = n(258901), J = n(135974), ee = n(8013), et = (0, u.Ay)(), en = _.Om.getState(), [er, ei] = i.useState(en.inspectedExpressionPosition), [ea, es] = (0, c.A)(null, 300), eo = i.useRef(null);
  i.useEffect(() => _.Om.subscribe(e => e.inspectedExpressionPosition, e => ei(e)), []), i.useEffect(() => {
    m.bW.loadIfNecessary()
  }, []);
  let el = a === O.as.LARGE,
    ec = a === O.as.MEDIUM,
    eu = e => {
      let t = "".concat(e.rowIndex, "c").concat(e.columnIndex),
        n = function() {
          var n;
          let {
            onMouseEnter: a,
            onMouseLeave: o,
            handleSelect: c,
            icon: u,
            ariaLabel: d,
            shouldShowRoundHighlight: f
          } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, {
            visibleRowIndex: p,
            columnIndex: _
          } = e, h = null != (n = D(_, M)) ? n : {}, {
            ref: m,
            tabIndex: g,
            onFocus: E
          } = h, y = R(h, ["ref", "tabIndex", "onFocus"]), b = er.rowIndex === p && er.columnIndex === _, O = () => {
            L.current || j.current || w(e)
          };
          return (0, i.createElement)("li", N(T({}, y), {
            key: t
          }), (0, r.jsx)(l.vN3, {
            children: (0, r.jsx)("button", {
              "aria-label": d,
              ref: m,
              className: s()(I._X, {
                [I.lG]: el,
                [I.Lh]: ec,
                [I.Bx]: b && !f,
                [null != F ? F : ""]: b,
                [I.TV]: ea === t
              }),
              onFocus: null != E ? E : O,
              onMouseOver: O,
              onMouseEnter: a,
              onMouseLeave: o,
              onClick: c,
              tabIndex: g,
              children: u
            })
          }))
        };
      switch (e.type) {
        case y.bm.EXPAND_OR_COLLAPSE_EMOJIS: {
          let {
            visibleRowIndex: t,
            columnIndex: i
          } = e, a = er.rowIndex === t && er.columnIndex === i, s = t => {
            t.stopPropagation(), L.current || j.current || (S(e, {
              isFinalSelection: true,
              toggleFavorite: false
            }), (0, d.G)(e.guildId), e.sectionCollapsedToThreeRows || K(), E.default.track(v.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
              collapsed: e.sectionCollapsedToThreeRows,
              guild_id: e.guildId
            }))
          }, l = e.sectionCollapsedToThreeRows ? a ? (0, o.Mw)(et) ? $ : ee : (0, o.Mw)(et) ? z : q : a ? (0, o.Mw)(et) ? Q : J : (0, o.Mw)(et) ? X : Z, c = A.intl.string(e.sectionCollapsedToThreeRows ? A.t.NZI2Zk : A.t["/K2RDH"]);
          return n({
            handleSelect: s,
            icon: (0, r.jsx)("img", {
              className: I.Kk,
              src: l,
              alt: ""
            }),
            ariaLabel: c,
            shouldShowRoundHighlight: true
          })
        }
        case y.bm.EMOJI: {
          var a;
          let {
            columnIndex: n,
            visibleRowIndex: i
          } = e, s = er.rowIndex === i && er.columnIndex === n;
          return (0, r.jsx)(b.A, {
            rowIndex: M,
            descriptor: e,
            emojiItemKey: t,
            isInspected: s,
            isScrolling: L,
            isUsingKeyboardNavigation: j,
            surrogateCodePoint: P,
            allowAnimatedEmoji: k,
            selectedItemClassName: F,
            onSelect: S,
            onInspect: w,
            channelGuildId: G,
            getEmojiItemProps: D,
            isMediumSize: ec,
            isLargeSize: el,
            pulseItemKey: ea,
            setPulseItemKey: es,
            showEmojiFavoriteTooltip: U,
            messageId: H,
            isBurstReaction: Y,
            rowPosition: null == eo || null == (a = eo.current) ? true : a.getBoundingClientRect(),
            inNitroLockedSection: W
          }, t)
        }
        case y.bm.SOUNDMOJI:
          return
      }
    },
    ed = e => (0, r.jsx)("ul", N(T({}, x(M)), {
      className: s()(I.ND, {
        [I.HO]: el,
        [I.X$]: ec
      }),
      ref: eo,
      children: e.map(eu)
    }));
  if (V === O.R2.SOUNDMOJI) return (0, r.jsx)("ul", {
    className: I.ND,
    ref: eo,
    children: (0, r.jsx)(h.A, {
      channelId: B,
      onSelectSoundmoji: C
    })
  });
  if (V !== O.s.TOP_GUILD_EMOJI) return ed(t);
  let ef = t.filter(e => {
      let t = e;
      return t.subCategory === O.tm.TOP_GUILD_EMOJI || t.subCategory === O.tm.NEWLY_ADDED_EMOJI && t.emoji.type === f.i.GUILD && !p.A.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id)
    }),
    ep = t.filter(e => {
      let t = e;
      return t.subCategory === O.tm.NEWLY_ADDED_EMOJI && t.emoji.type === f.i.GUILD && p.A.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id)
    });
  return 0 === ep.length ? ed(t) : (0, r.jsxs)("div", {
    className: I.Ng,
    children: [(0, r.jsx)("div", {
      className: s()(I.V6, {
        [I.$3]: 0 === ef.length
      }),
      children: ed(ef)
    }), (0, r.jsxs)("div", {
      className: I.bc,
      children: [(0, r.jsx)("div", {
        className: s()(I.eE, {
          [I.eM]: 1 === ep.length,
          [I.Wk]: ef.length > 0
        }),
        children: ed(ep)
      }), (0, r.jsxs)("div", {
        className: s()(I.lD, {
          [I.EI]: el,
          [I.qU]: ec,
          [I.Wk]: ef.length > 0
        }),
        children: [(0, r.jsx)(g.A, {
          foreground: I.rI
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/semibold",
          color: "always-white",
          children: A.intl.string(A.t.y2b7CA)
        })]
      })]
    })]
  })
}
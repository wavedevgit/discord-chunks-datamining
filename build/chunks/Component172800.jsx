/** Chunk was on web.js **/
/** chunk id: 172800, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk330726 = require("./330726.js"),
  Chunk410030 = require("./410030.js"),
  Chunk556019 = require("./556019.js"),
  Chunk255963 = require("./255963.js"),
  Chunk906411 = require("./906411.js"),
  Chunk438332 = require("./438332.js"),
  Chunk806966 = require("./806966.js"),
  Chunk434404 = require("./434404.js"),
  Chunk598804 = require("./598804.jsx"),
  Chunk675478 = require("./675478.js"),
  Chunk819758 = require("./819758.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk784222 = require("./784222.js"),
  Chunk926243 = require("./926243.jsx"),
  Chunk149203 = require("./149203.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk8905 = require("./8905.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = D(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let x = e => {
  let {
    emojiDescriptors: t,
    emojiSize: a,
    onSelect: A,
    onSelectSoundmoji: P,
    onInspect: D,
    surrogateCodePoint: x,
    getEmojiItemProps: L,
    getEmojiRowProps: j,
    isScrolling: M,
    isUsingKeyboardNavigation: k,
    rowIndex: U,
    allowAnimatedEmoji: G,
    showEmojiFavoriteTooltip: Z,
    channelGuildId: F,
    category: B,
    selectedItemClassName: V,
    channelId: H,
    messageId: Y,
    isBurstReaction: W,
    inNitroLockedSection: K,
    handleScrollUpOnSectionCollapse: z
  } = e, {
    enabled: q
  } = (0, d.qt)({
    location: "emoji_picker_list_row",
    autoTrackExposure: false
  }), Q = n(187119), X = n(39874), J = n(853871), $ = n(63149), ee = n(263112), et = n(490567), en = n(292795), er = n(7940), ei = (0, u.ZP)(), ea = m.kJ.getState(), [eo, es] = i.useState(ea.inspectedExpressionPosition), [el, ec] = (0, c.Z)(null, 300), eu = i.useRef(null);
  i.useEffect(() => m.kJ.subscribe(e => e.inspectedExpressionPosition, e => es(e)), []), i.useEffect(() => {
    E.DZ.loadIfNecessary()
  }, []);
  let ed = a === S.Su.LARGE,
    ef = a === S.Su.MEDIUM,
    ep = e => {
      let t = "".concat(e.rowIndex, "c").concat(e.columnIndex),
        n = function() {
          var n;
          let {
            onMouseEnter: a,
            onMouseLeave: s,
            handleSelect: c,
            icon: u,
            ariaLabel: d,
            shouldShowRoundHighlight: f
          } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, {
            visibleRowIndex: p,
            columnIndex: _
          } = e, m = null != (n = L(_, U)) ? n : {}, {
            ref: h,
            tabIndex: g,
            onFocus: E
          } = m, b = w(m, ["ref", "tabIndex", "onFocus"]), y = eo.rowIndex === p && eo.columnIndex === _, O = () => {
            M.current || k.current || D(e)
          };
          return (0, i.createElement)("li", R(N({}, b), {
            key: t
          }), (0, r.jsx)(l.tEY, {
            children: (0, r.jsx)("button", {
              "aria-label": d,
              ref: h,
              className: o()(C.emojiItem, {
                [C.emojiItemLarge]: ed,
                [C.emojiItemMedium]: ef,
                [C.emojiItemSelected]: y && !f,
                [null != V ? V : ""]: y,
                [C.showPulse]: el === t
              }),
              onFocus: null != E ? E : O,
              onMouseOver: O,
              onMouseEnter: a,
              onMouseLeave: s,
              onClick: c,
              tabIndex: g,
              children: u
            })
          }))
        };
      switch (e.type) {
        case O.ld.EXPAND_OR_COLLAPSE_EMOJIS: {
          let {
            visibleRowIndex: t,
            columnIndex: i
          } = e, a = eo.rowIndex === t && eo.columnIndex === i, o = t => {
            t.stopPropagation(), M.current || k.current || (A(e, {
              isFinalSelection: true,
              toggleFavorite: false
            }), (0, f.D)(e.guildId), e.sectionCollapsedToThreeRows || z(), y.default.track(I.rMx.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
              collapsed: e.sectionCollapsedToThreeRows,
              guild_id: e.guildId
            }))
          }, l = e.sectionCollapsedToThreeRows ? a ? (0, s.wj)(ei) ? et : er : (0, s.wj)(ei) ? Q : X : a ? (0, s.wj)(ei) ? ee : en : (0, s.wj)(ei) ? J : $, c = T.intl.string(e.sectionCollapsedToThreeRows ? T.t.NZI2Zk : T.t["/K2RDH"]);
          return n({
            handleSelect: o,
            icon: (0, r.jsx)("img", {
              className: C.icon,
              src: l,
              alt: ""
            }),
            ariaLabel: c,
            shouldShowRoundHighlight: true
          })
        }
        case O.ld.CREATE_EMOJI: {
          if (q) return null;
          let t = t => {
            t.stopPropagation(), M.current || k.current || (A(e, {
              isFinalSelection: true,
              toggleFavorite: false
            }), h.Z.open(e.guildId, I.pNK.EMOJI, I.jXE.EMOJI_PICKER_POPOUT))
          };
          return n({
            handleSelect: t,
            icon: (0, r.jsx)(l.oFk, {
              size: "md",
              color: "currentColor",
              className: C.icon,
              colorClass: C.icon
            }),
            ariaLabel: T.intl.string(T.t["Z/r7IS"]),
            shouldShowRoundHighlight: false
          })
        }
        case O.ld.EMOJI: {
          var a;
          let {
            columnIndex: n,
            visibleRowIndex: i
          } = e, o = eo.rowIndex === i && eo.columnIndex === n;
          return (0, r.jsx)(v.Z, {
            rowIndex: U,
            descriptor: e,
            emojiItemKey: t,
            isInspected: o,
            isScrolling: M,
            isUsingKeyboardNavigation: k,
            surrogateCodePoint: x,
            allowAnimatedEmoji: G,
            selectedItemClassName: V,
            onSelect: A,
            onInspect: D,
            channelGuildId: F,
            getEmojiItemProps: L,
            isMediumSize: ef,
            isLargeSize: ed,
            pulseItemKey: el,
            setPulseItemKey: ec,
            showEmojiFavoriteTooltip: Z,
            messageId: Y,
            isBurstReaction: W,
            rowPosition: null == eu || null == (a = eu.current) ? true : a.getBoundingClientRect(),
            inNitroLockedSection: K
          }, t)
        }
        case O.ld.SOUNDMOJI:
          return
      }
    },
    e_ = e => (0, r.jsx)("ul", R(N({}, j(U)), {
      className: o()(C.emojiListRow, {
        [C.emojiListRowLargeSize]: ed,
        [C.emojiListRowMediumSize]: ef
      }),
      ref: eu,
      children: e.map(ep)
    }));
  if (B === S.UX.SOUNDMOJI) return (0, r.jsx)("ul", {
    className: C.emojiListRow,
    ref: eu,
    children: (0, r.jsx)(g.Z, {
      channelId: H,
      onSelectSoundmoji: P
    })
  });
  if (B !== S.En.TOP_GUILD_EMOJI) return e_(t);
  let em = t.filter(e => {
      let t = e;
      return t.subCategory === S.t0.TOP_GUILD_EMOJI || t.subCategory === S.t0.NEWLY_ADDED_EMOJI && t.emoji.type === p.B.GUILD && !_.Z.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id)
    }),
    eh = t.filter(e => {
      let t = e;
      return t.subCategory === S.t0.NEWLY_ADDED_EMOJI && t.emoji.type === p.B.GUILD && _.Z.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id)
    });
  return 0 === eh.length ? e_(t) : (0, r.jsxs)("div", {
    className: C.topEmojiSectionContainer,
    children: [(0, r.jsx)("div", {
      className: o()(C.topEmojiContainer, {
        [C.noEmojis]: 0 === em.length
      }),
      children: e_(em)
    }), (0, r.jsxs)("div", {
      className: C.newlyAddedHighlightContainer,
      children: [(0, r.jsx)("div", {
        className: o()(C.newlyAddedHighlight, {
          [C.oneItem]: 1 === eh.length,
          [C.alignRight]: em.length > 0
        }),
        children: e_(eh)
      }), (0, r.jsxs)("div", {
        className: o()(C.newlyAddedBadge, {
          [C.newlyAddedBadgeLarge]: ed,
          [C.newlyAddedBadgeMedium]: ef,
          [C.alignRight]: em.length > 0
        }),
        children: [(0, r.jsx)(b.Z, {
          foreground: C.newlyAddedBadgeStar
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/semibold",
          color: "always-white",
          children: T.intl.string(T.t.y2b7CA)
        })]
      })]
    })]
  })
}
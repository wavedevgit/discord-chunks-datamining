/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => L
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(780384),
  l = n(481060),
  c = n(330726),
  u = n(410030),
  d = n(255963),
  f = n(906411),
  _ = n(438332),
  p = n(806966),
  h = n(434404),
  g = n(598804),
  m = n(675478),
  E = n(819758),
  v = n(626135),
  b = n(392552),
  y = n(784222),
  O = n(926243),
  S = n(149203),
  I = n(981631),
  T = n(388032),
  N = n(836603);

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function C(e) {
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

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = w(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let L = e => {
  let {
    emojiDescriptors: t,
    emojiSize: o,
    onSelect: A,
    onSelectSoundmoji: R,
    onInspect: w,
    surrogateCodePoint: L,
    getEmojiItemProps: x,
    getEmojiRowProps: M,
    isScrolling: j,
    isUsingKeyboardNavigation: k,
    rowIndex: U,
    allowAnimatedEmoji: G,
    showEmojiFavoriteTooltip: B,
    channelGuildId: F,
    category: V,
    selectedItemClassName: Z,
    channelId: H,
    messageId: W,
    isBurstReaction: Y,
    inNitroLockedSection: K,
    handleScrollUpOnSectionCollapse: z
  } = e, {
    enabled: q
  } = b.Z.useExperiment({
    location: "EmojiPicker"
  }, {
    autoTrackExposure: !1
  }), Q = n(187119), X = n(39874), J = n(853871), $ = n(63149), ee = n(263112), et = n(490567), en = n(292795), er = n(7940), ei = (0, u.ZP)(), eo = p.kJ.getState(), [ea, es] = i.useState(eo.inspectedExpressionPosition), [el, ec] = (0, c.Z)(null, 300), eu = i.useRef(null);
  i.useEffect(() => p.kJ.subscribe(e => e.inspectedExpressionPosition, e => es(e)), []), i.useEffect(() => {
    m.DZ.loadIfNecessary()
  }, []);
  let ed = o === S.Su.LARGE,
    ef = o === S.Su.MEDIUM,
    e_ = e => {
      let t = "".concat(e.rowIndex, "c").concat(e.columnIndex),
        n = function() {
          var n;
          let {
            onMouseEnter: o,
            onMouseLeave: s,
            handleSelect: c,
            icon: u,
            ariaLabel: d,
            shouldShowRoundHighlight: f
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
            visibleRowIndex: _,
            columnIndex: p
          } = e, h = null !== (n = x(p, U)) && void 0 !== n ? n : {}, {
            ref: g,
            tabIndex: m,
            onFocus: E
          } = h, v = D(h, ["ref", "tabIndex", "onFocus"]), b = ea.rowIndex === _ && ea.columnIndex === p, y = () => {
            j.current || k.current || w(e)
          };
          return (0, i.createElement)("li", P(C({}, v), {
            key: t
          }), (0, r.jsx)(l.tEY, {
            children: (0, r.jsx)("button", {
              "aria-label": d,
              ref: g,
              className: a()(N.emojiItem, {
                [N.emojiItemLarge]: ed,
                [N.emojiItemMedium]: ef,
                [N.emojiItemSelected]: b && !f,
                [null != Z ? Z : ""]: b,
                [N.showPulse]: el === t
              }),
              onFocus: null != E ? E : y,
              onMouseOver: y,
              onMouseEnter: o,
              onMouseLeave: s,
              onClick: c,
              tabIndex: m,
              children: u
            })
          }))
        };
      switch (e.type) {
        case y.ld.EXPAND_OR_COLLAPSE_EMOJIS: {
          let {
            visibleRowIndex: t,
            columnIndex: i
          } = e, o = ea.rowIndex === t && ea.columnIndex === i, a = t => {
            t.stopPropagation(), j.current || k.current || (A(e, {
              isFinalSelection: !0,
              toggleFavorite: !1
            }), (0, d.D)(e.guildId), e.sectionCollapsedToThreeRows || z(), v.default.track(I.rMx.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
              collapsed: e.sectionCollapsedToThreeRows,
              guild_id: e.guildId
            }))
          }, l = e.sectionCollapsedToThreeRows ? o ? (0, s.wj)(ei) ? et : er : (0, s.wj)(ei) ? Q : X : o ? (0, s.wj)(ei) ? ee : en : (0, s.wj)(ei) ? J : $, c = T.NW.string(e.sectionCollapsedToThreeRows ? T.t.NZI2Zm : T.t["/K2RDA"]);
          return n({
            handleSelect: a,
            icon: (0, r.jsx)("img", {
              className: N.icon,
              src: l,
              alt: ""
            }),
            ariaLabel: c,
            shouldShowRoundHighlight: !0
          })
        }
        case y.ld.CREATE_EMOJI: {
          let t = t => {
            t.stopPropagation(), j.current || k.current || (A(e, {
              isFinalSelection: !0,
              toggleFavorite: !1
            }), h.Z.open(e.guildId, I.pNK.EMOJI, I.jXE.EMOJI_PICKER_POPOUT))
          };
          return n({
            handleSelect: t,
            icon: (0, r.jsx)(l.oFk, {
              size: "md",
              color: "currentColor",
              className: N.icon,
              colorClass: N.icon
            }),
            ariaLabel: T.NW.string(T.t["Z/r7IS"]),
            shouldShowRoundHighlight: !1
          })
        }
        case y.ld.EMOJI: {
          var o;
          let {
            columnIndex: n,
            visibleRowIndex: i
          } = e, a = ea.rowIndex === i && ea.columnIndex === n;
          return (0, r.jsx)(O.Z, {
            rowIndex: U,
            descriptor: e,
            emojiItemKey: t,
            isInspected: a,
            isScrolling: j,
            isUsingKeyboardNavigation: k,
            surrogateCodePoint: L,
            allowAnimatedEmoji: G,
            selectedItemClassName: Z,
            onSelect: A,
            onInspect: w,
            channelGuildId: F,
            getEmojiItemProps: x,
            isMediumSize: ef,
            isLargeSize: ed,
            pulseItemKey: el,
            setPulseItemKey: ec,
            showEmojiFavoriteTooltip: B,
            messageId: W,
            isBurstReaction: Y,
            rowPosition: null == eu ? void 0 : null === (o = eu.current) || void 0 === o ? void 0 : o.getBoundingClientRect(),
            inNitroLockedSection: K
          }, t)
        }
        case y.ld.SOUNDMOJI:
          return
      }
    },
    ep = e => (0, r.jsx)("ul", P(C({}, M(U)), {
      className: a()(N.emojiListRow, {
        [N.emojiListRowLargeSize]: ed,
        [N.emojiListRowMediumSize]: ef
      }),
      ref: eu,
      children: e.map(e_)
    }));
  if (V === S.UX.SOUNDMOJI) return (0, r.jsx)("ul", {
    className: a()(N.emojiListRow),
    ref: eu,
    children: (0, r.jsx)(g.Z, {
      channelId: H,
      onSelectSoundmoji: R
    })
  });
  if (V !== S.En.TOP_GUILD_EMOJI) return ep(t);
  let eh = t.filter(e => {
      if (q && e.type === y.ld.CREATE_EMOJI) return !0;
      let t = e;
      return t.subCategory === S.t0.TOP_GUILD_EMOJI || t.subCategory === S.t0.NEWLY_ADDED_EMOJI && t.emoji.type === f.B.GUILD && !_.Z.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id)
    }),
    eg = t.filter(e => {
      let t = e;
      return t.subCategory === S.t0.NEWLY_ADDED_EMOJI && t.emoji.type === f.B.GUILD && _.Z.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id)
    });
  return 0 === eg.length ? ep(t) : (0, r.jsxs)("div", {
    className: N.topEmojiSectionContainer,
    children: [(0, r.jsx)("div", {
      className: a()(N.topEmojiContainer, {
        [N.noEmojis]: 0 === eh.length
      }),
      children: ep(eh)
    }), (0, r.jsxs)("div", {
      className: N.newlyAddedHighlightContainer,
      children: [(0, r.jsx)("div", {
        className: a()(N.newlyAddedHighlight, {
          [N.oneItem]: 1 === eg.length,
          [N.alignRight]: eh.length > 0
        }),
        children: ep(eg)
      }), (0, r.jsxs)("div", {
        className: a()(N.newlyAddedBadge, {
          [N.newlyAddedBadgeLarge]: ed,
          [N.newlyAddedBadgeMedium]: ef,
          [N.alignRight]: eh.length > 0
        }),
        children: [(0, r.jsx)(E.Z, {
          foreground: N.newlyAddedBadgeStar
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/semibold",
          color: "always-white",
          children: T.NW.string(T.t.y2b7CA)
        })]
      })]
    })]
  })
}
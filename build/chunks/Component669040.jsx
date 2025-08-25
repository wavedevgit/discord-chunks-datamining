/** Chunk was on web.js **/
/** chunk id: 669040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ec
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk336317 = require("./336317.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk788911 = require("./788911.jsx"),
  Chunk2052 = require("./2052.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk218867 = require("./218867.jsx"),
  Chunk806966 = require("./806966.js"),
  Chunk28546 = require("./28546.js"),
  Chunk691251 = require("./691251.js"),
  Chunk122567 = require("./122567.js"),
  Chunk98528 = require("./98528.js"),
  Chunk551058 = require("./551058.jsx"),
  Chunk536442 = require("./536442.js"),
  Chunk140465 = require("./140465.js"),
  Chunk775412 = require("./775412.js"),
  Chunk53691 = require("./53691.jsx"),
  Chunk75145 = require("./75145.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk111361 = require("./111361.js"),
  Chunk74538 = require("./74538.js"),
  Chunk624138 = require("./624138.js"),
  Chunk543241 = require("./543241.js"),
  Chunk883661 = require("./883661.jsx"),
  Chunk880949 = require("./880949.jsx"),
  Chunk784222 = require("./784222.js"),
  Chunk172800 = require("./172800.jsx"),
  Chunk149203 = require("./149203.js"),
  Chunk981631 = require("./981631.js"),
  Chunk957825 = require("./957825.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk751466 = require("./751466.js");
let W = 0,
  K = 0,
  z = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
  q = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
  X = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
  Q = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
  J = (0, Chunk624138.Mg)(Chunk477690.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
  $ = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
  ee = 16,
  et = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
  en = 41,
  er = 33,
  ei = e => e + 2 * et,
  ea = e => {
    let {
      collapsedSections: t,
      diversitySurrogate: n,
      emojiGrid: a,
      emojiSize: s,
      onEmojiSelect: c,
      onSelectSoundmoji: f,
      searchQuery: p,
      sectionDescriptors: m,
      setCollapsedSections: g,
      getEmojiItemProps: O,
      getEmojiRowProps: v,
      isScrolling: A,
      isUsingKeyboardNavigation: C,
      allowAnimatedEmoji: R,
      channelGuildId: P,
      channelId: D,
      messageId: x,
      isBurstReaction: L,
      listHeaderClassName: V,
      activeSectionIndex: W,
      upsellGlowOpacity: et,
      emojiListRef: ei
    } = e, ea = (0, h.O)(), eo = i.useRef(Z.xAR), es = i.useMemo(() => "" !== n ? d.Z.convert.toCodePoint(n) : "", [n]), el = i.useCallback(e => {
      let t = m[e],
        n = m[e + 1];
      return e >= m.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked
    }, [m]), ec = i.useCallback(e => {
      if (e >= m.length - 1) returnfalse;
      let t = m[e],
        n = m[e + 1];
      return !t.isNitroLocked && n.isNitroLocked
    }, [m]), eu = i.useCallback(function(e) {
      let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
        r = new Set(t),
        i = t.has(e);
      i ? r.delete(e) : r.add(e), null != n && w.default.track(Z.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
        location: ea.location,
        tab: F.X1.EMOJI,
        collapsed: !i,
        guild_id: n.id
      }), e === B.UX.SOUNDMOJI && w.default.track(Z.rMx.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, {
        collapsed: !i
      }), g(r)
    }, [ea, t, g]), ed = i.useCallback(e => {
      let {
        columnIndex: t,
        visibleRowIndex: n
      } = e, r = e.type === U.ld.SOUNDMOJI ? null : e.type === U.ld.EMOJI ? e.emoji.allNamesString : e.name;
      eo.current !== Z.xAR && window.cancelAnimationFrame(eo.current), eo.current = window.requestAnimationFrame(() => {
        E.kJ.setInspectedExpressionPosition(t, n, y.u.MOUSE_EVENT), E.kJ.setSearchPlaceholder(r), eo.current = Z.xAR
      })
    }, []), ef = (0, u.e7)([T.qc], () => T.qc.hasHotspot(T.v6.FAVORITE_EMOJI_TOOLTIP), []), e_ = i.useMemo(() => l().memoize((e, t) => {
      let n = a[e],
        i = m[t.sectionIndex],
        o = () => {
          var e;
          null == (e = ei.current) || e.scrollToSectionTop(t.sectionIndex, {
            animate: true
          })
        };
      return (0, r.jsx)(G.Z, {
        emojiDescriptors: n,
        emojiSize: s,
        surrogateCodePoint: es,
        onInspect: ed,
        onSelect: c,
        onSelectSoundmoji: f,
        getEmojiItemProps: O,
        getEmojiRowProps: v,
        isScrolling: A,
        isUsingKeyboardNavigation: C,
        rowIndex: e,
        allowAnimatedEmoji: R,
        showEmojiFavoriteTooltip: ef,
        channelGuildId: P,
        category: i.sectionId,
        selectedItemClassName: Y.__invalid_selectedItem,
        channelId: D,
        messageId: x,
        isBurstReaction: L,
        inNitroLockedSection: i.isNitroLocked,
        handleScrollUpOnSectionCollapse: o
      }, e)
    }), [a, m, s, es, ed, c, f, O, v, A, C, R, ef, P, D, x, L, ei]);
    i.useEffect(() => () => {
      var e, t;
      return null == (t = e_.cache) || null == (e = t.clear) ? true : e.call(t)
    }, [e_]);
    let ep = i.useMemo(() => l().memoize(e => {
        let n = m[e];
        if (null == n) return;
        let {
          guild: i,
          categoryId: a,
          type: s,
          sectionId: l
        } = n;
        if (s === B.En.SEARCH_RESULTS) return;
        let c = s === B.En.GUILD ? null != i ? (0, r.jsx)(M.Z, {
            guild: i,
            height: ee,
            width: ee
          }) : null : null != a ? (0, r.jsx)(k.Z, {
            categoryId: a,
            height: ee,
            width: ee,
            size: "custom"
          }) : null,
          u = null == i ? true : i.name;
        null != a && (u = (0, j.Y1)(a, null == i ? true : i.name));
        let d = W === e,
          f = n.isNitroLocked,
          p = f && !d,
          h = f && d,
          g = s === B.En.SOUNDMOJI ? (0, r.jsx)(_.P3F, {
            className: Y.soundmojiViewMore,
            onClick: () => {
              (0, b.hr)(F.X1.SOUNDBOARD), w.default.track(Z.rMx.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK)
            },
            children: H.intl.string(H.t.rUEjBQ)
          }) : true;
        return (0, r.jsx)(I.Z, {
          className: o()(Y.header, V, {
            [Y.inactiveNitroHeader]: p,
            [Y.activeNitroHeader]: h
          }),
          icon: c,
          isCollapsed: t.has(l),
          onClick: () => eu(l, i),
          trailing: g,
          children: u
        }, l)
      }), [m, t, eu, V, W]),
      eh = (0, S.B4)(),
      em = i.useCallback((e, n) => {
        let i = m[e],
          a = ec(e),
          s = el(e);
        return (0, r.jsx)("div", {
          className: o()(Y.categorySection, {
            [Y.categorySectionLast]: e === m.length - 1,
            [Y.categorySectionCollapsed]: t.has(i.sectionId),
            [Y.categorySectionNitroLocked]: i.isNitroLocked,
            [Y.categorySectionNitroDivider]: a || s
          }),
          children: n
        }, e)
      }, [t, m, ec, el]),
      eg = i.useCallback(e => ec(e) ? eh ? (0, r.jsx)(N.fi, {}) : (0, r.jsx)(N.ZP, {
        glowOpacity: et
      }) : el(e) ? (0, r.jsx)("div", {
        className: Y.nitroBottomDivider
      }) : null, [et, ec, el, eh]),
      eE = i.useCallback(e => ec(e) ? en : el(e) ? er : 0, [ec, el]),
      eb = i.useCallback(e => {
        var n;
        return e === m.length - 1 || t.has(null == (n = m[e]) ? true : n.sectionId) || ec(e) || el(e) ? 0 : $
      }, [t, m, ec, el]);
    return {
      listPadding: i.useMemo(() => ["" !== p ? Q : z, q, X, K], [p]),
      renderRow: e_,
      renderSection: em,
      renderSectionHeader: ep,
      renderSectionFooter: eg,
      sectionMarginBottom: eb,
      sectionHeaderHeight: i.useCallback(e => m[e].type === B.En.SEARCH_RESULTS ? 0 : J, [m]),
      sectionFooterHeight: eE
    }
  },
  eo = Chunk647438.memo(function(e) {
    let {
      diversitySurrogate: t,
      emojiGrid: n,
      emojiListRef: a,
      emojiSize: o,
      onEmojiSelect: s,
      onSelectSoundmoji: l,
      setUpsellConfigs: d,
      sectionDescriptors: f,
      rowCountBySection: _,
      collapsedSections: y,
      setCollapsedSections: O,
      getEmojiItemProps: I,
      getEmojiRowProps: T,
      rowCount: S,
      isUsingKeyboardNavigation: N,
      channelGuildId: L,
      channelId: j,
      messageId: k,
      isBurstReaction: M,
      listHeaderClassName: G
    } = e, B = i.useRef(false), F = E.kJ.useStore(e => e.activeCategoryIndex), K = (0, b.Iu)(e => e.searchQuery), z = R.Yk.useSetting(), q = (0, u.e7)([P.default], () => P.default.getCurrentUser()), X = (0, D.I5)(q), {
      location: Q
    } = (0, h.O)(), {
      analyticsLocations: J
    } = (0, m.ZP)(), [$, ee] = i.useState(0), [et, en] = i.useState(false), [er, eo] = i.useState(0), {
      listPadding: el,
      renderRow: ec,
      renderSection: eu,
      renderSectionHeader: ed,
      renderSectionFooter: ef,
      sectionMarginBottom: e_,
      sectionHeaderHeight: ep,
      sectionFooterHeight: eh
    } = ea({
      collapsedSections: y,
      diversitySurrogate: t,
      emojiGrid: n,
      emojiSize: o,
      onEmojiSelect: s,
      onSelectSoundmoji: l,
      searchQuery: K,
      sectionDescriptors: f,
      setCollapsedSections: O,
      getEmojiItemProps: I,
      getEmojiRowProps: T,
      isScrolling: B,
      isUsingKeyboardNavigation: N,
      allowAnimatedEmoji: z,
      channelGuildId: L,
      channelId: j,
      messageId: k,
      isBurstReaction: M,
      listHeaderClassName: G,
      activeSectionIndex: $,
      upsellGlowOpacity: er,
      emojiListRef: a
    }), em = e => {
      ee(e), "" === K && E.kJ.setActiveCategoryIndex(e)
    }, eg = (0, v.fe)({
      listRef: a,
      searchQuery: K,
      nitroLockedSectionStates: f,
      setUpsellGlowOpacity: eo
    }), eE = (0, v.Qs)({
      activeCategoryIndex: F,
      isScrolling: B,
      listRef: a,
      onActiveCategoryIndexChange: em,
      scrollOffset: W,
      searchQuery: K,
      disableForSearch: false
    });
    (0, v.Xs)({
      searchQuery: K,
      activeCategoryIndex: F,
      listRef: a
    });
    let eb = i.useCallback(e => {
        eg(e), eE(e), es({
          emojiListRef: a,
          sectionDescriptors: f,
          scrollTop: e,
          searchQuery: K,
          setShowUpsell: en
        })
      }, [eg, eE, a, f, K, en]),
      ey = f.length > 0;

    function eO() {
      let e = (0, x.Px)(V.p9.TIER_2);
      return H.intl.format(H.t.gMVjeX, {
        nitroTierName: e,
        onClick: () => {
          d({
            type: U.Bg.PREMIUM,
            emojiDescriptor: true
          })
        }
      })
    }

    function ev() {
      var e;
      let t = (0, A.J0)();
      return null != (e = (0, x.fr)(t)) ? e : H.intl.string(H.t.BmJkbW)
    }
    return i.useEffect(() => {
      et && w.default.track(Z.rMx.PREMIUM_UPSELL_VIEWED, {
        type: V.cd.EMOJI_PICKER_FLOATING_UPSELL,
        location: Q,
        location_stack: J
      })
    }, [Q, J, et]), i.useEffect(() => {
      "" !== K && (eo(0), en(false))
    }, [K]), (0, r.jsxs)("div", {
      className: Y.listWrapper,
      children: [ey ? (0, r.jsx)(g.Z, {
        role: "none presentation",
        className: Y.list,
        listPadding: el,
        onScroll: eb,
        renderRow: ec,
        renderSection: eu,
        renderSectionHeader: ed,
        renderSectionFooter: ef,
        rowCount: S,
        rowCountBySection: _,
        rowHeight: ei(o),
        sectionHeaderHeight: ep,
        sectionMarginBottom: e_,
        sectionFooterHeight: eh,
        stickyHeaders: true,
        ref: a
      }) : (0, r.jsx)(p.Z, {
        message: H.intl.string(H.t.IxxiKC),
        className: Y.noSearchResultsContainer
      }), X || c.tq ? null : (0, r.jsx)(C.p, {
        showUpsell: et,
        text: eO(),
        button: ev(),
        buttonAnalyticsObject: {
          section: Z.jXE.EMOJI_PICKER_FLOATING_UPSELL
        }
      })]
    })
  }),
  es = l().throttle(el, 300, {
    leading: false,
    trailing: true
  });

function el(e) {
  let {
    emojiListRef: t,
    sectionDescriptors: n,
    scrollTop: r,
    searchQuery: i,
    setShowUpsell: a
  } = e;
  a((0, O.y)({
    listRef: t,
    searchQuery: i,
    nitroLockedSectionStates: n,
    scrollTop: r
  }).areOnlyNitroLockedSectionsVisible)
}
let ec = eo
/** Chunk was on web.js **/
/** chunk id: 669040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ed
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk597276 = require("./597276.js"),
  Chunk53691 = require("./53691.jsx"),
  Chunk75145 = require("./75145.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk176354 = require("./176354.js"),
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
let z = 0,
  q = 0,
  X = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
  Q = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
  J = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
  $ = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
  ee = (0, Chunk624138.Mg)(Chunk477690.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
  et = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
  en = 16,
  er = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
  ei = 41,
  ea = 33,
  eo = e => e + 2 * er,
  es = e => {
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
      isUsingKeyboardNavigation: N,
      allowAnimatedEmoji: P,
      channelGuildId: D,
      channelId: x,
      messageId: M,
      isBurstReaction: k,
      listHeaderClassName: Y,
      activeSectionIndex: z,
      upsellGlowOpacity: er,
      emojiListRef: eo
    } = e, es = (0, h.O)(), el = i.useRef(V.xAR), ec = i.useMemo(() => "" !== n ? d.Z.convert.toCodePoint(n) : "", [n]), eu = (0, C.Z)({
      location: "PremiumBrandRefreshCategorySection"
    }), ed = i.useCallback(e => {
      let t = m[e],
        n = m[e + 1];
      return e >= m.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked
    }, [m]), ef = i.useCallback(e => {
      if (e >= m.length - 1) returnfalse;
      let t = m[e],
        n = m[e + 1];
      return !t.isNitroLocked && n.isNitroLocked
    }, [m]), e_ = i.useCallback(function(e) {
      let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
        r = new Set(t),
        i = t.has(e);
      i ? r.delete(e) : r.add(e), null != n && w.default.track(V.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
        location: es.location,
        tab: H.X1.EMOJI,
        collapsed: !i,
        guild_id: n.id
      }), e === F.UX.SOUNDMOJI && w.default.track(V.rMx.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, {
        collapsed: !i
      }), g(r)
    }, [es, t, g]), ep = i.useCallback(e => {
      let {
        columnIndex: t,
        visibleRowIndex: n
      } = e, r = e.type === B.ld.SOUNDMOJI ? null : e.type === B.ld.EMOJI ? (0, L.nY)(e.emoji) : e.name;
      el.current !== V.xAR && window.cancelAnimationFrame(el.current), el.current = window.requestAnimationFrame(() => {
        E.kJ.setInspectedExpressionPosition(t, n, y.u.MOUSE_EVENT), E.kJ.setSearchPlaceholder(r), el.current = V.xAR
      })
    }, []), eh = (0, u.e7)([T.qc], () => T.qc.hasHotspot(T.v6.FAVORITE_EMOJI_TOOLTIP), []), em = i.useMemo(() => l().memoize((e, t) => {
      let n = a[e],
        i = m[t.sectionIndex],
        o = () => {
          var e;
          null == (e = eo.current) || e.scrollToSectionTop(t.sectionIndex, {
            animate: true
          })
        };
      return (0, r.jsx)(Z.Z, {
        emojiDescriptors: n,
        emojiSize: s,
        surrogateCodePoint: ec,
        onInspect: ep,
        onSelect: c,
        onSelectSoundmoji: f,
        getEmojiItemProps: O,
        getEmojiRowProps: v,
        isScrolling: A,
        isUsingKeyboardNavigation: N,
        rowIndex: e,
        allowAnimatedEmoji: P,
        showEmojiFavoriteTooltip: eh,
        channelGuildId: D,
        category: i.sectionId,
        selectedItemClassName: K.__invalid_selectedItem,
        channelId: x,
        messageId: M,
        isBurstReaction: k,
        inNitroLockedSection: i.isNitroLocked,
        handleScrollUpOnSectionCollapse: o
      }, e)
    }), [a, m, s, ec, ep, c, f, O, v, A, N, P, eh, D, x, M, k, eo]);
    i.useEffect(() => () => {
      var e, t;
      return null == (t = em.cache) || null == (e = t.clear) ? true : e.call(t)
    }, [em]);
    let eg = i.useMemo(() => l().memoize(e => {
        let n = m[e];
        if (null == n) return;
        let {
          guild: i,
          categoryId: a,
          type: s,
          sectionId: l
        } = n;
        if (s === F.En.SEARCH_RESULTS) return;
        let c = s === F.En.GUILD ? null != i ? (0, r.jsx)(G.Z, {
            guild: i,
            height: en,
            width: en
          }) : null : null != a ? (0, r.jsx)(U.Z, {
            categoryId: a,
            height: en,
            width: en,
            size: "custom"
          }) : null,
          u = null == i ? true : i.name;
        null != a && (u = (0, j.Y1)(a, null == i ? true : i.name));
        let d = z === e,
          f = n.isNitroLocked,
          p = f && !d,
          h = f && d,
          g = s === F.En.SOUNDMOJI ? (0, r.jsx)(_.P3F, {
            className: K.soundmojiViewMore,
            onClick: () => {
              (0, b.hr)(H.X1.SOUNDBOARD), w.default.track(V.rMx.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK)
            },
            children: W.intl.string(W.t.rUEjBe)
          }) : true;
        return (0, r.jsx)(I.Z, {
          className: o()(K.header, Y, {
            [K.inactiveNitroHeader]: p,
            [K.activeNitroHeader]: h
          }),
          icon: c,
          isCollapsed: t.has(l),
          onClick: () => e_(l, i),
          trailing: g,
          children: u
        }, l)
      }), [m, t, e_, Y, z]),
      eE = (0, S.B4)(),
      eb = i.useCallback((e, n) => {
        let i = m[e],
          a = ef(e),
          s = ed(e);
        return (0, r.jsx)("div", {
          className: o()(K.categorySection, {
            [K.categorySectionLast]: e === m.length - 1,
            [K.categorySectionCollapsed]: t.has(i.sectionId),
            [K.categorySectionNitroLocked]: i.isNitroLocked,
            [K.brandRefresh]: eu,
            [K.categorySectionNitroDivider]: a || s
          }),
          children: n
        }, e)
      }, [t, m, ef, ed, eu]),
      ey = i.useCallback(e => ef(e) ? eE ? (0, r.jsx)(R.fi, {}) : (0, r.jsx)(R.ZP, {
        glowOpacity: er,
        enableBrandRefresh: eu
      }) : ed(e) ? (0, r.jsx)("div", {
        className: o()(K.nitroBottomDivider, {
          [K.brandRefresh]: eu
        })
      }) : null, [er, ef, ed, eE, eu]),
      eO = i.useCallback(e => ef(e) ? ei : ed(e) ? ea : 0, [ef, ed]),
      ev = i.useCallback(e => {
        var n;
        return e === m.length - 1 || t.has(null == (n = m[e]) ? true : n.sectionId) || ef(e) || ed(e) ? 0 : et
      }, [t, m, ef, ed]);
    return {
      listPadding: i.useMemo(() => ["" !== p ? $ : X, Q, J, q], [p]),
      renderRow: em,
      renderSection: eb,
      renderSectionHeader: eg,
      renderSectionFooter: ey,
      sectionMarginBottom: ev,
      sectionHeaderHeight: i.useCallback(e => m[e].type === F.En.SEARCH_RESULTS ? 0 : ee, [m]),
      sectionFooterHeight: eO
    }
  },
  el = Chunk473749.memo(function(e) {
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
      isUsingKeyboardNavigation: C,
      channelGuildId: R,
      channelId: L,
      messageId: k,
      isBurstReaction: j,
      listHeaderClassName: U
    } = e, G = i.useRef(false), Z = E.kJ.useStore(e => e.activeCategoryIndex), F = (0, b.Iu)(e => e.searchQuery), H = P.Yk.useSetting(), q = (0, u.e7)([D.default], () => D.default.getCurrentUser()), X = (0, x.I5)(q), {
      location: Q
    } = (0, h.O)(), {
      analyticsLocations: J
    } = (0, m.ZP)(), [$, ee] = i.useState(0), [et, en] = i.useState(false), [er, ei] = i.useState(0), {
      listPadding: ea,
      renderRow: el,
      renderSection: eu,
      renderSectionHeader: ed,
      renderSectionFooter: ef,
      sectionMarginBottom: e_,
      sectionHeaderHeight: ep,
      sectionFooterHeight: eh
    } = es({
      collapsedSections: y,
      diversitySurrogate: t,
      emojiGrid: n,
      emojiSize: o,
      onEmojiSelect: s,
      onSelectSoundmoji: l,
      searchQuery: F,
      sectionDescriptors: f,
      setCollapsedSections: O,
      getEmojiItemProps: I,
      getEmojiRowProps: T,
      isScrolling: G,
      isUsingKeyboardNavigation: C,
      allowAnimatedEmoji: H,
      channelGuildId: R,
      channelId: L,
      messageId: k,
      isBurstReaction: j,
      listHeaderClassName: U,
      activeSectionIndex: $,
      upsellGlowOpacity: er,
      emojiListRef: a
    }), em = e => {
      ee(e), "" === F && E.kJ.setActiveCategoryIndex(e)
    }, eg = (0, v.fe)({
      listRef: a,
      searchQuery: F,
      nitroLockedSectionStates: f,
      setUpsellGlowOpacity: ei
    }), eE = (0, v.Qs)({
      activeCategoryIndex: Z,
      isScrolling: G,
      listRef: a,
      onActiveCategoryIndexChange: em,
      scrollOffset: z,
      searchQuery: F,
      disableForSearch: false
    });
    (0, v.Xs)({
      searchQuery: F,
      activeCategoryIndex: Z,
      listRef: a
    });
    let eb = i.useCallback(e => {
        eg(e), eE(e), ec({
          emojiListRef: a,
          sectionDescriptors: f,
          scrollTop: e,
          searchQuery: F,
          setShowUpsell: en
        })
      }, [eg, eE, a, f, F, en]),
      ey = f.length > 0;

    function eO() {
      let e = (0, M.Px)(Y.PremiumTypes.TIER_2);
      return W.intl.format(W.t.gMVjeS, {
        nitroTierName: e,
        onClick: () => {
          d({
            type: B.Bg.PREMIUM,
            emojiDescriptor: true
          })
        }
      })
    }

    function ev() {
      var e;
      let t = (0, A.J0)();
      return null != (e = (0, M.fr)(t, Y.Si.TIER_2)) ? e : W.intl.string(W.t.BmJkbd)
    }
    return i.useEffect(() => {
      et && w.default.track(V.rMx.PREMIUM_UPSELL_VIEWED, {
        type: Y.cd.EMOJI_PICKER_FLOATING_UPSELL,
        location: Q,
        location_stack: J
      })
    }, [Q, J, et]), i.useEffect(() => {
      "" !== F && (ei(0), en(false))
    }, [F]), (0, r.jsxs)("div", {
      className: K.listWrapper,
      children: [ey ? (0, r.jsx)(g.Z, {
        role: "none presentation",
        className: K.list,
        listPadding: ea,
        onScroll: eb,
        renderRow: el,
        renderSection: eu,
        renderSectionHeader: ed,
        renderSectionFooter: ef,
        rowCount: S,
        rowCountBySection: _,
        rowHeight: eo(o),
        sectionHeaderHeight: ep,
        sectionMarginBottom: e_,
        sectionFooterHeight: eh,
        stickyHeaders: true,
        ref: a
      }) : (0, r.jsx)(p.Z, {
        message: W.intl.string(W.t.IxxiKF),
        className: K.noSearchResultsContainer
      }), X || c.tq ? null : (0, r.jsx)(N.p, {
        showUpsell: et,
        text: eO(),
        button: ev(),
        buttonAnalyticsObject: {
          section: V.jXE.EMOJI_PICKER_FLOATING_UPSELL
        }
      })]
    })
  }),
  ec = l().throttle(eu, 300, {
    leading: false,
    trailing: true
  });

function eu(e) {
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
let ed = el
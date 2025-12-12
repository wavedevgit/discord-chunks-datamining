/** Chunk was on web.js **/
/** chunk id: 669040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ed
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Q = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
  X = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
  J = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
  $ = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
  ee = (0, Chunk624138.Mg)(Chunk477690.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
  et = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
  en = 16,
  er = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
  ei = 41,
  eo = 33,
  ea = e => e + 2 * er,
  es = e => {
    let {
      collapsedSections: t,
      diversitySurrogate: n,
      emojiGrid: o,
      emojiSize: s,
      onEmojiSelect: c,
      onSelectSoundmoji: f,
      searchQuery: _,
      sectionDescriptors: h,
      setCollapsedSections: g,
      getEmojiItemProps: O,
      getEmojiRowProps: v,
      isScrolling: C,
      isUsingKeyboardNavigation: N,
      allowAnimatedEmoji: R,
      channelGuildId: w,
      channelId: L,
      messageId: j,
      isBurstReaction: M,
      listHeaderClassName: Y,
      activeSectionIndex: z,
      upsellGlowOpacity: er,
      emojiListRef: ea
    } = e, es = (0, m.O)(), el = i.useRef(V.xAR), ec = i.useMemo(() => "" !== n ? d.Z.convert.toCodePoint(n) : "", [n]), eu = (0, A.Z)({
      location: "PremiumBrandRefreshCategorySection"
    }), ed = i.useCallback(e => {
      let t = h[e],
        n = h[e + 1];
      return e >= h.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked
    }, [h]), ef = i.useCallback(e => {
      if (e >= h.length - 1) returnfalse;
      let t = h[e],
        n = h[e + 1];
      return !t.isNitroLocked && n.isNitroLocked
    }, [h]), ep = i.useCallback(function(e) {
      let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
        r = new Set(t),
        i = t.has(e);
      i ? r.delete(e) : r.add(e), null != n && D.default.track(V.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
        location: es.location,
        tab: H.X1.EMOJI,
        collapsed: !i,
        guild_id: n.id
      }), e === B.UX.SOUNDMOJI && D.default.track(V.rMx.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, {
        collapsed: !i
      }), g(r)
    }, [es, t, g]), e_ = i.useCallback(e => {
      let {
        columnIndex: t,
        visibleRowIndex: n
      } = e, r = e.type === Z.ld.SOUNDMOJI ? null : e.type === Z.ld.EMOJI ? (0, x.nY)(e.emoji) : e.name;
      el.current !== V.xAR && window.cancelAnimationFrame(el.current), el.current = window.requestAnimationFrame(() => {
        E.kJ.setInspectedExpressionPosition(t, n, y.u.MOUSE_EVENT), E.kJ.setSearchPlaceholder(r), el.current = V.xAR
      })
    }, []), em = (0, u.e7)([I.qc], () => I.qc.hasHotspot(I.v6.FAVORITE_EMOJI_TOOLTIP), []), eh = i.useMemo(() => l().memoize((e, t) => {
      let n = o[e],
        i = h[t.sectionIndex],
        a = () => {
          var e;
          null == (e = ea.current) || e.scrollToSectionTop(t.sectionIndex, {
            animate: true
          })
        };
      return (0, r.jsx)(F.Z, {
        emojiDescriptors: n,
        emojiSize: s,
        surrogateCodePoint: ec,
        onInspect: e_,
        onSelect: c,
        onSelectSoundmoji: f,
        getEmojiItemProps: O,
        getEmojiRowProps: v,
        isScrolling: C,
        isUsingKeyboardNavigation: N,
        rowIndex: e,
        allowAnimatedEmoji: R,
        showEmojiFavoriteTooltip: em,
        channelGuildId: w,
        category: i.sectionId,
        selectedItemClassName: K.__invalid_selectedItem,
        channelId: L,
        messageId: j,
        isBurstReaction: M,
        inNitroLockedSection: i.isNitroLocked,
        handleScrollUpOnSectionCollapse: a
      }, e)
    }), [o, h, s, ec, e_, c, f, O, v, C, N, R, em, w, L, j, M, ea]);
    i.useEffect(() => () => {
      var e, t;
      return null == (t = eh.cache) || null == (e = t.clear) ? true : e.call(t)
    }, [eh]);
    let eg = i.useMemo(() => l().memoize(e => {
        let n = h[e];
        if (null == n) return;
        let {
          guild: i,
          categoryId: o,
          type: s,
          sectionId: l
        } = n;
        if (s === B.En.SEARCH_RESULTS) return;
        let c = s === B.En.GUILD ? null != i ? (0, r.jsx)(G.Z, {
            guild: i,
            height: en,
            width: en
          }) : null : null != o ? (0, r.jsx)(U.Z, {
            categoryId: o,
            height: en,
            width: en,
            size: "custom"
          }) : null,
          u = null == i ? true : i.name;
        null != o && (u = (0, k.Y1)(o, null == i ? true : i.name));
        let d = z === e,
          f = n.isNitroLocked,
          _ = f && !d,
          m = f && d,
          g = s === B.En.SOUNDMOJI ? (0, r.jsx)(p.P3F, {
            className: K.soundmojiViewMore,
            onClick: () => {
              (0, b.hr)(H.X1.SOUNDBOARD), D.default.track(V.rMx.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK)
            },
            children: W.intl.string(W.t.rUEjBe)
          }) : true;
        return (0, r.jsx)(S.Z, {
          className: a()(K.header, Y, {
            [K.inactiveNitroHeader]: _,
            [K.activeNitroHeader]: m
          }),
          icon: c,
          isCollapsed: t.has(l),
          onClick: () => ep(l, i),
          trailing: g,
          children: u
        }, l)
      }), [h, t, ep, Y, z]),
      eE = (0, T.B4)(),
      eb = i.useCallback((e, n) => {
        let i = h[e],
          o = ef(e),
          s = ed(e);
        return (0, r.jsx)("div", {
          className: a()(K.categorySection, {
            [K.categorySectionLast]: e === h.length - 1,
            [K.categorySectionCollapsed]: t.has(i.sectionId),
            [K.categorySectionNitroLocked]: i.isNitroLocked,
            [K.brandRefresh]: eu,
            [K.categorySectionNitroDivider]: o || s
          }),
          children: n
        }, e)
      }, [t, h, ef, ed, eu]),
      ey = i.useCallback(e => ef(e) ? eE ? (0, r.jsx)(P.fi, {}) : (0, r.jsx)(P.ZP, {
        glowOpacity: er,
        enableBrandRefresh: eu
      }) : ed(e) ? (0, r.jsx)("div", {
        className: a()(K.nitroBottomDivider, {
          [K.brandRefresh]: eu
        })
      }) : null, [er, ef, ed, eE, eu]),
      eO = i.useCallback(e => ef(e) ? ei : ed(e) ? eo : 0, [ef, ed]),
      ev = i.useCallback(e => {
        var n;
        return e === h.length - 1 || t.has(null == (n = h[e]) ? true : n.sectionId) || ef(e) || ed(e) ? 0 : et
      }, [t, h, ef, ed]);
    return {
      listPadding: i.useMemo(() => ["" !== _ ? $ : Q, X, J, q], [_]),
      renderRow: eh,
      renderSection: eb,
      renderSectionHeader: eg,
      renderSectionFooter: ey,
      sectionMarginBottom: ev,
      sectionHeaderHeight: i.useCallback(e => h[e].type === B.En.SEARCH_RESULTS ? 0 : ee, [h]),
      sectionFooterHeight: eO
    }
  },
  el = Chunk473749.memo(function(e) {
    let {
      diversitySurrogate: t,
      emojiGrid: n,
      emojiListRef: o,
      emojiSize: a,
      onEmojiSelect: s,
      onSelectSoundmoji: l,
      setUpsellConfigs: d,
      sectionDescriptors: f,
      rowCountBySection: p,
      collapsedSections: y,
      setCollapsedSections: O,
      getEmojiItemProps: S,
      getEmojiRowProps: I,
      rowCount: T,
      isUsingKeyboardNavigation: A,
      channelGuildId: P,
      channelId: x,
      messageId: M,
      isBurstReaction: k,
      listHeaderClassName: U
    } = e, G = i.useRef(false), F = E.kJ.useStore(e => e.activeCategoryIndex), B = (0, b.Iu)(e => e.searchQuery), H = R.Yk.useSetting(), q = (0, u.e7)([w.default], () => w.default.getCurrentUser()), Q = (0, L.I5)(q), {
      location: X
    } = (0, m.O)(), {
      analyticsLocations: J
    } = (0, h.ZP)(), [$, ee] = i.useState(0), [et, en] = i.useState(false), [er, ei] = i.useState(0), {
      listPadding: eo,
      renderRow: el,
      renderSection: eu,
      renderSectionHeader: ed,
      renderSectionFooter: ef,
      sectionMarginBottom: ep,
      sectionHeaderHeight: e_,
      sectionFooterHeight: em
    } = es({
      collapsedSections: y,
      diversitySurrogate: t,
      emojiGrid: n,
      emojiSize: a,
      onEmojiSelect: s,
      onSelectSoundmoji: l,
      searchQuery: B,
      sectionDescriptors: f,
      setCollapsedSections: O,
      getEmojiItemProps: S,
      getEmojiRowProps: I,
      isScrolling: G,
      isUsingKeyboardNavigation: A,
      allowAnimatedEmoji: H,
      channelGuildId: P,
      channelId: x,
      messageId: M,
      isBurstReaction: k,
      listHeaderClassName: U,
      activeSectionIndex: $,
      upsellGlowOpacity: er,
      emojiListRef: o
    }), eh = e => {
      ee(e), "" === B && E.kJ.setActiveCategoryIndex(e)
    }, eg = (0, v.fe)({
      listRef: o,
      searchQuery: B,
      nitroLockedSectionStates: f,
      setUpsellGlowOpacity: ei
    }), eE = (0, v.Qs)({
      activeCategoryIndex: F,
      isScrolling: G,
      listRef: o,
      onActiveCategoryIndexChange: eh,
      scrollOffset: z,
      searchQuery: B,
      disableForSearch: false
    });
    (0, v.Xs)({
      searchQuery: B,
      activeCategoryIndex: F,
      listRef: o
    });
    let eb = i.useCallback(e => {
        eg(e), eE(e), ec({
          emojiListRef: o,
          sectionDescriptors: f,
          scrollTop: e,
          searchQuery: B,
          setShowUpsell: en
        })
      }, [eg, eE, o, f, B, en]),
      ey = f.length > 0;

    function eO() {
      let e = (0, j.Px)(Y.PremiumTypes.TIER_2);
      return W.intl.format(W.t.gMVjeS, {
        nitroTierName: e,
        onClick: () => {
          d({
            type: Z.Bg.PREMIUM,
            emojiDescriptor: true
          })
        }
      })
    }

    function ev() {
      var e;
      let t = (0, C.J0)();
      return null != (e = (0, j.fr)(t, Y.Si.TIER_2)) ? e : W.intl.string(W.t.BmJkbd)
    }
    return i.useEffect(() => {
      et && D.default.track(V.rMx.PREMIUM_UPSELL_VIEWED, {
        type: Y.cd.EMOJI_PICKER_FLOATING_UPSELL,
        location: X,
        location_stack: J
      })
    }, [X, J, et]), i.useEffect(() => {
      "" !== B && (ei(0), en(false))
    }, [B]), (0, r.jsxs)("div", {
      className: K.listWrapper,
      children: [ey ? (0, r.jsx)(g.Z, {
        role: "none presentation",
        className: K.list,
        listPadding: eo,
        onScroll: eb,
        renderRow: el,
        renderSection: eu,
        renderSectionHeader: ed,
        renderSectionFooter: ef,
        rowCount: T,
        rowCountBySection: p,
        rowHeight: ea(a),
        sectionHeaderHeight: e_,
        sectionMarginBottom: ep,
        sectionFooterHeight: em,
        stickyHeaders: true,
        ref: o
      }) : (0, r.jsx)(_.Z, {
        message: W.intl.string(W.t.IxxiKF),
        className: K.noSearchResultsContainer
      }), Q || c.tq ? null : (0, r.jsx)(N.p, {
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
    setShowUpsell: o
  } = e;
  o((0, O.y)({
    listRef: t,
    searchQuery: i,
    nitroLockedSectionStates: n,
    scrollTop: r
  }).areOnlyNitroLockedSectionsVisible)
}
let ed = el
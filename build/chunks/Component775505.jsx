/** Chunk was on web.js **/
/** chunk id: 775505, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => ed
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk838677 = require("./838677.js"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk537652 = require("./537652.jsx"),
  Chunk212245 = require("./212245.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk962125 = require("./962125.jsx"),
  Chunk850992 = require("./850992.js"),
  Chunk151271 = require("./151271.js"),
  Chunk60587 = require("./60587.js"),
  Chunk240864 = require("./240864.js"),
  Chunk887695 = require("./887695.js"),
  Chunk286509 = require("./286509.jsx"),
  Chunk450510 = require("./450510.js"),
  Chunk526292 = require("./526292.js"),
  Chunk89366 = require("./89366.js"),
  Chunk756349 = require("./756349.js"),
  Chunk202639 = require("./202639.jsx"),
  Chunk414872 = require("./414872.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk690521 = require("./690521.js"),
  Chunk474090 = require("./474090.js"),
  Chunk927578 = require("./927578.js"),
  Chunk240248 = require("./240248.js"),
  Chunk822123 = require("./822123.js"),
  Chunk535622 = require("./535622.jsx"),
  Chunk724511 = require("./724511.jsx"),
  Chunk484333 = require("./484333.js"),
  Chunk923861 = require("./923861.jsx"),
  Chunk732139 = require("./732139.js"),
  Chunk652215 = require("./652215.js"),
  Chunk698279 = require("./698279.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk586305 = require("./586305.js");
let q = 0,
  X = 0,
  Z = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
  Q = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
  $ = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
  J = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
  ee = (0, Chunk240248.xI)(Chunk319060.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
  et = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
  en = 16,
  er = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
  ei = 41,
  ea = 33,
  es = e => e + 2 * er,
  eo = e => {
    let {
      collapsedSections: t,
      diversitySurrogate: n,
      emojiGrid: a,
      emojiSize: o,
      onEmojiSelect: c,
      onSelectSoundmoji: f,
      searchQuery: _,
      sectionDescriptors: m,
      setCollapsedSections: g,
      getEmojiItemProps: O,
      getEmojiRowProps: v,
      isScrolling: T,
      isUsingKeyboardNavigation: N,
      allowAnimatedEmoji: w,
      channelGuildId: P,
      channelId: L,
      messageId: j,
      isBurstReaction: M,
      listHeaderClassName: W,
      activeSectionIndex: q,
      upsellGlowOpacity: er,
      emojiListRef: es
    } = e, eo = (0, h.p)(), el = i.useRef(H.An1), ec = i.useMemo(() => "" !== n ? d.A.convert.toCodePoint(n) : "", [n]), eu = (0, C.A)({
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
    }, [m]), ep = i.useCallback(function(e) {
      let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
        r = new Set(t),
        i = t.has(e);
      i ? r.delete(e) : r.add(e), null != n && D.default.track(H.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
        location: eo.location,
        tab: Y.kx.EMOJI,
        collapsed: !i,
        guild_id: n.id
      }), e === B.R2.SOUNDMOJI && D.default.track(H.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, {
        collapsed: !i
      }), g(r)
    }, [eo, t, g]), e_ = i.useCallback(e => {
      let {
        columnIndex: t,
        visibleRowIndex: n
      } = e, r = e.type === V.bm.SOUNDMOJI ? null : e.type === V.bm.EMOJI ? (0, x.N)(e.emoji) : e.name;
      el.current !== H.An1 && window.cancelAnimationFrame(el.current), el.current = window.requestAnimationFrame(() => {
        E.Om.setInspectedExpressionPosition(t, n, b.t.MOUSE_EVENT), E.Om.setSearchPlaceholder(r), el.current = H.An1
      })
    }, []), eh = (0, u.bG)([I.HP], () => I.HP.hasHotspot(I._2.FAVORITE_EMOJI_TOOLTIP), []), em = i.useMemo(() => l().memoize((e, t) => {
      let n = a[e],
        i = m[t.sectionIndex],
        s = () => {
          var e;
          null == (e = es.current) || e.scrollToSectionTop(t.sectionIndex, {
            animate: true
          })
        };
      return (0, r.jsx)(F.A, {
        emojiDescriptors: n,
        emojiSize: o,
        surrogateCodePoint: ec,
        onInspect: e_,
        onSelect: c,
        onSelectSoundmoji: f,
        getEmojiItemProps: O,
        getEmojiRowProps: v,
        isScrolling: T,
        isUsingKeyboardNavigation: N,
        rowIndex: e,
        allowAnimatedEmoji: w,
        showEmojiFavoriteTooltip: eh,
        channelGuildId: P,
        category: i.sectionId,
        selectedItemClassName: z.__invalid_selectedItem,
        channelId: L,
        messageId: j,
        isBurstReaction: M,
        inNitroLockedSection: i.isNitroLocked,
        handleScrollUpOnSectionCollapse: s
      }, e)
    }), [a, m, o, ec, e_, c, f, O, v, T, N, w, eh, P, L, j, M, es]);
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
          type: o,
          sectionId: l
        } = n;
        if (o === B.s.SEARCH_RESULTS) return;
        let c = o === B.s.GUILD ? null != i ? (0, r.jsx)(G.A, {
            guild: i,
            height: en,
            width: en
          }) : null : null != a ? (0, r.jsx)(U.A, {
            categoryId: a,
            height: en,
            width: en,
            size: "custom"
          }) : null,
          u = null == i ? true : i.name;
        null != a && (u = (0, k.Nu)(a, null == i ? true : i.name));
        let d = q === e,
          f = n.isNitroLocked,
          _ = f && !d,
          h = f && d,
          g = o === B.s.SOUNDMOJI ? (0, r.jsx)(p.DUT, {
            className: z.f3,
            onClick: () => {
              (0, y.U)(Y.kx.SOUNDBOARD), D.default.track(H.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK)
            },
            children: K.intl.string(K.t.rUEjBe)
          }) : true;
        return (0, r.jsx)(A.A, {
          className: s()(z.wx, W, {
            [z.RA]: _,
            [z.sp]: h
          }),
          icon: c,
          isCollapsed: t.has(l),
          onClick: () => ep(l, i),
          trailing: g,
          children: u
        }, l)
      }), [m, t, ep, W, q]),
      eE = (0, S.k0)(),
      ey = i.useCallback((e, n) => {
        let i = m[e],
          a = ef(e),
          o = ed(e);
        return (0, r.jsx)("div", {
          className: s()(z.Wy, {
            [z.YD]: e === m.length - 1,
            [z.jl]: t.has(i.sectionId),
            [z.cW]: i.isNitroLocked,
            [z.N4]: eu,
            [z.T5]: a || o
          }),
          children: n
        }, e)
      }, [t, m, ef, ed, eu]),
      eb = i.useCallback(e => ef(e) ? eE ? (0, r.jsx)(R.ap, {}) : (0, r.jsx)(R.Ay, {
        glowOpacity: er,
        enableBrandRefresh: eu
      }) : ed(e) ? (0, r.jsx)("div", {
        className: s()(z.pQ, {
          [z.N4]: eu
        })
      }) : null, [er, ef, ed, eE, eu]),
      eO = i.useCallback(e => ef(e) ? ei : ed(e) ? ea : 0, [ef, ed]),
      ev = i.useCallback(e => {
        var n;
        return e === m.length - 1 || t.has(null == (n = m[e]) ? true : n.sectionId) || ef(e) || ed(e) ? 0 : et
      }, [t, m, ef, ed]);
    return {
      listPadding: i.useMemo(() => ["" !== _ ? J : Z, Q, $, X], [_]),
      renderRow: em,
      renderSection: ey,
      renderSectionHeader: eg,
      renderSectionFooter: eb,
      sectionMarginBottom: ev,
      sectionHeaderHeight: i.useCallback(e => m[e].type === B.s.SEARCH_RESULTS ? 0 : ee, [m]),
      sectionFooterHeight: eO
    }
  },
  el = Chunk64700.memo(function(e) {
    let {
      diversitySurrogate: t,
      emojiGrid: n,
      emojiListRef: a,
      emojiSize: s,
      onEmojiSelect: o,
      onSelectSoundmoji: l,
      setUpsellConfigs: d,
      sectionDescriptors: f,
      rowCountBySection: p,
      collapsedSections: b,
      setCollapsedSections: O,
      getEmojiItemProps: A,
      getEmojiRowProps: I,
      rowCount: S,
      isUsingKeyboardNavigation: C,
      channelGuildId: R,
      channelId: x,
      messageId: M,
      isBurstReaction: k,
      listHeaderClassName: U
    } = e, G = i.useRef(false), F = E.Om.useStore(e => e.activeCategoryIndex), B = (0, y.RQ)(e => e.searchQuery), Y = w.Sf.useSetting(), X = (0, u.bG)([P.default], () => P.default.getCurrentUser()), Z = (0, L.ki)(X), {
      location: Q
    } = (0, h.p)(), {
      analyticsLocations: $
    } = (0, m.Ay)(), [J, ee] = i.useState(0), [et, en] = i.useState(false), [er, ei] = i.useState(0), {
      listPadding: ea,
      renderRow: el,
      renderSection: eu,
      renderSectionHeader: ed,
      renderSectionFooter: ef,
      sectionMarginBottom: ep,
      sectionHeaderHeight: e_,
      sectionFooterHeight: eh
    } = eo({
      collapsedSections: b,
      diversitySurrogate: t,
      emojiGrid: n,
      emojiSize: s,
      onEmojiSelect: o,
      onSelectSoundmoji: l,
      searchQuery: B,
      sectionDescriptors: f,
      setCollapsedSections: O,
      getEmojiItemProps: A,
      getEmojiRowProps: I,
      isScrolling: G,
      isUsingKeyboardNavigation: C,
      allowAnimatedEmoji: Y,
      channelGuildId: R,
      channelId: x,
      messageId: M,
      isBurstReaction: k,
      listHeaderClassName: U,
      activeSectionIndex: J,
      upsellGlowOpacity: er,
      emojiListRef: a
    }), em = e => {
      ee(e), "" === B && E.Om.setActiveCategoryIndex(e)
    }, eg = (0, v.ci)({
      listRef: a,
      searchQuery: B,
      nitroLockedSectionStates: f,
      setUpsellGlowOpacity: ei
    }), eE = (0, v.Fk)({
      activeCategoryIndex: F,
      isScrolling: G,
      listRef: a,
      onActiveCategoryIndexChange: em,
      scrollOffset: q,
      searchQuery: B,
      disableForSearch: false
    });
    (0, v.FV)({
      searchQuery: B,
      activeCategoryIndex: F,
      listRef: a
    });
    let ey = i.useCallback(e => {
        eg(e), eE(e), ec({
          emojiListRef: a,
          sectionDescriptors: f,
          scrollTop: e,
          searchQuery: B,
          setShowUpsell: en
        })
      }, [eg, eE, a, f, B, en]),
      eb = f.length > 0;

    function eO() {
      let e = (0, j.Dd)(W.PremiumTypes.TIER_2);
      return K.intl.format(K.t.gMVjeS, {
        nitroTierName: e,
        onClick: () => {
          d({
            type: V.a2.PREMIUM,
            emojiDescriptor: true
          })
        }
      })
    }

    function ev() {
      var e;
      let t = (0, T.qD)();
      return null != (e = (0, j.LE)(t, W.pe.TIER_2)) ? e : K.intl.string(K.t.BmJkbd)
    }
    return i.useEffect(() => {
      et && D.default.track(H.HAw.PREMIUM_UPSELL_VIEWED, {
        type: W.e.EMOJI_PICKER_FLOATING_UPSELL,
        location: Q,
        location_stack: $
      })
    }, [Q, $, et]), i.useEffect(() => {
      "" !== B && (ei(0), en(false))
    }, [B]), (0, r.jsxs)("div", {
      className: z.AD,
      children: [eb ? (0, r.jsx)(g.A, {
        role: "none presentation",
        className: z.p_,
        listPadding: ea,
        onScroll: ey,
        renderRow: el,
        renderSection: eu,
        renderSectionHeader: ed,
        renderSectionFooter: ef,
        rowCount: S,
        rowCountBySection: p,
        rowHeight: es(s),
        sectionHeaderHeight: e_,
        sectionMarginBottom: ep,
        sectionFooterHeight: eh,
        stickyHeaders: true,
        ref: a
      }) : (0, r.jsx)(_.A, {
        message: K.intl.string(K.t.IxxiKF),
        className: z.BZ
      }), Z || c.Fr ? null : (0, r.jsx)(N.d, {
        showUpsell: et,
        text: eO(),
        button: ev(),
        buttonAnalyticsObject: {
          section: H.JJy.EMOJI_PICKER_FLOATING_UPSELL
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
  a((0, O.s)({
    listRef: t,
    searchQuery: i,
    nitroLockedSectionStates: n,
    scrollTop: r
  }).areOnlyNitroLockedSectionsVisible)
}
let ed = el
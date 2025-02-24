/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => el
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(392711),
  l = n.n(s),
  c = n(873546),
  u = n(442837),
  d = n(336317),
  f = n(477690),
  p = n(481060),
  _ = n(788911),
  h = n(2052),
  m = n(906732),
  g = n(218867),
  E = n(806966),
  v = n(28546),
  b = n(691251),
  y = n(98528),
  O = n(551058),
  S = n(536442),
  I = n(140465),
  T = n(775412),
  N = n(104494),
  A = n(639119),
  C = n(53691),
  R = n(75145),
  P = n(631771),
  w = n(695346),
  D = n(594174),
  x = n(626135),
  L = n(111361),
  M = n(74538),
  k = n(624138),
  j = n(543241),
  U = n(883661),
  G = n(880949),
  B = n(784222),
  Z = n(172800),
  F = n(149203),
  V = n(981631),
  H = n(957825),
  W = n(474936),
  Y = n(388032),
  K = n(711287);
let z = 0,
  q = 0,
  Q = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
  X = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
  J = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
  $ = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
  ee = (0, k.Mg)(f.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
  et = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
  en = 16,
  er = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
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
      sectionDescriptors: m,
      setCollapsedSections: g,
      getEmojiItemProps: y,
      getEmojiRowProps: T,
      isScrolling: N,
      isUsingKeyboardNavigation: A,
      allowAnimatedEmoji: C,
      channelGuildId: P,
      channelId: w,
      messageId: D,
      isBurstReaction: L,
      listHeaderClassName: M,
      activeSectionIndex: k,
      upsellGlowOpacity: W,
      emojiListRef: z
    } = e, er = (0, h.O)(), ea = i.useRef(V.xAR), es = i.useMemo(() => "" !== n ? d.Z.convert.toCodePoint(n) : "", [n]), el = i.useCallback(e => {
      let t = m[e],
        n = m[e + 1];
      return e >= m.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked
    }, [m]), ec = i.useCallback(e => {
      if (e >= m.length - 1) return !1;
      let t = m[e],
        n = m[e + 1];
      return !t.isNitroLocked && n.isNitroLocked
    }, [m]), eu = i.useCallback(function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        r = new Set(t),
        i = t.has(e);
      i ? r.delete(e) : r.add(e), null != n && x.default.track(V.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
        location: er.location,
        tab: H.X1.EMOJI,
        collapsed: !i,
        guild_id: n.id
      }), e === F.UX.SOUNDMOJI && x.default.track(V.rMx.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, {
        collapsed: !i
      }), g(r)
    }, [er, t, g]), ed = i.useCallback(e => {
      let {
        columnIndex: t,
        visibleRowIndex: n
      } = e, r = e.type === B.ld.SOUNDMOJI ? null : e.type === B.ld.EMOJI ? e.emoji.allNamesString : e.name;
      ea.current !== V.xAR && window.cancelAnimationFrame(ea.current), ea.current = window.requestAnimationFrame(() => {
        E.kJ.setInspectedExpressionPosition(t, n, b.u.MOUSE_EVENT), E.kJ.setSearchPlaceholder(r), ea.current = V.xAR
      })
    }, []), ef = (0, u.e7)([S.qc], () => S.qc.hasHotspot(S.v6.FAVORITE_EMOJI_TOOLTIP), []), ep = i.useMemo(() => l().memoize((e, t) => {
      let n = o[e],
        i = m[t.sectionIndex],
        a = () => {
          var e;
          null === (e = z.current) || void 0 === e || e.scrollToSectionTop(t.sectionIndex, {
            animate: !0
          })
        };
      return (0, r.jsx)(Z.Z, {
        emojiDescriptors: n,
        emojiSize: s,
        surrogateCodePoint: es,
        onInspect: ed,
        onSelect: c,
        onSelectSoundmoji: f,
        getEmojiItemProps: y,
        getEmojiRowProps: T,
        isScrolling: N,
        isUsingKeyboardNavigation: A,
        rowIndex: e,
        allowAnimatedEmoji: C,
        showEmojiFavoriteTooltip: ef,
        channelGuildId: P,
        category: i.sectionId,
        selectedItemClassName: K.__invalid_selectedItem,
        channelId: w,
        messageId: D,
        isBurstReaction: L,
        inNitroLockedSection: i.isNitroLocked,
        handleScrollUpOnSectionCollapse: a
      }, e)
    }), [o, m, s, es, ed, c, f, y, T, N, A, C, ef, P, w, D, L, z]);
    i.useEffect(() => () => {
      var e, t;
      return null === (t = ep.cache) || void 0 === t ? void 0 : null === (e = t.clear) || void 0 === e ? void 0 : e.call(t)
    }, [ep]);
    let e_ = i.useMemo(() => l().memoize(e => {
        let n = m[e];
        if (null == n) return;
        let {
          guild: i,
          categoryId: o,
          type: s,
          sectionId: l
        } = n;
        if (s === F.En.SEARCH_RESULTS) return;
        let c = s === F.En.GUILD ? null != i ? (0, r.jsx)(G.Z, {
            guild: i,
            height: en,
            width: en
          }) : null : null != o ? (0, r.jsx)(U.Z, {
            categoryId: o,
            height: en,
            width: en,
            size: "custom"
          }) : null,
          u = null == i ? void 0 : i.toString();
        null != o && (u = (0, j.Y1)(o, null == i ? void 0 : i.toString()));
        let d = k === e,
          f = n.isNitroLocked,
          _ = f && !d,
          h = f && d,
          g = s === F.En.SOUNDMOJI ? (0, r.jsx)(p.P3F, {
            className: K.soundmojiViewMore,
            onClick: () => {
              (0, v.hr)(H.X1.SOUNDBOARD), x.default.track(V.rMx.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK)
            },
            children: Y.NW.string(Y.t.rUEjBQ)
          }) : void 0;
        return (0, r.jsx)(O.Z, {
          className: a()(K.header, M, {
            [K.inactiveNitroHeader]: _,
            [K.activeNitroHeader]: h
          }),
          icon: c,
          isCollapsed: t.has(l),
          onClick: () => eu(l, i),
          trailing: g,
          children: u
        }, l)
      }), [m, t, eu, M, k]),
      eh = (0, I.B4)({
        location: "EmojiPickerList-useListRenderers"
      }),
      em = i.useCallback((e, n) => {
        let i = m[e],
          o = ec(e),
          s = el(e);
        return (0, r.jsx)("div", {
          className: a()(K.categorySection, {
            [K.categorySectionLast]: e === m.length - 1,
            [K.categorySectionCollapsed]: t.has(i.sectionId),
            [K.categorySectionNitroLocked]: i.isNitroLocked,
            [K.categorySectionNitroDivider]: o || s
          }),
          children: n
        }, e)
      }, [t, m, ec, el]),
      eg = i.useCallback(e => ec(e) ? eh ? (0, r.jsx)(R.fi, {}) : (0, r.jsx)(R.ZP, {
        glowOpacity: W
      }) : el(e) ? (0, r.jsx)("div", {
        className: K.nitroBottomDivider
      }) : null, [W, ec, el, eh]),
      eE = i.useCallback(e => ec(e) ? ei : el(e) ? eo : 0, [ec, el]),
      ev = i.useCallback(e => {
        var n;
        return e === m.length - 1 || t.has(null === (n = m[e]) || void 0 === n ? void 0 : n.sectionId) || ec(e) || el(e) ? 0 : et
      }, [t, m, ec, el]);
    return {
      listPadding: i.useMemo(() => ["" !== _ ? $ : Q, X, J, q], [_]),
      renderRow: ep,
      renderSection: em,
      renderSectionHeader: e_,
      renderSectionFooter: eg,
      sectionMarginBottom: ev,
      sectionHeaderHeight: i.useCallback(e => m[e].type === F.En.SEARCH_RESULTS ? 0 : ee, [m]),
      sectionFooterHeight: eE
    }
  },
  el = i.memo(function(e) {
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
      collapsedSections: b,
      setCollapsedSections: O,
      getEmojiItemProps: S,
      getEmojiRowProps: I,
      rowCount: R,
      isUsingKeyboardNavigation: k,
      channelGuildId: j,
      channelId: U,
      messageId: G,
      isBurstReaction: Z,
      listHeaderClassName: F
    } = e, H = i.useRef(!1), q = E.kJ.useStore(e => e.activeCategoryIndex), Q = (0, v.Iu)(e => e.searchQuery), X = w.Yk.useSetting(), J = (0, u.e7)([D.default], () => D.default.getCurrentUser()), $ = (0, L.I5)(J), {
      location: ee
    } = (0, h.O)(), {
      analyticsLocations: et
    } = (0, m.ZP)(), [en, er] = i.useState(0), [ei, eo] = i.useState(!1), [el, ec] = i.useState(0), eu = (0, A.N)(), ed = (0, N.Ng)(), ef = ei && !$ && !c.tq, ep = null != eu || null != ed, {
      enabled: e_
    } = P.G.useExperiment({
      location: "Premium Emoji Roadblock"
    }, {
      autoTrackExposure: ef && !ep,
      disable: !ef || ep
    }), eh = e_ || ef && null != eu, {
      listPadding: em,
      renderRow: eg,
      renderSection: eE,
      renderSectionHeader: ev,
      renderSectionFooter: eb,
      sectionMarginBottom: ey,
      sectionHeaderHeight: eO,
      sectionFooterHeight: eS
    } = es({
      collapsedSections: b,
      diversitySurrogate: t,
      emojiGrid: n,
      emojiSize: a,
      onEmojiSelect: s,
      onSelectSoundmoji: l,
      searchQuery: Q,
      sectionDescriptors: f,
      setCollapsedSections: O,
      getEmojiItemProps: S,
      getEmojiRowProps: I,
      isScrolling: H,
      isUsingKeyboardNavigation: k,
      allowAnimatedEmoji: X,
      channelGuildId: j,
      channelId: U,
      messageId: G,
      isBurstReaction: Z,
      listHeaderClassName: F,
      activeSectionIndex: en,
      upsellGlowOpacity: el,
      emojiListRef: o
    }), eI = e => {
      er(e), "" === Q && E.kJ.setActiveCategoryIndex(e)
    }, eT = (0, y.Uf)({
      listRef: o,
      searchQuery: Q,
      nitroLockedSectionStates: f,
      setShowUpsell: eo,
      setUpsellGlowOpacity: ec
    }), eN = (0, y.Qs)({
      activeCategoryIndex: q,
      isScrolling: H,
      listRef: o,
      onActiveCategoryIndexChange: eI,
      scrollOffset: z,
      searchQuery: Q,
      disableForSearch: !1
    });
    (0, y.Xs)({
      searchQuery: Q,
      activeCategoryIndex: q,
      listRef: o
    });
    let eA = i.useCallback(e => {
        eT(e), eN(e)
      }, [eT, eN]),
      eC = f.length > 0;

    function eR() {
      if (!eh) return Y.NW.string(Y.t.EtmOFh);
      {
        let e = (0, M.Px)(W.p9.TIER_2);
        return Y.NW.format(Y.t.gMVjeX, {
          nitroTierName: e,
          onClick: () => {
            d({
              type: B.Bg.PREMIUM,
              emojiDescriptor: void 0
            })
          }
        })
      }
    }

    function eP() {
      if (eh) {
        var e;
        let t = (0, T.J0)();
        return null !== (e = (0, M.fr)(t)) && void 0 !== e ? e : Y.NW.string(Y.t.BmJkbW)
      }
      return Y.NW.string(Y.t.BmJkbW)
    }
    return i.useEffect(() => {
      ei && x.default.track(V.rMx.PREMIUM_UPSELL_VIEWED, {
        type: W.cd.EMOJI_PICKER_FLOATING_UPSELL,
        location: ee,
        location_stack: et
      })
    }, [ee, et, ei]), i.useEffect(() => {
      "" !== Q && (ec(0), eo(!1))
    }, [Q]), (0, r.jsxs)("div", {
      className: K.listWrapper,
      children: [eC ? (0, r.jsx)(g.Z, {
        role: "none presentation",
        className: K.list,
        listPadding: em,
        onScroll: eA,
        renderRow: eg,
        renderSection: eE,
        renderSectionHeader: ev,
        renderSectionFooter: eb,
        rowCount: R,
        rowCountBySection: p,
        rowHeight: ea(a),
        sectionHeaderHeight: eO,
        sectionMarginBottom: ey,
        sectionFooterHeight: eS,
        stickyHeaders: !0,
        ref: o
      }) : (0, r.jsx)(_.Z, {
        message: Y.NW.string(Y.t.IxxiKC),
        className: K.noSearchResultsContainer
      }), $ || c.tq ? null : (0, r.jsx)(C.p, {
        showUpsell: ei,
        text: eR(),
        button: eP(),
        buttonAnalyticsObject: {
          section: V.jXE.EMOJI_PICKER_FLOATING_UPSELL
        }
      })]
    })
  })
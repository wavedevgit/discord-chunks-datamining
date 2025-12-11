/** Chunk was on web.js **/
/** chunk id: 489762, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => em
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk55160 = require("./55160.js"),
  Chunk442837 = require("./442837.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk788911 = require("./788911.jsx"),
  Chunk2052 = require("./2052.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk218867 = require("./218867.jsx"),
  Chunk880949 = require("./880949.jsx"),
  Chunk806966 = require("./806966.js"),
  Chunk28546 = require("./28546.js"),
  Chunk691251 = require("./691251.js"),
  Chunk98528 = require("./98528.js"),
  Chunk551058 = require("./551058.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk624138 = require("./624138.js"),
  Chunk45521 = require("./45521.js"),
  Chunk285651 = require("./285651.js"),
  Chunk268350 = require("./268350.js"),
  Chunk217590 = require("./217590.js"),
  Chunk926491 = require("./926491.js"),
  Chunk373228 = require("./373228.js"),
  Chunk378233 = require("./378233.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk1450 = require("./1450.jsx"),
  Chunk491173 = require("./491173.jsx"),
  Chunk515005 = require("./515005.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk957825 = require("./957825.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk318187 = require("./318187.js"),
  Chunk239840 = require("./239840.js");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      B(e, t, n[t])
    })
  }
  return e
}

function V(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function H(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Y = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
  W = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
  K = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
  z = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
  q = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
  Q = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
  X = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
  J = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
  $ = (0, Chunk624138.Mg)(Chunk477690.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
  ee = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
  et = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
  en = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
  er = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
  ei = ee + 2 * en + er,
  ea = et + 2 * en + er,
  eo = 20,
  es = [K, q, Q, X],
  el = [z, q, Q, X],
  ec = 12,
  eu = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
  ed = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
  ef = e => {
    let {
      onSuggestionClick: t
    } = e;
    return (0, r.jsx)("div", {
      className: G.searchSuggestions,
      children: ed.map(e => (0, r.jsx)(l.P3F, {
        className: G.searchSuggestion,
        onClick: () => t(e),
        children: (0, r.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: e
        })
      }, e))
    })
  },
  ep = e => {
    let {
      onSelectSticker: t,
      channel: n,
      currentUser: r
    } = e, a = (0, u.O)(), o = (0, h.Iu)(e => e.searchQuery);
    return {
      handleStickerInspect: i.useCallback(e => {
        let {
          visibleRowIndex: t,
          columnIndex: n,
          gridSectionIndex: r
        } = e;
        m.ZN.setActiveCategoryIndex(r), m.ZN.setInspectedExpressionPosition(n, t, g.u.MOUSE_EVENT), e.type === R.al.STICKER && m.ZN.setSearchPlaceholder(e.sticker.name)
      }, []),
      handleSelect: i.useCallback((e, i) => {
        if (e.type !== R.al.STICKER) return;
        let {
          sticker: s
        } = e;
        if (null == s) return;
        let l = H(F({}, a.location), {
          object: "" === o ? M.qAy.STICKER_PICKER_VIEW_ALL : M.qAy.STICKER_SEARCH_VIEW_ALL
        });
        if (null != s && !(0, C.kl)(s, r, n)) {
          let e = (0, w.J8)(s);
          (0, C.cO)(s, r, n) === C.eb.SENDABLE_WITH_PREMIUM && (0, T.f)(true), e && C.eb.SENDABLE_WITH_BOOSTED_GUILD;
          return
        }
        if (i) return void((0, w.gM)(s.id) ? (0, A.hW)(s.id) : ((0, N.cQ)({
          sticker: s,
          location: H(F({}, l), {
            object: M.qAy.STICKER
          })
        }), (0, A.SA)(s.id)));
        t(e)
      }, [a.location, o, r, n, t])
    }
  },
  e_ = e => {
    let {
      collapsedStickersCategories: t,
      gridWidth: n,
      onSelectSticker: a,
      getStickerItemProps: s,
      getStickerRowProps: c,
      gutterWidth: d,
      inspectedStickerPosition: f,
      isScrolling: p,
      isUsingKeyboardNavigation: m,
      stickersGrid: h,
      stickersCategories: g,
      filteredStickers: E,
      ownedStickerPacks: I,
      channel: T
    } = e, C = (0, u.O)(), A = (0, o.e7)([v.default], () => v.default.getCurrentUser()), {
      handleStickerInspect: N,
      handleSelect: L
    } = ep({
      onSelectSticker: a,
      channel: T,
      currentUser: A
    }), [Z, B] = i.useState(false), F = i.useCallback(e => {
      y._O.updateSetting(Array.from(e))
    }, []), V = i.useCallback(e => {
      let t = h[e];
      return null != t ? (0, r.jsx)(j.Z, {
        getStickerItemProps: s,
        getStickerRowProps: c,
        gutterWidth: d,
        inspectedStickerPosition: f,
        isScrolling: p,
        isUsingKeyboardNavigation: m,
        onInspect: N,
        onSelect: L,
        rowIndex: e,
        stickerClassName: G.sticker,
        stickerDescriptors: t,
        stickerSize: n > Y ? ee : et,
        preferAnimation: n <= W,
        ownedStickerPacks: I,
        isDisplayingIndividualStickers: true,
        channel: T,
        currentUser: A
      }, e) : null
    }, [h, s, c, d, f, p, m, N, L, n, I, T, A]), H = i.useCallback((e, t) => (0, r.jsx)("div", {
      children: t
    }, e), []), K = i.useCallback(function(e) {
      let {
        isStickerPack: n = true
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, r = new Set(t), i = t.has(e);
      i ? r.delete(e) : r.add(e), S.default.track(M.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
        location: null == C ? true : C.location,
        tab: k.X1.STICKER,
        collapsed: !i,
        sticker_pack_id: n ? e : null
      }), F(r)
    }, [C, t, F]), z = i.useCallback(e => {
      let n = g[e];
      if (null != E) {
        let {
          sendable: t,
          sendableWithPremium: n
        } = E;
        if (0 === e && t.length > 0) return null;
        let i = t.length > 0 && n.length > 0;
        return (0, r.jsxs)(r.Fragment, {
          children: [i ? (0, r.jsx)("div", {
            className: G.divider,
            children: (0, r.jsx)(l.izJ, {})
          }) : null, (0, r.jsx)(b.Z, {
            className: G.packHeader,
            "aria-label": U.intl.string(U.t.wbfJFh),
            children: U.intl.string(U.t["05Z/0l"])
          }, "stickers-you-might-like-header")]
        })
      }
      switch (n.type) {
        case R.Ih.FAVORITE:
          return (0, r.jsx)(b.Z, {
            className: G.packHeader,
            "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], {
              categoryName: n.name
            }),
            icon: (0, r.jsx)(l.r7p, {
              size: "xs",
              color: "currentColor"
            }),
            isCollapsed: t.has(n.id),
            onClick: () => K(n.id, {
              isStickerPack: false
            }),
            children: n.name
          }, "header-".concat(n.id));
        case R.Ih.RECENT:
          return (0, r.jsx)(b.Z, {
            className: G.packHeader,
            "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], {
              categoryName: n.name
            }),
            icon: (0, r.jsx)(l.T39, {
              size: "xs",
              color: "currentColor"
            }),
            isCollapsed: t.has(n.id),
            onClick: () => K(n.id, {
              isStickerPack: false
            }),
            children: n.name
          }, "header-".concat(n.id));
        case R.Ih.GUILD:
        case R.Ih.EMPTY_GUILD_UPSELL: {
          let e = O.Z.getGuild(n.id);
          if (null == e) return null;
          return (0, r.jsx)(b.Z, {
            className: G.packHeader,
            "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], {
              categoryName: e.name
            }),
            icon: (0, r.jsx)(_.Z, {
              guild: e,
              height: 16,
              width: 16
            }),
            isCollapsed: t.has(e.id),
            onClick: () => K(e.id),
            children: e.name
          }, "h".concat(e.id))
        }
        case R.Ih.PACK: {
          let e = P.Z.getStickerPack(n.id);
          if (null == e) return null;
          return (0, r.jsx)(b.Z, {
            className: G.packHeader,
            "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], {
              categoryName: e.name
            }),
            icon: (0, r.jsx)(D.Z, {
              disableAnimation: true,
              size: ec,
              sticker: (0, w.Zt)(e)
            }),
            isCollapsed: t.has(e.id),
            onClick: () => K(e.id),
            children: e.name
          }, "h".concat(e.id))
        }
      }
    }, [t, g, K, E]), q = i.useCallback(e => {
      if (null != E) {
        let {
          sendable: t,
          sendableWithPremium: n
        } = E;
        return 0 === e && t.length > 0 ? 0 : $ + (t.length > 0 && n.length > 0 ? J : 0)
      }
      return $
    }, [E]);
    return {
      renderRow: V,
      renderSection: H,
      renderSectionHeader: z,
      sectionHeaderHeight: q,
      renderSectionFooter: i.useCallback(e => {
        let n = g[e],
          i = t.has(n.id);
        return n.type !== R.Ih.EMPTY_GUILD_UPSELL || null != E || i ? null : (0, r.jsx)(x.Z, {
          className: G.emptyGuildUpsell,
          guildId: n.id,
          channel: T,
          shouldTrackUpsellViewed: !Z,
          setTrackedUpsellViewed: B
        }, "sticker-picker-empty-guild-inline-upsell-".concat(n.id))
      }, [g, t, E, T, Z]),
      sectionFooterHeight: i.useCallback(e => {
        let n = g[e],
          r = t.has(n.id);
        return n.type !== R.Ih.EMPTY_GUILD_UPSELL || r ? 0 : eu
      }, [g, t])
    }
  },
  em = Chunk473749.forwardRef(function(e, t) {
    let {
      collapsedStickersCategories: n,
      gridWidth: s,
      filteredStickers: l,
      getStickerItemProps: u,
      getStickerRowProps: _,
      gutterWidth: g,
      isUsingKeyboardNavigation: b,
      onSelectSticker: y,
      rowCount: O,
      rowCountBySection: v,
      stickersCategories: S,
      stickersGrid: I,
      channel: T
    } = e, C = i.useRef(false), A = i.useRef(null), [N, R] = m.ZN.useStore(e => [e.activeCategoryIndex, e.inspectedExpressionPosition], a.X), {
      analyticsLocations: w
    } = (0, f.ZP)(d.Z.STICKER_PICKER), D = (0, h.Iu)(e => e.searchQuery), x = (0, o.e7)([P.Z], () => P.Z.getPremiumPacks()), {
      renderRow: j,
      renderSection: M,
      renderSectionFooter: k,
      sectionFooterHeight: B,
      renderSectionHeader: F,
      sectionHeaderHeight: V
    } = e_({
      collapsedStickersCategories: n,
      gridWidth: s,
      stickersCategories: S,
      stickersGrid: I,
      isScrolling: C,
      isUsingKeyboardNavigation: b,
      onSelectSticker: y,
      getStickerItemProps: u,
      getStickerRowProps: _,
      gutterWidth: g,
      inspectedStickerPosition: R,
      filteredStickers: l,
      ownedStickerPacks: i.useMemo(() => new Set(x.map(e => e.id)), [x]),
      channel: T
    }), H = (0, E.Qs)({
      activeCategoryIndex: N,
      isScrolling: C,
      listRef: A,
      onActiveCategoryIndexChange: m.ZN.setActiveCategoryIndex,
      scrollOffset: eo,
      searchQuery: D
    });
    return (0, E.Xs)({
      searchQuery: D,
      activeCategoryIndex: N,
      listRef: A
    }), i.useImperativeHandle(t, () => ({
      scrollTo: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = A.current) ? true : e.scrollTo(...n)
      },
      getRowDescriptors: () => {
        var e, t;
        return null != (t = null == (e = A.current) ? true : e.getRowDescriptors()) ? t : []
      },
      getSectionDescriptors: () => {
        var e, t;
        return null != (t = null == (e = A.current) ? true : e.getSectionDescriptors()) ? t : []
      },
      scrollToSectionTop: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = A.current) ? true : e.scrollToSectionTop(...n)
      },
      scrollRowIntoView: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = A.current) ? true : e.scrollRowIntoView(...n)
      },
      getScrollerNode: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = A.current) ? true : e.getScrollerNode(...n)
      },
      scrollIntoViewNode: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = A.current) ? true : e.scrollIntoViewNode(...n)
      },
      getListDimensions: function() {
        for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return null != (t = null == (e = A.current) ? true : e.getListDimensions(...r)) ? t : {
          height: false,
          totalHeight: false
        }
      }
    }), []), (0, r.jsx)(f.Gt, {
      value: w,
      children: (0, r.jsxs)("div", {
        className: G.wrapper,
        children: [null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length ? (0, r.jsx)(c.Z, {
          message: U.intl.string(U.t["zc+LQd"]),
          className: G.__invalid_noSearchResultsContainer,
          noResultsImageURL: Z,
          suggestions: (0, r.jsx)(ef, {
            onSuggestionClick: e => (0, h.ql)(e, true)
          })
        }) : (0, r.jsx)(p.Z, {
          role: "none presentation",
          listPadding: null != l ? el : es,
          onScroll: H,
          renderRow: j,
          renderSection: null == l ? M : true,
          renderSectionHeader: F,
          renderSectionFooter: k,
          rowCount: O,
          rowCountBySection: v,
          rowHeight: s > Y ? ei : ea,
          sectionHeaderHeight: V,
          sectionFooterHeight: B,
          stickyHeaders: true,
          ref: A
        }), (0, r.jsx)(L.Z, {
          stickersGrid: I
        })]
      })
    })
  })
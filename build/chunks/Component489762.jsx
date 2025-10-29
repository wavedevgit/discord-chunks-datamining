/** Chunk was on web.js **/
/** chunk id: 489762, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eh
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk574583 = require("./574583.js"),
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
  Chunk473049 = require("./473049.js"),
  Chunk239840 = require("./239840.js");

function Z(e, t, n) {
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
      Z(e, t, n[t])
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
  X = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
  Q = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
  J = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
  $ = (0, Chunk624138.Mg)(Chunk477690.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
  ee = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
  et = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
  en = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
  er = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
  ei = ee + 2 * en + er,
  ea = et + 2 * en + er,
  eo = 20,
  es = [K, q, X, Q],
  el = [z, q, X, Q],
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
  e_ = e => {
    let {
      onSelectSticker: t,
      channel: n,
      currentUser: r
    } = e, a = (0, u.O)(), o = (0, m.Iu)(e => e.searchQuery);
    return {
      handleStickerInspect: i.useCallback(e => {
        let {
          visibleRowIndex: t,
          columnIndex: n,
          gridSectionIndex: r
        } = e;
        h.ZN.setActiveCategoryIndex(r), h.ZN.setInspectedExpressionPosition(n, t, g.u.MOUSE_EVENT), e.type === P.al.STICKER && h.ZN.setSearchPlaceholder(e.sticker.name)
      }, []),
      handleSelect: i.useCallback((e, i) => {
        if (e.type !== P.al.STICKER) return;
        let {
          sticker: s
        } = e;
        if (null == s) return;
        let l = H(F({}, a.location), {
          object: "" === o ? k.qAy.STICKER_PICKER_VIEW_ALL : k.qAy.STICKER_SEARCH_VIEW_ALL
        });
        if (null != s && !(0, A.kl)(s, r, n)) {
          let e = (0, D.J8)(s);
          (0, A.cO)(s, r, n) === A.eb.SENDABLE_WITH_PREMIUM && (0, S.f)(true), e && A.eb.SENDABLE_WITH_BOOSTED_GUILD;
          return
        }
        if (i) return void((0, D.gM)(s.id) ? (0, C.hW)(s.id) : ((0, N.cQ)({
          sticker: s,
          location: H(F({}, l), {
            object: k.qAy.STICKER
          })
        }), (0, C.SA)(s.id)));
        t(e)
      }, [a.location, o, r, n, t])
    }
  },
  ep = e => {
    let {
      collapsedStickersCategories: t,
      gridWidth: n,
      onSelectSticker: a,
      getStickerItemProps: s,
      getStickerRowProps: c,
      gutterWidth: d,
      inspectedStickerPosition: f,
      isScrolling: _,
      isUsingKeyboardNavigation: h,
      stickersGrid: m,
      stickersCategories: g,
      filteredStickers: E,
      ownedStickerPacks: T,
      channel: S
    } = e, A = (0, u.O)(), C = (0, o.e7)([v.default], () => v.default.getCurrentUser()), {
      handleStickerInspect: N,
      handleSelect: x
    } = e_({
      onSelectSticker: a,
      channel: S,
      currentUser: C
    }), [B, Z] = i.useState(false), F = i.useCallback(e => {
      y._O.updateSetting(Array.from(e))
    }, []), V = i.useCallback(e => {
      let t = m[e];
      return null != t ? (0, r.jsx)(M.Z, {
        getStickerItemProps: s,
        getStickerRowProps: c,
        gutterWidth: d,
        inspectedStickerPosition: f,
        isScrolling: _,
        isUsingKeyboardNavigation: h,
        onInspect: N,
        onSelect: x,
        rowIndex: e,
        stickerClassName: G.sticker,
        stickerDescriptors: t,
        stickerSize: n > Y ? ee : et,
        preferAnimation: n <= W,
        ownedStickerPacks: T,
        isDisplayingIndividualStickers: true,
        channel: S,
        currentUser: C
      }, e) : null
    }, [m, s, c, d, f, _, h, N, x, n, T, S, C]), H = i.useCallback((e, t) => (0, r.jsx)("div", {
      children: t
    }, e), []), K = i.useCallback(function(e) {
      let {
        isStickerPack: n = true
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, r = new Set(t), i = t.has(e);
      i ? r.delete(e) : r.add(e), I.default.track(k.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
        location: null == A ? true : A.location,
        tab: j.X1.STICKER,
        collapsed: !i,
        sticker_pack_id: n ? e : null
      }), F(r)
    }, [A, t, F]), z = i.useCallback(e => {
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
        case P.Ih.FAVORITE:
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
        case P.Ih.RECENT:
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
        case P.Ih.GUILD:
        case P.Ih.EMPTY_GUILD_UPSELL: {
          let e = O.Z.getGuild(n.id);
          if (null == e) return null;
          return (0, r.jsx)(b.Z, {
            className: G.packHeader,
            "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], {
              categoryName: e.name
            }),
            icon: (0, r.jsx)(p.Z, {
              guild: e,
              height: 16,
              width: 16
            }),
            isCollapsed: t.has(e.id),
            onClick: () => K(e.id),
            children: e.name
          }, "h".concat(e.id))
        }
        case P.Ih.PACK: {
          let e = R.Z.getStickerPack(n.id);
          if (null == e) return null;
          return (0, r.jsx)(b.Z, {
            className: G.packHeader,
            "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], {
              categoryName: e.name
            }),
            icon: (0, r.jsx)(w.Z, {
              disableAnimation: true,
              size: ec,
              sticker: (0, D.Zt)(e)
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
        return n.type !== P.Ih.EMPTY_GUILD_UPSELL || null != E || i ? null : (0, r.jsx)(L.Z, {
          className: G.emptyGuildUpsell,
          guildId: n.id,
          channel: S,
          shouldTrackUpsellViewed: !B,
          setTrackedUpsellViewed: Z
        }, "sticker-picker-empty-guild-inline-upsell-".concat(n.id))
      }, [g, t, E, S, B]),
      sectionFooterHeight: i.useCallback(e => {
        let n = g[e],
          r = t.has(n.id);
        return n.type !== P.Ih.EMPTY_GUILD_UPSELL || r ? 0 : eu
      }, [g, t])
    }
  },
  eh = Chunk647438.forwardRef(function(e, t) {
    let {
      collapsedStickersCategories: n,
      gridWidth: s,
      filteredStickers: l,
      getStickerItemProps: u,
      getStickerRowProps: p,
      gutterWidth: g,
      isUsingKeyboardNavigation: b,
      onSelectSticker: y,
      rowCount: O,
      rowCountBySection: v,
      stickersCategories: I,
      stickersGrid: T,
      channel: S
    } = e, A = i.useRef(false), C = i.useRef(null), [N, P] = h.ZN.useStore(e => [e.activeCategoryIndex, e.inspectedExpressionPosition], a.X), {
      analyticsLocations: D
    } = (0, f.ZP)(d.Z.STICKER_PICKER), w = (0, m.Iu)(e => e.searchQuery), L = (0, o.e7)([R.Z], () => R.Z.getPremiumPacks()), {
      renderRow: M,
      renderSection: k,
      renderSectionFooter: j,
      sectionFooterHeight: Z,
      renderSectionHeader: F,
      sectionHeaderHeight: V
    } = ep({
      collapsedStickersCategories: n,
      gridWidth: s,
      stickersCategories: I,
      stickersGrid: T,
      isScrolling: A,
      isUsingKeyboardNavigation: b,
      onSelectSticker: y,
      getStickerItemProps: u,
      getStickerRowProps: p,
      gutterWidth: g,
      inspectedStickerPosition: P,
      filteredStickers: l,
      ownedStickerPacks: i.useMemo(() => new Set(L.map(e => e.id)), [L]),
      channel: S
    }), H = (0, E.Qs)({
      activeCategoryIndex: N,
      isScrolling: A,
      listRef: C,
      onActiveCategoryIndexChange: h.ZN.setActiveCategoryIndex,
      scrollOffset: eo,
      searchQuery: w
    });
    return (0, E.Xs)({
      searchQuery: w,
      activeCategoryIndex: N,
      listRef: C
    }), i.useImperativeHandle(t, () => ({
      scrollTo: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = C.current) ? true : e.scrollTo(...n)
      },
      getRowDescriptors: () => {
        var e, t;
        return null != (t = null == (e = C.current) ? true : e.getRowDescriptors()) ? t : []
      },
      getSectionDescriptors: () => {
        var e, t;
        return null != (t = null == (e = C.current) ? true : e.getSectionDescriptors()) ? t : []
      },
      scrollToSectionTop: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = C.current) ? true : e.scrollToSectionTop(...n)
      },
      scrollRowIntoView: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = C.current) ? true : e.scrollRowIntoView(...n)
      },
      getScrollerNode: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = C.current) ? true : e.getScrollerNode(...n)
      },
      scrollIntoViewNode: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = C.current) ? true : e.scrollIntoViewNode(...n)
      },
      getListDimensions: function() {
        for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return null != (t = null == (e = C.current) ? true : e.getListDimensions(...r)) ? t : {
          height: false,
          totalHeight: false
        }
      }
    }), []), (0, r.jsx)(f.Gt, {
      value: D,
      children: (0, r.jsxs)("div", {
        className: G.wrapper,
        children: [null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length ? (0, r.jsx)(c.Z, {
          message: U.intl.string(U.t["zc+LQd"]),
          className: G.__invalid_noSearchResultsContainer,
          noResultsImageURL: B,
          suggestions: (0, r.jsx)(ef, {
            onSuggestionClick: e => (0, m.ql)(e, true)
          })
        }) : (0, r.jsx)(_.Z, {
          role: "none presentation",
          listPadding: null != l ? el : es,
          onScroll: H,
          renderRow: M,
          renderSection: null == l ? k : true,
          renderSectionHeader: F,
          renderSectionFooter: j,
          rowCount: O,
          rowCountBySection: v,
          rowHeight: s > Y ? ei : ea,
          sectionHeaderHeight: V,
          sectionFooterHeight: Z,
          stickyHeaders: true,
          ref: C
        }), (0, r.jsx)(x.Z, {
          stickersGrid: T
        })]
      })
    })
  })
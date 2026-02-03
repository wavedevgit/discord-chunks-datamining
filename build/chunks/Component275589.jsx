/** Chunk was on web.js **/
/** chunk id: 275589, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eh
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk942381 = require("./942381.js"),
  Chunk311907 = require("./311907.js"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk537652 = require("./537652.jsx"),
  Chunk212245 = require("./212245.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk962125 = require("./962125.jsx"),
  Chunk724511 = require("./724511.jsx"),
  Chunk850992 = require("./850992.js"),
  Chunk151271 = require("./151271.js"),
  Chunk60587 = require("./60587.js"),
  Chunk887695 = require("./887695.js"),
  Chunk286509 = require("./286509.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk240248 = require("./240248.js"),
  Chunk410558 = require("./410558.js"),
  Chunk361670 = require("./361670.js"),
  Chunk631576 = require("./631576.js"),
  Chunk891090 = require("./891090.js"),
  Chunk679382 = require("./679382.js"),
  Chunk842086 = require("./842086.js"),
  Chunk378058 = require("./378058.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk102001 = require("./102001.jsx"),
  Chunk672182 = require("./672182.jsx"),
  Chunk582721 = require("./582721.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk698279 = require("./698279.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk780465 = require("./780465.js"),
  Chunk911385 = require("./911385.js");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function H(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let W = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
  K = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
  z = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
  q = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
  Z = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
  Q = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
  X = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
  J = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
  $ = (0, Chunk240248.xI)(Chunk319060.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
  ee = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
  et = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
  en = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
  er = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
  ei = ee + 2 * en + er,
  ea = et + 2 * en + er,
  eo = 20,
  es = [z, Z, Q, X],
  el = [q, Z, Q, X],
  ec = 12,
  eu = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
  ed = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
  ef = e => {
    let {
      onSuggestionClick: t
    } = e;
    return (0, r.jsx)("div", {
      className: G.yB,
      children: ed.map(e => (0, r.jsx)(l.DUT, {
        className: G.x_,
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
    } = e, a = (0, u.p)(), o = (0, m.RQ)(e => e.searchQuery);
    return {
      handleStickerInspect: i.useCallback(e => {
        let {
          visibleRowIndex: t,
          columnIndex: n,
          gridSectionIndex: r
        } = e;
        h.bM.setActiveCategoryIndex(r), h.bM.setInspectedExpressionPosition(n, t, g.t.MOUSE_EVENT), e.type === R.op.STICKER && h.bM.setSearchPlaceholder(e.sticker.name)
      }, []),
      handleSelect: i.useCallback((e, i) => {
        if (e.type !== R.op.STICKER) return;
        let {
          sticker: s
        } = e;
        if (null == s) return;
        let l = Y(B({}, a.location), {
          object: "" === o ? j.ZSU.STICKER_PICKER_VIEW_ALL : j.ZSU.STICKER_SEARCH_VIEW_ALL
        });
        if (null != s && !(0, T.G7)(s, r, n)) {
          let e = (0, P.Xw)(s);
          (0, T.W$)(s, r, n) === T.Ux.SENDABLE_WITH_PREMIUM && (0, S.U)(true), e && T.Ux.SENDABLE_WITH_BOOSTED_GUILD;
          return
        }
        i ? (0, P.o1)(s.id) ? (0, C.vr)(s.id) : ((0, N.Dt)({
          sticker: s,
          location: Y(B({}, l), {
            object: j.ZSU.STICKER
          })
        }), (0, C.uK)(s.id)) : t(e)
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
      isUsingKeyboardNavigation: h,
      stickersGrid: m,
      stickersCategories: g,
      filteredStickers: E,
      ownedStickerPacks: I,
      channel: S
    } = e, T = (0, u.p)(), C = (0, o.bG)([v.default], () => v.default.getCurrentUser()), {
      handleStickerInspect: N,
      handleSelect: x
    } = ep({
      onSelectSticker: a,
      channel: S,
      currentUser: C
    }), [F, V] = i.useState(false), B = i.useCallback(e => {
      b.tP.updateSetting(Array.from(e))
    }, []), H = i.useCallback(e => {
      let t = m[e];
      return null != t ? (0, r.jsx)(M.A, {
        getStickerItemProps: s,
        getStickerRowProps: c,
        gutterWidth: d,
        inspectedStickerPosition: f,
        isScrolling: p,
        isUsingKeyboardNavigation: h,
        onInspect: N,
        onSelect: x,
        rowIndex: e,
        stickerClassName: G.yI,
        stickerDescriptors: t,
        stickerSize: n > W ? ee : et,
        preferAnimation: n <= K,
        ownedStickerPacks: I,
        isDisplayingIndividualStickers: true,
        channel: S,
        currentUser: C
      }, e) : null
    }, [m, s, c, d, f, p, h, N, x, n, I, S, C]), Y = i.useCallback((e, t) => (0, r.jsx)("div", {
      children: t
    }, e), []), z = i.useCallback(function(e) {
      let {
        isStickerPack: n = true
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, r = new Set(t), i = t.has(e);
      i ? r.delete(e) : r.add(e), A.default.track(j.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
        location: null == T ? true : T.location,
        tab: k.kx.STICKER,
        collapsed: !i,
        sticker_pack_id: n ? e : null
      }), B(r)
    }, [T, t, B]), q = i.useCallback(e => {
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
            className: G.yF,
            children: (0, r.jsx)(l.cGx, {})
          }) : null, (0, r.jsx)(y.A, {
            className: G.jH,
            "aria-label": U.intl.string(U.t.wbfJFh),
            children: U.intl.string(U.t["05Z/0l"])
          }, "stickers-you-might-like-header")]
        })
      }
      switch (n.type) {
        case R.Z2.FAVORITE:
          return (0, r.jsx)(y.A, {
            className: G.jH,
            "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], {
              categoryName: n.name
            }),
            icon: (0, r.jsx)(l.Gg5, {
              size: "xs",
              color: "currentColor"
            }),
            isCollapsed: t.has(n.id),
            onClick: () => z(n.id, {
              isStickerPack: false
            }),
            children: n.name
          }, "header-".concat(n.id));
        case R.Z2.RECENT:
          return (0, r.jsx)(y.A, {
            className: G.jH,
            "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], {
              categoryName: n.name
            }),
            icon: (0, r.jsx)(l.O4, {
              size: "xs",
              color: "currentColor"
            }),
            isCollapsed: t.has(n.id),
            onClick: () => z(n.id, {
              isStickerPack: false
            }),
            children: n.name
          }, "header-".concat(n.id));
        case R.Z2.GUILD:
        case R.Z2.EMPTY_GUILD_UPSELL: {
          let e = O.A.getGuild(n.id);
          if (null == e) return null;
          return (0, r.jsx)(y.A, {
            className: G.jH,
            "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], {
              categoryName: e.name
            }),
            icon: (0, r.jsx)(_.A, {
              guild: e,
              height: 16,
              width: 16
            }),
            isCollapsed: t.has(e.id),
            onClick: () => z(e.id),
            children: e.name
          }, "h".concat(e.id))
        }
        case R.Z2.PACK: {
          let e = w.A.getStickerPack(n.id);
          if (null == e) return null;
          return (0, r.jsx)(y.A, {
            className: G.jH,
            "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], {
              categoryName: e.name
            }),
            icon: (0, r.jsx)(D.A, {
              disableAnimation: true,
              size: ec,
              sticker: (0, P.Id)(e)
            }),
            isCollapsed: t.has(e.id),
            onClick: () => z(e.id),
            children: e.name
          }, "h".concat(e.id))
        }
      }
    }, [t, g, z, E]), Z = i.useCallback(e => {
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
      renderRow: H,
      renderSection: Y,
      renderSectionHeader: q,
      sectionHeaderHeight: Z,
      renderSectionFooter: i.useCallback(e => {
        let n = g[e],
          i = t.has(n.id);
        return n.type !== R.Z2.EMPTY_GUILD_UPSELL || null != E || i ? null : (0, r.jsx)(L.A, {
          className: G.Ij,
          guildId: n.id,
          channel: S,
          shouldTrackUpsellViewed: !F,
          setTrackedUpsellViewed: V
        }, "sticker-picker-empty-guild-inline-upsell-".concat(n.id))
      }, [g, t, E, S, F]),
      sectionFooterHeight: i.useCallback(e => {
        let n = g[e],
          r = t.has(n.id);
        return n.type !== R.Z2.EMPTY_GUILD_UPSELL || r ? 0 : eu
      }, [g, t])
    }
  },
  eh = Chunk64700.forwardRef(function(e, t) {
    let {
      collapsedStickersCategories: n,
      gridWidth: s,
      filteredStickers: l,
      getStickerItemProps: u,
      getStickerRowProps: _,
      gutterWidth: g,
      isUsingKeyboardNavigation: y,
      onSelectSticker: b,
      rowCount: O,
      rowCountBySection: v,
      stickersCategories: A,
      stickersGrid: I,
      channel: S
    } = e, T = i.useRef(false), C = i.useRef(null), [N, R] = h.bM.useStore(e => [e.activeCategoryIndex, e.inspectedExpressionPosition], a.x), {
      analyticsLocations: P
    } = (0, f.Ay)(d.A.STICKER_PICKER), D = (0, m.RQ)(e => e.searchQuery), L = (0, o.bG)([w.A], () => w.A.getPremiumPacks()), {
      renderRow: M,
      renderSection: j,
      renderSectionFooter: k,
      sectionFooterHeight: V,
      renderSectionHeader: B,
      sectionHeaderHeight: H
    } = e_({
      collapsedStickersCategories: n,
      gridWidth: s,
      stickersCategories: A,
      stickersGrid: I,
      isScrolling: T,
      isUsingKeyboardNavigation: y,
      onSelectSticker: b,
      getStickerItemProps: u,
      getStickerRowProps: _,
      gutterWidth: g,
      inspectedStickerPosition: R,
      filteredStickers: l,
      ownedStickerPacks: i.useMemo(() => new Set(L.map(e => e.id)), [L]),
      channel: S
    }), Y = (0, E.Fk)({
      activeCategoryIndex: N,
      isScrolling: T,
      listRef: C,
      onActiveCategoryIndexChange: h.bM.setActiveCategoryIndex,
      scrollOffset: eo,
      searchQuery: D
    });
    return (0, E.FV)({
      searchQuery: D,
      activeCategoryIndex: N,
      listRef: C
    }), i.useImperativeHandle(t, () => ({
      scrollTo: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = C.current) ? true : e.scrollTo(...n)
      },
      getRowDescriptors: () => {
        var e, t;
        return null != (e = null == (t = C.current) ? true : t.getRowDescriptors()) ? e : []
      },
      getSectionDescriptors: () => {
        var e, t;
        return null != (e = null == (t = C.current) ? true : t.getSectionDescriptors()) ? e : []
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
        return null != (e = null == (t = C.current) ? true : t.getListDimensions(...r)) ? e : {
          height: false,
          totalHeight: false
        }
      }
    }), []), (0, r.jsx)(f.f5, {
      value: P,
      children: (0, r.jsxs)("div", {
        className: G.iE,
        children: [null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length ? (0, r.jsx)(c.A, {
          message: U.intl.string(U.t["zc+LQd"]),
          className: G.__invalid_noSearchResultsContainer,
          noResultsImageURL: F,
          suggestions: (0, r.jsx)(ef, {
            onSuggestionClick: e => (0, m.Ri)(e, true)
          })
        }) : (0, r.jsx)(p.A, {
          role: "none presentation",
          listPadding: null != l ? el : es,
          onScroll: Y,
          renderRow: M,
          renderSection: null == l ? j : true,
          renderSectionHeader: B,
          renderSectionFooter: k,
          rowCount: O,
          rowCountBySection: v,
          rowHeight: s > W ? ei : ea,
          sectionHeaderHeight: H,
          sectionFooterHeight: V,
          stickyHeaders: true,
          ref: C
        }), (0, r.jsx)(x.A, {
          stickersGrid: I
        })]
      })
    })
  })
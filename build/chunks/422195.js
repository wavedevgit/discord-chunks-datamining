/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => V
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(477690),
  l = n(481060),
  c = n(2052),
  u = n(880949),
  d = n(806966),
  f = n(28546),
  _ = n(254494),
  p = n(430824),
  h = n(626135),
  g = n(624138),
  m = n(453070),
  E = n(926491),
  v = n(373228),
  b = n(378233),
  y = n(419922),
  O = n(981631),
  S = n(957825),
  I = n(388032),
  T = n(627672);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = (0, g.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
  D = (0, g.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
  w = (0, g.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
  L = (0, g.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
  x = (0, g.Mg)(s.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  M = (0, g.Mg)(s.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  k = [P, P, P, P],
  j = (D + w) * 2 + P,
  U = x + 2 * M,
  G = 7,
  B = e => {
    let {
      activeIndex: t,
      stickerPickerCategories: n,
      categoryListRef: o,
      firstStandardStickerCategoryOffsetTop: s,
      setShouldRenderShortcut: d
    } = e, _ = (0, c.O)(), g = (0, f.Iu)(e => "" !== e.searchQuery), m = i.useCallback((e, o, s) => {
      var c, d;
      let f;
      let m = (null === (c = n[0]) || void 0 === c ? void 0 : c.type) === v.Ih.FAVORITE,
        N = +!!m,
        C = (null === (d = n[N]) || void 0 === d ? void 0 : d.type) === v.Ih.RECENT,
        P = n.length > 0,
        w = n.length;
      if (0 === o && m) return (0, r.jsx)("div", {
        role: "listitem",
        "aria-setsize": w,
        "aria-posinset": o,
        children: (0, r.jsx)(l.P3F, {
          "aria-label": I.NW.string(I.t.y3LQCA),
          className: a()(T.stickerCategory, T.stickerCategoryGeneric, {
            [T.stickerCategoryGenericDisabled]: P && !m,
            [T.stickerCategoryGenericSelected]: !g && m && 0 === t
          }),
          onClick: s,
          children: (0, r.jsx)(l.r7p, {
            size: "custom",
            color: "currentColor",
            className: T.stickerCategoryGenericIcon,
            height: L,
            width: L
          })
        })
      }, "favorites");
      if (o === N && C) return (0, r.jsx)("div", {
        role: "listitem",
        "aria-setsize": w,
        "aria-posinset": o,
        children: (0, r.jsx)(l.P3F, {
          "aria-label": I.NW.string(I.t.RxAmVF),
          className: a()(T.stickerCategory, T.stickerCategoryGeneric, {
            [T.stickerCategoryGenericDisabled]: P && !C,
            [T.stickerCategoryGenericSelected]: !g && C && t === N
          }),
          onClick: s,
          children: (0, r.jsx)(l.T39, {
            size: "custom",
            color: "currentColor",
            className: T.stickerCategoryGenericIcon,
            height: L,
            width: L
          })
        })
      }, "recent");
      let x = t === o,
        M = n[o],
        k = n[o + 1],
        j = null != k && M.type === v.Ih.GUILD && k.type !== v.Ih.GUILD,
        U = M.type === v.Ih.PACK,
        G = "",
        B = null;
      if (M.type === v.Ih.GUILD || M.type === v.Ih.EMPTY_GUILD_UPSELL) {
        let e = p.Z.getGuild(M.id);
        null != e && (f = e.id, G = e.name, B = (0, r.jsx)(u.Z, {
          guild: e,
          isSelected: x
        }))
      } else if (U) {
        let e = E.Z.getStickerPack(M.id);
        null != e && (G = e.name, B = (0, r.jsx)(y.ZP, {
          disableAnimation: !x || g,
          size: D,
          sticker: (0, b.Zt)(e)
        }))
      }
      return (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(l.ua7, {
          position: "right",
          text: G,
          tooltipContentClassName: T.__invalid_tooltip,
          children: e => (0, r.jsx)("div", {
            role: "listitem",
            "aria-setsize": w,
            "aria-posinset": o,
            children: (0, r.jsx)(l.P3F, R(A({}, e), {
              "aria-label": G,
              className: a()(T.stickerCategory, {
                [T.firstPartyCategory]: U,
                [T.firstPartyCategorySelected]: !g && x && U
              }),
              onClick: () => {
                M.type === v.Ih.PACK && h.default.track(O.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                  location: null == _ ? void 0 : _.location,
                  tab: S.X1.STICKER,
                  sticker_pack_id: M.id,
                  guild_id: f
                }), s()
              },
              children: B
            }))
          })
        }), j ? (0, r.jsx)("hr", {
          className: T.guildCategorySeparator
        }, "separator") : null]
      }, M.id)
    }, [t, _, g, n]), N = i.useCallback((e, t) => t ? j : 0, []);
    return {
      getScrollOffsetForIndex: N,
      renderCategoryListItem: m,
      rowHeight: i.useCallback((e, t) => {
        let r = n[t],
          i = n[t + 1];
        return D + (null != i && r.type === v.Ih.GUILD && i.type !== v.Ih.GUILD ? U : w)
      }, [n]),
      onScroll: i.useCallback(e => {
        var t;
        let n = null === (t = o.current) || void 0 === t ? void 0 : t.getListDimensions();
        null != n && d(e + n.height - x < s)
      }, [s, o, d])
    }
  },
  V = e => {
    let {
      stickersListRef: t,
      channel: n
    } = e, o = i.useRef(null), [s, c] = i.useState(!0), u = d.ZN.useStore(e => e.activeCategoryIndex), f = (0, m.Sd)(n), {
      firstStandardStickerCategoryIndex: p,
      firstStandardStickerCategoryOffsetTop: h,
      guildCategoryCount: g,
      hasFirstPartyStickerPacks: E
    } = i.useMemo(() => {
      var e, t;
      let n = f.filter(e => e.type === v.Ih.GUILD).length,
        r = n + +((null === (e = f[0]) || void 0 === e ? void 0 : e.type) === v.Ih.RECENT) + +((null === (t = f[0]) || void 0 === t ? void 0 : t.type) === v.Ih.FAVORITE),
        i = r * (D + w) - w + U;
      return {
        firstStandardStickerCategoryIndex: r + 1,
        firstStandardStickerCategoryOffsetTop: i,
        guildCategoryCount: n,
        hasFirstPartyStickerPacks: null != f.find(e => e.type === v.Ih.PACK)
      }
    }, [f]);
    i.useLayoutEffect(() => {
      c(g >= G)
    }, [g]);
    let {
      renderCategoryListItem: b,
      rowHeight: y,
      onScroll: O
    } = B({
      activeIndex: u,
      stickerPickerCategories: f,
      categoryListRef: o,
      firstStandardStickerCategoryOffsetTop: h,
      setShouldRenderShortcut: c
    }), S = i.useCallback(e => {
      var t;
      e(p), null === (t = o.current) || void 0 === t || t.scrollTo(h)
    }, [p, h]);
    return (0, r.jsx)(_.Z, {
      className: T.categoryList,
      categoryListRef: o,
      expressionsListRef: t,
      store: d.ZN,
      listPadding: k,
      onScroll: O,
      renderCategoryListItem: b,
      rowCount: f.length,
      categories: f,
      categoryHeight: y,
      children: e => E && s && (0, r.jsx)(l.P3F, {
        className: a()(T.standardStickerShortcut, {
          [T.invisibleShortcut]: !s
        }),
        onClick: () => S(e),
        children: (0, r.jsx)(l.SlE, {
          size: "md",
          color: "currentColor"
        })
      })
    })
  }
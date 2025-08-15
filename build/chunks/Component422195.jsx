/** Chunk was on web.js **/
/** chunk id: 422195, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => V
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk2052 = require("./2052.js"),
  Chunk880949 = require("./880949.jsx"),
  Chunk806966 = require("./806966.js"),
  Chunk28546 = require("./28546.js"),
  Chunk254494 = require("./254494.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk624138 = require("./624138.js"),
  Chunk453070 = require("./453070.js"),
  Chunk926491 = require("./926491.js"),
  Chunk373228 = require("./373228.js"),
  Chunk378233 = require("./378233.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk957825 = require("./957825.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk163289 = require("./163289.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
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
let P = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
  w = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
  D = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
  L = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
  x = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  M = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  k = [P, P, P, P],
  j = (w + D) * 2 + P,
  U = x + 2 * M,
  G = 7,
  B = e => {
    let {
      activeIndex: t,
      stickerPickerCategories: n,
      categoryListRef: a,
      firstStandardStickerCategoryOffsetTop: s,
      setShouldRenderShortcut: d
    } = e, _ = (0, c.O)(), m = (0, f.Iu)(e => "" !== e.searchQuery), g = i.useCallback((e, a, s) => {
      var c, d;
      let f, g = (null == (c = n[0]) ? true : c.type) === b.Ih.FAVORITE,
        A = +!!g,
        C = (null == (d = n[A]) ? true : d.type) === b.Ih.RECENT,
        P = n.length > 0,
        D = n.length;
      if (0 === a && g) return (0, r.jsx)("div", {
        role: "listitem",
        "aria-setsize": D,
        "aria-posinset": a,
        children: (0, r.jsx)(l.P3F, {
          "aria-label": T.intl.string(T.t.y3LQCA),
          className: o()(S.stickerCategory, S.stickerCategoryGeneric, {
            [S.stickerCategoryGenericDisabled]: P && !g,
            [S.stickerCategoryGenericSelected]: !m && g && 0 === t,
            [S.stickerCategoryGenericLast]: !C
          }),
          onClick: s,
          children: (0, r.jsx)(l.r7p, {
            size: "custom",
            color: "currentColor",
            className: S.stickerCategoryGenericIcon,
            height: L,
            width: L
          })
        })
      }, "favorites");
      if (a === A && C) return (0, r.jsx)("div", {
        role: "listitem",
        "aria-setsize": D,
        "aria-posinset": a,
        children: (0, r.jsx)(l.P3F, {
          "aria-label": T.intl.string(T.t.RxAmVF),
          className: o()(S.stickerCategory, S.stickerCategoryGeneric, S.stickerCategoryGenericLast, {
            [S.stickerCategoryGenericDisabled]: P && !C,
            [S.stickerCategoryGenericSelected]: !m && C && t === A
          }),
          onClick: s,
          children: (0, r.jsx)(l.T39, {
            size: "custom",
            color: "currentColor",
            className: S.stickerCategoryGenericIcon,
            height: L,
            width: L
          })
        })
      }, "recent");
      let x = t === a,
        M = n[a],
        k = n[a + 1],
        j = null != k && M.type === b.Ih.GUILD && k.type !== b.Ih.GUILD,
        U = M.type === b.Ih.PACK,
        G = "",
        B = null;
      if (M.type === b.Ih.GUILD || M.type === b.Ih.EMPTY_GUILD_UPSELL) {
        let e = p.Z.getGuild(M.id);
        null != e && (f = e.id, G = e.name, B = (0, r.jsx)(u.Z, {
          guild: e,
          isSelected: x
        }))
      } else if (U) {
        let e = E.Z.getStickerPack(M.id);
        null != e && (G = e.name, B = (0, r.jsx)(O.Z, {
          disableAnimation: !x || m,
          size: w,
          sticker: (0, y.Zt)(e)
        }))
      }
      return (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(l.ua7, {
          position: "right",
          text: G,
          tooltipContentClassName: S.__invalid_tooltip,
          children: e => (0, r.jsx)("div", {
            role: "listitem",
            "aria-setsize": D,
            "aria-posinset": a,
            children: (0, r.jsx)(l.P3F, R(N({}, e), {
              "aria-label": G,
              className: o()(S.stickerCategory, {
                [S.firstPartyCategory]: U,
                [S.firstPartyCategorySelected]: !m && x && U
              }),
              onClick: () => {
                M.type === b.Ih.PACK && h.default.track(v.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                  location: null == _ ? true : _.location,
                  tab: I.X1.STICKER,
                  sticker_pack_id: M.id,
                  guild_id: f
                }), s()
              },
              children: B
            }))
          })
        }), j ? (0, r.jsx)("hr", {
          className: S.guildCategorySeparator
        }, "separator") : null]
      }, M.id)
    }, [t, _, m, n]), A = i.useCallback((e, t) => t ? j : 0, []);
    return {
      getScrollOffsetForIndex: A,
      renderCategoryListItem: g,
      rowHeight: i.useCallback((e, t) => {
        let r = n[t],
          i = n[t + 1];
        return w + (null != i && r.type === b.Ih.GUILD && i.type !== b.Ih.GUILD ? U : D)
      }, [n]),
      onScroll: i.useCallback(e => {
        var t;
        let n = null == (t = a.current) ? true : t.getListDimensions();
        null != n && d(e + n.height - x < s)
      }, [s, a, d])
    }
  },
  V = e => {
    let {
      stickersListRef: t,
      channel: n
    } = e, a = i.useRef(null), [s, c] = i.useState(true), u = d.ZN.useStore(e => e.activeCategoryIndex), f = (0, g.Sd)(n), {
      firstStandardStickerCategoryIndex: p,
      firstStandardStickerCategoryOffsetTop: h,
      guildCategoryCount: m,
      hasFirstPartyStickerPacks: E
    } = i.useMemo(() => {
      var e, t;
      let n = f.filter(e => e.type === b.Ih.GUILD).length,
        r = n + +((null == (e = f[0]) ? true : e.type) === b.Ih.RECENT) + +((null == (t = f[0]) ? true : t.type) === b.Ih.FAVORITE),
        i = r * (w + D) - D + U;
      return {
        firstStandardStickerCategoryIndex: r + 1,
        firstStandardStickerCategoryOffsetTop: i,
        guildCategoryCount: n,
        hasFirstPartyStickerPacks: null != f.find(e => e.type === b.Ih.PACK)
      }
    }, [f]);
    i.useLayoutEffect(() => {
      c(m >= G)
    }, [m]);
    let {
      renderCategoryListItem: y,
      rowHeight: O,
      onScroll: v
    } = B({
      activeIndex: u,
      stickerPickerCategories: f,
      categoryListRef: a,
      firstStandardStickerCategoryOffsetTop: h,
      setShouldRenderShortcut: c
    }), I = i.useCallback(e => {
      var t;
      e(p), null == (t = a.current) || t.scrollTo(h)
    }, [p, h]);
    return (0, r.jsx)(_.Z, {
      className: S.categoryList,
      categoryListRef: a,
      expressionsListRef: t,
      store: d.ZN,
      listPadding: k,
      onScroll: v,
      renderCategoryListItem: y,
      rowCount: f.length,
      categories: f,
      categoryHeight: O,
      children: e => E && s && (0, r.jsx)(l.P3F, {
        className: o()(S.standardStickerShortcut, {
          [S.invisibleShortcut]: !s
        }),
        onClick: () => I(e),
        children: (0, r.jsx)(l.SlE, {
          size: "md",
          color: "currentColor"
        })
      })
    })
  }
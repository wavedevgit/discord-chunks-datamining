/** Chunk was on web.js **/
/** chunk id: 422195, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk616906 = require("./616906.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
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

function N(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
  w = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
  D = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
  x = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
  L = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  j = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  M = [P, P, P, P],
  k = (w + D) * 2 + P,
  U = L + 2 * j,
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
        N = (null == (d = n[A]) ? true : d.type) === b.Ih.RECENT,
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
            [S.stickerCategoryGenericLast]: !N
          }),
          onClick: s,
          children: (0, r.jsx)(l.r7p, {
            size: "custom",
            color: "currentColor",
            className: S.stickerCategoryGenericIcon,
            height: x,
            width: x
          })
        })
      }, "favorites");
      if (a === A && N) return (0, r.jsx)("div", {
        role: "listitem",
        "aria-setsize": D,
        "aria-posinset": a,
        children: (0, r.jsx)(l.P3F, {
          "aria-label": T.intl.string(T.t.RxAmVF),
          className: o()(S.stickerCategory, S.stickerCategoryGeneric, S.stickerCategoryGenericLast, {
            [S.stickerCategoryGenericDisabled]: P && !N,
            [S.stickerCategoryGenericSelected]: !m && N && t === A
          }),
          onClick: s,
          children: (0, r.jsx)(l.T39, {
            size: "custom",
            color: "currentColor",
            className: S.stickerCategoryGenericIcon,
            height: x,
            width: x
          })
        })
      }, "recent");
      let L = t === a,
        j = n[a],
        M = n[a + 1],
        k = null != M && j.type === b.Ih.GUILD && M.type !== b.Ih.GUILD,
        U = j.type === b.Ih.PACK,
        G = "",
        B = null;
      if (j.type === b.Ih.GUILD || j.type === b.Ih.EMPTY_GUILD_UPSELL) {
        let e = p.Z.getGuild(j.id);
        null != e && (f = e.id, G = e.name, B = (0, r.jsx)(u.Z, {
          guild: e,
          isSelected: L
        }))
      } else if (U) {
        let e = E.Z.getStickerPack(j.id);
        null != e && (G = e.name, B = (0, r.jsx)(O.Z, {
          disableAnimation: !L || m,
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
            children: (0, r.jsx)(l.P3F, R(C({}, e), {
              "aria-label": G,
              className: o()(S.stickerCategory, {
                [S.firstPartyCategory]: U,
                [S.firstPartyCategorySelected]: !m && L && U
              }),
              onClick: () => {
                j.type === b.Ih.PACK && h.default.track(v.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                  location: null == _ ? true : _.location,
                  tab: I.X1.STICKER,
                  sticker_pack_id: j.id,
                  guild_id: f
                }), s()
              },
              children: B
            }))
          })
        }), k ? (0, r.jsx)("hr", {
          className: S.guildCategorySeparator
        }, "separator") : null]
      }, j.id)
    }, [t, _, m, n]), A = i.useCallback((e, t) => t ? k : 0, []);
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
        null != n && d(e + n.height - L < s)
      }, [s, a, d])
    }
  },
  Z = e => {
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
      listPadding: M,
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
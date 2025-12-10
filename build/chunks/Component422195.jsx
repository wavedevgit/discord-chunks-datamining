/** Chunk was on web.js **/
/** chunk id: 422195, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
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
let A = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
  N = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
  P = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
  R = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
  w = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  D = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  x = [A, A, A, A],
  L = (N + P) * 2 + A,
  j = w + 2 * D,
  M = 7,
  k = e => {
    let {
      activeIndex: t,
      stickerPickerCategories: n,
      categoryListRef: a,
      firstStandardStickerCategoryOffsetTop: l,
      setShouldRenderShortcut: f
    } = e, _ = (0, u.O)(), g = (0, p.Iu)(e => "" !== e.searchQuery), E = i.useCallback((e, a, l) => {
      var u, f;
      let p, E = (null == (u = n[0]) ? true : u.type) === y.Ih.FAVORITE,
        A = +!!E,
        P = (null == (f = n[A]) ? true : f.type) === y.Ih.RECENT,
        w = n.length > 0,
        D = n.length;
      if (0 === a && E) return (0, r.jsx)("div", {
        role: "listitem",
        "aria-setsize": D,
        "aria-posinset": a,
        children: (0, r.jsx)(c.P3F, {
          "aria-label": T.intl.string(T.t.y3LQCG),
          className: o()(C.stickerCategory, C.stickerCategoryGeneric, {
            [C.stickerCategoryGenericDisabled]: w && !E,
            [C.stickerCategoryGenericSelected]: !g && E && 0 === t,
            [C.stickerCategoryGenericLast]: !P
          }),
          onClick: l,
          children: (0, r.jsx)(c.r7p, {
            size: "custom",
            color: "currentColor",
            className: C.stickerCategoryGenericIcon,
            height: R,
            width: R
          })
        })
      }, "favorites");
      if (a === A && P) return (0, r.jsx)("div", {
        role: "listitem",
        "aria-setsize": D,
        "aria-posinset": a,
        children: (0, r.jsx)(c.P3F, {
          "aria-label": T.intl.string(T.t.RxAmVC),
          className: o()(C.stickerCategory, C.stickerCategoryGeneric, C.stickerCategoryGenericLast, {
            [C.stickerCategoryGenericDisabled]: w && !P,
            [C.stickerCategoryGenericSelected]: !g && P && t === A
          }),
          onClick: l,
          children: (0, r.jsx)(c.T39, {
            size: "custom",
            color: "currentColor",
            className: C.stickerCategoryGenericIcon,
            height: R,
            width: R
          })
        })
      }, "recent");
      let x = t === a,
        L = n[a],
        j = n[a + 1],
        M = null != j && L.type === y.Ih.GUILD && j.type !== y.Ih.GUILD,
        k = L.type === y.Ih.PACK,
        U = "",
        G = null;
      if (L.type === y.Ih.GUILD || L.type === y.Ih.EMPTY_GUILD_UPSELL) {
        let e = m.Z.getGuild(L.id);
        null != e && (p = e.id, U = e.name, G = (0, r.jsx)(d.Z, {
          guild: e,
          isSelected: x
        }))
      } else if (k) {
        let e = b.Z.getStickerPack(L.id);
        null != e && (U = e.name, G = (0, r.jsx)(v.Z, {
          disableAnimation: !x || g,
          size: N,
          sticker: (0, O.Zt)(e)
        }))
      }
      return (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(s.u, {
          position: "right",
          text: U,
          children: (0, r.jsx)("div", {
            role: "listitem",
            "aria-setsize": D,
            "aria-posinset": a,
            children: (0, r.jsx)(c.P3F, {
              "aria-label": U,
              className: o()(C.stickerCategory, {
                [C.firstPartyCategory]: k,
                [C.firstPartyCategorySelected]: !g && x && k
              }),
              onClick: () => {
                L.type === y.Ih.PACK && h.default.track(S.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                  location: null == _ ? true : _.location,
                  tab: I.X1.STICKER,
                  sticker_pack_id: L.id,
                  guild_id: p
                }), l()
              },
              children: G
            })
          })
        }), M ? (0, r.jsx)("hr", {
          className: C.guildCategorySeparator
        }, "separator") : null]
      }, L.id)
    }, [t, _, g, n]), A = i.useCallback((e, t) => t ? L : 0, []);
    return {
      getScrollOffsetForIndex: A,
      renderCategoryListItem: E,
      rowHeight: i.useCallback((e, t) => {
        let r = n[t],
          i = n[t + 1];
        return N + (null != i && r.type === y.Ih.GUILD && i.type !== y.Ih.GUILD ? j : P)
      }, [n]),
      onScroll: i.useCallback(e => {
        var t;
        let n = null == (t = a.current) ? true : t.getListDimensions();
        null != n && f(e + n.height - w < l)
      }, [l, a, f])
    }
  },
  U = e => {
    let {
      stickersListRef: t,
      channel: n
    } = e, a = i.useRef(null), [s, l] = i.useState(true), u = f.ZN.useStore(e => e.activeCategoryIndex), d = (0, E.Sd)(n), {
      firstStandardStickerCategoryIndex: p,
      firstStandardStickerCategoryOffsetTop: m,
      guildCategoryCount: h,
      hasFirstPartyStickerPacks: g
    } = i.useMemo(() => {
      var e, t;
      let n = d.filter(e => e.type === y.Ih.GUILD).length,
        r = n + +((null == (e = d[0]) ? true : e.type) === y.Ih.RECENT) + +((null == (t = d[0]) ? true : t.type) === y.Ih.FAVORITE),
        i = r * (N + P) - P + j;
      return {
        firstStandardStickerCategoryIndex: r + 1,
        firstStandardStickerCategoryOffsetTop: i,
        guildCategoryCount: n,
        hasFirstPartyStickerPacks: null != d.find(e => e.type === y.Ih.PACK)
      }
    }, [d]);
    i.useLayoutEffect(() => {
      l(h >= M)
    }, [h]);
    let {
      renderCategoryListItem: b,
      rowHeight: O,
      onScroll: v
    } = k({
      activeIndex: u,
      stickerPickerCategories: d,
      categoryListRef: a,
      firstStandardStickerCategoryOffsetTop: m,
      setShouldRenderShortcut: l
    }), S = i.useCallback(e => {
      var t;
      e(p), null == (t = a.current) || t.scrollTo(m)
    }, [p, m]);
    return (0, r.jsx)(_.Z, {
      className: C.categoryList,
      categoryListRef: a,
      expressionsListRef: t,
      store: f.ZN,
      listPadding: x,
      onScroll: v,
      renderCategoryListItem: b,
      rowCount: d.length,
      categories: d,
      categoryHeight: O,
      children: e => g && s && (0, r.jsx)(c.P3F, {
        className: o()(C.standardStickerShortcut, {
          [C.invisibleShortcut]: !s
        }),
        onClick: () => S(e),
        children: (0, r.jsx)(c.SlE, {
          size: "md",
          color: "currentColor"
        })
      })
    })
  }
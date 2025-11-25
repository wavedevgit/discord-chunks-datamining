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
let C = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
  N = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
  R = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
  P = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
  D = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  w = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  L = [C, C, C, C],
  x = (N + R) * 2 + C,
  M = D + 2 * w,
  k = 7,
  j = e => {
    let {
      activeIndex: t,
      stickerPickerCategories: n,
      categoryListRef: a,
      firstStandardStickerCategoryOffsetTop: l,
      setShouldRenderShortcut: f
    } = e, p = (0, u.O)(), g = (0, _.Iu)(e => "" !== e.searchQuery), E = i.useCallback((e, a, l) => {
      var u, f;
      let _, E = (null == (u = n[0]) ? true : u.type) === y.Ih.FAVORITE,
        C = +!!E,
        R = (null == (f = n[C]) ? true : f.type) === y.Ih.RECENT,
        D = n.length > 0,
        w = n.length;
      if (0 === a && E) return (0, r.jsx)("div", {
        role: "listitem",
        "aria-setsize": w,
        "aria-posinset": a,
        children: (0, r.jsx)(c.P3F, {
          "aria-label": S.intl.string(S.t.y3LQCG),
          className: o()(A.stickerCategory, A.stickerCategoryGeneric, {
            [A.stickerCategoryGenericDisabled]: D && !E,
            [A.stickerCategoryGenericSelected]: !g && E && 0 === t,
            [A.stickerCategoryGenericLast]: !R
          }),
          onClick: l,
          children: (0, r.jsx)(c.r7p, {
            size: "custom",
            color: "currentColor",
            className: A.stickerCategoryGenericIcon,
            height: P,
            width: P
          })
        })
      }, "favorites");
      if (a === C && R) return (0, r.jsx)("div", {
        role: "listitem",
        "aria-setsize": w,
        "aria-posinset": a,
        children: (0, r.jsx)(c.P3F, {
          "aria-label": S.intl.string(S.t.RxAmVC),
          className: o()(A.stickerCategory, A.stickerCategoryGeneric, A.stickerCategoryGenericLast, {
            [A.stickerCategoryGenericDisabled]: D && !R,
            [A.stickerCategoryGenericSelected]: !g && R && t === C
          }),
          onClick: l,
          children: (0, r.jsx)(c.T39, {
            size: "custom",
            color: "currentColor",
            className: A.stickerCategoryGenericIcon,
            height: P,
            width: P
          })
        })
      }, "recent");
      let L = t === a,
        x = n[a],
        M = n[a + 1],
        k = null != M && x.type === y.Ih.GUILD && M.type !== y.Ih.GUILD,
        j = x.type === y.Ih.PACK,
        U = "",
        G = null;
      if (x.type === y.Ih.GUILD || x.type === y.Ih.EMPTY_GUILD_UPSELL) {
        let e = h.Z.getGuild(x.id);
        null != e && (_ = e.id, U = e.name, G = (0, r.jsx)(d.Z, {
          guild: e,
          isSelected: L
        }))
      } else if (j) {
        let e = b.Z.getStickerPack(x.id);
        null != e && (U = e.name, G = (0, r.jsx)(v.Z, {
          disableAnimation: !L || g,
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
            "aria-setsize": w,
            "aria-posinset": a,
            children: (0, r.jsx)(c.P3F, {
              "aria-label": U,
              className: o()(A.stickerCategory, {
                [A.firstPartyCategory]: j,
                [A.firstPartyCategorySelected]: !g && L && j
              }),
              onClick: () => {
                x.type === y.Ih.PACK && m.default.track(I.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                  location: null == p ? true : p.location,
                  tab: T.X1.STICKER,
                  sticker_pack_id: x.id,
                  guild_id: _
                }), l()
              },
              children: G
            })
          })
        }), k ? (0, r.jsx)("hr", {
          className: A.guildCategorySeparator
        }, "separator") : null]
      }, x.id)
    }, [t, p, g, n]), C = i.useCallback((e, t) => t ? x : 0, []);
    return {
      getScrollOffsetForIndex: C,
      renderCategoryListItem: E,
      rowHeight: i.useCallback((e, t) => {
        let r = n[t],
          i = n[t + 1];
        return N + (null != i && r.type === y.Ih.GUILD && i.type !== y.Ih.GUILD ? M : R)
      }, [n]),
      onScroll: i.useCallback(e => {
        var t;
        let n = null == (t = a.current) ? true : t.getListDimensions();
        null != n && f(e + n.height - D < l)
      }, [l, a, f])
    }
  },
  U = e => {
    let {
      stickersListRef: t,
      channel: n
    } = e, a = i.useRef(null), [s, l] = i.useState(true), u = f.ZN.useStore(e => e.activeCategoryIndex), d = (0, E.Sd)(n), {
      firstStandardStickerCategoryIndex: _,
      firstStandardStickerCategoryOffsetTop: h,
      guildCategoryCount: m,
      hasFirstPartyStickerPacks: g
    } = i.useMemo(() => {
      var e, t;
      let n = d.filter(e => e.type === y.Ih.GUILD).length,
        r = n + +((null == (e = d[0]) ? true : e.type) === y.Ih.RECENT) + +((null == (t = d[0]) ? true : t.type) === y.Ih.FAVORITE),
        i = r * (N + R) - R + M;
      return {
        firstStandardStickerCategoryIndex: r + 1,
        firstStandardStickerCategoryOffsetTop: i,
        guildCategoryCount: n,
        hasFirstPartyStickerPacks: null != d.find(e => e.type === y.Ih.PACK)
      }
    }, [d]);
    i.useLayoutEffect(() => {
      l(m >= k)
    }, [m]);
    let {
      renderCategoryListItem: b,
      rowHeight: O,
      onScroll: v
    } = j({
      activeIndex: u,
      stickerPickerCategories: d,
      categoryListRef: a,
      firstStandardStickerCategoryOffsetTop: h,
      setShouldRenderShortcut: l
    }), I = i.useCallback(e => {
      var t;
      e(_), null == (t = a.current) || t.scrollTo(h)
    }, [_, h]);
    return (0, r.jsx)(p.Z, {
      className: A.categoryList,
      categoryListRef: a,
      expressionsListRef: t,
      store: f.ZN,
      listPadding: L,
      onScroll: v,
      renderCategoryListItem: b,
      rowCount: d.length,
      categories: d,
      categoryHeight: O,
      children: e => g && s && (0, r.jsx)(c.P3F, {
        className: o()(A.standardStickerShortcut, {
          [A.invisibleShortcut]: !s
        }),
        onClick: () => I(e),
        children: (0, r.jsx)(c.SlE, {
          size: "md",
          color: "currentColor"
        })
      })
    })
  }
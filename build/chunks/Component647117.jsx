/** Chunk was on web.js **/
/** chunk id: 647117, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => U
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk212245 = require("./212245.js"),
  Chunk724511 = require("./724511.jsx"),
  Chunk850992 = require("./850992.js"),
  Chunk151271 = require("./151271.js"),
  Chunk802019 = require("./802019.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk240248 = require("./240248.js"),
  Chunk256449 = require("./256449.js"),
  Chunk679382 = require("./679382.js"),
  Chunk842086 = require("./842086.js"),
  Chunk378058 = require("./378058.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk698279 = require("./698279.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk89945 = require("./89945.js");
let C = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
  N = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
  R = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
  w = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
  P = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  D = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  x = [C, C, C, C],
  L = (N + R) * 2 + C,
  j = P + 2 * D,
  M = 7,
  k = e => {
    let {
      activeIndex: t,
      stickerPickerCategories: n,
      categoryListRef: a,
      firstStandardStickerCategoryOffsetTop: l,
      setShouldRenderShortcut: f
    } = e, _ = (0, u.p)(), g = (0, p.RQ)(e => "" !== e.searchQuery), E = i.useCallback((e, a, l) => {
      var u, f;
      let p, E = (null == (u = n[0]) ? true : u.type) === b.Z2.FAVORITE,
        C = +!!E,
        R = (null == (f = n[C]) ? true : f.type) === b.Z2.RECENT,
        P = n.length > 0,
        D = n.length;
      if (0 === a && E) return (0, r.jsx)("div", {
        role: "listitem",
        "aria-setsize": D,
        "aria-posinset": a,
        children: (0, r.jsx)(c.DUT, {
          "aria-label": S.intl.string(S.t.y3LQCG),
          className: s()(T._0, T.dC, {
            [T.d8]: P && !E,
            [T.k1]: !g && E && 0 === t,
            [T.ls]: !R
          }),
          onClick: l,
          children: (0, r.jsx)(c.Gg5, {
            size: "custom",
            color: "currentColor",
            className: T.AB,
            height: w,
            width: w
          })
        })
      }, "favorites");
      if (a === C && R) return (0, r.jsx)("div", {
        role: "listitem",
        "aria-setsize": D,
        "aria-posinset": a,
        children: (0, r.jsx)(c.DUT, {
          "aria-label": S.intl.string(S.t.RxAmVC),
          className: s()(T._0, T.dC, T.ls, {
            [T.d8]: P && !R,
            [T.k1]: !g && R && t === C
          }),
          onClick: l,
          children: (0, r.jsx)(c.O4, {
            size: "custom",
            color: "currentColor",
            className: T.AB,
            height: w,
            width: w
          })
        })
      }, "recent");
      let x = t === a,
        L = n[a],
        j = n[a + 1],
        M = null != j && L.type === b.Z2.GUILD && j.type !== b.Z2.GUILD,
        k = L.type === b.Z2.PACK,
        U = "",
        G = null;
      if (L.type === b.Z2.GUILD || L.type === b.Z2.EMPTY_GUILD_UPSELL) {
        let e = h.A.getGuild(L.id);
        null != e && (p = e.id, U = e.name, G = (0, r.jsx)(d.A, {
          guild: e,
          isSelected: x
        }))
      } else if (k) {
        let e = y.A.getStickerPack(L.id);
        null != e && (U = e.name, G = (0, r.jsx)(v.A, {
          disableAnimation: !x || g,
          size: N,
          sticker: (0, O.Id)(e)
        }))
      }
      return (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(o.m, {
          position: "right",
          text: U,
          children: (0, r.jsx)("div", {
            role: "listitem",
            "aria-setsize": D,
            "aria-posinset": a,
            children: (0, r.jsx)(c.DUT, {
              "aria-label": U,
              className: s()(T._0, {
                [T.ND]: k,
                [T.Ms]: !g && x && k
              }),
              onClick: () => {
                L.type === b.Z2.PACK && m.default.track(A.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                  location: null == _ ? true : _.location,
                  tab: I.kx.STICKER,
                  sticker_pack_id: L.id,
                  guild_id: p
                }), l()
              },
              children: G
            })
          })
        }), M ? (0, r.jsx)("hr", {
          className: T.ny
        }, "separator") : null]
      }, L.id)
    }, [t, _, g, n]), C = i.useCallback((e, t) => t ? L : 0, []);
    return {
      getScrollOffsetForIndex: C,
      renderCategoryListItem: E,
      rowHeight: i.useCallback((e, t) => {
        let r = n[t],
          i = n[t + 1];
        return N + (null != i && r.type === b.Z2.GUILD && i.type !== b.Z2.GUILD ? j : R)
      }, [n]),
      onScroll: i.useCallback(e => {
        var t;
        let n = null == (t = a.current) ? true : t.getListDimensions();
        null == n || f(e + n.height - P < l)
      }, [l, a, f])
    }
  },
  U = e => {
    let {
      stickersListRef: t,
      channel: n
    } = e, a = i.useRef(null), [o, l] = i.useState(true), u = f.bM.useStore(e => e.activeCategoryIndex), d = (0, E.pD)(n), {
      firstStandardStickerCategoryIndex: p,
      firstStandardStickerCategoryOffsetTop: h,
      guildCategoryCount: m,
      hasFirstPartyStickerPacks: g
    } = i.useMemo(() => {
      var e, t;
      let n = d.filter(e => e.type === b.Z2.GUILD).length,
        r = n + +((null == (e = d[0]) ? true : e.type) === b.Z2.RECENT) + +((null == (t = d[0]) ? true : t.type) === b.Z2.FAVORITE),
        i = r * (N + R) - R + j;
      return {
        firstStandardStickerCategoryIndex: r + 1,
        firstStandardStickerCategoryOffsetTop: i,
        guildCategoryCount: n,
        hasFirstPartyStickerPacks: null != d.find(e => e.type === b.Z2.PACK)
      }
    }, [d]);
    i.useLayoutEffect(() => {
      l(m >= M)
    }, [m]);
    let {
      renderCategoryListItem: y,
      rowHeight: O,
      onScroll: v
    } = k({
      activeIndex: u,
      stickerPickerCategories: d,
      categoryListRef: a,
      firstStandardStickerCategoryOffsetTop: h,
      setShouldRenderShortcut: l
    }), A = i.useCallback(e => {
      var t;
      e(p), null == (t = a.current) || t.scrollTo(h)
    }, [p, h]);
    return (0, r.jsx)(_.A, {
      className: T.jv,
      categoryListRef: a,
      expressionsListRef: t,
      store: f.bM,
      listPadding: x,
      onScroll: v,
      renderCategoryListItem: y,
      rowCount: d.length,
      categories: d,
      categoryHeight: O,
      children: e => g && o && (0, r.jsx)(c.DUT, {
        className: s()(T.Fe, {
          [T.Q6]: !o
        }),
        onClick: () => A(e),
        children: (0, r.jsx)(c.tEP, {
          size: "md",
          color: "currentColor"
        })
      })
    })
  }
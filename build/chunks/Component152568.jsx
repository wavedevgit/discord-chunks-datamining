/** Chunk was on 59275 **/
/** chunk id: 152568, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk554146 = require("./554146.js"),
  Chunk230109 = require("./230109.js"),
  Chunk397927 = require("./397927.js"),
  Chunk367727 = require("./367727.js"),
  Chunk976860 = require("./976860.js"),
  Chunk44724 = require("./44724.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk590180 = require("./590180.js"),
  Chunk597783 = require("./597783.js"),
  Chunk212407 = require("./212407.js"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk201073 = require("./201073.js");
let O = e => {
  var t, n, s;
  let {
    wideBannerBlock: O,
    tab: y
  } = e, j = h.A.getCategoryByStoreListingId(O.categoryStoreListingId), L = l.useRef(null), T = l.useRef(null), [I, k] = l.useState(), [N, R] = l.useState(false);
  l.useEffect(() => {
    let e = T.current;
    if (null == e) return;
    let t = () => {
      e.naturalWidth > 0 && e.naturalHeight > 0 && k(1080 * (e.naturalHeight / e.naturalWidth))
    };
    return e.complete ? t() : e.onload = t, () => {
      e.onload = null
    }
  }, []);
  let P = null != (t = null == j ? true : j.skuId) ? t : "",
    {
      handleCardVisibilityChange: B
    } = (0, b.Z)(P, "home", "marketing wide banner"),
    w = (0, p.uM)(),
    {
      bannerURL: D
    } = (0, _.w$)(O),
    M = y === E.G2.ORBS,
    H = null != O.ctaRoute && "" !== O.ctaRoute,
    G = true !== O.disableCta && (null != O.ctaText && "" !== O.ctaText || H),
    U = null != O.logoURL && "" !== O.logoURL,
    F = l.useCallback(() => {
      if (R(true), O.isDismissible) {
        var e;
        let t = null != (e = O.dismissibleContentVersion) ? e : 0;
        (0, u.$l)(i.M.COLLECTIBLES_SHOP_WIDE_BANNER, t, {
          dismissAction: C.i.USER_DISMISS
        })
      }
    }, [O.isDismissible, O.dismissibleContentVersion]),
    V = l.useCallback(e => {
      f.default.track(v.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == w ? true : w.sessionId,
        sku_id: P,
        page_type: y,
        page_section: null == w ? true : w.pageSection,
        page_category: null == w ? true : w.pageCategory,
        tile_type: "WIDE_BANNER",
        tile_position: String(null == w ? true : w.tilePosition),
        cta_name: e
      })
    }, [w, P, y]),
    z = l.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null;
      if (V(e), null != O.ctaRoute && "" !== O.ctaRoute) {
        let e = O.ctaRoute;
        if (e.includes("game-shop")) {
          let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
          if (null != t) {
            let e = t[1],
              n = parseInt(t[2], 10);
            (0, g.default)({
              guildId: e,
              pageIndex: n
            })
          }
        } else(0, d.pX)(e)
      }
    }, [O.ctaRoute, V]);
  if (null == D || N) return null;
  let K = a()(x.nM, x.Tq, x.TS, x.YB, {
      [x._1]: M,
      [x.vb]: H
    }),
    W = (0, r.jsxs)(r.Fragment, {
      children: [O.isDismissible && (0, r.jsx)("div", {
        className: x.Mh,
        children: (0, r.jsx)(c.JnF, {
          size: "sm",
          onClick: e => {
            e.stopPropagation(), F()
          },
          "aria-label": S.intl.string(S.t.WAI6xu)
        })
      }), (0, r.jsx)("div", {
        className: a()(x.zK, {
          [x._1]: M
        }),
        style: null != I ? {
          height: "".concat(I, "px")
        } : true,
        children: (0, r.jsx)("img", {
          ref: T,
          src: D,
          alt: O.title,
          className: a()(x.LN, {
            [x.d5]: M
          })
        })
      }), (0, r.jsx)("div", {
        className: a()(x.Ep, {
          [x.Qq]: G
        }),
        style: {
          maxHeight: null != I ? "".concat(I, "px") : "auto"
        },
        children: (0, r.jsxs)("div", {
          className: x.E8,
          children: [(0, r.jsx)(c.Heading, {
            style: {
              color: null != (n = O.bannerTextColor) ? n : "var(--text-strong)"
            },
            className: M ? x.O2 : true,
            variant: "heading-xl/bold",
            children: O.title
          }), (0, r.jsx)(c.Text, {
            style: {
              color: "var(--text-muted)"
            },
            lineClamp: 2,
            variant: M ? "text-md/medium" : "text-sm/medium",
            children: M ? S.intl.format(S.t.SFFP7K, {
              helpdeskArticle: m.A.getArticleURL(v.MVz.VIRTUAL_CURRENCY_LEARN_MORE)
            }) : O.body
          }), G && (0, r.jsxs)("div", {
            className: x.nP,
            children: [(0, r.jsx)(c.Button, {
              variant: "overlay-primary",
              onClick: e => {
                var t;
                e.stopPropagation(), z(null != (t = O.ctaText) ? t : S.intl.string(S.t.jVcuVY))
              },
              text: null != (s = O.ctaText) ? s : S.intl.string(S.t.jVcuVY)
            }), U && (0, r.jsx)("img", {
              src: O.logoURL,
              alt: "",
              className: x.bU
            })]
          })]
        })
      })]
    });
  return (0, r.jsx)(c.NPJ, {
    theme: M ? true : A.NJ.DARK,
    children: e => (0, r.jsx)(o.L, {
      innerRef: L,
      onChange: B,
      threshold: 0,
      children: H ? (0, r.jsx)(c.DUT, {
        innerRef: L,
        onClick: () => z(null),
        className: a()(e, K),
        children: W
      }) : (0, r.jsx)("div", {
        ref: L,
        className: a()(e, K),
        children: W
      })
    })
  })
}
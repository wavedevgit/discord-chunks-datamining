/** Chunk was on 59275 **/
/** chunk id: 152568, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => _
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
let _ = e => {
  var t, l, s;
  let {
    wideBannerBlock: _,
    tab: y
  } = e, j = m.A.getCategoryByStoreListingId(_.categoryStoreListingId), L = r.useRef(null), T = r.useRef(null), [I, N] = r.useState(), [k, R] = r.useState(false);
  r.useEffect(() => {
    let e = T.current;
    if (null == e) return;
    let t = () => {
      e.naturalWidth > 0 && e.naturalHeight > 0 && N(1080 * (e.naturalHeight / e.naturalWidth))
    };
    return e.complete ? t() : e.onload = t, () => {
      e.onload = null
    }
  }, []);
  let P = null != (t = null == j ? true : j.skuId) ? t : "",
    {
      handleCardVisibilityChange: D
    } = (0, h.Z)(P, "home", "marketing wide banner"),
    w = (0, p.uM)(),
    {
      bannerURL: B
    } = (0, E.w$)(_),
    M = y === v.G2.ORBS,
    H = null != _.ctaRoute && "" !== _.ctaRoute,
    G = true !== _.disableCta && (null != _.ctaText && "" !== _.ctaText || H),
    F = null != _.logoURL && "" !== _.logoURL,
    U = r.useCallback(() => {
      if (R(true), _.isDismissible) {
        var e;
        let t = null != (e = _.dismissibleContentVersion) ? e : 0;
        (0, u.$l)(i.M.COLLECTIBLES_SHOP_WIDE_BANNER, t, {
          dismissAction: x.i.USER_DISMISS
        })
      }
    }, [_.isDismissible, _.dismissibleContentVersion]),
    z = r.useCallback(e => {
      b.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    V = r.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null;
      if (z(e), null != _.ctaRoute && "" !== _.ctaRoute) {
        let e = _.ctaRoute;
        if (e.includes("game-shop")) {
          let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
          if (null != t) {
            let e = t[1],
              l = parseInt(t[2], 10);
            (0, f.default)({
              guildId: e,
              pageIndex: l
            })
          }
        } else(0, d.pX)(e)
      }
    }, [_.ctaRoute, z]);
  if (null == B || k) return null;
  let K = a()(O.nM, O.Tq, O.TS, O.YB, {
      [O._1]: M,
      [O.vb]: H
    }),
    W = (0, n.jsxs)(n.Fragment, {
      children: [_.isDismissible && (0, n.jsx)("div", {
        className: O.Mh,
        children: (0, n.jsx)(c.JnF, {
          size: "sm",
          onClick: e => {
            e.stopPropagation(), U()
          },
          "aria-label": C.intl.string(C.t.WAI6xu)
        })
      }), (0, n.jsx)("div", {
        className: a()(O.zK, {
          [O._1]: M
        }),
        style: null != I ? {
          height: "".concat(I, "px")
        } : true,
        children: (0, n.jsx)("img", {
          ref: T,
          src: B,
          alt: _.title,
          className: a()(O.LN, {
            [O.d5]: M
          })
        })
      }), (0, n.jsx)("div", {
        className: a()(O.Ep, {
          [O.Qq]: G
        }),
        style: {
          maxHeight: null != I ? "".concat(I, "px") : "auto"
        },
        children: (0, n.jsxs)("div", {
          className: O.E8,
          children: [(0, n.jsx)(c.Heading, {
            style: {
              color: null != (l = _.bannerTextColor) ? l : "var(--text-strong)"
            },
            className: M ? O.O2 : true,
            variant: "heading-xl/bold",
            children: _.title
          }), (0, n.jsx)(c.Text, {
            style: {
              color: "var(--text-muted)"
            },
            lineClamp: 2,
            variant: M ? "text-md/medium" : "text-sm/medium",
            children: M ? C.intl.format(C.t.SFFP7K, {
              helpdeskArticle: g.A.getArticleURL(A.MVz.VIRTUAL_CURRENCY_LEARN_MORE)
            }) : _.body
          }), G && (0, n.jsxs)("div", {
            className: O.nP,
            children: [(0, n.jsx)(c.Button, {
              variant: "overlay-primary",
              onClick: e => {
                var t;
                e.stopPropagation(), V(null != (t = _.ctaText) ? t : C.intl.string(C.t.jVcuVY))
              },
              text: null != (s = _.ctaText) ? s : C.intl.string(C.t.jVcuVY)
            }), F && (0, n.jsx)("img", {
              src: _.logoURL,
              alt: "",
              className: O.bU
            })]
          })]
        })
      })]
    });
  return (0, n.jsx)(c.NPJ, {
    theme: M ? true : S.NJ.DARK,
    children: e => (0, n.jsx)(o.L, {
      innerRef: L,
      onChange: D,
      threshold: 0,
      children: H ? (0, n.jsx)(c.DUT, {
        innerRef: L,
        onClick: () => V(null),
        className: a()(e, K),
        children: W
      }) : (0, n.jsx)("div", {
        ref: L,
        className: a()(e, K),
        children: W
      })
    })
  })
}
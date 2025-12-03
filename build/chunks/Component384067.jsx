/** Chunk was on 45620 **/
/** chunk id: 384067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk605236 = require("./605236.js"),
  Chunk703656 = require("./703656.js"),
  Chunk705338 = require("./705338.js"),
  Chunk63063 = require("./63063.js"),
  Chunk597688 = require("./597688.js"),
  Chunk297651 = require("./297651.js"),
  Chunk794324 = require("./794324.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let O = e => {
  var t;
  let {
    wideBannerBlock: n,
    tab: i
  } = e, O = p.Z.getCategoryByStoreListingId(n.categoryStoreListingId), x = l.useRef(null), y = l.useRef(null), [T, j] = l.useState(), [k, I] = l.useState(false);
  l.useEffect(() => {
    let e = y.current;
    if (null == e) return;
    let t = () => {
      e.naturalWidth > 0 && e.naturalHeight > 0 && j(1080 * (e.naturalHeight / e.naturalWidth))
    };
    return e.complete ? t() : e.onload = t, () => {
      e.onload = null
    }
  }, []);
  let L = null != (t = null == O ? true : O.skuId) ? t : "",
    {
      handleCardVisibilityChange: B
    } = (0, m.E)(L, "home", "marketing wide banner"),
    {
      bannerURL: A
    } = (0, C.UI)(n),
    N = i === h.AW.ORBS,
    P = true !== n.disableCta && (null != n.ctaText && "" !== n.ctaText || null != n.ctaRoute && "" !== n.ctaRoute),
    R = null != n.logoURL && "" !== n.logoURL,
    Z = l.useCallback(() => {
      if (I(true), n.isDismissible) {
        var e;
        let t = null != (e = n.dismissibleContentVersion) ? e : 0;
        (0, u.wH)(o.z.COLLECTIBLES_SHOP_WIDE_BANNER, t, {
          dismissAction: b.L.USER_DISMISS
        })
      }
    }, [n.isDismissible, n.dismissibleContentVersion]),
    w = l.useCallback(() => {
      if (null != n.ctaRoute && "" !== n.ctaRoute) {
        let e = n.ctaRoute;
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
        } else(0, d.uL)(e)
      }
    }, [n.ctaRoute]);
  return null == A || k ? null : (0, r.jsx)(c.f6W, {
    theme: N ? true : E.BR.DARK,
    children: e => {
      var t, l;
      return (0, r.jsx)(a.$, {
        innerRef: x,
        onChange: B,
        threshold: 0,
        children: (0, r.jsxs)("div", {
          ref: x,
          className: s()(e, S.row, S.between, S.bannerBlockContainer, S.centeredSection, {
            [S.extraRounded]: N
          }),
          children: [n.isDismissible && (0, r.jsx)("div", {
            className: S.wideBannerCloseButton,
            children: (0, r.jsx)(c.PZ7, {
              size: "sm",
              onClick: Z,
              "aria-label": v.intl.string(v.t.WAI6xu)
            })
          }), (0, r.jsx)("div", {
            className: s()(S.wideBannerBackgroundImg, {
              [S.extraRounded]: N
            }),
            style: null != T ? {
              height: "".concat(T, "px")
            } : true,
            children: (0, r.jsx)("img", {
              ref: y,
              src: A,
              alt: n.title,
              className: s()(S.wideBannerArt, {
                [S.wideBannerArtOrbs]: N
              })
            })
          }), (0, r.jsx)("div", {
            className: s()(S.wideBannerContentContainer, {
              [S.wideBannerWithCTAContentContainer]: P
            }),
            style: {
              maxHeight: null != T ? "".concat(T, "px") : "auto"
            },
            children: (0, r.jsxs)("div", {
              className: S.wideBannerTextContainer,
              children: [(0, r.jsx)(c.Heading, {
                style: {
                  color: null != (t = n.bannerTextColor) ? t : "var(--header-primary)"
                },
                className: N ? S.wideBannerOrbsHeading : true,
                variant: "heading-xl/bold",
                children: n.title
              }), (0, r.jsx)(c.Text, {
                style: {
                  color: "var(--text-muted)"
                },
                lineClamp: 2,
                variant: N ? "text-md/medium" : "text-sm/medium",
                children: N ? v.intl.format(v.t.SFFP7K, {
                  helpdeskArticle: f.Z.getArticleURL(_.BhN.VIRTUAL_CURRENCY_LEARN_MORE)
                }) : n.body
              }), P && (0, r.jsxs)("div", {
                className: S.wideBannerCtaContainer,
                children: [(0, r.jsx)(c.Button, {
                  variant: "overlay-primary",
                  onClick: w,
                  text: null != (l = n.ctaText) ? l : v.intl.string(v.t.jVcuVY)
                }), R && (0, r.jsx)("img", {
                  src: n.logoURL,
                  alt: "",
                  className: S.wideBannerLogo
                })]
              })]
            })
          })]
        })
      })
    }
  })
}
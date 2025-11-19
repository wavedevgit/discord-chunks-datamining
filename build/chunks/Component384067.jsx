/** Chunk was on 45620 **/
/** chunk id: 384067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk605236 = require("./605236.js"),
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
let x = e => {
  var t;
  let {
    wideBannerBlock: n,
    handleTransition: i,
    tab: x
  } = e, E = f.Z.getCategoryByStoreListingId(n.categoryStoreListingId), O = l.useRef(null), S = l.useRef(null), [y, j] = l.useState(), [k, I] = l.useState(false);
  l.useEffect(() => {
    let e = S.current;
    if (null == e) return;
    let t = () => {
      e.naturalWidth > 0 && e.naturalHeight > 0 && j(1080 * (e.naturalHeight / e.naturalWidth))
    };
    return e.complete ? t() : e.onload = t, () => {
      e.onload = null
    }
  }, []);
  let T = null != (t = null == E ? true : E.skuId) ? t : "",
    {
      handleCardVisibilityChange: L
    } = (0, g.E)(T, "home", "marketing wide banner"),
    {
      bannerURL: B
    } = (0, p.UI)(n),
    P = x === m.AW.ORBS,
    N = true !== n.disableCta && (null != n.ctaText && "" !== n.ctaText || null != n.ctaRoute && "" !== n.ctaRoute),
    A = null != n.logoURL && "" !== n.logoURL,
    R = l.useCallback(() => {
      if (I(true), n.isDismissible) {
        var e;
        let t = null != (e = n.dismissibleContentVersion) ? e : 0;
        (0, u.wH)(s.z.COLLECTIBLES_SHOP_WIDE_BANNER, t, {
          dismissAction: C.L.USER_DISMISS
        })
      }
    }, [n.isDismissible, n.dismissibleContentVersion]),
    Z = l.useCallback(() => {
      null != n.ctaRoute && "" !== n.ctaRoute && i({
        sourceButton: "shop wide banner cta",
        categorySkuId: T,
        isInternalShopDeeplink: true,
        isOrbsExclusive: null == E ? true : E.isOrbsExclusive
      })
    }, [n.ctaRoute, i, T, null == E ? true : E.isOrbsExclusive]);
  return null == B || k ? null : (0, r.jsx)(c.f6W, {
    theme: P ? true : _.BR.DARK,
    children: e => {
      var t, l;
      return (0, r.jsx)(o.$, {
        innerRef: O,
        onChange: L,
        threshold: 0,
        children: (0, r.jsxs)("div", {
          ref: O,
          className: a()(e, v.row, v.between, v.bannerBlockContainer, v.centeredSection, {
            [v.extraRounded]: P
          }),
          children: [n.isDismissible && (0, r.jsx)("div", {
            className: v.wideBannerCloseButton,
            children: (0, r.jsx)(c.PZ7, {
              size: "sm",
              onClick: R,
              "aria-label": b.intl.string(b.t.WAI6xu)
            })
          }), (0, r.jsx)("div", {
            className: a()(v.wideBannerBackgroundImg, {
              [v.extraRounded]: P
            }),
            style: null != y ? {
              height: "".concat(y, "px")
            } : true,
            children: (0, r.jsx)("img", {
              ref: S,
              src: B,
              alt: n.title,
              className: a()(v.wideBannerArt, {
                [v.wideBannerArtOrbs]: P
              })
            })
          }), (0, r.jsx)("div", {
            className: a()(v.wideBannerContentContainer, {
              [v.wideBannerWithCTAContentContainer]: N
            }),
            style: {
              maxHeight: null != y ? "".concat(y, "px") : "auto"
            },
            children: (0, r.jsxs)("div", {
              className: v.wideBannerTextContainer,
              children: [(0, r.jsx)(c.Heading, {
                style: {
                  color: null != (t = n.bannerTextColor) ? t : "var(--header-primary)"
                },
                className: P ? v.wideBannerOrbsHeading : true,
                variant: "heading-xl/bold",
                children: n.title
              }), (0, r.jsx)(c.Text, {
                style: {
                  color: "var(--text-muted)"
                },
                lineClamp: 2,
                variant: P ? "text-md/medium" : "text-sm/medium",
                children: P ? b.intl.format(b.t.SFFP7K, {
                  helpdeskArticle: d.Z.getArticleURL(h.BhN.VIRTUAL_CURRENCY_LEARN_MORE)
                }) : n.body
              }), N && (0, r.jsxs)("div", {
                className: v.wideBannerCtaContainer,
                children: [(0, r.jsx)(c.Button, {
                  variant: "overlay-primary",
                  onClick: Z,
                  text: null != (l = n.ctaText) ? l : b.intl.string(b.t.jVcuVY)
                }), A && (0, r.jsx)("img", {
                  src: n.logoURL,
                  alt: "",
                  className: v.wideBannerLogo
                })]
              })]
            })
          }), !N && (0, r.jsx)("div", {
            className: v.wideBannerBlockButton,
            children: (0, r.jsx)(c.Button, {
              variant: "overlay-primary",
              onClick: () => {
                i({
                  sourceButton: "shop wide banner",
                  categorySkuId: T,
                  isInternalShopDeeplink: true,
                  isOrbsExclusive: null == E ? true : E.isOrbsExclusive
                })
              },
              text: b.intl.string(b.t.jVcuVY)
            })
          })]
        })
      })
    }
  })
}
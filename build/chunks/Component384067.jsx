/** Chunk was on 45620 **/
/** chunk id: 384067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  } = e, O = p.Z.getCategoryByStoreListingId(n.categoryStoreListingId), S = l.useRef(null), y = l.useRef(null), [j, k] = l.useState(), [I, T] = l.useState(false);
  l.useEffect(() => {
    let e = y.current;
    if (null == e) return;
    let t = () => {
      e.naturalWidth > 0 && e.naturalHeight > 0 && k(1080 * (e.naturalHeight / e.naturalWidth))
    };
    return e.complete ? t() : e.onload = t, () => {
      e.onload = null
    }
  }, []);
  let L = null != (t = null == O ? true : O.skuId) ? t : "",
    {
      handleCardVisibilityChange: P
    } = (0, m.E)(L, "home", "marketing wide banner"),
    {
      bannerURL: B
    } = (0, h.UI)(n),
    N = i === C.AW.ORBS,
    A = true !== n.disableCta && (null != n.ctaText && "" !== n.ctaText || null != n.ctaRoute && "" !== n.ctaRoute),
    R = null != n.logoURL && "" !== n.logoURL,
    Z = l.useCallback(() => {
      if (T(true), n.isDismissible) {
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
            (0, f.Z)({
              guildId: e,
              pageIndex: n
            })
          }
        } else(0, d.uL)(e)
      }
    }, [n.ctaRoute]);
  return null == B || I ? null : (0, r.jsx)(c.f6W, {
    theme: N ? true : v.BR.DARK,
    children: e => {
      var t, l;
      return (0, r.jsx)(s.$, {
        innerRef: S,
        onChange: P,
        threshold: 0,
        children: (0, r.jsxs)("div", {
          ref: S,
          className: a()(e, E.row, E.between, E.bannerBlockContainer, E.centeredSection, {
            [E.extraRounded]: N
          }),
          children: [n.isDismissible && (0, r.jsx)("div", {
            className: E.wideBannerCloseButton,
            children: (0, r.jsx)(c.PZ7, {
              size: "sm",
              onClick: Z,
              "aria-label": x.intl.string(x.t.WAI6xu)
            })
          }), (0, r.jsx)("div", {
            className: a()(E.wideBannerBackgroundImg, {
              [E.extraRounded]: N
            }),
            style: null != j ? {
              height: "".concat(j, "px")
            } : true,
            children: (0, r.jsx)("img", {
              ref: y,
              src: B,
              alt: n.title,
              className: a()(E.wideBannerArt, {
                [E.wideBannerArtOrbs]: N
              })
            })
          }), (0, r.jsx)("div", {
            className: a()(E.wideBannerContentContainer, {
              [E.wideBannerWithCTAContentContainer]: A
            }),
            style: {
              maxHeight: null != j ? "".concat(j, "px") : "auto"
            },
            children: (0, r.jsxs)("div", {
              className: E.wideBannerTextContainer,
              children: [(0, r.jsx)(c.Heading, {
                style: {
                  color: null != (t = n.bannerTextColor) ? t : "var(--header-primary)"
                },
                className: N ? E.wideBannerOrbsHeading : true,
                variant: "heading-xl/bold",
                children: n.title
              }), (0, r.jsx)(c.Text, {
                style: {
                  color: "var(--text-muted)"
                },
                lineClamp: 2,
                variant: N ? "text-md/medium" : "text-sm/medium",
                children: N ? x.intl.format(x.t.SFFP7K, {
                  helpdeskArticle: g.Z.getArticleURL(_.BhN.VIRTUAL_CURRENCY_LEARN_MORE)
                }) : n.body
              }), A && (0, r.jsxs)("div", {
                className: E.wideBannerCtaContainer,
                children: [(0, r.jsx)(c.Button, {
                  variant: "overlay-primary",
                  onClick: w,
                  text: null != (l = n.ctaText) ? l : x.intl.string(x.t.jVcuVY)
                }), R && (0, r.jsx)("img", {
                  src: n.logoURL,
                  alt: "",
                  className: E.wideBannerLogo
                })]
              })]
            })
          })]
        })
      })
    }
  })
}
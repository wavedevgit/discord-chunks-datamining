/** Chunk was on 45620 **/
/** chunk id: 384067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
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
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk297651 = require("./297651.js"),
  Chunk794324 = require("./794324.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let y = e => {
  var t, n, i;
  let {
    wideBannerBlock: y,
    tab: k
  } = e, T = C.Z.getCategoryByStoreListingId(y.categoryStoreListingId), j = l.useRef(null), I = l.useRef(null), [L, B] = l.useState(), [N, A] = l.useState(false);
  l.useEffect(() => {
    let e = I.current;
    if (null == e) return;
    let t = () => {
      e.naturalWidth > 0 && e.naturalHeight > 0 && B(1080 * (e.naturalHeight / e.naturalWidth))
    };
    return e.complete ? t() : e.onload = t, () => {
      e.onload = null
    }
  }, []);
  let P = null != (t = null == T ? true : T.skuId) ? t : "",
    {
      handleCardVisibilityChange: R
    } = (0, h.E)(P, "home", "marketing wide banner"),
    Z = (0, m.sp)(),
    {
      bannerURL: w
    } = (0, _.UI)(y),
    H = k === b.AW.ORBS,
    D = null != y.ctaRoute && "" !== y.ctaRoute,
    M = true !== y.disableCta && (null != y.ctaText && "" !== y.ctaText || D),
    F = null != y.logoURL && "" !== y.logoURL,
    W = l.useCallback(() => {
      if (A(true), y.isDismissible) {
        var e;
        let t = null != (e = y.dismissibleContentVersion) ? e : 0;
        (0, u.wH)(o.z.COLLECTIBLES_SHOP_WIDE_BANNER, t, {
          dismissAction: v.L.USER_DISMISS
        })
      }
    }, [y.isDismissible, y.dismissibleContentVersion]),
    U = l.useCallback(e => {
      f.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == Z ? true : Z.sessionId,
        sku_id: P,
        page_type: k,
        page_section: null == Z ? true : Z.pageSection,
        page_category: null == Z ? true : Z.pageCategory,
        tile_type: "WIDE_BANNER",
        tile_position: String(null == Z ? true : Z.tilePosition),
        cta_name: e
      })
    }, [Z, P, k]),
    V = l.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null;
      if (U(e), null != y.ctaRoute && "" !== y.ctaRoute) {
        let e = y.ctaRoute;
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
    }, [y.ctaRoute, U]);
  if (null == w || N) return null;
  let z = s()(x.row, x.between, x.bannerBlockContainer, x.centeredSection, {
      [x.extraRounded]: H,
      [x.bannerBlockContainerClickable]: D
    }),
    G = (0, r.jsxs)(r.Fragment, {
      children: [y.isDismissible && (0, r.jsx)("div", {
        className: x.wideBannerCloseButton,
        children: (0, r.jsx)(c.PZ7, {
          size: "sm",
          onClick: e => {
            e.stopPropagation(), W()
          },
          "aria-label": O.intl.string(O.t.WAI6xu)
        })
      }), (0, r.jsx)("div", {
        className: s()(x.wideBannerBackgroundImg, {
          [x.extraRounded]: H
        }),
        style: null != L ? {
          height: "".concat(L, "px")
        } : true,
        children: (0, r.jsx)("img", {
          ref: I,
          src: w,
          alt: y.title,
          className: s()(x.wideBannerArt, {
            [x.wideBannerArtOrbs]: H
          })
        })
      }), (0, r.jsx)("div", {
        className: s()(x.wideBannerContentContainer, {
          [x.wideBannerWithCTAContentContainer]: M
        }),
        style: {
          maxHeight: null != L ? "".concat(L, "px") : "auto"
        },
        children: (0, r.jsxs)("div", {
          className: x.wideBannerTextContainer,
          children: [(0, r.jsx)(c.Heading, {
            style: {
              color: null != (n = y.bannerTextColor) ? n : "var(--header-primary)"
            },
            className: H ? x.wideBannerOrbsHeading : true,
            variant: "heading-xl/bold",
            children: y.title
          }), (0, r.jsx)(c.Text, {
            style: {
              color: "var(--text-muted)"
            },
            lineClamp: 2,
            variant: H ? "text-md/medium" : "text-sm/medium",
            children: H ? O.intl.format(O.t.SFFP7K, {
              helpdeskArticle: p.Z.getArticleURL(E.BhN.VIRTUAL_CURRENCY_LEARN_MORE)
            }) : y.body
          }), M && (0, r.jsxs)("div", {
            className: x.wideBannerCtaContainer,
            children: [(0, r.jsx)(c.Button, {
              variant: "overlay-primary",
              onClick: e => {
                var t;
                e.stopPropagation(), V(null != (t = y.ctaText) ? t : O.intl.string(O.t.jVcuVY))
              },
              text: null != (i = y.ctaText) ? i : O.intl.string(O.t.jVcuVY)
            }), F && (0, r.jsx)("img", {
              src: y.logoURL,
              alt: "",
              className: x.wideBannerLogo
            })]
          })]
        })
      })]
    });
  return (0, r.jsx)(c.f6W, {
    theme: H ? true : S.BR.DARK,
    children: e => (0, r.jsx)(a.$, {
      innerRef: j,
      onChange: R,
      threshold: 0,
      children: D ? (0, r.jsx)(c.P3F, {
        innerRef: j,
        onClick: () => V(null),
        className: s()(e, z),
        children: G
      }) : (0, r.jsx)("div", {
        ref: j,
        className: s()(e, z),
        children: G
      })
    })
  })
}
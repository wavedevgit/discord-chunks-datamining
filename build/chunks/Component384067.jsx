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
  Chunk222194 = require("./222194.js");
let y = e => {
  var t, n, a;
  let {
    wideBannerBlock: y,
    tab: j
  } = e, k = h.Z.getCategoryByStoreListingId(y.categoryStoreListingId), T = l.useRef(null), I = l.useRef(null), [L, A] = l.useState(), [B, N] = l.useState(false);
  l.useEffect(() => {
    let e = I.current;
    if (null == e) return;
    let t = () => {
      e.naturalWidth > 0 && e.naturalHeight > 0 && A(1080 * (e.naturalHeight / e.naturalWidth))
    };
    return e.complete ? t() : e.onload = t, () => {
      e.onload = null
    }
  }, []);
  let R = null != (t = null == k ? true : k.skuId) ? t : "",
    {
      handleCardVisibilityChange: P
    } = (0, m.E)(R, "home", "marketing wide banner"),
    w = (0, p.sp)(),
    {
      bannerURL: Z
    } = (0, C.UI)(y),
    D = j === E.AW.ORBS,
    M = null != y.ctaRoute && "" !== y.ctaRoute,
    H = true !== y.disableCta && (null != y.ctaText && "" !== y.ctaText || M),
    F = null != y.logoURL && "" !== y.logoURL,
    W = l.useCallback(() => {
      if (N(true), y.isDismissible) {
        var e;
        let t = null != (e = y.dismissibleContentVersion) ? e : 0;
        (0, u.wH)(i.z.COLLECTIBLES_SHOP_WIDE_BANNER, t, {
          dismissAction: x.L.USER_DISMISS
        })
      }
    }, [y.isDismissible, y.dismissibleContentVersion]),
    U = l.useCallback(e => {
      g.default.track(v.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == w ? true : w.sessionId,
        sku_id: R,
        page_type: j,
        page_section: null == w ? true : w.pageSection,
        page_category: null == w ? true : w.pageCategory,
        tile_type: "WIDE_BANNER",
        tile_position: String(null == w ? true : w.tilePosition),
        cta_name: e
      })
    }, [w, R, j]),
    z = l.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null;
      if (U(e), null != y.ctaRoute && "" !== y.ctaRoute) {
        let e = y.ctaRoute;
        if (e.includes("game-shop")) {
          let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
          if (null != t) {
            let e = t[1],
              n = parseInt(t[2], 10);
            (0, f.default)({
              guildId: e,
              pageIndex: n
            })
          }
        } else(0, d.uL)(e)
      }
    }, [y.ctaRoute, U]);
  if (null == Z || B) return null;
  let V = s()(_.row, _.between, _.bannerBlockContainer, _.centeredSection, {
      [_.extraRounded]: D,
      [_.bannerBlockContainerClickable]: M
    }),
    G = (0, r.jsxs)(r.Fragment, {
      children: [y.isDismissible && (0, r.jsx)("div", {
        className: _.wideBannerCloseButton,
        children: (0, r.jsx)(c.PZ7, {
          size: "sm",
          onClick: e => {
            e.stopPropagation(), W()
          },
          "aria-label": O.intl.string(O.t.WAI6xu)
        })
      }), (0, r.jsx)("div", {
        className: s()(_.wideBannerBackgroundImg, {
          [_.extraRounded]: D
        }),
        style: null != L ? {
          height: "".concat(L, "px")
        } : true,
        children: (0, r.jsx)("img", {
          ref: I,
          src: Z,
          alt: y.title,
          className: s()(_.wideBannerArt, {
            [_.wideBannerArtOrbs]: D
          })
        })
      }), (0, r.jsx)("div", {
        className: s()(_.wideBannerContentContainer, {
          [_.wideBannerWithCTAContentContainer]: H
        }),
        style: {
          maxHeight: null != L ? "".concat(L, "px") : "auto"
        },
        children: (0, r.jsxs)("div", {
          className: _.wideBannerTextContainer,
          children: [(0, r.jsx)(c.Heading, {
            style: {
              color: null != (n = y.bannerTextColor) ? n : "var(--text-strong)"
            },
            className: D ? _.wideBannerOrbsHeading : true,
            variant: "heading-xl/bold",
            children: y.title
          }), (0, r.jsx)(c.Text, {
            style: {
              color: "var(--text-muted)"
            },
            lineClamp: 2,
            variant: D ? "text-md/medium" : "text-sm/medium",
            children: D ? O.intl.format(O.t.SFFP7K, {
              helpdeskArticle: b.Z.getArticleURL(v.BhN.VIRTUAL_CURRENCY_LEARN_MORE)
            }) : y.body
          }), H && (0, r.jsxs)("div", {
            className: _.wideBannerCtaContainer,
            children: [(0, r.jsx)(c.Button, {
              variant: "overlay-primary",
              onClick: e => {
                var t;
                e.stopPropagation(), z(null != (t = y.ctaText) ? t : O.intl.string(O.t.jVcuVY))
              },
              text: null != (a = y.ctaText) ? a : O.intl.string(O.t.jVcuVY)
            }), F && (0, r.jsx)("img", {
              src: y.logoURL,
              alt: "",
              className: _.wideBannerLogo
            })]
          })]
        })
      })]
    });
  return (0, r.jsx)(c.f6W, {
    theme: D ? true : S.BR.DARK,
    children: e => (0, r.jsx)(o.$, {
      innerRef: T,
      onChange: P,
      threshold: 0,
      children: M ? (0, r.jsx)(c.P3F, {
        innerRef: T,
        onClick: () => z(null),
        className: s()(e, V),
        children: G
      }) : (0, r.jsx)("div", {
        ref: T,
        className: s()(e, V),
        children: G
      })
    })
  })
}
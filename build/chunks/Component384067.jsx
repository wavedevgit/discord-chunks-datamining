/** Chunk was on 45620 **/
/** chunk id: 384067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk597688 = require("./597688.js"),
  Chunk297651 = require("./297651.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let C = e => {
  var t, n, i;
  let {
    wideBannerBlock: C,
    handleTransition: h,
    tab: m
  } = e, b = null == (t = u.Z.getCategoryByStoreListingId(C.categoryStoreListingId)) ? true : t.skuId, E = l.useRef(null), v = l.useRef(null), [S, x] = l.useState();
  l.useEffect(() => {
    let e = v.current;
    if (null == e) return;
    let t = () => {
      e.naturalWidth > 0 && e.naturalHeight > 0 && x(1080 * (e.naturalHeight / e.naturalWidth))
    };
    return e.complete ? t() : e.onload = t, () => {
      e.onload = null
    }
  }, []);
  let O = null != b ? b : "",
    {
      handleCardVisibilityChange: T
    } = (0, d.E)(O, "home", "marketing wide banner"),
    y = C.bannerUrl;
  if (null == y) return null;
  let L = m === g.AW.ORBS;
  return (0, r.jsx)(s.$, {
    innerRef: E,
    onChange: T,
    threshold: 0,
    children: (0, r.jsxs)("div", {
      ref: E,
      className: a()(_.row, _.between, _.bannerBlockContainer, _.centeredSection, {
        [_.extraRounded]: L
      }),
      children: [(0, r.jsx)("div", {
        className: a()(_.wideBannerBackgroundImg, {
          [_.extraRounded]: L
        }),
        children: (0, r.jsx)("img", {
          ref: v,
          src: y,
          alt: C.title,
          className: a()(_.wideBannerArt, {
            [_.wideBannerArtOrbs]: L
          }),
          style: {
            height: null != S ? "".concat(S, "px") : "auto"
          }
        })
      }), (0, r.jsx)("div", {
        className: _.wideBannerContentContainer,
        style: {
          maxHeight: null != S ? "".concat(S, "px") : "auto"
        },
        children: (0, r.jsxs)("div", {
          className: _.wideBannerTextContainer,
          children: [(0, r.jsx)(o.X6q, {
            style: {
              color: null != (n = C.bannerTextColor) ? n : "var(--header-primary)"
            },
            className: L ? _.wideBannerOrbsHeading : true,
            variant: L ? "heading-xl/bold" : "heading-lg/semibold",
            children: C.title
          }), (0, r.jsx)(o.Text, {
            style: {
              color: null != (i = C.bannerTextColor) ? i : "var(--text-muted)"
            },
            lineClamp: 2,
            variant: L ? "text-md/medium" : "text-sm/medium",
            children: L ? f.intl.format(f.t.SFFP7O, {
              helpdeskArticle: c.Z.getArticleURL(p.BhN.VIRTUAL_CURRENCY_LEARN_MORE)
            }) : C.body
          })]
        })
      }), true !== C.disableCta && (0, r.jsx)("div", {
        className: _.wideBannerBlockButton,
        children: (0, r.jsx)(o.zxk, {
          variant: "overlay-primary",
          onClick: () => h("shop wide banner", O),
          text: f.intl.string(f.t.jVcuVV)
        })
      })]
    })
  })
}
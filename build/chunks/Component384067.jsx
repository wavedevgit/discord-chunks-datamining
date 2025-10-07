/** Chunk was on 45620 **/
/** chunk id: 384067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
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
let h = e => {
  var t, n, s;
  let {
    wideBannerBlock: h,
    handleTransition: _,
    tab: m
  } = e, b = null == (t = u.Z.getCategoryByStoreListingId(h.categoryStoreListingId)) ? true : t.skuId, E = l.useRef(null), S = l.useRef(null), [v, x] = l.useState();
  l.useEffect(() => {
    let e = S.current;
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
    y = h.bannerUrl;
  if (null == y) return null;
  let L = m === g.AW.ORBS;
  return (0, r.jsx)(i.$, {
    innerRef: E,
    onChange: T,
    threshold: 0,
    children: (0, r.jsxs)("div", {
      ref: E,
      className: a()(C.row, C.between, C.bannerBlockContainer, C.centeredSection, {
        [C.extraRounded]: L
      }),
      children: [(0, r.jsx)("div", {
        className: a()(C.wideBannerBackgroundImg, {
          [C.extraRounded]: L
        }),
        children: (0, r.jsx)("img", {
          ref: S,
          src: y,
          alt: h.title,
          className: a()(C.wideBannerArt, {
            [C.wideBannerArtOrbs]: L
          }),
          style: {
            height: null != v ? "".concat(v, "px") : "auto"
          }
        })
      }), (0, r.jsx)("div", {
        className: C.wideBannerContentContainer,
        style: {
          maxHeight: null != v ? "".concat(v, "px") : "auto"
        },
        children: (0, r.jsxs)("div", {
          className: C.wideBannerTextContainer,
          children: [(0, r.jsx)(o.X6q, {
            style: {
              color: null != (n = h.bannerTextColor) ? n : "var(--header-primary)"
            },
            className: L ? C.wideBannerOrbsHeading : true,
            variant: L ? "heading-xl/bold" : "heading-lg/semibold",
            children: h.title
          }), (0, r.jsx)(o.Text, {
            style: {
              color: null != (s = h.bannerTextColor) ? s : "var(--text-muted)"
            },
            lineClamp: 2,
            variant: L ? "text-md/medium" : "text-sm/medium",
            children: L ? f.intl.format(f.t.SFFP7O, {
              helpdeskArticle: c.Z.getArticleURL(p.BhN.VIRTUAL_CURRENCY_LEARN_MORE)
            }) : h.body
          })]
        })
      }), true !== h.disableCta && (0, r.jsx)("div", {
        className: C.wideBannerBlockButton,
        children: (0, r.jsx)(o.zxk, {
          variant: "overlay-primary",
          onClick: () => _("shop wide banner", O),
          text: f.intl.string(f.t.jVcuVV)
        })
      })]
    })
  })
}
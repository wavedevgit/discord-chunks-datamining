/** Chunk was on 45620 **/
/** chunk id: 384067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk597688 = require("./597688.js"),
  Chunk297651 = require("./297651.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk806734 = require("./806734.js");
let h = e => {
  var t, n, a;
  let {
    wideBannerBlock: h,
    handleTransition: m,
    tab: _
  } = e, v = null == (t = u.Z.getCategoryByStoreListingId(h.categoryStoreListingId)) ? true : t.skuId, O = l.useRef(null), C = l.useRef(null), [E, S] = l.useState();
  l.useEffect(() => {
    let e = C.current;
    if (null == e) return;
    let t = () => {
      e.naturalWidth > 0 && e.naturalHeight > 0 && S(1080 * (e.naturalHeight / e.naturalWidth))
    };
    return e.complete ? t() : e.onload = t, () => {
      e.onload = null
    }
  }, []);
  let y = null != v ? v : "",
    {
      handleCardVisibilityChange: x
    } = (0, d.E)(y, "home", "marketing wide banner"),
    j = h.bannerUrl;
  if (null == j) return null;
  let T = _ === p.AW.ORBS;
  return (0, r.jsx)(o.$, {
    innerRef: O,
    onChange: x,
    threshold: 0,
    children: (0, r.jsxs)("div", {
      ref: O,
      className: i()(b.row, b.between, b.bannerBlockContainer, b.centeredSection, {
        [b.extraRounded]: T
      }),
      children: [(0, r.jsx)("div", {
        className: i()(b.wideBannerBackgroundImg, {
          [b.extraRounded]: T
        }),
        children: (0, r.jsx)("img", {
          ref: C,
          src: j,
          alt: h.title,
          className: i()(b.wideBannerArt, {
            [b.wideBannerArtOrbs]: T
          }),
          style: {
            height: null != E ? "".concat(E, "px") : "auto"
          }
        })
      }), (0, r.jsx)("div", {
        className: b.wideBannerContentContainer,
        style: {
          maxHeight: null != E ? "".concat(E, "px") : "auto"
        },
        children: (0, r.jsxs)("div", {
          className: b.wideBannerTextContainer,
          children: [(0, r.jsx)(s.X6q, {
            style: {
              color: null != (n = h.bannerTextColor) ? n : "var(--header-primary)"
            },
            className: T ? b.wideBannerOrbsHeading : true,
            variant: T ? "heading-xl/bold" : "heading-lg/semibold",
            children: h.title
          }), (0, r.jsx)(s.Text, {
            style: {
              color: null != (a = h.bannerTextColor) ? a : "var(--text-muted)"
            },
            lineClamp: 2,
            variant: T ? "text-md/medium" : "text-sm/medium",
            children: T ? f.intl.format(f.t.SFFP7O, {
              helpdeskArticle: c.Z.getArticleURL(g.BhN.VIRTUAL_CURRENCY_LEARN_MORE)
            }) : h.body
          })]
        })
      }), true !== h.disableCta && (0, r.jsx)("div", {
        className: b.wideBannerBlockButton,
        children: (0, r.jsx)(s.zxk, {
          variant: "overlay-primary",
          onClick: () => m("shop wide banner", y),
          text: f.intl.string(f.t.jVcuVV)
        })
      })]
    })
  })
}
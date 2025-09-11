/** Chunk was on 45620 **/
/** chunk id: 384067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk597688 = require("./597688.js"),
  Chunk297651 = require("./297651.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk687983 = require("./687983.js");
let m = e => {
  var t, n, a;
  let {
    wideBannerBlock: m,
    handleTransition: _,
    tab: C
  } = e, b = null == (t = u.Z.getCategoryByStoreListingId(m.categoryStoreListingId)) ? true : t.skuId, E = l.useRef(null), S = l.useRef(null), [v, O] = l.useState();
  l.useEffect(() => {
    let e = S.current;
    if (null == e) return;
    let t = () => {
      e.naturalWidth > 0 && e.naturalHeight > 0 && O(1080 * (e.naturalHeight / e.naturalWidth))
    };
    return e.complete ? t() : e.onload = t, () => {
      e.onload = null
    }
  }, []);
  let x = null != b ? b : "",
    {
      handleCardVisibilityChange: y
    } = (0, d.E)(x, "home", "marketing wide banner"),
    T = m.bannerUrl;
  if (null == T) return null;
  let L = C === g.AW.ORBS;
  return (0, r.jsx)(i.$, {
    innerRef: E,
    onChange: y,
    threshold: 0,
    children: (0, r.jsxs)("div", {
      ref: E,
      className: s()(h.row, h.between, h.bannerBlockContainer, h.centeredSection, {
        [h.extraRounded]: L
      }),
      children: [(0, r.jsx)("div", {
        className: s()(h.wideBannerBackgroundImg, {
          [h.extraRounded]: L
        }),
        children: (0, r.jsx)("img", {
          ref: S,
          src: T,
          alt: m.title,
          className: s()(h.wideBannerArt, {
            [h.wideBannerArtOrbs]: L
          }),
          style: {
            height: null != v ? "".concat(v, "px") : "auto"
          }
        })
      }), (0, r.jsx)("div", {
        className: h.wideBannerContentContainer,
        style: {
          maxHeight: null != v ? "".concat(v, "px") : "auto"
        },
        children: (0, r.jsxs)("div", {
          className: h.wideBannerTextContainer,
          children: [(0, r.jsx)(o.X6q, {
            style: {
              color: null != (n = m.bannerTextColor) ? n : "var(--header-primary)"
            },
            className: L ? h.wideBannerOrbsHeading : true,
            variant: L ? "heading-xl/bold" : "heading-lg/semibold",
            children: m.title
          }), (0, r.jsx)(o.Text, {
            style: {
              color: null != (a = m.bannerTextColor) ? a : "var(--text-muted)"
            },
            lineClamp: 2,
            variant: L ? "text-md/medium" : "text-sm/medium",
            children: L ? p.intl.format(p.t.SFFP7O, {
              helpdeskArticle: c.Z.getArticleURL(f.BhN.VIRTUAL_CURRENCY_LEARN_MORE)
            }) : m.body
          })]
        })
      }), true !== m.disableCta && (0, r.jsx)("div", {
        className: h.wideBannerBlockButton,
        children: (0, r.jsx)(o.zxk, {
          variant: "overlay-primary",
          onClick: () => _("shop wide banner", x),
          text: p.intl.string(p.t.jVcuVV)
        })
      })]
    })
  })
}
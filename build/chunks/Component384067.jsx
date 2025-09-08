/** Chunk was on 45620 **/
/** chunk id: 384067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
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
  Chunk310582 = require("./310582.js");
let h = e => {
  var t, n, a;
  let {
    wideBannerBlock: h,
    handleTransition: _,
    tab: b
  } = e, C = null == (t = u.Z.getCategoryByStoreListingId(h.categoryStoreListingId)) ? true : t.skuId, E = l.useRef(null), S = l.useRef(null), [O, v] = l.useState();
  l.useEffect(() => {
    let e = S.current;
    if (null == e) return;
    let t = () => {
      e.naturalWidth > 0 && e.naturalHeight > 0 && v(1080 * (e.naturalHeight / e.naturalWidth))
    };
    return e.complete ? t() : e.onload = t, () => {
      e.onload = null
    }
  }, []);
  let x = null != C ? C : "",
    {
      handleCardVisibilityChange: y
    } = (0, d.E)(x, "home", "marketing wide banner"),
    T = h.bannerUrl;
  if (null == T) return null;
  let L = b === g.AW.ORBS;
  return (0, r.jsx)(o.$, {
    innerRef: E,
    onChange: y,
    threshold: 0,
    children: (0, r.jsxs)("div", {
      ref: E,
      className: s()(m.row, m.between, m.bannerBlockContainer, m.centeredSection, {
        [m.extraRounded]: L
      }),
      children: [(0, r.jsx)("div", {
        className: s()(m.wideBannerBackgroundImg, {
          [m.extraRounded]: L
        }),
        children: (0, r.jsx)("img", {
          ref: S,
          src: T,
          alt: h.title,
          className: s()(m.wideBannerArt, {
            [m.wideBannerArtOrbs]: L
          }),
          style: {
            height: null != O ? "".concat(O, "px") : "auto"
          }
        })
      }), (0, r.jsx)("div", {
        className: m.wideBannerContentContainer,
        style: {
          maxHeight: null != O ? "".concat(O, "px") : "auto"
        },
        children: (0, r.jsxs)("div", {
          className: m.wideBannerTextContainer,
          children: [(0, r.jsx)(i.X6q, {
            style: {
              color: null != (n = h.bannerTextColor) ? n : "var(--header-primary)"
            },
            className: L ? m.wideBannerOrbsHeading : true,
            variant: L ? "heading-xl/bold" : "heading-lg/semibold",
            children: h.title
          }), (0, r.jsx)(i.Text, {
            style: {
              color: null != (a = h.bannerTextColor) ? a : "var(--text-muted)"
            },
            lineClamp: 2,
            variant: L ? "text-md/medium" : "text-sm/medium",
            children: L ? p.intl.format(p.t.SFFP7O, {
              helpdeskArticle: c.Z.getArticleURL(f.BhN.VIRTUAL_CURRENCY_LEARN_MORE)
            }) : h.body
          })]
        })
      }), true !== h.disableCta && (0, r.jsx)("div", {
        className: m.wideBannerBlockButton,
        children: (0, r.jsx)(i.zxk, {
          variant: "overlay-primary",
          onClick: () => _("shop wide banner", x),
          text: p.intl.string(p.t.jVcuVV)
        })
      })]
    })
  })
}
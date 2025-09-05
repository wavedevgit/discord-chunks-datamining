/** Chunk was on 45620 **/
/** chunk id: 384067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
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
let _ = e => {
  var t, n, a;
  let {
    wideBannerBlock: _,
    handleTransition: h,
    tab: C
  } = e, b = null == (t = u.Z.getCategoryByStoreListingId(_.categoryStoreListingId)) ? true : t.skuId, E = l.useRef(null), S = l.useRef(null), [O, v] = l.useState();
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
  let x = null != b ? b : "",
    {
      handleCardVisibilityChange: y
    } = (0, d.E)(x, "home", "marketing wide banner"),
    T = _.bannerUrl;
  if (null == T) return null;
  let L = C === g.AW.ORBS;
  return (0, r.jsx)(i.$, {
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
          alt: _.title,
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
          children: [(0, r.jsx)(o.X6q, {
            style: {
              color: null != (n = _.bannerTextColor) ? n : "var(--header-primary)"
            },
            className: L ? m.wideBannerOrbsHeading : true,
            variant: L ? "heading-xl/bold" : "heading-lg/semibold",
            children: _.title
          }), (0, r.jsx)(o.Text, {
            style: {
              color: null != (a = _.bannerTextColor) ? a : "var(--text-muted)"
            },
            lineClamp: 2,
            variant: L ? "text-md/medium" : "text-sm/medium",
            children: L ? f.intl.format(f.t.SFFP7O, {
              helpdeskArticle: c.Z.getArticleURL(p.BhN.VIRTUAL_CURRENCY_LEARN_MORE)
            }) : _.body
          })]
        })
      }), true !== _.disableCta && (0, r.jsx)("div", {
        className: m.wideBannerBlockButton,
        children: (0, r.jsx)(o.zxk, {
          variant: "overlay-primary",
          onClick: () => h("shop wide banner", x),
          text: f.intl.string(f.t.jVcuVV)
        })
      })]
    })
  })
}
/** Chunk was on 45620 **/
/** chunk id: 384067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk597688 = require("./597688.js"),
  Chunk297651 = require("./297651.js"),
  Chunk794324 = require("./794324.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let _ = e => {
  var t, n, s;
  let {
    wideBannerBlock: _,
    handleTransition: m,
    tab: b
  } = e, E = null == (t = u.Z.getCategoryByStoreListingId(_.categoryStoreListingId)) ? true : t.skuId, S = l.useRef(null), v = l.useRef(null), [x, O] = l.useState();
  l.useEffect(() => {
    let e = v.current;
    if (null == e) return;
    let t = () => {
      e.naturalWidth > 0 && e.naturalHeight > 0 && O(1080 * (e.naturalHeight / e.naturalWidth))
    };
    return e.complete ? t() : e.onload = t, () => {
      e.onload = null
    }
  }, []);
  let y = null != E ? E : "",
    {
      handleCardVisibilityChange: j
    } = (0, d.E)(y, "home", "marketing wide banner"),
    {
      bannerURL: k
    } = (0, g.UI)(_);
  if (null == k) return null;
  let T = b === f.AW.ORBS;
  return (0, r.jsx)(a.$, {
    innerRef: S,
    onChange: j,
    threshold: 0,
    children: (0, r.jsxs)("div", {
      ref: S,
      className: i()(h.row, h.between, h.bannerBlockContainer, h.centeredSection, {
        [h.extraRounded]: T
      }),
      children: [(0, r.jsx)("div", {
        className: i()(h.wideBannerBackgroundImg, {
          [h.extraRounded]: T
        }),
        children: (0, r.jsx)("img", {
          ref: v,
          src: k,
          alt: _.title,
          className: i()(h.wideBannerArt, {
            [h.wideBannerArtOrbs]: T
          }),
          style: {
            height: null != x ? "".concat(x, "px") : "auto"
          }
        })
      }), (0, r.jsx)("div", {
        className: h.wideBannerContentContainer,
        style: {
          maxHeight: null != x ? "".concat(x, "px") : "auto"
        },
        children: (0, r.jsxs)("div", {
          className: h.wideBannerTextContainer,
          children: [(0, r.jsx)(o.X6q, {
            style: {
              color: null != (n = _.bannerTextColor) ? n : "var(--header-primary)"
            },
            className: T ? h.wideBannerOrbsHeading : true,
            variant: T ? "heading-xl/bold" : "heading-lg/semibold",
            children: _.title
          }), (0, r.jsx)(o.Text, {
            style: {
              color: null != (s = _.bannerTextColor) ? s : "var(--text-muted)"
            },
            lineClamp: 2,
            variant: T ? "text-md/medium" : "text-sm/medium",
            children: T ? C.intl.format(C.t.SFFP7O, {
              helpdeskArticle: c.Z.getArticleURL(p.BhN.VIRTUAL_CURRENCY_LEARN_MORE)
            }) : _.body
          })]
        })
      }), true !== _.disableCta && (0, r.jsx)("div", {
        className: h.wideBannerBlockButton,
        children: (0, r.jsx)(o.zxk, {
          variant: "overlay-primary",
          onClick: () => m("shop wide banner", y),
          text: C.intl.string(C.t.jVcuVV)
        })
      })]
    })
  })
}
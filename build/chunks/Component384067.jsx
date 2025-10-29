/** Chunk was on 45620 **/
/** chunk id: 384067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
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
  Chunk794324 = require("./794324.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let _ = e => {
  var t, n, i;
  let {
    wideBannerBlock: _,
    handleTransition: m,
    tab: b
  } = e, v = null == (t = u.Z.getCategoryByStoreListingId(_.categoryStoreListingId)) ? true : t.skuId, E = l.useRef(null), x = l.useRef(null), [O, S] = l.useState();
  l.useEffect(() => {
    let e = x.current;
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
      handleCardVisibilityChange: j
    } = (0, d.E)(y, "home", "marketing wide banner"),
    {
      bannerURL: k
    } = (0, g.UI)(_);
  if (null == k) return null;
  let T = b === p.AW.ORBS;
  return (0, r.jsx)(s.$, {
    innerRef: E,
    onChange: j,
    threshold: 0,
    children: (0, r.jsxs)("div", {
      ref: E,
      className: a()(C.row, C.between, C.bannerBlockContainer, C.centeredSection, {
        [C.extraRounded]: T
      }),
      children: [(0, r.jsx)("div", {
        className: a()(C.wideBannerBackgroundImg, {
          [C.extraRounded]: T
        }),
        children: (0, r.jsx)("img", {
          ref: x,
          src: k,
          alt: _.title,
          className: a()(C.wideBannerArt, {
            [C.wideBannerArtOrbs]: T
          }),
          style: {
            height: null != O ? "".concat(O, "px") : "auto"
          }
        })
      }), (0, r.jsx)("div", {
        className: C.wideBannerContentContainer,
        style: {
          maxHeight: null != O ? "".concat(O, "px") : "auto"
        },
        children: (0, r.jsxs)("div", {
          className: C.wideBannerTextContainer,
          children: [(0, r.jsx)(o.Heading, {
            style: {
              color: null != (n = _.bannerTextColor) ? n : "var(--header-primary)"
            },
            className: T ? C.wideBannerOrbsHeading : true,
            variant: T ? "heading-xl/bold" : "heading-lg/semibold",
            children: _.title
          }), (0, r.jsx)(o.Text, {
            style: {
              color: null != (i = _.bannerTextColor) ? i : "var(--text-muted)"
            },
            lineClamp: 2,
            variant: T ? "text-md/medium" : "text-sm/medium",
            children: T ? h.intl.format(h.t.SFFP7K, {
              helpdeskArticle: c.Z.getArticleURL(f.BhN.VIRTUAL_CURRENCY_LEARN_MORE)
            }) : _.body
          })]
        })
      }), true !== _.disableCta && (0, r.jsx)("div", {
        className: C.wideBannerBlockButton,
        children: (0, r.jsx)(o.Button, {
          variant: "overlay-primary",
          onClick: () => m("shop wide banner", y, true, true),
          text: h.intl.string(h.t.jVcuVY)
        })
      })]
    })
  })
}
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
  Chunk794324 = require("./794324.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk687983 = require("./687983.js");
let m = e => {
  var t, n, i;
  let {
    wideBannerBlock: m,
    handleTransition: _,
    tab: b
  } = e, v = u.Z.getCategoryByStoreListingId(m.categoryStoreListingId), E = l.useRef(null), x = l.useRef(null), [O, S] = l.useState();
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
  let y = null != (t = null == v ? true : v.skuId) ? t : "",
    {
      handleCardVisibilityChange: j
    } = (0, d.E)(y, "home", "marketing wide banner"),
    {
      bannerURL: k
    } = (0, p.UI)(m);
  if (null == k) return null;
  let I = b === g.AW.ORBS;
  return (0, r.jsx)(a.$, {
    innerRef: E,
    onChange: j,
    threshold: 0,
    children: (0, r.jsxs)("div", {
      ref: E,
      className: s()(C.row, C.between, C.bannerBlockContainer, C.centeredSection, {
        [C.extraRounded]: I
      }),
      children: [(0, r.jsx)("div", {
        className: s()(C.wideBannerBackgroundImg, {
          [C.extraRounded]: I
        }),
        children: (0, r.jsx)("img", {
          ref: x,
          src: k,
          alt: m.title,
          className: s()(C.wideBannerArt, {
            [C.wideBannerArtOrbs]: I
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
              color: null != (n = m.bannerTextColor) ? n : "var(--header-primary)"
            },
            className: I ? C.wideBannerOrbsHeading : true,
            variant: I ? "heading-xl/bold" : "heading-lg/semibold",
            children: m.title
          }), (0, r.jsx)(o.Text, {
            style: {
              color: null != (i = m.bannerTextColor) ? i : "var(--text-muted)"
            },
            lineClamp: 2,
            variant: I ? "text-md/medium" : "text-sm/medium",
            children: I ? h.intl.format(h.t.SFFP7K, {
              helpdeskArticle: c.Z.getArticleURL(f.BhN.VIRTUAL_CURRENCY_LEARN_MORE)
            }) : m.body
          })]
        })
      }), true !== m.disableCta && (0, r.jsx)("div", {
        className: C.wideBannerBlockButton,
        children: (0, r.jsx)(o.Button, {
          variant: "overlay-primary",
          onClick: () => {
            _({
              sourceButton: "shop wide banner",
              categorySkuId: y,
              isInternalShopDeeplink: true,
              isOrbsExclusive: null == v ? true : v.isOrbsExclusive
            })
          },
          text: h.intl.string(h.t.jVcuVY)
        })
      })]
    })
  })
}
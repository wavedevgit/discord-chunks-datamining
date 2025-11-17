/** Chunk was on 45620 **/
/** chunk id: 384067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let C = e => {
  var t, n, i;
  let {
    wideBannerBlock: C,
    handleTransition: _,
    tab: b
  } = e, v = u.Z.getCategoryByStoreListingId(C.categoryStoreListingId), x = l.useRef(null), E = l.useRef(null), [O, S] = l.useState();
  l.useEffect(() => {
    let e = E.current;
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
    } = (0, p.UI)(C);
  if (null == k) return null;
  let I = b === g.AW.ORBS;
  return (0, r.jsx)(o.$, {
    innerRef: x,
    onChange: j,
    threshold: 0,
    children: (0, r.jsxs)("div", {
      ref: x,
      className: a()(m.row, m.between, m.bannerBlockContainer, m.centeredSection, {
        [m.extraRounded]: I
      }),
      children: [(0, r.jsx)("div", {
        className: a()(m.wideBannerBackgroundImg, {
          [m.extraRounded]: I
        }),
        children: (0, r.jsx)("img", {
          ref: E,
          src: k,
          alt: C.title,
          className: a()(m.wideBannerArt, {
            [m.wideBannerArtOrbs]: I
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
          children: [(0, r.jsx)(s.Heading, {
            style: {
              color: null != (n = C.bannerTextColor) ? n : "var(--header-primary)"
            },
            className: I ? m.wideBannerOrbsHeading : true,
            variant: I ? "heading-xl/bold" : "heading-lg/semibold",
            children: C.title
          }), (0, r.jsx)(s.Text, {
            style: {
              color: null != (i = C.bannerTextColor) ? i : "var(--text-muted)"
            },
            lineClamp: 2,
            variant: I ? "text-md/medium" : "text-sm/medium",
            children: I ? h.intl.format(h.t.SFFP7K, {
              helpdeskArticle: c.Z.getArticleURL(f.BhN.VIRTUAL_CURRENCY_LEARN_MORE)
            }) : C.body
          })]
        })
      }), true !== C.disableCta && (0, r.jsx)("div", {
        className: m.wideBannerBlockButton,
        children: (0, r.jsx)(s.Button, {
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
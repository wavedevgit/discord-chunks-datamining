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
  } = e, E = null == (t = u.Z.getCategoryByStoreListingId(_.categoryStoreListingId)) ? true : t.skuId, v = l.useRef(null), S = l.useRef(null), [O, x] = l.useState();
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
  let y = null != E ? E : "",
    {
      handleCardVisibilityChange: j
    } = (0, d.E)(y, "home", "marketing wide banner"),
    {
      bannerURL: T
    } = (0, g.UI)(_);
  if (null == T) return null;
  let L = b === f.AW.ORBS;
  return (0, r.jsx)(o.$, {
    innerRef: v,
    onChange: j,
    threshold: 0,
    children: (0, r.jsxs)("div", {
      ref: v,
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
          alt: _.title,
          className: s()(h.wideBannerArt, {
            [h.wideBannerArtOrbs]: L
          }),
          style: {
            height: null != O ? "".concat(O, "px") : "auto"
          }
        })
      }), (0, r.jsx)("div", {
        className: h.wideBannerContentContainer,
        style: {
          maxHeight: null != O ? "".concat(O, "px") : "auto"
        },
        children: (0, r.jsxs)("div", {
          className: h.wideBannerTextContainer,
          children: [(0, r.jsx)(a.Heading, {
            style: {
              color: null != (n = _.bannerTextColor) ? n : "var(--header-primary)"
            },
            className: L ? h.wideBannerOrbsHeading : true,
            variant: L ? "heading-xl/bold" : "heading-lg/semibold",
            children: _.title
          }), (0, r.jsx)(a.Text, {
            style: {
              color: null != (i = _.bannerTextColor) ? i : "var(--text-muted)"
            },
            lineClamp: 2,
            variant: L ? "text-md/medium" : "text-sm/medium",
            children: L ? C.intl.format(C.t.SFFP7O, {
              helpdeskArticle: c.Z.getArticleURL(p.BhN.VIRTUAL_CURRENCY_LEARN_MORE)
            }) : _.body
          })]
        })
      }), true !== _.disableCta && (0, r.jsx)("div", {
        className: h.wideBannerBlockButton,
        children: (0, r.jsx)(a.Button, {
          variant: "overlay-primary",
          onClick: () => m("shop wide banner", y),
          text: C.intl.string(C.t.jVcuVV)
        })
      })]
    })
  })
}
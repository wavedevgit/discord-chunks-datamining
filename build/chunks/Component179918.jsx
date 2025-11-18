/** Chunk was on web.js **/
/** chunk id: 179918, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk990547 = require("./990547.js"),
  Chunk79766 = require("./79766.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk63063 = require("./63063.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk940413 = require("./940413.js");
let f = e => {
  let {
    componentId: t,
    promotionBannerMarketingComponentFields: n
  } = e;
  (0, l.Z)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
    properties: {
      component_type: a.I.MARKETING_PAGE_BANNER,
      component_id: t
    }
  });
  let f = n;
  return (0, r.jsxs)("div", {
    className: d.container,
    children: [(0, r.jsx)("div", {
      className: d.asset,
      children: (0, r.jsx)(s.Eep, {
        src: f.assetUrl,
        width: 96,
        height: 96
      })
    }), (0, r.jsxs)("div", {
      className: d.bannerContent,
      children: [(0, r.jsx)(o.X6q, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: f.header
      }), (0, r.jsx)(o.xvT, {
        variant: "text-md/medium",
        color: "text-secondary",
        className: d.bannerDescription,
        children: f.body
      }), (0, r.jsx)(o.xvT, {
        variant: "text-md/medium",
        color: "text-secondary",
        className: d.bannerDescription,
        children: u.intl.format(u.t.mYS7uY, {
          helpCenterLink: c.Z.getArticleURL(f.helpArticleId)
        })
      })]
    })]
  })
}
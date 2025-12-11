/** Chunk was on web.js **/
/** chunk id: 179918, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk990547 = require("./990547.js"),
  Chunk79766 = require("./79766.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk2052 = require("./2052.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk63063 = require("./63063.js"),
  Chunk671728 = require("./671728.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk407367 = require("./407367.js");
let g = e => {
  let {
    componentId: t,
    promotionBannerMarketingComponentFields: n
  } = e, {
    analyticsLocations: g
  } = (0, d.ZP)(), E = (0, u.O)();
  (0, f.Z)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
    properties: {
      component_type: a.I.MARKETING_PAGE_BANNER,
      component_id: t
    }
  });
  let b = n,
    y = null != b.button ? (0, _.K)({
      buttonAction: b.button.buttonAction,
      analyticsLocations: g,
      analyticsLocation: E.location
    }) : true;
  return (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)("div", {
      className: h.asset,
      children: (0, r.jsx)(c.Eep, {
        src: b.assetUrl,
        width: 96,
        height: 96
      })
    }), (0, r.jsxs)("div", {
      className: h.bannerContent,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: b.header
      }), (0, r.jsx)(s.xvT, {
        variant: "text-md/medium",
        color: "text-subtle",
        className: h.bannerDescription,
        children: b.body
      }), (0, r.jsx)(s.xvT, {
        variant: "text-md/medium",
        color: "text-subtle",
        className: h.bannerDescription,
        children: m.intl.format(m.t.mYS7uY, {
          helpCenterLink: p.Z.getArticleURL(b.helpArticleId)
        })
      })]
    }), null != b.button && (0, r.jsx)("div", {
      className: h.buttonContainer,
      children: (0, r.jsx)(l.zxk, {
        variant: "expressive",
        size: "md",
        onClick: y,
        text: b.button.copy,
        icon: o.SrA
      })
    })]
  })
}
/** Chunk was on web.js **/
/** chunk id: 179918, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => y
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk990547 = require("./990547.js"),
  Chunk79766 = require("./79766.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk740111 = require("./740111.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk2052 = require("./2052.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk63063 = require("./63063.js"),
  Chunk671728 = require("./671728.js"),
  Chunk115324 = require("./115324.js"),
  Chunk45509 = require("./45509.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk407367 = require("./407367.js");
let y = e => {
  var t, n;
  let {
    componentId: y,
    promotionBannerMarketingComponentFields: O
  } = e, {
    analyticsLocations: v
  } = (0, f.ZP)(), S = (0, d.O)();
  (0, p.Z)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
    properties: {
      component_type: a.I.MARKETING_PAGE_BANNER,
      component_id: y
    }
  });
  let I = O,
    T = (0, g.$C)("marketing_page_banner"),
    C = (0, h.K)({
      buttonAction: T.treatment === g.IA.PLAN_SELECTION ? l.Wc.OPEN_PLAN_SELECTION_MODAL : null != (n = null == (t = I.button) ? true : t.buttonAction) ? n : l.Wc.OPEN_TIER_2_PAYMENT_MODAL,
      analyticsLocations: v,
      analyticsLocation: S.location
    }),
    A = (0, m.$)(I.body);
  return (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsx)("div", {
      className: b.asset,
      children: (0, r.jsx)(u.Eep, {
        src: I.assetUrl,
        width: 96,
        height: 96,
        className: b.assetImage
      })
    }), (0, r.jsxs)("div", {
      className: b.bannerContent,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: I.header
      }), (0, r.jsxs)(s.xvT, {
        variant: "text-md/medium",
        color: "text-subtle",
        className: b.bannerDescription,
        children: [A, "" !== I.helpArticleId && (0, r.jsxs)(r.Fragment, {
          children: ["\xa0", (0, r.jsx)(u.eee, {
            className: b.termsApplyAnchor,
            href: _.Z.getArticleURL(I.helpArticleId),
            children: E.intl.string(E.t["sBp+u0"])
          })]
        })]
      })]
    }), null != I.button && (0, r.jsx)("div", {
      className: b.buttonContainer,
      children: (0, r.jsx)(c.zxk, {
        variant: "expressive",
        size: "md",
        onClick: C,
        text: I.button.copy,
        icon: o.NitroWheelIcon
      })
    })]
  })
}
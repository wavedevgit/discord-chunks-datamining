/** Chunk was on web.js **/
/** chunk id: 179918, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
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
let O = e => {
  var t, n;
  let {
    componentId: O,
    promotionBannerMarketingComponentFields: v
  } = e, {
    analyticsLocations: S
  } = (0, p.ZP)(), I = (0, f.O)();
  (0, _.Z)({
    type: a.ImpressionTypes.VIEW,
    name: a.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
    properties: {
      component_type: o.I.MARKETING_PAGE_BANNER,
      component_id: O
    }
  });
  let T = v,
    C = (0, E.$C)("marketing_page_banner"),
    A = (0, m.K)({
      buttonAction: C.treatment === E.IA.PLAN_SELECTION ? c.Wc.OPEN_PLAN_SELECTION_MODAL : null != (n = null == (t = T.button) ? true : t.buttonAction) ? n : c.Wc.OPEN_TIER_2_PAYMENT_MODAL,
      analyticsLocations: S,
      analyticsLocation: I.location
    }),
    N = i.useMemo(() => (0, g.h)(T.body), [T.body]);
  return (0, r.jsxs)("div", {
    className: y.container,
    children: [(0, r.jsx)("div", {
      className: y.asset,
      children: (0, r.jsx)(d.Eep, {
        src: T.assetUrl,
        width: 96,
        height: 96
      })
    }), (0, r.jsxs)("div", {
      className: y.bannerContent,
      children: [(0, r.jsx)(l.X6q, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: T.header
      }), (0, r.jsxs)(l.xvT, {
        variant: "text-md/medium",
        color: "text-subtle",
        className: y.bannerDescription,
        children: [N, "" !== T.helpArticleId && (0, r.jsxs)(r.Fragment, {
          children: ["\xa0", (0, r.jsx)(d.eee, {
            className: y.termsApplyAnchor,
            href: h.Z.getArticleURL(T.helpArticleId),
            children: b.intl.string(b.t["sBp+u0"])
          })]
        })]
      })]
    }), null != T.button && (0, r.jsx)("div", {
      className: y.buttonContainer,
      children: (0, r.jsx)(u.zxk, {
        variant: "expressive",
        size: "md",
        onClick: A,
        text: T.button.copy,
        icon: s.NitroWheelIcon
      })
    })]
  })
}
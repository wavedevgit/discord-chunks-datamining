/** Chunk was on web.js **/
/** chunk id: 371764, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk110259 = require("./110259.js"),
  Chunk877624 = require("./877624.js"),
  Chunk934551 = require("./934551.js"),
  Chunk158954 = require("./158954.js"),
  Chunk232582 = require("./232582.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk212245 = require("./212245.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk975571 = require("./975571.js"),
  Chunk498470 = require("./498470.js"),
  Chunk637706 = require("./637706.js"),
  Chunk895163 = require("./895163.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk122506 = require("./122506.js");
let b = e => {
  var t, n;
  let {
    componentId: b,
    promotionBannerMarketingComponentFields: O
  } = e, {
    analyticsLocations: v
  } = (0, f.Ay)(), A = (0, d.p)();
  (0, p.A)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
    properties: {
      component_type: a.C.MARKETING_PAGE_BANNER,
      component_id: b
    }
  });
  let I = O,
    S = (0, g.Xn)("marketing_page_banner"),
    T = (0, h.h)({
      buttonAction: S.treatment === g.tz.PLAN_SELECTION ? l.dz.OPEN_PLAN_SELECTION_MODAL : null != (t = null == (n = I.button) ? true : n.buttonAction) ? t : l.dz.OPEN_TIER_2_PAYMENT_MODAL,
      analyticsLocations: v,
      analyticsLocation: A.location
    }),
    C = (0, m.a)(I.body);
  return (0, r.jsxs)("div", {
    className: y.kL,
    children: [(0, r.jsx)("div", {
      className: y.LY,
      children: (0, r.jsx)(u._V3, {
        src: I.assetUrl,
        width: 96,
        height: 96,
        className: y.ot
      })
    }), (0, r.jsxs)("div", {
      className: y.IH,
      children: [(0, r.jsx)(o.DZT, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: I.header
      }), (0, r.jsxs)(o.EYj, {
        variant: "text-md/medium",
        color: "text-subtle",
        className: y.tb,
        children: [C, "" !== I.helpArticleId && (0, r.jsxs)(r.Fragment, {
          children: ["\xa0", (0, r.jsx)(u.MzZ, {
            className: y.$T,
            href: _.A.getArticleURL(I.helpArticleId),
            children: E.intl.string(E.t["sBp+u0"])
          })]
        })]
      })]
    }), null != I.button && (0, r.jsx)("div", {
      className: y.UD,
      children: (0, r.jsx)(c.$nd, {
        variant: "expressive",
        size: "md",
        onClick: T,
        text: I.button.copy,
        icon: s.NitroWheelIcon
      })
    })]
  })
}
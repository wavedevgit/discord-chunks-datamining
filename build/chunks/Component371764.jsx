/** Chunk was on 60667 **/
/** chunk id: 371764, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => E
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
let E = e => {
  var t, n;
  let {
    componentId: E,
    promotionBannerMarketingComponentFields: x
  } = e, {
    analyticsLocations: O
  } = (0, _.Ay)(), C = (0, u.p)();
  (0, p.A)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
    properties: {
      component_type: l.C.MARKETING_PAGE_BANNER,
      component_id: E
    }
  });
  let I = (0, f.Xn)("marketing_page_banner"),
    T = (0, g.h)({
      buttonAction: I.treatment === f.tz.PLAN_SELECTION ? o.dz.OPEN_PLAN_SELECTION_MODAL : null != (t = null == (n = x.button) ? true : n.buttonAction) ? t : o.dz.OPEN_TIER_2_PAYMENT_MODAL,
      analyticsLocations: O,
      analyticsLocation: C.location
    }),
    S = (0, A.a)(x.body);
  return (0, r.jsxs)("div", {
    className: b.kL,
    children: [(0, r.jsx)("div", {
      className: b.LY,
      children: (0, r.jsx)(d._V3, {
        src: x.assetUrl,
        width: 96,
        height: 96,
        className: b.ot
      })
    }), (0, r.jsxs)("div", {
      className: b.IH,
      children: [(0, r.jsx)(a.DZT, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: x.header
      }), (0, r.jsxs)(a.EYj, {
        variant: "text-md/medium",
        color: "text-subtle",
        className: b.tb,
        children: [S, "" !== x.helpArticleId && (0, r.jsxs)(r.Fragment, {
          children: ["\xa0", (0, r.jsx)(d.MzZ, {
            className: b.$T,
            href: m.A.getArticleURL(x.helpArticleId),
            children: h.intl.string(h.t["sBp+u0"])
          })]
        })]
      })]
    }), null != x.button && (0, r.jsx)("div", {
      className: b.UD,
      children: (0, r.jsx)(c.$nd, {
        variant: "expressive",
        size: "md",
        onClick: T,
        text: x.button.copy,
        icon: s.NitroWheelIcon
      })
    })]
  })
}
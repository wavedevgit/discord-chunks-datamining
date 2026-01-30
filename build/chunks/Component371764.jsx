/** Chunk was on 78376 **/
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
    promotionBannerMarketingComponentFields: O
  } = e, {
    analyticsLocations: C
  } = (0, _.Ay)(), x = (0, u.p)();
  (0, p.A)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
    properties: {
      component_type: l.C.MARKETING_PAGE_BANNER,
      component_id: E
    }
  });
  let S = (0, f.Xn)("marketing_page_banner"),
    T = (0, g.h)({
      buttonAction: S.treatment === f.tz.PLAN_SELECTION ? o.dz.OPEN_PLAN_SELECTION_MODAL : null != (t = null == (n = O.button) ? true : n.buttonAction) ? t : o.dz.OPEN_TIER_2_PAYMENT_MODAL,
      analyticsLocations: C,
      analyticsLocation: x.location
    }),
    I = (0, A.a)(O.body);
  return (0, r.jsxs)("div", {
    className: h.kL,
    children: [(0, r.jsx)("div", {
      className: h.LY,
      children: (0, r.jsx)(d._V3, {
        src: O.assetUrl,
        width: 96,
        height: 96,
        className: h.ot
      })
    }), (0, r.jsxs)("div", {
      className: h.IH,
      children: [(0, r.jsx)(a.DZT, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: O.header
      }), (0, r.jsxs)(a.EYj, {
        variant: "text-md/medium",
        color: "text-subtle",
        className: h.tb,
        children: [I, "" !== O.helpArticleId && (0, r.jsxs)(r.Fragment, {
          children: ["\xa0", (0, r.jsx)(d.MzZ, {
            className: h.$T,
            href: m.A.getArticleURL(O.helpArticleId),
            children: b.intl.string(b.t["sBp+u0"])
          })]
        })]
      })]
    }), null != O.button && (0, r.jsx)("div", {
      className: h.UD,
      children: (0, r.jsx)(c.$nd, {
        variant: "expressive",
        size: "md",
        onClick: T,
        text: O.button.copy,
        icon: s.NitroWheelIcon
      })
    })]
  })
}
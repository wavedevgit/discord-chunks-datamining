/** Chunk was on web.js **/
/** chunk id: 219794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk110259 = require("./110259.js"),
  Chunk877624 = require("./877624.js"),
  Chunk397927 = require("./397927.js"),
  Chunk139286 = require("./139286.js"),
  Chunk602852 = require("./602852.js");
let c = e => {
  let {
    componentId: t,
    promotionBannerMarketingComponentFields: n
  } = e;
  return (0, s.A)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
    properties: {
      component_type: a.C.PAYMENT_MODAL_BANNER,
      component_id: t
    }
  }), (0, r.jsx)("div", {
    className: l.k,
    children: (0, r.jsxs)("div", {
      className: l.Q,
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)(o._V3, {
          src: n.assetUrl,
          width: 48,
          height: 48
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-strong",
        children: n.body
      })]
    })
  })
}
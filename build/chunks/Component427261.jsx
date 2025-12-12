/** Chunk was on web.js **/
/** chunk id: 427261, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk990547 = require("./990547.js"),
  Chunk79766 = require("./79766.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk839683 = require("./839683.js");
let c = e => {
  let {
    componentId: t,
    promotionBannerMarketingComponentFields: n
  } = e;
  return (0, s.Z)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
    properties: {
      component_type: o.I.PAYMENT_MODAL_BANNER,
      component_id: t
    }
  }), (0, r.jsx)("div", {
    className: l.container,
    children: (0, r.jsxs)("div", {
      className: l.content,
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)(a.Eep, {
          src: n.assetUrl,
          width: 48,
          height: 48
        })
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-strong",
        children: n.body
      })]
    })
  })
}
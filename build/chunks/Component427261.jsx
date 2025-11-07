/** Chunk was on 54400 **/
/** chunk id: 427261, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk990547 = require("./990547.js"),
  Chunk79766 = require("./79766.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk839683 = require("./839683.js");
let C = e => {
  let {
    componentId: t,
    promotionBannerMarketingComponentFields: n
  } = e;
  return (0, o.Z)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
    properties: {
      component_type: l.I.PAYMENT_MODAL_BANNER,
      component_id: t
    }
  }), (0, r.jsx)("div", {
    className: s.container,
    children: (0, r.jsxs)("div", {
      className: s.content,
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)(a.Eep, {
          src: n.assetUrl,
          width: 48,
          height: 48
        })
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-primary",
        children: n.body
      })]
    })
  })
}
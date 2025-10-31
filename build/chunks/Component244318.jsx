/** Chunk was on web.js **/
/** chunk id: 244318, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk608579 = require("./608579.jsx"),
  Chunk610005 = require("./610005.jsx"),
  Chunk793202 = require("./793202.js"),
  Chunk981631 = require("./981631.js");
let u = e => {
    let {
      skuId: t,
      isGift: n
    } = e, {
      analyticsLocations: l,
      loadId: u,
      handleClose: d,
      handleComplete: f,
      isFetching: _,
      sku: p
    } = (0, s.a0)({
      skuId: t,
      isGift: n,
      applicationId: c.XAJ
    });
    return _ || null == p ? (0, r.jsx)("div", {
      children: (0, r.jsx)(i.$jN, {
        type: i.RAz.SPINNING_CIRCLE
      })
    }) : (0, r.jsx)(a.Gt, {
      value: l,
      children: (0, r.jsx)(o.Z, {
        onClose: d,
        onComplete: f,
        transitionState: i.Dvm.ENTERED,
        loadId: u,
        skuId: t,
        isGift: n,
        analyticsLocations: l
      }, "".concat(t, "-").concat(n, "-").concat(u))
    })
  },
  d = (0, Chunk793202.F)(),
  f = {
    title: "Collectibles Checkout",
    stories: [{
      name: "Collectibles Checkout",
      id: "collectibles-checkout",
      component: u,
      controls: {
        skuId: {
          label: "SKU ID",
          type: "select",
          options: d.options,
          defaultValue: d.defaultValue
        },
        isGift: {
          label: "Is Gift",
          type: "boolean",
          defaultValue: false
        }
      }
    }]
  }
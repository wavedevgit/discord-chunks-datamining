/** Chunk was on web.js **/
/** chunk id: 473542, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk608579 = require("./608579.jsx"),
  Chunk127759 = require("./127759.jsx"),
  Chunk155992 = require("./155992.jsx"),
  Chunk3383 = require("./3383.js"),
  Chunk981631 = require("./981631.js");
let d = e => {
    let {
      skuId: t,
      isGift: n
    } = e, {
      analyticsLocations: s,
      loadId: c,
      handleClose: d,
      handleComplete: f,
      isFetching: _,
      sku: p
    } = (0, l.a0)({
      skuId: t,
      isGift: n,
      applicationId: u.XAJ
    });
    return _ || null == p ? (0, r.jsx)("div", {
      children: (0, r.jsx)(i.$jN, {
        type: i.RAz.SPINNING_CIRCLE
      })
    }) : (0, r.jsx)(a.Gt, {
      value: s,
      children: (0, r.jsx)(o.Z, {
        onClose: d,
        onComplete: f,
        transitionState: i.Dvm.ENTERED,
        loadId: c,
        skuId: t,
        isGift: n,
        analyticsLocations: s
      }, "".concat(t, "-").concat(n, "-").concat(c))
    })
  },
  f = (0, Chunk3383.F)(),
  _ = {
    title: "Collectibles Checkout",
    stories: [{
      name: "Collectibles Checkout",
      id: "collectibles-checkout",
      component: d,
      controls: {
        skuId: {
          label: "SKU ID",
          type: "select",
          options: f.options,
          defaultValue: f.defaultValue
        },
        isGift: {
          label: "Is Gift",
          type: "boolean",
          defaultValue: false
        }
      }
    }, Chunk127759._]
  }
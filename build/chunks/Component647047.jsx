/** Chunk was on web.js **/
/** chunk id: 647047, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk165823 = require("./165823.jsx"),
  Chunk777595 = require("./777595.jsx"),
  Chunk412463 = require("./412463.jsx"),
  Chunk689614 = require("./689614.js"),
  Chunk652215 = require("./652215.js");
let d = e => {
    let {
      skuId: t,
      isGift: n
    } = e, {
      analyticsLocations: o,
      loadId: c,
      handleClose: d,
      handleComplete: f,
      isFetching: p,
      sku: _
    } = (0, l.ud)({
      skuId: t,
      isGift: n,
      applicationId: u.FYj
    });
    return p || null == _ ? (0, r.jsx)("div", {
      children: (0, r.jsx)(i.y$y, {
        type: i.tVU.SPINNING_CIRCLE
      })
    }) : (0, r.jsx)(a.f5, {
      value: o,
      children: (0, r.jsx)(s.Ay, {
        onClose: d,
        onComplete: f,
        transitionState: i.ip4.ENTERED,
        loadId: c,
        skuId: t,
        isGift: n,
        analyticsLocations: o
      }, "".concat(t, "-").concat(n, "-").concat(c))
    })
  },
  f = (0, Chunk689614.R)(),
  p = {
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
    }, Chunk777595.e]
  }
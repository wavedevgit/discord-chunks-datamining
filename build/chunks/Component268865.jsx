/** Chunk was on 45620 **/
/** chunk id: 268865, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk567400 = require("./567400.js"),
  Chunk786040 = require("./786040.jsx"),
  Chunk143941 = require("./143941.jsx"),
  Chunk652100 = require("./652100.js");
let a = e => {
    let {
      product: t,
      selectedVariantIndex: n,
      isCardHovered: l
    } = e;
    return (0, r.jsx)(s.a, {
      product: t,
      selectedVariantIndex: n,
      isCardHovered: l,
      className: o.wishlistButton
    })
  },
  c = e => {
    let {
      skuId: t,
      selectedVariantIndex: n,
      isCardHovered: s
    } = e, o = (0, l.Y)({
      location: "ProductWishlistButton"
    }), c = (0, i.LJ)(t);
    return null != c && o ? (0, r.jsx)(a, {
      product: c,
      selectedVariantIndex: n,
      isCardHovered: s
    }) : null
  }
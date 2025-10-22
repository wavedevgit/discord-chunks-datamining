/** Chunk was on 45620 **/
/** chunk id: 268865, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk567400 = require("./567400.js"),
  Chunk786040 = require("./786040.js"),
  Chunk143941 = require("./143941.jsx"),
  Chunk652100 = require("./652100.js");
let o = e => {
    let {
      product: t,
      selectedVariantIndex: n,
      isCardHovered: l
    } = e;
    return (0, r.jsx)(a.a, {
      product: t,
      selectedVariantIndex: n,
      isCardHovered: l,
      className: s.wishlistButton
    })
  },
  c = e => {
    let {
      skuId: t,
      selectedVariantIndex: n,
      isCardHovered: a
    } = e, s = (0, l.Y)({
      location: "ProductWishlistButton"
    }), c = (0, i.LJ)(t);
    return null != c && s ? (0, r.jsx)(o, {
      product: c,
      selectedVariantIndex: n,
      isCardHovered: a
    }) : null
  }
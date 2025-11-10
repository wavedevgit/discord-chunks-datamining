/** Chunk was on 45620 **/
/** chunk id: 268865, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk567400 = require("./567400.js"),
  Chunk429368 = require("./429368.js"),
  Chunk786040 = require("./786040.js"),
  Chunk143941 = require("./143941.jsx"),
  Chunk652100 = require("./652100.js");
let c = e => {
    let {
      product: t,
      selectedVariantIndex: n,
      isCardHovered: l
    } = e;
    return (0, r.jsx)(a.a, {
      product: t,
      selectedVariantIndex: n,
      isCardHovered: l,
      className: o.wishlistButton
    })
  },
  u = e => {
    let {
      skuId: t,
      isCardHovered: n
    } = e, a = (0, l.Y)({
      location: "ProductWishlistButton"
    }), o = (0, s.LJ)(t), u = (0, i.o)(o);
    return null != o && a ? (0, r.jsx)(c, {
      product: o,
      selectedVariantIndex: u,
      isCardHovered: n
    }) : null
  }
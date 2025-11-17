/** Chunk was on 45620 **/
/** chunk id: 268865, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
    return (0, r.jsx)(o.a, {
      product: t,
      selectedVariantIndex: n,
      isCardHovered: l,
      className: s.wishlistButton
    })
  },
  u = e => {
    let {
      skuId: t,
      isCardHovered: n
    } = e, o = (0, l.Y)({
      location: "ProductWishlistButton"
    }), s = (0, a.LJ)(t), u = (0, i.o)(s);
    return null != s && o ? (0, r.jsx)(c, {
      product: s,
      selectedVariantIndex: u,
      isCardHovered: n
    }) : null
  }
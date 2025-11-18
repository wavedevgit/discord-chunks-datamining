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
  Chunk619550 = require("./619550.js");
let c = e => {
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
  u = e => {
    let {
      skuId: t,
      isCardHovered: n
    } = e, s = (0, l.Y)({
      location: "ProductWishlistButton"
    }), o = (0, a.LJ)(t), u = (0, i.o)(o);
    return null != o && s ? (0, r.jsx)(c, {
      product: o,
      selectedVariantIndex: u,
      isCardHovered: n
    }) : null
  }
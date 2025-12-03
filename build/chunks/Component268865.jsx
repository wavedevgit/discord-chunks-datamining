/** Chunk was on 88282 **/
/** chunk id: 268865, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
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
    return (0, a.jsx)(s.a, {
      product: t,
      selectedVariantIndex: n,
      isCardHovered: l,
      className: o.wishlistButton
    })
  },
  d = e => {
    let {
      skuId: t,
      isCardHovered: n
    } = e, s = (0, l.Y)({
      location: "ProductWishlistButton"
    }), o = (0, i.LJ)(t), d = (0, r.o)(o);
    return null != o && s ? (0, a.jsx)(c, {
      product: o,
      selectedVariantIndex: d,
      isCardHovered: n
    }) : null
  }
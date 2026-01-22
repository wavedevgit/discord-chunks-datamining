/** Chunk was on 41469 **/
/** chunk id: 304186, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk964486 = require("./964486.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk881266 = require("./881266.jsx"),
  Chunk920241 = require("./920241.jsx");

function a(e) {
  let {
    handleClose: t
  } = e, {
    guildProductListing: r,
    guildId: n
  } = (0, u.S)(), {
    selectedSkuPricePreview: a
  } = (0, c.P5)();
  return (0, l.Ay)(() => {
    o()(null != a, "selectedSkuPricePreview cannot be null"), (0, i.U)({
      guildId: n,
      guildProductListingId: r.id,
      skuPricePreview: a
    }), t()
  }), null
}
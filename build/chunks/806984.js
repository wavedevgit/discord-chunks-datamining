/** Chunk was on 38002 **/
/** chunk id: 806984, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk493773 = require("./493773.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk390917 = require("./390917.jsx"),
  Chunk464797 = require("./464797.jsx");

function a(e) {
  let {
    handleClose: t
  } = e, {
    guildProductListing: n,
    guildId: r
  } = (0, u._)(), {
    selectedSkuPricePreview: a
  } = (0, l.JL)();
  return (0, c.ZP)(() => {
    o()(null != a, "selectedSkuPricePreview cannot be null"), (0, i.u)({
      guildId: r,
      guildProductListingId: n.id,
      skuPricePreview: a
    }), t()
  }), null
}
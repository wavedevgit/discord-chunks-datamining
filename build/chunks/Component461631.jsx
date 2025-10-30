/** Chunk was on 94758 **/
/** chunk id: 461631, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk277511 = require("./277511.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk624285 = require("./624285.js");

function h(e) {
  let {
    item: t,
    wishlistId: r,
    iconSize: i = "refresh_sm",
    className: h
  } = e, {
    analyticsLocations: p
  } = (0, c.ZP)(), I = async () => {
    try {
      await o.Z.removeSkuFromWishlist(r, t.skuId, p)
    } catch (e) {
      (0, u.L$)(d.qb.SOMETHING_WENT_WRONG)
    }
  };
  return (0, n.jsx)(l.u, {
    text: f.intl.string(f.t.jTW016),
    children: (0, n.jsx)(a.P3F, {
      onClick: I,
      "aria-label": f.intl.string(f.t.jTW016),
      className: s()(h, m.clickable),
      children: (0, n.jsx)(a.XHJ, {
        size: i,
        className: m.icon,
        color: a.TVs.colors.ICON_FEEDBACK_CRITICAL
      })
    })
  })
}
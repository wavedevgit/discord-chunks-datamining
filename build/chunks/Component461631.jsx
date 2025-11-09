/** Chunk was on 94072 **/
/** chunk id: 461631, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk277511 = require("./277511.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk624285 = require("./624285.js");

function p(e) {
  let {
    item: t,
    wishlistId: r,
    iconSize: i = "refresh_sm",
    className: p
  } = e, {
    analyticsLocations: b
  } = (0, a.ZP)(), m = async () => {
    try {
      await c.Z.removeSkuFromWishlist(r, t.skuId, b)
    } catch (e) {
      (0, u.L$)(f.qb.SOMETHING_WENT_WRONG)
    }
  };
  return (0, n.jsx)(s.u, {
    text: d.intl.string(d.t.jTW016),
    children: (0, n.jsx)(o.P3F, {
      onClick: m,
      "aria-label": d.intl.string(d.t.jTW016),
      className: l()(p, O.clickable),
      children: (0, n.jsx)(o.XHJ, {
        size: i,
        className: O.icon,
        color: o.TVs.colors.ICON_FEEDBACK_CRITICAL
      })
    })
  })
}
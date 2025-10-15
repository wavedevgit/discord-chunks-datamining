/** Chunk was on 36073 **/
/** chunk id: 461631, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk277511 = require("./277511.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk747615 = require("./747615.js");

function p(e) {
  let {
    item: t,
    wishlistId: r,
    iconSize: i = "refresh_sm",
    className: p
  } = e, {
    analyticsLocations: b
  } = (0, c.ZP)(), m = async () => {
    try {
      await s.Z.removeSkuFromWishlist(r, t.skuId, b)
    } catch (e) {
      (0, u.L$)(d.qb.SOMETHING_WENT_WRONG)
    }
  };
  return (0, n.jsx)(o.u, {
    text: g.intl.string(g.t.jTW019),
    children: (0, n.jsx)(l.P3F, {
      onClick: m,
      "aria-label": g.intl.string(g.t.jTW019),
      className: a()(p, f.clickable),
      children: (0, n.jsx)(l.XHJ, {
        size: i,
        className: f.icon,
        color: l.TVs.colors.ICON_FEEDBACK_CRITICAL
      })
    })
  })
}
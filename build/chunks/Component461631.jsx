/** Chunk was on 36529 **/
/** chunk id: 461631, original params: e,t,n (module,exports,require) **/
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
    wishlistId: n,
    iconSize: i = "refresh_sm",
    className: p
  } = e, {
    analyticsLocations: b
  } = (0, c.ZP)(), m = async () => {
    try {
      await s.Z.removeSkuFromWishlist(n, t.skuId, b)
    } catch (e) {
      (0, u.L$)(d.qb.SOMETHING_WENT_WRONG)
    }
  };
  return (0, r.jsx)(o.u, {
    text: f.intl.string(f.t.jTW019),
    children: (0, r.jsx)(l.P3F, {
      onClick: m,
      "aria-label": f.intl.string(f.t.jTW019),
      className: a()(p, g.clickable),
      children: (0, r.jsx)(l.XHJ, {
        size: i,
        className: g.icon,
        color: l.TVs.colors.ICON_FEEDBACK_CRITICAL
      })
    })
  })
}
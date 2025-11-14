/** Chunk was on 65354 **/
/** chunk id: 461631, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
  Chunk747615 = require("./747615.js");

function h(e) {
  let {
    item: t,
    wishlistId: n,
    iconSize: i = "refresh_sm",
    className: h
  } = e, {
    analyticsLocations: g
  } = (0, s.ZP)(), m = async () => {
    try {
      await c.Z.removeSkuFromWishlist(n, t.skuId, g)
    } catch (e) {
      (0, u.L$)(d.qb.SOMETHING_WENT_WRONG)
    }
  };
  return (0, r.jsx)(o.u, {
    text: p.intl.string(p.t.jTW016),
    children: (0, r.jsx)(a.P3F, {
      onClick: m,
      "aria-label": p.intl.string(p.t.jTW016),
      className: l()(h, f.clickable),
      children: (0, r.jsx)(a.XHJ, {
        size: i,
        className: f.icon,
        color: a.TVs.colors.ICON_FEEDBACK_CRITICAL
      })
    })
  })
}
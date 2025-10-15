/** Chunk was on 52974 **/
/** chunk id: 461631, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk277511 = require("./277511.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk747615 = require("./747615.js");

function S(e) {
  let {
    item: t,
    wishlistId: i,
    iconSize: s = "refresh_sm",
    className: S
  } = e, {
    analyticsLocations: f
  } = (0, u.ZP)(), m = async () => {
    try {
      await c.Z.removeSkuFromWishlist(i, t.skuId, f)
    } catch (e) {
      (0, o.L$)(d.qb.SOMETHING_WENT_WRONG)
    }
  };
  return (0, l.jsx)(n.u, {
    text: h.intl.string(h.t.jTW019),
    children: (0, l.jsx)(a.P3F, {
      onClick: m,
      "aria-label": h.intl.string(h.t.jTW019),
      className: r()(S, I.clickable),
      children: (0, l.jsx)(a.XHJ, {
        size: s,
        className: I.icon,
        color: a.TVs.colors.ICON_FEEDBACK_CRITICAL
      })
    })
  })
}
/** Chunk was on 37786 **/
/** chunk id: 461631, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
  Chunk624285 = require("./624285.js");

function h(e) {
  let {
    item: t,
    wishlistId: n,
    iconSize: i = "refresh_sm",
    className: h
  } = e, {
    analyticsLocations: _
  } = (0, o.ZP)(), m = async () => {
    try {
      await d.Z.removeSkuFromWishlist(n, t.skuId, _)
    } catch (e) {
      (0, c.L$)(C.qb.SOMETHING_WENT_WRONG)
    }
  };
  return (0, r.jsx)(l.u, {
    text: u.intl.string(u.t.jTW019),
    children: (0, r.jsx)(s.P3F, {
      onClick: m,
      "aria-label": u.intl.string(u.t.jTW019),
      className: a()(h, p.clickable),
      children: (0, r.jsx)(s.XHJ, {
        size: i,
        className: p.icon,
        color: s.TVs.colors.ICON_FEEDBACK_CRITICAL
      })
    })
  })
}
/** Chunk was on web.js **/
/** chunk id: 461631, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk277511 = require("./277511.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk737343 = require("./737343.js");

function _(e) {
  let {
    item: t,
    wishlistId: n,
    iconSize: i = "refresh_sm",
    className: _
  } = e, {
    analyticsLocations: m
  } = (0, l.ZP)(), h = async () => {
    try {
      await c.Z.removeSkuFromWishlist(n, t.skuId, m)
    } catch (e) {
      (0, u.L$)(d.qb.SOMETHING_WENT_WRONG)
    }
  };
  return (0, r.jsx)(o.u, {
    text: f.intl.string(f.t.jTW016),
    children: (0, r.jsx)(s.P3F, {
      onClick: h,
      "aria-label": f.intl.string(f.t.jTW016),
      className: a()(_, p.clickable),
      children: (0, r.jsx)(s.XHJ, {
        size: i,
        className: p.icon,
        color: s.TVs.colors.ICON_FEEDBACK_CRITICAL
      })
    })
  })
}
/** Chunk was on web.js **/
/** chunk id: 941165, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk808247 = require("./808247.js"),
  Chunk384377 = require("./384377.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk616501 = require("./616501.js");

function _(e) {
  let {
    item: t,
    wishlistId: n,
    iconSize: i = "refresh_sm",
    className: _
  } = e, {
    analyticsLocations: h
  } = (0, l.Ay)(), m = async () => {
    try {
      await c.A.removeSkuFromWishlist(n, t.skuId, h)
    } catch (e) {
      (0, u.XA)(d.jM.SOMETHING_WENT_WRONG)
    }
  };
  return (0, r.jsx)(s.m, {
    text: f.intl.string(f.t.jTW016),
    children: (0, r.jsx)(o.DUT, {
      onClick: m,
      "aria-label": f.intl.string(f.t.jTW016),
      className: a()(_, p.v),
      children: (0, r.jsx)(o.ucK, {
        size: i,
        className: p.K,
        color: o.LU0.colors.ICON_FEEDBACK_CRITICAL
      })
    })
  })
}
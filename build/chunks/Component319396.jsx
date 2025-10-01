/** Chunk was on 56848 **/
/** chunk id: 319396, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk541699 = require("./541699.js"),
  Chunk594174 = require("./594174.js"),
  Chunk621853 = require("./621853.js"),
  Chunk835255 = require("./835255.jsx"),
  Chunk465004 = require("./465004.js");

function u(e) {
  let {
    item: t,
    profileOwner: r,
    wishlistId: i,
    isOwner: a
  } = e;
  return (0, l.Q)(t) ? (0, n.jsx)(o.Z, {
    item: t,
    profileOwner: r,
    wishlistId: i,
    isOwner: a
  }) : null
}

function d(e) {
  let {
    items: t,
    profileOwner: r,
    isOwner: l
  } = e, o = a.default.getCurrentUser(), {
    defaultWishlistId: d
  } = (0, i.cj)([s.Z], () => ({
    defaultWishlistId: s.Z.getFirstWishlistId(r.id)
  }));
  return null == o || null == d ? null : (0, n.jsx)("ul", {
    className: c.grid,
    children: t.map(e => (0, n.jsx)("li", {
      children: (0, n.jsx)(u, {
        item: e,
        profileOwner: r,
        wishlistId: d,
        isOwner: l
      })
    }, e.skuId))
  })
}
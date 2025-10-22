/** Chunk was on 22325 **/
/** chunk id: 319396, original params: e,t,n (module,exports,require) **/
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
    profileOwner: n,
    wishlistId: i,
    isOwner: l
  } = e;
  return (0, a.Q)(t) ? (0, r.jsx)(s.Z, {
    item: t,
    profileOwner: n,
    wishlistId: i,
    isOwner: l
  }) : null
}

function d(e) {
  let {
    items: t,
    profileOwner: n,
    isOwner: a
  } = e, s = l.default.getCurrentUser(), {
    defaultWishlistId: d
  } = (0, i.cj)([o.Z], () => ({
    defaultWishlistId: o.Z.getFirstWishlistId(n.id)
  }));
  return null == s || null == d ? null : (0, r.jsx)("ul", {
    className: c.grid,
    children: t.map(e => (0, r.jsx)("li", {
      children: (0, r.jsx)(u, {
        item: e,
        profileOwner: n,
        wishlistId: d,
        isOwner: a
      })
    }, e.skuId))
  })
}
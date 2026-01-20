/** Chunk was on 22979 **/
/** chunk id: 362416, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk580747 = require("./580747.js"),
  Chunk621853 = require("./621853.js"),
  Chunk594174 = require("./594174.js"),
  Chunk699955 = require("./699955.js"),
  Chunk692825 = require("./692825.js"),
  Chunk812797 = require("./812797.js"),
  Chunk582113 = require("./582113.js");

function u(e) {
  let {
    location: t
  } = e, n = (0, s.cZ)({
    location: t
  }), u = (0, o.w)({
    location: t
  }), m = (0, a.e7)([l.default], () => l.default.getCurrentUser()), p = (0, a.e7)([i.Z], () => null != m ? i.Z.getFirstWishlistId(m.id) : null), h = (0, r.Z)("wishlist_user_profile_account_popout_upsell"), f = (0, c.fR)({
    gameIds: d.RI
  }), b = (0, c.Bz)({
    gameIds: d.RI
  });
  return u && n && null == p && (b || f) || h
}
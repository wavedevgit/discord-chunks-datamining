/** Chunk was on 84249 **/
/** chunk id: 362416, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk580747 = require("./580747.js"),
  Chunk594190 = require("./594190.js"),
  Chunk621853 = require("./621853.js"),
  Chunk594174 = require("./594174.js"),
  Chunk699955 = require("./699955.js"),
  Chunk692825 = require("./692825.js"),
  Chunk582113 = require("./582113.js");

function u(e) {
  let {
    location: t
  } = e, n = (0, o.cZ)({
    location: t
  }), u = (0, c.w)({
    location: t
  }), m = (0, a.e7)([s.default], () => s.default.getCurrentUser()), p = (0, a.e7)([l.Z], () => null != m ? l.Z.getFirstWishlistId(m.id) : null), h = (0, r.Z)("wishlist_user_profile_account_popout_upsell"), f = (0, a.e7)([i.ZP], () => i.ZP.getRunningGames().some(e => null != e.id && d.RI.has(e.id) && i.ZP.isDetectionEnabled(e)) || i.ZP.getGamesSeen(false, false).some(e => null != e.id && d.RI.has(e.id)));
  return u && n && null == p && f || h
}
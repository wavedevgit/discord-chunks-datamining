/** Chunk was on 65298 **/
/** chunk id: 948011, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk354328 = require("./354328.js"),
  Chunk622543 = require("./622543.js"),
  Chunk287809 = require("./287809.js"),
  Chunk916023 = require("./916023.js"),
  Chunk816176 = require("./816176.js"),
  Chunk501838 = require("./501838.js"),
  Chunk188275 = require("./188275.js");

function u(e) {
  let {
    location: t
  } = e, n = (0, s.kt)({
    location: t
  }), u = (0, o.d)({
    location: t
  }), m = (0, a.bG)([i.default], () => i.default.getCurrentUser()), p = (0, a.bG)([r.A], () => null != m ? r.A.getFirstWishlistId(m.id) : null), h = (0, l.A)("wishlist_user_profile_account_popout_upsell"), x = (0, c.hJ)({
    gameIds: d.sQ
  }), g = (0, c.ok)({
    gameIds: d.sQ
  });
  return u && n && null == p && (g || x) || h
}
/** Chunk was on 38663 **/
/** chunk id: 898616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk721932 = require("./721932.js"),
  Chunk71393 = require("./71393.js"),
  Chunk871123 = require("./871123.js"),
  Chunk916023 = require("./916023.js"),
  Chunk501838 = require("./501838.js"),
  Chunk188275 = require("./188275.js");

function d(e) {
  var t;
  let {
    location: n,
    wishlist: d
  } = e, f = (0, s.kt)({
    location: n
  }), p = r.useMemo(() => (null == d ? true : d.userId) != null ? [d.userId] : [], [d]), g = (0, l.bG)([a.A], () => a.A.getGuild((0, o.zf)())), m = null != (t = null == d ? true : d.items.some(e => (0, i.$)(e))) && t, b = (0, c.gT)({
    gameIds: u.sQ,
    userIds: p
  }), y = (0, c.K6)({
    gameIds: u.sQ,
    userIds: p
  }), O = (0, c.l1)({
    userIds: p,
    guildIdsWithGameStores: u.tC
  }), j = (0, c.hJ)({
    gameIds: u.sQ
  }), x = (0, c.ok)({
    gameIds: u.sQ
  });
  return f && (null != g || x || m || b || y || O || j)
}
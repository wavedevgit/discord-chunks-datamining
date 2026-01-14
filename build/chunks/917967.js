/** Chunk was on 90882 **/
/** chunk id: 917967, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk321947 = require("./321947.js"),
  Chunk430824 = require("./430824.js"),
  Chunk164670 = require("./164670.js"),
  Chunk699955 = require("./699955.js"),
  Chunk812797 = require("./812797.js"),
  Chunk582113 = require("./582113.js");

function d(e) {
  var t;
  let {
    location: n,
    wishlist: d
  } = e, f = (0, c.cZ)({
    location: n
  }), g = r.useMemo(() => (null == d ? true : d.userId) != null ? [d.userId] : [], [d]), p = (0, i.e7)([a.Z], () => a.Z.getGuild((0, o.ac)())), m = null != (t = null == d ? true : d.items.some(e => (0, l.F)(e))) && t, b = (0, s.VO)({
    gameIds: u.RI,
    userIds: g
  }), y = (0, s.zc)({
    gameIds: u.RI,
    userIds: g
  }), h = (0, s.MM)({
    userIds: g,
    guildIdsWithGameStores: u.$Y
  }), j = (0, s.fR)({
    gameIds: u.RI
  }), O = (0, s.Bz)({
    gameIds: u.RI
  });
  return f && (null != p || O || m || b || y || h || j)
}
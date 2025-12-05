/** Chunk was on 34740 **/
/** chunk id: 417317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js"),
  Chunk699955 = require("./699955.js");

function c(e) {
  let {
    guildId: t,
    location: n
  } = e, c = (0, s.cZ)({
    location: n
  }), u = (0, r.e7)([l.Z], () => l.Z.getGuild(null != t ? t : null), [t]), d = (0, r.e7)([o.Z], () => null != u ? o.Z.getStorefrontData(u.id) : true);
  return i.useEffect(() => {
    (null == u ? true : u.id) != null && c && (0, a.YL)(null == u ? true : u.id, false)
  }, [null == u ? true : u.id, d, c]), d
}
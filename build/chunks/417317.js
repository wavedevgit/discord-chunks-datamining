/** Chunk was on 76334 **/
/** chunk id: 417317, original params: e,i,t (module,exports,require) **/
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
    guildId: i,
    location: t
  } = e, c = (0, o.cZ)({
    location: t
  }), d = (0, r.e7)([l.Z], () => l.Z.getGuild(null != i ? i : null), [i]), u = (0, r.e7)([s.Z], () => null != d ? s.Z.getStorefrontData(d.id) : true);
  return n.useEffect(() => {
    (null == d ? true : d.id) != null && c && (0, a.YL)(null == d ? true : d.id, false)
  }, [null == d ? true : d.id, u, c]), u
}
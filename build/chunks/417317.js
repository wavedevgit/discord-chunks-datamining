/** Chunk was on 76334 **/
/** chunk id: 417317, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk70956 = require("./70956.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js"),
  Chunk699955 = require("./699955.js");
let d = 30 * Chunk70956.Z.Millis.MINUTE;

function u(e) {
  let {
    guildId: i,
    location: t
  } = e, l = (0, c.cZ)({
    location: t
  }), u = (0, r.e7)([a.Z], () => a.Z.getGuild(null != i ? i : null), [i]), m = (0, r.e7)([o.Z], () => null != u ? o.Z.getStorefrontData(u.id) : true);
  return n.useEffect(() => {
    if ((null == u ? true : u.id) == null || !l) return;
    let e = o.Z.getStorefrontData(null == u ? true : u.id);
    (null == e ? true : e.state) === "loading" || (null == e ? true : e.state) === "error" || (null == e ? true : e.state) === "fetched" && (null == e ? true : e.fetchedAt) != null && Date.now() - (null == e ? true : e.fetchedAt) < d || (0, s.YL)(null == u ? true : u.id)
  }, [null == u ? true : u.id, m, l]), m
}
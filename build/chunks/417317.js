/** Chunk was on 76334 **/
/** chunk id: 417317, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk70956 = require("./70956.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js");
let c = 30 * Chunk70956.Z.Millis.MINUTE;

function d(e) {
  let {
    guildId: t
  } = e, i = (0, r.e7)([l.Z], () => l.Z.getGuild(null != t ? t : null), [t]), a = (0, r.e7)([o.Z], () => null != i ? o.Z.getStorefrontData(i.id) : true);
  return n.useEffect(() => {
    if ((null == i ? true : i.id) == null) return;
    let e = o.Z.getStorefrontData(null == i ? true : i.id);
    (null == e ? true : e.state) === "loading" || (null == e ? true : e.state) === "fetched" && (null == e ? true : e.fetchedAt) != null && Date.now() - (null == e ? true : e.fetchedAt) < c || (0, s.YL)(null == i ? true : i.id)
  }, [null == i ? true : i.id, a]), a
}
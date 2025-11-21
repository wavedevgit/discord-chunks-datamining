/** Chunk was on 34740 **/
/** chunk id: 417317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk70956 = require("./70956.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js");
let c = 30 * Chunk70956.Z.Millis.MINUTE;

function u(e) {
  let {
    guildId: t
  } = e, n = (0, r.e7)([l.Z], () => l.Z.getGuild(null != t ? t : null), [t]), a = (0, r.e7)([s.Z], () => null != n ? s.Z.getStorefrontData(n.id) : true);
  return i.useEffect(() => {
    if ((null == n ? true : n.id) == null) return;
    let e = s.Z.getStorefrontData(null == n ? true : n.id);
    (null == e ? true : e.loading) || (null == e ? true : e.fetchedAt) != null && Date.now() - (null == e ? true : e.fetchedAt) < c || (0, o.YL)(null == n ? true : n.id)
  }, [null == n ? true : n.id]), a
}
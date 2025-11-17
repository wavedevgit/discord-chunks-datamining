/** Chunk was on 34740 **/
/** chunk id: 417317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk70956 = require("./70956.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js");
let s = 30 * Chunk70956.Z.Millis.MINUTE;

function c(e) {
  let {
    guildId: t
  } = e, n = (0, r.e7)([o.Z], () => null != t ? o.Z.getStorefrontData(t) : true);
  return i.useEffect(() => {
    if (null == t) return;
    let e = o.Z.getStorefrontData(t);
    (null == e ? true : e.loading) || (null == e ? true : e.fetchedAt) != null && Date.now() - (null == e ? true : e.fetchedAt) < s || (0, a.YL)(t)
  }, [t]), n
}
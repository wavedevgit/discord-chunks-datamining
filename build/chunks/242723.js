/** Chunk was on 45227 **/
/** chunk id: 242723, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk430824 = require("./430824.js"),
  Chunk164670 = require("./164670.js");

function d(e) {
  let {
    shouldFetchIfMissing: t
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, n = (0, o.K$)(e), d = null == e ? true : e.applicationId, c = (0, a.e7)([r.Z], () => null != d ? r.Z.getApplication(d) : null, [d]), u = null == c ? true : c.guildId, f = (0, a.e7)([s.Z], () => null != u ? s.Z.getGuild(u) : null, [u]);
  return i.useEffect(() => {
    n && t && null == f && null != e && l.ZP.fetchApplication(e.applicationId, true)
  }, [f, e, t, n]), n ? f : null
}
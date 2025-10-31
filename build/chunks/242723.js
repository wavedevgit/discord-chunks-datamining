/** Chunk was on 45227 **/
/** chunk id: 242723, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk430824 = require("./430824.js"),
  Chunk164670 = require("./164670.js");

function s(e) {
  let {
    shouldFetchIfMissing: t
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, n = (0, c.K$)(e), s = null == e ? true : e.applicationId, u = (0, i.e7)([a.Z], () => null != s ? a.Z.getApplication(s) : null, [s]), d = null == u ? true : u.guildId, f = (0, i.e7)([o.Z], () => null != d ? o.Z.getGuild(d) : null, [d]);
  return r.useEffect(() => {
    n && t && null == f && null != e && l.ZP.fetchApplication(e.applicationId, true)
  }, [f, e, t, n]), n ? f : null
}
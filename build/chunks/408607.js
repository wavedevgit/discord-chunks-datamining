/** Chunk was on 48330 **/
/** chunk id: 408607, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk686956 = require("./686956.js"),
  Chunk287809 = require("./287809.js");

function a(e) {
  let t = (0, r.bG)([s.default], () => s.default.getUser(null == e ? true : e.creator_id), [e]);
  return l.useEffect(() => {
    null == t && (null == e ? true : e.creator_id) != null && i.A.requestMembersById(e.guild_id, e.creator_id)
  }, [e, t]), t
}
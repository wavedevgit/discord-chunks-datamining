/** Chunk was on 34082 **/
/** chunk id: 978227, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk749210 = require("./749210.js"),
  Chunk594174 = require("./594174.js");

function a(e) {
  let t = (0, l.e7)([s.default], () => s.default.getUser(null == e ? true : e.creator_id), [e]);
  return r.useEffect(() => {
    null == t && (null == e ? true : e.creator_id) != null && i.Z.requestMembersById(e.guild_id, e.creator_id)
  }, [e, t]), t
}
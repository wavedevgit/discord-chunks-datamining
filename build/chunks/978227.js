/** Chunk was on web.js **/
/** chunk id: 978227, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk749210 = require("./749210.js"),
  Chunk594174 = require("./594174.js");

function s(e) {
  let t = (0, i.e7)([o.default], () => o.default.getUser(null == e ? true : e.creator_id), [e]);
  return r.useEffect(() => {
    null == t && (null == e ? true : e.creator_id) != null && a.Z.requestMembersById(e.guild_id, e.creator_id)
  }, [e, t]), t
}
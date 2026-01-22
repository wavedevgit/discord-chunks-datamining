/** Chunk was on web.js **/
/** chunk id: 408607, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk686956 = require("./686956.js"),
  Chunk287809 = require("./287809.js");

function o(e) {
  let t = (0, i.bG)([s.default], () => s.default.getUser(null == e ? true : e.creator_id), [e]);
  return r.useEffect(() => {
    null == t && (null == e ? true : e.creator_id) != null && a.A.requestMembersById(e.guild_id, e.creator_id)
  }, [e, t]), t
}
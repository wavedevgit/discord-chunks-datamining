/** Chunk was on web.js **/
/** chunk id: 600260, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk417597 = require("./417597.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk370480 = require("./370480.js");

function l(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null,
    l = arguments.length > 3 && true !== arguments[3] && arguments[3],
    c = (0, r.bG)([a.Ay], () => null != e ? a.Ay.getMember(e.id, t) : null, [e, t]),
    u = (0, r.bG)([i.A], () => i.A.getChannel(n), [n]),
    d = (0, r.bG)([i.A], () => i.A.getChannel(null == u ? true : u.parent_id), [u]),
    f = (0, r.bG)([o.A], () => null != e ? o.A.getSortedRoles(e.id) : true);
  return null == e || null == f || null == c ? null : (0, s._g)({
    guild: e,
    sortedGuildRoles: f,
    guildMember: c,
    channel: null != u && u.isThread() && null != d ? d : u,
    onlyChannelConnectionRoles: l
  })
}
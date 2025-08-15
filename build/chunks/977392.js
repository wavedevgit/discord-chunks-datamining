/** Chunk was on 31978 **/
/** chunk id: 977392, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk399606 = require("./399606.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk275759 = require("./275759.js");

function s(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null,
    s = arguments.length > 3 && true !== arguments[3] && arguments[3],
    c = (0, r.e7)([o.ZP], () => null != e ? o.ZP.getMember(e.id, t) : null, [e, t]),
    u = (0, r.e7)([l.Z], () => l.Z.getChannel(n), [n]),
    d = (0, r.e7)([l.Z], () => l.Z.getChannel(null == u ? true : u.parent_id), [u]),
    p = (0, r.e7)([i.Z], () => null != e ? i.Z.getSortedRoles(e.id) : true);
  return null == e || null == p || null == c ? null : (0, a.Ur)({
    guild: e,
    sortedGuildRoles: p,
    guildMember: c,
    channel: null != u && u.isThread() && null != d ? d : u,
    onlyChannelConnectionRoles: s
  })
}
/** Chunk was on 33648 **/
/** chunk id: 895442, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  if (!e.isPrivate()) {
    let t = a.Z.getGuild(e.guild_id);
    return null != t && t.features.has(i.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
  }
  return e.recipients.every(e => {
    let t = r.default.getUser(e);
    return null != t && t.isStaff()
  })
}

function o(e, t) {
  var n;
  if (!(null == (n = r.default.getCurrentUser()) ? true : n.isStaff())) returnfalse;
  let a = l.Z.getChannel(e.channel_id);
  return null != a && !!s(a) && t.some(e => {
    let t = l.Z.getChannel(e);
    return !(null == t || t.isPrivate()) && !s(t)
  })
}
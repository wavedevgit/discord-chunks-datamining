/** Chunk was on 43622 **/
/** chunk id: 938557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  if (!e.isPrivate()) {
    let t = r.A.getGuild(e.guild_id);
    return null != t && t.features.has(i.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
  }
  return e.recipients.every(e => {
    let t = a.default.getUser(e);
    return null != t && t.isStaff()
  })
}

function o(e, t) {
  var n;
  if (!(null == (n = a.default.getCurrentUser()) ? true : n.isStaff())) returnfalse;
  let r = l.A.getChannel(e.channel_id);
  return null != r && !!s(r) && t.some(e => {
    let t = l.A.getChannel(e);
    return !(null == t || t.isPrivate()) && !s(t)
  })
}
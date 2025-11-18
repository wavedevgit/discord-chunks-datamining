/** Chunk was on 63962 **/
/** chunk id: 683818, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => c,
  Z: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  let t = (0, r.e7)([l.Z], () => l.Z.getGuild(e.guildId)),
    n = (0, r.e7)([i.Z], () => i.Z.getChannel(e.channelId)),
    o = (0, r.e7)([a.Z], () => a.Z.can(s.Plq.ADMINISTRATOR, t)),
    c = (0, r.e7)([a.Z], () => a.Z.can(s.Plq.MANAGE_MESSAGES, n));
  return {
    isEntryAdmin: o,
    canEdit: o || c,
    canRemove: o || c
  }
}

function c(e) {
  return (0, r.e7)([a.Z], () => a.Z.can(s.Plq.SEND_MESSAGES, e))
}
/** Chunk was on 97476 **/
/** chunk id: 951539, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => p,
  so: () => h
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk159300 = require("./159300.js"),
  Chunk427679 = require("./427679.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk700785 = require("./700785.js"),
  Chunk924301 = require("./924301.js"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js");

function h(e) {
  let [n, t, a, h] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [o.ZP, l.Z, c.Z, r.Z];
  if ((0, u.Z2)(e)) returnfalse;
  let {
    guild_id: p,
    channel_id: m
  } = e, g = e.entity_type === b.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(m), v = a.getGuild(p), x = h.getStageInstanceByChannel(m);
  return !!(0, i.b)(d.Z, v, g, x) && null != g && function(e) {
    let [n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [l.Z], {
      entityType: t,
      channelId: a
    } = "entity_type" in e ? {
      entityType: e.entity_type,
      channelId: e.channel_id
    } : e;
    if (t === b.WX.EXTERNAL) returntrue;
    let i = n.getChannel(a);
    return null != i && s.Uu(f.Plq.VIEW_CHANNEL, i)
  }(e, [t])
}

function p(e) {
  return (0, a.e7)([o.ZP, l.Z, c.Z, r.Z], () => h(e, [o.ZP, l.Z, c.Z, r.Z]), [e])
}
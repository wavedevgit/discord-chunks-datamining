/** Chunk was on 98878 **/
/** chunk id: 951539, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => f,
  so: () => v
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

function v(e) {
  let [n, t, i, v] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [o.ZP, l.Z, c.Z, a.Z];
  if ((0, u.Z2)(e)) returnfalse;
  let {
    guild_id: f,
    channel_id: m
  } = e, g = e.entity_type === _.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(m), h = i.getGuild(f), b = v.getStageInstanceByChannel(m);
  return !!(0, r.b)(s.Z, h, g, b) && null != g && function(e) {
    let [n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [l.Z], {
      entityType: t,
      channelId: i
    } = "entity_type" in e ? {
      entityType: e.entity_type,
      channelId: e.channel_id
    } : e;
    if (t === _.WX.EXTERNAL) returntrue;
    let r = n.getChannel(i);
    return null != r && d.Uu(p.Plq.VIEW_CHANNEL, r)
  }(e, [t])
}

function f(e) {
  return (0, i.e7)([o.ZP, l.Z, c.Z, a.Z], () => v(e, [o.ZP, l.Z, c.Z, a.Z]), [e])
}
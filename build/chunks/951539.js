/** Chunk was on 61231 **/
/** chunk id: 951539, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => b,
  so: () => f
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

function f(e) {
  let [n, t, a, f] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [c.ZP, o.Z, l.Z, r.Z];
  if ((0, _.Z2)(e)) returnfalse;
  let {
    guild_id: b,
    channel_id: v
  } = e, g = e.entity_type === u.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(v), m = a.getGuild(b), x = f.getStageInstanceByChannel(v);
  return !!(0, i.b)(s.Z, m, g, x) && null != g && function(e) {
    let [n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [o.Z], {
      entityType: t,
      channelId: a
    } = "entity_type" in e ? {
      entityType: e.entity_type,
      channelId: e.channel_id
    } : e;
    if (t === u.WX.EXTERNAL) returntrue;
    let i = n.getChannel(a);
    return null != i && d.Uu(p.Plq.VIEW_CHANNEL, i)
  }(e, [t])
}

function b(e) {
  return (0, a.e7)([c.ZP, o.Z, l.Z, r.Z], () => f(e, [c.ZP, o.Z, l.Z, r.Z]), [e])
}
/** Chunk was on 98878 **/
/** chunk id: 951539, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => m,
  so: () => g
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

function g(e) {
  let [n, t, i, g] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [o.ZP, l.Z, c.Z, r.Z];
  if ((0, u.Z2)(e)) returnfalse;
  let {
    guild_id: m,
    channel_id: h
  } = e, b = e.entity_type === _.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(h), v = i.getGuild(m), f = g.getStageInstanceByChannel(h);
  return !!(0, a.b)(s.Z, v, b, f) && null != b && function(e) {
    let [n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [l.Z], {
      entityType: t,
      channelId: i
    } = "entity_type" in e ? {
      entityType: e.entity_type,
      channelId: e.channel_id
    } : e;
    if (t === _.WX.EXTERNAL) returntrue;
    let a = n.getChannel(i);
    return null != a && d.Uu(p.Plq.VIEW_CHANNEL, a)
  }(e, [t])
}

function m(e) {
  return (0, i.e7)([o.ZP, l.Z, c.Z, r.Z], () => g(e, [o.ZP, l.Z, c.Z, r.Z]), [e])
}
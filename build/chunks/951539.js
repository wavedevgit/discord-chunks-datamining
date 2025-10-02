/** Chunk was on 61231 **/
/** chunk id: 951539, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => f,
  so: () => b
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

function b(e) {
  let [n, t, a, b] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [l.ZP, i.Z, c.Z, o.Z];
  if ((0, _.Z2)(e)) returnfalse;
  let {
    guild_id: f,
    channel_id: h
  } = e, m = e.entity_type === u.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(h), g = a.getGuild(f), x = b.getStageInstanceByChannel(h);
  return !!(0, r.b)(s.Z, g, m, x) && null != m && function(e) {
    let [n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [i.Z], {
      entityType: t,
      channelId: a
    } = "entity_type" in e ? {
      entityType: e.entity_type,
      channelId: e.channel_id
    } : e;
    if (t === u.WX.EXTERNAL) returntrue;
    let r = n.getChannel(a);
    return null != r && d.Uu(p.Plq.VIEW_CHANNEL, r)
  }(e, [t])
}

function f(e) {
  return (0, a.e7)([l.ZP, i.Z, c.Z, o.Z], () => b(e, [l.ZP, i.Z, c.Z, o.Z]), [e])
}
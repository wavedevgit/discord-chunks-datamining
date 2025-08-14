/** Chunk was on 56236 **/
/** chunk id: 951539, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => v,
  so: () => h,
  wg: () => f
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
  let [n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [o.Z], {
    entityType: t,
    channelId: i
  } = "entity_type" in e ? {
    entityType: e.entity_type,
    channelId: e.channel_id
  } : e;
  if (t === g.WX.EXTERNAL) returntrue;
  let r = n.getChannel(i);
  return null != r && u.Uu(p.Plq.VIEW_CHANNEL, r)
}

function h(e) {
  let [n, t, i, u] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [c.ZP, o.Z, a.Z, l.Z];
  if ((0, d.Z2)(e)) returnfalse;
  let {
    guild_id: p,
    channel_id: h
  } = e, v = e.entity_type === g.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(h), m = i.getGuild(p), j = u.getStageInstanceByChannel(h);
  return !!(0, r.b)(s.Z, m, v, j) && null != v && f(e, [t])
}

function v(e) {
  return (0, i.e7)([c.ZP, o.Z, a.Z, l.Z], () => h(e, [c.ZP, o.Z, a.Z, l.Z]), [e])
}
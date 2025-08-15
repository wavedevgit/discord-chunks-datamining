/** Chunk was on 98464 **/
/** chunk id: 951539, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => f,
  so: () => m,
  wg: () => p
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

function p(e) {
  let [n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [d.Z], {
    entityType: t,
    channelId: i
  } = "entity_type" in e ? {
    entityType: e.entity_type,
    channelId: e.channel_id
  } : e;
  if (t === _.WX.EXTERNAL) returntrue;
  let l = n.getChannel(i);
  return null != l && c.Uu(g.Plq.VIEW_CHANNEL, l)
}

function m(e) {
  let [n, t, i, c] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [a.ZP, d.Z, o.Z, r.Z];
  if ((0, u.Z2)(e)) returnfalse;
  let {
    guild_id: g,
    channel_id: m
  } = e, f = e.entity_type === _.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(m), I = i.getGuild(g), v = c.getStageInstanceByChannel(m);
  return !!(0, l.b)(s.Z, I, f, v) && null != f && p(e, [t])
}

function f(e) {
  return (0, i.e7)([a.ZP, d.Z, o.Z, r.Z], () => m(e, [a.ZP, d.Z, o.Z, r.Z]), [e])
}
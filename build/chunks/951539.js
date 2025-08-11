/** Chunk was on 82875 **/
/** chunk id: 951539, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => h,
  so: () => f,
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
  let [n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [a.Z], {
    entityType: t,
    channelId: r
  } = "entity_type" in e ? {
    entityType: e.entity_type,
    channelId: e.channel_id
  } : e;
  if (t === _.WX.EXTERNAL) returntrue;
  let o = n.getChannel(r);
  return null != o && d.Uu(b.Plq.VIEW_CHANNEL, o)
}

function f(e) {
  let [n, t, r, d] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [l.ZP, a.Z, c.Z, i.Z];
  if ((0, u.Z2)(e)) returnfalse;
  let {
    guild_id: b,
    channel_id: f
  } = e, h = e.entity_type === _.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(f), m = r.getGuild(b), g = d.getStageInstanceByChannel(f);
  return !!(0, o.b)(s.Z, m, h, g) && null != h && p(e, [t])
}

function h(e) {
  return (0, r.e7)([l.ZP, a.Z, c.Z, i.Z], () => f(e, [l.ZP, a.Z, c.Z, i.Z]), [e])
}
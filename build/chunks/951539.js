/** Chunk was on 96492 **/
/** chunk id: 951539, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => v,
  so: () => _,
  wg: () => h
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
  let [n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [o.Z], {
    entityType: t,
    channelId: l
  } = "entity_type" in e ? {
    entityType: e.entity_type,
    channelId: e.channel_id
  } : e;
  if (t === f.WX.EXTERNAL) returntrue;
  let i = n.getChannel(l);
  return null != i && u.Uu(g.Plq.VIEW_CHANNEL, i)
}

function _(e) {
  let [n, t, l, u] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [c.ZP, o.Z, s.Z, r.Z];
  if ((0, d.Z2)(e)) returnfalse;
  let {
    guild_id: g,
    channel_id: _
  } = e, v = e.entity_type === f.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(_), m = l.getGuild(g), x = u.getStageInstanceByChannel(_);
  return !!(0, i.b)(a.Z, m, v, x) && null != v && h(e, [t])
}

function v(e) {
  return (0, l.e7)([c.ZP, o.Z, s.Z, r.Z], () => _(e, [c.ZP, o.Z, s.Z, r.Z]), [e])
}
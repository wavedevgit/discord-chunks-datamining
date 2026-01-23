/** Chunk was on 96110 **/
/** chunk id: 485394, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Ay: () => x,
  K7: () => h
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk855687 = require("./855687.js"),
  Chunk446600 = require("./446600.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk488926 = require("./488926.js"),
  Chunk698441 = require("./698441.js"),
  Chunk988794 = require("./988794.js"),
  Chunk652215 = require("./652215.js");

function h(e) {
  let [n, t, a, h] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [o.Ay, l.A, c.A, i.A];
  if ((0, d.AZ)(e)) returnfalse;
  let {
    guild_id: x,
    channel_id: m
  } = e, p = e.entity_type === u.Ps.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(m), f = a.getGuild(x), v = h.getStageInstanceByChannel(m);
  return !!(0, r.K)(_.A, f, p, v) && null != p && function(e) {
    let [n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [l.A], {
      entityType: t,
      channelId: a
    } = "entity_type" in e ? {
      entityType: e.entity_type,
      channelId: e.channel_id
    } : e;
    if (t === u.Ps.EXTERNAL) returntrue;
    let r = n.getChannel(a);
    return null != r && s.MJ(b.xBc.VIEW_CHANNEL, r)
  }(e, [t])
}

function x(e) {
  return (0, a.bG)([o.Ay, l.A, c.A, i.A], () => h(e, [o.Ay, l.A, c.A, i.A]), [e])
}
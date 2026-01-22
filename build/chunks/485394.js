/** Chunk was on 81899 **/
/** chunk id: 485394, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => m,
  K7: () => _
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

function _(e) {
  let [t, n, l, _] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [r.Ay, i.A, s.A, c.A];
  if ((0, u.AZ)(e)) returnfalse;
  let {
    guild_id: m,
    channel_id: h
  } = e, x = e.entity_type === f.Ps.EXTERNAL ? t.getDefaultChannel(e.guild_id) : n.getChannel(h), v = l.getGuild(m), g = _.getStageInstanceByChannel(h);
  return !!(0, a.K)(d.A, v, x, g) && null != x && function(e) {
    let [t] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [i.A], {
      entityType: n,
      channelId: l
    } = "entity_type" in e ? {
      entityType: e.entity_type,
      channelId: e.channel_id
    } : e;
    if (n === f.Ps.EXTERNAL) returntrue;
    let a = t.getChannel(l);
    return null != a && o.MJ(b.xBc.VIEW_CHANNEL, a)
  }(e, [n])
}

function m(e) {
  return (0, l.bG)([r.Ay, i.A, s.A, c.A], () => _(e, [r.Ay, i.A, s.A, c.A]), [e])
}
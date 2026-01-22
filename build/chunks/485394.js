/** Chunk was on 96110 **/
/** chunk id: 485394, original params: e,c,a (module,exports,require) **/
require.d(exports, {
  Ay: () => x,
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
  let [c, a, n, _] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [r.Ay, d.A, f.A, t.A];
  if ((0, o.AZ)(e)) returnfalse;
  let {
    guild_id: x,
    channel_id: h
  } = e, m = e.entity_type === b.Ps.EXTERNAL ? c.getDefaultChannel(e.guild_id) : a.getChannel(h), v = n.getGuild(x), p = _.getStageInstanceByChannel(h);
  return !!(0, l.K)(s.A, v, m, p) && null != m && function(e) {
    let [c] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [d.A], {
      entityType: a,
      channelId: n
    } = "entity_type" in e ? {
      entityType: e.entity_type,
      channelId: e.channel_id
    } : e;
    if (a === b.Ps.EXTERNAL) returntrue;
    let l = c.getChannel(n);
    return null != l && i.MJ(u.xBc.VIEW_CHANNEL, l)
  }(e, [a])
}

function x(e) {
  return (0, n.bG)([r.Ay, d.A, f.A, t.A], () => _(e, [r.Ay, d.A, f.A, t.A]), [e])
}
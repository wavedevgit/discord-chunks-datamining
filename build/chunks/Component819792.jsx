/** Chunk was on 1272 **/
/** chunk id: 819792, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk620792 = require("./620792.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk536442 = require("./536442.js"),
  Chunk984933 = require("./984933.js"),
  Chunk496675 = require("./496675.js"),
  Chunk51382 = require("./51382.jsx"),
  Chunk91326 = require("./91326.jsx"),
  Chunk503856 = require("./503856.js"),
  Chunk981631 = require("./981631.js");

function g(e) {
  let {
    channel: t,
    guild: n
  } = e, s = (0, l.e7)([o.qc], () => o.qc.hasHotspot(o.v6.HUB_STUDY_ROOM_NOTICE)), c = (0, p.r)(t.guild_id), f = (0, a.q_F)({
    maxHeight: 300 * !c,
    overflow: "hidden",
    delay: 400
  });
  return (0, r.jsx)(i.animated.div, {
    style: f,
    children: s ? (0, r.jsx)(u.Z, {
      channel: t,
      guild: n
    }) : (0, r.jsx)(d.Z, {
      name: "\uD83D\uDCDA☕ ".concat(t.name),
      channel: t
    })
  })
}
let h = function(e) {
  let {
    guild: t
  } = e, n = (0, l.e7)([s.ZP], () => s.ZP.getChannels(t.id)[s.Zb][0]), i = (0, l.e7)([c.Z], () => null != n && c.Z.can(f.Plq.CONNECT, n.channel));
  return t.features.has(f.GuildFeatures.HUB) && null != n && i ? (0, r.jsx)(g, {
    channel: n.channel,
    guild: t
  }) : null
}
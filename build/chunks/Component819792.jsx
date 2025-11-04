/** Chunk was on 1272 **/
/** chunk id: 819792, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk689628 = require("./689628.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk536442 = require("./536442.js"),
  Chunk984933 = require("./984933.js"),
  Chunk496675 = require("./496675.js"),
  Chunk51382 = require("./51382.jsx"),
  Chunk91326 = require("./91326.jsx"),
  Chunk503856 = require("./503856.js"),
  Chunk981631 = require("./981631.js");

function m(e) {
  let {
    channel: t,
    guild: n
  } = e, o = (0, l.e7)([s.qc], () => s.qc.hasHotspot(s.v6.HUB_STUDY_ROOM_NOTICE)), c = (0, p.r)(t.guild_id), f = (0, a.q_F)({
    maxHeight: 300 * !c,
    overflow: "hidden",
    delay: 400
  });
  return (0, r.jsx)(i.animated.div, {
    style: f,
    children: o ? (0, r.jsx)(u.Z, {
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
  } = e, n = (0, l.e7)([o.ZP], () => o.ZP.getChannels(t.id)[o.Zb][0]), i = (0, l.e7)([c.Z], () => null != n && c.Z.can(f.Plq.CONNECT, n.channel));
  return t.features.has(f.GuildFeatures.HUB) && null != n && i ? (0, r.jsx)(m, {
    channel: n.channel,
    guild: t
  }) : null
}
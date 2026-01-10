/** Chunk was on 92524 **/
/** chunk id: 882188, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk278323 = require("./278323.js"),
  Chunk728345 = require("./728345.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk763624 = require("./763624.js"),
  Chunk607361 = require("./607361.js"),
  Chunk463421 = require("./463421.js"),
  Chunk981631 = require("./981631.js"),
  Chunk486014 = require("./486014.js"),
  Chunk388032 = require("./388032.jsx");

function Z(e, t) {
  let {
    enableRequestToStream: n
  } = d.A.useExperiment({
    guildId: t.guild_id,
    location: "useRequestToStreamItem"
  }, {
    autoTrackExposure: false
  }), Z = (0, i.e7)([s.default], () => s.default.getId()), v = (0, g.Z)(e, t.guild_id)[0], p = (0, i.e7)([u.Z], () => null != u.Z.getStreamForUser(e, t.getGuildId())), E = (0, o.IX)(null == v ? true : v.application_id).data, O = (0, c.Z)(e, t.id);
  return Z !== e && null != v && null != E && n && O && !p ? (0, l.jsx)(r.sNh, {
    id: "request-to-stream",
    label: b.intl.format(m.default["8qq+H7"], {
      applicationName: E.name
    }),
    action: function() {
      a.Z.sendActivityInvite({
        type: f.mFx.STREAM_REQUEST,
        channelId: t.id,
        activity: v,
        content: "<@".concat(e, ">"),
        location: "request to stream item",
        targetUserId: e
      })
    },
    icon: r.m3e
  }, "request-to-stream") : null
}
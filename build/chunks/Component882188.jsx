/** Chunk was on 8982 **/
/** chunk id: 882188, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
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
  Chunk978595 = require("./978595.js"),
  Chunk388032 = require("./388032.jsx");

function E(e, t) {
  let {
    enableRequestToStream: n
  } = d.A.useExperiment({
    guildId: t.guild_id,
    location: "useRequestToStreamItem"
  }, {
    autoTrackExposure: false
  }), E = (0, i.e7)([s.default], () => s.default.getId()), P = (0, g.Z)(e, t.guild_id)[0], v = (0, i.e7)([u.Z], () => null != u.Z.getStreamForUser(e, t.getGuildId())), b = (0, o.IX)(null == P ? true : P.application_id).data, h = (0, c.Z)(e, t.id);
  return E !== e && null != P && null != b && n && h && !v ? (0, l.jsx)(r.sNh, {
    id: "request-to-stream",
    label: Z.intl.format(f.default["8qq+Hx"], {
      applicationName: b.name
    }),
    action: function() {
      a.Z.sendActivityInvite({
        type: m.mFx.STREAM_REQUEST,
        channelId: t.id,
        activity: P,
        content: "<@".concat(e, ">"),
        location: "request to stream item",
        targetUserId: e
      })
    },
    icon: r.m3e
  }, "request-to-stream") : null
}
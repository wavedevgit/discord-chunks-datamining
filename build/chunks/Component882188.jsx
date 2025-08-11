/** Chunk was on 8982 **/
/** chunk id: 882188, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk278323 = require("./278323.js"),
  Chunk728345 = require("./728345.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk158776 = require("./158776.js"),
  Chunk763624 = require("./763624.js"),
  Chunk172029 = require("./172029.js"),
  Chunk762578 = require("./762578.js"),
  Chunk981631 = require("./981631.js"),
  Chunk704483 = require("./704483.js"),
  Chunk388032 = require("./388032.jsx");

function E(e, t) {
  let {
    enableRequestToStream: n
  } = c.A.useExperiment({
    guildId: t.guild_id,
    location: "useRequestToStreamItem"
  }), E = (0, i.e7)([s.default], () => s.default.getId()), v = (0, i.e7)([d.Z], () => d.Z.getActivities(e, t.getGuildId()).find(e => null != e.application_id && e.type === m.IIU.PLAYING)), b = (0, i.e7)([u.Z], () => null != u.Z.getStreamForUser(e, t.getGuildId())), p = (0, i.e7)([g.Z], () => null != g.Z.getPendingRequestForUser(e)), h = (0, o.IX)(null == v ? true : v.application_id).data, I = (0, f.Z)(t.id);
  return E !== e && null != v && null != h && n && I && !b ? (0, l.jsx)(r.sNh, {
    id: "request-to-stream",
    disabled: p,
    label: P.intl.format(Z.default["8qq+Hx"], {
      applicationName: h.name
    }),
    action: function() {
      a.Z.sendActivityInvite({
        type: m.mFx.STREAM_REQUEST,
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
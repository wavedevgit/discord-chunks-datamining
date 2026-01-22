/** Chunk was on 55296 **/
/** chunk id: 235052, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308368 = require("./308368.js"),
  Chunk627363 = require("./627363.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk159426 = require("./159426.js"),
  Chunk762370 = require("./762370.js"),
  Chunk25528 = require("./25528.js"),
  Chunk652215 = require("./652215.js"),
  Chunk426127 = require("./426127.js"),
  Chunk985018 = require("./985018.jsx");

function m(e, t) {
  let {
    enableRequestToStream: n
  } = d.m.useExperiment({
    guildId: t.guild_id,
    location: "useRequestToStreamItem"
  }, {
    autoTrackExposure: false
  }), m = (0, i.bG)([s.default], () => s.default.getId()), p = (0, A.A)(e, t.guild_id)[0], v = (0, i.bG)([u.A], () => null != u.A.getStreamForUser(e, t.getGuildId())), E = (0, o.YY)(null == p ? true : p.application_id).data, O = (0, c.A)(e, t.id);
  return m !== e && null != p && null != E && n && O && !v ? (0, l.jsx)(r.Drp, {
    id: "request-to-stream",
    label: f.intl.format(g.default["8qq+H7"], {
      applicationName: E.name
    }),
    action: function() {
      a.A.sendActivityInvite({
        type: b.xL.STREAM_REQUEST,
        channelId: t.id,
        activity: p,
        content: "<@".concat(e, ">"),
        location: "request to stream item",
        targetUserId: e
      })
    },
    icon: r.ofK
  }, "request-to-stream") : null
}
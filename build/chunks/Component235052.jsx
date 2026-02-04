/** Chunk was on 88474 **/
/** chunk id: 235052, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b,
  u: () => y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
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

function y(e, t, n) {
  let {
    enableRequestToStream: r
  } = u.m.useExperiment({
    guildId: t.guild_id,
    location: n
  }, {
    autoTrackExposure: false
  }), l = (0, i.bG)([c.default], () => c.default.getId()), m = (0, f.A)(e, t.guild_id)[0], g = (0, i.bG)([s.A], () => null != s.A.getStreamForUser(e, t.getGuildId())), y = (0, o.YY)(null == m ? true : m.application_id).data, b = (0, d.A)(e, t.id);
  return l !== e && null != m && null != y && r && b && !g ? {
    playingApplication: y,
    handleRequestToStream: function(n) {
      a.A.sendActivityInvite({
        type: p.xL.STREAM_REQUEST,
        channelId: t.id,
        activity: m,
        content: "<@".concat(e, ">"),
        location: n,
        targetUserId: e
      })
    }
  } : null
}

function b(e, t) {
  let n = y(e, t, "useRequestToStreamItem");
  return null == n ? null : (0, r.jsx)(l.Drp, {
    id: "request-to-stream",
    label: g.intl.format(m.default["8qq+H7"], {
      applicationName: n.playingApplication.name
    }),
    action: () => n.handleRequestToStream("request to stream item"),
    icon: l.ofK,
    leadingAccessory: {
      type: "icon",
      icon: l.ofK
    }
  }, "request-to-stream")
}
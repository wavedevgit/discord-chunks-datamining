/** Chunk was on 47841 **/
/** chunk id: 938078, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk64749 = require("./64749.jsx"),
  Chunk508595 = require("./508595.jsx"),
  Chunk57222 = require("./57222.jsx");

function a(e) {
  let {
    guildId: t,
    selectedChannelIds: n,
    selectedRoleIds: a,
    onChange: c,
    placeholder: o,
    disableEveryoneRole: d,
    includeRoleRestrictedPrivateChannels: u = false,
    includeStageVoiceChannels: f = false,
    helperText: g,
    className: b
  } = e, m = (0, l.q)(t, n, u, f), p = (0, s.H)(t, a, d);
  return (0, r.jsx)(i.Ay, {
    channelRows: m,
    roleRows: p,
    guildId: t,
    selectedChannelIds: n,
    selectedRoleIds: a,
    onChange: c,
    placeholder: o,
    helperText: g,
    className: b
  })
}
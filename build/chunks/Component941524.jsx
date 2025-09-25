/** Chunk was on 64523 **/
/** chunk id: 941524, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512508 = require("./512508.jsx"),
  Chunk654626 = require("./654626.jsx"),
  Chunk563115 = require("./563115.jsx");

function a(e) {
  let {
    guildId: t,
    selectedChannelIds: n,
    selectedRoleIds: a,
    onChange: o,
    placeholder: c,
    disableEveryoneRole: d,
    includeRoleRestrictedPrivateChannels: u = false,
    includeStageVoiceChannels: m = false,
    helperText: g,
    className: p
  } = e, f = (0, l.r)(t, n, u, m), h = (0, s.h)(t, a, d);
  return (0, r.jsx)(i.ZP, {
    channelRows: f,
    roleRows: h,
    guildId: t,
    selectedChannelIds: n,
    selectedRoleIds: a,
    onChange: o,
    placeholder: c,
    helperText: g,
    className: p
  })
}
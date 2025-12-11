/** Chunk was on 9536 **/
/** chunk id: 941524, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk654814 = require("./654814.jsx"),
  Chunk706371 = require("./706371.jsx"),
  Chunk563115 = require("./563115.jsx");

function s(e) {
  let {
    guildId: t,
    selectedChannelIds: n,
    selectedRoleIds: s,
    onChange: o,
    placeholder: c,
    disableEveryoneRole: d,
    includeRoleRestrictedPrivateChannels: u = false,
    includeStageVoiceChannels: g = false,
    helperText: m,
    className: f
  } = e, p = (0, l.r)(t, n, u, g), b = (0, a.h)(t, s, d);
  return (0, r.jsx)(i.ZP, {
    channelRows: p,
    roleRows: b,
    guildId: t,
    selectedChannelIds: n,
    selectedRoleIds: s,
    onChange: o,
    placeholder: c,
    helperText: m,
    className: f
  })
}
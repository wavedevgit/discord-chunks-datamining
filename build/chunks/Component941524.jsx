/** Chunk was on 384 **/
/** chunk id: 941524, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512508 = require("./512508.jsx"),
  Chunk706371 = require("./706371.jsx"),
  Chunk563115 = require("./563115.jsx");

function s(e) {
  let {
    guildId: t,
    selectedChannelIds: n,
    selectedRoleIds: s,
    onChange: o,
    placeholder: c,
    disableEveryoneRole: u,
    includeRoleRestrictedPrivateChannels: d = false,
    includeStageVoiceChannels: g = false,
    helperText: m,
    className: p
  } = e, f = (0, l.r)(t, n, d, g), h = (0, a.h)(t, s, u);
  return (0, r.jsx)(i.ZP, {
    channelRows: f,
    roleRows: h,
    guildId: t,
    selectedChannelIds: n,
    selectedRoleIds: s,
    onChange: o,
    placeholder: c,
    helperText: m,
    className: p
  })
}
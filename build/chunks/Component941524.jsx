/** Chunk was on 32923 **/
/** chunk id: 941524, original params: e,t,n (module,exports,require) **/
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
    disableEveryoneRole: d,
    includeRoleRestrictedPrivateChannels: u = false,
    includeStageVoiceChannels: g = false,
    helperText: m,
    className: p
  } = e, f = (0, l.r)(t, n, u, g), h = (0, a.h)(t, s, d);
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
/** Chunk was on 22988 **/
/** chunk id: 941524, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
    includeStageVoiceChannels: m = false,
    helperText: g,
    className: p
  } = e, h = (0, l.r)(t, n, u, m), f = (0, a.h)(t, s, d);
  return (0, r.jsx)(i.ZP, {
    channelRows: h,
    roleRows: f,
    guildId: t,
    selectedChannelIds: n,
    selectedRoleIds: s,
    onChange: o,
    placeholder: c,
    helperText: g,
    className: p
  })
}
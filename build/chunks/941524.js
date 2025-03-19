/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => l
});
var r = n(200651);
n(192379);
var i = n(512508),
  s = n(706371),
  a = n(563115);

function l(e) {
  let {
    guildId: t,
    selectedChannelIds: n,
    selectedRoleIds: l,
    onChange: o,
    placeholder: c,
    disableEveryoneRole: A,
    includeRoleRestrictedPrivateChannels: d = !1,
    includeStageVoiceChannels: u = !1,
    helperText: g,
    className: f
  } = e, m = (0, s.r)(t, n, d, u), p = (0, a.h)(t, l, A);
  return (0, r.jsx)(i.ZP, {
    channelRows: m,
    roleRows: p,
    guildId: t,
    selectedChannelIds: n,
    selectedRoleIds: l,
    onChange: o,
    placeholder: c,
    helperText: g,
    className: f
  })
}
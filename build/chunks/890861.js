/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => c
});
var r = n(200651);
n(192379);
var i = n(399606),
  s = n(100527),
  a = n(906732),
  l = n(246946),
  o = n(999382),
  A = n(270394);
let c = function() {
  let e = (0, i.e7)([l.Z], () => l.Z.hideInstantInvites),
    {
      invites: t,
      guild: n
    } = (0, i.cj)([o.Z], () => o.Z.getProps(), []),
    {
      analyticsLocations: c
    } = (0, a.ZP)(s.Z.GUILD_SETTINGS_PROFILE_PAGE);
  return (0, r.jsx)(a.Gt, {
    value: c,
    children: (0, r.jsx)(A.Z, {
      invites: t,
      guild: n,
      showChannel: !0,
      hide: e,
      withV2Actions: !0,
      canCreateInvites: !0
    })
  })
}
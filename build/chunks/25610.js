/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  V: () => c,
  m: () => u
});
var r = n(399606),
  i = n(592125),
  o = n(699516),
  a = n(594174),
  s = n(247206),
  l = n(294602);
let c = (e, t) => {
    let {
      explicitContentGuilds: n,
      explicitContentFriendDm: c,
      explicitContentNonFriendDm: u
    } = (0, l.B)(), d = (0, r.e7)([o.Z], () => o.Z.getFriendIDs().includes(t)), f = (0, r.e7)([a.default], () => a.default.getCurrentUser()), p = (0, r.e7)([i.Z], () => {
      let t = i.Z.getChannel(e);
      return null != t && t.isPrivate()
    });
    return null != f && f.id !== t && (p && d ? (0, s.vx)(c) : p ? (0, s.vx)(u) : (0, s.vx)(n))
  },
  u = () => {
    let {
      explicitContentGuilds: e
    } = (0, l.B)();
    return null != (0, r.e7)([a.default], () => a.default.getCurrentUser()) && (0, s.vx)(e)
  }
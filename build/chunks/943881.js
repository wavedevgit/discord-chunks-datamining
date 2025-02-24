/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => d
});
var r, i = n(442837),
  o = n(570140),
  a = n(411198);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let l = {};

function c(e) {
  let {
    invite: t
  } = e, n = t.guild;
  if (null == n) return !1;
  l[n.id] = (0, a.Qs)(n)
}
class u extends(r = i.ZP.Store) {
  getGuild(e) {
    return l[e]
  }
}
s(u, "displayName", "AuthInviteStore");
let d = new u(o.Z, {
  AUTH_INVITE_UPDATE: c
})
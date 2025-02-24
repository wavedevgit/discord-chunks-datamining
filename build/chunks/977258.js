/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  s: () => c
});
var r = n(149765);
n(442837);
var i = n(430198),
  o = n(592125),
  a = n(700785),
  s = n(981631);

function l(e) {
  return null != e && s.TPd.GUILD_VOCAL.has(e.type) ? r.$e(s.Plq.VIEW_CHANNEL, s.Plq.CONNECT) : s.Plq.VIEW_CHANNEL
}

function c(e, t) {
  let n = l(o.Z.getChannel(t));
  return i.Z.isChannelGated(e, t) || a.Uu(n, o.Z.getChannel(t))
}
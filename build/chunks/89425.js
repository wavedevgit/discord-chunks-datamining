/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Z: () => f
}), n(411104);
var r = n(430198),
  i = n(557135),
  o = n(66999),
  a = n(592125),
  s = n(496675),
  l = n(944486),
  c = n(979651);
let u = 1e4;
class d extends Error {}
async function f(e) {
  let {
    channelId: t,
    timeoutMs: n = u,
    bypassChangeModal: f = !1
  } = e, p = a.Z.getChannel(t);
  if (null == p || !await i.Z.handleVoiceConnect({
      bypassGuildIdCheck: !0,
      bypassChangeModal: f,
      channel: p,
      connected: c.Z.isInChannel(t),
      needSubscriptionToAccess: (0, o.$)(t, a.Z, r.Z, s.Z).needSubscriptionToAccess
    })) return !1;
  let _ = new Promise((e, r) => {
    let i = setTimeout(() => {
      r(new d("Joining voice channel has timed out."))
    }, n);
    l.Z.addConditionalChangeListener(() => l.Z.getVoiceChannelId() !== t || (clearTimeout(i), e(), !1))
  });
  try {
    await _
  } catch (e) {
    if (e instanceof d) return !1;
    throw e
  }
  return !0
}
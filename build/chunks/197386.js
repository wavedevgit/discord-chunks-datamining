/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => h
});
var r = n(475179),
  i = n(812206),
  o = n(413523),
  a = n(776862),
  s = n(703656),
  l = n(566620),
  c = n(317381),
  u = n(531826),
  d = n(16609),
  f = n(917107),
  _ = n(918559),
  p = n(981631);

function h(e, t) {
  let n = c.ZP.getSelfEmbeddedActivityForLocation(t);
  if (null == n) return;
  let h = i.Z.getApplication(n.applicationId),
    g = (0, d.pY)(n.location),
    m = (0, u.ZP)({
      application: h,
      channelId: g
    });
  if (null != m) {
    (0, a.Z)(m);
    return
  }
  null != g && ((0, s.uL)(p.Z5c.CHANNEL(e, g)), (0, f.Z)(g) ? (r.Z.selectParticipant(g, (0, o.gN)({
    applicationId: n.applicationId,
    instanceId: null == n ? void 0 : n.compositeInstanceId
  })), r.Z.updateLayout(g, p.AEg.NO_CHAT)) : (0, l.tg)(_.Ez.PANEL))
}
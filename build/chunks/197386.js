/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => _
});
var r = n(475179),
  i = n(812206),
  o = n(413523),
  a = n(776862),
  s = n(703656),
  l = n(317381),
  c = n(531826),
  u = n(16609),
  d = n(917107),
  f = n(981631);

function _(e, t) {
  let n = l.ZP.getSelfEmbeddedActivityForLocation(t),
    _ = i.Z.getApplication(null == n ? void 0 : n.applicationId),
    p = (0, u.pY)(null == n ? void 0 : n.location),
    h = (0, c.ZP)({
      application: _,
      channelId: p
    });
  null == h && null != p ? (0, s.uL)(f.Z5c.CHANNEL(e, p)) : null != h && (0, a.Z)(h), null != p && null != n && (0, d.Z)(p) && (r.Z.selectParticipant(p, (0, o.gN)({
    applicationId: n.applicationId,
    instanceId: null == n ? void 0 : n.compositeInstanceId
  })), r.Z.updateLayout(p, f.AEg.NO_CHAT))
}
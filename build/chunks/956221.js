/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => _
});
var r = n(192379),
  i = n(442837),
  o = n(750881),
  a = n(592125),
  s = n(496675),
  l = n(699516),
  c = n(979651),
  u = n(626135),
  d = n(981631),
  f = n(231338);

function _(e) {
  let {
    userId: t,
    guildId: n,
    surface: _
  } = e, {
    enabled: p,
    analyticsEligible: h
  } = (0, o.R4)(_), g = (0, i.e7)([c.Z], () => null != n && null != t && p ? c.Z.getDiscoverableVoiceState(n, t) : null != n && null != t ? c.Z.getVoiceState(n, t) : null != t && p ? c.Z.getDiscoverableVoiceStateForUser(t) : null != t ? c.Z.getVoiceStateForUser(t) : void 0), m = (0, i.e7)([c.Z], () => null != n && null != t ? c.Z.getVoiceState(n, t) : null != t ? c.Z.getVoiceStateForUser(t) : void 0), E = (0, i.e7)([l.Z], () => null != t ? l.Z.getRelationshipType(t) : d.OGo.NONE);
  (0, r.useEffect)(() => {
    var e;
    h && null != m && u.default.track(d.rMx.USER_VOICE_ACTIVITY_VIEWED, {
      surface: _,
      activity_user_id: t,
      discoverable: null === (e = m.discoverable) || void 0 === e || e,
      relationship_type: E,
      treatment: p && !1 === m.discoverable ? o.h9.HIDE : o.h9.SHOW
    })
  }, [m, h, p, E, _, t]);
  let v = null == g ? void 0 : g.channelId,
    b = (0, i.e7)([a.Z], () => {
      if (null != v) return a.Z.getChannel(v)
    });
  return (0, i.e7)([s.Z], () => (null == b ? void 0 : b.isPrivate()) || s.Z.can(f.Pl.VIEW_CHANNEL, b)) ? {
    voiceState: g,
    voiceChannel: b
  } : {}
}
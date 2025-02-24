/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => O
});
var r = n(115911),
  i = n(812206),
  o = n(592125),
  a = n(944486),
  s = n(594174),
  l = n(595519),
  c = n(636449),
  u = n(774226),
  d = n(566620),
  f = n(317381),
  p = n(672181),
  _ = n(882347),
  h = n(16609),
  m = n(224189),
  g = n(574952),
  E = n(917107),
  v = n(89425),
  b = n(197386),
  y = n(701488);

function O(e) {
  return (0, c.C)(() => S(e))
}
async function S(e) {
  let t, {
      applicationId: n,
      activityChannelId: c,
      locationObject: O,
      analyticsLocations: S,
      componentId: I,
      sectionName: T,
      source: N,
      partyId: A,
      joinUserId: C,
      joinSessionId: R,
      joinSecret: P,
      inviterUserId: D,
      isContextlessActivity: w,
      customId: L,
      referrerId: x
    } = e,
    M = (0, g.Z)(),
    j = o.Z.getChannel(c),
    k = null == j ? void 0 : j.getGuildId(),
    U = null == k || "" === k,
    G = s.default.getCurrentUser();
  if (null == G) return !1;
  let B = (0, u.sq)();
  if (!B && (null == j || U && !j.isPrivate() || null == c)) return Promise.resolve(!1);
  let F = f.ZP.getCurrentEmbeddedActivity();
  (null == F ? void 0 : F.applicationId) != null && (t = i.Z.getApplication(null == F ? void 0 : F.applicationId));
  let V = (null == F ? void 0 : F.location.kind) === r.X.CONTEXTLESS;
  if ((V || a.Z.getVoiceChannelId() === c) && null != F && F.applicationId === n && (V || (0, h.pY)(F.location) === a.Z.getVoiceChannelId())) return (0, b.Z)(k, F.location), Promise.resolve(!0);
  if (!await (0, _.p)({
      applicationId: n,
      application: await (0, m.Z)(n, c),
      channel: j,
      currentEmbeddedApplication: t,
      embeddedActivitiesManager: M,
      user: G
    })) return !1;
  if (null != j) {
    let e = (0, E.Z)(j.id),
      n = y.wP.includes(j.type);
    if (e) {
      if (!await (0, v.Z)({
          channelId: j.id,
          bypassChangeModal: null != t
        })) return !1
    } else if (!(0, l.WS)(j) || !n) return !1
  } else if (null == j && !B) return !1;
  return null != c && (0, p.Z)(c), null != F && (0, d.cG)(F.location), await (0, d.af)({
    channelId: c,
    applicationId: n,
    isStart: !1,
    embeddedActivitiesManager: M,
    analyticsLocations: S,
    locationObject: O,
    componentId: I,
    sectionName: T,
    source: N,
    partyId: A,
    joinUserId: C,
    joinSessionId: R,
    joinSecret: P,
    inviterUserId: D,
    isContextlessActivity: w,
    customId: L,
    referrerId: x
  })
}
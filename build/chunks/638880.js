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
  _ = n(672181),
  p = n(882347),
  h = n(16609),
  m = n(224189),
  g = n(574952),
  E = n(917107),
  v = n(89425),
  b = n(197386),
  y = n(701488);

function O(e) {
  return (0, c.C)(() => I(e))
}
async function I(e) {
  let t, {
      applicationId: n,
      activityChannelId: c,
      locationObject: O,
      analyticsLocations: I,
      componentId: S,
      sectionName: T,
      source: N,
      partyId: A,
      joinUserId: C,
      joinSessionId: R,
      secret: P,
      inviterUserId: w,
      instanceId: D,
      isContextlessActivity: L,
      customId: x,
      referrerId: M
    } = e,
    k = (0, g.Z)(),
    j = o.Z.getChannel(c),
    U = null == j ? void 0 : j.getGuildId(),
    G = null == U || "" === U,
    B = s.default.getCurrentUser();
  if (null == B) return !1;
  if (!(0, u.sq)() && (null == j || G && !j.isPrivate() || null == c)) return Promise.resolve(!1);
  let V = f.ZP.getCurrentEmbeddedActivity();
  (null == V ? void 0 : V.applicationId) != null && (t = i.Z.getApplication(null == V ? void 0 : V.applicationId));
  let F = (null == V ? void 0 : V.location.kind) === r.X.CONTEXTLESS;
  if ((F || a.Z.getVoiceChannelId() === c) && null != V && V.applicationId === n && (F || (0, h.pY)(V.location) === a.Z.getVoiceChannelId())) return (0, b.Z)(U, V.location), Promise.resolve(!0);
  let Z = await (0, m.Z)(n, c),
    H = (0, u.Kb)(Z);
  if (L && (H ? c = void 0 : L = !1), !await (0, p.p)({
      applicationId: n,
      application: Z,
      channel: j,
      currentEmbeddedApplication: t,
      embeddedActivitiesManager: k,
      user: B
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
  } else if (null == j && !H) return !1;
  return null != c && (0, _.Z)(c), null != V && (0, d.cG)(V.location), await (0, d.G6)({
    channelId: c,
    applicationId: n,
    isStart: !1,
    embeddedActivitiesManager: k,
    analyticsLocations: I,
    locationObject: O,
    componentId: S,
    sectionName: T,
    source: N,
    partyId: A,
    joinUserId: C,
    joinSessionId: R,
    secret: P,
    inviterUserId: w,
    isContextlessActivity: L,
    customId: x,
    instanceId: D,
    referrerId: M
  })
}
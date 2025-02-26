/** Chunk was on web.js **/
"use strict";
n.d(t, {
  k: () => v
});
var r = n(115911),
  i = n(668781),
  o = n(728345),
  a = n(835873),
  s = n(973616),
  l = n(592125),
  c = n(430824),
  u = n(496675),
  d = n(594174),
  f = n(979651),
  _ = n(317381),
  p = n(638880),
  h = n(782769),
  g = n(527805),
  m = n(388032);

function E(e) {
  let {
    embeddedActivityJoinability: t,
    handleCanJoin: n
  } = e;
  switch (t) {
    case g.Fw.CAN_JOIN:
      null == n || n();
      break;
    case g.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
      (0, a.w)();
      break;
    case g.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
      i.Z.show({
        title: m.NW.string(m.t.PtobXV),
        body: m.NW.string(m.t.UXoQTk),
        hideActionSheet: !1
      });
      break;
    case g.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
      i.Z.show({
        title: m.NW.string(m.t.PtobXV),
        body: m.NW.string(m.t.uGDCc3),
        hideActionSheet: !1
      });
      break;
    case g.Fw.ACTIVITY_AGE_GATED:
      i.Z.show({
        title: m.NW.string(m.t.PtobXV),
        body: m.NW.string(m.t["4WuFRE"]),
        hideActionSheet: !1
      });
      break;
    case g.Fw.NO_CHANNEL_CONNECT_PERMISSION:
    case g.Fw.CHANNEL_FULL:
    case g.Fw.NO_CHANNEL:
    case g.Fw.NO_USER:
      i.Z.show({
        title: m.NW.string(m.t.PtobXV),
        body: m.NW.string(m.t.FUCQcn),
        hideActionSheet: !1
      })
  }
}
async function v(e) {
  let {
    channelId: t,
    applicationId: n,
    launchId: i,
    inputApplication: a,
    analyticsLocations: m,
    launchingComponentId: v,
    sectionName: b,
    inviterUserId: y
  } = e, O = _.ZP.getEmbeddedActivitiesForChannel(t).find(e => e.applicationId === n && (null == i || e.launchId === i)), S = a;
  if (null == S) {
    let e = await o.ZP.fetchApplication(n);
    S = s.ZP.createFromServer(e)
  }
  if (null == O || null == S) return;
  let I = d.default.getCurrentUser(),
    T = l.Z.getChannel(t);
  async function N() {
    null != O && await (0, p.Z)({
      applicationId: O.applicationId,
      activityChannelId: t,
      locationObject: {},
      analyticsLocations: m,
      componentId: v,
      sectionName: b,
      inviterUserId: y,
      instanceId: O.compositeInstanceId,
      isContextlessActivity: O.location.kind === r.X.CONTEXTLESS
    })
  }
  E({
    embeddedActivityJoinability: (0, g.ZP)({
      userId: null == I ? void 0 : I.id,
      application: S,
      channelId: t,
      currentUser: I,
      isActivitiesEnabledForCurrentPlatform: (0, h.a)(T),
      ChannelStore: l.Z,
      VoiceStateStore: f.Z,
      PermissionStore: u.Z,
      GuildStore: c.Z
    }),
    handleCanJoin: N
  })
}
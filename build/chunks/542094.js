/** Chunk was on 75101 **/
n.d(t, {
  JS: () => j,
  Qv: () => E,
  ZP: () => Z,
  fD: () => P,
  w1: () => A
}), n(789020), n(757143), n(301563);
var i, r = n(493683),
  l = n(911969),
  o = n(906732),
  a = n(835473),
  c = n(630388),
  u = n(358085),
  d = n(317381),
  s = n(638880),
  p = n(122613),
  f = n(619915),
  v = n(16609),
  b = n(761122),
  y = n(361213),
  g = n(716600),
  h = n(952561),
  O = n(778569),
  m = n(701488),
  w = n(981631),
  j = ((i = {})[i.START = 0] = "START", i[i.JOIN = 1] = "JOIN", i[i.LEAVE = 2] = "LEAVE", i);

function Z(e) {
  let {
    activityItem: t,
    context: n,
    locationObject: i,
    onActivityItemSelected: r,
    embeddedActivitiesManager: o,
    assetNames: a = ["embedded_cover"],
    backgroundResolution: c = 250,
    launchingComponentId: d,
    commandOrigin: s,
    source: p
  } = e, {
    application: v,
    activity: g
  } = t, h = g.client_platform_config[(0, b.Z)((0, u.getOS)())], m = null != h.label_until && Date.now() < Date.parse(h.label_until), w = (0, O.Z)({
    applicationId: v.id,
    size: c,
    names: a
  }), j = null != g.activity_preview_video_asset_id ? (0, y.Z)(v.id, g.activity_preview_video_asset_id) : null, Z = (0, f.ZP)("channel" === n.type ? n.channel : void 0).find(e => {
    let {
      embeddedActivity: t
    } = e;
    return v.id === t.applicationId
  }), S = E({
    context: n,
    applicationId: v.id
  }), _ = A({
    applicationId: t.application.id,
    context: n,
    locationObject: i,
    embeddedActivitiesManager: o,
    onActivityItemSelectedProp: r,
    launchingComponentId: d,
    commandOrigin: s,
    source: p
  }), C = P(v, t.activity);
  return {
    imageBackground: w,
    videoUrl: j,
    joinableEmbeddedApp: Z,
    activityAction: S,
    onActivityItemSelected: _,
    labelType: m ? h.label_type : l.ww.NONE,
    staffReleasePhase: C
  }
}

function P(e, t) {
  var n;
  let i = null !== (n = e.flags) && void 0 !== n ? n : 0;
  if (!((0, c.yE)(i, w.udG.EMBEDDED_RELEASED) || (0, c.yE)(i, w.udG.EMBEDDED_FIRST_PARTY))) return;
  let r = t.client_platform_config[(0, b.Z)((0, u.getOS)())].release_phase;
  return m.eB.includes(r) ? r.replace("_", " ").replace(/(^\w|\s\w)/g, e => e.toUpperCase()) : void 0
}

function E(e) {
  let {
    context: t,
    applicationId: n,
    fetchesApplication: i = !0
  } = e, r = 0, l = "channel" === t.type ? t.channel : void 0, o = (0, g.Z)(), c = (0, h.Z)({
    fetchesApplication: i
  }), u = (0, a.q)(n, i), d = (0, f.ZP)(l).find(e => {
    let {
      embeddedActivity: t
    } = e;
    return null != u && u.id === t.applicationId
  });
  if (null == u) return r;
  let s = (0, v.pY)(null == o ? void 0 : o.location);
  return null != l && s === l.id && (null == c ? void 0 : c.id) === u.id ? r = 2 : null != d && (r = 1), r
}

function A(e) {
  let {
    applicationId: t,
    botUserIdForAppDM: n,
    context: i,
    locationObject: l,
    embeddedActivitiesManager: a,
    onActivityItemSelectedProp: c,
    launchingComponentId: u,
    commandOrigin: f,
    sectionName: v,
    source: b,
    fetchesApplication: y = !0,
    customId: h,
    referrerId: O
  } = e, m = E({
    context: i,
    applicationId: t,
    fetchesApplication: y
  }), {
    analyticsLocations: w
  } = (0, o.ZP)(), j = (0, g.Z)();
  switch (m) {
    case 0:
      return async () => {
        let e = "channel" === i.type ? i.channel.id : void 0;
        if (null != n) try {
          e = await r.Z.openPrivateChannel(n)
        } catch (e) {
          return
        }
        await (0, p.Z)({
          targetApplicationId: t,
          locationObject: l,
          channelId: e,
          analyticsLocations: w,
          componentId: u,
          commandOrigin: f,
          sectionName: v,
          source: b,
          customId: h,
          referrerId: O
        }).then(e => e && (null == c ? void 0 : c({
          applicationId: t
        })))
      };
    case 1:
      return async () => {
        d.ZP.isLaunchingActivity() || await (0, s.Z)({
          applicationId: t,
          activityChannelId: "channel" === i.type ? i.channel.id : void 0,
          locationObject: l,
          analyticsLocations: w,
          componentId: u,
          sectionName: v,
          source: b,
          customId: h,
          referrerId: O,
          instanceId: void 0,
          isContextlessActivity: !1
        }).then(e => e && (null == c ? void 0 : c({
          applicationId: t
        })))
      };
    case 2:
      return () => {
        d.ZP.isLaunchingActivity() || (null != j && a.leaveActivity({
          location: j.location,
          applicationId: t
        }), null == c || c({
          applicationId: t
        }))
      }
  }
}
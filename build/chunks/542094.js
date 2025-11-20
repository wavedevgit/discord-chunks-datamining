/** Chunk was on web.js **/
/** chunk id: 542094, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JS: () => I,
  Qv: () => C,
  ZP: () => S,
  fD: () => A,
  w1: () => N
}), require("./997841.js"), require("./704826.js"), require("./35282.js");
var Chunk95015 = require("./95015.js"),
  Chunk493683 = require("./493683.js"),
  Chunk911969 = require("./911969.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk48131 = require("./48131.js"),
  Chunk813370 = require("./813370.js"),
  Chunk358085 = require("./358085.js"),
  Chunk317381 = require("./317381.js"),
  Chunk638880 = require("./638880.js"),
  Chunk122613 = require("./122613.js"),
  Chunk619915 = require("./619915.js"),
  Chunk16609 = require("./16609.js"),
  Chunk761122 = require("./761122.js"),
  Chunk361213 = require("./361213.js"),
  Chunk716600 = require("./716600.js"),
  Chunk952561 = require("./952561.js"),
  Chunk778569 = require("./778569.js"),
  Chunk701488 = require("./701488.js"),
  Chunk981631 = require("./981631.js"),
  I = function(e) {
    return e[e.START = 0] = "START", e[e.JOIN = 1] = "JOIN", e[e.LEAVE = 2] = "LEAVE", e
  }({});
let T = 250;

function S(e) {
  let {
    activityItem: t,
    context: n,
    locationObject: r,
    onActivityItemSelected: i,
    embeddedActivitiesManager: o,
    assetNames: s = ["embedded_cover"],
    backgroundResolution: l = T,
    launchingComponentId: c,
    commandOrigin: d,
    source: f
  } = e, {
    application: _,
    activity: h
  } = t, E = h.client_platform_config[(0, m.Z)((0, u.getOS)())], b = Date.now(), O = null != E.label_until && b < Date.parse(E.label_until) && null != E.label_from && b > Date.parse(E.label_from), v = (0, y.Z)({
    applicationId: _.id,
    size: l,
    names: s
  }), I = null != h.activity_preview_video_asset_id ? (0, g.Z)(_.id, h.activity_preview_video_asset_id) : null, S = (0, p.ZP)("channel" === n.type ? n.channel : true).find(e => {
    let {
      embeddedActivity: t
    } = e;
    return _.id === t.applicationId
  }), R = C({
    context: n,
    applicationId: _.id
  }), P = N({
    application: t.application,
    context: n,
    locationObject: r,
    embeddedActivitiesManager: o,
    onActivityItemSelectedProp: i,
    launchingComponentId: c,
    commandOrigin: d,
    source: f
  }), D = A(_, t.activity);
  return {
    imageBackground: v,
    videoUrl: I,
    joinableEmbeddedApp: S,
    activityAction: R,
    onActivityItemSelected: P,
    labelType: O ? E.label_type : a.ww.NONE,
    staffReleasePhase: D
  }
}

function A(e, t) {
  var n;
  let i = null != (n = e.flags) ? n : 0;
  if (!((0, r.yE)(i, v.udG.EMBEDDED_RELEASED) || (0, r.yE)(i, v.udG.EMBEDDED_FIRST_PARTY))) return;
  let a = t.client_platform_config[(0, m.Z)((0, u.getOS)())].release_phase;
  return O.eB.includes(a) ? a.replace("_", " ").replace(/(^\w|\s\w)/g, e => e.toUpperCase()) : true
}

function C(e) {
  let {
    context: t,
    applicationId: n,
    fetchesApplication: r = true
  } = e, i = 0, a = "channel" === t.type ? t.channel : true, o = (0, E.Z)(), l = (0, b.Z)({
    fetchesApplication: r
  }), c = (0, s.q)(n, r), u = (0, p.ZP)(a).find(e => {
    let {
      embeddedActivity: t
    } = e;
    return null != c && c.id === t.applicationId
  });
  if (null == c) return i;
  let d = (0, h.p)(null == o ? true : o.location);
  return null != a && d === a.id && (null == l ? true : l.id) === c.id ? i = 2 : null != u && (i = 1), i
}

function N(e) {
  var t;
  let {
    application: n,
    botUserIdForAppDM: r,
    context: a,
    locationObject: s,
    embeddedActivitiesManager: u,
    onActivityItemSelectedProp: p,
    launchingComponentId: h,
    commandOrigin: m,
    sectionName: g,
    source: b,
    fetchesApplication: y = true,
    customId: O,
    referrerId: v,
    onConfirmActivityLaunchChecksAlertOpen: I
  } = e, T = null != (t = null == n ? true : n.id) ? t : "", S = C({
    context: a,
    applicationId: T,
    fetchesApplication: y
  }), {
    analyticsLocations: A
  } = (0, o.ZP)(), N = (0, E.Z)(), R = (0, c.A)(n);
  if (null == n) return () => {
    null == p || p({
      applicationId: ""
    })
  };
  switch (S) {
    case 0:
      return async () => {
        if (R) {
          try {
            await l.Z.launchFrame({
              applicationId: T
            }), null == p || p({
              applicationId: T
            })
          } catch (e) {}
          return
        }
        let e = "channel" === a.type ? a.channel.id : true;
        if (null != r) try {
          e = await i.Z.openPrivateChannel({
            recipientIds: r,
            navigateToChannel: true
          })
        } catch (e) {
          return
        }
        await (0, _.Z)({
          targetApplicationId: T,
          locationObject: s,
          channelId: e,
          analyticsLocations: A,
          componentId: h,
          commandOrigin: m,
          sectionName: g,
          source: b,
          customId: O,
          referrerId: v,
          onConfirmActivityLaunchChecksAlertOpen: I
        }).then(e => e && (null == p ? true : p({
          applicationId: T
        })))
      };
    case 1:
      return async () => {
        d.ZP.isLaunchingActivity() || await (0, f.Z)({
          applicationId: T,
          activityChannelId: "channel" === a.type ? a.channel.id : true,
          locationObject: s,
          analyticsLocations: A,
          componentId: h,
          sectionName: g,
          source: b,
          customId: O,
          referrerId: v
        }).then(e => e && (null == p ? true : p({
          applicationId: T
        })))
      };
    case 2:
      return () => {
        d.ZP.isLaunchingActivity() || (null != N && u.leaveActivity({
          location: N.location,
          applicationId: T
        }), null == p || p({
          applicationId: T
        }))
      }
  }
}
/** Chunk was on web.js **/
/** chunk id: 849269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => I,
  Hq: () => C,
  l$: () => T,
  o6: () => v,
  wK: () => N
}), require("./938796.js"), require("./747238.js"), require("./812715.js");
var Chunk665260 = require("./665260.js"),
  Chunk308528 = require("./308528.js"),
  Chunk155718 = require("./155718.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk625180 = require("./625180.js"),
  Chunk207371 = require("./207371.js"),
  Chunk723702 = require("./723702.js"),
  Chunk933958 = require("./933958.js"),
  Chunk447031 = require("./447031.js"),
  Chunk956549 = require("./956549.js"),
  Chunk685399 = require("./685399.js"),
  Chunk969151 = require("./969151.js"),
  Chunk847381 = require("./847381.js"),
  Chunk435582 = require("./435582.js"),
  Chunk902439 = require("./902439.js"),
  Chunk620148 = require("./620148.js"),
  Chunk283488 = require("./283488.js"),
  Chunk360469 = require("./360469.js"),
  Chunk652215 = require("./652215.js"),
  v = function(e) {
    return e[e.START = 0] = "START", e[e.JOIN = 1] = "JOIN", e[e.LEAVE = 2] = "LEAVE", e
  }({});
let S = 250;

function I(e) {
  let {
    activityItem: t,
    context: n,
    locationObject: r,
    onActivityItemSelected: i,
    embeddedActivitiesManager: s,
    assetNames: o = ["embedded_cover"],
    backgroundResolution: l = S,
    launchingComponentId: c,
    commandOrigin: d,
    source: f
  } = e, {
    application: p,
    activity: h
  } = t, E = h.client_platform_config[(0, m.A)((0, u.getOS)())], b = Date.now(), O = null != E.label_until && b < Date.parse(E.label_until) && null != E.label_from && b > Date.parse(E.label_from), A = (0, y.A)({
    applicationId: p.id,
    size: l,
    names: o,
    format: "webp"
  }), v = null != h.activity_preview_video_asset_id ? (0, g.A)(p.id, h.activity_preview_video_asset_id) : null, I = (0, _.Ay)("channel" === n.type ? n.channel : true).find(e => {
    let {
      embeddedActivity: t
    } = e;
    return p.id === t.applicationId
  }), R = C({
    context: n,
    applicationId: p.id
  }), w = N({
    application: t.application,
    context: n,
    locationObject: r,
    embeddedActivitiesManager: s,
    onActivityItemSelectedProp: i,
    launchingComponentId: c,
    commandOrigin: d,
    source: f
  }), P = T(p, t.activity);
  return {
    imageBackground: A,
    videoUrl: v,
    joinableEmbeddedApp: I,
    activityAction: R,
    onActivityItemSelected: w,
    labelType: O ? E.label_type : a.Hr.NONE,
    staffReleasePhase: P
  }
}

function T(e, t) {
  var n;
  let i = null != (n = e.flags) ? n : 0;
  if (!((0, r.Lt)(i, A.gfo.EMBEDDED_RELEASED) || (0, r.Lt)(i, A.gfo.EMBEDDED_FIRST_PARTY))) return;
  let a = t.client_platform_config[(0, m.A)((0, u.getOS)())].release_phase;
  return O.qG.includes(a) ? a.replace("_", " ").replace(/(^\w|\s\w)/g, e => e.toUpperCase()) : true
}

function C(e) {
  let {
    context: t,
    applicationId: n,
    fetchesApplication: r = true
  } = e, i = 0, a = "channel" === t.type ? t.channel : true, s = (0, E.A)(), l = (0, b.A)({
    fetchesApplication: r
  }), c = (0, o.h)(n, r), u = (0, _.Ay)(a).find(e => {
    let {
      embeddedActivity: t
    } = e;
    return null != c && c.id === t.applicationId
  });
  if (null == c) return i;
  let d = (0, h.H)(null == s ? true : s.location);
  return null != a && d === a.id && (null == l ? true : l.id) === c.id ? i = 2 : null != u && (i = 1), i
}

function N(e) {
  var t;
  let {
    application: n,
    botUserIdForAppDM: r,
    context: a,
    locationObject: o,
    embeddedActivitiesManager: u,
    onActivityItemSelectedProp: _,
    launchingComponentId: h,
    commandOrigin: m,
    sectionName: g,
    source: b,
    fetchesApplication: y = true,
    customId: O,
    referrerId: A,
    onConfirmActivityLaunchChecksAlertOpen: v
  } = e, S = null != (t = null == n ? true : n.id) ? t : "", I = C({
    context: a,
    applicationId: S,
    fetchesApplication: y
  }), {
    analyticsLocations: T
  } = (0, s.Ay)(), N = (0, E.A)(), R = (0, c.e)(n);
  if (null == n) return () => {
    null == _ || _({
      applicationId: ""
    })
  };
  switch (I) {
    case 0:
      return async () => {
        if (R) {
          try {
            await l.A.launchFrame({
              applicationId: S
            }), null == _ || _({
              applicationId: S
            })
          } catch (e) {}
          return
        }
        let e = "channel" === a.type ? a.channel.id : true;
        if (null != r) try {
          e = await i.A.openPrivateChannel({
            recipientIds: r,
            navigateToChannel: true
          })
        } catch (e) {
          return
        }
        await (0, p.A)({
          targetApplicationId: S,
          locationObject: o,
          channelId: e,
          analyticsLocations: T,
          componentId: h,
          commandOrigin: m,
          sectionName: g,
          source: b,
          customId: O,
          referrerId: A,
          onConfirmActivityLaunchChecksAlertOpen: v
        }).then(e => e && (null == _ ? true : _({
          applicationId: S
        })))
      };
    case 1:
      return async () => {
        d.Ay.isLaunchingActivity() || await (0, f.A)({
          applicationId: S,
          activityChannelId: "channel" === a.type ? a.channel.id : true,
          locationObject: o,
          analyticsLocations: T,
          componentId: h,
          sectionName: g,
          source: b,
          customId: O,
          referrerId: A
        }).then(e => e && (null == _ ? true : _({
          applicationId: S
        })))
      };
    case 2:
      return () => {
        d.Ay.isLaunchingActivity() || (null != N && u.leaveActivity({
          location: N.location,
          applicationId: S
        }), null == _ || _({
          applicationId: S
        }))
      }
  }
}
/** Chunk was on web.js **/
/** chunk id: 148720, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => E
});
var Chunk668781 = require("./668781.js"),
  Chunk728345 = require("./728345.js"),
  Chunk835873 = require("./835873.js"),
  Chunk973616 = require("./973616.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk317381 = require("./317381.js"),
  Chunk638880 = require("./638880.js"),
  Chunk790920 = require("./790920.js"),
  Chunk527805 = require("./527805.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    embeddedActivityJoinability: t,
    handleCanJoin: n
  } = e;
  switch (t) {
    case m.Fw.CAN_JOIN:
      null == n || n();
      break;
    case m.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
      (0, a.w)();
      break;
    case m.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
      r.Z.show({
        title: h.intl.string(h.t.PtobXW),
        body: h.intl.string(h.t.UXoQTp),
        hideActionSheet: false
      });
      break;
    case m.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
      r.Z.show({
        title: h.intl.string(h.t.PtobXW),
        body: h.intl.string(h.t.uGDCcw),
        hideActionSheet: false
      });
      break;
    case m.Fw.ACTIVITY_AGE_GATED:
      r.Z.show({
        title: h.intl.string(h.t.PtobXW),
        body: h.intl.string(h.t["4WuFRE"]),
        hideActionSheet: false
      });
      break;
    case m.Fw.NO_CHANNEL_CONNECT_PERMISSION:
    case m.Fw.CHANNEL_FULL:
    case m.Fw.NO_CHANNEL:
    case m.Fw.NO_USER:
      r.Z.show({
        title: h.intl.string(h.t.PtobXW),
        body: h.intl.string(h.t.FUCQco),
        hideActionSheet: false
      })
  }
}
async function E(e) {
  let {
    channelId: t,
    applicationId: n,
    launchId: r,
    inputApplication: a,
    analyticsLocations: h,
    launchingComponentId: E,
    sectionName: b,
    inviterUserId: y
  } = e, O = f.ZP.getEmbeddedActivitiesForChannel(t).find(e => e.applicationId === n && (null == r || e.launchId === r)), v = a;
  if (null == v) {
    let e = await i.ZP.fetchApplication(n);
    v = o.ZP.createFromServer(e)
  }
  if (null == O || null == v) return;
  let S = u.default.getCurrentUser();
  async function I() {
    null != O && await (0, p.Z)({
      applicationId: O.applicationId,
      activityChannelId: t,
      locationObject: {},
      analyticsLocations: h,
      componentId: E,
      sectionName: b,
      inviterUserId: y
    })
  }
  g({
    embeddedActivityJoinability: (0, m.ZP)({
      userId: null == S ? true : S.id,
      application: v,
      channelId: t,
      currentUser: S,
      isActivitiesEnabledForCurrentPlatform: (0, _.a)(),
      ChannelStore: s.Z,
      VoiceStateStore: d.Z,
      PermissionStore: c.Z,
      GuildStore: l.Z
    }),
    handleCanJoin: I
  })
}
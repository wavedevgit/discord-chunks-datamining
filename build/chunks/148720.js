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
    case h.Fw.CAN_JOIN:
      null == n || n();
      break;
    case h.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
      (0, a.w)();
      break;
    case h.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
      r.Z.show({
        title: m.intl.string(m.t.PtobXW),
        body: m.intl.string(m.t.UXoQTp),
        hideActionSheet: false
      });
      break;
    case h.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
      r.Z.show({
        title: m.intl.string(m.t.PtobXW),
        body: m.intl.string(m.t.uGDCcw),
        hideActionSheet: false
      });
      break;
    case h.Fw.ACTIVITY_AGE_GATED:
      r.Z.show({
        title: m.intl.string(m.t.PtobXW),
        body: m.intl.string(m.t["4WuFRE"]),
        hideActionSheet: false
      });
      break;
    case h.Fw.NO_CHANNEL_CONNECT_PERMISSION:
    case h.Fw.CHANNEL_FULL:
    case h.Fw.NO_CHANNEL:
    case h.Fw.NO_USER:
      r.Z.show({
        title: m.intl.string(m.t.PtobXW),
        body: m.intl.string(m.t.FUCQco),
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
    analyticsLocations: m,
    launchingComponentId: E,
    sectionName: b,
    inviterUserId: y
  } = e, O = f.ZP.getEmbeddedActivitiesForChannel(t).find(e => e.applicationId === n && (null == r || e.launchId === r)), v = a;
  if (null == v) {
    let e = await i.ZP.fetchApplication(n);
    v = o.ZP.createFromServer(e)
  }
  if (null == O || null == v) return;
  let I = u.default.getCurrentUser();
  async function S() {
    null != O && await (0, _.Z)({
      applicationId: O.applicationId,
      activityChannelId: t,
      locationObject: {},
      analyticsLocations: m,
      componentId: E,
      sectionName: b,
      inviterUserId: y
    })
  }
  g({
    embeddedActivityJoinability: (0, h.ZP)({
      userId: null == I ? true : I.id,
      application: v,
      channelId: t,
      currentUser: I,
      isActivitiesEnabledForCurrentPlatform: (0, p.a)(),
      ChannelStore: s.Z,
      VoiceStateStore: d.Z,
      PermissionStore: c.Z,
      GuildStore: l.Z
    }),
    handleCanJoin: S
  })
}
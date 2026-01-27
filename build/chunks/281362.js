/** Chunk was on web.js **/
/** chunk id: 281362, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => E
});
var Chunk157559 = require("./157559.js"),
  Chunk627363 = require("./627363.js"),
  Chunk192552 = require("./192552.js"),
  Chunk611010 = require("./611010.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk933958 = require("./933958.js"),
  Chunk447031 = require("./447031.js"),
  Chunk170148 = require("./170148.js"),
  Chunk550151 = require("./550151.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  let {
    embeddedActivityJoinability: t,
    handleCanJoin: n
  } = e;
  switch (t) {
    case h.Gy.CAN_JOIN:
      null == n || n();
      break;
    case h.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
      (0, a.i)();
      break;
    case h.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
      r.A.show({
        title: m.intl.string(m.t.PtobXW),
        body: m.intl.string(m.t.UXoQTp),
        hideActionSheet: false
      });
      break;
    case h.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
      r.A.show({
        title: m.intl.string(m.t.PtobXW),
        body: m.intl.string(m.t.uGDCcw),
        hideActionSheet: false
      });
      break;
    case h.Gy.ACTIVITY_AGE_GATED:
      r.A.show({
        title: m.intl.string(m.t.PtobXW),
        body: m.intl.string(m.t["4WuFRE"]),
        hideActionSheet: false
      });
      break;
    case h.Gy.NO_CHANNEL_CONNECT_PERMISSION:
    case h.Gy.CHANNEL_FULL:
    case h.Gy.NO_CHANNEL:
    case h.Gy.NO_USER:
      r.A.show({
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
    sectionName: y,
    inviterUserId: b
  } = e, O = f.Ay.getEmbeddedActivitiesForChannel(t).find(e => e.applicationId === n && (null == r || e.launchId === r)), v = a;
  if (null == v) {
    let e = await i.Ay.fetchApplication(n);
    v = o.Ay.createFromServer(e)
  }
  if (null == O || null == v) return;
  let A = u.default.getCurrentUser();
  async function I() {
    null != O && await (0, p.A)({
      applicationId: O.applicationId,
      activityChannelId: t,
      locationObject: {},
      analyticsLocations: m,
      componentId: E,
      sectionName: y,
      inviterUserId: b
    })
  }
  g({
    embeddedActivityJoinability: (0, h.Ay)({
      userId: null == A ? true : A.id,
      application: v,
      channelId: t,
      currentUser: A,
      isActivitiesEnabledForCurrentPlatform: (0, _.A)(),
      ChannelStore: s.A,
      VoiceStateStore: d.A,
      PermissionStore: c.A,
      GuildStore: l.A
    }),
    handleCanJoin: I
  })
}
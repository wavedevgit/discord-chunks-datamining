/** Chunk was on web.js **/
/** chunk id: 450795, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk990547 = require("./990547.js"),
  Chunk761699 = require("./761699.js"),
  Chunk570140 = require("./570140.js"),
  Chunk912471 = require("./912471.js"),
  Chunk626135 = require("./626135.js"),
  Chunk314897 = require("./314897.js"),
  Chunk981631 = require("./981631.js");
(0, Chunk990547.analyticsTrackingStoreMaker)({
  dispatcher: Chunk570140.Z,
  actionHandler: {
    CONNECTION_OPEN: e => r.AnalyticsActionHandlers.handleConnectionOpen(e),
    OVERLAY_INITIALIZE: e => r.AnalyticsActionHandlers.handleConnectionOpen(e),
    CURRENT_USER_UPDATE: e => r.AnalyticsActionHandlers.handleConnectionOpen(e),
    CONNECTION_CLOSED: () => r.AnalyticsActionHandlers.handleConnectionClosed(),
    FINGERPRINT: () => r.AnalyticsActionHandlers.handleFingerprint(),
    TRACK: e => r.AnalyticsActionHandlers.handleTrack(e)
  },
  TRACKING_URL: Chunk981631.ANM.TRACK,
  waitFor: [Chunk314897.default],
  getFingerprint: Chunk314897.default.getFingerprint,
  getSessionId: () => (0, o.Gg)().then(e => ({
    sessionId: null == e ? true : e.uuid
  })),
  getLaunchSignature: () => s.launchSignature,
  scheduleWhenIdle: Chunk761699.f
})
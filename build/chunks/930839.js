/** Chunk was on web.js **/
/** chunk id: 930839, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk110259 = require("./110259.js"),
  Chunk167789 = require("./167789.js"),
  Chunk73153 = require("./73153.js"),
  Chunk861638 = require("./861638.js"),
  Chunk954571 = require("./954571.js"),
  Chunk961350 = require("./961350.js"),
  Chunk652215 = require("./652215.js");
(0, Chunk110259.analyticsTrackingStoreMaker)({
  dispatcher: Chunk73153.h,
  actionHandler: {
    CONNECTION_OPEN: e => r.AnalyticsActionHandlers.handleConnectionOpen(e),
    OVERLAY_INITIALIZE: e => r.AnalyticsActionHandlers.handleConnectionOpen(e),
    CURRENT_USER_UPDATE: e => r.AnalyticsActionHandlers.handleConnectionOpen(e),
    CONNECTION_CLOSED: () => r.AnalyticsActionHandlers.handleConnectionClosed(),
    FINGERPRINT: () => r.AnalyticsActionHandlers.handleFingerprint(),
    TRACK: e => r.AnalyticsActionHandlers.handleTrack(e),
    SET_ANALYTICS_TOKEN: e => r.AnalyticsActionHandlers.handleSetAnalyticsToken(e)
  },
  TRACKING_URL: Chunk652215.Rsh.TRACK,
  waitFor: [Chunk961350.default],
  getFingerprint: Chunk961350.default.getFingerprint,
  getSessionId: () => (0, o.Ht)().then(e => ({
    sessionId: null == e ? true : e.uuid
  })),
  getLaunchSignature: () => s.launchSignature,
  scheduleWhenIdle: Chunk167789.O
})
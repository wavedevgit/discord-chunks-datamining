/** Chunk was on web.js **/
/** chunk id: 518929, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ji: () => o
});
var Chunk818083 = require("./818083.js");
require("./638395.js"), require("./171393.js");
var Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2024-07_icymi",
  label: "In-case-you-missed-it tab",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN_MOBILE,
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "enables the new icymi tab",
    config: {
      enabled: true
    }
  }, {
    id: 2,
    label: "new icymi tab with some new features",
    config: {
      enabled: true
    }
  }, {
    id: 3,
    label: "new icymi tab with more new features",
    config: {
      enabled: true,
      forumThreads: true
    }
  }]
});
(0, Chunk818083.B)({
  kind: "user",
  id: "2025-07_icymi_split_notification_tab",
  label: "Split notifications tab",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Split notifications tab",
    config: {
      enabled: true
    }
  }]
});

function o(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return a.getCurrentConfig({
    location: e
  }, {
    disable: true,
    autoTrackExposure: t
  }).enabled
}(0, Chunk818083.B)({
  kind: "user",
  id: "2024-07_icymi_negative_items",
  label: "icymi negative content (debugging only)",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "allow negative items only",
    config: {
      enabled: true
    }
  }]
}), (0, Chunk818083.B)({
  kind: "user",
  id: "2025-05_icymi_new_conversation_summaries",
  label: "New conversation summary in ICYMI",
  defaultConfig: {
    contentGenerationEnabled: false
  },
  treatments: [{
    id: 1,
    label: "New conversation summary types in ICYMI",
    config: {
      contentGenerationEnabled: true
    }
  }]
})
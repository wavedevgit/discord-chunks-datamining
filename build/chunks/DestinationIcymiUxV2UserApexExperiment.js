/** Chunk was on web.js **/
/** chunk id: 518929, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  VZ: () => c
});
var Chunk818083 = require("./818083.js"),
  Chunk427164 = require("./427164.js"),
  Chunk638395 = require("./638395.js");
require("./171393.js");
var Chunk987338 = require("./987338.js");
let s = "hide_icymi_tab",
  l = (0, Chunk818083.B)({
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
    }]
  });

function c(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return a.Z.get(s), l.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t,
    disable: true
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
}), (0, Chunk427164.le)({
  name: "2025-09-destination-icymi-ux-v2",
  kind: "user",
  defaultConfig: {
    isNewHeaderAndInteractions: false,
    isNewCardDesign: false,
    isBottomSheetInteractions: false,
    uxVariation: "default"
  },
  variations: {
    1: {
      isNewHeaderAndInteractions: true,
      isNewCardDesign: false,
      isBottomSheetInteractions: false,
      uxVariation: "destination_icymi_ia"
    },
    2: {
      isNewHeaderAndInteractions: true,
      isNewCardDesign: true,
      isBottomSheetInteractions: false,
      uxVariation: "destination_icymi_ia_card"
    },
    3: {
      isNewHeaderAndInteractions: true,
      isNewCardDesign: false,
      isBottomSheetInteractions: true,
      uxVariation: "destination_icymi_ia_bottom_sheet"
    },
    4: {
      isNewHeaderAndInteractions: true,
      isNewCardDesign: true,
      isBottomSheetInteractions: true,
      uxVariation: "destination_icymi_ia_bottom_sheet_card"
    }
  }
})
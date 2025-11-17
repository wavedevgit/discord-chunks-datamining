/** Chunk was on web.js **/
/** chunk id: 518929, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  VZ: () => d,
  ZY: () => f,
  b5: () => u,
  q3: () => p
}), require("./473749.js");
var Chunk818083 = require("./818083.js"),
  Chunk427164 = require("./427164.js"),
  Chunk638395 = require("./638395.js"),
  Chunk171393 = require("./171393.js"),
  Chunk987338 = require("./987338.js");
let l = "hide_icymi_tab",
  c = (0, Chunk818083.B)({
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

function u(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = (0, o.Z)(l),
    r = c.useExperiment({
      location: e
    }, {
      autoTrackExposure: t,
      disable: n
    }),
    i = g.useExperiment({
      location: e
    }, {
      autoTrackExposure: false,
      disable: !r.enabled
    });
  return r.enabled && i.icymiDesktopEnabled
}

function d(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = a.Z.get(l),
    r = c.getCurrentConfig({
      location: e
    }, {
      autoTrackExposure: t,
      disable: n
    });
  {
    let t = g.getCurrentConfig({
      location: e
    }, {
      autoTrackExposure: false,
      disable: !r.enabled
    });
    return r.enabled && t.icymiDesktopEnabled
  }
}
let f = (0, Chunk818083.B)({
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
  }),
  _ = (0, Chunk818083.B)({
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
  });

function p(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = d(e, false);
  return _.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t,
    disable: !n
  })
}
let h = {
    isNewHeaderAndInteractions: false,
    isNewCardDesign: false,
    isBottomSheetInteractions: false,
    uxVariation: "default"
  },
  m = (0, Chunk427164.le)({
    name: "2025-09-destination-icymi-ux-v2",
    kind: "user",
    defaultConfig: h,
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
  }),
  g = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-10_icymi_desktop_client",
    label: "ICYMI desktop client",
    defaultConfig: {
      icymiDesktopEnabled: false
    },
    treatments: [{
      id: 1,
      label: "Enable ICYMI desktop client",
      config: {
        icymiDesktopEnabled: true
      }
    }]
  })
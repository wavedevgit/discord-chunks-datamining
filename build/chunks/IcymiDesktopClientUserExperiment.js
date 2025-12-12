/** Chunk was on web.js **/
/** chunk id: 518929, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  VZ: () => u,
  ZY: () => d,
  b5: () => c,
  q3: () => p
});
var Chunk818083 = require("./818083.js"),
  Chunk638395 = require("./638395.js"),
  Chunk171393 = require("./171393.js"),
  Chunk987338 = require("./987338.js");
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
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = (0, o.Z)(s),
    r = l.useExperiment({
      location: e
    }, {
      autoTrackExposure: t,
      disable: n
    }),
    i = _.useExperiment({
      location: e
    }, {
      autoTrackExposure: false,
      disable: !r.enabled
    });
  return r.enabled && i.icymiDesktopEnabled
}

function u(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = i.Z.get(s),
    r = l.getCurrentConfig({
      location: e
    }, {
      autoTrackExposure: t,
      disable: n
    });
  {
    let t = _.getCurrentConfig({
      location: e
    }, {
      autoTrackExposure: false,
      disable: !r.enabled
    });
    return r.enabled && t.icymiDesktopEnabled
  }
}
let d = (0, Chunk818083.B)({
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
  f = (0, Chunk818083.B)({
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
    n = u(e, false);
  return f.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t,
    disable: !n
  })
}
let _ = (0, Chunk818083.B)({
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
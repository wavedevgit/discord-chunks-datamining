/** Chunk was on web.js **/
/** chunk id: 335934, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E2: () => d,
  HF: () => u,
  c: () => c,
  o$: () => p
});
var Chunk600975 = require("./600975.js"),
  Chunk303622 = require("./303622.js"),
  Chunk735729 = require("./735729.js"),
  Chunk688151 = require("./688151.js");
let o = "hide_icymi_tab",
  l = (0, Chunk600975.C)({
    kind: "user",
    id: "2024-07_icymi",
    label: "In-case-you-missed-it tab",
    commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN_MOBILE,
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
    n = (0, a.A)(o),
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
    n = i.A.get(o),
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
let d = (0, Chunk600975.C)({
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
  f = (0, Chunk600975.C)({
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
let _ = (0, Chunk600975.C)({
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
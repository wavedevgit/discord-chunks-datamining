/** Chunk was on web.js **/
/** chunk id: 32300, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J0: () => E,
  NW: () => l,
  OV: () => o,
  Rb: () => s,
  Se: () => _,
  XE: () => c,
  YB: () => m,
  Yo: () => u,
  dj: () => d,
  hS: () => p,
  mB: () => h,
  o4: () => a,
  qA: () => g,
  td: () => f
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2024-10_overlay_v3",
  label: "Overlay V3 Shared Context OOP",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  defaultConfig: {
    overlayV3tech: false,
    overlayV3UI: false,
    allowActivityWidget: false,
    allowNowPlaying: false
  },
  treatments: [{
    id: 1,
    label: "Use Overlay V3, All features included.",
    config: {
      overlayV3tech: true,
      overlayV3UI: true,
      allowActivityWidget: true,
      allowNowPlaying: true
    }
  }, {
    id: 2,
    label: 'Use Overlay V3, Minus "Now Playing" Notif.',
    config: {
      overlayV3tech: true,
      overlayV3UI: true,
      allowActivityWidget: true,
      allowNowPlaying: false
    }
  }, {
    id: 3,
    label: "Use Overlay V3 minus any activity",
    config: {
      overlayV3tech: true,
      overlayV3UI: true,
      allowActivityWidget: false,
      allowNowPlaying: false
    }
  }, {
    id: 4,
    label: "Use Overlay V3 tech with Overlay 2 UI",
    config: {
      overlayV3tech: true,
      overlayV3UI: false,
      allowActivityWidget: false,
      allowNowPlaying: false
    }
  }]
});

function a(e) {
  return o.useExperiment({
    location: e
  })
}

function s(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return o.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  })
}

function l(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return s(e, t).overlayV3tech
}

function c(e) {
  return a(e).overlayV3tech
}

function u(e) {
  return s(e).allowNowPlaying
}
let d = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-06_overlay_raf_manager",
  label: "Overlay RAF Manager",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable RAF Manager",
    config: {
      enabled: true
    }
  }]
});

function f(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return d.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  })
}
let _ = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-06_overlay_render_timeout",
  label: "Overlay Render Timeout",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  defaultConfig: {
    shortTimeout: 8e3,
    longTimeout: 12e3
  },
  treatments: [{
    id: 1,
    label: "Shortest Timeouts (2s, 3s)",
    config: {
      shortTimeout: 2e3,
      longTimeout: 3e3
    }
  }, {
    id: 2,
    label: "Medium Timeouts (4s, 6s)",
    config: {
      shortTimeout: 4e3,
      longTimeout: 6e3
    }
  }, {
    id: 3,
    label: "Longer Timeouts (16s, 24s)",
    config: {
      shortTimeout: 16e3,
      longTimeout: 24e3
    }
  }]
});

function p(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return _.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  })
}
let h = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-07_overlay_default_disable",
  label: "Overlay Default Disable",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable Default Disable Behavior",
    config: {
      enabled: true
    }
  }]
});

function m(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return h.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  }).enabled
}
let g = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-07_overlay_oop_nudge",
  label: "Overlay OOP Nudge",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  defaultConfig: {
    useContextualNudge: false,
    disableNudge: false
  },
  treatments: [{
    id: 1,
    label: "Enable Contextual Nudge",
    config: {
      useContextualNudge: true,
      disableNudge: false
    }
  }, {
    id: 2,
    label: "No Nudge",
    config: {
      useContextualNudge: false,
      disableNudge: true
    }
  }]
});

function E(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return g.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  })
}
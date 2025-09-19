/** Chunk was on web.js **/
/** chunk id: 32300, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J0: () => b,
  NW: () => c,
  OV: () => o,
  RD: () => y,
  Rb: () => l,
  Se: () => p,
  XE: () => u,
  YB: () => g,
  Yo: () => d,
  aq: () => I,
  dj: () => f,
  eV: () => C,
  hS: () => h,
  lj: () => v,
  mB: () => m,
  o4: () => s,
  qA: () => E,
  tU: () => S,
  td: () => _
});
var Chunk818083 = require("./818083.js"),
  Chunk427164 = require("./427164.js"),
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

function s(e) {
  return o.useExperiment({
    location: e
  })
}

function l(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return o.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  })
}

function c(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return l(e, t).overlayV3tech
}

function u(e) {
  return s(e).overlayV3tech
}

function d(e) {
  return l(e).allowNowPlaying
}
let f = (0, Chunk818083.B)({
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

function _(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return f.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  })
}
let p = (0, Chunk818083.B)({
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

function h(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return p.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  })
}
let m = (0, Chunk818083.B)({
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

function g(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return m.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  }).enabled
}
let E = (0, Chunk818083.B)({
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

function b(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return E.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  })
}
var y = function(e) {
  return e[e.GREEN_BUTTON_WITH_TEXT = 0] = "GREEN_BUTTON_WITH_TEXT", e[e.GRAY_BUTTON_WITH_TEXT = 1] = "GRAY_BUTTON_WITH_TEXT", e[e.SINGLE_ICON_BUTTON = 2] = "SINGLE_ICON_BUTTON", e
}({});
let O = (0, Chunk427164.le)({
  name: "2025-08-overlay-stream-watch-nudge",
  kind: "user",
  defaultConfig: {
    enabled: false,
    designVariant: null
  },
  variations: {
    1: {
      enabled: true,
      designVariant: 0
    },
    2: {
      enabled: true,
      designVariant: 1
    },
    3: {
      enabled: true,
      designVariant: 2
    }
  }
});

function v(e) {
  return O.getConfig({
    location: e
  })
}

function I(e) {
  return O.useConfig({
    location: e
  })
}
let T = (0, Chunk427164.le)({
  name: "2025-08-overlay-v3-one-click-go-live",
  kind: "user",
  defaultConfig: {
    oneClickGoLiveEnabled: false,
    useStreamCtaCopy: false
  },
  variations: {
    1: {
      oneClickGoLiveEnabled: false,
      useStreamCtaCopy: true
    },
    2: {
      oneClickGoLiveEnabled: true,
      useStreamCtaCopy: true
    }
  }
});

function S(e) {
  return T.getConfig({
    location: e
  })
}
let A = (0, Chunk427164.le)({
  name: "2025-09-overlay-default-keybind",
  kind: "user",
  defaultConfig: {
    keybindOverride: true
  },
  variations: {
    1: {
      keybindOverride: "alt+a"
    }
  }
});

function C(e) {
  return A.getConfig({
    location: e
  })
}
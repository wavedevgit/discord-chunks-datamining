/** Chunk was on web.js **/
/** chunk id: 32300, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F3: () => R,
  KK: () => A,
  RD: () => _,
  Se: () => u,
  Sy: () => I,
  T_: () => P,
  YB: () => p,
  ZU: () => y,
  aq: () => g,
  dj: () => l,
  eV: () => O,
  hS: () => d,
  hb: () => S,
  lj: () => h,
  mB: () => f,
  tU: () => b,
  td: () => c
});
var Chunk348327 = require("./348327.js"),
  i = require.n(Chunk348327),
  Chunk818083 = require("./818083.js"),
  Chunk427164 = require("./427164.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
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

function c(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return l.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  })
}
let u = (0, Chunk818083.B)({
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

function d(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return u.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  })
}
let f = (0, Chunk818083.B)({
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

function p(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return f.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  }).enabled
}
var _ = function(e) {
  return e[e.GREEN_BUTTON_WITH_TEXT = 0] = "GREEN_BUTTON_WITH_TEXT", e[e.GRAY_BUTTON_WITH_TEXT = 1] = "GRAY_BUTTON_WITH_TEXT", e[e.SINGLE_ICON_BUTTON = 2] = "SINGLE_ICON_BUTTON", e
}({});
let m = (0, Chunk427164.le)({
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

function h(e) {
  return m.getConfig({
    location: e
  })
}

function g(e) {
  return m.useConfig({
    location: e
  })
}
let E = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-10_overlay_v3_one_click_go_live",
  label: "Overlay V3 One Click Go Live",
  defaultConfig: {
    oneClickGoLiveEnabled: false,
    useStreamCtaCopy: false
  },
  treatments: [{
    id: 1,
    label: "Use Stream CTA Copy",
    config: {
      oneClickGoLiveEnabled: false,
      useStreamCtaCopy: true
    }
  }, {
    id: 2,
    label: "Enable One Click Go Live with Stream CTA Copy",
    config: {
      oneClickGoLiveEnabled: true,
      useStreamCtaCopy: true
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
let y = (0, Chunk818083.B)({
  id: "2025-10_overlay_default_keybind",
  label: "Overlay Default Keybind",
  kind: "user",
  defaultConfig: {
    keybindOverride: true
  },
  treatments: [{
    id: 1,
    label: "Ctrl + Tab Keybind",
    config: {
      keybindOverride: "ctrl+tab"
    }
  }, {
    id: 2,
    label: "Alt + X Keybind",
    config: {
      keybindOverride: "alt+x"
    }
  }, {
    id: 3,
    label: "Ctrl + L Keybind",
    config: {
      keybindOverride: "ctrl+l"
    }
  }]
});

function O(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return y.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  })
}
let v = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-10_overlay_negative_widget_testing",
  label: "Overlay Negative Widget Testing",
  defaultConfig: {
    voiceWidgetDefaultUnpinned: false,
    videoWidgetDefaultUnpinned: false,
    disableWelcomeNotification: false,
    notificationsDefaultOff: false,
    unlockedOnlyDefaultOverlay: false
  },
  treatments: [{
    id: 1,
    label: "Voice Widget Default Unpinned",
    config: {
      voiceWidgetDefaultUnpinned: true,
      videoWidgetDefaultUnpinned: false,
      disableWelcomeNotification: false,
      notificationsDefaultOff: false,
      unlockedOnlyDefaultOverlay: false
    }
  }, {
    id: 2,
    label: "Video Widget Default Unpinned",
    config: {
      voiceWidgetDefaultUnpinned: false,
      videoWidgetDefaultUnpinned: true,
      disableWelcomeNotification: false,
      notificationsDefaultOff: false,
      unlockedOnlyDefaultOverlay: false
    }
  }, {
    id: 3,
    label: "Disable Welcome Notification",
    config: {
      voiceWidgetDefaultUnpinned: false,
      videoWidgetDefaultUnpinned: false,
      disableWelcomeNotification: true,
      notificationsDefaultOff: false,
      unlockedOnlyDefaultOverlay: false
    }
  }, {
    id: 4,
    label: "Notifications Default Off",
    config: {
      voiceWidgetDefaultUnpinned: false,
      videoWidgetDefaultUnpinned: false,
      disableWelcomeNotification: false,
      notificationsDefaultOff: true,
      unlockedOnlyDefaultOverlay: false
    }
  }, {
    id: 5,
    label: "Unlocked Only Default Overlay",
    config: {
      voiceWidgetDefaultUnpinned: false,
      videoWidgetDefaultUnpinned: false,
      disableWelcomeNotification: false,
      notificationsDefaultOff: false,
      unlockedOnlyDefaultOverlay: true
    }
  }]
});

function S(e) {
  let t = I(e, false);
  if (i()(v.definition.defaultConfig, t)) return "control";
  let n = v.definition.treatments.find(e => i()(e.config, t));
  return null == n ? "control" : "treatment-".concat(n.id)
}

function I(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return v.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  })
}
let T = (0, Chunk818083.B)({
  id: "2025-11_overlay_welcome_notification",
  label: "Overlay Welcome Notification",
  kind: "user",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Modular Experience",
    config: {
      enabled: true
    }
  }]
});

function A(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return T.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  })
}
let C = (0, Chunk818083.B)({
  id: "2025-11_overlay_bug_reporter",
  label: "Overlay Bug Reporter",
  kind: "user",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable Bug Reporter",
    config: {
      enabled: true
    }
  }]
});

function N(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return C.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  })
}

function P(e) {
  return C.useExperiment({
    location: e
  }).enabled
}

function R() {
  h("OVERLAY_INITIALIZED"), b("OVERLAY_INITIALIZED"), I("OVERLAY_INITIALIZED"), A("OVERLAY_INITIALIZED"), N("OVERLAY_INITIALIZED")
}
/** Chunk was on web.js **/
/** chunk id: 556019, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  qt: () => c
});
var Chunk203311 = require("./203311.js"),
  Chunk818083 = require("./818083.js");
let a = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-04_emoji_studio",
    label: "Emoji Studio",
    defaultConfig: {
      enabled: false,
      showExpressionPickerButton: false
    },
    treatments: [{
      id: 1,
      label: "Enabled - New Modal",
      config: {
        enabled: true,
        showExpressionPickerButton: false
      }
    }, {
      id: 2,
      label: "Enabled - New Modal with Expression Picker Button",
      config: {
        enabled: true,
        showExpressionPickerButton: true
      }
    }, {
      id: 3,
      label: "Enabled - New Entrypoint Only",
      config: {
        enabled: false,
        showExpressionPickerButton: true
      }
    }]
  }),
  o = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-07_emoji_studio_mobile",
    label: "Emoji Studio (Mobile)",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Enabled",
      config: {
        enabled: true
      }
    }]
  }),
  s = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-08_emoji_studio_entrypoint",
    label: "Emoji Studio Entrypoint",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Enabled",
      config: {
        enabled: true
      }
    }]
  }),
  l = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-08-emoji_studio_speedrun",
    label: "Emoji Studio V2 Speedrun",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Enabled - Instant Upload, Emoji Editing Support",
      config: {
        enabled: true
      }
    }]
  });

function c(e) {
  let {
    location: t,
    autoTrackExposure: n,
    disable: i = false
  } = e, c = (0, r.$u)(t), {
    enabled: u,
    showExpressionPickerButton: d
  } = a.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: c || i
  }), {
    enabled: f
  } = o.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: c || i
  }), {
    enabled: _
  } = s.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: c || i
  }), {
    enabled: p
  } = l.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: c || i
  });
  return {
    enabled: u,
    isMobileEnabled: f,
    isEntrypointEnabled: d || _ || p,
    isEntrypointExperimentEnabled: _,
    isV2SpeedrunExperimentEnabled: p
  }
}
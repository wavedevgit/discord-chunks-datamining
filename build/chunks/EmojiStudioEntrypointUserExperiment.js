/** Chunk was on web.js **/
/** chunk id: 556019, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  qt: () => l
});
var Chunk203311 = require("./203311.js"),
  Chunk818083 = require("./818083.js");
let o = (0, Chunk818083.B)({
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
  a = (0, Chunk818083.B)({
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
  });

function l(e) {
  let {
    location: t,
    autoTrackExposure: n,
    disable: i = false
  } = e, l = (0, r.$u)(t), {
    enabled: c,
    showExpressionPickerButton: u
  } = o.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: l || i
  }), {
    enabled: d
  } = a.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: l || i
  }), {
    enabled: f
  } = s.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: l || i
  });
  return {
    enabled: c,
    isMobileEnabled: d,
    isEntrypointEnabled: f || u,
    isEntrypointExperimentEnabled: f
  }
}
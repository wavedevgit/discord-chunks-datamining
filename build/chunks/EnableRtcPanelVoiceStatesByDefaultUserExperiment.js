/** Chunk was on web.js **/
/** chunk id: 262572, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => a,
  t: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk751823 = require("./751823.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-08_enable_rtc_panel_voice_states_by_default",
  label: "Enable RTC panel voice states by default experiment",
  defaultConfig: {
    enableRTCPanelVoiceStatesByDefault: false
  },
  treatments: [{
    id: 1,
    label: "Enable RTC panel voice states by default",
    config: {
      enableRTCPanelVoiceStatesByDefault: true
    }
  }]
});

function a(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = i.L.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return o.getCurrentConfig({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  })
}

function s(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = i.L.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return o.useExperiment({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  })
}
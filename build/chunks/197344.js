/** Chunk was on web.js **/
/** chunk id: 197344, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk378364 = require("./378364.js");

function i() {
  return a() && Chunk378364.Z.experiment.getCurrentConfig({
    location: "holiday_events_is_eligible"
  }, {
    autoTrackExposure: false
  }).enabled
}

function o() {
  let {
    enabled: e
  } = Chunk378364.Z.experiment.useExperiment({
    location: "holiday_events_use_eligible"
  }, {
    autoTrackExposure: false
  });
  return a() && module
}

function a() {
  let e = Date.now();
  return module >= Chunk378364.Z.startTimeMs && module <= Chunk378364.Z.endTimeMs
}

function s() {
  return i() && Chunk378364.Z.soundpack ? Chunk378364.Z.soundpack : null
}
let l = {
  subscribe: function(e) {
    return r.Z.experiment.subscribe({
      location: "holiday_events_subscribe"
    }, e)
  },
  isEligible: i,
  useHolidaySoundpack: function() {
    return o() && Chunk378364.Z.soundpack && null != Chunk378364.Z.soundpackLabel ? {
      soundpack: Chunk378364.Z.soundpack,
      soundpackLabel: Chunk378364.Z.soundpackLabel
    } : null
  },
  useIsEligible: o,
  getAppSpinnerSources: function() {
    return a() ? Chunk378364.Z.appSpinnerSources : null
  },
  getLoadingTips: function() {
    var e;
    return a() ? null == (e = Chunk378364.Z.getLoadingTips) ? true : module.call(Chunk378364.Z) : null
  },
  getHolidaySoundpack: s
}
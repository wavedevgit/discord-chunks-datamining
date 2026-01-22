/** Chunk was on web.js **/
/** chunk id: 552122, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk223567 = require("./223567.js");

function i() {
  return s() && r.A.experiment.getCurrentConfig({
    location: "holiday_events_is_eligible"
  }, {
    autoTrackExposure: false
  }).enabled
}

function a() {
  let {
    enabled: e
  } = r.A.experiment.useExperiment({
    location: "holiday_events_use_eligible"
  }, {
    autoTrackExposure: false
  });
  return s() && e
}

function s() {
  let e = Date.now();
  return e >= r.A.startTimeMs && e <= r.A.endTimeMs
}

function o() {
  return i() && r.A.soundpack ? r.A.soundpack : null
}
let l = {
  subscribe: function(e) {
    return r.A.experiment.subscribe({
      location: "holiday_events_subscribe"
    }, e)
  },
  isEligible: i,
  useHolidaySoundpack: function() {
    return a() && r.A.soundpack && null != r.A.soundpackLabel ? {
      soundpack: r.A.soundpack,
      soundpackLabel: r.A.soundpackLabel
    } : null
  },
  useIsEligible: a,
  getAppSpinnerSources: function() {
    return s() ? r.A.appSpinnerSources : null
  },
  getLoadingTips: function() {
    var e;
    return s() ? null == (e = r.A.getLoadingTips) ? true : e.call(r.A) : null
  },
  getHolidaySoundpack: o
}
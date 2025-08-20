/** Chunk was on web.js **/
/** chunk id: 520278, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n, r) {
  let {
    enabled: i
  } = e.useExperiment({
    location: r
  }, {
    autoTrackExposure: false
  });
  return !!n.config.features.includes(t) && (e.trackExposure({
    location: r
  }), i)
}
require.d(exports, {
  J: () => r
})
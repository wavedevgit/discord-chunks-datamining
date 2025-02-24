/** Chunk was on 40580 **/
"use strict";
r.d(t, {
  N: () => s
});
var n = r(520540);

function s(e) {
  let {
    enabled: t,
    eligibleToFetch: r
  } = n.g.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  });
  return {
    enabled: t,
    eligibleToFetch: r
  }
}
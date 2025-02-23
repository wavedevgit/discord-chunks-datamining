/** Chunk was on 40580 (32d7a9293deb2c0d.js) **/
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
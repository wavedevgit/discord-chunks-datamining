/** Chunk was on 23736 **/
/** chunk id: 659158, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => l
});
var Chunk427164 = require("./427164.js"),
  Chunk438379 = require("./438379.js");
let i = (0, Chunk427164.le)({
  name: "2025-12-user-profile-application-widgets-coachmarks",
  kind: "user",
  defaultConfig: {
    enabled: false
  },
  variations: {
    0: {
      enabled: false
    },
    1: {
      enabled: true
    }
  }
});

function l(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, a = (0, r.J)({
    location: t,
    autoTrackExposure: n
  }), l = i.useConfig({
    location: t
  }).enabled;
  return !a && l
}
/** Chunk was on 31553 **/
/** chunk id: 823816, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  m: () => o
});
var Chunk427164 = require("./427164.js"),
  Chunk438379 = require("./438379.js");
let r = (0, Chunk427164.le)({
  name: "2025-09-user-profile-application-widgets-viewing",
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

function o(e) {
  let {
    location: n,
    autoTrackExposure: t = true
  } = e, l = (0, i.J)({
    location: n,
    autoTrackExposure: t
  }), o = r.useConfig({
    location: n
  }).enabled;
  return !l && o
}
/** Chunk was on 70205 **/
/** chunk id: 687272, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  QU: () => r,
  _x: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk432919 = require("./432919.js");
let a = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-06_desktop_notifications_view_tracking",
    label: "Track when a desktop notification is viewed",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Track Notification View",
      config: {
        enabled: true
      }
    }]
  }),
  r = t => {
    let {
      enabled: e
    } = a.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: true
    });
    return e
  },
  o = (t, e) => {
    if (null == e) returnfalse;
    let n = (0, l.h)(e),
      i = r(t);
    return n && i
  }
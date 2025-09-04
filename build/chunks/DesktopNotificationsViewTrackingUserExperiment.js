/** Chunk was on 60831 **/
/** chunk id: 687272, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  QU: () => a,
  _x: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk432919 = require("./432919.js");
let r = (0, Chunk818083.B)({
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
  a = e => {
    let {
      enabled: t
    } = r.getCurrentConfig({
      location: e
    }, {
      autoTrackExposure: true
    });
    return t
  },
  o = (e, t) => {
    if (null == t) returnfalse;
    let n = (0, i.h)(t),
      l = a(e);
    return n && l
  }
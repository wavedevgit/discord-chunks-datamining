/** Chunk was on 4670 **/
/** chunk id: 662826, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  g: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk274372 = require("./274372.js"),
  Chunk915618 = require("./915618.js"),
  Chunk399925 = require("./399925.js"),
  Chunk670470 = require("./670470.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let c = (0, Chunk419954.zD)(Chunk780964.X.CLIPS_VIEWERSIDE_CLIPS_SETTING, {
  useTitle: () => T.intl.string(T.t.NWw7kY),
  useSubtitle: () => T.intl.string(T.t["0vjy8N"]),
  useValue: function() {
    return (0, n.bG)([l.A], () => l.A.getSettings().viewerClipsEnabled)
  },
  setValue: e => r.Wn({
    enabled: e,
    trackAnalytics: true
  }),
  usePredicate: function() {
    let {
      enableViewerClipping: e
    } = a.A.useExperiment({
      location: "Data & Privacy"
    }, {
      autoTrackExposure: false
    }), t = (0, n.bG)([o.A], () => (0, s.A)(o.A));
    return e && t
  }
})
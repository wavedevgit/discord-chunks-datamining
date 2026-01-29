/** Chunk was on 4670 **/
/** chunk id: 509725, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk311907 = require("./311907.js"),
  Chunk734066 = require("./734066.js"),
  Chunk274372 = require("./274372.js"),
  Chunk399925 = require("./399925.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.zD)(Chunk780964.X.CLIPS_ENABLE_REMINDERS, {
  useTitle: () => o.intl.string(o.t["3zwNf6"]),
  useSubtitle: () => o.intl.string(o.t.m4Cjj9),
  useValue: () => (0, n.bG)([s.A], () => s.A.getSettings().remindersEnabled),
  setValue: e => r.Mt(e),
  usePredicate: () => {
    let {
      showClipsHeaderEntrypoint: e
    } = l.L_.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: false
    });
    return e
  }
})
/** Chunk was on 77069 **/
/** chunk id: 518517, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  b: () => T
});
var Chunk442837 = require("./442837.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.qs)(Chunk313789.n.CLIPS_ENABLE_REMINDERS, {
  useTitle: () => o.intl.string(o.t["3zwNf6"]),
  useSubtitle: () => o.intl.string(o.t.m4Cjj9),
  useValue: () => (0, i.e7)([s.Z], () => s.Z.getSettings().remindersEnabled),
  setValue: t => u.N0(t),
  usePredicate: () => {
    let {
      showClipsHeaderEntrypoint: t
    } = l.NV.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: false
    });
    return t
  }
})
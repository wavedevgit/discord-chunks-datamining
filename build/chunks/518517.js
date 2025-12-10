/** Chunk was on 77069 **/
/** chunk id: 518517, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  b: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.qs)(Chunk313789.n.CLIPS_ENABLE_REMINDERS, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["3zwNf6"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.m4Cjj9),
  useValue: () => (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getSettings().remindersEnabled),
  setValue: t => r.N0(t),
  usePredicate: () => {
    let {
      showClipsHeaderEntrypoint: t
    } = Chunk924557.NV.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: false
    });
    return module
  }
})
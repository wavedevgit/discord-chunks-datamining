/** Chunk was on 9452 **/
/** chunk id: 185016, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk100527 = require("./100527.js"),
  Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk569550 = require("./569550.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.qs)(Chunk313789.n.STREAMING_SHOW_STREAM_PREVIEWS, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.e3Zz3F),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.RztTjP),
  useValue: function() {
    var t;
    return !(null != (t = Chunk695346.I0.useSetting()) && module)
  },
  setValue: function(t) {
    (0, s.Z)("stream_previews_disabled", !t, r.I0.getSetting(), [i.Z.USER_SETTINGS_VOICE_AND_VIDEO]), r.I0.updateSetting(!t)
  }
})
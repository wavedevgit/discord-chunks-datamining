/** Chunk was on 77069 **/
/** chunk id: 185016, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  n: () => o
});
var Chunk100527 = require("./100527.js"),
  Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk569550 = require("./569550.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.qs)(Chunk313789.n.STREAMING_SHOW_STREAM_PREVIEWS, {
  useTitle: () => a.intl.string(a.t.e3Zz3F),
  useSubtitle: () => a.intl.string(a.t.RztTjP),
  useValue: function() {
    var t;
    return !(null != (t = s.I0.useSetting()) && t)
  },
  setValue: function(t) {
    (0, r.Z)("stream_previews_disabled", !t, s.I0.getSetting(), [i.Z.USER_SETTINGS_VOICE_AND_VIDEO]), s.I0.updateSetting(!t)
  }
})
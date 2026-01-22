/** Chunk was on 28979 **/
/** chunk id: 559390, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  H: () => o
});
var Chunk793574 = require("./793574.js"),
  Chunk419954 = require("./419954.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk698723 = require("./698723.js"),
  Chunk985018 = require("./985018.jsx");
let o = (0, Chunk419954.zD)(Chunk780964.X.STREAMING_SHOW_STREAM_PREVIEWS, {
  useTitle: () => a.intl.string(a.t.e3Zz3F),
  useSubtitle: () => a.intl.string(a.t.RztTjP),
  useValue: function() {
    var t;
    return !(null != (t = s.uh.useSetting()) && t)
  },
  setValue: function(t) {
    (0, u.A)("stream_previews_disabled", !t, s.uh.getSetting(), [n.A.USER_SETTINGS_VOICE_AND_VIDEO]), s.uh.updateSetting(!t)
  }
})
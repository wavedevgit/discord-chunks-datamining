/** Chunk was on 4670 **/
/** chunk id: 559390, original params: e,t,i (module,exports,require) **/
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
  useTitle: () => u.intl.string(u.t.e3Zz3F),
  useSubtitle: () => u.intl.string(u.t.RztTjP),
  useValue: function() {
    var e;
    return !(null != (e = s.uh.useSetting()) && e)
  },
  setValue: function(e) {
    (0, a.A)("stream_previews_disabled", !e, s.uh.getSetting(), [n.A.USER_SETTINGS_VOICE_AND_VIDEO]), s.uh.updateSetting(!e)
  }
})
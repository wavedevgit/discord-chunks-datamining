/** Chunk was on 28979 **/
/** chunk id: 923159, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Q: () => T
});
var Chunk311907 = require("./311907.js"),
  Chunk817281 = require("./817281.js"),
  Chunk419954 = require("./419954.js"),
  Chunk964404 = require("./964404.js"),
  Chunk780964 = require("./780964.js"),
  Chunk698723 = require("./698723.js"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk419954.zD)(Chunk780964.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
  useTitle: () => o.intl.string(o.t.jrWHD3),
  useSubtitle: () => o.intl.string(o.t.YCCMkJ),
  useValue: function() {
    return (0, n.bG)([r.Ay], () => !r.Ay.disableVoiceChannelChangeAlert)
  },
  setValue: function(t) {
    (0, a.A)("switch_channel_warning_enabled", t, !r.Ay.disableVoiceChannelChangeAlert), l.Ay.updatedUnsyncedSettings({
      disableVoiceChannelChangeAlert: !t
    })
  }
})
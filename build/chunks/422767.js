/** Chunk was on 77069 **/
/** chunk id: 422767, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  n: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk153867 = require("./153867.js"),
  Chunk509613 = require("./509613.js"),
  Chunk740492 = require("./740492.js"),
  Chunk313789 = require("./313789.js"),
  Chunk569550 = require("./569550.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.qs)(Chunk313789.n.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.jrWHD3),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.YCCMkJ),
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk740492.ZP], () => !Chunk740492.ZP.disableVoiceChannelChangeAlert)
  },
  setValue: function(t) {
    (0, a.Z)("switch_channel_warning_enabled", t, !u.ZP.disableVoiceChannelChangeAlert), l.ZP.updatedUnsyncedSettings({
      disableVoiceChannelChangeAlert: !t
    })
  }
})
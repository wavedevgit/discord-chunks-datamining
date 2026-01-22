/** Chunk was on 28979 **/
/** chunk id: 766850, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  C: () => o
});
var Chunk399925 = require("./399925.js"),
  Chunk419954 = require("./419954.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk985018 = require("./985018.jsx");
let o = (0, Chunk419954.zD)(Chunk780964.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
  useTitle: () => a.intl.string(a.t.AGDDkH),
  useSubtitle: () => a.intl.string(a.t["wW9/zQ"]),
  useValue: () => s.Q$.useSetting(),
  setValue: t => n.eQ({
    allowVoiceRecording: t
  }),
  usePredicate: function() {
    return (0, u.$m)("DataAndPrivacyPanel")
  }
})
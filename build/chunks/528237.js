/** Chunk was on 28979 **/
/** chunk id: 528237, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  m: () => T
});
var Chunk419954 = require("./419954.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk419954.zD)(Chunk780964.X.TEXT_TO_SPEECH_COMMAND, {
  useTitle: () => o.intl.string(o.t["btbS+Z"]),
  useSubtitle: () => {
    let t = (0, r.dk)("TextToSpeechCommandSetting");
    return o.intl.format(o.t.Q5crhR, {
      onClick: () => (0, u.openUserSettings)(t ? s.X.TTS_PLAYBACK_RATE : s.X.ACCESSIBILITY_PANEL, {
        section: a.nc_.ACCESSIBILITY
      })
    })
  },
  useValue: Chunk253932.on.useSetting,
  setValue: Chunk253932.on.updateSetting
})
/** Chunk was on 28979 **/
/** chunk id: 528237, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  m: () => o
});
var Chunk419954 = require("./419954.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let o = (0, Chunk419954.zD)(Chunk780964.X.TEXT_TO_SPEECH_COMMAND, {
  useTitle: () => a.intl.string(a.t["btbS+Z"]),
  useSubtitle: () => a.intl.format(a.t.Q5crhR, {
    onClick: () => (0, r.openUserSettings)(s.X.ACCESSIBILITY_PANEL, {
      section: u.nc_.ACCESSIBILITY
    })
  }),
  useValue: Chunk253932.on.useSetting,
  setValue: Chunk253932.on.updateSetting
})
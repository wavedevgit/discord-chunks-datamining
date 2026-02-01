/** Chunk was on 30485 **/
/** chunk id: 604434, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  m: () => o
});
var Chunk419954 = require("./419954.js"),
  Chunk954571 = require("./954571.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let o = (0, Chunk419954.zD)(Chunk780964.X.CHAT_TEXT_BOX_PREVIEWS, {
  useTitle: () => a.intl.string(a.t.AqGrEI),
  useValue: Chunk253932.SI.useSetting,
  setValue: t => {
    l.default.track(u.HAw.PREVIEW_MARKDOWN_TOGGLED, {
      enabled: t,
      location: {
        section: u.JJy.SETTINGS_TEXT_AND_IMAGES
      }
    }), s.SI.updateSetting(t)
  }
})
/** Chunk was on 28979 **/
/** chunk id: 456518, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  T: () => T
});
var Chunk704591 = require("./704591.js"),
  Chunk419954 = require("./419954.js"),
  Chunk954571 = require("./954571.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk419954.zD)(Chunk780964.X.CHAT_SOUNDMOJI_AUTOCOMPLETE, {
  useTitle: () => o.intl.string(o.t["CtYr+U"]),
  useSubtitle: () => o.intl.string(o.t.hrSIhN),
  useValue: Chunk253932.eK.useSetting,
  setValue: t => {
    s.default.track(a.HAw.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
      checked: t,
      location: {
        section: a.JJy.SETTINGS_TEXT_AND_IMAGES
      }
    }), r.eK.updateSetting(t)
  },
  usePredicate: () => (0, n.AA)({
    location: "SoundmojiAutocomplete"
  })
})
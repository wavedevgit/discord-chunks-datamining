/** Chunk was on 77069 **/
/** chunk id: 533840, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  U: () => c
});
var Chunk125900 = require("./125900.js"),
  Chunk509613 = require("./509613.js"),
  Chunk626135 = require("./626135.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.qs)(Chunk313789.n.CHAT_SOUNDMOJI_AUTOCOMPLETE, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["CtYr+U"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.hrSIhN),
  useValue: Chunk695346.eR.useSetting,
  setValue: t => {
    s.default.track(a.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
      checked: t,
      location: {
        section: a.jXE.SETTINGS_TEXT_AND_IMAGES
      }
    }), u.eR.updateSetting(t)
  },
  usePredicate: () => (0, Chunk125900.dX)({
    location: "SoundmojiAutocomplete"
  })
})
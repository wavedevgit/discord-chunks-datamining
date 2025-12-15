/** Chunk was on 77069 **/
/** chunk id: 700316, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  V: () => o
});
var Chunk509613 = require("./509613.js"),
  Chunk626135 = require("./626135.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.qs)(Chunk313789.n.CHAT_TEXT_BOX_PREVIEWS, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.AqGrEI),
  useValue: Chunk695346.R$.useSetting,
  setValue: t => {
    l.default.track(r.rMx.PREVIEW_MARKDOWN_TOGGLED, {
      enabled: t,
      location: {
        section: r.jXE.SETTINGS_TEXT_AND_IMAGES
      }
    }), s.R$.updateSetting(t)
  }
})
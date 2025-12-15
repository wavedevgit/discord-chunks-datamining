/** Chunk was on 77069 **/
/** chunk id: 303789, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  n: () => c
});
var Chunk100527 = require("./100527.js"),
  Chunk509613 = require("./509613.js"),
  Chunk626135 = require("./626135.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.qs)(Chunk313789.n.CHAT_STICKERS_AUTOCOMPLETE, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["29xPVZ"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["/eVrj8"]),
  useValue: Chunk695346.fq.useSetting,
  setValue: t => {
    s.default.track(a.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
      enabled: t,
      location: {
        section: a.jXE.SETTINGS_TEXT_AND_IMAGES
      },
      location_stack: [i.Z.TEXT_AND_IMAGES]
    }), u.fq.updateSetting(t)
  }
})
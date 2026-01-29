/** Chunk was on 4670 **/
/** chunk id: 247865, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  k: () => d
});
var Chunk793574 = require("./793574.js"),
  Chunk419954 = require("./419954.js"),
  Chunk954571 = require("./954571.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.zD)(Chunk780964.X.CHAT_STICKERS_AUTOCOMPLETE, {
  useTitle: () => o.intl.string(o.t["29xPVZ"]),
  useSubtitle: () => o.intl.string(o.t["/eVrj8"]),
  useValue: Chunk253932.ML.useSetting,
  setValue: e => {
    s.default.track(u.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
      enabled: e,
      location: {
        section: u.JJy.SETTINGS_TEXT_AND_IMAGES
      },
      location_stack: [n.A.TEXT_AND_IMAGES]
    }), r.ML.updateSetting(e)
  }
})
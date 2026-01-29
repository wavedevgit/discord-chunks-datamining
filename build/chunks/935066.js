/** Chunk was on 4670 **/
/** chunk id: 935066, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Y: () => d
});
var Chunk311907 = require("./311907.js"),
  Chunk817281 = require("./817281.js"),
  Chunk419954 = require("./419954.js"),
  Chunk964404 = require("./964404.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.zD)(Chunk780964.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
  useTitle: () => o.intl.string(o.t["//vhWi"]),
  usePredicate: () => a.hH.useSetting(),
  useValue: () => !(0, n.bG)([r.Ay], () => r.Ay.displayCompactAvatars),
  setValue: e => {
    l.Ay.updatedUnsyncedSettings({
      displayCompactAvatars: !e
    })
  }
})
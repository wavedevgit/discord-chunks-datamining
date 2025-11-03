/** Chunk was on 9452 **/
/** chunk id: 647916, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk509613 = require("./509613.js"),
  Chunk626135 = require("./626135.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.qs)(Chunk313789.n.CAMERA_PREVIEW_PREFERENCE, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["3Ppr1h"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.WNbX4O),
  useValue: Chunk695346.qF.useSetting,
  setValue: t => {
    r.qF.updateSetting(t), l.default.track(s.rMx.UPDATE_USER_SETTINGS_LOCAL, {
      always_preview_video: t
    })
  }
})
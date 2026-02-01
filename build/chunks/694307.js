/** Chunk was on 30485 **/
/** chunk id: 694307, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  F: () => o
});
var Chunk419954 = require("./419954.js"),
  Chunk954571 = require("./954571.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let o = (0, Chunk419954.zD)(Chunk780964.X.CAMERA_PREVIEW_PREFERENCE, {
  useTitle: () => a.intl.string(a.t["3Ppr1h"]),
  useSubtitle: () => a.intl.string(a.t.WNbX4O),
  useValue: Chunk253932.bm.useSetting,
  setValue: t => {
    s.bm.updateSetting(t), l.default.track(u.HAw.UPDATE_USER_SETTINGS_LOCAL, {
      always_preview_video: t
    })
  }
})
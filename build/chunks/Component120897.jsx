/** Chunk was on 60449 **/
/** chunk id: 120897, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk253932 = require("./253932.js"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u() {
  let e = a.bm.useSetting();
  return (0, i.jsx)(l.x, {
    setting: o.H.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
    children: (0, i.jsx)(s.dOG, {
      label: d.intl.string(d.t["3Ppr1h"]),
      description: d.intl.string(d.t.WNbX4O),
      checked: e,
      onChange: e => {
        a.bm.updateSetting(e), r.default.track(c.HAw.UPDATE_USER_SETTINGS_LOCAL, {
          always_preview_video: e
        })
      }
    })
  })
}
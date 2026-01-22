/** Chunk was on web.js **/
/** chunk id: 120897, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
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

function d() {
  let e = o.bm.useSetting();
  return (0, r.jsx)(a.x, {
    setting: l.H.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
    children: (0, r.jsx)(i.dOG, {
      label: u.intl.string(u.t["3Ppr1h"]),
      description: u.intl.string(u.t.WNbX4O),
      checked: e,
      onChange: e => {
        o.bm.updateSetting(e), s.default.track(c.HAw.UPDATE_USER_SETTINGS_LOCAL, {
          always_preview_video: e
        })
      }
    })
  })
}
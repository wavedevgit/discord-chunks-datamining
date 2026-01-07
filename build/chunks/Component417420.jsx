/** Chunk was on web.js **/
/** chunk id: 417420, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk695346 = require("./695346.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d() {
  let e = s.qF.useSetting();
  return (0, r.jsx)(a.F, {
    setting: l.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
    children: (0, r.jsx)(i.rsf, {
      label: u.intl.string(u.t["3Ppr1h"]),
      description: u.intl.string(u.t.WNbX4O),
      checked: e,
      onChange: e => {
        s.qF.updateSetting(e), o.default.track(c.rMx.UPDATE_USER_SETTINGS_LOCAL, {
          always_preview_video: e
        })
      }
    })
  })
}
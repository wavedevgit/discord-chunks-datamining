/** Chunk was on web.js **/
/** chunk id: 555572, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk474397 = require("./474397.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  let {
    analyticsLocations: t
  } = (0, a.Ay)();
  return (0, r.jsx)(i.Drp, {
    id: "video-settings",
    label: f.intl.string(f.t.LKzQSF),
    action: () => {
      let n = (0, l.qz)("useVideoSettingsItem") ? o.X.CAMERA_CATEGORY : o.X.VOICE_AND_VIDEO_PANEL;
      (0, c.openUserSettings)(n, {
        section: u.nc_.VOICE,
        subsection: d.Ss,
        analyticsLocations: t
      }), (0, s.A)(e, e === u.BRT.POPOUT)
    },
    icon: i.Zes
  })
}
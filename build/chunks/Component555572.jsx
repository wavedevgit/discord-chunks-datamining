/** Chunk was on web.js **/
/** chunk id: 555572, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk474397 = require("./474397.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  let {
    analyticsLocations: t
  } = (0, a.Ay)();
  return (0, r.jsx)(i.Drp, {
    id: "video-settings",
    label: d.intl.string(d.t.LKzQSF),
    action: () => {
      (0, l.openUserSettings)(s.X.CAMERA_CATEGORY, {
        section: c.nc_.VOICE,
        subsection: u.Ss,
        analyticsLocations: t
      }), (0, o.A)(e, e === c.BRT.POPOUT)
    },
    icon: i.Zes,
    leadingAccessory: {
      type: "icon",
      icon: i.Zes
    }
  })
}
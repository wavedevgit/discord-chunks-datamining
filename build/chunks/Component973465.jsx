/** Chunk was on web.js **/
/** chunk id: 973465, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk670863 = require("./670863.jsx"),
  Chunk72897 = require("./72897.js"),
  Chunk988306 = require("./988306.js"),
  Chunk131951 = require("./131951.js"),
  Chunk626135 = require("./626135.js"),
  Chunk106388 = require("./106388.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function m() {
  let e = (0, i.e7)([c.Z], () => c.Z.isVideoAvailable()),
    {
      id: t
    } = (0, s.p6)(p.h7.VIDEO_INPUT),
    {
      analyticsLocations: n
    } = (0, a.ZP)();
  return (0, r.jsx)(o.j, {
    label: _.intl.string(_.t.FsQ3OR),
    deviceType: p.h7.VIDEO_INPUT,
    location: "UserSettingsCameraSelect",
    isDisabled: !e,
    showAllDevices: true,
    helperText: (0, l.O)() ? _.intl.format(_.t.aJYgRt, {
      onCameraSettingsClick: () => {
        d.Z.setState({
          previewEnabled: false
        }), window.open((0, l.u)(t)), u.default.track(f.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, {
          location_stack: n
        })
      }
    }) : true
  })
}
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
  let e = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.isVideoAvailable()),
    {
      id: t
    } = (0, Chunk72897.p6)(Chunk65154.h7.VIDEO_INPUT),
    {
      analyticsLocations: n
    } = (0, Chunk906732.ZP)();
  return (0, Chunk54381.jsx)(Chunk670863.j, {
    label: Chunk388032.intl.string(Chunk388032.t.FsQ3OR),
    deviceType: Chunk65154.h7.VIDEO_INPUT,
    location: "UserSettingsCameraSelect",
    isDisabled: !module,
    showAllDevices: true,
    helperText: (0, Chunk988306.O)() ? Chunk388032.intl.format(Chunk388032.t.aJYgRt, {
      onCameraSettingsClick: () => {
        Chunk106388.Z.setState({
          previewEnabled: false
        }), window.open((0, Chunk988306.u)(exports)), Chunk626135.default.track(Chunk981631.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, {
          location_stack: require
        })
      }
    }) : true
  })
}
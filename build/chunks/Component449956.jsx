/** Chunk was on 4670 **/
/** chunk id: 449956, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk625841 = require("./625841.jsx"),
  Chunk74848 = require("./74848.js"),
  Chunk204050 = require("./204050.js"),
  Chunk430452 = require("./430452.js"),
  Chunk954571 = require("./954571.js"),
  Chunk948641 = require("./948641.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");

function _() {
  let e = (0, l.bG)([o.A], () => o.A.isVideoAvailable()),
    {
      id: t
    } = (0, a.x5)(A.oh.VIDEO_INPUT),
    {
      analyticsLocations: i
    } = (0, s.Ay)();
  return (0, n.jsx)(r.U, {
    label: S.intl.string(S.t.FsQ3OR),
    deviceType: A.oh.VIDEO_INPUT,
    location: "UserSettingsCameraSelect",
    isDisabled: !e,
    showAllDevices: true,
    helperText: (0, u.p)() ? S.intl.format(S.t.aJYgRt, {
      onCameraSettingsClick: () => {
        T.A.setState({
          previewEnabled: false
        }), window.open((0, u.i)(t)), d.default.track(c.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, {
          location_stack: i
        })
      }
    }) : true
  })
}
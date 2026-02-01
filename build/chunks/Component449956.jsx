/** Chunk was on 30485 **/
/** chunk id: 449956, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  A: () => E
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

function E() {
  let t = (0, l.bG)([o.A], () => o.A.isVideoAvailable()),
    {
      id: e
    } = (0, u.x5)(S.oh.VIDEO_INPUT),
    {
      analyticsLocations: i
    } = (0, s.Ay)();
  return (0, n.jsx)(r.U, {
    label: c.intl.string(c.t.FsQ3OR),
    deviceType: S.oh.VIDEO_INPUT,
    location: "UserSettingsCameraSelect",
    isDisabled: !t,
    showAllDevices: true,
    helperText: (0, a.p)() ? c.intl.format(c.t.aJYgRt, {
      onCameraSettingsClick: () => {
        T.A.setState({
          previewEnabled: false
        }), window.open((0, a.i)(e)), d.default.track(A.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, {
          location_stack: i
        })
      }
    }) : true
  })
}
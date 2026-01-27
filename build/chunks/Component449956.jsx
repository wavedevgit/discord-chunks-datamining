/** Chunk was on 60667 **/
/** chunk id: 449956, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g() {
  let e = (0, i.bG)([c.A], () => c.A.isVideoAvailable()),
    {
      id: t
    } = (0, a.x5)(p.oh.VIDEO_INPUT),
    {
      analyticsLocations: n
    } = (0, l.Ay)();
  return (0, r.jsx)(s.U, {
    label: m.intl.string(m.t.FsQ3OR),
    deviceType: p.oh.VIDEO_INPUT,
    location: "UserSettingsCameraSelect",
    isDisabled: !e,
    showAllDevices: true,
    helperText: (0, o.p)() ? m.intl.format(m.t.aJYgRt, {
      onCameraSettingsClick: () => {
        u.A.setState({
          previewEnabled: false
        }), window.open((0, o.i)(t)), d.default.track(_.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, {
          location_stack: n
        })
      }
    }) : true
  })
}
/** Chunk was on 24255 **/
/** chunk id: 540650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk659580 = require("./659580.jsx"),
  Chunk875527 = require("./875527.js"),
  Chunk306609 = require("./306609.jsx");

function o(e) {
  let {
    onClose: t,
    onInteraction: n,
    location: o,
    overlayLimitedInteraction: u = false
  } = e;
  return (0, i.Hu)({
    location: o,
    autoTrackExposure: true
  }) ? (0, r.jsx)(a.l, {
    wide: true,
    showOutputDevices: true,
    onSettingsButtonClick: t,
    showSearchBar: !u
  }) : (0, r.jsx)(l.default, {
    onClose: t,
    renderInputDevices: true,
    renderOutputDevices: true,
    renderInputModes: true,
    renderInputVolume: true,
    renderOutputVolume: true,
    renderDeafen: true,
    minimal: true,
    onInteraction: n
  })
}
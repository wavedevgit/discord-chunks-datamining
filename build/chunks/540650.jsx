/** Chunk was on web.js **/
/** chunk id: 540650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk659580 = require("./659580.js"),
  Chunk875527 = require("./875527.js"),
  Chunk306609 = require("./306609.jsx");

function s(e) {
  let {
    onClose: t,
    onInteraction: n,
    location: s,
    overlayLimitedInteraction: l = false
  } = e;
  return (0, o.Hu)({
    location: s,
    autoTrackExposure: true
  }) ? <a.l wide={true} showOutputDevices={true} onSettingsButtonClick={t} showSearchBar={!l} /> : <i.default onClose={t} renderInputDevices={true} renderOutputDevices={true} renderInputModes={true} renderInputVolume={true} renderOutputVolume={true} renderDeafen={true} minimal={true} onInteraction={n} />
}
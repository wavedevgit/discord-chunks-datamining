/** Chunk was on 30042 **/
/** chunk id: 326279, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Gl: () => l,
  Wz: () => o,
  mo: () => a,
  oI: () => r
});
var Chunk570140 = require("./570140.js");

function a(e, t, n) {
  i.Z.dispatch({
    type: "CONNECTED_DEVICE_SWITCH",
    displayName: e,
    connectedDevicePreference: t,
    location: n
  })
}

function o(e) {
  i.Z.dispatch({
    type: "CONNECTED_DEVICE_DONT_SWITCH",
    displayName: e
  })
}

function l(e) {
  i.Z.dispatch({
    type: "CONNECTED_DEVICE_IGNORE",
    displayName: e
  })
}

function r() {
  Chunk570140.Z.dispatch({
    type: "CONNECTED_DEVICE_NEVER_SHOW_MODAL"
  })
}
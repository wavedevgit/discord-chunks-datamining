/** Chunk was on 30042 **/
/** chunk id: 369183, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Gl: () => r,
  Wz: () => l,
  mo: () => i
});
var Chunk570140 = require("./570140.js");

function i(e, t, n) {
  a.Z.dispatch({
    type: "CONNECTED_DEVICE_SWITCH",
    displayName: e,
    connectedDevicePreference: t,
    location: n
  })
}

function l(e) {
  a.Z.dispatch({
    type: "CONNECTED_DEVICE_DONT_SWITCH",
    displayName: e
  })
}

function r(e) {
  a.Z.dispatch({
    type: "CONNECTED_DEVICE_IGNORE",
    displayName: e
  })
}
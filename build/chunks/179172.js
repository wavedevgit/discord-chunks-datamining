/** Chunk was on 68386 **/
/** chunk id: 179172, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BG: () => r,
  TO: () => i,
  mk: () => l
});
var Chunk73153 = require("./73153.js");

function i(e, t, n) {
  a.h.dispatch({
    type: "CONNECTED_DEVICE_SWITCH",
    displayName: e,
    connectedDevicePreference: t,
    location: n
  })
}

function l(e) {
  a.h.dispatch({
    type: "CONNECTED_DEVICE_DONT_SWITCH",
    displayName: e
  })
}

function r(e) {
  a.h.dispatch({
    type: "CONNECTED_DEVICE_IGNORE",
    displayName: e
  })
}
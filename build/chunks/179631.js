/** Chunk was on web.js **/
/** chunk id: 179631, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  getDeviceState: () => a,
  logger: () => o
});
var Chunk710845 = require("./710845.js"),
  Chunk342825 = require("./342825.js");
let o = new Chunk710845.Z("native/DeviceState.tsx");

function a() {
  let {
    fallback: e
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {
    fallback: true
  };
  return module ? Promise.resolve(Chunk342825.f) : Promise.reject("Cannot get device state on web")
}
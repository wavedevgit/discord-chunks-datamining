/** Chunk was on web.js **/
/** chunk id: 82193, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  getDeviceState: () => s,
  logger: () => a
});
var Chunk626584 = require("./626584.js"),
  Chunk817476 = require("./817476.js");
let a = new Chunk626584.A("native/DeviceState.tsx");

function s() {
  let {
    fallback: e
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {
    fallback: true
  };
  return e ? Promise.resolve(i.t) : Promise.reject("Cannot get device state on web")
}
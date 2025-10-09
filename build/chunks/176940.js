/** Chunk was on 4093 **/
/** chunk id: 176940, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => r
}), require("./388685.js");
var Chunk131951 = require("./131951.js");

function r() {
  return Object.entries(Chunk131951.Z.getVideoDevices()).map(e => {
    let [n, t] = e;
    return {
      id: "camera:" + t.id,
      name: t.name,
      url: ""
    }
  })
}
/** Chunk was on 46746 **/
/** chunk id: 176940, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk131951 = require("./131951.js");

function i() {
  return Object.entries(Chunk131951.Z.getVideoDevices()).map(e => {
    let [t, n] = e;
    return {
      id: "camera:" + n.id,
      name: n.name,
      url: ""
    }
  })
}
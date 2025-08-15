/** Chunk was on 31253 **/
/** chunk id: 223245, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk570140 = require("./570140.js");
let i = {
  setEnabled(e) {
    this.update({
      enabled: e
    })
  },
  update(e) {
    for (let t of Object.keys(e)) r.Z.dispatch({
      type: "STREAMER_MODE_UPDATE",
      key: t,
      value: e[t]
    })
  }
}
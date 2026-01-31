/** Chunk was on 61222 **/
/** chunk id: 55619, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js");
var Chunk73153 = require("./73153.js");
let i = {
  setEnabled(e) {
    this.update({
      enabled: e
    })
  },
  update(e) {
    for (let t of Object.keys(e)) r.h.dispatch({
      type: "STREAMER_MODE_UPDATE",
      key: t,
      value: e[t]
    })
  }
}
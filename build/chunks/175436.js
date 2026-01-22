/** Chunk was on 21738 **/
/** chunk id: 175436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk334595 = require("./334595.jsx"),
  Chunk837921 = require("./837921.js"),
  Chunk90924 = require("./90924.js"),
  Chunk629471 = require("./629471.js");
let s = {
  [require("./652215.js").e$_.ENCOURAGE_HW_ACCELERATION]: {
    validation: e => (0, a.A)(e),
    handler(e) {
      let {
        socket: t
      } = e;
      (0, l.lG)(t.transport);
      let n = t.application.id;
      if (null != n) return (0, r.A)(n), {
        enabled: i.Ay.getEnableHardwareAcceleration()
      }
    }
  }
}
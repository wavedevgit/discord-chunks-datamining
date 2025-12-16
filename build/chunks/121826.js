/** Chunk was on 1272 **/
/** chunk id: 121826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk230487 = require("./230487.jsx"),
  Chunk998502 = require("./998502.js"),
  Chunk914946 = require("./914946.js"),
  Chunk452426 = require("./452426.js");
let o = {
  [require("./981631.js").Etm.ENCOURAGE_HW_ACCELERATION]: {
    validation: e => (0, a.Z)(e),
    handler(e) {
      let {
        socket: t
      } = e;
      (0, l.bu)(t.transport);
      let n = t.application.id;
      if (null != n) return (0, r.Z)(n), {
        enabled: i.ZP.getEnableHardwareAcceleration()
      }
    }
  }
}
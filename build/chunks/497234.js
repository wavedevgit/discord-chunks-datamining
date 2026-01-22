/** Chunk was on web.js **/
/** chunk id: 497234, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk724122 = require("./724122.js"),
  Chunk69435 = require("./69435.jsx");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c extends Chunk439372.A {
  constructor(...e) {
    super(...e), l(this, "handlePostConnectionOpen", () => {
      if (!(0, i.isWeb)())
        if ((0, s.W)("NegativeHardwareAccelerationExperimentManager")) a.Ay.setSetting("enableHardwareAcceleration", true);
        else {
          let e = (0, o.yW)();
          a.Ay.setSetting("enableHardwareAcceleration", e)
        }
    }), l(this, "actions", {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen
    })
  }
}
let u = new c
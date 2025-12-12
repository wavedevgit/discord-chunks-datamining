/** Chunk was on web.js **/
/** chunk id: 851862, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk947851 = require("./947851.js"),
  Chunk64914 = require("./64914.jsx");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c extends Chunk147913.Z {
  constructor(...e) {
    super(...e), l(this, "handlePostConnectionOpen", () => {
      if (!(0, i.isWeb)())
        if ((0, a.Y)("NegativeHardwareAccelerationExperimentManager")) o.ZP.setSetting("enableHardwareAcceleration", true);
        else {
          let e = (0, s.fD)();
          o.ZP.setSetting("enableHardwareAcceleration", e)
        }
    }), l(this, "actions", {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen
    })
  }
}
let u = new c
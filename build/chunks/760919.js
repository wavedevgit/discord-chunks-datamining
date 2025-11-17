/** Chunk was on 23032 **/
/** chunk id: 760919, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk665352 = require("./665352.js"),
  Chunk99978 = require("./99978.js"),
  Chunk629990 = require("./629990.js"),
  Chunk856308 = require("./856308.js");
class i extends Chunk665352.Z {
  constructor(e) {
    e.coords || (e.coords = {
      r: {
        range: [0, 1],
        name: "Red"
      },
      g: {
        range: [0, 1],
        name: "Green"
      },
      b: {
        range: [0, 1],
        name: "Blue"
      }
    }), e.base || (e.base = s.Z), e.toXYZ_M && e.fromXYZ_M && (e.toBase ??= t => {
      let r = (0, n.Z)(e.toXYZ_M, t);
      return this.white !== this.base.white && (r = (0, o.ZP)(this.white, this.base.white, r)), r
    }, e.fromBase ??= t => (t = (0, o.ZP)(this.base.white, this.white, t), (0, n.Z)(e.fromXYZ_M, t))), e.referred ??= "display", super(e)
  }
}
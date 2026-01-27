/** Chunk was on web.js **/
/** chunk id: 414525, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => l
}), require("./734808.js"), require("./896048.js"), require("./321073.js"), require("./65821.js");
var Chunk852015 = require("./852015.js"),
  Chunk144367 = require("./144367.js"),
  Chunk428420 = require("./428420.js"),
  Chunk324281 = require("./324281.js");
class s extends Chunk324281.G {
  create(e) {
    let t = {
      colors: [],
      angle: 0
    };
    return globalThis.Object.defineProperty(t, a.$, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.x)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let a = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          a.colors.push(e.string());
          break;
        case 2:
          a.angle = e.float();
          break;
        default:
          let o = n.readUnknownField;
          if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== o && (true === o ? r.f$.onRead : o)(this.typeName, a, t, i, s)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    for (let n = 0; n < e.colors.length; n++) t.tag(1, r.O0.LengthDelimited).string(e.colors[n]);
    0 !== e.angle && t.tag(2, r.O0.Bit32).float(e.angle);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.f$.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.Gradient", [{
      no: 1,
      name: "colors",
      kind: "scalar",
      repeat: 2,
      T: 9
    }, {
      no: 2,
      name: "angle",
      kind: "scalar",
      T: 2
    }])
  }
}
let l = new s
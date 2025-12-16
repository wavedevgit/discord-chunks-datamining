/** Chunk was on web.js **/
/** chunk id: 7883, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => l
}), require("./980754.js"), require("./388685.js"), require("./539854.js"), require("./415506.js");
var Chunk230367 = require("./230367.js"),
  Chunk320215 = require("./320215.js"),
  Chunk240773 = require("./240773.js"),
  Chunk495852 = require("./495852.js");
class s extends Chunk495852.C {
  create(e) {
    let t = {
      colors: [],
      angle: 0
    };
    return globalThis.Object.defineProperty(t, a.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
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
          false !== o && (true === o ? r.z.onRead : o)(this.typeName, a, t, i, s)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    for (let n = 0; n < e.colors.length; n++) t.tag(1, r.TD.LengthDelimited).string(e.colors[n]);
    0 !== e.angle && t.tag(2, r.TD.Bit32).float(e.angle);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
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
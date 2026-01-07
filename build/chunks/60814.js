/** Chunk was on web.js **/
/** chunk id: 60814, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => l
}), require("./980754.js"), require("./388685.js"), require("./415506.js");
var Chunk230367 = require("./230367.js"),
  Chunk320215 = require("./320215.js"),
  Chunk240773 = require("./240773.js"),
  Chunk495852 = require("./495852.js");
class s extends Chunk495852.C {
  create(e) {
    let t = {
      lightUrl: "",
      darkUrl: "",
      lightStaticUrl: "",
      darkStaticUrl: ""
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
          a.lightUrl = e.string();
          break;
        case 2:
          a.darkUrl = e.string();
          break;
        case 3:
          a.lightStaticUrl = e.string();
          break;
        case 4:
          a.darkStaticUrl = e.string();
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
    "" !== e.lightUrl && t.tag(1, r.TD.LengthDelimited).string(e.lightUrl), "" !== e.darkUrl && t.tag(2, r.TD.LengthDelimited).string(e.darkUrl), "" !== e.lightStaticUrl && t.tag(3, r.TD.LengthDelimited).string(e.lightStaticUrl), "" !== e.darkStaticUrl && t.tag(4, r.TD.LengthDelimited).string(e.darkStaticUrl);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.ThemeAwareAsset", [{
      no: 1,
      name: "light_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "dark_url",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "light_static_url",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "dark_static_url",
      kind: "scalar",
      T: 9
    }])
  }
}
let l = new s
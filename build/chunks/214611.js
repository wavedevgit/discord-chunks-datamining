/** Chunk was on web.js **/
/** chunk id: 214611, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => l
}), require("./980754.js"), require("./388685.js"), require("./415506.js");
var Chunk230367 = require("./230367.js"),
  Chunk320215 = require("./320215.js"),
  Chunk240773 = require("./240773.js"),
  Chunk495852 = require("./495852.js");
class s extends Chunk495852.C {
  create(e) {
    let t = {
      badgeLabel: "",
      acknowledgedBadgeLabel: ""
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let o = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          o.badgeLabel = e.string();
          break;
        case 2:
          o.acknowledgedBadgeLabel = e.string();
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let s = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, o, t, i, s)
      }
    }
    return o
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.badgeLabel && t.tag(1, r.TD.LengthDelimited).string(e.badgeLabel), "" !== e.acknowledgedBadgeLabel && t.tag(2, r.TD.LengthDelimited).string(e.acknowledgedBadgeLabel);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.PremiumTab", [{
      no: 1,
      name: "badge_label",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "acknowledged_badge_label",
      kind: "scalar",
      T: 9
    }])
  }
}
let l = new s